import Accordion from '../components/ui/Accordion'
import OnThisPageNav from '../components/OnThisPageNav'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

const btnGold =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 [&_svg]:size-4 [&_svg]:shrink-0 gold-metallic text-anthracite hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold focus-visible:outline-anthracite'

function Check({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-body text-muted">
      <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-sm bg-mist text-emerald-cta">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-3" aria-hidden="true">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
      <span>{children}</span>
    </li>
  )
}

function Callout({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <div className="rounded-sm border-l-2 border-l-gold bg-surface px-6 py-5">
      {label && (
        <p className="mb-1 font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">{label}</p>
      )}
      <div className="text-body text-muted">{children}</div>
    </div>
  )
}

const strategyAxes = [
  {
    num: '01',
    title: 'Diplomatic engagement',
    body: 'Builds stronger government-to-government relationships, significantly reducing political risk for mining and infrastructure projects.',
  },
  {
    num: '02',
    title: 'Economic cooperation',
    body: 'Organizing high-level trade missions, establishing an Africa Trade Hub, robustly supporting AfCFTA, accelerating Foreign Investment Promotion and Protection Agreements (FIPAs) negotiations, and expanding research partnerships.',
  },
  {
    num: '03',
    title: 'Economic development',
    body: "Strengthens FinDev Canada's on-the-ground presence with a new office in South Africa, enabling increased co-financing of strategic infrastructure, renewable energy, and mining projects.",
  },
  {
    num: '04',
    title: 'Peace and security',
    body: 'Focuses on conflict prevention, stability, and peace-building initiatives that create a more predictable and secure environment for long-term investments.',
  },
  {
    num: '05',
    title: 'Multilateral engagement',
    body: "Enhances Canada's collaboration with international organizations, regional bodies, and partners to amplify impact and coordinate efforts across the continent.",
  },
]

const strategyNumbers = [
  {
    value: '4,5 G$',
    note: 'in bilateral international assistance to Africa over the past 5 years (a 52% increase over 8 years)',
  },
  {
    value: '15,1 G$',
    note: 'in merchandise trade with African countries in 2024 (up nearly 30% in 5 years)',
  },
  {
    value: 'Juin 2025',
    note: 'launch of the Critical Minerals Production Alliance, identifying Africa as a priority partner',
  },
]

const chairpersons = [
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

const accordionTriggerClass =
  'flex flex-1 items-center justify-between gap-4 py-4 text-left font-display font-semibold text-ivory transition-colors hover:text-gold-light [&[data-state=open]>svg]:rotate-180'

function AccordionChevron() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down size-5 shrink-0 text-champagne/60 transition-transform duration-[250ms] ease-discret" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export default function MinisterialRoundtablePage() {
  return (
    <>
      <div className="a2m-motif relative overflow-hidden border-hairline border-b bg-emerald-ink text-ivory">
        <img
          alt=""
          aria-hidden="true"
          decoding="async"
          loading="eager"
          className="absolute inset-0 size-full object-cover"
          src="/images/news/ministerial-round-table-agenda.jpg"
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
                    Ministerial Roundtable
                  </span>
                </li>
              </ol>
            </nav>
          </div>
          <span className="font-semibold text-[11px] text-gold-light uppercase tracking-[0.26em] [text-shadow:0_1px_10px_rgba(3,20,16,0.55)]">
            Ministerial Roundtable
          </span>
          <h1 className="mt-3 max-w-[820px] font-bold text-[1.9rem] text-ivory leading-[1.12] tracking-[-0.01em] [font-family:var(--font-display)] [text-shadow:0_2px_20px_rgba(3,20,16,0.55)] sm:text-[2.6rem] lg:text-[3.1rem]">
            The first <span className="text-gold-light">Canada-Africa</span> political dialogue on critical minerals
          </h1>
          <span className="mt-5 block h-0.5 w-10 rounded-full bg-gold" aria-hidden="true" />
          <dl className="mt-12 flex flex-wrap items-start gap-x-12 gap-y-6 border-ivory/15 border-t pt-8">
            <div>
              <dt className="font-semibold text-[10px] text-champagne/85 uppercase tracking-[0.16em]">
                Date
              </dt>
              <dd className="tnum mt-1 font-display font-bold text-data text-ivory">
                June 6, 2027
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[10px] text-champagne/85 uppercase tracking-[0.16em]">
                Venue
              </dt>
              <dd className="mt-1 font-display font-bold text-data text-ivory">
                Fairmont The Queen Elizabeth
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[10px] text-champagne/85 uppercase tracking-[0.16em]">
                Access
              </dt>
              <dd className="mt-1 font-display font-bold text-data text-ivory">
                By invitation only
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <OnThisPageNav
        items={[
          { id: 'ministerial-round-table', label: 'The Roundtable' },
          { id: 'canada-africa-strategy', label: "Canada's Africa Strategy" },
          { id: 'chairpersons', label: 'Chairpersons' },
        ]}
      />
      <section id="ministerial-round-table" className="a2m-reveal scroll-mt-24 py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-20">
        <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-16">
            <div className="lg:sticky lg:top-[140px] lg:self-start">
              <span className="font-semibold text-[11px] text-copper uppercase tracking-[0.22em]">
                Overview
              </span>
              <h2 className="mt-2 font-display font-bold tracking-[-0.01em] text-h2">
                The Roundtable
              </h2>
              <p className="mt-4 text-lead text-muted">
                The first Canada-Africa political dialogue on critical minerals and mining held on North American soil.
              </p>
              <div className="mt-6">
                <Callout label="June 6, 2027 · by invitation only · Fairmont">
                  A structured, closed-door, three-hour high-level political dialogue.
                </Callout>
              </div>
            </div>
            <div className="flex min-w-0 flex-col gap-10">
              <div className="flex flex-col gap-5">
                <p className="text-lead text-muted leading-[1.7]">
                  Governments are the decisive factor in African mining. They issue licences, set fiscal and regulatory terms, define stability, and determine which international partners receive privileged access to strategic resources.
                </p>
                <p className="text-lead text-muted leading-[1.7]">
                  The Ministerial Roundtable brings African mining ministers and the Canadian Minister of Natural Resources together as active negotiating partners. In a structured, closed-door, three-hour high-level political dialogue, participating governments will tackle the core issues shaping the future of Canada-Africa mining relations: regulatory certainty, fiscal terms, local content and value addition, critical minerals supply chain security, responsible mining standards, and project de-risking mechanisms.
                </p>
                <p className="text-lead text-muted leading-[1.7]">
                  This will be the first time such a dedicated, ministerial-level bilateral (and plurilateral) dialogue takes place on North American soil — a milestone that signals Canada's seriousness and creates a repeatable framework for ongoing engagement.
                </p>
              </div>
              <div>
                <h3 className="font-display font-semibold text-h3 text-ink">
                  Why this roundtable matters
                </h3>
                <p className="mt-3 text-lead text-muted leading-[1.7]">
                  According to Natural Resources Canada (NRCan), Canada is one of the largest foreign mining investors in Africa, with mining assets exceeding $45 billion and more than 100 Canadian companies active across the continent. Canadian mining and exploration companies bring not only substantial capital but also world-class technical expertise, responsible mining practices, and a long-term commitment to the region.
                </p>
                <p className="mt-3 text-lead text-muted leading-[1.7]">
                  This positions Canada uniquely to support Africa's development priorities at a pivotal moment. African governments are leveraging the African Continental Free Trade Area (AfCFTA), championed by H.E. Issoufou Mahamadou, to pursue collective bargaining on value addition, local content requirements, and improved investment frameworks. Complementing this, Canada's Africa Strategy, A Partnership for Shared Prosperity and Security (launched March 2025), provides a clear policy foundation for deeper economic and security cooperation.
                </p>
                <p className="mt-3 text-lead text-muted leading-[1.7]">
                  The proposed Canada-Africa Ministerial Roundtable bridges a critical gap. While high-level commitments exist on both sides, there is often a missing operational government-to-government framework to translate policy into de-risked, bankable projects. The Roundtable would:
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  <Check>
                    Reduce political and regulatory risk through structured dialogue and bilateral mechanisms.
                  </Check>
                  <Check>
                    Stabilize the investment climate by aligning expectations on local content, value addition, and community benefits.
                  </Check>
                  <Check>
                    Convert strategic partnerships into actionable outcomes, delivering mutual benefits for Canadian companies (market access, project pipelines) and African priorities (jobs, skills transfer, industrialization, and revenue generation).
                  </Check>
                </ul>
                <p className="mt-5 text-lead text-muted leading-[1.7]">
                  By fostering direct, high-level engagement between Canadian and African policymakers, regulators, and industry leaders, the Roundtable can accelerate responsible resource development that supports Africa's economic transformation while strengthening Canada's supply chain security for critical minerals.
                </p>
              </div>
              <div>
                <h3 className="font-display font-semibold text-h3 text-ink">
                  Focus areas
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  <Check>
                    Securing equitable terms for Canada-Africa mining partnerships
                  </Check>
                  <Check>
                    Critical minerals — aligning African supply with Canadian industrial demand
                  </Check>
                  <Check>
                    Local value addition and downstream value-chain development
                  </Check>
                  <Check>
                    Regulatory frameworks and investors protection across African jurisdictions
                  </Check>
                  <Check>
                    Leveraging the AfCFTA as a collective bargaining platform for African governments
                  </Check>
                </ul>
              </div>
              <div>
                <Callout label="By official invitation">
                  Attendance at the Ministerial Roundtable is by official invitation only.
                </Callout>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="canada-africa-strategy" className="a2m-motif relative scroll-mt-24 overflow-hidden bg-emerald-deep py-16 text-ivory sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-24">
        <div className="relative z-10 mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-16">
            <div>
              <span className="font-semibold text-[11px] text-gold-light uppercase tracking-[0.22em]">
                Policy foundation
              </span>
              <h2 className="mt-2 font-display font-bold tracking-[-0.01em] text-h2 text-ivory">
                Canada's Africa Strategy
              </h2>
              <p className="mt-4 text-lead text-champagne/90">
                "A Partnership for Shared Prosperity and Security" — launched March 2025, A2M 2027 is its operational platform.
              </p>
              <div className="mt-6">
                <div className="rounded-sm border border-gold/40 bg-gold/10 px-6 py-5">
                  <p className="text-body text-ivory">
                    Read Canada's Africa Strategy (March 2025) — the policy framework A2M 2027 operationalizes.
                  </p>
                  <a href="https://international.canada.ca/international-canada/assets/pdfs/africa-strategy-strategie/africa-strategy-en.pdf" target="_blank" rel="noopener noreferrer" className={`${btnGold} mt-4 h-10 px-5 text-[11px]`}>
                    Read the Strategy (PDF)
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex min-w-0 flex-col gap-10">
              <div>
                <h3 className="font-display font-semibold text-h3 text-ivory">
                  Why It Matters for A2M 2027
                </h3>
                <p className="mt-3 max-w-[760px] text-lead text-champagne/80 leading-[1.7]">
                  On March 6, 2025, the Government of Canada unveiled its first-ever comprehensive Africa Strategy — a landmark policy developed through extensive consultations with nearly 690 African, Canadian, and international stakeholders. Fully aligned with the African Union's Agenda 2063, the Strategy marks a strategic pivot in response to evolving global economic and geopolitical realities.
                </p>
                <p className="mt-3 max-w-[760px] text-lead text-champagne/80 leading-[1.7]">
                  A2M 2027 is the essential operational platform that transforms this high-level political vision into tangible outcomes — bringing together capital, operators, African governments, and Canadian leadership to drive real investment and partnerships.
                </p>
              </div>
              <div>
                <h3 className="font-display font-semibold text-h3 text-ivory">
                  Why Africa — and Why Now
                </h3>
                <p className="mt-3 max-w-[760px] text-lead text-champagne/80 leading-[1.7]">
                  The African continent holds nearly 30% of the world's mineral reserves and produces 60% of the planet's cobalt, 50% of its platinum, and 40% of its chrome. This immense resource base positions Africa as a cornerstone of the global green energy transition.
                </p>
                <p className="mt-3 max-w-[760px] text-lead text-champagne/80 leading-[1.7]">
                  For Canada, diversifying critical minerals supply chains and forging resilient partnerships with African nations are vital to strengthening national economic security and maintaining long-term competitiveness in the clean energy future.
                </p>
              </div>
              <div>
                <h3 className="font-display font-semibold text-h3 text-ivory">
                  The Five Main Strategic Axes
                </h3>
                <p className="mt-3 max-w-[760px] text-lead text-champagne/80 leading-[1.7]">
                  The Strategy is structured around five axes, closely aligned with African priorities.
                </p>
                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {strategyAxes.map((axis) => (
                    <div key={axis.num} className="flex h-full flex-col gap-3 rounded-sm border border-ivory/15 bg-ivory/5 p-6 transition-colors duration-[250ms] ease-discret hover:border-gold/60">
                      <span className="tnum font-display font-bold text-data text-gold-light">
                        {axis.num}
                      </span>
                      <h4 className="font-display font-semibold text-h3 text-ivory">
                        {axis.title}
                      </h4>
                      <p className="text-body text-champagne/80">
                        {axis.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-display font-semibold text-h3 text-ivory">
                  Key Numbers
                </h3>
                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
                  {strategyNumbers.map((n) => (
                    <div key={n.value} className="rounded-sm border border-ivory/15 bg-ivory/5 p-6">
                      <span className="tnum block font-display font-bold text-data-xl text-gold-light">
                        {n.value}
                      </span>
                      <span className="mt-2 block text-small text-champagne/80">
                        {n.note}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 max-w-[760px] text-lead text-champagne/80 leading-[1.7]">
                  The Critical Minerals Production Alliance, launched by Canada in June 2025, identifies Africa as a priority partner for secure, responsible, and diversified supply chains.
                </p>
              </div>
              <div>
                <h3 className="font-display font-semibold text-h3 text-ivory">
                  The Gap the Strategy Addresses
                </h3>
                <p className="mt-3 max-w-[760px] text-lead text-champagne/80 leading-[1.7]">
                  While ambitious and well-resourced, the Strategy is a high-level policy framework — not an implementation mechanism. It lacks a dedicated, neutral platform where governments, investors, DFIs, and the private sector can engage simultaneously to structure deals and advance shared priorities.
                </p>
                <p className="mt-3 max-w-[760px] text-lead text-champagne/80 leading-[1.7]">
                  A2M 2027 fills this gap. The Ministerial Roundtable on June 6 provides the bilateral political outcomes, co-financing structures, and ongoing accountability framework the Strategy requires to move from vision to results.
                </p>
              </div>
              <div>
                <h3 className="font-display font-semibold text-h3 text-ivory">
                  What This Means for You at A2M 2027
                </h3>
                <Accordion
                  containerClassName="w-full"
                  items={[
                    {
                      itemClassName: 'border-ivory/15 border-b',
                      triggerClassName: accordionTriggerClass,
                      trigger: (
                        <>
                          Canadian mining companies
                          <AccordionChevron />
                        </>
                      ),
                      panel: (
                        <div className="flex flex-col gap-3 pb-5 text-body text-champagne/80">
                          <p>Direct access to the ministers and regulators who licence your African projects. The Roundtable is where fiscal terms, stability agreements and local-content expectations are discussed at the political level — before they become constraints on operations.</p>
                          <p>Participating companies gain early visibility into government priorities across African mining jurisdictions, and a standing channel to raise regulatory obstacles directly with the decision-makers who can resolve them.</p>
                        </div>
                      ),
                    },
                    {
                      itemClassName: 'border-ivory/15 border-b',
                      triggerClassName: accordionTriggerClass,
                      trigger: (
                        <>
                          Investors & Development Finance Institutions
                          <AccordionChevron />
                        </>
                      ),
                      panel: (
                        <div className="flex flex-col gap-3 pb-5 text-body text-champagne/80">
                          <p>A government-to-government anchor for country risk. The Roundtable aligns host-government priorities with the co-investment structures DFIs need — de-risking instruments, stability clauses and explicit policy commitments.</p>
                          <p>Institutional investors leave with a consolidated read on where African governments stand on critical minerals, licensing and value addition — and on where Canadian policy is channelling support.</p>
                        </div>
                      ),
                    },
                    {
                      itemClassName: 'border-ivory/15 border-b',
                      triggerClassName: accordionTriggerClass,
                      trigger: (
                        <>
                          African Governments
                          <AccordionChevron />
                        </>
                      ),
                      panel: (
                        <div className="flex flex-col gap-3 pb-5 text-body text-champagne/80">
                          <p>Meet the Canadian institutions that shape mining finance — from Natural Resources Canada to the TSX-listed companies active on the continent — as negotiating partners rather than suitors.</p>
                          <p>The Roundtable supports collective bargaining on value addition and local content under the AfCFTA, and positions your jurisdiction directly in front of the capital that funds African mining.</p>
                        </div>
                      ),
                    },
                    {
                      itemClassName: 'border-ivory/15 border-b',
                      triggerClassName: accordionTriggerClass,
                      trigger: (
                        <>
                          Service & Technology Providers
                          <AccordionChevron />
                        </>
                      ),
                      panel: (
                        <div className="flex flex-col gap-3 pb-5 text-body text-champagne/80">
                          <p>The political outcomes of the Roundtable — infrastructure corridors, processing commitments, responsible-mining standards — define the contracts that follow.</p>
                          <p>Providers in engineering, geoscience, equipment, power and digital mining get early sight of the project pipelines and partnership models emerging from the first Canada-Africa framework on critical minerals.</p>
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Chairpersons — same composition as the home Speakers section */}
      <section id="chairpersons" className="a2m-reveal scroll-mt-24 bg-ivory px-4 py-20 sm:px-8 sm:scroll-mt-32 lg:px-16 lg:scroll-mt-[205px]">
        <div className="mx-auto w-full max-w-[max(1280px,80vw)]">
          <p className="text-small font-semibold uppercase tracking-[0.26em] text-copper">
            Presiding the dialogue
          </p>
          <h2 className="mt-3 font-display text-h1 text-ink">Chairpersons</h2>
          <span className="mt-5 block h-0.5 w-10 rounded-full bg-gold" aria-hidden="true" />
          <p className="mt-5 max-w-[640px] text-lead text-muted">
            The Roundtable is guided by distinguished chairpersons from Canada and Africa, whose standing embodies the conference's values.
          </p>
          <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {chairpersons.map((person) => (
              <li key={person.name}>
                <article>
                  <img
                    alt={person.name}
                    loading="lazy"
                    className="aspect-square w-full rounded-sm object-cover shadow-card"
                    src={person.image}
                  />
                  <h3 className="mt-4 font-display font-semibold text-body uppercase tracking-[0.04em] text-emerald-deep">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-small text-ink">{person.title}</p>
                  <p className="mt-0.5 text-small text-muted">{person.org}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16 border-hairline border-t py-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex min-h-10 items-center" />
          <Link className="font-semibold text-muted text-small underline-offset-4 transition-colors hover:text-emerald-cta hover:underline" to="/en">
            Back to Home
          </Link>
          <div className="flex min-h-10 items-center justify-end">
            <Link className="group inline-flex items-center gap-2 font-semibold text-emerald-cta text-small transition-colors hover:text-emerald-deep" to="/en/program/honorary-country">
              Honorary Country
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4 transition-transform group-hover:translate-x-1" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
