import FakeForm from '../components/ui/FakeForm'
import NewsFilter from '../components/NewsFilter'
import OnThisPageNav from '../components/OnThisPageNav'
import { Link } from 'react-router-dom'

export default function NewsPage() {
  return (
    <>
  <div className="a2m-motif relative overflow-hidden border-hairline border-b bg-emerald-deep text-ivory">
    <img alt="" aria-hidden="true" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="100vw" srcSet="/images/news/canada-africa-strategy.jpg 640w, /images/news/canada-africa-strategy.jpg 750w, /images/news/canada-africa-strategy.jpg 828w, /images/news/canada-africa-strategy.jpg 1080w, /images/news/canada-africa-strategy.jpg 1200w, /images/news/canada-africa-strategy.jpg 1920w, /images/news/canada-africa-strategy.jpg 2048w, /images/news/canada-africa-strategy.jpg 3840w" src="/images/news/canada-africa-strategy.jpg" />
    <div aria-hidden="true" className="absolute inset-0 backdrop-blur-[6px]" style={{ maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 36%, rgba(0,0,0,0) 72%)', WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 36%, rgba(0,0,0,0) 72%)' }} />
    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-emerald-deep/95 via-emerald-deep/70 to-emerald-deep/25" />
    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-emerald-deep/90 to-transparent" />
    <div className="mx-auto w-full relative z-10 flex min-h-[420px] max-w-none flex-col justify-center px-4 py-12 sm:px-6 lg:min-h-[520px] lg:px-6 lg:py-16">
      <div className="mb-6 [&_[aria-current]]:text-champagne [&_a]:text-champagne/80 [&_svg]:text-champagne/40">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-[12px] text-subtle">
            <li>
              <Link className="transition-colors hover:text-emerald-cta" to="/en">
                Home
              </Link>
            </li>
            <li className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right size-3.5 text-hairline" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
              <span aria-current="page" className="text-muted">
                News
              </span>
            </li>
          </ol>
        </nav>
      </div>
      <span className="font-semibold text-[11px] text-gold uppercase tracking-[0.26em] [text-shadow:0_1px_10px_rgba(3,20,16,0.55)]">
        News
      </span>
      <h1 className="mt-3 max-w-[760px] font-bold text-[1.7rem] text-ivory leading-[1.15] tracking-[-0.005em] [font-family:var(--font-display)] [text-shadow:0_2px_20px_rgba(3,20,16,0.55)] sm:text-[2.4rem] sm:leading-[1.1] lg:text-[2.75rem]">
        <span className="text-gold">
          Announcements
        </span>
        & media coverage
      </h1>
      <span className="mt-5 block h-0.5 w-10 rounded-full bg-gold" aria-hidden="true" />
      <p className="mt-4 max-w-[640px] text-champagne/90 text-lead [text-shadow:0_1px_14px_rgba(3,20,16,0.6)]">
        Announcements, articles and media coverage around A2M 2027.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-ivory/15 border-t pt-6 lg:mt-12">
        <div className="flex items-center gap-2.5">
          <div>
            <p className="font-semibold text-[10px] text-champagne/85 uppercase tracking-[0.16em]">
              A2M announcements
            </p>
            <p className="font-display font-semibold text-[14px] text-ivory leading-tight">
              News Releases
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <div>
            <p className="font-semibold text-[10px] text-champagne/85 uppercase tracking-[0.16em]">
              External coverage
            </p>
            <p className="font-display font-semibold text-[14px] text-ivory leading-tight">
              Market News
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <div>
            <p className="font-semibold text-[10px] text-champagne/85 uppercase tracking-[0.16em]">
              Honorary Country
            </p>
            <p className="font-display font-semibold text-[14px] text-ivory leading-tight">
              Côte d'Ivoire
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <OnThisPageNav
    items={[
      { id: "news-release", label: "News Release" },
      { id: "market-news", label: "Market News" },
      { id: "sign-up", label: "Sign up" },
    ]}
  />
  <section id="news-release" className="a2m-reveal scroll-mt-24 py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-16">
    <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16">
      <h2 className="font-display font-bold tracking-[-0.01em] text-h2">
        News Release
      </h2>
      <div className="mt-8">
        <div className="flex flex-col gap-8">
          <NewsFilter
            tabs={[
              { value: "all", label: "All" },
              { value: "Event", label: "Event" },
              { value: "Policy", label: "Policy" },
              { value: "Investment", label: "Investment" },
              { value: "ESG", label: "ESG" },
            ]}
            cards={[
              { topic: "Event", node: (
                <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex flex-col overflow-hidden p-0">
                  <div style={{ aspectRatio: '16 / 9' }} className="relative overflow-hidden border-hairline bg-surface w-full rounded-none border-0">
                    <img alt="Visual: Côte d'Ivoire / mining sector" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" srcSet="/images/news/cote-divoire-honorary-country.jpg 256w, /images/news/cote-divoire-honorary-country.jpg 384w, /images/news/cote-divoire-honorary-country.jpg 640w, /images/news/cote-divoire-honorary-country.jpg 750w, /images/news/cote-divoire-honorary-country.jpg 828w, /images/news/cote-divoire-honorary-country.jpg 1080w, /images/news/cote-divoire-honorary-country.jpg 1200w, /images/news/cote-divoire-honorary-country.jpg 1920w, /images/news/cote-divoire-honorary-country.jpg 2048w, /images/news/cote-divoire-honorary-country.jpg 3840w" src="/images/news/cote-divoire-honorary-country.jpg" />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-sm px-[9px] py-1 font-sans font-bold text-[9px] uppercase tracking-[0.14em] bg-anthracite/8 text-muted">
                        Internal
                      </span>
                      <span className="text-small text-subtle">
                        Event
                        ·
                        September 15, 2026
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-h3 text-ink">
                      Côte d'Ivoire named Honorary Country for A2M 2027
                    </h3>
                    <p className="text-body text-muted">
                      The #1 gold exploration destination in West Africa will lead a high-level delegation to Montréal.
                    </p>
                    <div className="mt-auto pt-2">
                      <a className="inline-flex items-center gap-1.5 font-semibold text-emerald-cta text-small transition-colors hover:text-emerald-deep" href="#">
                        Read more
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4" aria-hidden="true">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ) },
              { topic: "Policy", node: (
                <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex flex-col overflow-hidden p-0">
                  <div style={{ aspectRatio: '16 / 9' }} className="relative overflow-hidden border-hairline bg-surface w-full rounded-none border-0">
                    <img alt="Visual: ministerial dialogue" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" srcSet="/images/news/ministerial-round-table-agenda.jpg 256w, /images/news/ministerial-round-table-agenda.jpg 384w, /images/news/ministerial-round-table-agenda.jpg 640w, /images/news/ministerial-round-table-agenda.jpg 750w, /images/news/ministerial-round-table-agenda.jpg 828w, /images/news/ministerial-round-table-agenda.jpg 1080w, /images/news/ministerial-round-table-agenda.jpg 1200w, /images/news/ministerial-round-table-agenda.jpg 1920w, /images/news/ministerial-round-table-agenda.jpg 2048w, /images/news/ministerial-round-table-agenda.jpg 3840w" src="/images/news/ministerial-round-table-agenda.jpg" />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-sm px-[9px] py-1 font-sans font-bold text-[9px] uppercase tracking-[0.14em] bg-anthracite/8 text-muted">
                        Internal
                      </span>
                      <span className="text-small text-subtle">
                        Policy
                        ·
                        October 2, 2026
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-h3 text-ink">
                      Ministerial Roundtable agenda revealed
                    </h3>
                    <p className="text-body text-muted">
                      The first Canada-Africa political dialogue on critical minerals on North American soil sets out its focus areas.
                    </p>
                    <div className="mt-auto pt-2">
                      <a className="inline-flex items-center gap-1.5 font-semibold text-emerald-cta text-small transition-colors hover:text-emerald-deep" href="#">
                        Read more
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4" aria-hidden="true">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ) },
              { topic: "Investment", node: (
                <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex flex-col overflow-hidden p-0">
                  <div style={{ aspectRatio: '16 / 9' }} className="relative overflow-hidden border-hairline bg-surface w-full rounded-none border-0">
                    <img alt="Visual: project showcase" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" srcSet="/images/news/investment-showcase-call.jpg 256w, /images/news/investment-showcase-call.jpg 384w, /images/news/investment-showcase-call.jpg 640w, /images/news/investment-showcase-call.jpg 750w, /images/news/investment-showcase-call.jpg 828w, /images/news/investment-showcase-call.jpg 1080w, /images/news/investment-showcase-call.jpg 1200w, /images/news/investment-showcase-call.jpg 1920w, /images/news/investment-showcase-call.jpg 2048w, /images/news/investment-showcase-call.jpg 3840w" src="/images/news/investment-showcase-call.jpg" />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-sm px-[9px] py-1 font-sans font-bold text-[9px] uppercase tracking-[0.14em] bg-anthracite/8 text-muted">
                        Internal
                      </span>
                      <span className="text-small text-subtle">
                        Investment
                        ·
                        October 20, 2026
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-h3 text-ink">
                      Investment Showcase opens its call for projects
                    </h3>
                    <p className="text-body text-muted">
                      Pre-screened African mining projects will be presented to institutional investors and DFIs.
                    </p>
                    <div className="mt-auto pt-2">
                      <a className="inline-flex items-center gap-1.5 font-semibold text-emerald-cta text-small transition-colors hover:text-emerald-deep" href="#">
                        Read more
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4" aria-hidden="true">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ) },
              { topic: "Event", node: (
                <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex flex-col overflow-hidden p-0">
                  <div style={{ aspectRatio: '16 / 9' }} className="relative overflow-hidden border-hairline bg-surface w-full rounded-none border-0">
                    <img alt="Visual: Women in Mining Forum" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" srcSet="/images/news/women-in-mining-programme.jpg 256w, /images/news/women-in-mining-programme.jpg 384w, /images/news/women-in-mining-programme.jpg 640w, /images/news/women-in-mining-programme.jpg 750w, /images/news/women-in-mining-programme.jpg 828w, /images/news/women-in-mining-programme.jpg 1080w, /images/news/women-in-mining-programme.jpg 1200w, /images/news/women-in-mining-programme.jpg 1920w, /images/news/women-in-mining-programme.jpg 2048w, /images/news/women-in-mining-programme.jpg 3840w" src="/images/news/women-in-mining-programme.jpg" />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-sm px-[9px] py-1 font-sans font-bold text-[9px] uppercase tracking-[0.14em] bg-anthracite/8 text-muted">
                        Internal
                      </span>
                      <span className="text-small text-subtle">
                        Event
                        ·
                        November 5, 2026
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-h3 text-ink">
                      Women in Mining Forum program announced
                    </h3>
                    <p className="text-body text-muted">
                      Keynotes, panels and networking dedicated to women's leadership in mining across Canada and Africa.
                    </p>
                    <div className="mt-auto pt-2">
                      <a className="inline-flex items-center gap-1.5 font-semibold text-emerald-cta text-small transition-colors hover:text-emerald-deep" href="#">
                        Read more
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4" aria-hidden="true">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ) },
              { topic: "ESG", node: (
                <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex flex-col overflow-hidden p-0">
                  <div style={{ aspectRatio: '16 / 9' }} className="relative overflow-hidden border-hairline bg-surface w-full rounded-none border-0">
                    <img alt="Visual: community impact" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" srcSet="/images/news/sustainability-pledge.jpg 256w, /images/news/sustainability-pledge.jpg 384w, /images/news/sustainability-pledge.jpg 640w, /images/news/sustainability-pledge.jpg 750w, /images/news/sustainability-pledge.jpg 828w, /images/news/sustainability-pledge.jpg 1080w, /images/news/sustainability-pledge.jpg 1200w, /images/news/sustainability-pledge.jpg 1920w, /images/news/sustainability-pledge.jpg 2048w, /images/news/sustainability-pledge.jpg 3840w" src="/images/news/sustainability-pledge.jpg" />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-sm px-[9px] py-1 font-sans font-bold text-[9px] uppercase tracking-[0.14em] bg-anthracite/8 text-muted">
                        Internal
                      </span>
                      <span className="text-small text-subtle">
                        ESG
                        ·
                        November 18, 2026
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-h3 text-ink">
                      Sustainability Program: up to 10% of revenues pledged
                    </h3>
                    <p className="text-body text-muted">
                      A2M directs a share of its revenues to children's education and women's empowerment across Africa.
                    </p>
                    <div className="mt-auto pt-2">
                      <a className="inline-flex items-center gap-1.5 font-semibold text-emerald-cta text-small transition-colors hover:text-emerald-deep" href="#">
                        Read more
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4" aria-hidden="true">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ) },
              { topic: "Event", node: (
                <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex flex-col overflow-hidden p-0">
                  <div style={{ aspectRatio: '16 / 9' }} className="relative overflow-hidden border-hairline bg-surface w-full rounded-none border-0">
                    <img alt="Visual: delegate registration" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" srcSet="/images/news/early-bird-open.jpg 256w, /images/news/early-bird-open.jpg 384w, /images/news/early-bird-open.jpg 640w, /images/news/early-bird-open.jpg 750w, /images/news/early-bird-open.jpg 828w, /images/news/early-bird-open.jpg 1080w, /images/news/early-bird-open.jpg 1200w, /images/news/early-bird-open.jpg 1920w, /images/news/early-bird-open.jpg 2048w, /images/news/early-bird-open.jpg 3840w" src="/images/news/early-bird-open.jpg" />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-sm px-[9px] py-1 font-sans font-bold text-[9px] uppercase tracking-[0.14em] bg-anthracite/8 text-muted">
                        Internal
                      </span>
                      <span className="text-small text-subtle">
                        Event
                        ·
                        September 1, 2026
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-h3 text-ink">
                      Early Bird registration now open
                    </h3>
                    <p className="text-body text-muted">
                      Take advantage of the preferential rate to secure your place at A2M 2027 before December 31, 2026.
                    </p>
                    <div className="mt-auto pt-2">
                      <a className="inline-flex items-center gap-1.5 font-semibold text-emerald-cta text-small transition-colors hover:text-emerald-deep" href="#">
                        Read more
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4" aria-hidden="true">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ) },
            ]}
          />
        </div>
      </div>
    </div>
  </section>
  <section id="market-news" className="a2m-reveal scroll-mt-24 py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-16">
    <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16">
      <h2 className="font-display font-bold tracking-[-0.01em] text-h2">
        Market News
      </h2>
      <div className="mt-8">
        <div className="flex flex-col gap-8">
          <NewsFilter
            tabs={[
              { value: "all", label: "All" },
              { value: "Policy", label: "Policy" },
              { value: "Investment", label: "Investment" },
              { value: "ESG", label: "ESG" },
            ]}
            cards={[
              { topic: "Policy", node: (
                <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex flex-col overflow-hidden p-0">
                  <div style={{ aspectRatio: '16 / 9' }} className="relative overflow-hidden border-hairline bg-surface w-full rounded-none border-0">
                    <img alt="Visual: Canada-Africa policy" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" srcSet="/images/news/canada-africa-strategy.jpg 256w, /images/news/canada-africa-strategy.jpg 384w, /images/news/canada-africa-strategy.jpg 640w, /images/news/canada-africa-strategy.jpg 750w, /images/news/canada-africa-strategy.jpg 828w, /images/news/canada-africa-strategy.jpg 1080w, /images/news/canada-africa-strategy.jpg 1200w, /images/news/canada-africa-strategy.jpg 1920w, /images/news/canada-africa-strategy.jpg 2048w, /images/news/canada-africa-strategy.jpg 3840w" src="/images/news/canada-africa-strategy.jpg" />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-sm px-[9px] py-1 font-sans font-bold text-[9px] uppercase tracking-[0.14em] bg-bronze/15 text-copper">
                        External
                      </span>
                      <span className="text-small text-subtle">
                        Policy
                        ·
                        March 6, 2025
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-h3 text-ink">
                      Canada's Africa Strategy: what it means for mining
                    </h3>
                    <p className="text-body text-muted">
                      Launched in March 2025, Canada's first comprehensive Africa Strategy sets the foundation for deeper economic cooperation.
                    </p>
                    <div className="mt-auto pt-2">
                      <a href="https://www.canada.ca" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-emerald-cta text-small transition-colors hover:text-emerald-deep">
                        Read more
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right size-4" aria-hidden="true">
                          <path d="M7 7h10v10" />
                          <path d="M7 17 17 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ) },
              { topic: "Investment", node: (
                <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex flex-col overflow-hidden p-0">
                  <div style={{ aspectRatio: '16 / 9' }} className="relative overflow-hidden border-hairline bg-surface w-full rounded-none border-0">
                    <img alt="Visual: mining finance markets" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" srcSet="/images/news/tsx-mining-finance.jpg 256w, /images/news/tsx-mining-finance.jpg 384w, /images/news/tsx-mining-finance.jpg 640w, /images/news/tsx-mining-finance.jpg 750w, /images/news/tsx-mining-finance.jpg 828w, /images/news/tsx-mining-finance.jpg 1080w, /images/news/tsx-mining-finance.jpg 1200w, /images/news/tsx-mining-finance.jpg 1920w, /images/news/tsx-mining-finance.jpg 2048w, /images/news/tsx-mining-finance.jpg 3840w" src="/images/news/tsx-mining-finance.jpg" />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-sm px-[9px] py-1 font-sans font-bold text-[9px] uppercase tracking-[0.14em] bg-bronze/15 text-copper">
                        External
                      </span>
                      <span className="text-small text-subtle">
                        Investment
                        ·
                        February 12, 2026
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-h3 text-ink">
                      TSX remains the engine of global mining finance
                    </h3>
                    <p className="text-body text-muted">
                      Montréal and the TSX/TSX-V remain central to financing mining companies active across Africa.
                    </p>
                    <div className="mt-auto pt-2">
                      <a href="https://www.pdac.ca" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-emerald-cta text-small transition-colors hover:text-emerald-deep">
                        Read more
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right size-4" aria-hidden="true">
                          <path d="M7 7h10v10" />
                          <path d="M7 17 17 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ) },
              { topic: "ESG", node: (
                <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex flex-col overflow-hidden p-0">
                  <div style={{ aspectRatio: '16 / 9' }} className="relative overflow-hidden border-hairline bg-surface w-full rounded-none border-0">
                    <img alt="Visual: critical minerals" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" srcSet="/images/news/afcfta-critical-minerals.jpg 256w, /images/news/afcfta-critical-minerals.jpg 384w, /images/news/afcfta-critical-minerals.jpg 640w, /images/news/afcfta-critical-minerals.jpg 750w, /images/news/afcfta-critical-minerals.jpg 828w, /images/news/afcfta-critical-minerals.jpg 1080w, /images/news/afcfta-critical-minerals.jpg 1200w, /images/news/afcfta-critical-minerals.jpg 1920w, /images/news/afcfta-critical-minerals.jpg 2048w, /images/news/afcfta-critical-minerals.jpg 3840w" src="/images/news/afcfta-critical-minerals.jpg" />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-sm px-[9px] py-1 font-sans font-bold text-[9px] uppercase tracking-[0.14em] bg-bronze/15 text-copper">
                        External
                      </span>
                      <span className="text-small text-subtle">
                        ESG
                        ·
                        January 22, 2026
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-h3 text-ink">
                      AfCFTA and the future of African critical minerals
                    </h3>
                    <p className="text-body text-muted">
                      The continental framework accelerates local processing before export — a strategic issue for supply chains.
                    </p>
                    <div className="mt-auto pt-2">
                      <a href="https://miningindaba.com/home" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-emerald-cta text-small transition-colors hover:text-emerald-deep">
                        Read more
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right size-4" aria-hidden="true">
                          <path d="M7 7h10v10" />
                          <path d="M7 17 17 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ) },
            ]}
          />
        </div>
      </div>
    </div>
  </section>
  <section id="sign-up" className="a2m-reveal scroll-mt-24 py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-16 a2m-motif-light relative overflow-hidden bg-surface">
    <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16 relative z-10">
      <h2 className="font-display font-bold tracking-[-0.01em] text-h2">
        Sign up
      </h2>
      <div className="mt-8">
        <div className="flex max-w-[620px] flex-col gap-4">
          <p className="text-lead text-muted">
            Subscribe to receive A2M 2027 announcements, the program and the latest news.
          </p>
          <FakeForm className="flex flex-col gap-2">
            <input type="email" className="w-full rounded-sm border border-hairline bg-card px-[18px] font-sans text-ink outline-none transition-all duration-[250ms] ease-discret placeholder:text-anthracite/35 focus:border-emerald-cta focus:shadow-[0_0_0_3px_rgba(15,61,46,0.14)] aria-[invalid=true]:border-deepred aria-[invalid=true]:shadow-[0_0_0_3px_rgba(122,31,31,0.1)] disabled:cursor-not-allowed disabled:bg-anthracite/4 disabled:text-subtle h-12" required placeholder="Your email address" aria-label="Your email address" value="" />
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 [&_svg]:size-4 [&_svg]:shrink-0 bg-emerald-cta text-white hover:-translate-y-0.5 hover:brightness-125 hover:shadow-emerald focus-visible:outline-emerald-deep h-10 px-5 text-[11px] w-full" type="submit">
              Subscribe
            </button>
          </FakeForm>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
