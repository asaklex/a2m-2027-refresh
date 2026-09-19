# Redesign brief — Ministerial Roundtable (`/en/program/ministerial-roundtable`)

You are redesigning **one page** of the A2M 2027 site to match the design language
established by the Exhibit or Sponsor page redesign (commit `7375903`).
Read `AGENTS.md` first. This file is self-contained.

## Target

| | |
| --- | --- |
| Page file | `src/pages/MinisterialRoundtablePage.tsx` (~506 lines) |
| Route | `/en/program/ministerial-roundtable` (registered in `src/routes.ts` — do not change) |
| Current sections | `#ministerial-round-table`, `#canada-africa-strategy`, `#chairpersons` |
| Branch | `20260919-roundtable-redesign`, cut from `develop` (NOT main — latest work lives there) |
| Merge/push | merge to `develop`, push `origin develop` (auto-deploys GitHub Pages staging) |

## The "Exhibit treatment" (design language to apply)

Reference implementation: `src/pages/ExhibitSponsorPage.tsx`. Copy its patterns verbatim.

1. **Hero** — full-bleed AI image (absolute inset-0, object-cover) over `bg-emerald-ink text-ivory`,
   scrims: `bg-gradient-to-r from-emerald-ink/95 via-emerald-deep/80 to-emerald-deep/25` +
   bottom `h-32 bg-gradient-to-t from-emerald-ink/95 to-transparent`. Inside: breadcrumb block
   (`mb-6 [&_[aria-current]]:text-champagne [&_a]:text-champagne/80 [&_svg]:text-champagne/40`),
   gold eyebrow (`text-[11px] text-gold-light uppercase tracking-[0.26em]` + text-shadow),
   H1 `text-[1.9rem] sm:text-[2.6rem] lg:text-[3.1rem] font-bold [font-family:var(--font-display)] leading-[1.12] tracking-[-0.01em]`
   with ONE phrase highlighted `<span className="text-gold-light">`, gold rule
   (`mt-5 block h-0.5 w-10 rounded-full bg-gold`), lead paragraph, CTA pair
   (`btnGold` + `btnGhostLight` constants — copy from ExhibitSponsorPage), KPI stat row
   (`dl` grid, `text-data-xl`, top border `border-ivory/15`).
2. **OnThisPageNav** after the hero, one item per section id.
3. **Section rhythm** — alternate: light (`py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-20`),
   dark emerald band (`a2m-motif relative overflow-hidden bg-emerald-deep py-16 text-ivory lg:py-24`),
   tinted (`bg-surface/60 border-hairline border-t`). Container everywhere:
   `mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16`.
4. **Sidebar layout** for long sections: `grid gap-12 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-16`
   with sticky left col (`lg:sticky lg:top-[140px] lg:self-start`): copper eyebrow + h2 + lead + `Callout`.
5. **Reusable components** — copy from ExhibitSponsorPage.tsx as needed: `Callout` (gold left border),
   `Check` (gold/emerald list item), `BenefitCard`, `ShowcaseCard` (16/10 image + gradient + icon chip),
   `FormatCard`. `btnGold` / `btnGhostLight` string constants at top.
6. **Copy** — keep all existing facts and copy (client-approved). You may reorganize how it is
   presented; do not invent new program details, dates or names.

## Images — generate via the Grok CLI

The Grok Build CLI is installed and authenticated. From the repo root:

```bash
~/.local/bin/grok -p "Use your image generation tool (/imagine) to create one image and overwrite the file public/images/roundtable/<name>.jpg in the current directory (create no other files). Requirements: 1280x720, 16:9, photorealistic cinematic corporate photography, deep emerald green and brushed gold palette, warm chandelier light, shallow depth of field. Scene: <scene>. Critical: the only legible text allowed in the entire image is 'A2M 2027' — every other sign, flag, document or screen must be blurred or illegible. No city names anywhere. Natural faces and hands, no distortions. After saving, confirm the path and pixel dimensions." \
  --always-approve --no-alt-screen --output-format plain --max-turns 15
```

**After every generation, VIEW the image file** (Read tool on the jpg) and check:
text hallucinations (wrong city! event is **Montréal, Canada** — a "Johannesburg" plaque
happened before), distorted faces/hands. Regenerate if flawed. Palette must match
`public/images/exhibit/*.jpg` (emerald + gold, cinematic).

Suggested shots:

| File | Scene |
| --- | --- |
| `public/images/roundtable/roundtable-hero.jpg` | Closed-door ministerial roundtable: delegates in dark suits around a large oval boardroom table, emerald walls, gold accents, name cards blurred |
| `public/images/roundtable/strategy-dialogue.jpg` | Two officials in conversation in an elegant emerald-and-gold lounge, flags blurred in background |
| `public/images/roundtable/signing.jpg` | Hands close-up signing a cooperation document on a dark wood table with gold pen, shallow depth of field |

## Hard rules (from AGENTS.md)

- **No `sed`/regex batch edits** over `src/pages/*.tsx` — targeted Edit-tool edits only, rebuild after.
- **Tailwind v4** — always write complete class names (no dynamic `w-${size}` composition).
- **tsc strict** with noUnusedLocals — remove imports when you delete code.
- Preserve existing class strings where you keep a component; don't "clean them up".
- **Do not generate fake portraits** for the Chairpersons section — real people's photos are
  pending client assets. Keep monogram/initial placeholders there.
- Gate: `npm run build` → `npx vite preview --port 4173` → open the route in a browser →
  check console for errors (a blank `#root` = thrown effect, React 19 unmounts the tree).
- Commit style: `20260919 roundtable: <what changed> (owner request)`. One logical changeset per commit.
- Dead links (`fr` buttons, program PDF) are intentional — don't repair.

## Ship checklist

1. `npm run build` passes.
2. Route browser-checked at `/en/program/ministerial-roundtable` (desktop + narrow).
3. Committed on `20260919-roundtable-redesign`, merged to `develop`, `git push origin develop`.
4. Confirm GitHub Pages staging run is green (`.github/workflows/deploy-develop.yml`).
