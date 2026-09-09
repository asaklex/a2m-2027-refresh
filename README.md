# A2M 2027 — Africa Mining in Montréal

Maintainable rebuild of the A2M 2027 website. The original Next.js deployment
is gone; this project was migrated faithfully from the archived SSR snapshots
kept in `../kossoko-africa-mining-montreal-2026` (the legacy snapshot clone),
which remain the only surviving copy of the site's content.

- **Working on this repo with an AI agent?** Start with `AGENTS.md`.
- How the migration worked and how to verify changes:
  `docs/migration-and-fidelity.md`.

## Quick start

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build
npm run preview   # serve dist/
```

## Stack

- **Vite 8 + React 19 + TypeScript** — plain SPA, no meta-framework.
- **Tailwind CSS 4** (`@tailwindcss/vite`) — the design tokens (colours,
  typography scale, shadows, easings, keyframes) were extracted 1:1 from the
  original compiled stylesheet into `src/index.css`, so every utility class
  used by the migrated markup resolves to the same value as before.
- **react-router-dom 7** — 13 routes under `/en`.
- **lucide-react** for icons.

## Structure

```
src/
  pages/        one component per route (migrated markup)
  components/   site shell (header/footer/mobile menu/dialogs) and the
                interactive widgets rebuilt as real components:
                HeroCarousel, KpiBand, PersonaTabs, NewsFilter,
                OnThisPageNav, ContactForm
  components/ui/  generic primitives: Tabs, Accordion, FakeForm
  data/         navigation, persona tabs content
  fonts.css     the original next/font @font-face subsets (public/fonts)
public/         images, favicons, fonts copied from the reference build
tools/          the migration + verification tooling (see below)
```

The pages are faithful JSX: the markup, classes and copy match the original
site node-for-node. Interactive patterns that the original site rendered
client-side (tabs, carousel, filters, forms) are real React components.

## Migration tooling

The one-off migration pipeline, kept for provenance and future re-runs:

- `tools/snapshot-to-jsx.mjs` — parses each archived SSR snapshot and emits
  JSX page components, substituting the interactive patterns with the
  project's components (`Tabs`, `Accordion`, `NewsFilter`, `HeroCarousel`,
  `PersonaTabs`, `KpiBand`, `OnThisPageNav`, `ContactForm`, `FakeForm`).
- `tools/convert-fragments.mjs` — converted the header/footer/hero fragments
  and the client-captured widgets (persona panels, contact form) to JSX.
- `tools/build-persona-data.mjs` — extracted the persona tab section data.
- `tools/check-fidelity.mjs` — canonicalizes the rendered DOM and the
  archived snapshots with identical rules and diffs them.
- `tools/check-classes.mjs` — asserts every rendered class has a rule in the
  built stylesheet.

## Fidelity

Verification: the canonical DOM diff (`tools/check-fidelity.mjs`) shows every
page **byte-identical to its archived snapshot outside the site header**.
Every page carries the same 48 header-only diff lines from the dropdown
controller (below); three pages have additional intentional restorations —
not losses:

| Page | Difference | Why |
| --- | --- | --- |
| All (header) | Dropdowns are state-driven (hover intent, one panel at a time, close on navigation/Escape/outside click) instead of pure CSS `group-hover` | The archived snapshots only captured the CSS states, not the original React controller; pure CSS hover let panels cross-fade on top of each other and stay open after navigating. `SiteHeader`'s `useDropdownController` restores the intended behaviour |
| Home | The five non-active persona tab panels have content | The snapshot only server-rendered the active panel; the other five were captured from the client-rendered site by the legacy clone and are restored here |
| About | The contact form exists | It was client-rendered (Next bailout marker) and never appears in the snapshot; its markup was captured by the legacy clone |
| Ministerial Roundtable | Accordion triggers carry `aria-controls` | Accessibility improvement; the panels themselves are empty because their content was client-rendered and was never captured |

Known dead ends inherited from the archived site (unchanged on purpose):

- The **French edition** (`fr` buttons) links to the recorded origin, which
  is offline. Update `legacyFrenchOrigin` in `src/data/navigation.ts` if a
  French edition returns.
- The **"Download the program"** link points at a PDF that was already 404
  on the reference deployment.
- The **"In this section"** floating button on the Features page opened a
  client-rendered dropdown that was never captured; the button is inert.
- "Read more" links on news cards are `href="#"` placeholders, as originally.

## Maintenance notes

- Edit pages directly in `src/pages/*.tsx` — they are normal React
  components.
- Navigation lives in `src/data/navigation.ts` (header dropdowns, mobile
  menu and footer column all read from it).
- Design tokens live in the `@theme` block of `src/index.css`.
- Forms are intentional stubs (no backend): `FakeForm`, `ContactForm` and
  the footer newsletter show a confirmation and capture nothing.
