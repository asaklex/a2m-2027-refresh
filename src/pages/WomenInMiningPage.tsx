import { Link } from 'react-router-dom'
import OnThisPageNav from '../components/OnThisPageNav'

const introLead =
  'Empowering Women, Reshaping the Industry — a high-impact forum included with registration.'

const forumStats = [
  { value: '< 15 %', label: 'of the mining workforce are women' },
  { value: '30–40 %', label: 'in artisanal & small-scale mining' },
]

const keyTopics = [
  {
    index: '01',
    title: 'Leadership and Inclusion',
    body: 'Real stories from women leading mines, financial institutions, and government mining bodies across Canada and Africa.',
  },
  {
    index: '02',
    title: 'Breaking Barriers',
    body: "Challenges and practical solutions for increasing women's participation in traditionally male-dominated sectors.",
  },
  {
    index: '03',
    title: 'Community and Social Impact',
    body: 'The pivotal role of women in responsible mining practices and sustainable community development.',
  },
  {
    index: '04',
    title: 'Networking',
    body: 'Strategic connections with peers, decision-makers, and potential mentors.',
  },
]

export default function WomenInMiningPage() {
  return (
    <>
  <div className="a2m-motif relative overflow-hidden border-hairline border-b bg-emerald-deep text-ivory">
    <img alt="" aria-hidden="true" decoding="async" loading="eager" className="absolute inset-0 size-full object-cover" sizes="100vw" srcSet="/images/news/women-in-mining-programme.jpg 640w, /images/news/women-in-mining-programme.jpg 750w, /images/news/women-in-mining-programme.jpg 828w, /images/news/women-in-mining-programme.jpg 1080w, /images/news/women-in-mining-programme.jpg 1200w, /images/news/women-in-mining-programme.jpg 1920w, /images/news/women-in-mining-programme.jpg 2048w, /images/news/women-in-mining-programme.jpg 3840w" src="/images/news/women-in-mining-programme.jpg" />
    <div aria-hidden="true" className="absolute inset-0 backdrop-blur-[6px]" style={{ maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 36%, rgba(0,0,0,0) 72%)', WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 36%, rgba(0,0,0,0) 72%)' }} />
    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-emerald-deep/95 via-emerald-deep/70 to-emerald-deep/25" />
    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-emerald-deep/90 to-transparent" />
    <div className="mx-auto w-full relative z-10 flex min-h-[420px] max-w-none flex-col justify-center px-4 py-12 sm:px-6 lg:min-h-[520px] lg:px-6 lg:py-16">
      <div className="a2m-cinema w-full max-w-[820px]">
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
                <Link className="transition-colors hover:text-emerald-cta" to="/en/program">
                  Features
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right size-3.5 text-hairline" aria-hidden="true">
                  <path d="m9 18 6-6-6-6" />
                </svg>
                <span aria-current="page" className="text-muted">
                  Women in Mining Forum
                </span>
              </li>
            </ol>
          </nav>
        </div>
        <span className="font-semibold text-[11px] text-gold uppercase tracking-[0.26em] [text-shadow:0_1px_10px_rgba(3,20,16,0.55)]">
          Features
        </span>
        <h1 className="mt-3 max-w-[760px] font-bold text-[1.7rem] text-ivory leading-[1.15] tracking-[-0.005em] [font-family:var(--font-display)] [text-shadow:0_2px_20px_rgba(3,20,16,0.55)] sm:text-[2.4rem] sm:leading-[1.1] lg:text-[2.9rem]">
          Empowering women,
          <span className="text-gold">
            reshaping the industry
          </span>
        </h1>
        <span className="mt-5 block h-0.5 w-10 rounded-full bg-gold" aria-hidden="true" />
        <p className="mt-4 max-w-[640px] text-champagne/90 text-lead [text-shadow:0_1px_14px_rgba(3,20,16,0.6)]">
          {introLead}
        </p>
      </div>
      <div className="mt-10 flex w-full max-w-[820px] flex-wrap items-center gap-x-8 gap-y-4 border-ivory/15 border-t pt-6 lg:mt-12">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-9 w-0.5 rounded-full bg-gold/70" />
          <div>
            <p className="font-semibold text-[10px] text-champagne/85 uppercase tracking-[0.16em]">
              Format
            </p>
            <p className="font-display font-semibold text-[14px] text-ivory leading-tight">
              Keynotes & panels
            </p>
          </div>
        </div>
        <span aria-hidden="true" className="ml-auto hidden font-semibold text-[10px] uppercase tracking-[0.3em] text-champagne/60 lg:inline">
          A2M 2027 — Montréal
        </span>
      </div>
    </div>
  </div>
  <OnThisPageNav
    items={[
      { id: 'forum-overview', label: 'Overview' },
      { id: 'why-this-forum', label: 'Why This Forum Matters' },
      { id: 'key-topics', label: 'Key Topics' },
    ]}
  />
  <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16">
    <div className="flex flex-col gap-16 py-14 lg:gap-20 lg:py-20">
      <section id="forum-overview" className="a2m-reveal scroll-mt-[190px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="flex flex-col lg:col-span-7">
            <p className="max-w-[760px] border-gold border-l-2 pl-5 font-medium text-[1.2rem] text-ink [font-family:var(--font-display)] sm:text-[1.3rem]">
              {introLead}
            </p>
            <p className="mt-6 max-w-[680px] text-lead text-muted leading-[1.7]">
              A2M is proud to host the Women in Mining Forum, a high-impact program dedicated to celebrating and advancing the role of women in the mining sectors. Bringing together women leaders, executives, entrepreneurs, and advocates from both regions, the forum features inspiring keynotes, candid panel discussions, and strategic networking opportunities.
            </p>
          </div>
          <div className="relative lg:col-span-5">
            <div aria-hidden="true" className="absolute -right-3 -top-3 hidden h-full w-full rounded-sm border-2 border-gold/50 sm:block" />
            <div className="relative overflow-hidden rounded-sm border border-hairline bg-surface shadow-card" style={{ aspectRatio: '16 / 9' }}>
              <img alt="Women in Mining Forum room: a speaker at the podium before delegates" loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover transition-transform duration-[1200ms] ease-cinema hover:scale-[1.03]" sizes="(min-width: 1024px) 38vw, (min-width: 640px) 50vw, 92vw" srcSet="/images/program/women-in-mining.jpg 256w, /images/program/women-in-mining.jpg 384w, /images/program/women-in-mining.jpg 640w, /images/program/women-in-mining.jpg 750w, /images/program/women-in-mining.jpg 828w, /images/program/women-in-mining.jpg 1080w, /images/program/women-in-mining.jpg 1200w, /images/program/women-in-mining.jpg 1920w, /images/program/women-in-mining.jpg 2048w, /images/program/women-in-mining.jpg 3840w" src="/images/program/women-in-mining.jpg" />
            </div>
          </div>
        </div>
      </section>
      <section id="why-this-forum" className="a2m-reveal scroll-mt-[190px]">
        <div className="flex items-center gap-5">
          <h2 className="font-display font-bold tracking-[-0.01em] text-h2">
            Why This Forum Matters
          </h2>
          <span aria-hidden="true" className="hidden h-px flex-1 bg-hairline sm:block" />
        </div>
        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="flex flex-col gap-5 lg:col-span-7">
            <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
              Africa's mining sector employs hundreds of thousands, yet women represent less than 15% of the workforce in most producing countries, with even lower representation at technical, managerial, and executive levels. In artisanal and small-scale mining, women comprise 30-40% of the workforce but remain largely excluded from licensing, financing, and value capture.
            </p>
            <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
              This is not only an equity issue; it is a commercial and governance imperative. Inclusive mining sectors attract higher-quality investment, reduce community risk, improve ESG performance, and unlock broader economic development.
            </p>
          </div>
          <div className="a2m-motif relative self-start overflow-hidden rounded-sm border border-ivory/15 bg-emerald-deep text-ivory shadow-emerald lg:col-span-5">
            <div className="relative z-10 grid grid-cols-1 divide-y divide-ivory/15 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-1 lg:divide-x-0 lg:divide-y">
              {forumStats.map((stat) => (
                <div key={stat.value} className="group/stat p-6 transition-colors duration-[250ms] ease-discret hover:bg-ivory/5 sm:p-7">
                  <span className="tnum block font-display font-bold text-data-xl text-gold-light transition-transform duration-[250ms] ease-discret group-hover/stat:-translate-y-0.5">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-small text-champagne/80">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 max-w-[760px] rounded-sm border-l-2 border-l-gold bg-surface px-6 py-5">
          <p className="text-body text-muted leading-[1.7]">
            The Women in Mining Forum addresses this reality head-on, aligned with the AfCFTA Protocol on Women and Youth in Trade, DFI gender-lens requirements, and Canada's Towards Sustainable Mining (TSM) standards.
          </p>
        </div>
      </section>
      <section id="key-topics" className="a2m-reveal scroll-mt-[190px]">
        <div className="flex items-center gap-5">
          <h2 className="font-display font-bold tracking-[-0.01em] text-h2">
            Key Topics
          </h2>
          <span aria-hidden="true" className="hidden h-px flex-1 bg-hairline sm:block" />
        </div>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {keyTopics.map((topic) => (
            <article key={topic.index} className="group flex h-full flex-col rounded-sm border border-hairline bg-card p-6 shadow-card transition-all duration-[250ms] ease-discret hover:-translate-y-1 hover:border-gold hover:shadow-card-hover sm:p-7">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="tnum font-display font-bold text-[1.4rem] leading-none text-gold">
                  {topic.index}
                </span>
                <span aria-hidden="true" className="h-px flex-1 bg-hairline transition-colors duration-[250ms] ease-discret group-hover:bg-gold/50" />
              </div>
              <h3 className="mt-4 font-display font-semibold text-h3 text-ink transition-colors duration-[250ms] ease-discret group-hover:text-emerald-cta">
                {topic.title}
              </h3>
              <p className="mt-2 text-body text-muted">
                {topic.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  </div>
  <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16 border-hairline border-t py-8">
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex min-h-10 items-center">
        <Link className="group inline-flex items-center gap-2 font-semibold text-emerald-cta text-small transition-colors hover:text-emerald-deep" to="/en/program/honorary-country">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left size-4 transition-transform group-hover:-translate-x-1" aria-hidden="true">
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Honorary Country
        </Link>
      </div>
      <Link className="font-semibold text-muted text-small underline-offset-4 transition-colors hover:text-emerald-cta hover:underline" to="/en/program">
        Back to Features
      </Link>
      <div className="flex min-h-10 items-center justify-end">
        <Link className="group inline-flex items-center gap-2 font-semibold text-emerald-cta text-small transition-colors hover:text-emerald-deep" to="/en/program/investors-breakfast">
          Investors' Breakfast
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
