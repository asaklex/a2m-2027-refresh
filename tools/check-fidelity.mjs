// Fidelity harness: canonicalizes the rendered DOM (from the browser) and
// the archived snapshots with the SAME rules, then reports line diffs.
//
//   node tools/check-fidelity.mjs snapshot   # canonicalize snapshots -> /tmp/a2m-rendered/*.expected.txt
//   node tools/check-fidelity.mjs diff       # diff rendered vs expected
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { parseDOM } from 'htmlparser2'

export const ROUTES = [
  '/en',
  '/en/about',
  '/en/program',
  '/en/program/ministerial-roundtable',
  '/en/program/honorary-country',
  '/en/program/women-in-mining',
  '/en/program/investors-breakfast',
  '/en/program/networking',
  '/en/exhibit-sponsor',
  '/en/partner',
  '/en/plan-your-visit',
  '/en/news',
  '/en/sitemap-page',
]

export const fileFor = (route) => route.replace(/^\//, '').replace(/\//g, '_') + '.html'

// Canonicalizer shared between the browser (real DOM) and snapshots
// (htmlparser2 DOM). Must stay in sync — edit both copies together.
export const CANONICALIZER_SOURCE = String(function canon(root, isNodeDom) {
  const SKIP_TAGS = new Set(['template', 'script', 'style', 'link', 'meta', 'title'])
  const DROP_ATTRS = new Set(['data-radix-collection-item', 'data-dgst', 'data-discover'])
  const DROP_CLASS_TOKENS = new Set(['a2m-kpi-on', 'lucide-alarge-small', 'clone-reveal'])
  const out = []
  const attrsOf = (el) => (isNodeDom ? Object.entries(el.attribs ?? {}).map(([name, value]) => ({ name: name.toLowerCase(), value })) : Array.from(el.attributes).map((a) => ({ name: a.name.toLowerCase(), value: a.value })))
  const childrenOf = (el) => (isNodeDom ? el.children ?? [] : Array.from(el.childNodes))
  const typeOf = (n) => (isNodeDom ? n.type : n.nodeType === 3 ? 'text' : n.nodeType === 8 ? 'comment' : 'tag')
  const nameOf = (n) => (isNodeDom ? n.name : n.nodeName ? n.nodeName.toLowerCase() : '')

  const normAttrs = (el) => {
    const parts = []
    for (const { name, value } of attrsOf(el)) {
      if (DROP_ATTRS.has(name)) continue
      if (name === 'id' || name === 'aria-controls' || name === 'aria-labelledby') { parts.push(name + '=~'); continue }
      if (name === 'class') {
        const tokens = value.trim().split(/\s+/).filter((t) => t && !DROP_CLASS_TOKENS.has(t))
        if (tokens.length) parts.push('class=' + tokens.sort().join(' '))
        continue
      }
      if (name === 'style') {
        let decls = value
          .split(';')
          .map((s) => s.trim())
          .filter(Boolean)
          .filter((d) => !/^(transform|transition|animation-duration|outline|-webkit-mask-image):/i.test(d))
          .flatMap((d) => (d.toLowerCase().startsWith('inset:') ? ['bottom:0', 'left:0', 'right:0', 'top:0'] : [d]))
          .map((d) =>
            d
              .replace(/\s*:\s*/, ':')
              .replace(/,\s+/g, ',')
              .replace(/\brgba?\(([^)]*)\)/gi, (m, args) => {
                const parts2 = args.split(',').map((p) => p.trim())
                if (parts2.length === 3) parts2.push('1')
                return 'rgba(' + parts2.join(',') + ')'
              })
              .replace(/([:(,])\.(\d)/g, '$10.$2')
              .replace(/:0px\b/g, ':0'),
          )
        if (decls.length) parts.push('style=' + decls.sort().join(';'))
        continue
      }
      // Radix SSR ships every trigger at tabindex -1; React ports use 0 for
      // the active tab — equivalent behaviour, so don't compare on tabs.
      if (name === 'tabindex') {
        const role = isNodeDom ? null : el.getAttribute && el.getAttribute('role')
        const roleN = isNodeDom ? ((el.attribs ?? {}).role ?? null) : role
        if (roleN === 'tab') continue
      }
      if (name === 'srcset') { parts.push('srcset=' + value.split(',').map((s) => s.trim().replace(/\s+/g, ' ')).join(', ')); continue }
      if (name === 'value' && value === '') continue
      if (name === 'hidden' && value === '') { parts.push('hidden'); continue }
      parts.push(name + '=' + value.replace(/\s+/g, ' '))
    }
    return parts.sort().join(' ')
  }

  const mergedChildren = (node) => {
    // Coalesce text runs split by comments/streaming markers into plain
    // { text } wrappers; tags pass through unchanged.
    const kids = []
    for (const child of childrenOf(node)) {
      const type = typeOf(child)
      if (type === 'text') {
        const data = isNodeDom ? child.data : child.nodeValue
        const last = kids[kids.length - 1]
        if (last && last.__merged) last.text += data
        else kids.push({ __merged: true, text: data })
      } else if (type !== 'comment') {
        kids.push(child)
      }
    }
    return kids
  }

  const walk = (node, depth) => {
    if (node.__merged) {
      const text = node.text.replace(/\s+/g, ' ').trim()
      if (text) out.push('  '.repeat(depth) + 'T ' + text)
      return
    }
    const type = typeOf(node)
    if (type !== 'tag') return
    const tag = nameOf(node)
    if (SKIP_TAGS.has(tag)) return
    // The React mount point is an artifact, not site markup.
    if (tag === 'div' && !isNodeDom && node.id === 'root') {
      for (const child of childrenOf(node)) walk(child, depth)
      return
    }
    const attrs = normAttrs(node)
    out.push('  '.repeat(depth) + '<' + tag + (attrs ? ' ' + attrs : '') + '>')
    for (const child of mergedChildren(node)) walk(child, depth + 1)
    out.push('  '.repeat(depth) + '</' + tag + '>')
  }
  // Walk the root's children only — the root element itself (body, mount
  // wrapper) is an artifact of the respective side.
  for (const child of childrenOf(root)) walk(child, 0)
  return out.join('\n')
})

const isMain = process.argv[1] && import.meta.url === (await import('node:url')).pathToFileURL(resolve(process.argv[1])).href
if (isMain) {
  const mode = process.argv[2] ?? 'snapshot'
  const outDir = '/tmp/a2m-rendered'
  mkdirSync(outDir, { recursive: true })

  if (mode === 'snapshot') {
    const canon = eval('(' + CANONICALIZER_SOURCE + ')')
    for (const route of ROUTES) {
      const html = readFileSync(resolve('/tmp/a2m-snapshots', fileFor(route)), 'utf8')
      const dom = parseDOM(html, { lowerCaseTags: true, lowerCaseAttributeNames: true })
      const bodyLike = { type: 'tag', name: 'body', children: dom, attribs: {} }
      writeFileSync(resolve(outDir, route.replace(/^\//, '').replace(/\//g, '_') + '.expected.txt'), canon(bodyLike, true) + '\n')
    }
    console.log('snapshots canonicalized:', ROUTES.length)
  }

  if (mode === 'diff') {
    let clean = 0
    const report = []
    for (const route of ROUTES) {
      const base = route.replace(/^\//, '').replace(/\//g, '_')
      let rendered = ''
      try {
        rendered = readFileSync(resolve(outDir, base + '.actual.txt'), 'utf8')
      } catch {
        report.push(`${route}: MISSING rendered dump`)
        continue
      }
      const expected = readFileSync(resolve(outDir, base + '.expected.txt'), 'utf8')
      if (rendered === expected) { clean++; continue }
      const a = expected.split('\n')
      const b = rendered.split('\n')
      const diffs = []
      let i = 0, j = 0
      while ((i < a.length || j < b.length) && diffs.length < 400) {
        if (a[i] === b[j]) { i++; j++; continue }
        // look ahead for realignment
        const aNext = a.indexOf(b[j], i)
        const bNext = b.indexOf(a[i], j)
        if (aNext !== -1 && (bNext === -1 || aNext - i <= bNext - j)) {
          for (let k = i; k < Math.min(aNext, i + 40); k++) diffs.push('- ' + a[k])
          i = aNext
        } else if (bNext !== -1) {
          for (let k = j; k < Math.min(bNext, j + 40); k++) diffs.push('+ ' + b[k])
          j = bNext
        } else { diffs.push('- ' + a[i]); diffs.push('+ ' + b[j]); i++; j++ }
      }
      report.push(`\n===== ${route} (${diffs.length} diff lines) =====\n` + diffs.slice(0, 120).join('\n'))
    }
    console.log(`\n${clean}/${ROUTES.length} pages byte-identical after normalization`)
    console.log(report.join('\n'))
  }
}
