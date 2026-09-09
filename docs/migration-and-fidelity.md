# Migration & fidelity — how this site was rebuilt, and how to verify changes

This document explains where the migrated codebase came from, how the
verification harness works, and how to re-run each part. For day-to-day
editing rules see `AGENTS.md`.

## Provenance

The original A2M 2027 site was a Next.js (App Router) deployment with
Tailwind v4, Radix UI widgets and next/font. The deployment went offline.
Before it disappeared, a snapshot pipeline (in the legacy clone repo,
`../kossoko-africa-mining-montreal-2026`) captured, for each of the 13
`/en/*` routes:

- the **fully rendered SSR HTML** of the page body (header + main + footer),
  sanitized and rewritten to local asset paths — kept as
  `src/snapshots/*.ts` modules in that repo;
- the compiled **Tailwind stylesheet**, the **webfont subsets**, all
  **images** and **favicons**;
- two client-rendered widgets the SSR never contained, captured by hand as
  HTML strings: the **persona tab panels** (`audiencePanels.ts`) and the
  **contact form** (`contactForm.ts`).

This project turns those captures into a normal React SPA. Nothing at
runtime references the dead origin.

## How the migration worked

`tools/snapshot-to-jsx.mjs` parses each route's snapshot with htmlparser2 and
emits one JSX page component per route (`src/pages/*.tsx`). The emitter
converts HTML to JSX (attribute renaming, entity decoding, boolean/numeric
attributes, SVG camelCasing, `{' '}` whitespace preservation, internal links
→ react-router `<Link>`).

Interactive patterns are detected structurally and substituted with the
project's components:

| Snapshot pattern | Becomes |
| --- | --- |
| `<section>` with `[aria-roledescription="slide"]` groups (home hero) | `<HeroCarousel />` (slides as data) |
| Home tablist whose panels are empty in SSR | `<PersonaTabs />` (panels from the client capture) |
| News tablists with **no panels at all** + the card grid sibling | `<NewsFilter tabs={…} cards={…} />` — a real, working topic filter |
| Tablists **with** SSR panel content (mission, pillars, conference themes, matchmaking) | `<Tabs … tabs={…} />` with per-state trigger variants |
| KPI band (`a2m-kpi-rule/num/label`) | `<KpiBand items={…} />` (IntersectionObserver replays the original keyframes) |
| Sticky bar + floating button labelled "On this page" | `<OnThisPageNav items={…} />` (scroll-spy) |
| `h3 > button[aria-expanded] + div[role=region]` items | `<Accordion items={…} />` |
| The about-page grid that contained the contact-form bailout marker | `<aside>…</aside><ContactForm />` |
| Any inert `<form>` | `<FakeForm>` (confirmation on submit) |

Two structural details the substitution logic had to get right, in case you
extend it:

- **Tab wrappers are minimal.** The substitution fires at the *nearest
  ancestor of the tablist that also contains all its panels* — anything
  higher would swallow unrelated section content. Sidebar layouts wrap the
  panels in a `min-w-0` column (`panelContainerClassName`); timeline layouts
  wrap the *tablist* in a `div.relative` with decorative rails
  (`listWrapperClassName` + `listPreamble`).
- **Triggers differ per state.** The reference shipped visually different
  active/inactive triggers (border colours, inner span colours, even SVG
  stroke attributes), so each tab item carries two JSX variants produced by
  positionally merging the active reference trigger (tab 0) with the
  inactive one (tab 1). `emitParallel` in the tool implements that merge.

The shell (header, footer, dialogs, mobile menu) was converted with
`tools/convert-fragments.mjs` and then hand-refactored into data-driven
components (`src/data/navigation.ts`).

## The fidelity harness

`tools/check-fidelity.mjs` proves the rebuild matches the snapshots:

1. **`extract`** — materializes `/tmp/a2m-snapshots/*.html` from the legacy
   repo's `src/snapshots/*.ts` (override the repo location with
   `A2M_LEGACY_REPO`).
2. **`snapshot`** — canonicalizes each snapshot into
   `/tmp/a2m-rendered/<slug>.expected.txt`.
3. **Browser capture** — load each route of the running build and
   canonicalize the live DOM into `<slug>.actual.txt` (snippet below).
4. **`diff`** — compares and prints the first divergences per route.

### The canonical form

Both sides are normalized by the *same* function (`CANONICALIZER_SOURCE`,
also injected into the browser) so only meaningful differences survive:

- tags lowercased; whitespace-only text nodes dropped; text runs coalesced
  (the SSR stream splits text with `<!-- -->` markers);
- `class` tokens sorted and filtered of runtime state (`a2m-kpi-on`,
  `clone-reveal`, a duplicate lucide hook);
- `id`, `aria-controls`, `aria-labelledby` values masked (React generates
  different ones); `data-radix-collection-item`, `data-dgst`,
  `data-discover` dropped;
- `style` declarations sorted with browser re-serializations normalized
  (`inset:0px` expanded, `rgb()`→`rgba()`, spacing, `0px`→`0`), runtime-only
  properties dropped (`transform`, `transition`, `animation-duration`,
  `outline`, `-webkit-mask-image`);
- `tabindex` ignored on `role="tab"` (Radix SSR ships every trigger at -1;
  the ports use 0 for the active tab);
- `<template>` bailout markers, comments and the `#root` mount node skipped.

### Capturing the rendered side

With the ZCode in-app browser (any Playwright-shaped automation works):

```js
const { CANONICALIZER_SOURCE, fileFor } = await import(
  pathToFileURL('/path/to/a2m-2027/tools/check-fidelity.mjs').href)
const tab = /* a tab pointing at http://localhost:4173 */
for (const route of ROUTES) {
  await tab.goto('http://localhost:4173' + route)
  await tab.playwright.waitForLoadState({ state: 'domcontentloaded' })
  await tab.playwright.waitForTimeout(400)
  const canon = await tab.playwright.evaluate(
    `(${CANONICALIZER_SOURCE})(document.body, false)`)
  writeFileSync(`/tmp/a2m-rendered/${fileFor(route).replace(/\.html$/, '.actual.txt')}`, canon + '\n')
}
```

Then `node tools/check-fidelity.mjs diff`.

### CSS coverage

`tools/check-classes.mjs` reads `/tmp/a2m-rendered/all-classes.json` (a
JSON array of every `classList` token seen across the 13 routes) and
asserts each token appears as a selector in `dist/assets/*.css`. This
catches "class exists in markup but Tailwind never generated it" — the
classic silent failure after refactors.

## Divergence registry

Current state (2026-09-08): **every page is byte-identical to its snapshot
outside the site header**. Each page shows exactly 48 diff lines from the
header dropdown controller (6 nav sections × 4 lines: `aria-expanded` /
`aria-haspopup` added to the section links, the `group-hover:*` /
`group-focus-within:*` visibility classes replaced by state, the chevron
rotation made conditional, and the flyout's `group-data-[side…]` classes
replaced by plain `right-full pr-1`). The remaining per-route deltas:

| Route | Diff lines | Divergence | Reason |
| --- | --- | --- | --- |
| 10 pages | 48 each | Header controller only | see above |
| `/en` | 367 | + five persona panels have content | SSR only rendered the active panel; the other five were client-rendered and captured by the legacy clone |
| `/en` | (same run) | `CalendarDays` icon is an inline SVG with the original paths | The reference build's lucide version drew slightly different paths than lucide-react ≥1.28 |
| `/en/about` | 246 | + the contact form exists | Client-rendered (Next bailout marker); markup captured by the legacy clone |
| `/en/program/ministerial-roundtable` | 56 | + accordion triggers carry `aria-controls` | Accessibility; panels are empty because their content was never captured |

All of these are deliberate. **Do not "fix" them back**, and treat any diff
beyond this table as a regression.

## Regenerating pages

Only if you deliberately want to re-run the migration (e.g. a lost page):

```bash
node tools/check-fidelity.mjs extract   # /tmp/a2m-snapshots must exist
node tools/snapshot-to-jsx.mjs /tmp/a2m-snapshots src/pages
```

**This overwrites every file in `src/pages/`** — hand edits (if any) must be
re-applied. As of the initial migration no page carries hand edits beyond
what the tool emits, so regeneration is currently lossless; re-run the
fidelity harness afterwards to confirm.

## Client changes (2026-09-08) — now `main` (promoted 2026-09-09)

The client's change requests (`docs/New-Changes-Sept-8-2026/Website_comments.docx`,
~27 MB of docx + screenshots, deliberately uncommitted) **supersede the
snapshot fidelity contract** for everything they cover. Originally the
branch `20260908-client-changes`, they are applied in nine dated commits
(`512081c` → `2567b8e`), one logical batch each:

| Commit | Scope |
| --- | --- |
| `512081c` | About: hero badges → Venue / Honorary Country; KPI cards → industry numbers (30% reserves, 45B+, 120+ TSX, 30+ countries); Who-We-Are lead deleted; "junior mining finance" clause deleted; sustainability boxes deleted; contact form interests trimmed |
| `66011e6` | Home: KpiBand → industry numbers; "Unlocking Africa's Mining Potential in Montreal" intro; Format/B2B/Roundtable highlight stats added |
| `d0234e1` | Program: "(June 7–9, 2027)" deleted; hero stat badges moved to home; "Program overview" → "Conference Themes"; 2027 Theme banner deleted; Showcase callout → registration button; Speakers section removed; Demo block → video placeholder; CTA icons |
| `faa0075` | Nav: first section renamed "A2M 2027" and gains Conference Themes + Agenda; Ministerial Roundtable promoted to top level; "Honorary Patron" → "Chairpersons"; sitemap/footer synced |
| `ab68b13` | Roundtable: "By invitation only"; dialogue-line prefix dropped; axis 02 rewritten; strategy PDF callout moved right; "What This Means for You" accordion panels authored; Chairpersons section renamed |
| `5e869aa` | WIM/Breakfast/Networking: quote marks removed from three taglines; WIM workforce badge deleted; Gala → June 8, Networking Evening badge deleted; networking hero photo → Black-professionals reception; evenings-before-Gala ordering |
| `7b23749` | Honorary Country: Selection badge and Call-for-Applications deleted; Côte d'Ivoire content authored (Why CI, flagship minerals, what CI brings); `N° 1` → `#1` |
| `e39f80f` | Investors' Breakfast: "Register as Investor" CTA; pre-screened project teaser cards; "View all projects" → account dialog (login) |
| `2567b8e` | Exhibit/Sponsor: badges swapped/deleted; Reserve-your-stand deleted; Why-Sponsor duplicate lead removed; tier boxes → text summary; Exhibitors & Sponsors section deleted; Associate Your Brand moved first |

Plus `src/components/HeroCarousel.tsx`: slide-2 eyebrow
"1,500+ delegates · 35 countries" → "30+ African mining countries" (the
struck string in the docx).

Interpretation calls worth knowing (docx was ambiguous):

- **Speakers**: the docx both moves "Speakers & panellists" to the A2M 2027
  section and marks it `[Remove]`. Resolution: removed from the Program page
  and nav entirely; the home teaser links to `/en/about#advisory-board`
  (profiles will live there). `PartnerPage`'s "Become a speaker" section was
  not mentioned and stays.
- **Networking lead sentence**: struck in the docx *and* "remove quotes" —
  resolved as: hero tagline kept unquoted, duplicate body lead deleted.
- **Gala date**: docx shows June 8 while the site said June 7 — applied
  June 8 (networking evenings now explicitly precede the Gala).
- **Networking photo**: swapped to `/images/program/networking-evening.jpg`
  (copy of the in-library `home/unlocking.jpg` — a reception centred on
  Black professionals; reusing an already-licensed asset instead of sourcing
  an unlicensed web image).

The fidelity harness is unchanged and still runs; on this branch large
diffs are expected on About, Home, Program, Roundtable, WIM, Networking,
Honorary Country, Investors' Breakfast and Exhibit/Sponsor.
