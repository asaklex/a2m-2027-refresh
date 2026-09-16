import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import HeroCarousel from '../components/HeroCarousel'

const programPdf =
  'https://africa-mining-montreal.netlify.app/program/a2m-2027-program.pdf'

const speakers = [
  {
    name: 'H.E. Mahamadou Issoufou',
    title: 'Former President of Niger',
    image: '/images/people/issoufou-mahamadou.jpg',
  },
  {
    name: 'The Hon. Tim Hodgson',
    title: 'Minister of Energy and Natural Resources of Canada',
    image: '/images/people/tim-hodgson.jpg',
  },
  {
    name: 'Kateri Champagne Jourdain',
    title: 'Minister of Employment and Social Development',
    image: '/images/people/kateri-champagne-jourdain.jpg',
  },
  {
    name: 'Mamadou Sangafowa Coulibaly',
    title: 'Minister of Mines, Petroleum and Energy of Côte d’Ivoire',
    image: '/images/people/mamadou-sangafowa-coulibaly.jpg',
  },
]

const experiences = [
  {
    number: '01',
    label: 'Flagship · June 6',
    title: 'Ministerial Roundtable',
    body: 'Closed-door dialogue between African ministers, Canadian officials and industry leaders.',
  },
  {
    number: '02',
    label: 'Flagship · June 7',
    title: 'Honorary Country',
    body: 'A dedicated spotlight on Côte d’Ivoire — its projects, policies and partnerships.',
  },
  {
    number: '03',
    label: 'Forum',
    title: 'Women in Mining',
    body: 'Recognising the women driving transformation across African mining.',
  },
  {
    number: '04',
    label: 'Capital-side',
    title: 'Investors Programme',
    body: 'Curated access for funds, family offices and institutional investors.',
  },
  {
    number: '05',
    label: 'B2B',
    title: 'Business Matchmaking',
    body: 'Pre-qualified meetings that turn introductions into opportunities.',
  },
  {
    number: '06',
    label: 'Social',
    title: 'Networking',
    body: 'From opening receptions to private dinners — the conversations that count.',
  },
]

const reasons = [
  {
    number: '01',
    title: 'Meet the decision-makers',
    body: '30+ African ministers, leading financiers, investors, operators and innovators — all in one room.',
  },
  {
    number: '02',
    title: 'Build your pipeline',
    body: 'Identify projects, partners and capital sources aligned with your strategic priorities.',
  },
  {
    number: '03',
    title: 'Discover Côte d’Ivoire',
    body: 'Explore one of Africa’s fastest-growing mining jurisdictions, our Honorary Country for 2027.',
  },
  {
    number: '04',
    title: 'Shape the future',
    body: 'Join the conversations defining how Africa’s mineral wealth powers the global energy transition.',
  },
  {
    number: '05',
    title: 'Access African capital',
    body: 'Connect with African mining companies, developers and capital providers seeking North American partnerships.',
  },
  {
    number: '06',
    title: 'Leverage diplomatic ties',
    body: 'Benefit from the relationships and facilitation of governments, embassies and trade agencies.',
  },
]

const announcements = [
  {
    date: '14 Sep 2026',
    title: 'Côte d’Ivoire named Honorary Country for A2M 2027',
    image: '/images/news/cote-divoire-honorary-country.jpg',
  },
  {
    date: '01 Oct 2026',
    title: 'Ministerial Roundtable agenda announced',
    image: '/images/news/ministerial-round-table-agenda.jpg',
  },
  {
    date: '17 Nov 2026',
    title: 'A2M 2027 launches sustainability pledge',
    image: '/images/news/sustainability-pledge.jpg',
  },
]

function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={
        dark
          ? 'mb-5 text-xs font-bold uppercase tracking-[0.18em] text-gold'
          : 'mb-5 text-xs font-bold uppercase tracking-[0.18em] text-emerald-cta'
      }
    >
      {children}
    </p>
  )
}

const outlineButton =
  'inline-flex items-center justify-center border border-current px-7 py-3 text-xs font-bold uppercase tracking-[0.14em] transition-colors hover:bg-emerald-cta hover:text-white'

const goldOutlineButton =
  'inline-flex items-center justify-center border border-gold px-7 py-3 text-xs font-bold uppercase tracking-[0.14em] text-gold transition-colors hover:bg-gold hover:text-emerald-cta'

export default function HomePage() {
  return (
    <main>
      <HeroCarousel />

      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Speakers</Eyebrow>
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <h2 className="max-w-xl font-display text-4xl leading-[0.98] text-emerald-cta sm:text-5xl">
              Speakers &amp; panellists
            </h2>
            <Link className={outlineButton} to="/en/speakers">
              Meet all speakers
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {speakers.map((speaker) => (
              <article key={speaker.name}>
                <img
                  alt={speaker.name}
                  className="aspect-[0.84] w-full object-cover grayscale"
                  src={speaker.image}
                />
                <h3 className="mt-5 font-display text-xl leading-tight text-emerald-cta">{speaker.name}</h3>
                <p className="mt-2 max-w-[17rem] text-sm leading-relaxed text-emerald-cta/70">{speaker.title}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="a2m-motif relative overflow-hidden bg-emerald-cta px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Eyebrow dark>Invest · Deal · Decide</Eyebrow>
          <h2 className="max-w-2xl font-display text-4xl leading-[0.98] sm:text-5xl">
            Three pillars, one platform
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75">
            A2M brings African mining supply and North American capital together around concrete
            goals.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              ['Invest', 'Capital meets opportunity.', 'Connect with the people and projects shaping Africa’s mining future.'],
              ['Deal', 'Relationships become partnerships.', 'Move from introductions to transactions through curated, high-value exchanges.'],
              ['Decide', 'Strategy meets insight.', 'Access the intelligence, policy dialogue and network to make better decisions.'],
            ].map(([title, lead, body]) => (
              <article className="border border-white/40 p-7 lg:p-8" key={title}>
                <h3 className="font-display text-3xl text-white">{title}</h3>
                <p className="mt-6 font-medium leading-relaxed text-white">{lead}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Highlights</Eyebrow>
          <h2 className="max-w-xl font-display text-4xl leading-[0.98] text-emerald-cta sm:text-5xl">
            Six signature experiences
          </h2>
          <div className="mt-12 grid border-l border-t border-forest/20 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.map((experience) => (
              <article className="border-b border-r border-forest/20 p-7 lg:p-8" key={experience.title}>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold">
                  {experience.number} · {experience.label}
                </p>
                <h3 className="mt-8 font-display text-2xl leading-tight text-emerald-cta">{experience.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-emerald-cta/70">{experience.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid bg-emerald-cta lg:grid-cols-2">
        <img
          alt="African and Canadian representatives gathered around a ministerial roundtable"
          className="h-80 w-full object-cover lg:order-2 lg:h-full"
          src="/images/home/ministerial-roundtable.jpg"
        />
        <div className="a2m-motif relative overflow-hidden px-6 py-16 text-white sm:px-10 lg:order-1 lg:flex lg:min-h-[29rem] lg:items-center lg:px-16">
          <div className="max-w-xl">
            <Eyebrow dark>Flagship · June 6</Eyebrow>
            <h2 className="font-display text-4xl leading-[0.98] sm:text-5xl">Ministerial Roundtable</h2>
            <p className="mt-7 leading-relaxed text-white/75">
              A closed-door forum for African ministers, Canadian government officials and
              industry leaders to align on investment priorities, policy frameworks and
              cross-border partnerships.
            </p>
            <Link className={[goldOutlineButton, 'mt-9'].join(' ')} to="/en/program/ministerial-roundtable">
              Explore the roundtable
            </Link>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/home/abidjan-bridge.jpg')" }}
      >
        <div className="absolute inset-0 bg-emerald-cta/30" />
        <div className="relative bg-emerald-cta px-6 py-20 text-white sm:px-10 lg:min-h-[39rem] lg:w-[48%] lg:px-16 lg:py-28">
          <div className="max-w-md">
            <Eyebrow dark>Honorary Country 2027</Eyebrow>
            <h2 className="font-display text-5xl leading-none sm:text-6xl">Côte d’Ivoire</h2>
            <p className="mt-7 leading-relaxed text-white/75">
              A dynamic mining jurisdiction at the heart of West Africa — and our Honorary
              Country for A2M 2027.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-white/25 pt-8">
              {[
                ['N°1', 'Gold producer in francophone West Africa'],
                ['10+', 'Operating gold mines'],
                ['59 t', 'Gold produced in 2025'],
                ['100 t/yr', 'Target production by 2030'],
              ].map(([value, label]) => (
                <div key={value}>
                  <p className="font-display text-3xl text-gold">{value}</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/70">{label}</p>
                </div>
              ))}
            </div>
            <Link className={[goldOutlineButton, 'mt-10'].join(' ')} to="/en/honorary-country">
              Discover Côte d’Ivoire
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f6f2] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Attend</Eyebrow>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <h2 className="max-w-xl font-display text-4xl leading-[0.98] text-emerald-cta sm:text-5xl">
              Why A2M 2027?
            </h2>
            <Link className={outlineButton} to="/en/attend">
              Why attend
            </Link>
          </div>
          <div className="mt-12 grid border-l border-t border-forest/20 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <article className="border-b border-r border-forest/20 p-7 lg:p-8" key={reason.number}>
                <p className="text-xs font-bold tracking-[0.14em] text-gold">{reason.number}</p>
                <h3 className="mt-7 font-display text-2xl leading-tight text-emerald-cta">{reason.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-emerald-cta/70">{reason.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="a2m-motif relative overflow-hidden bg-emerald-cta px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <Eyebrow dark>Programme</Eyebrow>
            <h2 className="font-display text-4xl leading-[0.98] sm:text-5xl">Plan your A2M experience</h2>
            <p className="mt-5 max-w-xl leading-relaxed text-white/75">
              Explore the sessions, meetings and conversations that will shape the week.
            </p>
          </div>
          <a className={goldOutlineButton} href={programPdf} rel="noreferrer" target="_blank">
            Download the programme
          </a>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>News</Eyebrow>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <h2 className="font-display text-4xl leading-[0.98] text-emerald-cta sm:text-5xl">Latest announcements</h2>
            <Link className={outlineButton} to="/en/news">
              See all news
            </Link>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {announcements.map((announcement) => (
              <article key={announcement.title}>
                <img
                  alt=""
                  className="aspect-[1.52] w-full object-cover"
                  src={announcement.image}
                />
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-gold">
                  {announcement.date}
                </p>
                <h3 className="mt-3 font-display text-2xl leading-tight text-emerald-cta">{announcement.title}</h3>
                <Link className="mt-5 inline-flex border-b border-gold pb-1 text-xs font-bold uppercase tracking-[0.14em] text-emerald-cta" to="/en/news">
                  Read more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-cover bg-center px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
        style={{ backgroundImage: "url('/images/hero/slide-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-emerald-cta/90 backdrop-blur-[3px]" />
        <div className="relative mx-auto max-w-7xl text-center text-white">
          <h2 className="mx-auto max-w-3xl font-display text-5xl leading-[0.98] sm:text-6xl">
            Be part of African Mining in Montreal
          </h2>
          <p className="mx-auto mt-7 max-w-xl leading-relaxed text-white/75">
            Join the people, partnerships and conversations driving the future of African mining.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link className={goldOutlineButton} to="/en/register">
              Register your interest
            </Link>
            <Link className={goldOutlineButton} to="/en/contact">
              Talk to our team
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
