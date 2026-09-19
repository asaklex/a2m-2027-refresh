import Tabs from '../components/ui/Tabs'
import type { ReactNode } from 'react'

function Callout({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <div className="rounded-sm border-l-2 border-l-gold bg-surface px-6 py-5">
      {label ? (
        <p className="mb-1 font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">{label}</p>
      ) : null}
      <div className="text-body text-muted">{children}</div>
    </div>
  )
}

const agendaDays = [
  {
    date: 'Sun. June 6',
    venue: 'Fairmont The Queen Elizabeth',
    img: '/images/program/day-roundtable.jpg',
    alt: 'Ministers in conversation at a closed-door roundtable',
    items: ['Ministerial Roundtable', 'Welcome reception'],
  },
  {
    date: 'Mon. June 7',
    venue: 'Centre Mont-Royal',
    img: '/images/program/day-opening.jpg',
    alt: 'Opening ceremony on the A2M main stage',
    items: ["Investors' Breakfast", 'Opening ceremony & keynotes', 'Exhibition opens & B2B matchmaking', 'Gala dinner'],
  },
  {
    date: 'Tue. June 8',
    venue: 'Centre Mont-Royal',
    img: '/images/program/day-panels.jpg',
    alt: 'Delegates in a panel session',
    items: ['Women in Mining Forum', 'Sector & jurisdiction panels', 'Networking reception'],
  },
  {
    date: 'Wed. June 9',
    venue: 'Centre Mont-Royal',
    img: '/images/program/day-matchmaking.jpg',
    alt: 'Delegates meeting at B2B tables',
    items: ['B2B meetings & project showcases', 'Closing session'],
  },
]

export function ConferenceThemesSection() {
  return (
  <section id="sessions" className="a2m-reveal scroll-mt-24 py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-20">
    <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-16">
        <div className="lg:sticky lg:top-[140px] lg:self-start">
          <span className="font-semibold text-[11px] text-copper uppercase tracking-[0.22em]">
            Program
          </span>
          <h2 className="mt-2 font-display font-bold tracking-[-0.01em] text-h2">
            Conference Themes
          </h2>
          <p className="mt-4 text-lead text-muted">
            Whether you're here to invest, finance, partner, or govern —{' '}
            <em className="font-medium [font-family:var(--font-display)] text-copper">
              the A2M 2027 program is built for you
            </em>
            .
          </p>
          <div className="mt-6">
            <Callout label="Deal flow built in">
              3,000+ B2B meetings are matched through the platform before you land in Montréal.
            </Callout>
          </div>
        </div>
        <div className="mt-8 flex min-w-0 flex-col gap-6 lg:mt-0">
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
            <h3 className="max-w-[760px] font-display font-semibold text-h3 text-ink">
              Theme Breakdown
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="h-full">
                 <div className="group flex h-full flex-col overflow-hidden rounded-sm border border-hairline bg-card shadow-card transition-all duration-[250ms] ease-discret hover:-translate-y-1 hover:border-gold hover:shadow-card-hover">
                   <div className="relative overflow-hidden">
                     <img alt="Signing a mining investment agreement" loading="lazy" decoding="async" className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-cinema group-hover:scale-105" sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw" srcSet="/images/program/theme-investing.jpg 640w, /images/program/theme-investing.jpg 750w, /images/program/theme-investing.jpg 828w, /images/program/theme-investing.jpg 1080w, /images/program/theme-investing.jpg 1200w, /images/program/theme-investing.jpg 1920w" src="/images/program/theme-investing.jpg" />
                     <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-emerald-deep/90 via-emerald-deep/15 to-transparent" />
                   </div>
                   <div className="-mt-6 flex flex-1 flex-col gap-3 px-6 pb-6">
                     <span className="relative inline-flex size-10 shrink-0 items-center justify-center rounded-sm border border-gold/40 bg-emerald-deep text-gold-light shadow-emerald">
                       <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                         <g fill="none" stroke="currentColor" strokeWidth="1.5">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M3 22h18" />
                           <path d="M3 11c0-.943 0-1.414.293-1.707S4.057 9 5 9s1.414 0 1.707.293S7 10.057 7 11v6c0 .943 0 1.414-.293 1.707S5.943 19 5 19s-1.414 0-1.707-.293S3 17.943 3 17zm7-4c0-.943 0-1.414.293-1.707S11.057 5 12 5s1.414 0 1.707.293S14 6.057 14 7v10c0 .943 0 1.414-.293 1.707S12.943 19 12 19s-1.414 0-1.707-.293S10 17.943 10 17zm7-3c0-.943 0-1.414.293-1.707S18.057 2 19 2s1.414 0 1.707.293S21 3.057 21 4v13c0 .943 0 1.414-.293 1.707S19.943 19 19 19s-1.414 0-1.707-.293S17 17.943 17 17z" />
                         </g>
                       </svg>
                     </span>
                     <h3 className="relative font-display font-semibold text-h3 text-ink">
                       Investing
                     </h3>
                     <p className="relative text-body text-muted">
                       Current state of investments, Canadian financing, and African local capital.
                     </p>
                   </div>
                 </div>
              </div>
              <div className="h-full">
                 <div className="group flex h-full flex-col overflow-hidden rounded-sm border border-hairline bg-card shadow-card transition-all duration-[250ms] ease-discret hover:-translate-y-1 hover:border-gold hover:shadow-card-hover">
                   <div className="relative overflow-hidden">
                     <img alt="Ore processing line toward finished components" loading="lazy" decoding="async" className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-cinema group-hover:scale-105" sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw" srcSet="/images/program/theme-transforming.jpg 640w, /images/program/theme-transforming.jpg 750w, /images/program/theme-transforming.jpg 828w, /images/program/theme-transforming.jpg 1080w, /images/program/theme-transforming.jpg 1200w, /images/program/theme-transforming.jpg 1920w" src="/images/program/theme-transforming.jpg" />
                     <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-emerald-deep/90 via-emerald-deep/15 to-transparent" />
                   </div>
                   <div className="-mt-6 flex flex-1 flex-col gap-3 px-6 pb-6">
                     <span className="relative inline-flex size-10 shrink-0 items-center justify-center rounded-sm border border-gold/40 bg-emerald-deep text-gold-light shadow-emerald">
                       <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                         <g fill="none" stroke="currentColor" strokeWidth="1.5">
                           <path d="M7 10c0-1.414 0-2.121.44-2.56C7.878 7 8.585 7 10 7h4c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v4c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-4c-1.414 0-2.121 0-2.56-.44C7 16.122 7 15.415 7 14z" />
                           <path d="M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12Z" />
                           <path strokeLinecap="round" d="M4 12H2m20 0h-2M4 9H2m20 0h-2M4 15H2m20 0h-2m-8 5v2m0-20v2M9 20v2M9 2v2m6 16v2m0-20v2" />
                         </g>
                       </svg>
                     </span>
                     <h3 className="relative font-display font-semibold text-h3 text-ink">
                       Transforming
                     </h3>
                     <p className="relative text-body text-muted">
                       Value chains, Quebec expertise, and local African enterprises.
                     </p>
                   </div>
                 </div>
              </div>
              <div className="h-full">
                 <div className="group flex h-full flex-col overflow-hidden rounded-sm border border-hairline bg-card shadow-card transition-all duration-[250ms] ease-discret hover:-translate-y-1 hover:border-gold hover:shadow-card-hover">
                   <div className="relative overflow-hidden">
                     <img alt="Rehabilitated, revegetated mine site at golden hour" loading="lazy" decoding="async" className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-cinema group-hover:scale-105" sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw" srcSet="/images/program/theme-sharing.jpg 640w, /images/program/theme-sharing.jpg 750w, /images/program/theme-sharing.jpg 828w, /images/program/theme-sharing.jpg 1080w, /images/program/theme-sharing.jpg 1200w, /images/program/theme-sharing.jpg 1920w" src="/images/program/theme-sharing.jpg" />
                     <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-emerald-deep/90 via-emerald-deep/15 to-transparent" />
                   </div>
                   <div className="-mt-6 flex flex-1 flex-col gap-3 px-6 pb-6">
                     <span className="relative inline-flex size-10 shrink-0 items-center justify-center rounded-sm border border-gold/40 bg-emerald-deep text-gold-light shadow-emerald">
                       <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                         <path fill="none" stroke="currentColor" strokeWidth="1.5" d="m12 9l4.5-4.5m-4.5 10L18.5 8M12 19.5l7.5-7.5M12 22c4.418 0 8-3.646 8-8.143c0-4.462-2.553-9.67-6.537-11.531A3.45 3.45 0 0 0 12 2m0 20c-4.418 0-8-3.646-8-8.143c0-4.462 2.553-9.67 6.537-11.531A3.45 3.45 0 0 1 12 2m0 20V2" />
                       </svg>
                     </span>
                     <h3 className="relative font-display font-semibold text-h3 text-ink">
                       Sharing Value
                     </h3>
                     <p className="relative text-body text-muted">
                       ESG, mining codes, local content for responsible mining operations.
                     </p>
                   </div>
                 </div>
              </div>
            </div>
            <div className="a2m-motif relative overflow-hidden rounded-sm border border-ivory/15 bg-emerald-deep text-ivory shadow-emerald">
              <div className="relative z-10 flex flex-col gap-6 p-6 sm:p-8">
                <div className="flex flex-col gap-2">
                  <span className="font-semibold text-[11px] text-gold-light uppercase tracking-[0.22em]">
                    Keynotes
                  </span>
                  <p className="max-w-[680px] text-champagne/85 text-body">
                    Three keynotes frame the program — the Canada–Africa alliance, value-chain transformation, and Quebec's complete mining ecosystem.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                  <div className="group flex h-full flex-col gap-3 rounded-sm border border-ivory/15 bg-ivory/5 p-5 transition-all duration-[250ms] ease-discret hover:-translate-y-1 hover:border-gold/60">
                    <span aria-hidden="true" className="tnum font-display font-bold text-[1.4rem] leading-none text-gold-light/90">01</span>
                    <h3 className="font-display font-semibold text-h3 text-ivory">
                      Africa, Canada &amp; AfCFTA
                    </h3>
                    <p className="text-body text-champagne/80">
                      An alliance for the minerals of tomorrow: building a truly equitable partnership. This keynote presents the strategic vision that the subsequent sessions will translate into operational terms.
                    </p>
                    <details className="group/more mt-auto pt-1">
                      <summary className="inline-flex w-fit cursor-pointer list-none items-center gap-1.5 font-semibold text-[12px] text-gold-light uppercase tracking-[0.08em] transition-colors hover:text-champagne [&::-webkit-details-marker]:hidden">
                        <span className="group-open/more:hidden">
                          +
                          Read more
                        </span>
                        <span className="hidden group-open/more:inline">
                          −
                          Show less
                        </span>
                      </summary>
                      <p className="mt-3 text-body text-champagne/75">
                        It demonstrates how the African Continental Free Trade Area (AfCFTA) provides African countries with an unprecedented framework for collectively negotiating the terms of resource exploitation, and how Canada can become the reference partner in this transformation. The presentation will explore the conditions for a truly equitable alliance between Canada and Africa on the critical minerals essential to the global energy transition.
                      </p>
                    </details>
                  </div>
                  <div className="group flex h-full flex-col gap-3 rounded-sm border border-ivory/15 bg-ivory/5 p-5 transition-all duration-[250ms] ease-discret hover:-translate-y-1 hover:border-gold/60">
                    <span aria-hidden="true" className="tnum font-display font-bold text-[1.4rem] leading-none text-gold-light/90">02</span>
                    <h3 className="font-display font-semibold text-h3 text-ivory">
                      From extraction to transformation
                    </h3>
                    <p className="text-body text-champagne/80">
                      Building value chains together for the 21st century. The global energy transition cannot occur without African minerals — nor without the capital, technology, and expertise that Canada is ready to mobilize.
                    </p>
                    <details className="group/more mt-auto pt-1">
                      <summary className="inline-flex w-fit cursor-pointer list-none items-center gap-1.5 font-semibold text-[12px] text-gold-light uppercase tracking-[0.08em] transition-colors hover:text-champagne [&::-webkit-details-marker]:hidden">
                        <span className="group-open/more:hidden">
                          +
                          Read more
                        </span>
                        <span className="hidden group-open/more:inline">
                          −
                          Show less
                        </span>
                      </summary>
                      <p className="mt-3 text-body text-champagne/75">
                        Cobalt, lithium, graphite, copper, nickel, manganese, uranium, and others. This keynote, presented by the Government of Canada (Natural Resources Canada), will articulate Canada's vision for a new-generation mining partnership with Africa — one based not solely on extraction, but on the development of integrated value chains (from mine to finished product). The presentation will focus on Canada's concrete commitments, including the $18.5 billion Critical Minerals Production Alliance, and the mechanisms through which Canadian companies, supported by FinDev Canada, can contribute to African industrial development.
                      </p>
                    </details>
                  </div>
                  <div className="group flex h-full flex-col gap-3 rounded-sm border border-ivory/15 bg-ivory/5 p-5 transition-all duration-[250ms] ease-discret hover:-translate-y-1 hover:border-gold/60">
                    <span aria-hidden="true" className="tnum font-display font-bold text-[1.4rem] leading-none text-gold-light/90">03</span>
                    <h3 className="font-display font-semibold text-h3 text-ivory">
                      Quebec, a strategic partner
                    </h3>
                    <p className="text-body text-champagne/80">
                      Capital, expertise and know-how: a complete mining ecosystem for Africa. Quebec is more than a mining province — from geology to metallurgy, exploration to transformation.
                    </p>
                    <details className="group/more mt-auto pt-1">
                      <summary className="inline-flex w-fit cursor-pointer list-none items-center gap-1.5 font-semibold text-[12px] text-gold-light uppercase tracking-[0.08em] transition-colors hover:text-champagne [&::-webkit-details-marker]:hidden">
                        <span className="group-open/more:hidden">
                          +
                          Read more
                        </span>
                        <span className="hidden group-open/more:inline">
                          −
                          Show less
                        </span>
                      </summary>
                      <p className="mt-3 text-body text-champagne/75">
                        It is a complete mining ecosystem, from university training to institutional financing. This presentation will demonstrate why Quebec is a natural partner for African mining development: its engineering firms build mines across the continent, its universities train the geologists and engineers who operate them, and its aluminum industry creates strategic dependence on West African bauxite. Quebec will present the framework for bilateral collaboration that the provincial government is prepared to establish with African mining countries.
                      </p>
                    </details>
                  </div>
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
  )
}

export function AgendaSection() {
  return (
  <section id="schedule" className="a2m-reveal scroll-mt-24 border-hairline border-t bg-surface/60 py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-20">
    <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-16">
        <div className="lg:sticky lg:top-[140px] lg:self-start">
          <span className="font-semibold text-[11px] text-copper uppercase tracking-[0.22em]">
            Day by day
          </span>
          <h2 className="mt-2 font-display font-bold tracking-[-0.01em] text-h2">
            Agenda
          </h2>
          <p className="mt-4 text-lead text-muted">
            From the closed-door Ministerial Roundtable to the closing session — every day is engineered for a precise outcome.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
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
          <div className="mt-6">
            <Callout label="Two venues">
              Policy day at Fairmont The Queen Elizabeth; conference days at Centre Mont-Royal.
            </Callout>
          </div>
        </div>
        <div className="mt-8 flex min-w-0 flex-col gap-10 lg:mt-0">
          <div>
            <h3 className="font-display font-semibold text-h3 text-ink">
              The days at a glance
            </h3>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {agendaDays.map((d) => (
                <div key={d.date} className="group flex h-full flex-col overflow-hidden rounded-sm border border-hairline bg-card shadow-card transition-all duration-[250ms] ease-discret hover:-translate-y-1 hover:border-gold hover:shadow-card-hover">
                  <div className="relative overflow-hidden">
                    <img alt={d.alt} loading="lazy" decoding="async" className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-cinema group-hover:scale-105" src={d.img} />
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-emerald-deep/90 via-emerald-deep/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <p className="font-display font-bold text-[16px] text-ivory [text-shadow:0_1px_10px_rgba(3,20,16,0.65)]">
                        {d.date}
                      </p>
                      <p className="text-[11px] text-champagne/90">
                        {d.venue}
                      </p>
                    </div>
                  </div>
                  <ul className="flex flex-1 flex-col gap-2 p-4">
                    {d.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-small text-muted">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
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
  )
}
