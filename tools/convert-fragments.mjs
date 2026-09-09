// Converts standalone HTML fragments (header, footer, hero, persona panels,
// contact form) captured from the reference site into JSX, as raw material
// for the hand-written shell components.
//
//   node tools/convert-fragments.mjs
//
// Inputs are read from /tmp/a2m-snapshots (see README) and from the legacy
// clone's extracted client widgets; results land in /tmp/a2m-converted/.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { convertFragment } from './snapshot-to-jsx.mjs'

const SNAP = '/tmp/a2m-snapshots'
const OLD = '/Users/asaklex/dev/KOSSOKO/kossoko-africa-mining-montreal-2026'
const OUT = '/tmp/a2m-converted'
mkdirSync(OUT, { recursive: true })

const jobs = [
  ['shell-header.html', 'header.jsx'],
  ['shell-footer.html', 'footer.jsx'],
  ['home-hero.html', 'hero.jsx'],
]

for (const [input, output] of jobs) {
  const { jsx, imports } = convertFragment(readFileSync(resolve(SNAP, input), 'utf8'))
  writeFileSync(resolve(OUT, output), (imports.length ? imports.join('\n') + '\n\n' : '') + jsx + '\n')
  console.log(output, (jsx.length / 1024).toFixed(1) + ' kB')
}

// Persona panels + contact form live as string modules in the legacy clone.
const panelsSrc = readFileSync(resolve(OLD, 'src/audiencePanels.ts'), 'utf8')
const panelsMatch = panelsSrc.match(/export const audiencePanels[^{]*=\s*({[\s\S]*})\s*$/)
if (!panelsMatch) throw new Error('could not parse audiencePanels.ts')
const panels = eval('(' + panelsMatch[1] + ')')
let panelOut = '// Persona tab panels migrated from the reference site (client-rendered\n// widgets whose content the old clone captured as HTML strings).\n\n'
for (const [label, html] of Object.entries(panels)) {
  const { jsx } = convertFragment(html)
  panelOut += `/* --- ${label} --- */\nexport const ${labelToVar(label)} = (\n  <>\n${jsx.split('\n').map((l) => '  ' + l).join('\n')}\n  </>\n)\n\n`
}
writeFileSync(resolve(OUT, 'persona-panels.jsx'), panelOut)
console.log('persona-panels.jsx', Object.keys(panels).length, 'panels')

function labelToVar(label) {
  return label.replace(/[^a-zA-Z0-9]+(.)?/g, (_, c) => (c ? c.toUpperCase() : '')).replace(/^./, (c) => c.toLowerCase())
}

const formSrc = readFileSync(resolve(OLD, 'src/contactForm.ts'), 'utf8')
const formMatch = formSrc.match(/export const contactFormHtml = (`[\s\S]*?`)/)
if (!formMatch) throw new Error('could not parse contactForm.ts')
const formHtml = formMatch[1].slice(1, -1) // static template literal — no interpolation
const form = convertFragment(formHtml)
writeFileSync(resolve(OUT, 'contact-form.jsx'), form.jsx + '\n')
console.log('contact-form.jsx', (form.jsx.length / 1024).toFixed(1), 'kB')
