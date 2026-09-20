import OnThisPageNav from '../components/OnThisPageNav'
import { Link } from 'react-router-dom'

export default function PlanYourVisitPage() {
  return (
    <>
  <div className="a2m-motif relative overflow-hidden border-hairline border-b bg-emerald-deep text-ivory">
    <img alt="" aria-hidden="true" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="100vw" srcSet="/images/plan/montreal-skyline.jpg 640w, /images/plan/montreal-skyline.jpg 750w, /images/plan/montreal-skyline.jpg 828w, /images/plan/montreal-skyline.jpg 1080w, /images/plan/montreal-skyline.jpg 1200w, /images/plan/montreal-skyline.jpg 1920w, /images/plan/montreal-skyline.jpg 2048w, /images/plan/montreal-skyline.jpg 3840w" src="/images/plan/montreal-skyline.jpg" />
    <div aria-hidden="true" className="absolute inset-0 backdrop-blur-[6px]" style={{ maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 36%, rgba(0,0,0,0) 72%)', WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 36%, rgba(0,0,0,0) 72%)' }} />
    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-emerald-deep/95 via-emerald-deep/70 to-emerald-deep/25" />
    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-emerald-deep/90 to-transparent" />
    <div className="mx-auto w-full relative z-10 flex min-h-[420px] max-w-none flex-col justify-center px-4 py-12 sm:px-6 lg:min-h-[520px] lg:px-6 lg:py-16">
      <div className="a2m-cinema w-full max-w-[880px]">
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
                <span aria-current="page" className="text-muted">
                  Plan Your Visit
                </span>
              </li>
            </ol>
          </nav>
        </div>
        <span className="font-semibold text-[11px] text-champagne uppercase tracking-[0.26em] [text-shadow:0_1px_10px_rgba(3,20,16,0.55)]">
          Plan Your Visit
        </span>
        <h1 className="mt-3 max-w-[760px] font-bold text-hero text-ivory leading-[1.15] tracking-[-0.005em] [font-family:var(--font-display)] [text-shadow:0_2px_20px_rgba(3,20,16,0.55)] sm:text-hero-md sm:leading-[1.1] lg:text-hero-lg">
          <span className="text-gold">
            Montréal
          </span>
          is waiting for you
        </h1>
        <span className="mt-5 block h-0.5 w-10 rounded-full bg-gold" aria-hidden="true" />
        <p className="mt-4 max-w-[640px] text-champagne/90 text-lead [text-shadow:0_1px_14px_rgba(3,20,16,0.6)]">
          Venue, accommodation, discovering Montréal and practical information for delegates.
        </p>
      </div>
      <div className="mt-10 flex w-full max-w-[880px] flex-wrap items-center gap-x-8 gap-y-4 border-ivory/15 border-t pt-6 lg:mt-12">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-9 w-0.5 rounded-full bg-gold/70" />
          <div>
            <p className="font-semibold text-[10px] text-champagne/85 uppercase tracking-[0.16em]">
              Venue
            </p>
            <p className="font-display font-semibold text-[14px] text-ivory leading-tight">
              Centre Mont-Royal
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-9 w-0.5 rounded-full bg-gold/70" />
          <div>
            <p className="font-semibold text-[10px] text-champagne/85 uppercase tracking-[0.16em]">
              Partner hotel
            </p>
            <p className="font-display font-semibold text-[14px] text-ivory leading-tight">
              Fairmont The Queen Elizabeth
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-9 w-0.5 rounded-full bg-gold/70" />
          <div>
            <p className="font-semibold text-[10px] text-champagne/85 uppercase tracking-[0.16em]">
              Dates
            </p>
            <p className="font-display font-semibold text-[14px] text-ivory leading-tight">
              June 7–9, 2027
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <OnThisPageNav
    items={[
      { id: "register", label: "Register as a delegate" },
      { id: "where-to-stay", label: "Book accommodation" },
      { id: "visa", label: "Request invitation letter" },
      { id: "discover-montreal", label: "Discover Montréal" },
      { id: "venue", label: "Venue & accessibility" },
      { id: "useful-info", label: "Useful information" },
    ]}
  />
  <section id="register" className="a2m-reveal scroll-mt-24 sm:scroll-mt-32 lg:scroll-mt-[190px] py-14 lg:py-20">
    <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16">
      <div className="flex items-center gap-5">
        <h2 className="font-display font-bold tracking-[-0.01em] text-h2">
          Register as a delegate
        </h2>
        <span aria-hidden="true" className="hidden h-px flex-1 bg-hairline sm:block" />
      </div>
      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="flex flex-col gap-8 lg:col-span-5">
          <div className="rounded-sm border border-emerald-cta/25 bg-mist/50 p-6 sm:p-7">
            <p className="font-semibold text-[11px] text-emerald-cta uppercase tracking-[0.18em]">
              Every pass includes
            </p>
            <div className="mt-4 flex flex-col divide-y divide-hairline">
              <div className="flex items-center gap-3 py-3 first:pt-0">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-mist text-emerald-cta">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 15.8L7.143 17L10 14M6 8.8L7.143 10L10 7" />
                      <path strokeLinecap="round" d="M13 9h5m-5 7h5" />
                    </g>
                  </svg>
                </span>
                <span className="text-body text-ink">
                  Full program access
                </span>
              </div>
              <div className="flex items-center gap-3 py-3">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-mist text-emerald-cta">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" d="M22 22H2" />
                      <path d="M17 22V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v16m14 0V11.5c0-1.405 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C19.607 8 18.904 8 17.5 8M3 22V11.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C4.393 8 5.096 8 6.5 8" />
                      <path strokeLinecap="round" d="M12 22v-3M10 5h4m-4 3h4m-4 3h4m-4 3h4" />
                    </g>
                  </svg>
                </span>
                <span className="text-body text-ink">
                  Exhibition hall access
                </span>
              </div>
              <div className="flex items-center gap-3 py-3">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-mist text-emerald-cta">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="9" cy="6" r="4" />
                      <path strokeLinecap="round" d="M15 9a3 3 0 1 0 0-6" />
                      <ellipse cx="9" cy="17" rx="7" ry="4" />
                      <path strokeLinecap="round" d="M18 14c1.754.385 3 1.359 3 2.5c0 1.03-1.014 1.923-2.5 2.37" />
                    </g>
                  </svg>
                </span>
                <span className="text-body text-ink">
                  Networking events
                </span>
              </div>
              <div className="flex items-center gap-3 py-3">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-mist text-emerald-cta">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
                      <path d="M14 12a6 6 0 1 1-6-6" />
                      <path d="M10 12a6 6 0 1 1 6 6" />
                    </g>
                  </svg>
                </span>
                <span className="text-body text-ink">
                  A2M Matchmaking platform
                </span>
              </div>
              <div className="flex items-center gap-3 py-3 last:pb-0">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-mist text-emerald-cta">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M14 6h-4c-1.356 0-2.468 0-3.39.054c-1.645.097-2.688.367-3.438 1.118C2 8.343 2 10.229 2 14s0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14s0-5.657-1.172-6.828c-.75-.75-1.793-1.02-3.437-1.118C16.468 6 15.356 6 14 6Z" />
                      <path d="M6.61 6.054c.823-.02 1.55-.6 1.83-1.374l.035-.103L8.5 4.5c.042-.127.064-.19.086-.246a2 2 0 0 1 1.735-1.25C10.38 3 10.448 3 10.58 3h2.838c.133 0 .2 0 .26.004a2 2 0 0 1 1.735 1.25c.023.056.044.12.086.246l.026.077c.018.053.026.08.035.103c.28.775 1.007 1.354 1.83 1.374" />
                      <path strokeLinecap="round" d="M21.662 8.72c-3.01 1.956-4.515 2.934-6.101 3.427a12 12 0 0 1-7.121 0c-1.587-.493-3.092-1.47-6.102-3.427M8 11v2m8-2v2" />
                    </g>
                  </svg>
                </span>
                <span className="text-body text-ink">
                  Official program + post-event directory
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-sm border-l-2 border-l-gold bg-surface px-6 py-5">
            <p className="text-small text-subtle">
              Rate in effect follows the date in Toronto. Prices in Canadian dollars (CAD), excluding GST (5%) and QST (9.975%). Qualified investors attend complimentary. Registration will open soon.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 [&_svg]:size-4 [&_svg]:shrink-0 gold-metallic text-anthracite hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold focus-visible:outline-anthracite h-14 px-9 text-[13px]" type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed">
              Be there in June 2027
            </button>
            <a href="https://a2m-website-git-feat-v4-full-content-andysteph21s-projects.vercel.app/program/a2m-2027-program.pdf" className="font-semibold text-emerald-cta text-small underline-offset-4 transition-colors hover:text-emerald-deep hover:underline">
              Download the program
            </a>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <article className="group flex h-full flex-col rounded-sm border-2 border-gold bg-card p-6 shadow-card transition-all duration-[250ms] ease-discret hover:-translate-y-1 hover:shadow-card-hover sm:p-7">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="tnum font-display font-bold text-[1.4rem] leading-none text-gold">
                  01
                </span>
                <span aria-hidden="true" className="h-px flex-1 bg-hairline" />
                <span className="inline-flex items-center rounded-sm px-[9px] py-1 font-sans font-bold text-[9px] uppercase tracking-[0.14em] bg-bronze/15 text-copper">
                  Current rate
                </span>
              </div>
              <p className="mt-4 font-semibold text-[11px] text-copper uppercase tracking-[0.14em]">
                Early Bird 1
              </p>
              <span className="tnum mt-1 font-bold font-display text-data-xl text-emerald-deep">
                1 050 $
              </span>
              <span className="mt-2 text-[12px] text-subtle uppercase tracking-[0.1em]">
                Sep 1 – Dec 31, 2026
              </span>
            </article>
            <article className="group flex h-full flex-col rounded-sm border border-hairline bg-card p-6 shadow-card transition-all duration-[250ms] ease-discret hover:-translate-y-1 hover:border-emerald-cta/40 hover:shadow-card-hover sm:p-7">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="tnum font-display font-bold text-[1.4rem] leading-none text-gold">
                  02
                </span>
                <span aria-hidden="true" className="h-px flex-1 bg-hairline" />
                <span className="inline-flex items-center rounded-sm px-[9px] py-1 font-sans font-bold text-[9px] uppercase tracking-[0.14em] bg-anthracite/8 text-muted">
                  Upcoming
                </span>
              </div>
              <p className="mt-4 font-semibold text-[11px] text-copper uppercase tracking-[0.14em]">
                Early Bird 2
              </p>
              <span className="tnum mt-1 font-bold font-display text-data-xl text-emerald-deep">
                1 312 $
              </span>
              <span className="mt-2 text-[12px] text-subtle uppercase tracking-[0.1em]">
                Jan 1 – Mar 31, 2027
              </span>
            </article>
            <article className="group flex h-full flex-col rounded-sm border border-hairline bg-card p-6 shadow-card transition-all duration-[250ms] ease-discret hover:-translate-y-1 hover:border-emerald-cta/40 hover:shadow-card-hover sm:p-7">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="tnum font-display font-bold text-[1.4rem] leading-none text-gold">
                  03
                </span>
                <span aria-hidden="true" className="h-px flex-1 bg-hairline" />
                <span className="inline-flex items-center rounded-sm px-[9px] py-1 font-sans font-bold text-[9px] uppercase tracking-[0.14em] bg-anthracite/8 text-muted">
                  Upcoming
                </span>
              </div>
              <p className="mt-4 font-semibold text-[11px] text-copper uppercase tracking-[0.14em]">
                Early Bird 3
              </p>
              <span className="tnum mt-1 font-bold font-display text-data-xl text-emerald-deep">
                1 640 $
              </span>
              <span className="mt-2 text-[12px] text-subtle uppercase tracking-[0.1em]">
                Apr 1 – May 31, 2027
              </span>
            </article>
            <article className="group flex h-full flex-col rounded-sm border border-hairline bg-card p-6 shadow-card transition-all duration-[250ms] ease-discret hover:-translate-y-1 hover:border-emerald-cta/40 hover:shadow-card-hover sm:p-7">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="tnum font-display font-bold text-[1.4rem] leading-none text-gold">
                  04
                </span>
                <span aria-hidden="true" className="h-px flex-1 bg-hairline" />
                <span className="inline-flex items-center rounded-sm px-[9px] py-1 font-sans font-bold text-[9px] uppercase tracking-[0.14em] bg-anthracite/8 text-muted">
                  Upcoming
                </span>
              </div>
              <p className="mt-4 font-semibold text-[11px] text-copper uppercase tracking-[0.14em]">
                Full Price
              </p>
              <span className="tnum mt-1 font-bold font-display text-data-xl text-emerald-deep">
                2 050 $
              </span>
              <span className="mt-2 text-[12px] text-subtle uppercase tracking-[0.1em]">
                From June 1, 2027
              </span>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="where-to-stay" className="a2m-reveal scroll-mt-24 sm:scroll-mt-32 lg:scroll-mt-[190px] py-14 lg:py-20">
    <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16">
      <div className="flex items-center gap-5">
        <h2 className="font-display font-bold tracking-[-0.01em] text-h2">
          Book accommodation
        </h2>
        <span aria-hidden="true" className="hidden h-px flex-1 bg-hairline sm:block" />
      </div>
      <p className="mt-6 max-w-[820px] text-lead text-muted">
        The recommended hotel is the Fairmont The Queen Elizabeth — a landmark downtown hotel welcoming leaders and international delegations since 1958.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="flex flex-col gap-7 self-start lg:sticky lg:top-[190px] lg:col-span-5">
          <h3 className="font-display font-semibold text-h3 text-ink">
            Fairmont The Queen Elizabeth
          </h3>
          <p className="border-gold border-l-2 pl-5 font-medium text-quote text-ink [font-family:var(--font-display)] sm:text-quote-md">
            Situated in the heart of downtown Montreal, Fairmont The Queen Elizabeth is a landmark luxury hotel that has welcomed world leaders, celebrities, and business executives since 1958. Offering exceptional service, elegant accommodations, and state-of-the-art facilities, it is the ideal choice for both discerning business travelers and international delegates.
          </p>
          <div className="flex flex-col divide-y divide-hairline">
            <div className="group/icr flex items-start gap-4 py-4 first:pt-0">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-mist text-emerald-cta transition-colors group-hover/icr:border-gold group-hover/icr:bg-gold/15">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-6">
                  <g fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="m18 8l.949.316c.99.33 1.485.495 1.768.888s.283.915.283 1.958v5.667c0 1.29 0 1.936-.34 2.351c-.115.14-.255.26-.413.35c-.465.267-1.102.16-2.375-.051c-1.256-.21-1.884-.314-2.507-.262q-.329.027-.65.097c-.61.134-1.185.421-2.334.996c-1.5.75-2.25 1.125-3.048 1.24q-.36.052-.726.052c-.807-.002-1.595-.265-3.172-.79l-.384-.128c-.99-.33-1.485-.495-1.768-.888S3 18.88 3 17.838v-4.93c0-1.659 0-2.488.488-2.934a1.5 1.5 0 0 1 .281-.203c.578-.322 1.365-.06 2.938.465" />
                    <path d="M6 7.7C6 4.552 8.686 2 12 2s6 2.552 6 5.7c0 3.124-1.915 6.769-4.903 8.072a2.76 2.76 0 0 1-2.194 0C7.915 14.47 6 10.824 6 7.7Z" />
                    <circle cx="12" cy="8" r="2" />
                  </g>
                </svg>
              </span>
              <div className="pt-1">
                <p className="font-display font-semibold text-[15px] text-ink leading-snug group-hover/icr:text-emerald-cta">
                  Heart of downtown
                </p>
                <p className="mt-1 text-muted text-small">
                  Within walking distance of the Centre Mont-Royal and major attractions.
                </p>
              </div>
            </div>
            <div className="group/icr flex items-start gap-4 py-4">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-mist text-emerald-cta transition-colors group-hover/icr:border-gold group-hover/icr:bg-gold/15">
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
                  Ministerial Roundtable venue
                </p>
                <p className="mt-1 text-muted text-small">
                  The hotel hosts the ministerial dialogue on June 6, 2027.
                </p>
              </div>
            </div>
            <div className="group/icr flex items-start gap-4 py-4 last:pb-0">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-mist text-emerald-cta transition-colors group-hover/icr:border-gold group-hover/icr:bg-gold/15">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-6">
                  <g fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="9" cy="6" r="4" />
                    <path strokeLinecap="round" d="M15 9a3 3 0 1 0 0-6" />
                    <ellipse cx="9" cy="17" rx="7" ry="4" />
                    <path strokeLinecap="round" d="M18 14c1.754.385 3 1.359 3 2.5c0 1.03-1.014 1.923-2.5 2.37" />
                  </g>
                </svg>
              </span>
              <div className="pt-1">
                <p className="font-display font-semibold text-[15px] text-ink leading-snug group-hover/icr:text-emerald-cta">
                  Since 1958
                </p>
                <p className="mt-1 text-muted text-small">
                  Home to world leaders, celebrities and business executives.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-sm border-l-2 border-l-gold bg-surface px-6 py-5">
            <p className="mb-1 font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
              Book Your Room
            </p>
            <p className="text-body text-muted">
              Preferential rates will be offered to A2M 2027 delegates.
            </p>
            <a href="https://www.fairmont.com/en/hotels/montreal/fairmont-the-queen-elizabeth.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 [&_svg]:size-4 [&_svg]:shrink-0 gold-metallic text-anthracite hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold focus-visible:outline-anthracite h-12 px-7 text-[12px] mt-4">
              Book your room
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:col-span-7">
          <figure className="flex flex-col gap-1.5">
            <div className="relative">
              <div style={{ aspectRatio: '16 / 9' }} className="group relative overflow-hidden rounded-sm border border-hairline bg-surface shadow-card w-full">
                <img alt="Façade of the Fairmont The Queen Elizabeth in Montréal" loading="lazy" decoding="async" data-nimg="fill" className="absolute inset-0 size-full object-cover transition-transform duration-[1200ms] ease-cinema group-hover:scale-[1.03]" sizes="(min-width: 1024px) 38vw, (min-width: 640px) 50vw, 92vw" srcSet="/images/plan/fairmont.jpg 256w, /images/plan/fairmont.jpg 384w, /images/plan/fairmont.jpg 640w, /images/plan/fairmont.jpg 750w, /images/plan/fairmont.jpg 828w, /images/plan/fairmont.jpg 1080w, /images/plan/fairmont.jpg 1200w, /images/plan/fairmont.jpg 1920w, /images/plan/fairmont.jpg 2048w, /images/plan/fairmont.jpg 3840w" src="/images/plan/fairmont.jpg" />
              </div>
            </div>
            <figcaption className="text-[11px] text-subtle">
              <a href="https://commons.wikimedia.org/wiki/File:Fairmont_The_Queen_Elizabeth,_Montreal,_Quebec_(29984173151).jpg" target="_blank" rel="noopener noreferrer" className="underline-offset-2 transition-colors hover:text-muted hover:underline">
                Wikimedia Commons
                · CC BY-SA 2.0
              </a>
            </figcaption>
          </figure>
          <div className="grid gap-5 sm:grid-cols-2">
            <figure className="flex flex-col gap-1.5">
              <div style={{ aspectRatio: '3 / 2' }} className="group relative overflow-hidden rounded-sm border border-hairline bg-surface shadow-card w-full">
                <img alt="Daytime exterior of Fairmont The Queen Elizabeth in downtown Montréal" loading="lazy" decoding="async" data-nimg="fill" className="absolute inset-0 size-full object-cover transition-transform duration-[1200ms] ease-cinema group-hover:scale-[1.03]" sizes="(min-width: 1024px) 19vw, (min-width: 640px) 25vw, 92vw" srcSet="/images/plan/fairmont-day.jpg 256w, /images/plan/fairmont-day.jpg 384w, /images/plan/fairmont-day.jpg 640w, /images/plan/fairmont-day.jpg 750w, /images/plan/fairmont-day.jpg 828w, /images/plan/fairmont-day.jpg 1080w, /images/plan/fairmont-day.jpg 1200w, /images/plan/fairmont-day.jpg 1920w, /images/plan/fairmont-day.jpg 2048w, /images/plan/fairmont-day.jpg 3840w" src="/images/plan/fairmont-day.jpg" />
              </div>
              <figcaption className="text-[11px] text-subtle">
                <a href="https://commons.wikimedia.org/wiki/File:The_Queen_Elizabeth.jpg" target="_blank" rel="noopener noreferrer" className="underline-offset-2 transition-colors hover:text-muted hover:underline">
                  Wikimedia Commons
                  · CC BY-SA 3.0
                </a>
              </figcaption>
            </figure>
            <figure className="flex flex-col gap-1.5">
              <div style={{ aspectRatio: '3 / 2' }} className="group relative overflow-hidden rounded-sm border border-hairline bg-surface shadow-card w-full">
                <img alt="Contemporary walnut-and-ivory guest room at Fairmont The Queen Elizabeth" loading="lazy" decoding="async" data-nimg="fill" className="absolute inset-0 size-full object-cover transition-transform duration-[1200ms] ease-cinema group-hover:scale-[1.03]" sizes="(min-width: 1024px) 19vw, (min-width: 640px) 25vw, 92vw" srcSet="/images/plan/fairmont-room.jpg 256w, /images/plan/fairmont-room.jpg 384w, /images/plan/fairmont-room.jpg 640w, /images/plan/fairmont-room.jpg 750w, /images/plan/fairmont-room.jpg 828w, /images/plan/fairmont-room.jpg 1080w, /images/plan/fairmont-room.jpg 1200w, /images/plan/fairmont-room.jpg 1920w, /images/plan/fairmont-room.jpg 2048w, /images/plan/fairmont-room.jpg 3840w" src="/images/plan/fairmont-room.jpg" />
              </div>
              <figcaption className="text-[11px] text-subtle">
                <a href="https://commons.wikimedia.org/wiki/File:The_Queen_Elizabeth.jpg" target="_blank" rel="noopener noreferrer" className="underline-offset-2 transition-colors hover:text-muted hover:underline">
                  Wikimedia Commons
                  · CC BY-SA 3.0
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="visa" className="a2m-reveal scroll-mt-24 sm:scroll-mt-32 lg:scroll-mt-[190px] py-14 lg:py-20 a2m-motif-light relative overflow-hidden bg-surface">
    <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16 relative z-10">
      <div className="flex items-center gap-5">
        <h2 className="font-display font-bold tracking-[-0.01em] text-h2">
          Request invitation letter
        </h2>
        <span aria-hidden="true" className="hidden h-px flex-1 bg-hairline sm:block" />
      </div>
      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="flex flex-col gap-6 lg:col-span-6">
          <p className="border-gold border-l-2 pl-5 font-medium text-quote text-ink [font-family:var(--font-display)] sm:text-quote-md">
            Most visitors need a Temporary Resident Visa (TRV) or an eTA. Verify your requirements on the official Government of Canada (IRCC) website well in advance.
          </p>
          <h3 className="font-display font-semibold text-h3 text-ink">
            Travel & visa information
          </h3>
          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
            International participants are responsible for ensuring they meet all Canadian entry requirements. Most visitors require a Temporary Resident Visa (TRV) or an Electronic Travel Authorization (eTA).
          </p>
          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
            We strongly recommend that you verify your specific visa requirements on the official Government of Canada website (IRCC) well in advance of your travel.
          </p>
        </div>
        <div className="flex flex-col gap-5 lg:col-span-6">
          <article className="group flex h-full flex-col rounded-sm border border-hairline bg-card p-6 shadow-card transition-all duration-[250ms] ease-discret hover:-translate-y-1 hover:border-emerald-cta/40 hover:shadow-card-hover sm:p-7">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="tnum font-display font-bold text-[1.4rem] leading-none text-gold">
                01
              </span>
              <span aria-hidden="true" className="h-px flex-1 bg-hairline" />
            </div>
            <p className="mt-4 font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
              Invitation letter
            </p>
            <p className="mt-2 text-body text-muted leading-[1.7]">
              Request an official invitation letter (invitation letter request form). An official invitation letter can be provided on request to registered delegates.
            </p>
          </article>
          <article className="group flex h-full flex-col rounded-sm border border-hairline bg-card p-6 shadow-card transition-all duration-[250ms] ease-discret hover:-translate-y-1 hover:border-emerald-cta/40 hover:shadow-card-hover sm:p-7">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="tnum font-display font-bold text-[1.4rem] leading-none text-gold">
                02
              </span>
              <span aria-hidden="true" className="h-px flex-1 bg-hairline" />
            </div>
            <p className="mt-4 font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
              Important Note
            </p>
            <p className="mt-2 text-body text-muted leading-[1.7]">
              A2M Events Inc. cannot guarantee the issuance of visas nor intervene in the application process. Standard cancellation policies will apply in the event a delegate is unable to obtain the necessary travel documents. For any questions regarding travel requirements, please contact our team.
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
  <section id="discover-montreal" className="a2m-reveal scroll-mt-24 sm:scroll-mt-32 lg:scroll-mt-[190px] py-14 lg:py-20">
    <div className="pb-14 lg:pb-20">
      <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16">
        <div className="flex items-center gap-5">
          <h2 className="font-display font-bold tracking-[-0.01em] text-h2">
            Discover Montréal
          </h2>
          <span aria-hidden="true" className="hidden h-px flex-1 bg-hairline sm:block" />
        </div>
        <p className="mt-6 max-w-[820px] text-lead text-muted">
          A bilingual, creative metropolis, Montréal blends European charm, North American energy and Quebecois joie de vivre. June kicks off festival season.
        </p>
        <p className="mt-10 max-w-[860px] border-gold border-l-2 pl-5 font-medium text-quote text-ink [font-family:var(--font-display)] sm:text-quote-md">
          Montreal is a vibrant, cosmopolitan city that masterfully blends European charm, North American energy, and Quebecois joie de vivre. As you attend A2M 2027, take the opportunity to experience
          <em className="font-medium [font-family:var(--font-display)] text-copper">
            the city's rich culture, world-class gastronomy, and dynamic atmosphere
          </em>
          .
        </p>
        <p className="mt-10 max-w-[760px] text-lead text-muted leading-[1.7]">
          June marks the beginning of Montreal's renowned festival season, offering an exceptional backdrop for your visit. Highlights include:
        </p>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-hairline bg-card shadow-card transition-all duration-[250ms] ease-discret hover:-translate-y-1 hover:border-emerald-cta/40 hover:shadow-card-hover">
            <div style={{ aspectRatio: '16 / 9' }} className="relative overflow-hidden border-b border-hairline bg-surface w-full">
              <img alt="Crowd before the stage at the Montréal International Jazz Festival" loading="lazy" decoding="async" data-nimg="fill" className="absolute inset-0 size-full object-cover transition-transform duration-[1200ms] ease-cinema group-hover:scale-[1.04]" sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw" srcSet="/images/plan/jazz-festival.jpg 256w, /images/plan/jazz-festival.jpg 384w, /images/plan/jazz-festival.jpg 640w, /images/plan/jazz-festival.jpg 750w, /images/plan/jazz-festival.jpg 828w, /images/plan/jazz-festival.jpg 1080w, /images/plan/jazz-festival.jpg 1200w, /images/plan/jazz-festival.jpg 1920w, /images/plan/jazz-festival.jpg 2048w, /images/plan/jazz-festival.jpg 3840w" src="/images/plan/jazz-festival.jpg" />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="tnum font-display font-bold text-[1.4rem] leading-none text-gold">
                  01
                </span>
                <span aria-hidden="true" className="h-px flex-1 bg-hairline" />
              </div>
              <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-mist text-emerald-cta">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-4">
                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinejoin="round" d="M9 18V5.5c0-.68 0-1.02.174-1.263a1 1 0 0 1 .29-.27C9.72 3.81 10.055 3.755 10.727 3.643l7.2-1.2c.983-.164 1.475-.246 1.774.02c.299.265.299.764.299 1.76V16" />
                      <circle cx="6" cy="18" r="3" />
                      <circle cx="17" cy="16" r="3" />
                    </g>
                  </svg>
                </span>
                Festivals & events
              </h3>
              <p className="text-body text-muted">
                Francofolies de Montréal, the Montréal International Jazz Festival and the MURAL Festival (street art).
              </p>
              <p className="mt-auto pt-2 text-[11px] text-subtle">
                <a href="https://commons.wikimedia.org/wiki/File:Montreal_Jazz_Festival_(4777079360).jpg" target="_blank" rel="noopener noreferrer" className="underline-offset-2 transition-colors hover:text-muted hover:underline">
                  Robbie Sproule — Wikimedia Commons
                  · CC BY 2.0
                </a>
              </p>
            </div>
          </article>
          <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-hairline bg-card shadow-card transition-all duration-[250ms] ease-discret hover:-translate-y-1 hover:border-emerald-cta/40 hover:shadow-card-hover">
            <div style={{ aspectRatio: '16 / 9' }} className="relative overflow-hidden border-b border-hairline bg-surface w-full">
              <img alt="Café terrace and passers-by on Rue Saint-Paul, Old Montréal" loading="lazy" decoding="async" data-nimg="fill" className="absolute inset-0 size-full object-cover transition-transform duration-[1200ms] ease-cinema group-hover:scale-[1.04]" sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw" srcSet="/images/plan/old-montreal.jpg 256w, /images/plan/old-montreal.jpg 384w, /images/plan/old-montreal.jpg 640w, /images/plan/old-montreal.jpg 750w, /images/plan/old-montreal.jpg 828w, /images/plan/old-montreal.jpg 1080w, /images/plan/old-montreal.jpg 1200w, /images/plan/old-montreal.jpg 1920w, /images/plan/old-montreal.jpg 2048w, /images/plan/old-montreal.jpg 3840w" src="/images/plan/old-montreal.jpg" />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="tnum font-display font-bold text-[1.4rem] leading-none text-gold">
                  02
                </span>
                <span aria-hidden="true" className="h-px flex-1 bg-hairline" />
              </div>
              <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-mist text-emerald-cta">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-4">
                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" d="M22 22H2" />
                      <path d="M9 22V7c0-1.886 0-2.828.586-3.414C10.172 3 11.114 3 13 3h1c1.886 0 2.828 0 3.414.586C18 4.172 18 5.114 18 7v15" />
                      <path d="M9 9H7c-1.414 0-2.121 0-2.56.44C4 9.878 4 10.585 4 12v10" />
                      <path strokeLinecap="round" d="M12.5 7h2m-2 3.5h2m-2 3.5h2M12.5 17.5h2" />
                    </g>
                  </svg>
                </span>
                Must-visit neighborhoods
              </h3>
              <p className="text-body text-muted">
                Old Montreal (Vieux-Montréal): historic architecture, Notre-Dame Basilica, and cobblestone streets. Plateau Mont-Royal: trendy boutiques, galleries, and restaurants. Quartier des Spectacles: Montreal's vibrant entertainment district.
              </p>
              <p className="mt-auto pt-2 text-[11px] text-subtle">
                <a href="https://commons.wikimedia.org/wiki/File:Thursday_in_Montreal_(48546999002).jpg" target="_blank" rel="noopener noreferrer" className="underline-offset-2 transition-colors hover:text-muted hover:underline">
                  Guilhem Vellut — Wikimedia Commons
                  · CC BY 2.0
                </a>
              </p>
            </div>
          </article>
          <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-hairline bg-card shadow-card transition-all duration-[250ms] ease-discret hover:-translate-y-1 hover:border-emerald-cta/40 hover:shadow-card-hover">
            <div style={{ aspectRatio: '16 / 9' }} className="relative overflow-hidden border-b border-hairline bg-surface w-full">
              <img alt="Downtown view from the Kondiaronk Belvedere on Mount Royal" loading="lazy" decoding="async" data-nimg="fill" className="absolute inset-0 size-full object-cover transition-transform duration-[1200ms] ease-cinema group-hover:scale-[1.04]" sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw" srcSet="/images/plan/mount-royal.jpg 256w, /images/plan/mount-royal.jpg 384w, /images/plan/mount-royal.jpg 640w, /images/plan/mount-royal.jpg 750w, /images/plan/mount-royal.jpg 828w, /images/plan/mount-royal.jpg 1080w, /images/plan/mount-royal.jpg 1200w, /images/plan/mount-royal.jpg 1920w, /images/plan/mount-royal.jpg 2048w, /images/plan/mount-royal.jpg 3840w" src="/images/plan/mount-royal.jpg" />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="tnum font-display font-bold text-[1.4rem] leading-none text-gold">
                  03
                </span>
                <span aria-hidden="true" className="h-px flex-1 bg-hairline" />
              </div>
              <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-mist text-emerald-cta">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-4">
                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinejoin="round" d="M12 2c-3.5 3.06-6 6.44-6 9.5C6 14.54 8.462 17 12 17s6-2.46 6-5.5c0-3.06-2.5-6.44-6-9.5Z" />
                      <path strokeLinecap="round" d="M12 22v-8m0 3l2.5-2.5M12 14l-2-2" />
                    </g>
                  </svg>
                </span>
                Outdoor activities
              </h3>
              <p className="text-body text-muted">
                Mount Royal Park: panoramic views, hiking trails, and cycling. Lachine Canal: scenic walks, Atwater Market, and street performers. Parc Jean-Drapeau: gardens, attractions, and stunning river views.
              </p>
              <p className="mt-auto pt-2 text-[11px] text-subtle">
                <a href="https://commons.wikimedia.org/wiki/File:20160903_-_02_-_Montreal_(Mount_Royal_Park).jpg" target="_blank" rel="noopener noreferrer" className="underline-offset-2 transition-colors hover:text-muted hover:underline">
                  Andre Carrotflower — Wikimedia Commons
                  · CC BY-SA 4.0
                </a>
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
    <figure className="relative">
      <div className="relative h-[46vh] min-h-[300px] w-full overflow-hidden sm:h-[56vh]">
        <img alt="Flower-lined Place Jacques-Cartier before Montréal City Hall in summer" loading="lazy" decoding="async" data-nimg="fill" className="absolute inset-0 size-full object-cover" sizes="100vw" srcSet="/images/plan/vieux-montreal.jpg 256w, /images/plan/vieux-montreal.jpg 384w, /images/plan/vieux-montreal.jpg 640w, /images/plan/vieux-montreal.jpg 750w, /images/plan/vieux-montreal.jpg 828w, /images/plan/vieux-montreal.jpg 1080w, /images/plan/vieux-montreal.jpg 1200w, /images/plan/vieux-montreal.jpg 1920w, /images/plan/vieux-montreal.jpg 2048w, /images/plan/vieux-montreal.jpg 3840w" src="/images/plan/vieux-montreal.jpg" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-emerald-deep/80 to-transparent" />
      </div>
      <figcaption className="absolute bottom-3 right-5 text-[11px] text-champagne/80">
        <a href="https://commons.wikimedia.org/wiki/File:Montreal_DSC04520_(22221499769).jpg" target="_blank" rel="noopener noreferrer" className="underline-offset-2 transition-colors hover:text-ivory hover:underline">
          Autharite — Wikimedia Commons
          · CC BY-SA 2.0
        </a>
      </figcaption>
    </figure>
    <div className="pt-14 lg:pt-20">
      <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16">
        <h3 className="font-display font-semibold text-h3 text-ink">
          Food & drink
        </h3>
        <p className="mt-4 max-w-[760px] text-lead text-muted leading-[1.7]">
          Montreal's culinary scene reflects its French and Quebecois heritage. Don't miss classic dishes such as poutine, tourtière, or sugar pie, along with the city's renowned craft beer scene and bustling public markets like Jean-Talon Market.
        </p>
        <div className="mt-8 grid gap-5 grid-cols-1 sm:grid-cols-2">
          <div style={{ aspectRatio: '16 / 9' }} className="group relative overflow-hidden rounded-sm border border-hairline bg-surface shadow-card w-full">
            <img alt="Crowd enjoying an outdoor show during Montréal's June festival season" loading="lazy" decoding="async" data-nimg="fill" className="absolute inset-0 size-full object-cover transition-transform duration-[1200ms] ease-cinema group-hover:scale-[1.03]" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" srcSet="/images/plan/festival.jpg 256w, /images/plan/festival.jpg 384w, /images/plan/festival.jpg 640w, /images/plan/festival.jpg 750w, /images/plan/festival.jpg 828w, /images/plan/festival.jpg 1080w, /images/plan/festival.jpg 1200w, /images/plan/festival.jpg 1920w, /images/plan/festival.jpg 2048w, /images/plan/festival.jpg 3840w" src="/images/plan/festival.jpg" />
          </div>
          <div style={{ aspectRatio: '16 / 9' }} className="group relative overflow-hidden rounded-sm border border-hairline bg-surface shadow-card w-full">
            <img alt="Produce stalls at Jean-Talon Market in Montréal" loading="lazy" decoding="async" data-nimg="fill" className="absolute inset-0 size-full object-cover transition-transform duration-[1200ms] ease-cinema group-hover:scale-[1.03]" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" srcSet="/images/plan/market.jpg 256w, /images/plan/market.jpg 384w, /images/plan/market.jpg 640w, /images/plan/market.jpg 750w, /images/plan/market.jpg 828w, /images/plan/market.jpg 1080w, /images/plan/market.jpg 1200w, /images/plan/market.jpg 1920w, /images/plan/market.jpg 2048w, /images/plan/market.jpg 3840w" src="/images/plan/market.jpg" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="venue" className="a2m-reveal scroll-mt-24 sm:scroll-mt-32 lg:scroll-mt-[190px] py-14 lg:py-20">
    <div className="pb-14 lg:pb-20">
      <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16">
        <div className="flex items-center gap-5">
          <h2 className="font-display font-bold tracking-[-0.01em] text-h2">
            Venue & accessibility
          </h2>
          <span aria-hidden="true" className="hidden h-px flex-1 bg-hairline sm:block" />
        </div>
        <p className="mt-6 max-w-[820px] text-lead text-muted">
          A2M 2027 takes place at the Centre Mont-Royal, in the heart of downtown Montréal, steps from hotels, restaurants and cultural sites.
        </p>
        <p className="mt-10 max-w-[860px] border-gold border-l-2 pl-5 font-medium text-quote text-ink [font-family:var(--font-display)] sm:text-quote-md">
          All A2M 2027 events will be held under one roof at the Centre Mont-Royal, a prestigious venue renowned for its world-class facilities and ideal for hosting high-profile international conferences. Located in the heart of downtown Montreal, the venue is within walking distance of major attractions, restaurants, and cultural sites, offering participants a seamless blend of business and memorable experiences.
        </p>
        <h3 className="mt-12 font-display font-semibold text-h3 text-ink">
          How to get there
        </h3>
        <p className="mt-4 max-w-[760px] text-lead text-muted leading-[1.7]">
          The Centre Mont-Royal is centrally located and easily accessible by car, public transit, or air.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <article className="group flex h-full flex-col rounded-sm border border-hairline bg-card p-6 shadow-card transition-all duration-[250ms] ease-discret hover:-translate-y-1 hover:border-emerald-cta/40 hover:shadow-card-hover sm:p-7">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="tnum font-display font-bold text-[1.4rem] leading-none text-gold">
                01
              </span>
              <span aria-hidden="true" className="h-px flex-1 bg-hairline" />
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-mist text-emerald-cta transition-colors duration-[250ms] ease-discret group-hover:bg-gold/15">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                  <g fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                    <path strokeLinecap="round" d="M6 12h4m4 0h4m-9 5.196l2-3.464m2-3.464l2-3.464m0 10.392l-2-3.464m-2-3.464L9 6.804" />
                  </g>
                </svg>
              </span>
            </div>
            <h3 className="mt-4 font-display font-semibold text-h3 text-ink">
              By car
            </h3>
            <p className="mt-2 text-body text-muted">
              Valet Parking: Available at the hotel. Driving Directions: From Highway 40, take the René-Lévesque Boulevard exit and proceed for approximately 1 km. Turn left onto Mansfield Street.
            </p>
          </article>
          <article className="group flex h-full flex-col rounded-sm border border-hairline bg-card p-6 shadow-card transition-all duration-[250ms] ease-discret hover:-translate-y-1 hover:border-emerald-cta/40 hover:shadow-card-hover sm:p-7">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="tnum font-display font-bold text-[1.4rem] leading-none text-gold">
                02
              </span>
              <span aria-hidden="true" className="h-px flex-1 bg-hairline" />
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-mist text-emerald-cta transition-colors duration-[250ms] ease-discret group-hover:bg-gold/15">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                  <g fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v2c0 3.771 0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 13h16m-4.5 3H17M7 16h1.5M6 19.5V21a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-1m8.5-.5V21a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1v-1M20 9h1a1 1 0 0 1 1 1v1a1 1 0 0 1-.4.8L20 13M4 9H3a1 1 0 0 0-1 1v1a1 1 0 0 0 .4.8L4 13" />
                    <path strokeLinecap="round" d="M19.5 5h-15" />
                  </g>
                </svg>
              </span>
            </div>
            <h3 className="mt-4 font-display font-semibold text-h3 text-ink">
              By public transportation
            </h3>
            <p className="mt-2 text-body text-muted">
              Metro: A short walk from Peel Station (Green Line). Bus: Multiple lines serve the area, including routes 144 and 150.
            </p>
          </article>
          <article className="group flex h-full flex-col rounded-sm border border-hairline bg-card p-6 shadow-card transition-all duration-[250ms] ease-discret hover:-translate-y-1 hover:border-emerald-cta/40 hover:shadow-card-hover sm:p-7">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="tnum font-display font-bold text-[1.4rem] leading-none text-gold">
                03
              </span>
              <span aria-hidden="true" className="h-px flex-1 bg-hairline" />
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-mist text-emerald-cta transition-colors duration-[250ms] ease-discret group-hover:bg-gold/15">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                  <g fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="m17.498 18.485l3.13-9.391c1.248-3.745 1.873-5.618.884-6.606c-.988-.989-2.86-.364-6.606.884l-9.331 3.11c-2.082.694-3.123 1.041-3.439 1.804q-.112.271-.133.564c-.059.824.717 1.6 2.269 3.151l.283.283c.254.254.382.382.478.523c.19.28.297.607.31.945c.008.171-.019.35-.072.705c-.196 1.304-.294 1.956-.179 2.458c.23 1 1.004 1.785 2 2.028c.5.123 1.154.034 2.46-.143l.072-.01c.368-.05.552-.075.729-.064c.32.019.63.124.898.303c.147.098.279.23.541.492l.252.252c1.51 1.51 2.265 2.265 3.066 2.226c.22-.011.438-.062.64-.152c.734-.323 1.072-1.336 1.747-3.362Z" />
                    <path strokeLinecap="round" d="M6 18L21 3" />
                  </g>
                </svg>
              </span>
            </div>
            <h3 className="mt-4 font-display font-semibold text-h3 text-ink">
              By air
            </h3>
            <p className="mt-2 text-body text-muted">
              Montréal-Pierre Elliott Trudeau International Airport (YUL): Approximately 20 km from the hotel. Taxi: Readily available outside the terminal.
            </p>
          </article>
        </div>
      </div>
    </div>
    <figure className="relative">
      <div className="relative h-[46vh] min-h-[300px] w-full overflow-hidden sm:h-[56vh]">
        <img alt="Downtown Montréal at golden hour, seen from the Kondiaronk Belvedere" loading="lazy" decoding="async" data-nimg="fill" className="absolute inset-0 size-full object-cover" sizes="100vw" srcSet="/images/plan/belvedere-skyline.jpg 256w, /images/plan/belvedere-skyline.jpg 384w, /images/plan/belvedere-skyline.jpg 640w, /images/plan/belvedere-skyline.jpg 750w, /images/plan/belvedere-skyline.jpg 828w, /images/plan/belvedere-skyline.jpg 1080w, /images/plan/belvedere-skyline.jpg 1200w, /images/plan/belvedere-skyline.jpg 1920w, /images/plan/belvedere-skyline.jpg 2048w, /images/plan/belvedere-skyline.jpg 3840w" src="/images/plan/belvedere-skyline.jpg" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-emerald-deep/80 to-transparent" />
      </div>
      <figcaption className="absolute bottom-3 right-5 text-[11px] text-champagne/80">
        <a href="https://commons.wikimedia.org/wiki/File:Skyscrapers_@_Sunset_@_Belv%C3%A9d%C3%A8re_@_View_from_Chalet_du_Mont_Royal_@_Mount_Royal_@_Montreal_(29793970813).jpg" target="_blank" rel="noopener noreferrer" className="underline-offset-2 transition-colors hover:text-ivory hover:underline">
          Guilhem Vellut — Wikimedia Commons
          · CC BY 2.0
        </a>
      </figcaption>
    </figure>
    <div className="pt-14 lg:pt-20">
      <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16">
        <div className="max-w-[760px] rounded-sm border-l-2 border-l-gold bg-surface px-6 py-5">
          <p className="mb-1 font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
            Note
          </p>
          <p className="text-body text-muted">
            Parking rates and transportation options are subject to change. We recommend confirming the latest details directly with the hotel or transportation providers.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section id="useful-info" className="a2m-reveal scroll-mt-24 sm:scroll-mt-32 lg:scroll-mt-[190px] a2m-motif relative overflow-hidden bg-emerald-deep py-14 text-ivory lg:py-20">
    <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16 relative z-10">
      <div className="flex items-center gap-5">
        <h2 className="font-display font-bold tracking-[-0.01em] text-h2 text-ivory">
          Useful information
        </h2>
        <span aria-hidden="true" className="hidden h-px flex-1 bg-ivory/15 sm:block" />
      </div>
      <p className="mt-6 max-w-[760px] text-lead text-champagne/85">
        Currency, time zone and weather to plan your trip with peace of mind.
      </p>
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-ivory/15">
        <div className="group/stat rounded-sm p-6 transition-colors duration-[250ms] ease-discret hover:bg-ivory/5 sm:p-7">
          <span className="tnum block font-display font-bold text-data-xl text-gold-light transition-transform duration-[250ms] ease-discret group-hover/stat:-translate-y-0.5">
            CAD
          </span>
          <span className="mt-2 block text-small text-champagne/80">
            Canadian dollar
          </span>
        </div>
        <div className="group/stat rounded-sm p-6 transition-colors duration-[250ms] ease-discret hover:bg-ivory/5 sm:p-7">
          <span className="tnum block font-display font-bold text-data-xl text-gold-light transition-transform duration-[250ms] ease-discret group-hover/stat:-translate-y-0.5">
            ET
          </span>
          <span className="mt-2 block text-small text-champagne/80">
            Eastern Time
          </span>
        </div>
        <div className="group/stat rounded-sm p-6 transition-colors duration-[250ms] ease-discret hover:bg-ivory/5 sm:p-7">
          <span className="tnum block font-display font-bold text-data-xl text-gold-light transition-transform duration-[250ms] ease-discret group-hover/stat:-translate-y-0.5">
            15–25 °C
          </span>
          <span className="mt-2 block text-small text-champagne/80">
            June weather
          </span>
        </div>
        <div className="group/stat rounded-sm p-6 transition-colors duration-[250ms] ease-discret hover:bg-ivory/5 sm:p-7">
          <span className="tnum block font-display font-bold text-data-xl text-gold-light transition-transform duration-[250ms] ease-discret group-hover/stat:-translate-y-0.5">
            FR / EN
          </span>
          <span className="mt-2 block text-small text-champagne/80">
            languages
          </span>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
