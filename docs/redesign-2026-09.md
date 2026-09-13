# Redesign 2026-09 — target layout record

Source: the 20 screenshots in `docs/New-Changes-Sept-8-2026/LAYOUT/` (captured
2026-07-31). They show the previous developer's pre-launch redesign, formerly
live at `nana-ousmane06.github.io/a2m-2027/site/index.html` — **that deployment
and its repo are gone (404, checked 2026-09-13); the screenshots are the only
surviving record.** This file is the extracted design spec so the rebuild does
not depend on re-reading the PNGs.

Decisions logged 2026-09-13 (user): **no Speakers section** (the docx ruling
stands); hero keeps docx-approved copy as slide 1 with the screenshot headline
as slide 2; JOIN THE WAITLIST points at `/en/news#sign-up`. The docx remains
the authority for copy that it touched; screenshots govern layout/structure.

## Palette

Sampled from the PNGs — the target uses the same brand palette as our tokens:

| Element | Target | Nearest token |
|---|---|---|
| Marquee bar | `#034131`–`#044333` | `emerald-deep` `#0f3d2e` |
| Header | white | `ivory` |
| Hero | photo + dark green overlay | existing hero treatment |
| Sticky bar | `#052E24`–`#0B3329` | darker emerald — new `emerald-ink` `#052e24` |
| Footer | `#043D2F` solid | `emerald-deep` |
| Gold CTA | `#CDA968` | `gold-light` `#d3ac57` |
| Section eyebrow + divider | gold | `gold` |

Fonts: same family as ours (Archivo display / Inter body — the redesign shares
the original brand stack). No token changes needed.

## Chrome

- **Marquee ticker** (top, above header): dark green `#034131`, scrolling
  repeating text, cream/gold text:
  `Exhibition space for A2M 2027 is allocated on a first-confirmed basis — priority placement for early confirmations — limited booths available.`
  ("first-confirmed basis" bold.)
- **Header** (white/ivory, sticky): logo lockup · `June 7–9, 2027 · Centre Mont-Royal, Montreal` · nav (unchanged IA) · `EN` pill · gold **Join the waitlist** button.
- **Sticky bottom bar** (dark green `#052E24`, site-wide, fixed):
  left `A2M 2027 — June 7–9, 2027 · Montreal` + `Registration not open yet — join the waitlist for the Founding Delegate rate`
  right: gold **JOIN THE WAITLIST** button.
- **Footer** (solid `#043D2F`): brand block (logo + "Building critical
  partnerships in African mining" + "L'événement phare du secteur minier
  africain") · EVENT column (A2M 2027, Why Participate?, Institutional
  Endorsements, Advisory Board, Meet the Team, Sustainability, Contact Us) ·
  VISIT column (Register as a Delegate, Book Accommodation, Request invitation
  letter, Discover Montréal, Venue & Accessibility, Useful Information) ·
  PARTNER column (Become a speaker, Become a Strategic Partner, Become a Media
  Partner) · NEWS column (News Release, Market News, Sign up) · newsletter
  block "Stay in the loop" / "Your email" / "Sign up" · social icons · legal
  line.

## Homepage sections (target order)

1. **Hero** — rotating 2 slides, photo + dark overlay.
   - Badge left: `Pre-launch · Founding Delegate rate`
   - Pill right: `Webinar — March 2026: Uranium in Africa — from exploration to production` (dated — March 2026 is past; do **not** replicate, note to client)
   - Slide copy in the target: `Build the partnerships that will power the clean energy transition` (CTAs: JOIN THE WAITLIST / MINISTERIAL ROUNDTABLE) and `Where African mineral wealth meets Canadian capital, expertise and know-how` (CTAs: JOIN THE WAITLIST / DOWNLOAD THE PROGRAM). Per decision: slide 1 keeps docx-approved headline; slide 2 uses the target's "Where African mineral wealth…".
   - Stats strip below (matches existing KpiBand): `30% of global mineral reserves held in Africa` · `CAD 45B+ Canadian investments deployed on the continent` · `120+ TSX-listed companies active in Africa` · `30+ African mining countries (to be) represented`.
2. **Three pillars** — eyebrow `THE A2M MODEL`, heading `Three pillars`, lead
   "The event is built on three commercial fundamentals."
   - INVEST — Connect with high-potential projects, leading institutions, and key government decision-makers — all in one powerful platform. Gain access to a curated deal flow of vetted opportunities.
   - DEAL — Showcase your projects, products or services at the A2M Marketplace… (full body from screenshot; mirror docx Marketplace copy where it exists)
   - DECIDE — (full body from screenshot)
   - Button: `SEE THE PROGRAM` → `/en/program`
3. **Six signature experiences** — eyebrow `THE PROGRAM`, heading `Six signature
   experiences`, lead "Two days. Six ways to engage. Every detail engineered."
   Cards: Ministerial Roundtable (The closed-door political dialogue on June 6) ·
   Honorary Country (Côte d'Ivoire, the 2027 edition's showcase) · Women in
   Mining Forum (Women's leadership, from site to boardroom) · Investors'
   Breakfast (90 closed-door minutes, capital side only) · Business Matchmaking
   (…) · Networking & Social Events (…) + feature banner below (Ministerial
   Roundtable).
4. **Honorary Country spotlight** — eyebrow `HONORARY COUNTRY`, heading
   `Spotlight — Côte d'Ivoire`, body "A strategic gateway to West African
   mining. Côte d'Ivoire leads a high-level delegation to Montreal — bringing
   project owners, regulators, and institutional capital under one roof." Key
   figures: `#1 gold exploration ranking in West Africa` · `#1 gold production
   growth rate in West Africa` · (+ remaining figures on HonoraryCountryPage).
5. **Top reasons to attend** — eyebrow `WHY A2M`, heading `Top reasons to
   attend`, numbered 01–05:
   01 Meet the decision-makers — 30+ African Mining Ministers, Canadian officials, TSX/TSX-V CEOs and DFI leaders.
   02 Build your pipeline — The Investment Showcase presents pre-screened African projects to investors. Capital Markets Lounge offer…
   03–05 from screenshot (mirror docx-approved equivalents where they exist).
   CTA: `JOIN THE WAITLIST` + "Download the A2M 2027 program" block with `DOWNLOAD THE PROGRAM`.
6. **News teaser** — eyebrow `NEWS`, heading `Latest announcements`, lead
   "Official announcements, speaker reveals…". Cards: "Côte d'Ivoire named
   Honorary Country for A2M 2027" · "Ministerial Roundtable agenda revealed" ·
   (third) + `SEE ALL NEWS`.
7. **CTA band** — eyebrow `LIMITED ACCESS`, heading `Founding Delegate passes
   are limited`, body "One pass. Two days. Access to everything — Investment
   Showcase, Matchmaking, Capital Markets Lounge, Ministerial Roundtable
   highlights, Networking Evenings and the Gala. Seating is limited to keep the
   room exclusive." Button `JOIN THE WAITLIST`.
8. Footer (chrome, above).

**No Speakers section** (user decision 2026-09-13) — the target shows a
"Speakers & panellists" carousel, but the docx removed speakers and the user
confirmed they stay out.

## Section header pattern (all pages)

Eyebrow (small caps, gold, letter-spaced) → large display heading → gold
divider line → optional lead paragraph. Applies to interior pages too.

## Out of scope / notes

- The webinar pill references March 2026 (past) — flagged to client, not replicated.
- Waitlist CTA target: `/en/news#sign-up` (existing email capture).
- fr link + text-size + login stay in the header (target is EN-only, but
  removing functionality is a client decision, not ours).
