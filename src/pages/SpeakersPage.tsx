import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const speakers = [
  {
    name: 'H.E. Issoufou Mahamadou',
    title: 'Former President of Niger · AfCFTA Champion',
    org: 'Republic of Niger',
    photo: '/images/people/issoufou-mahamadou.jpg',
  },
  {
    name: 'Tim Hodgson',
    title: 'Minister of Energy & Natural Resources',
    org: 'Government of Canada',
    photo: '/images/people/tim-hodgson.jpg',
  },
  {
    name: 'Kateri Champagne Jourdain',
    title: 'Minister of Natural Resources and Forests',
    org: 'Government of Québec',
    photo: '/images/people/kateri-champagne-jourdain.jpg',
  },
  {
    name: 'Mamadou Sangafowa-Coulibaly',
    title: 'Minister of Mines, Petroleum and Energy',
    org: "Côte d'Ivoire · Honorary Country 2027",
    photo: '/images/people/mamadou-sangafowa-coulibaly.jpg',
  },
]

export default function SpeakersPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-ivory px-4 pb-10 pt-14 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[max(1280px,80vw)]">
          <p className="text-small font-semibold uppercase tracking-[0.26em] text-copper">Speakers</p>
          <h1 className="mt-4 font-display text-h1 text-ink">Speakers &amp; panellists</h1>
          <span className="mt-5 block h-0.5 w-10 rounded-full bg-gold" aria-hidden="true" />
          <p className="mt-5 max-w-[640px] text-lead text-muted leading-[1.7]">
            Ministers, financiers, operators and institutional leaders take the A2M 2027 stage across three days. The
            full line-up is unveiled progressively.
          </p>
        </div>
      </section>

      {/* Speaker cards */}
      <section className="bg-ivory px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[max(1280px,80vw)]">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {speakers.map((speaker) => (
              <li key={speaker.name} className="a2m-reveal">
                <article className="group relative aspect-[3/4] overflow-hidden rounded-sm border border-hairline shadow-card">
                  <img
                    src={speaker.photo}
                    alt={speaker.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-emerald-ink/95 via-emerald-deep/35 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h2 className="font-display text-h3 font-semibold text-ivory">{speaker.name}</h2>
                    <p className="mt-1.5 text-small text-champagne/90">{speaker.title}</p>
                    <p className="mt-1 text-small text-champagne/70">{speaker.org}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col items-center gap-3">
            <Link
              to="/en/news"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 [&_svg]:size-4 [&_svg]:shrink-0 h-12 border border-emerald-cta px-6 text-[11px] text-emerald-cta hover:bg-emerald-cta hover:text-ivory focus-visible:outline-emerald-cta"
            >
              See all speakers
              <ArrowRight aria-hidden="true" />
            </Link>
            <p className="text-small text-subtle">New speakers are announced in News as they are confirmed.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
