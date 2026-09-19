import Tabs from '../components/ui/Tabs'
import { Link } from 'react-router-dom'

const btnGold =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 [&_svg]:size-4 [&_svg]:shrink-0 gold-metallic text-anthracite hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold focus-visible:outline-anthracite'

const btnGhostLight =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-ivory/30 font-sans font-semibold uppercase tracking-[0.06em] text-ivory transition-all duration-[250ms] ease-discret hover:border-champagne hover:text-champagne focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne'

export default function ProgramPage() {
  return (
    <>
  <div className="a2m-motif relative overflow-hidden border-hairline border-b bg-emerald-ink text-ivory">
    <img
      alt=""
      aria-hidden="true"
      decoding="async"
      loading="eager"
      className="absolute inset-0 size-full object-cover"
      src="/images/program/program-hero.jpg"
    />
    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-emerald-ink/95 via-emerald-deep/80 to-emerald-deep/25" />
    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-emerald-ink/95 to-transparent" />
    <div className="relative z-10 mx-auto w-full max-w-none px-4 py-14 sm:px-6 lg:px-6 lg:py-20">
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
                Features
              </span>
            </li>
          </ol>
        </nav>
      </div>
      <span className="font-semibold text-[11px] text-gold-light uppercase tracking-[0.26em] [text-shadow:0_1px_10px_rgba(3,20,16,0.55)]">
        Features
      </span>
      <h1 className="mt-3 max-w-[820px] font-bold text-[1.9rem] text-ivory leading-[1.12] tracking-[-0.01em] [font-family:var(--font-display)] [text-shadow:0_2px_20px_rgba(3,20,16,0.55)] sm:text-[2.6rem] lg:text-[3.1rem]">
        Three days of <span className="text-gold-light">deal-making</span>, dialogue and discovery
      </h1>
      <span className="mt-5 block h-0.5 w-10 rounded-full bg-gold" aria-hidden="true" />
      <p className="mt-4 max-w-[640px] text-champagne/90 text-lead [text-shadow:0_1px_14px_rgba(3,20,16,0.6)]">
        Three days of keynotes, panels, B2B meetings and networking events.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Link className={`${btnGold} h-12 px-7 text-[12px]`} to="/en/plan-your-visit#register">
          Get your pass
        </Link>
        <Link className={`${btnGhostLight} h-12 px-7 text-[12px]`} to="#schedule">
          Explore the agenda
        </Link>
      </div>
      <dl className="mt-12 grid max-w-[720px] grid-cols-1 gap-6 border-ivory/15 border-t pt-8 sm:grid-cols-3">
        <div>
          <dt className="font-semibold text-[10px] text-champagne/85 uppercase tracking-[0.16em]">
            Days in Montréal
          </dt>
          <dd className="tnum mt-1 font-display font-bold text-data-xl text-ivory">
            3
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-[10px] text-champagne/85 uppercase tracking-[0.16em]">
            B2B meetings
          </dt>
          <dd className="tnum mt-1 font-display font-bold text-data-xl text-ivory">
            3,000+
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-[10px] text-champagne/85 uppercase tracking-[0.16em]">
            Conference themes
          </dt>
          <dd className="tnum mt-1 font-display font-bold text-data-xl text-ivory">
            3
          </dd>
        </div>
      </dl>
    </div>
  </div>
  <div className="sticky top-20 z-30 hidden border-hairline border-b bg-ivory/95 backdrop-blur lg:top-[155px] lg:block">
    <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16 flex items-center gap-3">
      <span className="shrink-0 font-semibold text-[10px] text-taupe uppercase tracking-[0.18em]">
        In this section
        :
      </span>
      <div className="relative min-w-0 flex-1">
        <nav aria-label="In this section" className="flex items-center gap-1 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <a href="#sessions" data-nav-id="sessions" className="whitespace-nowrap rounded-sm px-3 py-1.5 font-medium transition-colors bg-mist text-emerald-deep">
            Conference Themes
          </a>
          <a href="#schedule" data-nav-id="schedule" className="whitespace-nowrap rounded-sm px-3 py-1.5 font-medium transition-colors text-muted hover:bg-anthracite/5 hover:text-anthracite">
            Agenda
          </a>
          <Link className="inline-flex items-center gap-0.5 whitespace-nowrap rounded-sm px-3 py-1.5 font-medium text-muted text-small transition-colors hover:bg-anthracite/5 hover:text-anthracite" to="/en/program/ministerial-roundtable">
            Ministerial Roundtable
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right size-3 text-taupe" aria-hidden="true">
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </Link>
          <Link className="inline-flex items-center gap-0.5 whitespace-nowrap rounded-sm px-3 py-1.5 font-medium text-muted text-small transition-colors hover:bg-anthracite/5 hover:text-anthracite" to="/en/program/honorary-country">
            Honorary Country
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right size-3 text-taupe" aria-hidden="true">
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </Link>
          <Link className="inline-flex items-center gap-0.5 whitespace-nowrap rounded-sm px-3 py-1.5 font-medium text-muted text-small transition-colors hover:bg-anthracite/5 hover:text-anthracite" to="/en/program/women-in-mining">
            Women in Mining Forum
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right size-3 text-taupe" aria-hidden="true">
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </Link>
          <Link className="inline-flex items-center gap-0.5 whitespace-nowrap rounded-sm px-3 py-1.5 font-medium text-muted text-small transition-colors hover:bg-anthracite/5 hover:text-anthracite" to="/en/program/investors-breakfast">
            Investors' Breakfast
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right size-3 text-taupe" aria-hidden="true">
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </Link>
          <a href="#matchmaking" data-nav-id="matchmaking" className="whitespace-nowrap rounded-sm px-3 py-1.5 font-medium transition-colors text-muted hover:bg-anthracite/5 hover:text-anthracite">
            Business Matchmaking
          </a>
          <Link className="inline-flex items-center gap-0.5 whitespace-nowrap rounded-sm px-3 py-1.5 font-medium text-muted text-small transition-colors hover:bg-anthracite/5 hover:text-anthracite" to="/en/program/networking">
            Networking & Social Events
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right size-3 text-taupe" aria-hidden="true">
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  </div>
  <div className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-2 sm:right-6 sm:bottom-6 lg:hidden print:hidden">
    <button type="button" aria-expanded="false" aria-label="In this section" className="inline-flex h-12 items-center gap-2 rounded-sm bg-emerald-cta px-4 text-white shadow-emerald transition-colors hover:bg-emerald-deep focus-visible:outline-2 focus-visible:outline-emerald-cta focus-visible:outline-offset-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list size-5" aria-hidden="true">
        <path d="M3 5h.01" />
        <path d="M3 12h.01" />
        <path d="M3 19h.01" />
        <path d="M8 5h13" />
        <path d="M8 12h13" />
        <path d="M8 19h13" />
      </svg>
      <span className="hidden max-w-[170px] truncate font-semibold text-[12px] uppercase tracking-[0.06em] sm:inline">
        Program
      </span>
    </button>
  </div>
  <section id="sessions" className="a2m-reveal scroll-mt-24 py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-16">
    <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16">
      <span className="font-semibold text-[11px] text-copper uppercase tracking-[0.22em]">
        Program
      </span>
      <h2 className="mt-2 font-display font-bold tracking-[-0.01em] text-h2">
        Conference Themes
      </h2>
      <div className="mt-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-8">
            <h3 className="max-w-[760px] font-display font-semibold text-h3 text-ink">
              A Platform for Strategic Connections, Deal-Making, and Sustainable Growth
            </h3>
            <p className="max-w-[760px] border-gold border-l-2 pl-5 font-medium text-[1.2rem] text-ink leading-relaxed [font-family:var(--font-display)] sm:text-[1.3rem]">
              At A2M 2027, visionary leaders and decision-makers will convene for insightful discussions, shaping the future of African mining through policy advocacy, innovation showcases, and collaborative problem-solving.
              <em className="font-medium [font-family:var(--font-display)] text-copper">
                This is a rare chance to join a dynamic community revolutionizing African mining
              </em>
              and position yourself at the vanguard of a new era of growth, cooperation, and environmental stewardship.
            </p>
            <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
              Whether you're here to invest, finance, partner, or govern —
              <em className="font-medium [font-family:var(--font-display)] text-copper">
                the A2M 2027 program is built for you
              </em>
              .
            </p>
            <h3 className="max-w-[760px] font-display font-semibold text-h3 text-ink">
              Theme Breakdown
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="h-full">
                <div className="group relative overflow-hidden rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                  <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-gold-light via-gold to-gold-deep opacity-0 transition-opacity duration-[250ms] ease-discret group-hover:opacity-100" />
                  <div style={{ aspectRatio: '16 / 9' }} className="relative overflow-hidden rounded-sm border border-hairline bg-surface w-full mb-1">
                    <img alt="Signing a mining investment agreement" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw" srcSet="/images/program/theme-investing.jpg 256w, /images/program/theme-investing.jpg 384w, /images/program/theme-investing.jpg 640w, /images/program/theme-investing.jpg 750w, /images/program/theme-investing.jpg 828w, /images/program/theme-investing.jpg 1080w, /images/program/theme-investing.jpg 1200w, /images/program/theme-investing.jpg 1920w, /images/program/theme-investing.jpg 2048w, /images/program/theme-investing.jpg 3840w" src="/images/program/theme-investing.jpg" />
                  </div>
                  <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-sm bg-mist text-emerald-cta">
                      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-4">
                        <g fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 22h18" />
                          <path d="M3 11c0-.943 0-1.414.293-1.707S4.057 9 5 9s1.414 0 1.707.293S7 10.057 7 11v6c0 .943 0 1.414-.293 1.707S5.943 19 5 19s-1.414 0-1.707-.293S3 17.943 3 17zm7-4c0-.943 0-1.414.293-1.707S11.057 5 12 5s1.414 0 1.707.293S14 6.057 14 7v10c0 .943 0 1.414-.293 1.707S12.943 19 12 19s-1.414 0-1.707-.293S10 17.943 10 17zm7-3c0-.943 0-1.414.293-1.707S18.057 2 19 2s1.414 0 1.707.293S21 3.057 21 4v13c0 .943 0 1.414-.293 1.707S19.943 19 19 19s-1.414 0-1.707-.293S17 17.943 17 17z" />
                        </g>
                      </svg>
                    </span>
                    Investing
                  </h3>
                  <p className="text-body text-muted">
                    Current state of investments, Canadian financing, and African local capital.
                  </p>
                </div>
              </div>
              <div className="h-full">
                <div className="group relative overflow-hidden rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                  <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-gold-light via-gold to-gold-deep opacity-0 transition-opacity duration-[250ms] ease-discret group-hover:opacity-100" />
                  <div style={{ aspectRatio: '16 / 9' }} className="relative overflow-hidden rounded-sm border border-hairline bg-surface w-full mb-1">
                    <img alt="Ore processing line toward finished components" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw" srcSet="/images/program/theme-transforming.jpg 256w, /images/program/theme-transforming.jpg 384w, /images/program/theme-transforming.jpg 640w, /images/program/theme-transforming.jpg 750w, /images/program/theme-transforming.jpg 828w, /images/program/theme-transforming.jpg 1080w, /images/program/theme-transforming.jpg 1200w, /images/program/theme-transforming.jpg 1920w, /images/program/theme-transforming.jpg 2048w, /images/program/theme-transforming.jpg 3840w" src="/images/program/theme-transforming.jpg" />
                  </div>
                  <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-sm bg-mist text-emerald-cta">
                      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-4">
                        <g fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M7 10c0-1.414 0-2.121.44-2.56C7.878 7 8.585 7 10 7h4c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v4c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-4c-1.414 0-2.121 0-2.56-.44C7 16.122 7 15.415 7 14z" />
                          <path d="M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12Z" />
                          <path strokeLinecap="round" d="M4 12H2m20 0h-2M4 9H2m20 0h-2M4 15H2m20 0h-2m-8 5v2m0-20v2M9 20v2M9 2v2m6 16v2m0-20v2" />
                        </g>
                      </svg>
                    </span>
                    Transforming
                  </h3>
                  <p className="text-body text-muted">
                    Value chains, Quebec expertise, and local African enterprises.
                  </p>
                </div>
              </div>
              <div className="h-full">
                <div className="group relative overflow-hidden rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                  <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-gold-light via-gold to-gold-deep opacity-0 transition-opacity duration-[250ms] ease-discret group-hover:opacity-100" />
                  <div style={{ aspectRatio: '16 / 9' }} className="relative overflow-hidden rounded-sm border border-hairline bg-surface w-full mb-1">
                    <img alt="Rehabilitated, revegetated mine site at golden hour" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw" srcSet="/images/program/theme-sharing.jpg 256w, /images/program/theme-sharing.jpg 384w, /images/program/theme-sharing.jpg 640w, /images/program/theme-sharing.jpg 750w, /images/program/theme-sharing.jpg 828w, /images/program/theme-sharing.jpg 1080w, /images/program/theme-sharing.jpg 1200w, /images/program/theme-sharing.jpg 1920w, /images/program/theme-sharing.jpg 2048w, /images/program/theme-sharing.jpg 3840w" src="/images/program/theme-sharing.jpg" />
                  </div>
                  <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-sm bg-mist text-emerald-cta">
                      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-4">
                        <path fill="none" stroke="currentColor" strokeWidth="1.5" d="m12 9l4.5-4.5m-4.5 10L18.5 8M12 19.5l7.5-7.5M12 22c4.418 0 8-3.646 8-8.143c0-4.462-2.553-9.67-6.537-11.531A3.45 3.45 0 0 0 12 2m0 20c-4.418 0-8-3.646-8-8.143c0-4.462 2.553-9.67 6.537-11.531A3.45 3.45 0 0 1 12 2m0 20V2" />
                      </svg>
                    </span>
                    Sharing Value
                  </h3>
                  <p className="text-body text-muted">
                    ESG, mining codes, local content for responsible mining operations.
                  </p>
                </div>
              </div>
            </div>
            <h3 className="max-w-[760px] font-display font-semibold text-h3 text-ink">
              Keynotes
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="h-full">
                <div className="group relative overflow-hidden rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                  <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-gold-light via-gold to-gold-deep opacity-0 transition-opacity duration-[250ms] ease-discret group-hover:opacity-100" />
                  <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                    Africa, Canada & AfCFTA
                  </h3>
                  <p className="text-body text-muted">
                    An alliance for the minerals of tomorrow: building a truly equitable partnership. This keynote presents the strategic vision that the subsequent sessions will translate into operational terms.
                  </p>
                  <details className="group/more mt-auto pt-1">
                    <summary className="inline-flex w-fit cursor-pointer list-none items-center gap-1.5 font-semibold text-[12px] text-copper uppercase tracking-[0.08em] transition-colors hover:text-emerald-cta [&::-webkit-details-marker]:hidden">
                      <span className="group-open/more:hidden">
                        +
                        Read more
                      </span>
                      <span className="hidden group-open/more:inline">
                        −
                        Show less
                      </span>
                    </summary>
                    <p className="mt-3 text-body text-muted">
                      It demonstrates how the African Continental Free Trade Area (AfCFTA) provides African countries with an unprecedented framework for collectively negotiating the terms of resource exploitation, and how Canada can become the reference partner in this transformation. The presentation will explore the conditions for a truly equitable alliance between Canada and Africa on the critical minerals essential to the global energy transition.
                    </p>
                  </details>
                </div>
              </div>
              <div className="h-full">
                <div className="group relative overflow-hidden rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                  <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-gold-light via-gold to-gold-deep opacity-0 transition-opacity duration-[250ms] ease-discret group-hover:opacity-100" />
                  <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                    From extraction to transformation
                  </h3>
                  <p className="text-body text-muted">
                    Building value chains together for the 21st century. The global energy transition cannot occur without African minerals — nor without the capital, technology, and expertise that Canada is ready to mobilize.
                  </p>
                  <details className="group/more mt-auto pt-1">
                    <summary className="inline-flex w-fit cursor-pointer list-none items-center gap-1.5 font-semibold text-[12px] text-copper uppercase tracking-[0.08em] transition-colors hover:text-emerald-cta [&::-webkit-details-marker]:hidden">
                      <span className="group-open/more:hidden">
                        +
                        Read more
                      </span>
                      <span className="hidden group-open/more:inline">
                        −
                        Show less
                      </span>
                    </summary>
                    <p className="mt-3 text-body text-muted">
                      Cobalt, lithium, graphite, copper, nickel, manganese, uranium, and others. This keynote, presented by the Government of Canada (Natural Resources Canada), will articulate Canada's vision for a new-generation mining partnership with Africa — one based not solely on extraction, but on the development of integrated value chains (from mine to finished product). The presentation will focus on Canada's concrete commitments, including the $18.5 billion Critical Minerals Production Alliance, and the mechanisms through which Canadian companies, supported by FinDev Canada, can contribute to African industrial development.
                    </p>
                  </details>
                </div>
              </div>
              <div className="h-full">
                <div className="group relative overflow-hidden rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                  <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-gold-light via-gold to-gold-deep opacity-0 transition-opacity duration-[250ms] ease-discret group-hover:opacity-100" />
                  <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                    Quebec, a strategic partner
                  </h3>
                  <p className="text-body text-muted">
                    Capital, expertise and know-how: a complete mining ecosystem for Africa. Quebec is more than a mining province — from geology to metallurgy, exploration to transformation.
                  </p>
                  <details className="group/more mt-auto pt-1">
                    <summary className="inline-flex w-fit cursor-pointer list-none items-center gap-1.5 font-semibold text-[12px] text-copper uppercase tracking-[0.08em] transition-colors hover:text-emerald-cta [&::-webkit-details-marker]:hidden">
                      <span className="group-open/more:hidden">
                        +
                        Read more
                      </span>
                      <span className="hidden group-open/more:inline">
                        −
                        Show less
                      </span>
                    </summary>
                    <p className="mt-3 text-body text-muted">
                      It is a complete mining ecosystem, from university training to institutional financing. This presentation will demonstrate why Quebec is a natural partner for African mining development: its engineering firms build mines across the continent, its universities train the geologists and engineers who operate them, and its aluminum industry creates strategic dependence on West African bauxite. Quebec will present the framework for bilateral collaboration that the provincial government is prepared to establish with African mining countries.
                    </p>
                  </details>
                </div>
              </div>
            </div>
            <h3 className="max-w-[760px] font-display font-semibold text-h3 text-ink">
              Panels
            </h3>
            <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
              Six thematic panels span investment, financing, ESG, mining codes and local content. Select a panel to read its full description and discussion points.
            </p>
            <Tabs
              wrapperClassName="grid grid-cols-1 items-start gap-6 lg:grid-cols-[300px_1fr] lg:gap-8"
              listAriaOrientation="vertical"
              listClassName="flex flex-col gap-1"
              triggerClassActive="flex items-start gap-3 border-l-[3px] px-4 py-3 text-left transition-colors border-l-gold bg-mist/60"
              triggerClassInactive="flex items-start gap-3 border-l-[3px] px-4 py-3 text-left transition-colors border-l-transparent hover:border-l-gold/40 hover:bg-mist/30"
              panelClassName="animate-fade-in rounded-sm border border-hairline bg-card p-6 shadow-card sm:p-7"
              panelContainerClassName="min-w-0"
              tabs={[
                {
                  triggerActive: (
                    <>
                      <span className="tnum pt-0.5 font-semibold text-[11px] tracking-[0.14em] text-copper">
                        01
                      </span>
                      <span className="font-display font-semibold text-[14px] leading-snug text-emerald-cta">
                        Canada-Africa Mining Investment in 2027: Current Landscape
                      </span>
                    </>
                  ),
                  triggerInactive: (
                    <>
                      <span className="tnum pt-0.5 font-semibold text-[11px] tracking-[0.14em] text-taupe">
                        01
                      </span>
                      <span className="font-display font-semibold text-[14px] leading-snug text-ink">
                        Canada-Africa Mining Investment in 2027: Current Landscape
                      </span>
                    </>
                  ),
                  panel: (
                    <>
                      <p className="font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
                        01
                        —
                        Canada-Africa Mining Investment in 2027: Current Landscape
                      </p>
                      <div className="mt-4 flex flex-col gap-6">
                        <div className="flex flex-col gap-6">
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            Canada is one of the leading foreign mining investors in Africa, with over 120 companies listed on the Toronto Stock Exchange active on the continent and assets estimated at more than CAD 40 billion. This panel will provide an updated overview of this presence in 2027: which African countries are targeted, which minerals are in focus, what financing models are being deployed, and what emerging trends are taking shape.
                          </p>
                          <h3 className="max-w-[760px] font-display font-semibold text-h3 text-ink">
                            Discussion points
                          </h3>
                          <ul className="flex max-w-[760px] flex-col gap-3">
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Success factors for Canada-Africa partnerships
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Structural obstacles: access to capital, regulatory risks, infrastructure, and logistics
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Opportunities linked to global demand for critical minerals
                              </span>
                            </li>
                          </ul>
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            The discussions will draw on recent market data and contributions from Canadian operators active on the ground, offering delegates a shared understanding of the context for the entire event.
                          </p>
                        </div>
                      </div>
                    </>
                  ),
                },
                {
                  triggerActive: (
                    <>
                      <span className="tnum pt-0.5 font-semibold text-[11px] tracking-[0.14em] text-copper">
                        02
                      </span>
                      <span className="font-display font-semibold text-[14px] leading-snug text-emerald-cta">
                        African Critical Minerals & the Global Energy Transition
                      </span>
                    </>
                  ),
                  triggerInactive: (
                    <>
                      <span className="tnum pt-0.5 font-semibold text-[11px] tracking-[0.14em] text-taupe">
                        02
                      </span>
                      <span className="font-display font-semibold text-[14px] leading-snug text-ink">
                        African Critical Minerals & the Global Energy Transition
                      </span>
                    </>
                  ),
                  panel: (
                    <>
                      <p className="font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
                        02
                        —
                        African Critical Minerals & the Global Energy Transition
                      </p>
                      <div className="mt-4 flex flex-col gap-6">
                        <div className="flex flex-col gap-6">
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            Africa holds a strategic share of the world's reserves of minerals essential to the energy transition: over 70% of cobalt, 40% of platinum, and significant reserves of graphite, lithium, bauxite, uranium, and rare earths. This panel will explore how the continent can transform this geological potential into a genuine lever for sovereign economic development, moving beyond the simple export of raw materials.
                          </p>
                          <h3 className="max-w-[760px] font-display font-semibold text-h3 text-ink">
                            Key discussion points
                          </h3>
                          <ul className="flex max-w-[760px] flex-col gap-3">
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Mapping of African critical resources
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Strategies for local value addition: refining, processing, and battery component manufacturing
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Partnerships with Canada and Quebec to accelerate this value upgrade
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </>
                  ),
                },
                {
                  triggerActive: (
                    <>
                      <span className="tnum pt-0.5 font-semibold text-[11px] tracking-[0.14em] text-copper">
                        03
                      </span>
                      <span className="font-display font-semibold text-[14px] leading-snug text-emerald-cta">
                        Financing African Mines: TSX, DFIs and Local Capital
                      </span>
                    </>
                  ),
                  triggerInactive: (
                    <>
                      <span className="tnum pt-0.5 font-semibold text-[11px] tracking-[0.14em] text-taupe">
                        03
                      </span>
                      <span className="font-display font-semibold text-[14px] leading-snug text-ink">
                        Financing African Mines: TSX, DFIs and Local Capital
                      </span>
                    </>
                  ),
                  panel: (
                    <>
                      <p className="font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
                        03
                        —
                        Financing African Mines: TSX, DFIs and Local Capital
                      </p>
                      <div className="mt-4 flex flex-col gap-6">
                        <div className="flex flex-col gap-6">
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            Building the right model together. Access to financing remains one of the main barriers to the development of Africa's mining sector. This panel brings together key players in the mining finance ecosystem — companies listed on the Toronto Stock Exchange, development finance institutions (FinDev Canada, African Development Bank, Africa Finance Corporation), and representatives of African local capital — to examine the most suitable financing models for African mining projects in 2027.
                          </p>
                          <h3 className="max-w-[760px] font-display font-semibold text-h3 text-ink">
                            Core discussion topics
                          </h3>
                          <ul className="flex max-w-[760px] flex-col gap-3">
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Blended finance: equity, debt, co-investment, and local private capital
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                ESG requirements and access to capital
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Guarantee mechanisms and risk sharing
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Opportunities created by the AfCFTA for African capital markets
                              </span>
                            </li>
                          </ul>
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            The objective is to strike a balance between investor returns and local economic development. What are the main challenges for financial institutions operating in Africa?
                          </p>
                        </div>
                      </div>
                    </>
                  ),
                },
                {
                  triggerActive: (
                    <>
                      <span className="tnum pt-0.5 font-semibold text-[11px] tracking-[0.14em] text-copper">
                        04
                      </span>
                      <span className="font-display font-semibold text-[14px] leading-snug text-emerald-cta">
                        ESG in Africa: Between Global Standards and On-the-Ground Realities
                      </span>
                    </>
                  ),
                  triggerInactive: (
                    <>
                      <span className="tnum pt-0.5 font-semibold text-[11px] tracking-[0.14em] text-taupe">
                        04
                      </span>
                      <span className="font-display font-semibold text-[14px] leading-snug text-ink">
                        ESG in Africa: Between Global Standards and On-the-Ground Realities
                      </span>
                    </>
                  ),
                  panel: (
                    <>
                      <p className="font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
                        04
                        —
                        ESG in Africa: Between Global Standards and On-the-Ground Realities
                      </p>
                      <div className="mt-4 flex flex-col gap-6">
                        <div className="flex flex-col gap-6">
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            ESG principles have become essential in the mining sector, yet their implementation in Africa often reveals concrete challenges. This panel examines how to adapt these standards to African realities without diluting their substance.
                          </p>
                          <h3 className="max-w-[760px] font-display font-semibold text-h3 text-ink">
                            Key discussion points
                          </h3>
                          <ul className="flex max-w-[760px] flex-col gap-3">
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Adapting ESG frameworks to local contexts
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Involving local communities in consultations
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Ensuring ESG consistency between headquarters and field operations
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Turning ESG certifications into a competitiveness driver
                              </span>
                            </li>
                          </ul>
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            The goal is to find the right balance between ESG requirements and Africa's economic and social realities. How can Canadian companies support their African partners in adopting ESG practices?
                          </p>
                        </div>
                      </div>
                    </>
                  ),
                },
                {
                  triggerActive: (
                    <>
                      <span className="tnum pt-0.5 font-semibold text-[11px] tracking-[0.14em] text-copper">
                        05
                      </span>
                      <span className="font-display font-semibold text-[14px] leading-snug text-emerald-cta">
                        African Mining Codes: Stability, Attractiveness, Sovereignty
                      </span>
                    </>
                  ),
                  triggerInactive: (
                    <>
                      <span className="tnum pt-0.5 font-semibold text-[11px] tracking-[0.14em] text-taupe">
                        05
                      </span>
                      <span className="font-display font-semibold text-[14px] leading-snug text-ink">
                        African Mining Codes: Stability, Attractiveness, Sovereignty
                      </span>
                    </>
                  ),
                  panel: (
                    <>
                      <p className="font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
                        05
                        —
                        African Mining Codes: Stability, Attractiveness, Sovereignty
                      </p>
                      <div className="mt-4 flex flex-col gap-6">
                        <div className="flex flex-col gap-6">
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            Finding the right balance. Mining codes represent the fundamental contract between an African State and the investors exploiting its resources. If too restrictive, they deter capital. If too permissive, they impoverish countries and fuel public resentment. This panel brings together African government representatives, mining lawyers, Canadian company executives, and development institutions to review ongoing reforms across the continent and identify models that successfully reconcile four key imperatives: investor attractiveness, national sovereignty over resources, local economic benefits, and long-term regulatory stability.
                          </p>
                          <h3 className="max-w-[760px] font-display font-semibold text-h3 text-ink">
                            Key discussion points
                          </h3>
                          <ul className="flex max-w-[760px] flex-col gap-3">
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Mining code reforms in Africa
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Models balancing investor and national interests
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Comparisons between African and Canadian jurisdictions
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Lessons from recent revisions in West and Central Africa
                              </span>
                            </li>
                          </ul>
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            The objective is to strike a balance between investor interests and those of African nations. What are the main challenges facing African governments in negotiating mining codes?
                          </p>
                        </div>
                      </div>
                    </>
                  ),
                },
                {
                  triggerActive: (
                    <>
                      <span className="tnum pt-0.5 font-semibold text-[11px] tracking-[0.14em] text-copper">
                        06
                      </span>
                      <span className="font-display font-semibold text-[14px] leading-snug text-emerald-cta">
                        From Subcontractor to Partner: African Local Enterprises
                      </span>
                    </>
                  ),
                  triggerInactive: (
                    <>
                      <span className="tnum pt-0.5 font-semibold text-[11px] tracking-[0.14em] text-taupe">
                        06
                      </span>
                      <span className="font-display font-semibold text-[14px] leading-snug text-ink">
                        From Subcontractor to Partner: African Local Enterprises
                      </span>
                    </>
                  ),
                  panel: (
                    <>
                      <p className="font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
                        06
                        —
                        From Subcontractor to Partner: African Local Enterprises
                      </p>
                      <div className="mt-4 flex flex-col gap-6">
                        <div className="flex flex-col gap-6">
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            Making African local enterprises the engine of your operational competitiveness. This panel demonstrates that working with African local enterprises is not a compromise, but a real competitive advantage. Companies that have successfully integrated local partners into their supply chains have reduced costs, shortened lead times, and lowered risks, while simultaneously improving their relationships with local communities.
                          </p>
                          <h3 className="max-w-[760px] font-display font-semibold text-h3 text-ink">
                            Core ideas
                          </h3>
                          <ul className="flex max-w-[760px] flex-col gap-3">
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                African local enterprises offer competitive advantages
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Canadian and Quebec companies provide the required expertise, technology and know-how
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Win-win partnerships are possible
                              </span>
                            </li>
                          </ul>
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            This session offers the opportunity to turn these partnerships into reality. What are the main challenges for Canadian companies seeking to collaborate with African partners?
                          </p>
                        </div>
                      </div>
                    </>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="schedule" className="a2m-reveal scroll-mt-24 py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-16">
    <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16">
      <span className="font-semibold text-[11px] text-copper uppercase tracking-[0.22em]">
        Day by day
      </span>
      <h2 className="mt-2 font-display font-bold tracking-[-0.01em] text-h2">
        Agenda
      </h2>
      <div className="mt-8">
        <div>
          <div className="mb-9 flex flex-wrap gap-x-5 gap-y-2">
            <span className="flex items-center gap-2 font-semibold text-[11px] text-muted uppercase tracking-[0.12em]">
              <span className="size-2.5 rounded-full bg-gold" aria-hidden="true" />
              Policy
            </span>
            <span className="flex items-center gap-2 font-semibold text-[11px] text-muted uppercase tracking-[0.12em]">
              <span className="size-2.5 rounded-full bg-champagne" aria-hidden="true" />
              Networking
            </span>
            <span className="flex items-center gap-2 font-semibold text-[11px] text-muted uppercase tracking-[0.12em]">
              <span className="size-2.5 rounded-full bg-bronze" aria-hidden="true" />
              Deal flow
            </span>
            <span className="flex items-center gap-2 font-semibold text-[11px] text-muted uppercase tracking-[0.12em]">
              <span className="size-2.5 rounded-full bg-sage" aria-hidden="true" />
              ESG
            </span>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-hairline border-b pb-3">
                <h3 className="font-display font-bold text-h3 text-emerald-deep">
                  Sun. June 6
                </h3>
                <span className="flex items-center gap-1.5 text-small text-subtle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin size-3.5" aria-hidden="true">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Fairmont The Queen Elizabeth
                </span>
              </div>
              <ul className="mt-5 flex flex-col gap-3">
                <li className="a2m-reveal flex items-start gap-4 rounded-sm border border-hairline border-l-[3px] bg-card p-4 shadow-card transition-shadow duration-[250ms] ease-discret hover:shadow-card-hover sm:gap-6 sm:p-5 border-l-gold">
                  <div className="w-14 shrink-0 sm:w-16">
                    <b className="tnum block font-semibold text-[15px] text-ink">
                      09:00
                    </b>
                    <span className="tnum block text-[12px] text-subtle">
                      12:00
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-[10px] uppercase tracking-[0.14em] text-copper">
                      <span aria-hidden="true">
                        ●
                      </span>
                      Policy
                    </div>
                    <div className="mt-1 font-semibold text-body text-ink">
                      Ministerial Roundtable
                    </div>
                    <span className="mt-1.5 inline-flex rounded-sm bg-surface px-2 py-0.5 text-[11px] text-muted">
                      By invitation
                    </span>
                  </div>
                  <span className="hidden shrink-0 self-center rounded-sm border border-hairline px-2.5 py-1 text-[11px] text-muted sm:inline-block">
                    Roundtable
                  </span>
                </li>
                <li className="a2m-reveal flex items-start gap-4 rounded-sm border border-hairline border-l-[3px] bg-card p-4 shadow-card transition-shadow duration-[250ms] ease-discret hover:shadow-card-hover sm:gap-6 sm:p-5 border-l-champagne">
                  <div className="w-14 shrink-0 sm:w-16">
                    <b className="tnum block font-semibold text-[15px] text-ink">
                      18:00
                    </b>
                    <span className="tnum block text-[12px] text-subtle">
                      20:00
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-[10px] uppercase tracking-[0.14em] text-copper">
                      <span aria-hidden="true">
                        ●
                      </span>
                      Networking
                    </div>
                    <div className="mt-1 font-semibold text-body text-ink">
                      Welcome reception
                    </div>
                  </div>
                  <span className="hidden shrink-0 self-center rounded-sm border border-hairline px-2.5 py-1 text-[11px] text-muted sm:inline-block">
                    Terrace
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-hairline border-b pb-3">
                <h3 className="font-display font-bold text-h3 text-emerald-deep">
                  Mon. June 7
                </h3>
                <span className="flex items-center gap-1.5 text-small text-subtle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin size-3.5" aria-hidden="true">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Centre Mont-Royal
                </span>
              </div>
              <ul className="mt-5 flex flex-col gap-3">
                <li className="a2m-reveal flex items-start gap-4 rounded-sm border border-hairline border-l-[3px] bg-card p-4 shadow-card transition-shadow duration-[250ms] ease-discret hover:shadow-card-hover sm:gap-6 sm:p-5 border-l-bronze">
                  <div className="w-14 shrink-0 sm:w-16">
                    <b className="tnum block font-semibold text-[15px] text-ink">
                      08:00
                    </b>
                    <span className="tnum block text-[12px] text-subtle">
                      09:15
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-[10px] uppercase tracking-[0.14em] text-bronze">
                      <span aria-hidden="true">
                        ●
                      </span>
                      Deal flow
                    </div>
                    <div className="mt-1 font-semibold text-body text-ink">
                      Investors' Breakfast
                    </div>
                    <span className="mt-1.5 inline-flex rounded-sm bg-surface px-2 py-0.5 text-[11px] text-muted">
                      By invitation
                    </span>
                  </div>
                  <span className="hidden shrink-0 self-center rounded-sm border border-hairline px-2.5 py-1 text-[11px] text-muted sm:inline-block">
                    Private lounge
                  </span>
                </li>
                <li className="a2m-reveal flex items-start gap-4 rounded-sm border border-hairline border-l-[3px] bg-card p-4 shadow-card transition-shadow duration-[250ms] ease-discret hover:shadow-card-hover sm:gap-6 sm:p-5 border-l-gold">
                  <div className="w-14 shrink-0 sm:w-16">
                    <b className="tnum block font-semibold text-[15px] text-ink">
                      09:30
                    </b>
                    <span className="tnum block text-[12px] text-subtle">
                      11:00
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-[10px] uppercase tracking-[0.14em] text-copper">
                      <span aria-hidden="true">
                        ●
                      </span>
                      Policy
                    </div>
                    <div className="mt-1 font-semibold text-body text-ink">
                      Opening ceremony & keynotes
                    </div>
                  </div>
                  <span className="hidden shrink-0 self-center rounded-sm border border-hairline px-2.5 py-1 text-[11px] text-muted sm:inline-block">
                    Plenary
                  </span>
                </li>
                <li className="a2m-reveal flex items-start gap-4 rounded-sm border border-hairline border-l-[3px] bg-card p-4 shadow-card transition-shadow duration-[250ms] ease-discret hover:shadow-card-hover sm:gap-6 sm:p-5 border-l-bronze">
                  <div className="w-14 shrink-0 sm:w-16">
                    <b className="tnum block font-semibold text-[15px] text-ink">
                      11:00
                    </b>
                    <span className="tnum block text-[12px] text-subtle">
                      18:00
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-[10px] uppercase tracking-[0.14em] text-bronze">
                      <span aria-hidden="true">
                        ●
                      </span>
                      Deal flow
                    </div>
                    <div className="mt-1 font-semibold text-body text-ink">
                      Exhibition opens & B2B matchmaking
                    </div>
                  </div>
                  <span className="hidden shrink-0 self-center rounded-sm border border-hairline px-2.5 py-1 text-[11px] text-muted sm:inline-block">
                    Marketplace
                  </span>
                </li>
                <li className="a2m-reveal flex items-start gap-4 rounded-sm border border-hairline border-l-[3px] bg-card p-4 shadow-card transition-shadow duration-[250ms] ease-discret hover:shadow-card-hover sm:gap-6 sm:p-5 border-l-champagne">
                  <div className="w-14 shrink-0 sm:w-16">
                    <b className="tnum block font-semibold text-[15px] text-ink">
                      19:00
                    </b>
                    <span className="tnum block text-[12px] text-subtle">
                      22:00
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-[10px] uppercase tracking-[0.14em] text-copper">
                      <span aria-hidden="true">
                        ●
                      </span>
                      Networking
                    </div>
                    <div className="mt-1 font-semibold text-body text-ink">
                      Gala dinner
                    </div>
                  </div>
                  <span className="hidden shrink-0 self-center rounded-sm border border-hairline px-2.5 py-1 text-[11px] text-muted sm:inline-block">
                    Grand Hall
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-hairline border-b pb-3">
                <h3 className="font-display font-bold text-h3 text-emerald-deep">
                  Tue. June 8
                </h3>
                <span className="flex items-center gap-1.5 text-small text-subtle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin size-3.5" aria-hidden="true">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Centre Mont-Royal
                </span>
              </div>
              <ul className="mt-5 flex flex-col gap-3">
                <li className="a2m-reveal flex items-start gap-4 rounded-sm border border-hairline border-l-[3px] bg-card p-4 shadow-card transition-shadow duration-[250ms] ease-discret hover:shadow-card-hover sm:gap-6 sm:p-5 border-l-sage">
                  <div className="w-14 shrink-0 sm:w-16">
                    <b className="tnum block font-semibold text-[15px] text-ink">
                      09:00
                    </b>
                    <span className="tnum block text-[12px] text-subtle">
                      12:30
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-[10px] uppercase tracking-[0.14em] text-emerald-deep">
                      <span aria-hidden="true">
                        ●
                      </span>
                      ESG
                    </div>
                    <div className="mt-1 font-semibold text-body text-ink">
                      Women in Mining Forum
                    </div>
                  </div>
                  <span className="hidden shrink-0 self-center rounded-sm border border-hairline px-2.5 py-1 text-[11px] text-muted sm:inline-block">
                    Forum Hall
                  </span>
                </li>
                <li className="a2m-reveal flex items-start gap-4 rounded-sm border border-hairline border-l-[3px] bg-card p-4 shadow-card transition-shadow duration-[250ms] ease-discret hover:shadow-card-hover sm:gap-6 sm:p-5 border-l-bronze">
                  <div className="w-14 shrink-0 sm:w-16">
                    <b className="tnum block font-semibold text-[15px] text-ink">
                      10:30
                    </b>
                    <span className="tnum block text-[12px] text-subtle">
                      17:00
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-[10px] uppercase tracking-[0.14em] text-bronze">
                      <span aria-hidden="true">
                        ●
                      </span>
                      Deal flow
                    </div>
                    <div className="mt-1 font-semibold text-body text-ink">
                      Sector & jurisdiction panels
                    </div>
                  </div>
                  <span className="hidden shrink-0 self-center rounded-sm border border-hairline px-2.5 py-1 text-[11px] text-muted sm:inline-block">
                    Plenary
                  </span>
                </li>
                <li className="a2m-reveal flex items-start gap-4 rounded-sm border border-hairline border-l-[3px] bg-card p-4 shadow-card transition-shadow duration-[250ms] ease-discret hover:shadow-card-hover sm:gap-6 sm:p-5 border-l-champagne">
                  <div className="w-14 shrink-0 sm:w-16">
                    <b className="tnum block font-semibold text-[15px] text-ink">
                      18:00
                    </b>
                    <span className="tnum block text-[12px] text-subtle">
                      20:00
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-[10px] uppercase tracking-[0.14em] text-copper">
                      <span aria-hidden="true">
                        ●
                      </span>
                      Networking
                    </div>
                    <div className="mt-1 font-semibold text-body text-ink">
                      Networking reception
                    </div>
                  </div>
                  <span className="hidden shrink-0 self-center rounded-sm border border-hairline px-2.5 py-1 text-[11px] text-muted sm:inline-block">
                    Terrace
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-hairline border-b pb-3">
                <h3 className="font-display font-bold text-h3 text-emerald-deep">
                  Wed. June 9
                </h3>
                <span className="flex items-center gap-1.5 text-small text-subtle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin size-3.5" aria-hidden="true">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Centre Mont-Royal
                </span>
              </div>
              <ul className="mt-5 flex flex-col gap-3">
                <li className="a2m-reveal flex items-start gap-4 rounded-sm border border-hairline border-l-[3px] bg-card p-4 shadow-card transition-shadow duration-[250ms] ease-discret hover:shadow-card-hover sm:gap-6 sm:p-5 border-l-bronze">
                  <div className="w-14 shrink-0 sm:w-16">
                    <b className="tnum block font-semibold text-[15px] text-ink">
                      09:00
                    </b>
                    <span className="tnum block text-[12px] text-subtle">
                      14:30
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-[10px] uppercase tracking-[0.14em] text-bronze">
                      <span aria-hidden="true">
                        ●
                      </span>
                      Deal flow
                    </div>
                    <div className="mt-1 font-semibold text-body text-ink">
                      B2B meetings & project showcases
                    </div>
                  </div>
                  <span className="hidden shrink-0 self-center rounded-sm border border-hairline px-2.5 py-1 text-[11px] text-muted sm:inline-block">
                    Deal Rooms
                  </span>
                </li>
                <li className="a2m-reveal flex items-start gap-4 rounded-sm border border-hairline border-l-[3px] bg-card p-4 shadow-card transition-shadow duration-[250ms] ease-discret hover:shadow-card-hover sm:gap-6 sm:p-5 border-l-gold">
                  <div className="w-14 shrink-0 sm:w-16">
                    <b className="tnum block font-semibold text-[15px] text-ink">
                      15:00
                    </b>
                    <span className="tnum block text-[12px] text-subtle">
                      16:30
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-[10px] uppercase tracking-[0.14em] text-copper">
                      <span aria-hidden="true">
                        ●
                      </span>
                      Policy
                    </div>
                    <div className="mt-1 font-semibold text-body text-ink">
                      Closing session
                    </div>
                  </div>
                  <span className="hidden shrink-0 self-center rounded-sm border border-hairline px-2.5 py-1 text-[11px] text-muted sm:inline-block">
                    Plenary
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="matchmaking" className="a2m-reveal scroll-mt-24 py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-16">
    <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16">
      <span className="font-semibold text-[11px] text-copper uppercase tracking-[0.22em]">
        Deal flow
      </span>
      <h2 className="mt-2 font-display font-bold tracking-[-0.01em] text-h2">
        Business Matchmaking
      </h2>
      <div className="mt-8">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="max-w-[760px] border-gold border-l-2 pl-5 font-medium text-[1.2rem] text-ink [font-family:var(--font-display)] sm:text-[1.3rem]">
              The A2M Matchmaking Platform is designed to connect you with the right people, at the right time, transforming traditional networking from a time-consuming task into a highly targeted, results-driven experience.
            </p>
            <p className="max-w-[680px] text-body text-muted">
              The platform opens eight weeks before the event. Registered delegates can create detailed profiles, clearly define their business objectives, and receive personalized meeting recommendations drawn from the entire delegate pool. By the time you arrive in Montreal, your optimized B2B meeting agenda is already confirmed and ready to deliver value.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="font-display font-semibold text-h3 text-ink">
              How it works
            </h3>
            <Tabs
              wrapperClassName="flex max-w-[860px] flex-col gap-6"
              listWrapperClassName="relative"
              listPreamble={(
                <>
                  <div aria-hidden="true" className="absolute top-7 left-[12%] hidden h-0.5 right-[12%] bg-gold/55 sm:block" />
                  <div aria-hidden="true" className="absolute top-4 bottom-4 left-7 w-0.5 bg-gold/40 sm:hidden" />
                  </>
              )}
              listAriaLabel="How it works"
              listClassName="relative grid grid-cols-1 gap-5 sm:gap-3 sm:grid-cols-5"
              triggerClassActive="group flex items-center gap-4 text-left sm:flex-col sm:items-center sm:gap-0 sm:text-center"
              triggerClassInactive="group flex items-center gap-4 text-left sm:flex-col sm:items-center sm:gap-0 sm:text-center"
              panelClassName="animate-fade-in rounded-sm border border-hairline border-l-2 border-l-gold bg-card p-6 shadow-card"
              tabs={[
                {
                  triggerActive: (
                    <>
                      <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full border-2 bg-emerald-deep transition-all duration-300 border-gold shadow-gold">
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-6 text-gold">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 15.8L7.143 17L10 14M6 8.8L7.143 10L10 7" />
                            <path strokeLinecap="round" d="M13 9h5m-5 7h5" />
                          </g>
                        </svg>
                      </span>
                      <span className="sm:mt-3">
                        <span className="block font-semibold text-[11px] tracking-[0.14em] transition-colors text-copper">
                          01
                        </span>
                        <span className="mt-0.5 block font-display font-semibold text-[15px] leading-snug transition-colors text-emerald-cta">
                          Build your profile
                        </span>
                      </span>
                    </>
                  ),
                  triggerInactive: (
                    <>
                      <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full border-2 bg-emerald-deep transition-all duration-300 border-gold/40 group-hover:border-gold/80">
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-6 text-gold">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 15.8L7.143 17L10 14M6 8.8L7.143 10L10 7" />
                            <path strokeLinecap="round" d="M13 9h5m-5 7h5" />
                          </g>
                        </svg>
                      </span>
                      <span className="sm:mt-3">
                        <span className="block font-semibold text-[11px] tracking-[0.14em] transition-colors text-copper">
                          01
                        </span>
                        <span className="mt-0.5 block font-display font-semibold text-[15px] leading-snug transition-colors text-emerald-cta">
                          Build your profile
                        </span>
                      </span>
                    </>
                  ),
                  panel: (
                    <>
                      <p className="font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
                        01
                        —
                        Build your profile
                      </p>
                      <p className="mt-2 text-body text-muted">
                        Eight weeks before the event (starting April 12, 2027), registered delegates gain access to the platform. Create a powerful profile in 5 minutes — your objectives, projects, capital deployment, target countries, and desired partners. The more specific, the better the matches.
                      </p>
                    </>
                  ),
                },
                {
                  triggerActive: (
                    <>
                      <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full border-2 bg-emerald-deep transition-all duration-300 border-gold shadow-gold">
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-6 text-champagne/80">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M7 10c0-1.414 0-2.121.44-2.56C7.878 7 8.585 7 10 7h4c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v4c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-4c-1.414 0-2.121 0-2.56-.44C7 16.122 7 15.415 7 14z" />
                            <path d="M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12Z" />
                            <path strokeLinecap="round" d="M4 12H2m20 0h-2M4 9H2m20 0h-2M4 15H2m20 0h-2m-8 5v2m0-20v2M9 20v2M9 2v2m6 16v2m0-20v2" />
                          </g>
                        </svg>
                      </span>
                      <span className="sm:mt-3">
                        <span className="block font-semibold text-[11px] tracking-[0.14em] transition-colors text-taupe">
                          02
                        </span>
                        <span className="mt-0.5 block font-display font-semibold text-[15px] leading-snug transition-colors text-ink group-hover:text-emerald-cta">
                          Review AI-powered matches
                        </span>
                      </span>
                    </>
                  ),
                  triggerInactive: (
                    <>
                      <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full border-2 bg-emerald-deep transition-all duration-300 border-gold/40 group-hover:border-gold/80">
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-6 text-champagne/80">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M7 10c0-1.414 0-2.121.44-2.56C7.878 7 8.585 7 10 7h4c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v4c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-4c-1.414 0-2.121 0-2.56-.44C7 16.122 7 15.415 7 14z" />
                            <path d="M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12Z" />
                            <path strokeLinecap="round" d="M4 12H2m20 0h-2M4 9H2m20 0h-2M4 15H2m20 0h-2m-8 5v2m0-20v2M9 20v2M9 2v2m6 16v2m0-20v2" />
                          </g>
                        </svg>
                      </span>
                      <span className="sm:mt-3">
                        <span className="block font-semibold text-[11px] tracking-[0.14em] transition-colors text-taupe">
                          02
                        </span>
                        <span className="mt-0.5 block font-display font-semibold text-[15px] leading-snug transition-colors text-ink group-hover:text-emerald-cta">
                          Review AI-powered matches
                        </span>
                      </span>
                    </>
                  ),
                  panel: (
                    <>
                      <p className="font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
                        02
                        —
                        Review AI-powered matches
                      </p>
                      <p className="mt-2 text-body text-muted">
                        An intelligent algorithm analyses the full delegate list and surfaces your highest-relevance counterparts, ranked and filterable by country, organisation type, sector, and investment mandate.
                      </p>
                    </>
                  ),
                },
                {
                  triggerActive: (
                    <>
                      <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full border-2 bg-emerald-deep transition-all duration-300 border-gold shadow-gold">
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-6 text-champagne/80">
                          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
                            <path d="M14 12a6 6 0 1 1-6-6" />
                            <path d="M10 12a6 6 0 1 1 6 6" />
                          </g>
                        </svg>
                      </span>
                      <span className="sm:mt-3">
                        <span className="block font-semibold text-[11px] tracking-[0.14em] transition-colors text-taupe">
                          03
                        </span>
                        <span className="mt-0.5 block font-display font-semibold text-[15px] leading-snug transition-colors text-ink group-hover:text-emerald-cta">
                          Send & accept meeting requests
                        </span>
                      </span>
                    </>
                  ),
                  triggerInactive: (
                    <>
                      <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full border-2 bg-emerald-deep transition-all duration-300 border-gold/40 group-hover:border-gold/80">
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-6 text-champagne/80">
                          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
                            <path d="M14 12a6 6 0 1 1-6-6" />
                            <path d="M10 12a6 6 0 1 1 6 6" />
                          </g>
                        </svg>
                      </span>
                      <span className="sm:mt-3">
                        <span className="block font-semibold text-[11px] tracking-[0.14em] transition-colors text-taupe">
                          03
                        </span>
                        <span className="mt-0.5 block font-display font-semibold text-[15px] leading-snug transition-colors text-ink group-hover:text-emerald-cta">
                          Send & accept meeting requests
                        </span>
                      </span>
                    </>
                  ),
                  panel: (
                    <>
                      <p className="font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
                        03
                        —
                        Send & accept meeting requests
                      </p>
                      <p className="mt-2 text-body text-muted">
                        Request meetings directly. Accepted meetings are automatically scheduled into your personal agenda during dedicated slots.
                      </p>
                    </>
                  ),
                },
                {
                  triggerActive: (
                    <>
                      <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full border-2 bg-emerald-deep transition-all duration-300 border-gold shadow-gold">
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-6 text-champagne/80">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="m18 8l.949.316c.99.33 1.485.495 1.768.888s.283.915.283 1.958v5.667c0 1.29 0 1.936-.34 2.351c-.115.14-.255.26-.413.35c-.465.267-1.102.16-2.375-.051c-1.256-.21-1.884-.314-2.507-.262q-.329.027-.65.097c-.61.134-1.185.421-2.334.996c-1.5.75-2.25 1.125-3.048 1.24q-.36.052-.726.052c-.807-.002-1.595-.265-3.172-.79l-.384-.128c-.99-.33-1.485-.495-1.768-.888S3 18.88 3 17.838v-4.93c0-1.659 0-2.488.488-2.934a1.5 1.5 0 0 1 .281-.203c.578-.322 1.365-.06 2.938.465" />
                            <path d="M6 7.7C6 4.552 8.686 2 12 2s6 2.552 6 5.7c0 3.124-1.915 6.769-4.903 8.072a2.76 2.76 0 0 1-2.194 0C7.915 14.47 6 10.824 6 7.7Z" />
                            <circle cx="12" cy="8" r="2" />
                          </g>
                        </svg>
                      </span>
                      <span className="sm:mt-3">
                        <span className="block font-semibold text-[11px] tracking-[0.14em] transition-colors text-taupe">
                          04
                        </span>
                        <span className="mt-0.5 block font-display font-semibold text-[15px] leading-snug transition-colors text-ink group-hover:text-emerald-cta">
                          Arrive with a full agenda
                        </span>
                      </span>
                    </>
                  ),
                  triggerInactive: (
                    <>
                      <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full border-2 bg-emerald-deep transition-all duration-300 border-gold/40 group-hover:border-gold/80">
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-6 text-champagne/80">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="m18 8l.949.316c.99.33 1.485.495 1.768.888s.283.915.283 1.958v5.667c0 1.29 0 1.936-.34 2.351c-.115.14-.255.26-.413.35c-.465.267-1.102.16-2.375-.051c-1.256-.21-1.884-.314-2.507-.262q-.329.027-.65.097c-.61.134-1.185.421-2.334.996c-1.5.75-2.25 1.125-3.048 1.24q-.36.052-.726.052c-.807-.002-1.595-.265-3.172-.79l-.384-.128c-.99-.33-1.485-.495-1.768-.888S3 18.88 3 17.838v-4.93c0-1.659 0-2.488.488-2.934a1.5 1.5 0 0 1 .281-.203c.578-.322 1.365-.06 2.938.465" />
                            <path d="M6 7.7C6 4.552 8.686 2 12 2s6 2.552 6 5.7c0 3.124-1.915 6.769-4.903 8.072a2.76 2.76 0 0 1-2.194 0C7.915 14.47 6 10.824 6 7.7Z" />
                            <circle cx="12" cy="8" r="2" />
                          </g>
                        </svg>
                      </span>
                      <span className="sm:mt-3">
                        <span className="block font-semibold text-[11px] tracking-[0.14em] transition-colors text-taupe">
                          04
                        </span>
                        <span className="mt-0.5 block font-display font-semibold text-[15px] leading-snug transition-colors text-ink group-hover:text-emerald-cta">
                          Arrive with a full agenda
                        </span>
                      </span>
                    </>
                  ),
                  panel: (
                    <>
                      <p className="font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
                        04
                        —
                        Arrive with a full agenda
                      </p>
                      <p className="mt-2 text-body text-muted">
                        Walk into the A2M with a confirmed schedule of strategic 20-minute meetings.
                      </p>
                    </>
                  ),
                },
                {
                  triggerActive: (
                    <>
                      <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full border-2 bg-emerald-deep transition-all duration-300 border-gold shadow-gold">
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-6 text-champagne/80">
                          <g fill="none">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M8.784 22c-1.686-.752-3.078-1.924-3.993-3.493M14.825 2.186c1.677-.477 3.408-.023 4.617 1.211" />
                            <path fill="currentColor" d="m4.01 8.367l-.372-.652zm2.492.5l.648-.377zm-3.3 1.886l-.647.378zm4.495-7.38l.648-.378zm.842 1.443l-.648.378zm1.877 4.71a.75.75 0 0 0 1.296-.756zm-2.878 2.607a.75.75 0 1 0 1.296-.756zm-3.14-6.875l-.648.378zm7.44-2.327l.648-.378zm2.526 4.33l.648-.377zm1.683 2.888l.373.651a.75.75 0 0 0 .275-1.029zm1.616-4.773l-.648.378zm2.526 4.331l.648-.378zM6.99 17.25l.648-.378zm9.967 2.003l-.373-.65zM13.784 15.3a.75.75 0 0 0 1.296-.756zM4.383 9.018c.633-.362 1.257-.14 1.471.227L7.15 8.49c-.716-1.228-2.323-1.454-3.512-.775zm-.745-1.303c-1.19.681-1.803 2.182-1.083 3.416l1.296-.756c-.21-.36-.1-.996.532-1.357zM7.05 3.75l.842 1.444l1.296-.756l-.842-1.443zm.842 1.444l2.525 4.331l1.296-.755l-2.525-4.332zm.943 6.183L7.15 8.49l-1.296.755l1.684 2.888zM7.15 8.49L5.045 4.88l-1.295.756l2.104 3.61zM5.577 3.523c.634-.362 1.258-.14 1.472.227l1.296-.755C7.629 1.767 6.022 1.54 4.833 2.22zM4.833 2.22c-1.19.681-1.803 2.182-1.083 3.416l1.295-.756c-.21-.36-.099-.996.532-1.357zm6.357 1.088l2.526 4.332l1.296-.756l-2.526-4.331zm2.526 4.332l1.684 2.887l1.295-.756l-1.683-2.887zM9.719 3.08c.633-.361 1.257-.139 1.471.228l1.296-.755c-.716-1.228-2.323-1.454-3.512-.774zm-.745-1.3c-1.19.68-1.803 2.181-1.083 3.415l1.296-.756c-.21-.36-.1-.996.532-1.357zm8.041 3.975l2.526 4.331l1.296-.756L18.31 5zm-1.471-.228c.633-.362 1.257-.14 1.471.228l1.296-.756c-.716-1.227-2.323-1.453-3.512-.774zm-.745-1.302c-1.19.68-1.803 2.182-1.083 3.416l1.296-.756c-.21-.36-.1-.997.532-1.358zM2.555 11.131l3.788 6.497l1.296-.756l-3.788-6.497zm14.03 7.471c-3.367 1.924-7.337 1.029-8.946-1.73l-1.296.756c2.111 3.62 7.065 4.518 10.987 2.276zm2.956-8.517c1.605 2.753.41 6.594-2.956 8.517l.745 1.302c3.924-2.242 5.621-6.949 3.507-10.575zm-4.461 4.46c-.675-1.159-.203-2.863 1.34-3.745l-.745-1.302c-2.102 1.201-3.075 3.77-1.891 5.802z" />
                          </g>
                        </svg>
                      </span>
                      <span className="sm:mt-3">
                        <span className="block font-semibold text-[11px] tracking-[0.14em] transition-colors text-taupe">
                          05
                        </span>
                        <span className="mt-0.5 block font-display font-semibold text-[15px] leading-snug transition-colors text-ink group-hover:text-emerald-cta">
                          Meet, document & follow up
                        </span>
                      </span>
                    </>
                  ),
                  triggerInactive: (
                    <>
                      <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full border-2 bg-emerald-deep transition-all duration-300 border-gold/40 group-hover:border-gold/80">
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-6 text-champagne/80">
                          <g fill="none">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M8.784 22c-1.686-.752-3.078-1.924-3.993-3.493M14.825 2.186c1.677-.477 3.408-.023 4.617 1.211" />
                            <path fill="currentColor" d="m4.01 8.367l-.372-.652zm2.492.5l.648-.377zm-3.3 1.886l-.647.378zm4.495-7.38l.648-.378zm.842 1.443l-.648.378zm1.877 4.71a.75.75 0 0 0 1.296-.756zm-2.878 2.607a.75.75 0 1 0 1.296-.756zm-3.14-6.875l-.648.378zm7.44-2.327l.648-.378zm2.526 4.33l.648-.377zm1.683 2.888l.373.651a.75.75 0 0 0 .275-1.029zm1.616-4.773l-.648.378zm2.526 4.331l.648-.378zM6.99 17.25l.648-.378zm9.967 2.003l-.373-.65zM13.784 15.3a.75.75 0 0 0 1.296-.756zM4.383 9.018c.633-.362 1.257-.14 1.471.227L7.15 8.49c-.716-1.228-2.323-1.454-3.512-.775zm-.745-1.303c-1.19.681-1.803 2.182-1.083 3.416l1.296-.756c-.21-.36-.1-.996.532-1.357zM7.05 3.75l.842 1.444l1.296-.756l-.842-1.443zm.842 1.444l2.525 4.331l1.296-.755l-2.525-4.332zm.943 6.183L7.15 8.49l-1.296.755l1.684 2.888zM7.15 8.49L5.045 4.88l-1.295.756l2.104 3.61zM5.577 3.523c.634-.362 1.258-.14 1.472.227l1.296-.755C7.629 1.767 6.022 1.54 4.833 2.22zM4.833 2.22c-1.19.681-1.803 2.182-1.083 3.416l1.295-.756c-.21-.36-.099-.996.532-1.357zm6.357 1.088l2.526 4.332l1.296-.756l-2.526-4.331zm2.526 4.332l1.684 2.887l1.295-.756l-1.683-2.887zM9.719 3.08c.633-.361 1.257-.139 1.471.228l1.296-.755c-.716-1.228-2.323-1.454-3.512-.774zm-.745-1.3c-1.19.68-1.803 2.181-1.083 3.415l1.296-.756c-.21-.36-.1-.996.532-1.357zm8.041 3.975l2.526 4.331l1.296-.756L18.31 5zm-1.471-.228c.633-.362 1.257-.14 1.471.228l1.296-.756c-.716-1.227-2.323-1.453-3.512-.774zm-.745-1.302c-1.19.68-1.803 2.182-1.083 3.416l1.296-.756c-.21-.36-.1-.997.532-1.358zM2.555 11.131l3.788 6.497l1.296-.756l-3.788-6.497zm14.03 7.471c-3.367 1.924-7.337 1.029-8.946-1.73l-1.296.756c2.111 3.62 7.065 4.518 10.987 2.276zm2.956-8.517c1.605 2.753.41 6.594-2.956 8.517l.745 1.302c3.924-2.242 5.621-6.949 3.507-10.575zm-4.461 4.46c-.675-1.159-.203-2.863 1.34-3.745l-.745-1.302c-2.102 1.201-3.075 3.77-1.891 5.802z" />
                          </g>
                        </svg>
                      </span>
                      <span className="sm:mt-3">
                        <span className="block font-semibold text-[11px] tracking-[0.14em] transition-colors text-taupe">
                          05
                        </span>
                        <span className="mt-0.5 block font-display font-semibold text-[15px] leading-snug transition-colors text-ink group-hover:text-emerald-cta">
                          Meet, document & follow up
                        </span>
                      </span>
                    </>
                  ),
                  panel: (
                    <>
                      <p className="font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
                        05
                        —
                        Meet, document & follow up
                      </p>
                      <p className="mt-2 text-body text-muted">
                        Meetings take place in designated areas.
                      </p>
                    </>
                  ),
                },
              ]}
            />
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="font-display font-semibold text-h3 text-ink">
              Where meetings happen
            </h3>
            <div className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <div className="flex items-start gap-4">
                  <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-mist text-emerald-cta transition-colors group-hover/icr:border-gold group-hover/icr:bg-gold/15">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-6">
                      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
                        <path d="M14 12a6 6 0 1 1-6-6" />
                        <path d="M10 12a6 6 0 1 1 6 6" />
                      </g>
                    </svg>
                  </span>
                  <div className="pt-1">
                    <p className="font-display font-semibold text-[15px] text-ink leading-snug group-hover/icr:text-emerald-cta">
                      Business Matchmaking Lounge
                    </p>
                    <p className="mt-1 text-muted text-small">
                      Primary venue with private meeting pods and live scheduling displays.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-4">
                  <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-mist text-emerald-cta transition-colors group-hover/icr:border-gold group-hover/icr:bg-gold/15">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-6">
                      <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M2 11c0-2.828 0-4.243.879-5.121C3.757 5 5.172 5 8 5h5c2.828 0 4.243 0 5.121.879C19 6.757 19 8.172 19 11s0 4.243-.879 5.121C17.243 17 15.828 17 13 17H8c-2.828 0-4.243 0-5.121-.879C2 15.243 2 13.828 2 11Z" />
                        <path d="M19 8.076c.975.096 1.631.313 2.121.803c.88.878.88 2.293.88 5.121s0 4.243-.88 5.121c-.878.88-2.293.88-5.12.88h-5c-2.83 0-4.244 0-5.122-.88c-.49-.49-.707-1.146-.803-2.121" />
                        <path d="M13 11a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z" />
                        <path strokeLinecap="round" d="M16 13V9M5 13V9" />
                      </g>
                    </svg>
                  </span>
                  <div className="pt-1">
                    <p className="font-display font-semibold text-[15px] text-ink leading-snug group-hover/icr:text-emerald-cta">
                      Capital Markets Lounge
                    </p>
                    <p className="mt-1 text-muted text-small">
                      Exclusive private negotiation space for advanced discussions (priority for Investor Pass holders and sponsors).
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-4">
                  <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-mist text-emerald-cta transition-colors group-hover/icr:border-gold group-hover/icr:bg-gold/15">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-6">
                      <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" d="M22 22H2" />
                        <path d="M17 22V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v16m14 0V11.5c0-1.405 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C19.607 8 18.904 8 17.5 8M3 22V11.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C4.393 8 5.096 8 6.5 8" />
                        <path strokeLinecap="round" d="M12 22v-3M10 5h4m-4 3h4m-4 3h4m-4 3h4" />
                      </g>
                    </svg>
                  </span>
                  <div className="pt-1">
                    <p className="font-display font-semibold text-[15px] text-ink leading-snug group-hover/icr:text-emerald-cta">
                      Side rooms
                    </p>
                    <p className="mt-1 text-muted text-small">
                      Fully private settings for ministerial delegations and high-level working groups.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="a2m-motif relative overflow-hidden rounded-sm border-2 border-gold/60 bg-emerald-deep text-ivory shadow-card">
            <div className="relative z-10 grid items-center gap-8 p-8 lg:grid-cols-[1fr_380px] lg:p-12">
              <div className="flex flex-col items-start gap-4">
                <span className="font-semibold text-[11px] text-gold uppercase tracking-[0.26em]">
                  Matchmaking Lounge
                </span>
                <h3 className="font-bold text-[1.4rem] text-ivory leading-snug [font-family:var(--font-display)] sm:text-[1.7rem]">
                  <span className="text-gold">
                    3,000+
                  </span>
                  B2B meetings across three days
                </h3>
                <p className="max-w-[560px] text-champagne/85 text-body">
                  Your optimized B2B meeting agenda is confirmed before you even land in Montréal.
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <Link className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 [&_svg]:size-4 [&_svg]:shrink-0 gold-metallic text-anthracite hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold focus-visible:outline-anthracite h-12 px-7 text-[12px]" to="/en/plan-your-visit#register">
                    Get your pass
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div style={{ aspectRatio: '3 / 2' }} className="relative overflow-hidden rounded-sm border bg-surface w-full border-ivory/15">
                <img alt="Business meetings in the A2M matchmaking lounge" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 380px, 100vw" srcSet="/images/program/matchmaking-lounge.jpg 640w, /images/program/matchmaking-lounge.jpg 750w, /images/program/matchmaking-lounge.jpg 828w, /images/program/matchmaking-lounge.jpg 1080w, /images/program/matchmaking-lounge.jpg 1200w, /images/program/matchmaking-lounge.jpg 1920w, /images/program/matchmaking-lounge.jpg 2048w, /images/program/matchmaking-lounge.jpg 3840w" src="/images/program/matchmaking-lounge.jpg" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="font-display font-semibold text-h3 text-ink">
              Tailored for results by delegate type
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="h-full">
                <div className="group relative overflow-hidden rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                  <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-gold-light via-gold to-gold-deep opacity-0 transition-opacity duration-[250ms] ease-discret group-hover:opacity-100" />
                  <span className="inline-flex size-11 items-center justify-center rounded-sm bg-mist text-emerald-cta">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                      <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                        <path strokeLinecap="round" d="M22 12s-.993.89-2.979 1.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12 2 12m20 4s-.993.89-2.979 1.685l-2.808 1.124C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.891 2 16 2 16" />
                      </g>
                    </svg>
                  </span>
                  <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                    Mining companies
                  </h3>
                  <p className="text-body text-muted">
                    Targeted meetings with relevant African Ministers, DFIs, and royalty/streaming companies.
                  </p>
                </div>
              </div>
              <div className="h-full">
                <div className="group relative overflow-hidden rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                  <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-gold-light via-gold to-gold-deep opacity-0 transition-opacity duration-[250ms] ease-discret group-hover:opacity-100" />
                  <span className="inline-flex size-11 items-center justify-center rounded-sm bg-mist text-emerald-cta">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                      <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 22h18" />
                        <path d="M3 11c0-.943 0-1.414.293-1.707S4.057 9 5 9s1.414 0 1.707.293S7 10.057 7 11v6c0 .943 0 1.414-.293 1.707S5.943 19 5 19s-1.414 0-1.707-.293S3 17.943 3 17zm7-4c0-.943 0-1.414.293-1.707S11.057 5 12 5s1.414 0 1.707.293S14 6.057 14 7v10c0 .943 0 1.414-.293 1.707S12.943 19 12 19s-1.414 0-1.707-.293S10 17.943 10 17zm7-3c0-.943 0-1.414.293-1.707S18.057 2 19 2s1.414 0 1.707.293S21 3.057 21 4v13c0 .943 0 1.414-.293 1.707S19.943 19 19 19s-1.414 0-1.707-.293S17 17.943 17 17z" />
                      </g>
                    </svg>
                  </span>
                  <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                    Investors & DFIs
                  </h3>
                  <p className="text-body text-muted">
                    Enhanced Investor Badge for high inbound visibility.
                  </p>
                </div>
              </div>
              <div className="h-full">
                <div className="group relative overflow-hidden rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                  <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-gold-light via-gold to-gold-deep opacity-0 transition-opacity duration-[250ms] ease-discret group-hover:opacity-100" />
                  <span className="inline-flex size-11 items-center justify-center rounded-sm bg-mist text-emerald-cta">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                      <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M13.024 14.56c-2.31.924-3.465 1.386-4.124.938a1.5 1.5 0 0 1-.398-.398c-.448-.66.014-1.814.938-4.124c.197-.493.295-.74.465-.933q.065-.074.139-.138c.193-.17.44-.268.932-.465c2.31-.924 3.464-1.386 4.124-.938a1.5 1.5 0 0 1 .398.398c.448.66-.014 1.814-.938 4.124c-.197.493-.296.739-.465.932a2 2 0 0 1-.139.139c-.193.17-.44.268-.932.465Z" />
                      </g>
                    </svg>
                  </span>
                  <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                    Project holders
                  </h3>
                  <p className="text-body text-muted">
                    Priority placement in the algorithm post-Investment Showcase.
                  </p>
                </div>
              </div>
              <div className="h-full">
                <div className="group relative overflow-hidden rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                  <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-gold-light via-gold to-gold-deep opacity-0 transition-opacity duration-[250ms] ease-discret group-hover:opacity-100" />
                  <span className="inline-flex size-11 items-center justify-center rounded-sm bg-mist text-emerald-cta">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                      <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" d="M22 22H2" />
                        <path d="M17 22V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v16m14 0V11.5c0-1.405 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C19.607 8 18.904 8 17.5 8M3 22V11.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C4.393 8 5.096 8 6.5 8" />
                        <path strokeLinecap="round" d="M12 22v-3M10 5h4m-4 3h4m-4 3h4m-4 3h4" />
                      </g>
                    </svg>
                  </span>
                  <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                    African governments
                  </h3>
                  <p className="text-body text-muted">
                    Pre-scheduled protocol meetings plus open matchmaking.
                  </p>
                </div>
              </div>
              <div className="h-full">
                <div className="group relative overflow-hidden rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                  <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-gold-light via-gold to-gold-deep opacity-0 transition-opacity duration-[250ms] ease-discret group-hover:opacity-100" />
                  <span className="inline-flex size-11 items-center justify-center rounded-sm bg-mist text-emerald-cta">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                      <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M14 6h-4c-1.356 0-2.468 0-3.39.054c-1.645.097-2.688.367-3.438 1.118C2 8.343 2 10.229 2 14s0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14s0-5.657-1.172-6.828c-.75-.75-1.793-1.02-3.437-1.118C16.468 6 15.356 6 14 6Z" />
                        <path d="M6.61 6.054c.823-.02 1.55-.6 1.83-1.374l.035-.103L8.5 4.5c.042-.127.064-.19.086-.246a2 2 0 0 1 1.735-1.25C10.38 3 10.448 3 10.58 3h2.838c.133 0 .2 0 .26.004a2 2 0 0 1 1.735 1.25c.023.056.044.12.086.246l.026.077c.018.053.026.08.035.103c.28.775 1.007 1.354 1.83 1.374" />
                        <path strokeLinecap="round" d="M21.662 8.72c-3.01 1.956-4.515 2.934-6.101 3.427a12 12 0 0 1-7.121 0c-1.587-.493-3.092-1.47-6.102-3.427M8 11v2m8-2v2" />
                      </g>
                    </svg>
                  </span>
                  <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                    Service providers
                  </h3>
                  <p className="text-body text-muted">
                    Precision matching by technical specialty.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="font-display font-semibold text-h3 text-ink">
              Demo — how the app works
            </h3>
            <div style={{ aspectRatio: '16 / 9' }} className="relative max-w-[760px] overflow-hidden rounded-sm border border-hairline bg-emerald-deep">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
                <span className="inline-flex size-16 items-center justify-center rounded-full border border-gold/50 bg-emerald-deep/60 text-gold">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-7">
                    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="m10 8.5 5 3.5-5 3.5z" fill="currentColor" stroke="none" />
                    </g>
                  </svg>
                </span>
                <p className="font-display font-semibold text-[15px] text-ivory">
                  Video walkthrough of the A2M matchmaking app
                </p>
                <p className="text-small text-champagne/80">
                  Profile, match, meet — see the platform in action. Video coming soon.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <div className="flex items-start gap-4">
                  <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-mist text-emerald-cta transition-colors group-hover/icr:border-gold group-hover/icr:bg-gold/15">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-6">
                      <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 15.8L7.143 17L10 14M6 8.8L7.143 10L10 7" />
                        <path strokeLinecap="round" d="M13 9h5m-5 7h5" />
                      </g>
                    </svg>
                  </span>
                  <div className="pt-1">
                    <p className="font-display font-semibold text-[15px] text-ink leading-snug group-hover/icr:text-emerald-cta">
                      Profile
                    </p>
                    <p className="mt-1 text-muted text-small">
                      Define your goals, sectors, and investment criteria.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-4">
                  <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-mist text-emerald-cta transition-colors group-hover/icr:border-gold group-hover/icr:bg-gold/15">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-6">
                      <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M17.414 10.414C18 9.828 18 8.886 18 7s0-2.828-.586-3.414m0 6.828C16.828 11 15.886 11 14 11h-4c-1.886 0-2.828 0-3.414-.586m10.828 0Zm0-6.828C16.828 3 15.886 3 14 3h-4c-1.886 0-2.828 0-3.414.586m10.828 0Zm-10.828 0C6 4.172 6 5.114 6 7s0 2.828.586 3.414m0-6.828Zm0 6.828ZM13 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" />
                        <path strokeLinecap="round" d="M18 6a3 3 0 0 1-3-3m3 5a3 3 0 0 0-3 3M6 6a3 3 0 0 0 3-3M6 8a3 3 0 0 1 3 3m-4 9.388h2.26c1.01 0 2.033.106 3.016.308a14.9 14.9 0 0 0 5.33.118c.868-.14 1.72-.355 2.492-.727c.696-.337 1.549-.81 2.122-1.341c.572-.53 1.168-1.397 1.59-2.075c.364-.582.188-1.295-.386-1.728a1.89 1.89 0 0 0-2.22 0l-1.807 1.365c-.7.53-1.465 1.017-2.376 1.162q-.165.026-.345.047m0 0l-.11.012m.11-.012a1 1 0 0 0 .427-.24a1.49 1.49 0 0 0 .126-2.134a1.9 1.9 0 0 0-.45-.367c-2.797-1.669-7.15-.398-9.779 1.467m9.676 1.274a.5.5 0 0 1-.11.012m0 0a9.3 9.3 0 0 1-1.814.004" />
                        <rect width="3" height="8" x="2" y="14" rx="1.5" />
                      </g>
                    </svg>
                  </span>
                  <div className="pt-1">
                    <p className="font-display font-semibold text-[15px] text-ink leading-snug group-hover/icr:text-emerald-cta">
                      Match
                    </p>
                    <p className="mt-1 text-muted text-small">
                      Receive targeted meeting recommendations powered by AI.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-4">
                  <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-mist text-emerald-cta transition-colors group-hover/icr:border-gold group-hover/icr:bg-gold/15">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-6">
                      <g fill="none">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M8.784 22c-1.686-.752-3.078-1.924-3.993-3.493M14.825 2.186c1.677-.477 3.408-.023 4.617 1.211" />
                        <path fill="currentColor" d="m4.01 8.367l-.372-.652zm2.492.5l.648-.377zm-3.3 1.886l-.647.378zm4.495-7.38l.648-.378zm.842 1.443l-.648.378zm1.877 4.71a.75.75 0 0 0 1.296-.756zm-2.878 2.607a.75.75 0 1 0 1.296-.756zm-3.14-6.875l-.648.378zm7.44-2.327l.648-.378zm2.526 4.33l.648-.377zm1.683 2.888l.373.651a.75.75 0 0 0 .275-1.029zm1.616-4.773l-.648.378zm2.526 4.331l.648-.378zM6.99 17.25l.648-.378zm9.967 2.003l-.373-.65zM13.784 15.3a.75.75 0 0 0 1.296-.756zM4.383 9.018c.633-.362 1.257-.14 1.471.227L7.15 8.49c-.716-1.228-2.323-1.454-3.512-.775zm-.745-1.303c-1.19.681-1.803 2.182-1.083 3.416l1.296-.756c-.21-.36-.1-.996.532-1.357zM7.05 3.75l.842 1.444l1.296-.756l-.842-1.443zm.842 1.444l2.525 4.331l1.296-.755l-2.525-4.332zm.943 6.183L7.15 8.49l-1.296.755l1.684 2.888zM7.15 8.49L5.045 4.88l-1.295.756l2.104 3.61zM5.577 3.523c.634-.362 1.258-.14 1.472.227l1.296-.755C7.629 1.767 6.022 1.54 4.833 2.22zM4.833 2.22c-1.19.681-1.803 2.182-1.083 3.416l1.295-.756c-.21-.36-.099-.996.532-1.357zm6.357 1.088l2.526 4.332l1.296-.756l-2.526-4.331zm2.526 4.332l1.684 2.887l1.295-.756l-1.683-2.887zM9.719 3.08c.633-.361 1.257-.139 1.471.228l1.296-.755c-.716-1.228-2.323-1.454-3.512-.774zm-.745-1.3c-1.19.68-1.803 2.181-1.083 3.415l1.296-.756c-.21-.36-.1-.996.532-1.357zm8.041 3.975l2.526 4.331l1.296-.756L18.31 5zm-1.471-.228c.633-.362 1.257-.14 1.471.228l1.296-.756c-.716-1.227-2.323-1.453-3.512-.774zm-.745-1.302c-1.19.68-1.803 2.182-1.083 3.416l1.296-.756c-.21-.36-.1-.997.532-1.358zM2.555 11.131l3.788 6.497l1.296-.756l-3.788-6.497zm14.03 7.471c-3.367 1.924-7.337 1.029-8.946-1.73l-1.296.756c2.111 3.62 7.065 4.518 10.987 2.276zm2.956-8.517c1.605 2.753.41 6.594-2.956 8.517l.745 1.302c3.924-2.242 5.621-6.949 3.507-10.575zm-4.461 4.46c-.675-1.159-.203-2.863 1.34-3.745l-.745-1.302c-2.102 1.201-3.075 3.77-1.891 5.802z" />
                      </g>
                    </svg>
                  </span>
                  <div className="pt-1">
                    <p className="font-display font-semibold text-[15px] text-ink leading-snug group-hover/icr:text-emerald-cta">
                      Meet
                    </p>
                    <p className="mt-1 text-muted text-small">
                      Scheduled 15-min meetings at dedicated B2B tables.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
