import Tabs from '../components/ui/Tabs'
import { Link } from 'react-router-dom'

const btnGold =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 [&_svg]:size-4 [&_svg]:shrink-0 gold-metallic text-anthracite hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold focus-visible:outline-anthracite'



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
          <a href="#matchmaking" data-nav-id="matchmaking" className="whitespace-nowrap rounded-sm px-3 py-1.5 font-medium transition-colors bg-mist text-emerald-deep">
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
  <section id="matchmaking" className="a2m-reveal scroll-mt-24 py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-16">
    <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16">
      <div className="mt-8">
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="flex flex-col lg:col-span-7">
              <span className="font-semibold text-[11px] text-copper uppercase tracking-[0.22em]">
                Deal flow
              </span>
              <h2 className="mt-2 font-display font-bold tracking-[-0.01em] text-h2">
                Business Matchmaking
              </h2>
              <p className="mt-8 max-w-[760px] border-gold border-l-2 pl-5 font-medium text-[1.2rem] text-ink [font-family:var(--font-display)] sm:text-[1.3rem]">
                The A2M Matchmaking Platform is designed to connect you with the right people, at the right time, transforming traditional networking from a time-consuming task into a highly targeted, results-driven experience.
              </p>
              <p className="mt-4 max-w-[680px] text-body text-muted">
                The platform opens eight weeks before the event. Registered delegates can create detailed profiles, clearly define their business objectives, and receive personalized meeting recommendations drawn from the entire delegate pool. By the time you arrive in Montreal, your optimized B2B meeting agenda is already confirmed and ready to deliver value.
              </p>
              <dl className="mt-10 grid grid-cols-3 divide-x divide-hairline border-y border-hairline">
                <div className="py-5 pr-4">
                  <dt className="font-semibold text-[10px] uppercase tracking-[0.18em] text-copper">
                    Platform opens
                  </dt>
                  <dd className="tnum mt-1.5 font-display font-bold text-[1.7rem] leading-none text-emerald-cta sm:text-[2.1rem]">
                    8
                    <span className="ml-1.5 text-[0.85rem] font-medium text-muted">
                      weeks out
                    </span>
                  </dd>
                </div>
                <div className="px-4 py-5">
                  <dt className="font-semibold text-[10px] uppercase tracking-[0.18em] text-copper">
                    B2B meetings
                  </dt>
                  <dd className="tnum mt-1.5 font-display font-bold text-[1.7rem] leading-none text-emerald-cta sm:text-[2.1rem]">
                    3,000+
                  </dd>
                </div>
                <div className="py-5 pl-4">
                  <dt className="font-semibold text-[10px] uppercase tracking-[0.18em] text-copper">
                    Per meeting
                  </dt>
                  <dd className="tnum mt-1.5 font-display font-bold text-[1.7rem] leading-none text-emerald-cta sm:text-[2.1rem]">
                    20
                    <span className="ml-1.5 text-[0.85rem] font-medium text-muted">
                      minutes
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="lg:col-span-5">
              <div className="relative h-full">
                <div aria-hidden="true" className="absolute -right-3 -top-3 hidden h-full w-full rounded-sm border-2 border-gold/50 sm:block" />
                <div className="relative h-[440px] overflow-hidden rounded-sm border border-hairline shadow-card sm:h-[560px] lg:h-full lg:min-h-[600px]">
                  <img
                    alt="Delegates in conversation on the A2M business matchmaking floor"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 size-full object-cover object-[50%_35%] transition-transform duration-[1200ms] ease-cinema hover:scale-[1.03]"
                    src="/images/program/matchmaking-floor.jpg"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-emerald-ink/90 via-emerald-ink/15 to-transparent" />
                  <div className="absolute inset-x-4 bottom-4 rounded-sm border border-gold/40 bg-emerald-deep/75 p-4 backdrop-blur-md sm:inset-x-5 sm:bottom-5 sm:p-5">
                    <span className="font-semibold text-[10px] uppercase tracking-[0.22em] text-gold-light">
                      On the floor
                    </span>
                    <p className="mt-1.5 font-display font-semibold text-[15px] leading-snug text-ivory sm:text-[16px]">
                      Targeted introductions, not small talk — your agenda is confirmed before you land in Montréal.
                    </p>
                  </div>
                </div>
                <span aria-hidden="true" className="absolute -left-7 top-1/2 hidden -translate-y-1/2 rotate-180 text-[10px] uppercase tracking-[0.3em] text-subtle [writing-mode:vertical-rl] xl:block">
                  A2M 2027 — Montréal
                </span>
              </div>
            </div>
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
            <img
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 size-full object-cover"
              src="/images/program/matchmaking-lounge.jpg"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-emerald-deep/95 via-emerald-deep/85 to-emerald-deep/55" />
            <div className="relative z-10 flex flex-col items-start gap-4 p-8 lg:p-12">
              <span className="font-semibold text-[11px] text-gold-light uppercase tracking-[0.26em]">
                Matchmaking Lounge
              </span>
              <h3 className="max-w-[640px] font-bold text-[1.5rem] text-ivory leading-snug [font-family:var(--font-display)] [text-shadow:0_2px_16px_rgba(3,20,16,0.6)] sm:text-[1.9rem]">
                <span className="text-gold-light">
                  3,000+
                </span>
                {' '}B2B meetings across three days
              </h3>
              <p className="max-w-[560px] text-champagne/90 text-lead [text-shadow:0_1px_14px_rgba(3,20,16,0.55)]">
                Your optimized B2B meeting agenda is confirmed before you even land in Montréal.
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <Link className={`${btnGold} h-12 px-7 text-[12px]`} to="/en/plan-your-visit#register">
                  Get your pass
                </Link>
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
