import { Link } from 'react-router-dom'

// Persona tab panels migrated from the reference site (client-rendered
// widgets whose content the old clone captured as HTML strings).

/* --- Majors & mid-tiers --- */
export const majorsMidTiers = (
  <>
  <div className="grid items-center gap-10 lg:grid-cols-2">
    <div className="flex flex-col items-start gap-5">
      <p className="border-gold border-l-2 pl-4 text-[1.3rem] text-champagne leading-snug [font-family:var(--font-display)] sm:text-[1.5rem]">
        Your African operations run on relationships. A2M is where you manage them at the highest level.
      </p>
      <p className="text-body text-ivory/80">
        Thirty African Mining Ministers in one building, bilateral meetings coordinated by the protocol team, and deal origination at scale through the Investment Showcase and the Capital Markets Lounge.
      </p>
      <div>
        <p className="font-semibold text-[11px] text-gold uppercase tracking-[0.2em]">
          What you will leave with
        </p>
        <ul className="mt-3 flex flex-col gap-2.5">
          <li className="flex items-start gap-2.5 text-ivory/90 text-small">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Bilateral meetings with Mining Ministers of your operating countries
          </li>
          <li className="flex items-start gap-2.5 text-ivory/90 text-small">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Co-investment introductions from DFIs active in your regions
          </li>
          <li className="flex items-start gap-2.5 text-ivory/90 text-small">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Market intelligence on regulatory direction across priority jurisdictions
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
        <span className="inline-flex items-baseline gap-2.5 rounded-sm border border-gold/40 bg-gold/10 px-3.5 py-2">
          <span className="tnum font-bold font-display text-[1.25rem] text-gold leading-none">
            30+
          </span>
          <span className="text-[12px] text-champagne/90">
            African Mining Ministers
          </span>
        </span>
        <Link className="group inline-flex items-center gap-1.5 font-semibold text-champagne text-small transition-colors hover:text-gold" to="/en/about#why-participate">
          Your profile in detail
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4 transition-transform group-hover:translate-x-1" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
    <div style={{ aspectRatio: '4 / 5' }} className="relative overflow-hidden rounded-sm border bg-surface w-full border-ivory/15">
      <img alt="Majors & mid-tiers" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 50vw, 100vw" srcSet="/images/personas/majors.jpg 384w, /images/personas/majors.jpg 640w, /images/personas/majors.jpg 750w, /images/personas/majors.jpg 828w, /images/personas/majors.jpg 1080w, /images/personas/majors.jpg 1200w, /images/personas/majors.jpg 1920w, /images/personas/majors.jpg 2048w, /images/personas/majors.jpg 3840w" src="/images/personas/majors.jpg" />
    </div>
  </div>
  </>
)

/* --- Juniors & exploration --- */
export const juniorsExploration = (
  <>
  <div className="grid items-center gap-10 lg:grid-cols-2">
    <div className="flex flex-col items-start gap-5">
      <p className="border-gold border-l-2 pl-4 text-[1.3rem] text-champagne leading-snug [font-family:var(--font-display)] sm:text-[1.5rem]">
        One week of roadshows will not raise your round. Three days at A2M might.
      </p>
      <p className="text-body text-ivory/80">
        The Investment Showcase puts your project in front of investors actively deploying capital in African mining; the Capital Markets Lounge converts interest into private sessions the same day.
      </p>
      <div>
        <p className="font-semibold text-[11px] text-gold uppercase tracking-[0.2em]">
          What you will leave with
        </p>
        <ul className="mt-3 flex flex-col gap-2.5">
          <li className="flex items-start gap-2.5 text-ivory/90 text-small">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Confirmed follow-up meetings with institutional investors, royalty companies and DFIs
          </li>
          <li className="flex items-start gap-2.5 text-ivory/90 text-small">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Direct introductions to co-development partners and offtake buyers
          </li>
          <li className="flex items-start gap-2.5 text-ivory/90 text-small">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Government relations contacts in your operating jurisdiction
          </li>
          <li className="flex items-start gap-2.5 text-ivory/90 text-small">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            A validated investment narrative built on the credibility of the A2M platform
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
        <span className="inline-flex items-baseline gap-2.5 rounded-sm border border-gold/40 bg-gold/10 px-3.5 py-2">
          <span className="tnum font-bold font-display text-[1.25rem] text-gold leading-none">
            40+
          </span>
          <span className="text-[12px] text-champagne/90">
            qualified investors receive your deal before the event
          </span>
        </span>
        <Link className="group inline-flex items-center gap-1.5 font-semibold text-champagne text-small transition-colors hover:text-gold" to="/en/about#why-participate">
          Your profile in detail
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4 transition-transform group-hover:translate-x-1" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
    <div className="relative overflow-hidden rounded-sm border bg-surface w-full border-ivory/15" style={{ aspectRatio: '4 / 5' }}>
      <img alt="Juniors & exploration" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 50vw, 100vw" srcSet="/images/personas/juniors.jpg 384w, /images/personas/juniors.jpg 640w, /images/personas/juniors.jpg 750w, /images/personas/juniors.jpg 828w, /images/personas/juniors.jpg 1080w, /images/personas/juniors.jpg 1200w, /images/personas/juniors.jpg 1920w, /images/personas/juniors.jpg 2048w, /images/personas/juniors.jpg 3840w" src="/images/personas/juniors.jpg" />
    </div>
  </div>
  </>
)

/* --- Investors & DFIs --- */
export const investorsDFIs = (
  <>
  <div className="grid items-center gap-10 lg:grid-cols-2">
    <div className="flex flex-col items-start gap-5">
      <p className="border-gold border-l-2 pl-4 text-[1.3rem] text-champagne leading-snug [font-family:var(--font-display)] sm:text-[1.5rem]">
        The challenge is not finding projects. It is finding credible, supported, bankable ones.
      </p>
      <p className="text-body text-ivory/80">
        Projects pre-screened for bankability and government endorsement, a closed-door Investors' Breakfast, and complimentary registration for qualified investors.
      </p>
      <div>
        <p className="font-semibold text-[11px] text-gold uppercase tracking-[0.2em]">
          What you will leave with
        </p>
        <ul className="mt-3 flex flex-col gap-2.5">
          <li className="flex items-start gap-2.5 text-ivory/90 text-small">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            A curated pipeline of screened projects with direct access to project holders
          </li>
          <li className="flex items-start gap-2.5 text-ivory/90 text-small">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Forty co-investor relationships with documented mandates
          </li>
          <li className="flex items-start gap-2.5 text-ivory/90 text-small">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            A Deal Flow Package four weeks before arrival, plus post-event tracking
          </li>
          <li className="flex items-start gap-2.5 text-ivory/90 text-small">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Priority access to the Capital Markets Lounge for the full three days
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
        <span className="inline-flex items-baseline gap-2.5 rounded-sm border border-gold/40 bg-gold/10 px-3.5 py-2">
          <span className="tnum font-bold font-display text-[1.25rem] text-gold leading-none">
            30
          </span>
          <span className="text-[12px] text-champagne/90">
            African jurisdictions covered at ministerial level
          </span>
        </span>
        <Link className="group inline-flex items-center gap-1.5 font-semibold text-champagne text-small transition-colors hover:text-gold" to="/en/about#why-participate">
          Your profile in detail
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4 transition-transform group-hover:translate-x-1" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
    <div className="relative overflow-hidden rounded-sm border bg-surface w-full border-ivory/15" style={{ aspectRatio: '4 / 5' }}>
      <img alt="Investors & DFIs" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 50vw, 100vw" srcSet="/images/personas/investors.jpg 384w, /images/personas/investors.jpg 640w, /images/personas/investors.jpg 750w, /images/personas/investors.jpg 828w, /images/personas/investors.jpg 1080w, /images/personas/investors.jpg 1200w, /images/personas/investors.jpg 1920w, /images/personas/investors.jpg 2048w, /images/personas/investors.jpg 3840w" src="/images/personas/investors.jpg" />
    </div>
  </div>
  </>
)

/* --- Services & tech --- */
export const servicesTech = (
  <>
  <div className="grid items-center gap-10 lg:grid-cols-2">
    <div className="flex flex-col items-start gap-5">
      <p className="border-gold border-l-2 pl-4 text-[1.3rem] text-champagne leading-snug [font-family:var(--font-display)] sm:text-[1.5rem]">
        The contracts that will fund your Africa growth are being awarded by people in this room.
      </p>
      <p className="text-body text-ivory/80">
        Every African project moving from exploration to feasibility needs drilling, engineering, laboratories and technology — and all of those buyers are in one building for three days.
      </p>
      <div>
        <p className="font-semibold text-[11px] text-gold uppercase tracking-[0.2em]">
          What you will leave with
        </p>
        <ul className="mt-3 flex flex-col gap-2.5">
          <li className="flex items-start gap-2.5 text-ivory/90 text-small">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            A confirmed pipeline of meetings with TSX development and production companies
          </li>
          <li className="flex items-start gap-2.5 text-ivory/90 text-small">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Introductions to African project developers who need your services
          </li>
          <li className="flex items-start gap-2.5 text-ivory/90 text-small">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Relationships with African government procurement and local content officials
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
        <span className="inline-flex items-baseline gap-2.5 rounded-sm border border-gold/40 bg-gold/10 px-3.5 py-2">
          <span className="tnum font-bold font-display text-[1.25rem] text-gold leading-none">
            3 000+
          </span>
          <span className="text-[12px] text-champagne/90">
            scheduled B2B meetings
          </span>
        </span>
        <Link className="group inline-flex items-center gap-1.5 font-semibold text-champagne text-small transition-colors hover:text-gold" to="/en/about#why-participate">
          Your profile in detail
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4 transition-transform group-hover:translate-x-1" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
    <div className="relative overflow-hidden rounded-sm border bg-surface w-full border-ivory/15" style={{ aspectRatio: '4 / 5' }}>
      <img alt="Services & tech" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 50vw, 100vw" srcSet="/images/personas/services.jpg 384w, /images/personas/services.jpg 640w, /images/personas/services.jpg 750w, /images/personas/services.jpg 828w, /images/personas/services.jpg 1080w, /images/personas/services.jpg 1200w, /images/personas/services.jpg 1920w, /images/personas/services.jpg 2048w, /images/personas/services.jpg 3840w" src="/images/personas/services.jpg" />
    </div>
  </div>
  </>
)

/* --- Governments & ministries --- */
export const governmentsMinistries = (
  <>
  <div className="grid items-center gap-10 lg:grid-cols-2">
    <div className="flex flex-col items-start gap-5">
      <p className="border-gold border-l-2 pl-4 text-[1.3rem] text-champagne leading-snug [font-family:var(--font-display)] sm:text-[1.5rem]">
        More than 120 TSX-listed companies are active in Africa. A2M gives your ministry direct engagement — at scale, in a single mission.
      </p>
      <p className="text-body text-ivory/80">
        In three days on neutral ground, your delegation meets the TSX executives with your country on their shortlist — and becomes a founding member of the Canada-Africa framework born of the Ministerial Roundtable.
      </p>
      <div>
        <p className="font-semibold text-[11px] text-gold uppercase tracking-[0.2em]">
          What you will leave with
        </p>
        <ul className="mt-3 flex flex-col gap-2.5">
          <li className="flex items-start gap-2.5 text-ivory/90 text-small">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Direct relationships with TSX leadership teams active in your jurisdiction
          </li>
          <li className="flex items-start gap-2.5 text-ivory/90 text-small">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Confirmed follow-up engagements with DFIs and institutional investors
          </li>
          <li className="flex items-start gap-2.5 text-ivory/90 text-small">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Technical partnership introductions with Québec engineering and service firms
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
        <span className="inline-flex items-baseline gap-2.5 rounded-sm border border-gold/40 bg-gold/10 px-3.5 py-2">
          <span className="tnum font-bold font-display text-[1.25rem] text-gold leading-none">
            120+
          </span>
          <span className="text-[12px] text-champagne/90">
            TSX companies active in Africa
          </span>
        </span>
        <Link className="group inline-flex items-center gap-1.5 font-semibold text-champagne text-small transition-colors hover:text-gold" to="/en/about#why-participate">
          Your profile in detail
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4 transition-transform group-hover:translate-x-1" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
    <div className="relative overflow-hidden rounded-sm border bg-surface w-full border-ivory/15" style={{ aspectRatio: '4 / 5' }}>
      <img alt="Governments & ministries" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 50vw, 100vw" srcSet="/images/personas/governments.jpg 384w, /images/personas/governments.jpg 640w, /images/personas/governments.jpg 750w, /images/personas/governments.jpg 828w, /images/personas/governments.jpg 1080w, /images/personas/governments.jpg 1200w, /images/personas/governments.jpg 1920w, /images/personas/governments.jpg 2048w, /images/personas/governments.jpg 3840w" src="/images/personas/governments.jpg" />
    </div>
  </div>
  </>
)

/* --- Buyers & traders --- */
export const buyersTraders = (
  <>
  <div className="grid items-center gap-10 lg:grid-cols-2">
    <div className="flex flex-col items-start gap-5">
      <p className="border-gold border-l-2 pl-4 text-[1.3rem] text-champagne leading-snug [font-family:var(--font-display)] sm:text-[1.5rem]">
        The minerals that power your supply chain come from Africa. The people who control it are in Montréal.
      </p>
      <p className="text-body text-ivory/80">
        A2M assembles all three parties to an offtake negotiation — developers, governments and financiers — in one place, at one time, with the ZLECAf transformation agenda as the backdrop.
      </p>
      <div>
        <p className="font-semibold text-[11px] text-gold uppercase tracking-[0.2em]">
          What you will leave with
        </p>
        <ul className="mt-3 flex flex-col gap-2.5">
          <li className="flex items-start gap-2.5 text-ivory/90 text-small">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Direct relationships with operators and developers across the critical minerals spectrum
          </li>
          <li className="flex items-start gap-2.5 text-ivory/90 text-small">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Offtake and supply agreement discussions initiated in the Capital Markets Lounge
          </li>
          <li className="flex items-start gap-2.5 text-ivory/90 text-small">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Regulatory intelligence on the ZLECAf transformation agenda
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
        <span className="inline-flex items-baseline gap-2.5 rounded-sm border border-gold/40 bg-gold/10 px-3.5 py-2">
          <span className="tnum font-bold font-display text-[1.25rem] text-gold leading-none">
            70 %
          </span>
          <span className="text-[12px] text-champagne/90">
            of global cobalt reserves are in the DRC
          </span>
        </span>
        <Link className="group inline-flex items-center gap-1.5 font-semibold text-champagne text-small transition-colors hover:text-gold" to="/en/about#why-participate">
          Your profile in detail
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4 transition-transform group-hover:translate-x-1" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
    <div className="relative overflow-hidden rounded-sm border bg-surface w-full border-ivory/15" style={{ aspectRatio: '4 / 5' }}>
      <img alt="Buyers & traders" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 50vw, 100vw" srcSet="/images/personas/buyers.jpg 384w, /images/personas/buyers.jpg 640w, /images/personas/buyers.jpg 750w, /images/personas/buyers.jpg 828w, /images/personas/buyers.jpg 1080w, /images/personas/buyers.jpg 1200w, /images/personas/buyers.jpg 1920w, /images/personas/buyers.jpg 2048w, /images/personas/buyers.jpg 3840w" src="/images/personas/buyers.jpg" />
    </div>
  </div>
  </>
)

