// Homepage rebuilt from the target redesign screenshots 5.38.01 → 5.39.43
// (section order, copy and treatments transcribed verbatim from the PNGs).
// Sections whose reference content was template filler from the previous
// dev's scaffold (When & where / Venue / Partners) keep the design but use
// A2M's real event facts.
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import HeroCarousel from '../components/HeroCarousel'
import { legacyFrenchOrigin } from '../data/navigation'

const PROGRAM_PDF = `${legacyFrenchOrigin}/program/a2m-2027-program.pdf`

const speakers = [
  {
    name: 'H.E. Issoufou Mahamadou',
    title: 'Former President of Niger · AfCFTA Champion',
    org: 'Republic of Niger',
    image: '/images/people/issoufou-mahamadou.jpg',
  },
  {
    name: 'Tim Hodgson',
    title: 'Minister of Energy & Natural Resources',
    org: 'Government of Canada',
    image: '/images/people/tim-hodgson.jpg',
  },
  {
    name: 'Kateri Champagne Jourdain',
    title: 'Minister of Natural Resources and Forests',
    org: 'Government of Québec',
    image: '/images/people/kateri-champagne-jourdain.jpg',
  },
  {
    name: 'Mamadou Sangafowa-Coulibaly',
    title: 'Minister of Mines, Petroleum and Energy',
    org: 'Republic of Côte d’Ivoire',
    image: '/images/people/mamadou-sangafowa-coulibaly.jpg',
  },
]

const pillars = [
  {
    label: 'Invest',
    title: 'Invest',
    body: 'Connect with high-potential projects, leading institutions, and key government decision-makers — all in one powerful platform. Gain access to a curated deal flow of vetted opportunities.',
  },
  {
    label: 'Deal',
    title: 'Deal',
    body: 'Showcase your projects, products or services at the A2M Marketplace and through high-impact, structured meetings. Leave with real deals and concrete partnerships, not just business cards.',
  },
  {
    label: 'Decide',
    title: 'Decide',
    body: 'Meet African Mining Ministers and Canadian government officials, plus the Honorary Country delegation — all the critical decision-makers in one room, at one time.',
  },
]

const experiences = [
  {
    label: 'Flagship · June 6',
    title: 'Ministerial Roundtable',
    body: 'The closed-door political dialogue on June 6.',
  },
  {
    label: 'Honorary Country',
    title: 'Honorary Country',
    body: 'Côte d’Ivoire, the 2027 edition’s showcase.',
  },
  {
    label: 'Forum',
    title: 'Women in Mining Forum',
    body: 'Women’s leadership, from site to boardroom.',
  },
  {
    label: 'Capital side',
    title: 'Investors’ Breakfast',
    body: '90 closed-door minutes, capital side only.',
  },
  {
    label: 'B2B',
    title: 'Business Matchmaking',
    body: 'Your B2B agenda confirmed before you land.',
  },
  {
    label: 'Social',
    title: 'Networking & Social Events',
    body: 'Reception, gala and evenings where deals close.',
  },
]

const reasons = [
  {
    number: '01',
    title: 'Meet the decision-makers',
    body: '30+ African Mining Ministers, Canadian officials, TSX/TSX-V CEOs and DFI leaders.',
  },
  {
    number: '02',
    title: 'Build your pipeline',
    body: 'The Investment Showcase presents pre-screened African projects to investors. Capital Markets Lounge offers private negotiation space.',
  },
  {
    number: '03',
    title: 'Discover Côte d’Ivoire',
    body: 'The #1 gold exploration destination in West Africa. 10+ Canadian TSX companies already operating (A2M estimate).',
  },
  {
    number: '04',
    title: 'Shape the future',
    body: 'Co-create the first bilateral Canada-Africa political instrument on critical minerals.',
  },
  {
    number: '05',
    title: 'Access African capital',
    body: 'Meet key African bankers and financiers co-financing Africa’s next generation of mines.',
  },
  {
    number: '06',
    title: 'Leverage the diplomatic platform',
    body: 'A ministerial structure that reduces political and regulatory risk on both sides of the Atlantic.',
  },
]

const news = [
  {
    date: 'September 14, 2026',
    title: 'Côte d’Ivoire named Honorary Country for A2M 2027',
    body: 'The #1 gold exploration destination in West Africa will lead a high-level delegation to Montreal.',
    image: '/images/news/cote-divoire-honorary-country.jpg',
  },
  {
    date: 'October 1, 2026',
    title: 'Ministerial Roundtable agenda revealed',
    body: 'The first Canada-Africa political dialogue on critical minerals sets out its focus areas.',
    image: '/images/news/ministerial-round-table-agenda.jpg',
  },
  {
    date: 'November 17, 2026',
    title: 'Sustainability Program: up to 10% of revenues pledged',
    body: 'A2M directs a share of its revenues to host & Indigenous communities, women in mining, and children’s education.',
    image: '/images/news/sustainability-pledge.jpg',
  },
]

function Eyebrow({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return (
    <p
      className={
        'text-small font-semibold uppercase tracking-[0.26em] text-copper ' + (center ? 'text-center' : '')
      }
    >
      {children}
    </p>
  )
}

const goldButton =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 gold-metallic text-anthracite hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold focus-visible:outline-anthracite h-12 px-6 text-[11px]'

const outlineButton =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 h-12 border border-emerald-cta px-6 text-[11px] text-emerald-cta hover:bg-emerald-cta hover:text-ivory focus-visible:outline-emerald-cta'

const goldOutlineButton =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 h-12 border border-gold px-6 text-[11px] text-gold hover:bg-gold hover:text-emerald-deep focus-visible:outline-gold'

export default function HomePage() {
  return (
    <main>
      <HeroCarousel />

      {/* Speakers — white section, left-aligned (shot 5.38.36) */}
      <section className="bg-ivory px-4 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto w-full max-w-[1280px]">
          <Eyebrow>Speakers</Eyebrow>
          <h2 className="mt-3 font-display text-h1 text-ink">Speakers &amp; panellists</h2>
          <span className="mt-5 block h-0.5 w-10 rounded-full bg-gold" aria-hidden="true" />
          <p className="mt-5 max-w-[640px] text-lead text-muted">
            A lineup of ministers, CEOs, investors and technical leaders shaping the future of African mining.
          </p>
          <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {speakers.map((speaker) => (
              <li key={speaker.name}>
                <article>
                  <img
                    alt={speaker.name}
                    loading="lazy"
                    className="aspect-square w-full rounded-sm object-cover shadow-card"
                    src={speaker.image}
                  />
                  <h3 className="mt-4 font-display font-semibold text-body uppercase tracking-[0.04em] text-emerald-deep">
                    {speaker.name}
                  </h3>
                  <p className="mt-1 text-small text-ink">{speaker.title}</p>
                  <p className="mt-0.5 text-small text-muted">{speaker.org}</p>
                </article>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <Link className={outlineButton} to="/en/speakers">
              See all speakers
            </Link>
          </div>
        </div>
      </section>

      {/* Three pillars — dark band with white cards (shot 5.38.44) */}
      <section className="a2m-motif relative overflow-hidden bg-emerald-deep px-4 py-20 text-ivory sm:px-8 lg:px-16">
        <div className="relative z-10 mx-auto w-full max-w-[1280px]">
          <div className="mx-auto max-w-[720px] text-center">
            <p className="text-small font-semibold uppercase tracking-[0.26em] text-gold">Invest · Deal · Decide</p>
            <h2 className="mt-4 font-display text-h1 text-ivory">Three pillars, one platform</h2>
            <p className="mt-5 text-lead text-champagne/85">
              A2M brings African mining supply and North American capital together around concrete goals.
            </p>
          </div>
          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <li key={pillar.title}>
                <article className="h-full rounded-sm bg-card p-7 shadow-card">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-copper">{pillar.label}</p>
                  <h3 className="mt-4 font-display font-bold text-h2 text-ink">{pillar.title}</h3>
                  <p className="mt-3 text-small text-muted">{pillar.body}</p>
                </article>
              </li>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <Link className={goldOutlineButton} to="/en/program">
              See the program
            </Link>
          </div>
        </div>
      </section>

      {/* Six signature experiences (shot 5.38.52) */}
      <section className="bg-ivory px-4 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto w-full max-w-[1280px]">
          <Eyebrow>Highlights</Eyebrow>
          <h2 className="mt-3 font-display text-h1 text-ink">Six signature experiences</h2>
          <span className="mt-5 block h-0.5 w-10 rounded-full bg-gold" aria-hidden="true" />
          <p className="mt-5 max-w-[640px] text-lead text-muted">
            Six signature experiences make up A2M 2027 — each engineered for a precise outcome, from ministerial
            dialogue to deal-making meetings.
          </p>
          <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.map((experience) => (
              <li key={experience.title}>
                <article className="h-full rounded-sm border border-hairline bg-card p-6 shadow-card">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-copper">
                    {experience.label}
                  </p>
                  <h3 className="mt-5 font-display font-semibold text-h3 text-emerald-deep">{experience.title}</h3>
                  <p className="mt-2 text-small text-muted">{experience.body}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Ministerial Roundtable split — 1280px card on white, photo fills the
          card height, green panel right (pixel-measured from shot 5.38.52) */}
      <section className="bg-ivory px-4 py-14 sm:px-8 lg:px-16">
        <div className="mx-auto grid w-full max-w-[1280px] overflow-hidden rounded-sm shadow-card lg:grid-cols-2">
          <img
            alt="African and Canadian representatives gathered around a ministerial roundtable"
            loading="lazy"
            className="h-96 w-full object-cover lg:h-full lg:min-h-[30rem]"
            src="/images/home/ministerial-roundtable.jpg"
          />
          <div className="a2m-motif relative overflow-hidden px-6 py-16 text-ivory sm:px-10 lg:flex lg:items-center lg:px-14">
            <div className="relative z-10 max-w-xl">
              <Eyebrow>Flagship · June 6 · Closed-door</Eyebrow>
              <h2 className="mt-3 font-display text-h1 text-ivory">Ministerial Roundtable</h2>
              <p className="mt-5 text-lead text-champagne/85">
                The political dialogue that opens A2M 2027 — ministers of mines, Canadian officials and institutional
                leaders shaping the Canada–Africa mining partnership behind closed doors. 30 signatory ministers, one
                table.
              </p>
              <Link className={[goldOutlineButton, 'mt-8'].join(' ')} to="/en/program/ministerial-roundtable">
                Discover the Roundtable
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Honorary Country — standalone duotone photo card (shot 5.39.12) */}
      <section className="bg-ivory px-4 py-14 sm:px-8 lg:px-16">
        <div className="relative mx-auto min-h-[30rem] w-full max-w-[1280px] overflow-hidden rounded-sm shadow-card lg:min-h-[34rem]">
          <img
            alt="Abidjan skyline and bridge at dusk"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
            src="/images/home/abidjan-bridge.jpg"
          />
          <div className="absolute inset-0 bg-emerald-deep/55" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-gradient-to-r from-emerald-deep/85 via-emerald-deep/45 to-transparent"
            aria-hidden="true"
          />
          <div className="relative z-[2] px-6 py-14 text-ivory sm:px-10 lg:max-w-[46rem] lg:px-14 lg:py-16">
            <Eyebrow>Honorary Country 2027</Eyebrow>
            <h2 className="mt-3 font-display text-h1 text-ivory">Côte d’Ivoire</h2>
            <p className="mt-5 max-w-[520px] text-lead text-champagne/85">
              The #1 gold exploration destination in West Africa, Côte d’Ivoire will lead a high-level delegation to
              Montreal to present its flagship projects to Canadian investors.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-ivory/20 pt-8 sm:grid-cols-4">
              {[
                ['N°1', 'gold exploration in West Africa'],
                ['10+', 'Canadian TSX companies (A2M estimate)'],
                ['59 t', 'gold produced in 2024'],
                ['100 t/yr', 'target by 2030'],
              ].map(([value, label]) => (
                <div key={value}>
                  <dt className="sr-only">{label}</dt>
                  <dd>
                    <span className="font-display font-bold text-data-xl text-gold-light">{value}</span>
                    <span className="mt-1 block text-small text-champagne/75">{label}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <Link
              className={[goldOutlineButton, 'mt-10'].join(' ')}
              to="/en/program/honorary-country"
            >
              Discover the Honorary Country
            </Link>
          </div>
        </div>
      </section>

      {/* Top reasons to attend (shot 5.39.21) */}
      <section className="bg-surface px-4 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="mx-auto max-w-[720px] text-center">
            <Eyebrow center>Attend</Eyebrow>
            <h2 className="mt-3 font-display text-h1 text-ink">Top reasons to attend</h2>
          </div>
          <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <li key={reason.number}>
                <article className="h-full rounded-sm border border-hairline bg-card p-6 shadow-card">
                  <p className="font-display font-bold text-data-xl text-gold">{reason.number}</p>
                  <h3 className="mt-4 font-display font-semibold text-h3 text-ink">{reason.title}</h3>
                  <p className="mt-2 text-small text-muted">{reason.body}</p>
                </article>
              </li>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <Link className={outlineButton} to="/en/news#sign-up">
              Join the waitlist
            </Link>
          </div>
        </div>
      </section>

      {/* Program download band (shot 5.39.21) */}
      <section className="a2m-motif relative overflow-hidden bg-emerald-deep px-4 py-14 text-ivory sm:px-8 lg:px-16">
        <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-display text-h2 text-ivory">Download the A2M 2027 program</h2>
            <p className="mt-3 max-w-xl text-lead text-champagne/85">
              Keynotes, panels, roundtables and the three-day agenda — the full program in one document.
            </p>
          </div>
          <a className={goldOutlineButton} href={PROGRAM_PDF} target="_blank" rel="noreferrer">
            Download the program
          </a>
        </div>
      </section>

      {/* News (shot 5.39.29) */}
      <section className="bg-ivory px-4 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto w-full max-w-[1280px]">
          <Eyebrow>News</Eyebrow>
          <h2 className="mt-3 font-display text-h1 text-ink">Latest announcements</h2>
          <span className="mt-5 block h-0.5 w-10 rounded-full bg-gold" aria-hidden="true" />
          <ul className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {news.map((item) => (
              <li key={item.title}>
                <article>
                  <img
                    alt=""
                    loading="lazy"
                    className="aspect-[1.52] w-full rounded-sm object-cover shadow-card"
                    src={item.image}
                  />
                  <p className="mt-5 text-small font-semibold text-copper">{item.date}</p>
                  <h3 className="mt-2 font-display font-semibold text-h3 text-ink">{item.title}</h3>
                  <p className="mt-2 text-small text-muted">{item.body}</p>
                </article>
              </li>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <Link className={outlineButton} to="/en/news">
              See all news
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA band (shot 5.39.29) */}
      <section className="bg-emerald-ink px-4 py-14 text-ivory sm:px-8 lg:px-16">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <p className="font-display font-bold text-h3 text-ivory">A2M 2027 — June 7–9, Montreal</p>
            <p className="mt-1 text-small text-champagne/75">
              Registration not open yet · join the waitlist for the Founding Delegate rate
            </p>
          </div>
          <Link className={goldButton} to="/en/news#sign-up">
            Join the waitlist
          </Link>
        </div>
      </section>
    </main>
  )
}
