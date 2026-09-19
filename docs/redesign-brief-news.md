# Redesign brief — News (`/en/news`)

You are redesigning **one page** of the A2M 2027 site to match the design language
established by the Exhibit or Sponsor page redesign (commit `7375903`) **and** the
news-card style already shipped on the home page.
Read `AGENTS.md` first. This file is self-contained.

## Target

| | |
| --- | --- |
| Page file | `src/pages/NewsPage.tsx` (~459 lines) |
| Route | `/en/news` (registered in `src/routes.ts` — do not change) |
| Current sections | `#news-release` (6 article cards, each with an image), `#market-news` |
| Branch | `20260919-news-redesign`, cut from `develop` (NOT main — latest work lives there) |
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
   (`mt-5 block h-0.5 w-10 rounded-full bg-gold`), lead paragraph. KPI row optional here.
2. **Section rhythm** — light (`py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-20`),
   tinted band (`bg-surface/60 border-hairline border-t`). Container everywhere:
   `mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16`.
3. **News cards — match the HOME page style** (commits `eaaddb3` + `cb477b8` already shipped it
   in `src/pages/HomePage.tsx` — copy that card markup verbatim): image with a
   date | category bar overlay on it, headline, description clamped to N lines,
   pill "Read more" button (`href="#"` placeholders are intercepted as no-ops in
   `SiteLayout` — keep them `href="#"`, they are an intentional dead end).
   Keep the working `<NewsFilter>` tabs mechanism if present (`NewsPage.tsx` passes
   tabs + cards arrays to it) — restyle its chrome to match, don't break its logic.
4. **Reusable components** — `Callout` (gold left border), `btnGold`/`btnGhostLight`
   constants — copy from ExhibitSponsorPage.tsx.
5. **Copy** — keep every headline, date, category and body text (client-approved).
   Do not invent news items.

## Images — generate via the Grok CLI

The Grok Build CLI is installed and authenticated. From the repo root:

```bash
~/.local/bin/grok -p "Use your image generation tool (/imagine) to create one image and overwrite the file public/images/news/<name>.jpg in the current directory (create no other files). Requirements: 1280x720, 16:9, photorealistic cinematic editorial photography, deep emerald green and brushed gold palette, warm light, shallow depth of field. Scene: <scene>. Critical: the only legible text allowed in the entire image is 'A2M 2027' — all other signage, documents and screens must be blurred or illegible. No city names anywhere (the event is in Montréal, Canada). Natural faces and hands, no distortions. After saving, confirm the path and pixel dimensions." \
  --always-approve --no-alt-screen --output-format plain --max-turns 15
```

**After every generation, VIEW the image file** (Read tool on the jpg) and check for text
hallucinations and distorted faces/hands. Regenerate if flawed. Palette must match
`public/images/exhibit/*.jpg` (emerald + gold, cinematic).

The six article thumbnails already exist (`news/cote-divoire-honorary-country.jpg`,
`news/ministerial-round-table-agenda.jpg`, `news/investment-showcase-call.jpg`,
`news/women-in-mining-programme.jpg`, `news/sustainability-pledge.jpg`,
`news/early-bird-open.jpg`). Audit them: replace only the weak ones (blank panels,
wrong text, artifacted faces) with same-topic regenerations. Suggested extra:

| File | Scene |
| --- | --- |
| `public/images/news/news-hero.jpg` | Journalists and delegates on the A2M exhibition floor, camera lights, emerald and gold, soft-focus |

## Hard rules (from AGENTS.md)

- **No `sed`/regex batch edits** over `src/pages/*.tsx` — targeted Edit-tool edits only, rebuild after.
- **Tailwind v4** — always write complete class names (no dynamic `w-${size}` composition).
- **tsc strict** with noUnusedLocals — remove imports when you delete code.
- Preserve existing class strings where you keep a component; don't "clean them up".
- Gate: `npm run build` → `npx vite preview --port 4173` → open the route in a browser →
  check console for errors (a blank `#root` = thrown effect, React 19 unmounts the tree).
- Commit style: `20260919 news: <what changed> (owner request)`. One logical changeset per commit.
- Dead links (`fr` buttons, program PDF, news "Read more" `href="#"`) are intentional — don't repair.

## Ship checklist

1. `npm run build` passes.
2. Route browser-checked at `/en/news` (desktop + narrow) — filter tabs still work.
3. Committed on `20260919-news-redesign`, merged to `develop`, `git push origin develop`.
4. Confirm GitHub Pages staging run is green (`.github/workflows/deploy-develop.yml`).
