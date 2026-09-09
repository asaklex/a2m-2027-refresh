// snapshot-to-jsx.mjs — migrates the archived SSR snapshots of the A2M 2027
// reference site into real JSX page components.
//
//   node tools/snapshot-to-jsx.mjs <snapshot-html-dir> <src-pages-dir>
//
// The snapshots are fully rendered HTML captured from the original Next.js
// deployment (the site itself is gone). This tool parses each route's <main>
// content and emits readable JSX, substituting interactive patterns with the
// project's React components:
//   - tablists with SSR panels        -> <Tabs>
//   - news filter tablists + grid    -> <NewsFilter>
//   - home hero carousel section     -> <HeroCarousel />
//   - home persona tablist           -> <PersonaTabs />
//   - home KPI band                  -> <KpiBand items={…} />
//   - "On this page" bars            -> <OnThisPageNav items={…} />
//   - ministerial accordion          -> <Accordion items={…} />
//   - inert capture forms            -> <FakeForm>
//   - about contact form mount       -> <ContactForm />
// Generated pages are faithful to the source markup.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { resolve, join } from 'node:path'
import { parseDOM } from 'htmlparser2'

const [, , inDirArg, outDirArg] = process.argv
const inDir = resolve(inDirArg ?? '/tmp/a2m-snapshots')
const outDir = resolve(outDirArg ?? 'src/pages')

// ---------------------------------------------------------------- utilities

const ATTR_MAP = {
  class: 'className', for: 'htmlFor', tabindex: 'tabIndex', readonly: 'readOnly',
  maxlength: 'maxLength', minlength: 'minLength', colspan: 'colSpan', rowspan: 'rowSpan',
  autocomplete: 'autoComplete', autofocus: 'autoFocus', autoplay: 'autoPlay',
  crossorigin: 'crossOrigin', datetime: 'dateTime', enctype: 'encType',
  formaction: 'formAction', frameborder: 'frameBorder', hreflang: 'hrefLang',
  novalidate: 'noValidate', playsinline: 'playsInline', referrerpolicy: 'referrerPolicy',
  srcset: 'srcSet', srcdoc: 'srcDoc', usemap: 'useMap', accesskey: 'accessKey',
  contenteditable: 'contentEditable', spellcheck: 'spellCheck', inputmode: 'inputMode',
  ismap: 'isMap', allowfullscreen: 'allowFullScreen', fetchpriority: 'fetchPriority',
  'accept-charset': 'acceptCharset', 'http-equiv': 'httpEquiv',
  'stroke-width': 'strokeWidth', 'stroke-linecap': 'strokeLinecap', 'stroke-linejoin': 'strokeLinejoin',
  'stroke-dasharray': 'strokeDasharray', 'stroke-dashoffset': 'strokeDashoffset',
  'stroke-opacity': 'strokeOpacity', 'fill-opacity': 'fillOpacity', 'fill-rule': 'fillRule',
  'clip-rule': 'clipRule', 'clip-path': 'clipPath', 'font-family': 'fontFamily',
  'font-size': 'fontSize', 'font-weight': 'fontWeight', 'text-anchor': 'textAnchor',
  'dominant-baseline': 'dominantBaseline', 'xlink:href': 'xlinkHref',
  viewbox: 'viewBox', baseprofile: 'baseProfile', gradienttransform: 'gradientTransform',
  gradientunits: 'gradientUnits', markerend: 'markerEnd', markerstart: 'markerStart',
  textlength: 'textLength', spreadmethod: 'spreadMethod', startoffset: 'startOffset',
  stopcolor: 'stopColor', stopopacity: 'stopOpacity', patternunits: 'patternUnits',
}
const BOOLEAN_ATTRS = new Set(['hidden', 'open', 'selected', 'checked', 'disabled', 'multiple', 'required', 'autofocus', 'controls', 'loop', 'muted', 'async', 'defer', 'default', 'reversed', 'nomodule'])
const VOID_TAGS = new Set(['img', 'input', 'br', 'hr', 'path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'use', 'col', 'source', 'meta', 'link', 'area', 'base', 'embed', 'track', 'wbr', 'stop', 'ellipse'])

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: '\u00a0', copy: '©', reg: '®', trade: '™', hellip: '…', mdash: '—', ndash: '–', rsquo: '’', lsquo: '‘', ldquo: '“', rdquo: '”', middot: '·', bull: '•', deg: '°', euro: '€', pound: '£', times: '×' }
function decodeEntities(text) {
  return text.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z]+);/g, (whole, name) => {
    if (name[0] === '#') {
      const code = name[1] === 'x' || name[1] === 'X' ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10)
      return Number.isFinite(code) ? String.fromCodePoint(code) : whole
    }
    return ENTITIES[name] ?? whole
  })
}

const classNameOf = (el) => el.attribs?.class ?? ''
const hasClass = (el, name) => classNameOf(el).split(/\s+/).includes(name)
const childElements = (el) => (el.children ?? []).filter((c) => c.type === 'tag')
const textOf = (el) => {
  let out = ''
  for (const c of el.children ?? []) {
    if (c.type === 'text') out += c.data
    else if (c.type === 'tag') out += textOf(c)
  }
  return decodeEntities(out).replace(/\s+/g, ' ').trim()
}
const findBy = (el, pred) => {
  for (const c of el.children ?? []) {
    if (c.type !== 'tag') continue
    if (pred(c)) return c
    const deep = findBy(c, pred)
    if (deep) return deep
  }
  return null
}

// ---------------------------------------------------------------- JSX emitter

class Emitter {
  constructor() {
    this.lines = []
    this.imports = new Set()
    this.substitutions = null // (el, emitter) => string | null
  }

  emit(children, indent = 0) {
    for (const node of children) this.emitNode(node, indent)
  }

  emitNode(node, indent) {
    if (node.type === 'text') { this.emitText(node, indent); return }
    if (node.type === 'comment' || node.type === 'directive') return
    if (node.type !== 'tag') return
    if (node.name === 'template') return // Next bailout placeholders
    this.emitElement(node, indent)
  }

  emitText(node, indent) {
    const decoded = decodeEntities(node.data)
    if (!decoded.trim()) {
      if (/[ \t]/.test(decoded)) this.lines.push(`${'  '.repeat(indent)}{' '}`)
      return
    }
    const escaped = decoded.replace(/[{}]/g, (ch) => `{'${ch}'}`).replace(/</g, '&lt;').replace(/\n\s*/g, ' ')
    this.lines.push(`${'  '.repeat(indent)}${escaped.trim()}`)
  }

  attrsOf(el) {
    const parts = []
    for (const [rawName, rawValue] of Object.entries(el.attribs ?? {})) {
      let name = ATTR_MAP[rawName] ?? rawName
      if (/^(data-|aria-|xmlns)/.test(rawName)) name = rawName
      if (rawName === 'style') { parts.push(this.styleAttr(rawValue)); continue }
      if (rawName === 'class') { parts.push(`className="${rawValue}"`); continue }
      if (BOOLEAN_ATTRS.has(rawName) && (rawValue === '' || rawValue === rawName)) {
        parts.push(name === rawName ? name : `${name}={true}`)
        continue
      }
      const value = decodeEntities(rawValue).replace(/"/g, '&quot;')
      // React types these attributes as numbers.
      const NUMERIC_ATTRS = new Set(['tabindex', 'colspan', 'rowspan', 'maxlength', 'minlength', 'size', 'rows', 'cols', 'span', 'aria-level', 'aria-valuenow', 'aria-posinset', 'aria-setsize'])
      if (NUMERIC_ATTRS.has(rawName) && /^-?\d+$/.test(value)) {
        parts.push(`${name}={${value}}`)
        continue
      }
      parts.push(`${name}="${value}"`)
    }
    return parts
  }

  styleAttr(value) {
    const entries = []
    for (const decl of value.split(';')) {
      const trimmed = decl.trim()
      if (!trimmed) continue
      const idx = trimmed.indexOf(':')
      const prop = trimmed.slice(0, idx).trim()
      const val = trimmed.slice(idx + 1).trim()
      const jsProp = prop.startsWith('--') ? `['${prop}']` : prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
      entries.push(`${jsProp}: '${val.replace(/'/g, "\\'")}'`)
    }
    return `style={{ ${entries.join(', ')} }}`
  }

  emitElement(el, indent) {
    const pad = '  '.repeat(indent)
    const tag = el.name

    // Route-specific component substitution.
    if (this.substitutions) {
      const sub = this.substitutions(el, this)
      if (sub !== null && sub !== undefined) {
        if (sub !== '') this.lines.push(pad + sub.replace(/\n/g, '\n' + pad))
        return
      }
    }

    let attrs = this.attrsOf(el)
    let renderTag = tag

    // Internal links -> react-router <Link>
    const href = el.attribs?.href
    if (tag === 'a' && href && href.startsWith('/en')) {
      this.imports.add("import { Link } from 'react-router-dom'")
      renderTag = 'Link'
      attrs = attrs.map((a) => (a.startsWith('href=') ? `to="${decodeEntities(href).replace(/"/g, '&quot;')}"` : a))
    }

    const attrStr = attrs.length ? ' ' + attrs.join(' ') : ''
    const kids = (el.children ?? []).filter((c) => ['tag', 'text', 'comment'].includes(c.type))
    if (!kids.length || VOID_TAGS.has(tag)) {
      this.lines.push(`${pad}<${renderTag}${attrStr} />`)
      return
    }
    this.lines.push(`${pad}<${renderTag}${attrStr}>`)
    this.emit(kids, indent + 1)
    this.lines.push(`${pad}</${renderTag}>`)
  }
}

const indentBlock = (text, spaces) => text.split('\n').map((l) => spaces + l).join('\n')
const q = (s) => JSON.stringify(s)

// ------------------------------------------------------------ substitutions

// --- tab machinery -----------------------------------------------------------

// Presentational attributes that vary between the active and inactive trigger
// variants; values are taken from the state reference tree.
const STATE_ATTRIBS = ['class', 'stroke', 'stroke-width', 'stroke-linecap', 'stroke-linejoin', 'fill']

/** Emits `structNodes` but overrides state-styled attributes with the
 *  positionally matching node from `twinNodes` (both trees come from the same
 *  component, so structure is identical). */
function emitParallel(structNodes, twinNodes, emitter, indent = 0) {
  const twinTags = (twinNodes ?? []).filter((n) => n.type === 'tag')
  let tagIndex = 0
  let textIndex = 0
  for (const node of structNodes) {
    if (node.type === 'text') {
      emitter.emitText(node, indent)
      textIndex++
      continue
    }
    if (node.type !== 'tag') { emitter.emitNode(node, indent); continue }
    const twin = twinTags[tagIndex]
    tagIndex++
    if (twin) {
      const original = node.attribs
      node.attribs = { ...original }
      for (const attr of STATE_ATTRIBS) {
        if (twin.attribs?.[attr] !== undefined) node.attribs[attr] = twin.attribs[attr]
        else if (attr !== 'class' || twin.attribs) delete node.attribs[attr]
      }
      emitter.emitElement(node, indent)
      node.attribs = original
    } else {
      emitter.emitElement(node, indent)
    }
  }
}

function findById(root, id) {
  return findBy(root, (n) => n.attribs?.id === id)
}

function nodeContains(node, target) {
  if (node === target) return true
  for (const c of node.children ?? []) {
    if (c.type === 'tag' && nodeContains(c, target)) return true
  }
  return false
}

/** True when every panel is reachable from `node`. */
const containsAll = (node, targets) => targets.every((t) => nodeContains(node, t))

// Generic tablist with SSR-rendered panels -> <Tabs>, emitted at the *minimal*
// wrapper: the nearest ancestor of the tablist that also contains all panels.
function tabsSubstitution(el, emitter) {
  if (el.name !== 'div' || el.attribs?.role === 'tablist' || el.attribs?.role === 'tab') return null
  const tablist = findBy(el, (n) => n.attribs?.role === 'tablist')
  if (!tablist) return null
  const triggers = childElements(tablist).filter((n) => n.attribs?.role === 'tab')
  if (triggers.length < 2) return null
  const panels = triggers.map((t) => findById(el, t.attribs?.['aria-controls'] ?? ''))
  if (panels.some((p) => !p)) return null
  if (!panels.every((p) => (p.children ?? []).some((c) => c.type === 'text' || c.type === 'tag'))) return null
  if (!triggers.every((t) => textOf(t).length > 0)) return null

  // Minimality: if any child of el still contains the tablist and all panels,
  // el is too high in the tree — wait for the walker to descend.
  for (const child of childElements(el)) {
    if (child !== tablist && child !== panels[0] && containsAll(child, [tablist, ...panels])) return null
  }

  // Panels may sit inside their own container div (sidebar layouts).
  const panelParent = panels.length === 1 ? panels[0] : commonParent(el, panels)
  const panelContainerClassName = panelParent && panelParent !== el ? classNameOf(panelParent) : null

  // The tablist may sit inside its own wrapper (timeline rails etc.).
  const wrapperChain = []
  let cursor = tablist
  while (cursor.parent && cursor.parent !== el) {
    wrapperChain.unshift(cursor.parent)
    cursor = cursor.parent
  }
  if (wrapperChain.length > 1) return null // deeper nesting not supported
  const listWrapperClassName = wrapperChain.length ? classNameOf(wrapperChain[0]) : null
  let listPreamble = null
  if (wrapperChain.length) {
    const preambleNodes = (wrapperChain[0].children ?? []).filter((c) => c.type === 'tag' && c !== tablist)
    if (preambleNodes.length) {
      const pre = new Emitter()
      pre.imports = emitter.imports
      pre.emit(preambleNodes, 0)
      listPreamble = '<>\n' + indentBlock(pre.lines.join('\n'), '  ') + '\n  </>'
    }
  }

  emitter.imports.add("import Tabs from '../components/ui/Tabs'")
  let out = '<Tabs\n'
  const wrapperClass = classNameOf(el)
  if (wrapperClass) out += `  wrapperClassName=${q(wrapperClass)}\n`
  if (el.attribs?.dir) out += `  wrapperDir=${q(el.attribs.dir)}\n`
  if (listWrapperClassName) out += `  listWrapperClassName=${q(listWrapperClassName)}\n`
  if (listPreamble) out += `  listPreamble={(\n${indentBlock(listPreamble, '    ')}\n  )}\n`
  if (tablist.attribs?.['aria-label']) out += `  listAriaLabel=${q(tablist.attribs['aria-label'])}\n`
  if (tablist.attribs?.['aria-orientation']) out += `  listAriaOrientation=${q(tablist.attribs['aria-orientation'])}\n`
  out += `  listClassName=${q(classNameOf(tablist))}\n`
  out += `  triggerClassActive=${q(classNameOf(triggers[0]))}\n`
  out += `  triggerClassInactive=${q(classNameOf(triggers[1] ?? triggers[0]))}\n`
  out += `  panelClassName=${q(classNameOf(panels[0]))}\n`
  if (panelContainerClassName) out += `  panelContainerClassName=${q(panelContainerClassName)}\n`
  out += '  tabs={[\n'

  const itemLines = triggers.map((trigger, i) => {
    const inactiveRef = triggers[1] ?? triggers[0]
    const a = new Emitter(); a.imports = emitter.imports
    emitParallel(trigger.children ?? [], triggers[0].children, a, 0)
    const inact = new Emitter(); inact.imports = emitter.imports
    emitParallel(trigger.children ?? [], inactiveRef.children, inact, 0)
    const p = new Emitter(); p.imports = emitter.imports; p.substitutions = null
    p.emit(panels[i].children ?? [], 0)
    return [
      '    {',
      '      triggerActive: (',
      '        <>',
      indentBlock(a.lines.join('\n'), '          '),
      '        </>',
      '      ),',
      '      triggerInactive: (',
      '        <>',
      indentBlock(inact.lines.join('\n'), '          '),
      '        </>',
      '      ),',
      '      panel: (',
      '        <>',
      indentBlock(p.lines.join('\n'), '          '),
      '        </>',
      '      ),',
      '    },',
    ].join('\n')
  })
  out += itemLines.join('\n')
  out += '\n  ]}\n/>'
  return out
}

function commonParent(root, nodes) {
  const ancestorsOf = (node) => {
    const chain = []
    let cur = node
    while (cur && cur !== root) {
      // walk up via a search from root
      const parent = findParentOf(root, cur)
      if (!parent) break
      chain.unshift(parent)
      cur = parent
    }
    return chain
  }
  const chains = nodes.map(ancestorsOf)
  let candidate = null
  for (let i = 0; i < chains[0].length; i++) {
    const at = chains[0][i]
    if (chains.every((ch) => ch[i] === at)) candidate = at
    else break
  }
  return candidate
}

function findParentOf(root, target) {
  for (const c of root.children ?? []) {
    if (c.type !== 'tag') continue
    if (c === target) return root
    const deep = findParentOf(c, target)
    if (deep) return deep
  }
  return null
}

// "On this page": sticky desktop bar + mobile FAB (FAB is dropped; the nav
// component renders both).
function onThisPageSubstitution(el, emitter) {
  if (el.name !== 'div') return null
  const cls = classNameOf(el)
  if (cls.includes('fixed') && cls.includes('bottom-4') && findBy(el, (n) => n.name === 'button' && n.attribs?.['aria-label'] === 'On this page')) {
    return '' // mobile FAB: covered by OnThisPageNav
  }
  const nav = findBy(el, (n) => n.name === 'nav' && n.attribs?.['aria-label'] === 'On this page')
  if (!nav) return null
  if (!cls.includes('sticky')) return null
  const links = childElements(nav).filter((c) => c.name === 'a')
  emitter.imports.add("import OnThisPageNav from '../components/OnThisPageNav'")
  const items = links.map((a) => `    { id: ${q(a.attribs?.['data-nav-id'] ?? (a.attribs?.href ?? '').slice(1))}, label: ${q(textOf(a))} },`).join('\n')
  return `<OnThisPageNav\n  items={[\n${items}\n  ]}\n/>`
}

// Inert capture forms -> <FakeForm>
function formSubstitution(el, emitter) {
  if (el.name !== 'form') return null
  const inner = new Emitter()
  inner.imports = emitter.imports
  inner.substitutions = emitter.substitutions
  inner.emit(el.children ?? [], 0)
  emitter.imports.add("import FakeForm from '../components/ui/FakeForm'")
  const cls = classNameOf(el)
  return `<FakeForm${cls ? ` className=${q(cls)}` : ''}>\n${indentBlock(inner.lines.join('\n'), '  ')}\n</FakeForm>`
}

// Home specifics
function homeSubstitution(el, emitter) {
  if (el.name !== 'section') return null
  if (el.attribs?.['aria-label'] === 'A2M 2027' && findBy(el, (n) => n.attribs?.['aria-roledescription'] === 'slide')) {
    emitter.imports.add("import HeroCarousel from '../components/HeroCarousel'")
    return '<HeroCarousel />'
  }
  if (findBy(el, (n) => n.attribs?.role === 'tablist') && textOf(el).includes('same room')) {
    emitter.imports.add("import PersonaTabs from '../components/PersonaTabs'")
    return '<PersonaTabs />'
  }
  if (findBy(el, (n) => hasClass(n, 'a2m-kpi-rule'))) {
    const html = serialized(el)
    const nums = [...html.matchAll(/a2m-kpi-num[^>]*>([^<]*)</g)].map((m) => decodeEntities(m[1]).trim())
    const labels = [...html.matchAll(/a2m-kpi-label[^>]*>([^<]*)</g)].map((m) => decodeEntities(m[1]).trim())
    const footnote = [...html.matchAll(/<p class="mt-8 text-center[^"]*"[^>]*>([^<]*)<\/p>/g)].map((m) => decodeEntities(m[1]).trim())[0] ?? ''
    emitter.imports.add("import KpiBand from '../components/KpiBand'")
    const items = nums.map((n, i) => `    { value: ${q(n)}, label: ${q(labels[i] ?? '')} },`).join('\n')
    return `<KpiBand\n  footnote=${q(footnote)}\n  items={[\n${items}\n  ]}\n/>`
  }
  return null
}

function serialized(el) {
  let out = ''
  const walk = (node) => {
    for (const c of node.children ?? []) {
      if (c.type === 'text') out += c.data
      else if (c.type === 'tag') {
        out += `<${c.name} class="${c.attribs?.class ?? ''}">`
        walk(c)
        out += `</${c.name}>`
      }
    }
  }
  walk(el)
  return out
}

// News filter: tablist whose panels were never rendered + the card grid that
// follows it (a sibling of the tablist's dir=ltr wrapper) -> <NewsFilter>
function newsSubstitution(el, emitter) {
  if (el.name !== 'div') return null
  const tablist = findBy(el, (n) => n.attribs?.role === 'tablist')
  if (!tablist) return null
  const grid = findBy(el, (n) => { const c = classNameOf(n); return c.includes('xl:grid-cols-4') && c.includes('gap-6') })
  if (!grid) return null
  // Only substitute at the minimal common ancestor of tabs and grid.
  for (const child of childElements(el)) {
    if (child !== grid && containsAll(child, [tablist, grid])) return null
  }
  const triggers = childElements(tablist).filter((n) => n.attribs?.role === 'tab')
  if (triggers.length < 2) return null
  const tabs = triggers.map((t) => {
    const raw = (t.attribs?.['aria-controls'] ?? 'all').split('-content-').pop() ?? 'all'
    return `    { value: ${q(raw === 'all' ? 'all' : raw.replace(/^topic:/, ''))}, label: ${q(textOf(t))} },`
  }).join('\n')
  const cards = childElements(grid).map((card) => {
    const meta = findBy(card, (n) => { const c = classNameOf(n); return c.includes('text-small') && c.includes('text-subtle') })
    const topic = meta ? (textOf(meta).match(/^([A-Za-z]+)\s*·/)?.[1] ?? '') : ''
    const cardEmitter = new Emitter()
    cardEmitter.imports = emitter.imports
    cardEmitter.emit([card], 0)
    return `    { topic: ${q(topic)}, node: (\n${indentBlock(cardEmitter.lines.join('\n'), '      ')}\n    ) },`
  }).join('\n')
  emitter.imports.add("import NewsFilter from '../components/NewsFilter'")
  const filter = `<NewsFilter\n  tabs={[\n${tabs}\n  ]}\n  cards={[\n${cards}\n  ]}\n/>`
  const wrapperClass = classNameOf(el)
  return wrapperClass ? `<div className=${q(wrapperClass)}>\n${indentBlock(filter, '  ')}\n</div>` : filter
}

// About: contact form mount grid (aside + dropped bailout template)
function aboutSubstitution(el, emitter) {
  if (el.name !== 'div') return null
  const cls = classNameOf(el)
  if (!cls.includes('lg:grid-cols-[340px_1fr]')) return null
  const aside = (el.children ?? []).find((c) => c.type === 'tag' && c.name === 'aside')
  if (!aside) return null
  emitter.imports.add("import ContactForm from '../components/ContactForm'")
  const asideEmitter = new Emitter()
  asideEmitter.imports = emitter.imports
  asideEmitter.emit([aside], 0)
  return `<div className=${q(cls)}>\n${indentBlock(asideEmitter.lines.join('\n'), '  ')}\n  <ContactForm />\n</div>`
}

// Ministerial roundtable accordion -> <Accordion>
function accordionSubstitution(el, emitter) {
  if (el.name !== 'div') return null
  const items = childElements(el).filter((c) => {
    const h3 = (c.children ?? []).find((k) => k.type === 'tag' && k.name === 'h3')
    return h3 && findBy(h3, (n) => n.name === 'button' && n.attribs?.['aria-expanded'] !== undefined)
  })
  if (!items.length) return null
  emitter.imports.add("import Accordion from '../components/ui/Accordion'")
  const containerClass = classNameOf(el)
  const itemLines = items.map((item) => {
    const trigger = findBy(item, (n) => n.name === 'button' && n.attribs?.['aria-expanded'] !== undefined)
    const region = findBy(item, (n) => n.attribs?.role === 'region')
    const t = new Emitter(); t.imports = emitter.imports; t.emit(trigger.children ?? [], 0)
    const p = new Emitter(); p.imports = emitter.imports; p.emit(region?.children ?? [], 0)
    const panelLines = p.lines.join('\n')
    return [
      '    {',
      `      itemClassName: ${q(classNameOf(item))},`,
      `      triggerClassName: ${q(classNameOf(trigger))},`,
      '      trigger: (',
      '        <>',
      indentBlock(t.lines.join('\n'), '          '),
      '        </>',
      '      ),',
      panelLines.trim()
        ? '      panel: (\n        <>\n' + indentBlock(panelLines, '          ') + '\n        </>\n      ),'
        : '      panel: null,',
      '    },',
    ].join('\n')
  }).join('\n')
  return `<Accordion${containerClass ? ` containerClassName=${q(containerClass)}` : ''}\n  items={[\n${itemLines}\n  ]}\n/>`
}

// ---------------------------------------------------------------- route table

const chain = (...fns) => (el, em) => {
  for (const fn of fns) {
    const out = fn(el, em)
    if (out !== null && out !== undefined) return out
  }
  return null
}
const standardChain = () => chain(onThisPageSubstitution, formSubstitution)

const PAGES = [
  { file: 'en.html', name: 'HomePage', substitutions: chain(homeSubstitution, tabsSubstitution, standardChain()) },
  { file: 'en_about.html', name: 'AboutPage', substitutions: chain(aboutSubstitution, tabsSubstitution, standardChain()) },
  { file: 'en_program.html', name: 'ProgramPage', substitutions: chain(tabsSubstitution, standardChain()) },
  { file: 'en_program_ministerial-roundtable.html', name: 'MinisterialRoundtablePage', substitutions: chain(accordionSubstitution, standardChain()) },
  { file: 'en_program_honorary-country.html', name: 'HonoraryCountryPage', substitutions: standardChain() },
  { file: 'en_program_women-in-mining.html', name: 'WomenInMiningPage', substitutions: standardChain() },
  { file: 'en_program_investors-breakfast.html', name: 'InvestorsBreakfastPage', substitutions: standardChain() },
  { file: 'en_program_networking.html', name: 'NetworkingPage', substitutions: standardChain() },
  { file: 'en_exhibit-sponsor.html', name: 'ExhibitSponsorPage', substitutions: standardChain() },
  { file: 'en_partner.html', name: 'PartnerPage', substitutions: standardChain() },
  { file: 'en_plan-your-visit.html', name: 'PlanYourVisitPage', substitutions: standardChain() },
  { file: 'en_news.html', name: 'NewsPage', substitutions: chain(newsSubstitution, standardChain()) },
  { file: 'en_sitemap-page.html', name: 'SitemapPage', substitutions: standardChain() },
]

// ---------------------------------------------------------------------- main

export function convertFragment(html, { substitutions = null } = {}) {
  const dom = parseDOM(html, { lowerCaseTags: true, lowerCaseAttributeNames: true })
  const stripClone = (node) => {
    if (node.attribs?.class) node.attribs.class = node.attribs.class.replace(/\bclone-reveal\b\s*/g, '').replace(/\s+/g, ' ').trim()
    for (const c of node.children ?? []) stripClone(c)
  }
  for (const node of dom) stripClone(node)
  const emitter = new Emitter()
  emitter.substitutions = substitutions
  emitter.emit(dom, 0)
  return { jsx: emitter.lines.join('\n'), imports: [...emitter.imports].sort() }
}

const isMain = process.argv[1] && import.meta.url === (await import('node:url')).pathToFileURL(resolve(process.argv[1])).href
if (isMain) {
  mkdirSync(outDir, { recursive: true })
  for (const page of PAGES) {
    const html = readFileSync(join(inDir, page.file), 'utf8')
    const dom = parseDOM(html, { lowerCaseTags: true, lowerCaseAttributeNames: true })
    const main = dom.find((n) => n.name === 'main')
    if (!main) throw new Error(`no <main> in ${page.file}`)

    // strip the old clone's clone-reveal helper class everywhere
    const stripClone = (node) => {
      if (node.attribs?.class) node.attribs.class = node.attribs.class.replace(/\bclone-reveal\b\s*/g, '').replace(/\s+/g, ' ').trim()
      for (const c of node.children ?? []) stripClone(c)
    }
    stripClone(main)

    const emitter = new Emitter()
    emitter.substitutions = page.substitutions
    const pageEnter = childElements(main)[0] // div.a2m-page-enter — rendered by the layout
    emitter.emit(childElements(pageEnter), 0)

    const body = emitter.lines.join('\n')
    const imports = [...emitter.imports].sort().join('\n')
    const out = `${imports ? imports + '\n\n' : ''}export default function ${page.name}() {\n  return (\n    <>\n${indentBlock(body, '  ')}\n    </>\n  )\n}\n`
    writeFileSync(join(outDir, `${page.name}.tsx`), out)
    console.log(`${page.name}.tsx  ${(out.length / 1024).toFixed(1)} kB`)
  }
  console.log('done.')
}
