import { Link } from 'react-router-dom'
import { useAccountDialog } from '../components/AccountDialogContext'
import OnThisPageNav from '../components/OnThisPageNav'

const introLead =
  'The most important 90 minutes of your Africa mining investment year.'

const heroFacts = [
  { label: 'Format', value: '90 min' },
  { label: 'Capital side only', value: 'Closed session' },
  { label: 'Qualified investors', value: 'Complimentary' },
]

const audiences = [
  { index: '01', title: 'Development finance institutions (DFIs)' },
  { index: '02', title: 'Pension funds, sovereign wealth funds & endowments' },
  { index: '03', title: 'Royalty & streaming companies' },
  { index: '04', title: 'Mining-focused private equity & venture funds' },
  { index: '05', title: 'Investment banks and financial advisors' },
]

const projects = [
  { index: '01', commodity: 'Gold', stage: 'Feasibility', note: 'West Africa · pre-screened dossier' },
  { index: '02', commodity: 'Lithium', stage: 'Construction', note: 'Hard-rock pegmatite · offtake pending' },
  { index: '03', commodity: 'Copper', stage: 'Exploration', note: 'Central Africa · Tier-1 target' },
  { index: '04', commodity: 'Manganese', stage: 'Production', note: 'Expansion capital · exporting' },
]

export default function InvestorsBreakfastPage() {
  const { openAccount } = useAccountDialog()
  return (
    <>
  <div className="a2m-motif relative overflow-hidden border-hairline border-b bg-emerald-deep text-ivory">
    <img alt="" aria-hidden="true" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="100vw" srcSet="/images/personas/investors.jpg 640w, /images/personas/investors.jpg 750w, /images/personas/investors.jpg 828w, /images/personas/investors.jpg 1080w, /images/personas/investors.jpg 1200w, /images/personas/investors.jpg 1920w, /images/personas/investors.jpg 2048w, /images/personas/investors.jpg 3840w" src="/images/personas/investors.jpg" />
    <div aria-hidden="true" className="absolute inset-0 backdrop-blur-[6px]" style={{ maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 36%, rgba(0,0,0,0) 72%)', WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 36%, rgba(0,0,0,0) 72%)' }} />
    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-emerald-deep/95 via-emerald-deep/70 to-emerald-deep/25" />
    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-emerald-deep/90 to-transparent" />
    <div className="mx-auto w-full relative z-10 flex min-h-[420px] max-w-none flex-col justify-center px-4 py-12 sm:px-6 lg:min-h-[520px] lg:px-6 lg:py-16">
      <div className="a2m-cinema w-full max-w-[820px]">
        <div className="mb-6 [&_[aria-current]]:text-champagne [&_a]:text-champagne/80 [&_svg]:text-champagne/40">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-[12px] text-subtle">
              <li>
                <Link className="transition-colors hover:text-gold-light" to="/en">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right size-3.5 text-hairline" aria-hidden="true">
                  <path d="m9 18 6-6-6-6" />
                </svg>
                <Link className="transition-colors hover:text-gold-light" to="/en/program">
                  Features
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right size-3.5 text-hairline" aria-hidden="true">
                  <path d="m9 18 6-6-6-6" />
                </svg>
                <span aria-current="page" className="text-muted">
                  Investors' Breakfast
                </span>
              </li>
            </ol>
          </nav>
        </div>
        <span className="font-semibold text-[11px] text-champagne uppercase tracking-[0.26em] [text-shadow:0_1px_10px_rgba(3,20,16,0.55)]">
          Features
        </span>
        <h1 className="mt-3 max-w-[760px] font-bold text-hero text-ivory leading-[1.15] tracking-[-0.005em] [font-family:var(--font-display)] [text-shadow:0_2px_20px_rgba(3,20,16,0.55)] sm:text-hero-md sm:leading-[1.1] lg:text-hero-lg">
          The most important
          <span className="text-gold">
            90 minutes
          </span>
          of your investment year
        </h1>
        <span className="mt-5 block h-0.5 w-10 rounded-full bg-gold" aria-hidden="true" />
        <p className="mt-4 max-w-[640px] text-champagne/90 text-lead [text-shadow:0_1px_14px_rgba(3,20,16,0.6)]">
          {introLead}
        </p>
      </div>
      <div className="mt-10 flex w-full max-w-[820px] flex-wrap items-center gap-x-8 gap-y-4 border-ivory/15 border-t pt-6 lg:mt-12">
        {heroFacts.map((fact) => (
          <div key={fact.label} className="flex items-center gap-3">
            <span aria-hidden="true" className="h-9 w-0.5 rounded-full bg-gold/70" />
            <div>
              <p className="font-semibold text-[10px] text-champagne/85 uppercase tracking-[0.16em]">
                {fact.label}
              </p>
              <p className="font-display font-semibold text-[14px] text-ivory leading-tight">
                {fact.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  <OnThisPageNav
    items={[
      { id: 'breakfast-overview', label: 'Overview' },
      { id: 'why-this-program', label: 'Why this program exists' },
      { id: 'who-should-attend', label: 'Who should attend' },
      { id: 'pre-screened-projects', label: 'Pre-screened projects' },
    ]}
  />
  <section id="breakfast-overview" className="a2m-reveal scroll-mt-24 sm:scroll-mt-32 lg:scroll-mt-[190px] py-14 lg:py-20">
    <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="flex flex-col lg:col-span-7">
          <p className="max-w-[760px] border-gold border-l-2 pl-5 font-medium text-quote text-ink [font-family:var(--font-display)] sm:text-quote-md">
            {introLead}
          </p>
          <p className="mt-6 max-w-[680px] text-lead text-muted leading-[1.7]">
            There is no shortage of African mining investment forums. There is a serious shortage of moments where the people who actually write the cheques are in a room together, without project promoters competing for their attention, without keynote speakers filling the agenda, and without the noise of a conference floor between them.
          </p>
          <p className="mt-5 max-w-[680px] text-lead text-muted leading-[1.7]">
            The A2M 2027 Investors' Breakfast is that moment. A structured format designed to do in a single morning what would otherwise take months of bilateral outreach to achieve: map the capital available for African mining deals, identify where mandates overlap, and build the co-investment relationships that make complex African projects financeable.
          </p>
          <p className="mt-5 max-w-[680px] text-lead text-muted leading-[1.7]">
            This session is closed to mining company executives, project promoters and the general audience. It is open exclusively to the capital side of the table.
          </p>
        </div>
        <div className="relative self-start lg:col-span-5">
          <div className="a2m-motif relative overflow-hidden rounded-sm border border-ivory/15 bg-emerald-deep text-ivory shadow-emerald">
            <div className="relative z-10 p-6 sm:p-7">
              <div className="grid grid-cols-1 divide-y divide-ivory/15 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                <div className="group/stat -m-6 p-6 transition-colors duration-[250ms] ease-discret hover:bg-ivory/5 sm:m-0 sm:p-0">
                  <span className="tnum block font-display font-bold text-data-xl text-gold-light transition-transform duration-[250ms] ease-discret group-hover/stat:-translate-y-0.5">
                    90 min
                  </span>
                  <span className="mt-2 block text-small text-champagne/80">
                    Capital side only — closed session
                  </span>
                </div>
                <div className="group/stat -m-6 p-6 transition-colors duration-[250ms] ease-discret hover:bg-ivory/5 sm:m-0 sm:p-0">
                  <span className="tnum block font-display font-bold text-data-xl text-gold-light transition-transform duration-[250ms] ease-discret group-hover/stat:-translate-y-0.5">
                    Complimentary
                  </span>
                  <span className="mt-2 block text-small text-champagne/80">
                    for qualified investors
                  </span>
                </div>
              </div>
              <span aria-hidden="true" className="mt-7 block h-px w-full bg-ivory/15" />
              <p className="mt-6 font-semibold text-[11px] text-champagne uppercase tracking-[0.18em]">
                Closed session · 90 minutes
              </p>
              <p className="mt-2 text-body text-champagne/85 leading-[1.7]">
                Reserved for capital institutions (promoters and general audience excluded). Complimentary for qualified investors.
              </p>
              <Link className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 [&_svg]:size-4 [&_svg]:shrink-0 gold-metallic text-anthracite hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold focus-visible:outline-anthracite h-12 px-7 text-[12px] mt-5" to="/en/about?interest=interestInvestment#contact">
                Register as Investor
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="why-this-program" className="a2m-reveal scroll-mt-24 sm:scroll-mt-32 lg:scroll-mt-[190px] a2m-motif-light relative overflow-hidden bg-surface py-14 lg:py-20">
    <div className="relative z-10 mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16">
      <div className="flex items-center gap-5">
        <h2 className="font-display font-bold tracking-[-0.01em] text-h2">
          Why this program exists
        </h2>
        <span aria-hidden="true" className="hidden h-px flex-1 bg-hairline sm:block" />
      </div>
      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="flex flex-col gap-5 lg:col-span-7">
          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
            The Canada-Africa critical minerals investment space has a structural problem that no conference has yet solved. On one side, there are dozens of qualified institutional investors with a mandate to deploy capital in African mining and each spending significant resources trying to find bankable projects, credible operators and reliable co-investors. On the other side, those same investors often do not know each other's mandates well enough to co-invest efficiently. A pension fund with a $50M Africa allocation does not always know which DFI is already in a deal they are evaluating. A royalty company structuring a streaming agreement on a West African gold project does not always know which private equity fund has already committed equity to the same operator. The result is duplicated due diligence, missed co-investment opportunities, slower financing timelines and, ultimately, fewer deals closed.
          </p>
          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
            The Investors' Breakfast is designed specifically to solve this problem. By bringing together financial institutions in a structured, closed environment before the main conference program begins, it creates the shared intelligence layer that turns individual mandates into coordinated capital. The co-investments that get structured in the Capital Markets Lounge start in this room.
          </p>
        </div>
        <div className="lg:col-span-5">
          <p className="border-gold border-l-2 pl-5 font-medium text-quote text-ink [font-family:var(--font-display)] sm:text-quote-md">
            The co-investments that get structured in the Capital Markets Lounge start in this room.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section id="who-should-attend" className="a2m-reveal scroll-mt-24 sm:scroll-mt-32 lg:scroll-mt-[190px] py-14 lg:py-20">
    <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16">
      <div className="flex items-center gap-5">
        <h2 className="font-display font-bold tracking-[-0.01em] text-h2">
          Who should attend
        </h2>
        <span aria-hidden="true" className="hidden h-px flex-1 bg-hairline sm:block" />
      </div>
      <p className="mt-8 max-w-[760px] text-lead text-muted leading-[1.7]">
        The Investors' Breakfast is reserved for senior representatives of institutions that deploy or manage capital in African mining and critical minerals:
      </p>
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
        {audiences.map((audience, i) => (
          <article key={audience.index} className={`group flex h-full flex-col rounded-sm border border-hairline bg-card p-6 shadow-card transition-all duration-[250ms] ease-discret hover:-translate-y-1 hover:border-emerald-cta/40 hover:shadow-card-hover ${i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="tnum font-display font-bold text-[1.4rem] leading-none text-gold">
                {audience.index}
              </span>
              <span aria-hidden="true" className="h-px flex-1 bg-hairline" />
            </div>
            <h3 className="mt-4 font-display font-semibold text-body text-ink transition-colors duration-[250ms] ease-discret group-hover:text-emerald-cta">
              {audience.title}
            </h3>
          </article>
        ))}
      </div>
      <div className="mt-10 max-w-[760px] rounded-sm border-l-2 border-l-gold bg-surface px-6 py-5">
        <p className="mb-1 font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
          Eligibility
        </p>
        <p className="text-body text-muted">
          Eligibility is assessed by the A2M program committee on application.
        </p>
      </div>
    </div>
  </section>
  <section id="pre-screened-projects" className="a2m-reveal scroll-mt-24 sm:scroll-mt-32 lg:scroll-mt-[190px] py-14 lg:py-20">
    <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16">
      <div className="flex items-center gap-5">
        <h2 className="font-display font-bold tracking-[-0.01em] text-h2">
          Pre-screened projects
        </h2>
        <span aria-hidden="true" className="hidden h-px flex-1 bg-hairline sm:block" />
      </div>
      <p className="mt-8 max-w-[760px] text-lead text-muted leading-[1.7]">
        The sequence below previews the calibre of projects presented through the Investment Showcase.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <article key={project.index} className="group flex h-full flex-col rounded-sm border border-hairline bg-card p-6 shadow-card transition-all duration-[250ms] ease-discret hover:-translate-y-1 hover:border-emerald-cta/40 hover:shadow-card-hover">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="tnum font-display font-bold text-[1.4rem] leading-none text-gold">
                {project.index}
              </span>
              <span aria-hidden="true" className="h-px flex-1 bg-hairline" />
            </div>
            <p className="mt-4 font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
              {project.commodity}
            </p>
            <p className="tnum mt-1 font-display font-bold text-data text-emerald-deep">
              {project.stage}
            </p>
            <p className="mt-2 text-small text-muted">
              {project.note}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
  <section className="a2m-reveal a2m-motif relative overflow-hidden bg-emerald-deep py-14 text-ivory lg:py-20">
    <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16 relative z-10">
      <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
        <p className="max-w-[760px] font-display font-medium text-quote text-ivory sm:text-quote-md">
          The full deal room — with detailed dossiers — opens with your investor login.
        </p>
        <button type="button" onClick={() => openAccount('login')} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 [&_svg]:size-4 [&_svg]:shrink-0 gold-metallic text-anthracite hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold focus-visible:outline-anthracite h-12 px-7 text-[12px]">
          View all projects
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </section>
  <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16 border-hairline border-t py-8">
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex min-h-10 items-center">
        <Link className="group inline-flex items-center gap-2 font-semibold text-emerald-cta text-small transition-colors hover:text-emerald-deep" to="/en/program/women-in-mining">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left size-4 transition-transform group-hover:-translate-x-1" aria-hidden="true">
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Women in Mining Forum
        </Link>
      </div>
      <Link className="font-semibold text-muted text-small underline-offset-4 transition-colors hover:text-emerald-cta hover:underline" to="/en/program">
        Back to Features
      </Link>
      <div className="flex min-h-10 items-center justify-end">
        <Link className="group inline-flex items-center gap-2 font-semibold text-emerald-cta text-small transition-colors hover:text-emerald-deep" to="/en/program/networking">
          Networking & Social Events
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
