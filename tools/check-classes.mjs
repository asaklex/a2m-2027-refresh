// Checks that every class rendered in the browser has a matching rule in
// the built stylesheet. Input: /tmp/a2m-rendered/all-classes.json
// (see the browser collection step in README).
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const used = JSON.parse(readFileSync('/tmp/a2m-rendered/all-classes.json', 'utf8'))
let css = ''
for (const f of readdirSync('dist/assets')) if (f.endsWith('.css')) css += readFileSync(join('dist/assets', f), 'utf8')

// Tailwind escapes every special character in selectors.
const cssEscape = (s) => s.replace(/[^a-zA-Z0-9_-]/g, (m) => '\\' + m)
const missing = []
for (const cls of used) {
  if (cls.startsWith('lucide')) continue
  const selector = '.' + cssEscape(cls)
  if (!css.includes(selector)) missing.push(cls)
}
console.log('used:', used.length, '| missing:', missing.length)
console.log(missing.join('\n'))
