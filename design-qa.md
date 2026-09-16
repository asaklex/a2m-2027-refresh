# Home page visual QA

## Scope

Rebuilt `/en` to contain only the section sequence recorded in the supplied desktop references:
hero, speakers, three pillars, signature experiences, ministerial roundtable,
Honorary Country, reasons to attend, programme, news, and the closing CTA.

## Reference captures

- `/Users/asaklex/dev/KOSSOKO/a2m-2027/docs/New-Changes-Sept-8-2026/LAYOUT/Screenshot 2026-07-31 at 5.38.01 pm.png`
- `/Users/asaklex/dev/KOSSOKO/a2m-2027/docs/New-Changes-Sept-8-2026/LAYOUT/Screenshot 2026-07-31 at 5.38.18 pm.png`
- `/Users/asaklex/dev/KOSSOKO/a2m-2027/docs/New-Changes-Sept-8-2026/LAYOUT/Screenshot 2026-07-31 at 5.38.36 pm.png`
- `/Users/asaklex/dev/KOSSOKO/a2m-2027/docs/New-Changes-Sept-8-2026/LAYOUT/Screenshot 2026-07-31 at 5.38.44 pm.png`
- `/Users/asaklex/dev/KOSSOKO/a2m-2027/docs/New-Changes-Sept-8-2026/LAYOUT/Screenshot 2026-07-31 at 5.38.52 pm.png`
- `/Users/asaklex/dev/KOSSOKO/a2m-2027/docs/New-Changes-Sept-8-2026/LAYOUT/Screenshot 2026-07-31 at 5.39.12 pm.png`
- `/Users/asaklex/dev/KOSSOKO/a2m-2027/docs/New-Changes-Sept-8-2026/LAYOUT/Screenshot 2026-07-31 at 5.39.21 pm.png`
- `/Users/asaklex/dev/KOSSOKO/a2m-2027/docs/New-Changes-Sept-8-2026/LAYOUT/Screenshot 2026-07-31 at 5.39.29 pm.png`
- `/Users/asaklex/dev/KOSSOKO/a2m-2027/docs/New-Changes-Sept-8-2026/LAYOUT/Screenshot 2026-07-31 at 5.39.43 pm.png`

## Implementation capture

Local production preview reviewed at `http://127.0.0.1:4173/en` using a full-page
desktop browser capture after the production build.

## Checklist

- [x] Section order and all requested sections match the supplied reference set.
- [x] Desktop container widths, grids, card borders, pale surfaces, dark topographic panels, and split image treatments visually match.
- [x] The verified speaker portraits are used in the home speaker grid.
- [x] New Abidjan and ministerial imagery preserves the composition of the unavailable original imagery.
- [x] No browser console errors observed.
- [x] `npm run build` passes.

## Result

**passed**
