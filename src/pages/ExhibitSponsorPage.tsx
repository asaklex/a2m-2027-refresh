import OnThisPageNav from '../components/OnThisPageNav'
import { Link } from 'react-router-dom'

export default function ExhibitSponsorPage() {
  return (
    <>
  <div className="a2m-motif relative overflow-hidden border-hairline border-b bg-emerald-deep text-ivory">
    <img alt="" aria-hidden="true" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="100vw" srcSet="/images/exhibit/marketplace.jpg 640w, /images/exhibit/marketplace.jpg 750w, /images/exhibit/marketplace.jpg 828w, /images/exhibit/marketplace.jpg 1080w, /images/exhibit/marketplace.jpg 1200w, /images/exhibit/marketplace.jpg 1920w, /images/exhibit/marketplace.jpg 2048w, /images/exhibit/marketplace.jpg 3840w" src="/images/exhibit/marketplace.jpg" />
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
                Exhibit or Sponsor
              </span>
            </li>
          </ol>
        </nav>
      </div>
      <span className="font-semibold text-[11px] text-gold uppercase tracking-[0.26em] [text-shadow:0_1px_10px_rgba(3,20,16,0.55)]">
        Exhibit or Sponsor
      </span>
      <h1 className="mt-3 max-w-[760px] font-bold text-[1.7rem] text-ivory leading-[1.15] tracking-[-0.005em] [font-family:var(--font-display)] [text-shadow:0_2px_20px_rgba(3,20,16,0.55)] sm:text-[2.4rem] sm:leading-[1.1] lg:text-[2.75rem]">
        Be
        <span className="text-gold">
          in the room
        </span>
        where deals happen
      </h1>
      <p className="mt-4 max-w-[640px] text-champagne/90 text-lead [text-shadow:0_1px_14px_rgba(3,20,16,0.6)]">
        Showcase your organisation and align your brand with the flagship mining event.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-ivory/15 border-t pt-6 lg:mt-12">
        <div className="flex items-center gap-2.5">
          <div>
            <p className="font-semibold text-[10px] text-champagne/85 uppercase tracking-[0.16em]">
              2 × 3 m stands
            </p>
            <p className="font-display font-semibold text-[14px] text-ivory leading-tight">
              Marketplace
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <div>
            <p className="font-semibold text-[10px] text-champagne/85 uppercase tracking-[0.16em]">
              Juniors & unlisted
            </p>
            <p className="font-display font-semibold text-[14px] text-ivory leading-tight">
              Explorers' Village
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <div>
            <p className="font-semibold text-[10px] text-champagne/85 uppercase tracking-[0.16em]">
              Delegates
            </p>
            <p className="font-display font-semibold text-[14px] text-ivory leading-tight">
              1,500+
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <OnThisPageNav
    items={[
      { id: "why-exhibit", label: "Why Exhibit" },
      { id: "exhibition", label: "Exhibition opportunities" },
      { id: "why-sponsor", label: "Why Sponsor" },
      { id: "sponsorship", label: "Sponsorship Opportunities" },
      { id: "exhibitors-sponsors", label: "Exhibitors & Sponsors" },
      { id: "associate", label: "Associate Your Brand" },
    ]}
  />
  <section id="why-exhibit" className="a2m-reveal scroll-mt-24 py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-16">
    <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16">
      <h2 className="font-display font-bold tracking-[-0.01em] text-h2">
        Why Exhibit
      </h2>
      <div className="mt-8">
        <div className="flex flex-col gap-6">
          <p className="max-w-[760px] text-lead text-muted">
            Three days of face time with the people who decide what gets built, financed and operated in African mining.
          </p>
          <div className="flex flex-col gap-8">
            <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
              A2M offers three days of face time with the people who decide what gets built, financed and operated in African mining. Every delegate who walks past your stand has a direct professional stake in African mining — as an operator, a financier, a government official, a developer or a service buyer. The exhibition hosts the same audience that mining companies spend months trying to reach through cold outreach, conference networking and international roadshows.
            </p>
            <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
              Your exhibition stand sits in the biggest African Mining event in North America. You are not waiting for the right moment — the right moment is designed into the program around you. Your team is on the floor when African Mining Ministers are walking between sessions, when mining executives are looking for a service partner, and when institutional investors are moving from a panel into a bilateral meeting.
            </p>
            <div className="max-w-[760px] rounded-sm border-l-2 border-l-gold bg-surface px-6 py-5">
              <p className="text-body text-muted">
                Exhibition spaces are allocated on a first-confirmed basis, ensuring priority placement for early bookings.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="h-full">
                <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-sm bg-mist text-emerald-cta">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                      <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M22 12a10 10 0 1 1-20.001 0A10 10 0 0 1 22 12Z" />
                        <path d="M16 12c0 1.313-.104 2.614-.305 3.827c-.2 1.213-.495 2.315-.867 3.244c-.371.929-.812 1.665-1.297 2.168c-.486.502-1.006.761-1.531.761s-1.045-.259-1.53-.761c-.486-.503-.927-1.24-1.298-2.168c-.372-.929-.667-2.03-.868-3.244A23.6 23.6 0 0 1 8 12c0-1.313.103-2.614.304-3.827s.496-2.315.868-3.244c.371-.929.812-1.665 1.297-2.168C10.955 2.26 11.475 2 12 2s1.045.259 1.53.761c.486.503.927 1.24 1.298 2.168c.372.929.667 2.03.867 3.244C15.897 9.386 16 10.687 16 12Z" />
                        <path strokeLinecap="round" d="M2 12h20" />
                      </g>
                    </svg>
                  </span>
                  <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                    Brand visibility
                  </h3>
                  <p className="text-body text-muted">
                    Before 1,500+ delegates from 35 countries, all with a stake in African mining.
                  </p>
                </div>
              </div>
              <div className="h-full">
                <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-sm bg-mist text-emerald-cta">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                      <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="9" cy="6" r="4" />
                        <path strokeLinecap="round" d="M15 9a3 3 0 1 0 0-6" />
                        <ellipse cx="9" cy="17" rx="7" ry="4" />
                        <path strokeLinecap="round" d="M18 14c1.754.385 3 1.359 3 2.5c0 1.03-1.014 1.923-2.5 2.37" />
                      </g>
                    </svg>
                  </span>
                  <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                    Qualified leads
                  </h3>
                  <p className="text-body text-muted">
                    Lead generation and targeted B2B meetings via the matchmaking platform.
                  </p>
                </div>
              </div>
              <div className="h-full">
                <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-sm bg-mist text-emerald-cta">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                      <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 22h18" />
                        <path d="M3 11c0-.943 0-1.414.293-1.707S4.057 9 5 9s1.414 0 1.707.293S7 10.057 7 11v6c0 .943 0 1.414-.293 1.707S5.943 19 5 19s-1.414 0-1.707-.293S3 17.943 3 17zm7-4c0-.943 0-1.414.293-1.707S11.057 5 12 5s1.414 0 1.707.293S14 6.057 14 7v10c0 .943 0 1.414-.293 1.707S12.943 19 12 19s-1.414 0-1.707-.293S10 17.943 10 17zm7-3c0-.943 0-1.414.293-1.707S18.057 2 19 2s1.414 0 1.707.293S21 3.057 21 4v13c0 .943 0 1.414-.293 1.707S19.943 19 19 19s-1.414 0-1.707-.293S17 17.943 17 17z" />
                      </g>
                    </svg>
                  </span>
                  <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                    Strategic positioning
                  </h3>
                  <p className="text-body text-muted">
                    At the heart of the critical-minerals market and the Canada-Africa alliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="exhibition" className="a2m-reveal scroll-mt-24 py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-16">
    <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16">
      <h2 className="font-display font-bold tracking-[-0.01em] text-h2">
        Exhibition opportunities
      </h2>
      <div className="mt-8">
        <div className="flex flex-col gap-6">
          <p className="max-w-[760px] text-lead text-muted">
            From the A2M Marketplace to the Explorers' Village, choose the format that fits your objectives.
          </p>
          <div className="flex flex-col gap-8">
            <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
              A2M offers two complementary exhibition formats. The A2M Marketplace is the main floor where Canadian companies and African entities showcase capabilities and opportunities; the Explorers' Village gives early-stage exploration companies a targeted showcase to investors and financiers. Choose the format that fits your objectives below.
            </p>
            <div className="grid gap-4 grid-cols-1">
              <div className="relative overflow-hidden rounded-sm">
                <div className="[&_img]:scale-105 [&_img]:blur-[10px]">
                  <div style={{ aspectRatio: '16 / 9' }} className="relative overflow-hidden rounded-sm border border-hairline bg-surface w-full">
                    <img alt="Preview of the exhibition floor and standard 2 × 3 m booths (final visual coming soon)" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" srcSet="/images/exhibit/floor-plan.jpg 256w, /images/exhibit/floor-plan.jpg 384w, /images/exhibit/floor-plan.jpg 640w, /images/exhibit/floor-plan.jpg 750w, /images/exhibit/floor-plan.jpg 828w, /images/exhibit/floor-plan.jpg 1080w, /images/exhibit/floor-plan.jpg 1200w, /images/exhibit/floor-plan.jpg 1920w, /images/exhibit/floor-plan.jpg 2048w, /images/exhibit/floor-plan.jpg 3840w" src="/images/exhibit/floor-plan.jpg" />
                  </div>
                </div>
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <span className="rounded-sm border border-gold/50 bg-ivory/90 px-4 py-2 font-semibold text-[11px] text-copper uppercase tracking-[0.22em] shadow-card backdrop-blur-sm">
                    Coming soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="marketplace" className="a2m-reveal scroll-mt-24 py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-16 a2m-motif-light relative overflow-hidden bg-surface">
    <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16 relative z-10">
      <h2 className="font-display font-bold tracking-[-0.01em] text-h3">
        A2M Marketplace
      </h2>
      <div className="mt-8">
        <div className="flex flex-col gap-6">
          <p className="max-w-[760px] text-lead text-muted">
            The industry's meeting point where Canadian companies and African entities showcase, discover and close.
          </p>
          <div className="flex flex-col gap-8">
            <div className="max-w-[760px] rounded-sm border-l-2 border-l-gold bg-surface px-6 py-5">
              <p className="mb-1 font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
                The place where every deal starts!
              </p>
              <p className="text-body text-muted">
                A2M Marketplace is the industry's meeting point where Canadian companies showcase their capabilities to African governments and operators, and African entities present their opportunities to Canadian investors. The Marketplace floor is designed for targeted discovery and productive interaction, not passive browsing.
              </p>
            </div>
            <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
              By exhibiting at the Marketplace, you will:
            </p>
            <ul className="flex max-w-[760px] flex-col gap-3">
              <li className="flex items-start gap-3 text-body text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>
                  Increase brand visibility and establish thought leadership.
                </span>
              </li>
              <li className="flex items-start gap-3 text-body text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>
                  Connect with key decision-makers, investors, and buyers.
                </span>
              </li>
              <li className="flex items-start gap-3 text-body text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>
                  Generate leads and drive business growth.
                </span>
              </li>
              <li className="flex items-start gap-3 text-body text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>
                  Stay updated on industry trends and best practices.
                </span>
              </li>
              <li className="flex items-start gap-3 text-body text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>
                  Strengthen existing relationships and build new ones.
                </span>
              </li>
              <li className="flex items-start gap-3 text-body text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>
                  Enhance your company's reputation and credibility.
                </span>
              </li>
            </ul>
            <h3 className="max-w-[760px] font-display font-semibold text-h3 text-ink">
              Standard Exhibitor Package includes:
            </h3>
            <ul className="flex max-w-[760px] flex-col gap-3">
              <li className="flex items-start gap-3 text-body text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>
                  Name and logo printed directly on the fascia of a 2 × 3 furnished exhibition stand.
                </span>
              </li>
              <li className="flex items-start gap-3 text-body text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>
                  Logo and profile (max 100 words) in the official event magazine (2,000 copies).
                </span>
              </li>
              <li className="flex items-start gap-3 text-body text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>
                  2 complimentary delegate passes + 50% discount on 2 additional delegate passes.
                </span>
              </li>
              <li className="flex items-start gap-3 text-body text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>
                  Access to all event functions including the A2M Matchmaking platform.
                </span>
              </li>
            </ul>
            <div className="max-w-[760px] rounded-sm border-l-2 border-l-gold bg-surface px-6 py-5">
              <p className="mb-1 font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
                Reserve your stand
              </p>
              <p className="text-body text-muted">
                Contact info@a2mevent.com to book your space at the A2M Marketplace.
              </p>
              <Link className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 [&_svg]:size-4 [&_svg]:shrink-0 gold-metallic text-anthracite hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold focus-visible:outline-anthracite h-12 px-7 text-[12px] mt-4" to="/en/about?interest=interestExhibit#contact">
                Reserve your stand
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="explorers-village" className="a2m-reveal scroll-mt-24 py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-16">
    <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16">
      <h2 className="font-display font-bold tracking-[-0.01em] text-h3">
        Explorers' Village
      </h2>
      <div className="mt-8">
        <div className="flex flex-col gap-6">
          <p className="max-w-[760px] text-lead text-muted">
            A high-visibility showcase for early-stage exploration companies, in front of international investors and deal-makers.
          </p>
          <div className="flex flex-col gap-8">
            <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
              Forge Pathways to Growth: Connect, Showcase, and Partner at the Explorers' Village. The Explorers' Village at A2M is a gateway to transformative partnerships and growth in Africa's mining sector. This dynamic platform unites early-stage development and unlisted exploration companies with a curated audience of international investors, financiers, mining executives, and deal-makers, providing high-visibility exposure and targeted access to advance their projects.
            </p>
            <h3 className="max-w-[760px] font-display font-semibold text-h3 text-ink">
              Unlock Opportunities:
            </h3>
            <ul className="flex max-w-[760px] flex-col gap-3">
              <li className="flex items-start gap-3 text-body text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>
                  High-visibility project showcase.
                </span>
              </li>
              <li className="flex items-start gap-3 text-body text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>
                  Direct access to global investors and partners.
                </span>
              </li>
              <li className="flex items-start gap-3 text-body text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>
                  Advance your assets with capital and expertise.
                </span>
              </li>
            </ul>
            <h3 className="max-w-[760px] font-display font-semibold text-h3 text-ink">
              Explorers' Village package includes:
            </h3>
            <ul className="flex max-w-[760px] flex-col gap-3">
              <li className="flex items-start gap-3 text-body text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>
                  1 × 1 m furnished exhibition booth.
                </span>
              </li>
              <li className="flex items-start gap-3 text-body text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>
                  Logo and profile (max 100 words) in the official event magazine (2,000 copies).
                </span>
              </li>
              <li className="flex items-start gap-3 text-body text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>
                  1 complimentary delegate pass.
                </span>
              </li>
              <li className="flex items-start gap-3 text-body text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>
                  Access to all event functions including the A2M Matchmaking platform.
                </span>
              </li>
            </ul>
            <div className="max-w-[760px] rounded-sm border-l-2 border-l-gold bg-surface px-6 py-5">
              <p className="text-body text-muted">
                Limited spaces available under the Explorers' Village program. Connect with our team to join the next Explorers' Village.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="why-sponsor" className="a2m-reveal scroll-mt-24 py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-16">
    <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16">
      <h2 className="font-display font-bold tracking-[-0.01em] text-h2">
        Why Sponsor
      </h2>
      <div className="mt-8">
        <div className="flex flex-col gap-6">
          <p className="max-w-[760px] text-lead text-muted">
            Sponsoring A2M 2027 is not a marketing expense: it is strategic positioning in the market that will define African mining for the next twenty years.
          </p>
          <div className="flex flex-col gap-8">
            <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
              Sponsoring A2M 2027 is not a marketing expense. It is a strategic positioning decision in the market that will define African mining for the next twenty years.
            </p>
            <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
              The companies and institutions that sponsor A2M are not buying logo placement. They are buying something far more valuable:
              <em className="font-medium [font-family:var(--font-display)] text-copper">
                association with the most significant political and commercial moment in Africa mining in a generation
              </em>
              .
            </p>
            <h3 className="max-w-[760px] font-display font-semibold text-h3 text-ink">
              The Audience You Cannot Reach Any Other Way
            </h3>
            <div className="flex max-w-[760px] flex-col gap-4">
              <div className="relative">
                <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                  Every delegate at A2M 2027 is a decision-maker with a direct stake in African mining. They are not attendees. They are buyers, investors, ministers, operators and financiers — the exact people your business development team spends months trying to reach through cold outreach, conference networking and international roadshows.
                  <em className="font-medium [font-family:var(--font-display)] text-copper">
                    As a sponsor, you do not chase them. You are already at the table when they arrive.
                  </em>
                </p>
                <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white/80 to-transparent" />
              </div>
              <details className="group">
                <summary className="inline-flex w-fit cursor-pointer list-none items-center gap-2 rounded-sm border border-gold/50 px-4 py-2 font-semibold text-[12px] text-copper uppercase tracking-[0.08em] transition-colors hover:bg-gold hover:text-anthracite focus-visible:outline-2 focus-visible:outline-emerald-cta focus-visible:outline-offset-2 [&::-webkit-details-marker]:hidden">
                  <span className="group-open:hidden">
                    Read more
                    +
                  </span>
                  <span className="hidden group-open:inline">
                    Show less
                    −
                  </span>
                </summary>
                <div className="mt-6 flex flex-col gap-8">
                  <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                    A2M 2027 brings together an unparalleled audience: CEOs and CFOs of TSX, TSX-V, and other major securities-listed mining companies active in Africa; heads of natural resources banking and global investment banks; managing directors of African mining-focused private equity funds; portfolio managers from development finance institutions like FinDev Canada and the African Development Bank; and official delegations from over 30 African governments. This unique gathering won't be replicated anywhere else in North America — it's a one-time opportunity, here, for three days.
                  </p>
                </div>
              </details>
            </div>
            <h3 className="max-w-[760px] font-display font-semibold text-h3 text-ink">
              Five Reasons to Sponsor A2M 2027
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="h-full">
                <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                  <span className="tnum font-display font-bold text-data text-gold">
                    01
                  </span>
                  <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                    Brand leadership in a defining market
                  </h3>
                  <p className="text-body text-muted">
                    The Canada-Africa critical minerals partnership is not a trend. It is a structural shift driven by the energy transition, Canada's Critical Minerals Strategy and the operationalization of the AfCFTA. The companies that establish brand leadership now — at the inaugural edition of the A2M Convention that institutionalizes this partnership — will be the reference names when the next generation of Canada-Africa deals is being assembled. First-mover advantage in brand positioning is real, and it compounds over time.
                  </p>
                </div>
              </div>
              <div className="h-full">
                <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                  <span className="tnum font-display font-bold text-data text-gold">
                    02
                  </span>
                  <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                    Direct access to African Mining Ministers
                  </h3>
                  <p className="text-body text-muted">
                    No advertising campaign, no trade mission and no bilateral meeting request gives your organization what a sponsorship at A2M 2027 gives you: three days of physical proximity to the ministers who control the licensing, permitting and fiscal regimes of the countries where your business operates or intends to operate. The Capital Markets Lounge, the Gala Dinner seating arrangement and the Ministerial Roundtable protocol meetings are all designed to maximize the quality of these interactions for sponsors who have earned priority access.
                  </p>
                </div>
              </div>
              <div className="h-full">
                <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                  <span className="tnum font-display font-bold text-data text-gold">
                    03
                  </span>
                  <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                    Deal flow you cannot generate alone
                  </h3>
                  <p className="text-body text-muted">
                    The Investment Showcase presents pre-screened African mining projects to all delegates. As a sponsor, your team has priority access to private 30-minute sessions with the project holders of their choice, before these projects are seen by the broader market. For royalty companies, streaming firms, private equity funds and development finance institutions, this is the densest concentration of bankable African project exposure available at a single event anywhere in North America.
                  </p>
                </div>
              </div>
              <div className="h-full">
                <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                  <span className="tnum font-display font-bold text-data text-gold">
                    04
                  </span>
                  <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                    A brand association that works in both directions
                  </h3>
                  <p className="text-body text-muted">
                    A2M 2027 is diplomatically credible because of its Ministerial Roundtable. It is commercially credible because of the quality of its sponsors. These two credibilities reinforce each other. When your logo appears alongside our official and institutional partners, it sends a message to the African governments and investors in the room that your organization is not just present in this market — it is committed to it at the highest level.
                  </p>
                </div>
              </div>
              <div className="h-full">
                <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                  <span className="tnum font-display font-bold text-data text-gold">
                    05
                  </span>
                  <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                    Post-event visibility that extends beyond three days
                  </h3>
                  <p className="text-body text-muted">
                    The Ministerial Roundtable will be referenced in government documents, investor presentations and industry reports for years. Every A2M post-event publication, deal-tracking report and media mention carries the names of the sponsors. Your investment in A2M 2027 generates visibility that does not end when the delegates leave Montreal.
                  </p>
                </div>
              </div>
            </div>
            <h3 className="max-w-[760px] font-display font-semibold text-h3 text-ink">
              Who Should Sponsor A2M 2027?
            </h3>
            <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
              A2M sponsorship is designed for organizations whose growth depends on the quality of their relationships in African mining — TSX, TSX-V, and other major securities-listed mining companies seeking government access and co-investment partners in Africa, banks and financial advisory firms with natural resources mandates, royalty and streaming companies sourcing new deals, development finance institutions deploying capital in African critical minerals, mining equipment and services companies targeting African operators and Canadian developers, and law firms and consultancies building Africa-focused practices.
            </p>
            <div className="max-w-[760px] rounded-sm border-l-2 border-l-gold bg-surface px-6 py-5">
              <p className="text-body text-muted">
                If your next three years of business development include Africa, your brand belongs at A2M 2027.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="h-full">
                <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-sm bg-mist text-emerald-cta">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                      <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 22h18" />
                        <path d="M3 11c0-.943 0-1.414.293-1.707S4.057 9 5 9s1.414 0 1.707.293S7 10.057 7 11v6c0 .943 0 1.414-.293 1.707S5.943 19 5 19s-1.414 0-1.707-.293S3 17.943 3 17zm7-4c0-.943 0-1.414.293-1.707S11.057 5 12 5s1.414 0 1.707.293S14 6.057 14 7v10c0 .943 0 1.414-.293 1.707S12.943 19 12 19s-1.414 0-1.707-.293S10 17.943 10 17zm7-3c0-.943 0-1.414.293-1.707S18.057 2 19 2s1.414 0 1.707.293S21 3.057 21 4v13c0 .943 0 1.414-.293 1.707S19.943 19 19 19s-1.414 0-1.707-.293S17 17.943 17 17z" />
                      </g>
                    </svg>
                  </span>
                  <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                    Brand leadership
                  </h3>
                  <p className="text-body text-muted">
                    First-mover advantage in a structural market — it compounds over time.
                  </p>
                </div>
              </div>
              <div className="h-full">
                <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
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
                    Access to ministers
                  </h3>
                  <p className="text-body text-muted">
                    Proximity to the ministers who control licensing, permits and fiscal regimes.
                  </p>
                </div>
              </div>
              <div className="h-full">
                <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-sm bg-mist text-emerald-cta">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                      <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M17.414 10.414C18 9.828 18 8.886 18 7s0-2.828-.586-3.414m0 6.828C16.828 11 15.886 11 14 11h-4c-1.886 0-2.828 0-3.414-.586m10.828 0Zm0-6.828C16.828 3 15.886 3 14 3h-4c-1.886 0-2.828 0-3.414.586m10.828 0Zm-10.828 0C6 4.172 6 5.114 6 7s0 2.828.586 3.414m0-6.828Zm0 6.828ZM13 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" />
                        <path strokeLinecap="round" d="M18 6a3 3 0 0 1-3-3m3 5a3 3 0 0 0-3 3M6 6a3 3 0 0 0 3-3M6 8a3 3 0 0 1 3 3m-4 9.388h2.26c1.01 0 2.033.106 3.016.308a14.9 14.9 0 0 0 5.33.118c.868-.14 1.72-.355 2.492-.727c.696-.337 1.549-.81 2.122-1.341c.572-.53 1.168-1.397 1.59-2.075c.364-.582.188-1.295-.386-1.728a1.89 1.89 0 0 0-2.22 0l-1.807 1.365c-.7.53-1.465 1.017-2.376 1.162q-.165.026-.345.047m0 0l-.11.012m.11-.012a1 1 0 0 0 .427-.24a1.49 1.49 0 0 0 .126-2.134a1.9 1.9 0 0 0-.45-.367c-2.797-1.669-7.15-.398-9.779 1.467m9.676 1.274a.5.5 0 0 1-.11.012m0 0a9.3 9.3 0 0 1-1.814.004" />
                        <rect width="3" height="8" x="2" y="14" rx="1.5" />
                      </g>
                    </svg>
                  </span>
                  <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                    Deal flow
                  </h3>
                  <p className="text-body text-muted">
                    Priority access to private sessions with pre-screened project holders.
                  </p>
                </div>
              </div>
              <div className="h-full">
                <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-sm bg-mist text-emerald-cta">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                      <g fill="none">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M8.784 22c-1.686-.752-3.078-1.924-3.993-3.493M14.825 2.186c1.677-.477 3.408-.023 4.617 1.211" />
                        <path fill="currentColor" d="m4.01 8.367l-.372-.652zm2.492.5l.648-.377zm-3.3 1.886l-.647.378zm4.495-7.38l.648-.378zm.842 1.443l-.648.378zm1.877 4.71a.75.75 0 0 0 1.296-.756zm-2.878 2.607a.75.75 0 1 0 1.296-.756zm-3.14-6.875l-.648.378zm7.44-2.327l.648-.378zm2.526 4.33l.648-.377zm1.683 2.888l.373.651a.75.75 0 0 0 .275-1.029zm1.616-4.773l-.648.378zm2.526 4.331l.648-.378zM6.99 17.25l.648-.378zm9.967 2.003l-.373-.65zM13.784 15.3a.75.75 0 0 0 1.296-.756zM4.383 9.018c.633-.362 1.257-.14 1.471.227L7.15 8.49c-.716-1.228-2.323-1.454-3.512-.775zm-.745-1.303c-1.19.681-1.803 2.182-1.083 3.416l1.296-.756c-.21-.36-.1-.996.532-1.357zM7.05 3.75l.842 1.444l1.296-.756l-.842-1.443zm.842 1.444l2.525 4.331l1.296-.755l-2.525-4.332zm.943 6.183L7.15 8.49l-1.296.755l1.684 2.888zM7.15 8.49L5.045 4.88l-1.295.756l2.104 3.61zM5.577 3.523c.634-.362 1.258-.14 1.472.227l1.296-.755C7.629 1.767 6.022 1.54 4.833 2.22zM4.833 2.22c-1.19.681-1.803 2.182-1.083 3.416l1.295-.756c-.21-.36-.099-.996.532-1.357zm6.357 1.088l2.526 4.332l1.296-.756l-2.526-4.331zm2.526 4.332l1.684 2.887l1.295-.756l-1.683-2.887zM9.719 3.08c.633-.361 1.257-.139 1.471.228l1.296-.755c-.716-1.228-2.323-1.454-3.512-.774zm-.745-1.3c-1.19.68-1.803 2.181-1.083 3.415l1.296-.756c-.21-.36-.1-.996.532-1.357zm8.041 3.975l2.526 4.331l1.296-.756L18.31 5zm-1.471-.228c.633-.362 1.257-.14 1.471.228l1.296-.756c-.716-1.227-2.323-1.453-3.512-.774zm-.745-1.302c-1.19.68-1.803 2.182-1.083 3.416l1.296-.756c-.21-.36-.1-.997.532-1.358zM2.555 11.131l3.788 6.497l1.296-.756l-3.788-6.497zm14.03 7.471c-3.367 1.924-7.337 1.029-8.946-1.73l-1.296.756c2.111 3.62 7.065 4.518 10.987 2.276zm2.956-8.517c1.605 2.753.41 6.594-2.956 8.517l.745 1.302c3.924-2.242 5.621-6.949 3.507-10.575zm-4.461 4.46c-.675-1.159-.203-2.863 1.34-3.745l-.745-1.302c-2.102 1.201-3.075 3.77-1.891 5.802z" />
                      </g>
                    </svg>
                  </span>
                  <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                    Two-way credibility
                  </h3>
                  <p className="text-body text-muted">
                    Diplomatic (roundtable) and commercial (sponsor quality) credibility reinforcing each other.
                  </p>
                </div>
              </div>
              <div className="h-full">
                <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-sm bg-mist text-emerald-cta">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                      <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M22 12a10 10 0 1 1-20.001 0A10 10 0 0 1 22 12Z" />
                        <path d="M16 12c0 1.313-.104 2.614-.305 3.827c-.2 1.213-.495 2.315-.867 3.244c-.371.929-.812 1.665-1.297 2.168c-.486.502-1.006.761-1.531.761s-1.045-.259-1.53-.761c-.486-.503-.927-1.24-1.298-2.168c-.372-.929-.667-2.03-.868-3.244A23.6 23.6 0 0 1 8 12c0-1.313.103-2.614.304-3.827s.496-2.315.868-3.244c.371-.929.812-1.665 1.297-2.168C10.955 2.26 11.475 2 12 2s1.045.259 1.53.761c.486.503.927 1.24 1.298 2.168c.372.929.667 2.03.867 3.244C15.897 9.386 16 10.687 16 12Z" />
                        <path strokeLinecap="round" d="M2 12h20" />
                      </g>
                    </svg>
                  </span>
                  <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                    Post-event visibility
                  </h3>
                  <p className="text-body text-muted">
                    Presence in reports, deal-tracking and media coverage for years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="sponsorship" className="a2m-reveal scroll-mt-24 py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-16 a2m-motif-light relative overflow-hidden bg-surface">
    <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16 relative z-10">
      <h2 className="font-display font-bold tracking-[-0.01em] text-h2">
        Sponsorship Opportunities
      </h2>
      <div className="mt-8">
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-sm transition-all duration-[250ms] ease-discret border-2 border-gold bg-card shadow-card flex flex-col gap-4 p-6">
              <div className="flex flex-col gap-1">
                <h3 className="font-display font-bold text-h2 text-emerald-deep">
                  Platinum
                </h3>
                <span className="text-small text-muted">
                  Maximum visibility
                </span>
              </div>
              <span className="inline-flex items-center rounded-sm px-[9px] py-1 font-sans font-bold text-[9px] uppercase tracking-[0.14em] bg-bronze/15 text-copper w-fit">
                On request
              </span>
              <ul className="flex flex-1 flex-col gap-2.5">
                <li className="flex items-start gap-2 text-small text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>
                    Top-position logo on all materials
                  </span>
                </li>
                <li className="flex items-start gap-2 text-small text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>
                    Keynote speaking slot
                  </span>
                </li>
                <li className="flex items-start gap-2 text-small text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>
                    Premium exhibition booth
                  </span>
                </li>
                <li className="flex items-start gap-2 text-small text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>
                    Bundle of delegate passes
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card flex flex-col gap-4 p-6">
              <div className="flex flex-col gap-1">
                <h3 className="font-display font-bold text-h2 text-emerald-deep">
                  Gold
                </h3>
                <span className="text-small text-muted">
                  Strong presence
                </span>
              </div>
              <span className="inline-flex items-center rounded-sm px-[9px] py-1 font-sans font-bold text-[9px] uppercase tracking-[0.14em] bg-anthracite/8 text-muted w-fit">
                On request
              </span>
              <ul className="flex flex-1 flex-col gap-2.5">
                <li className="flex items-start gap-2 text-small text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>
                    Prominent logo on materials
                  </span>
                </li>
                <li className="flex items-start gap-2 text-small text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>
                    Exhibition booth
                  </span>
                </li>
                <li className="flex items-start gap-2 text-small text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>
                    Delegate passes
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card flex flex-col gap-4 p-6">
              <div className="flex flex-col gap-1">
                <h3 className="font-display font-bold text-h2 text-emerald-deep">
                  Silver
                </h3>
                <span className="text-small text-muted">
                  Targeted presence
                </span>
              </div>
              <span className="inline-flex items-center rounded-sm px-[9px] py-1 font-sans font-bold text-[9px] uppercase tracking-[0.14em] bg-anthracite/8 text-muted w-fit">
                On request
              </span>
              <ul className="flex flex-1 flex-col gap-2.5">
                <li className="flex items-start gap-2 text-small text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>
                    Logo on materials
                  </span>
                </li>
                <li className="flex items-start gap-2 text-small text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>
                    Exhibition presence
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card flex flex-col gap-4 p-6">
              <div className="flex flex-col gap-1">
                <h3 className="font-display font-bold text-h2 text-emerald-deep">
                  Bronze
                </h3>
                <span className="text-small text-muted">
                  Supporter
                </span>
              </div>
              <span className="inline-flex items-center rounded-sm px-[9px] py-1 font-sans font-bold text-[9px] uppercase tracking-[0.14em] bg-anthracite/8 text-muted w-fit">
                On request
              </span>
              <ul className="flex flex-1 flex-col gap-2.5">
                <li className="flex items-start gap-2 text-small text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>
                    Mention on website and signage
                  </span>
                </li>
                <li className="flex items-start gap-2 text-small text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>
                    Delegate pass
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 rounded-sm border-l-2 border-l-gold bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[520px] text-body text-muted">
              Customisable packages: our team will help you craft a tailored offer.
            </p>
            <Link className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 [&_svg]:size-4 [&_svg]:shrink-0 gold-metallic text-anthracite hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold focus-visible:outline-anthracite h-10 px-5 text-[11px] shrink-0" to="/en/about?interest=interestSponsorship#contact">
              Contact sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="exhibitors-sponsors" className="a2m-reveal scroll-mt-24 py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-16">
    <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16">
      <h2 className="font-display font-bold tracking-[-0.01em] text-h2">
        Exhibitors & Sponsors
      </h2>
      <div className="mt-8">
        <div className="flex flex-col gap-6">
          <p className="max-w-[760px] text-lead text-muted">
            The organisations aligning with A2M 2027 — the exhibitor and sponsor line-up will be revealed progressively.
          </p>
          <div className="flex flex-col gap-8">
            <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
              A2M 2027 brings together leading governments, mining companies, investors and service providers. Confirmed exhibitor and sponsor logos will be displayed here as the line-up takes shape.
            </p>
            <figure>
              <div className="relative">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  <div aria-hidden="true" className="relative aspect-[3/2] overflow-hidden rounded-sm border border-hairline bg-surface">
                    <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="scale-110 object-cover blur-[8px]" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw" srcSet="/images/sponsors/logo-1.jpg 256w, /images/sponsors/logo-1.jpg 384w, /images/sponsors/logo-1.jpg 640w, /images/sponsors/logo-1.jpg 750w, /images/sponsors/logo-1.jpg 828w, /images/sponsors/logo-1.jpg 1080w, /images/sponsors/logo-1.jpg 1200w, /images/sponsors/logo-1.jpg 1920w, /images/sponsors/logo-1.jpg 2048w, /images/sponsors/logo-1.jpg 3840w" src="/images/sponsors/logo-1.jpg" />
                  </div>
                  <div aria-hidden="true" className="relative aspect-[3/2] overflow-hidden rounded-sm border border-hairline bg-surface">
                    <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="scale-110 object-cover blur-[8px]" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw" srcSet="/images/sponsors/logo-2.jpg 256w, /images/sponsors/logo-2.jpg 384w, /images/sponsors/logo-2.jpg 640w, /images/sponsors/logo-2.jpg 750w, /images/sponsors/logo-2.jpg 828w, /images/sponsors/logo-2.jpg 1080w, /images/sponsors/logo-2.jpg 1200w, /images/sponsors/logo-2.jpg 1920w, /images/sponsors/logo-2.jpg 2048w, /images/sponsors/logo-2.jpg 3840w" src="/images/sponsors/logo-2.jpg" />
                  </div>
                  <div aria-hidden="true" className="relative aspect-[3/2] overflow-hidden rounded-sm border border-hairline bg-surface">
                    <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="scale-110 object-cover blur-[8px]" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw" srcSet="/images/sponsors/logo-3.jpg 256w, /images/sponsors/logo-3.jpg 384w, /images/sponsors/logo-3.jpg 640w, /images/sponsors/logo-3.jpg 750w, /images/sponsors/logo-3.jpg 828w, /images/sponsors/logo-3.jpg 1080w, /images/sponsors/logo-3.jpg 1200w, /images/sponsors/logo-3.jpg 1920w, /images/sponsors/logo-3.jpg 2048w, /images/sponsors/logo-3.jpg 3840w" src="/images/sponsors/logo-3.jpg" />
                  </div>
                  <div aria-hidden="true" className="relative aspect-[3/2] overflow-hidden rounded-sm border border-hairline bg-surface">
                    <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="scale-110 object-cover blur-[8px]" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw" srcSet="/images/sponsors/logo-4.jpg 256w, /images/sponsors/logo-4.jpg 384w, /images/sponsors/logo-4.jpg 640w, /images/sponsors/logo-4.jpg 750w, /images/sponsors/logo-4.jpg 828w, /images/sponsors/logo-4.jpg 1080w, /images/sponsors/logo-4.jpg 1200w, /images/sponsors/logo-4.jpg 1920w, /images/sponsors/logo-4.jpg 2048w, /images/sponsors/logo-4.jpg 3840w" src="/images/sponsors/logo-4.jpg" />
                  </div>
                  <div aria-hidden="true" className="relative aspect-[3/2] overflow-hidden rounded-sm border border-hairline bg-surface">
                    <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="scale-110 object-cover blur-[8px]" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw" srcSet="/images/sponsors/logo-5.jpg 256w, /images/sponsors/logo-5.jpg 384w, /images/sponsors/logo-5.jpg 640w, /images/sponsors/logo-5.jpg 750w, /images/sponsors/logo-5.jpg 828w, /images/sponsors/logo-5.jpg 1080w, /images/sponsors/logo-5.jpg 1200w, /images/sponsors/logo-5.jpg 1920w, /images/sponsors/logo-5.jpg 2048w, /images/sponsors/logo-5.jpg 3840w" src="/images/sponsors/logo-5.jpg" />
                  </div>
                  <div aria-hidden="true" className="relative aspect-[3/2] overflow-hidden rounded-sm border border-hairline bg-surface">
                    <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="scale-110 object-cover blur-[8px]" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw" srcSet="/images/sponsors/logo-6.jpg 256w, /images/sponsors/logo-6.jpg 384w, /images/sponsors/logo-6.jpg 640w, /images/sponsors/logo-6.jpg 750w, /images/sponsors/logo-6.jpg 828w, /images/sponsors/logo-6.jpg 1080w, /images/sponsors/logo-6.jpg 1200w, /images/sponsors/logo-6.jpg 1920w, /images/sponsors/logo-6.jpg 2048w, /images/sponsors/logo-6.jpg 3840w" src="/images/sponsors/logo-6.jpg" />
                  </div>
                  <div aria-hidden="true" className="relative aspect-[3/2] overflow-hidden rounded-sm border border-hairline bg-surface">
                    <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="scale-110 object-cover blur-[8px]" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw" srcSet="/images/sponsors/logo-7.jpg 256w, /images/sponsors/logo-7.jpg 384w, /images/sponsors/logo-7.jpg 640w, /images/sponsors/logo-7.jpg 750w, /images/sponsors/logo-7.jpg 828w, /images/sponsors/logo-7.jpg 1080w, /images/sponsors/logo-7.jpg 1200w, /images/sponsors/logo-7.jpg 1920w, /images/sponsors/logo-7.jpg 2048w, /images/sponsors/logo-7.jpg 3840w" src="/images/sponsors/logo-7.jpg" />
                  </div>
                  <div aria-hidden="true" className="relative aspect-[3/2] overflow-hidden rounded-sm border border-hairline bg-surface">
                    <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="scale-110 object-cover blur-[8px]" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw" srcSet="/images/sponsors/logo-8.jpg 256w, /images/sponsors/logo-8.jpg 384w, /images/sponsors/logo-8.jpg 640w, /images/sponsors/logo-8.jpg 750w, /images/sponsors/logo-8.jpg 828w, /images/sponsors/logo-8.jpg 1080w, /images/sponsors/logo-8.jpg 1200w, /images/sponsors/logo-8.jpg 1920w, /images/sponsors/logo-8.jpg 2048w, /images/sponsors/logo-8.jpg 3840w" src="/images/sponsors/logo-8.jpg" />
                  </div>
                  <div aria-hidden="true" className="relative aspect-[3/2] overflow-hidden rounded-sm border border-hairline bg-surface">
                    <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="scale-110 object-cover blur-[8px]" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw" srcSet="/images/sponsors/logo-9.jpg 256w, /images/sponsors/logo-9.jpg 384w, /images/sponsors/logo-9.jpg 640w, /images/sponsors/logo-9.jpg 750w, /images/sponsors/logo-9.jpg 828w, /images/sponsors/logo-9.jpg 1080w, /images/sponsors/logo-9.jpg 1200w, /images/sponsors/logo-9.jpg 1920w, /images/sponsors/logo-9.jpg 2048w, /images/sponsors/logo-9.jpg 3840w" src="/images/sponsors/logo-9.jpg" />
                  </div>
                  <div aria-hidden="true" className="relative aspect-[3/2] overflow-hidden rounded-sm border border-hairline bg-surface">
                    <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="scale-110 object-cover blur-[8px]" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw" srcSet="/images/sponsors/logo-10.jpg 256w, /images/sponsors/logo-10.jpg 384w, /images/sponsors/logo-10.jpg 640w, /images/sponsors/logo-10.jpg 750w, /images/sponsors/logo-10.jpg 828w, /images/sponsors/logo-10.jpg 1080w, /images/sponsors/logo-10.jpg 1200w, /images/sponsors/logo-10.jpg 1920w, /images/sponsors/logo-10.jpg 2048w, /images/sponsors/logo-10.jpg 3840w" src="/images/sponsors/logo-10.jpg" />
                  </div>
                </div>
                <span className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 whitespace-nowrap rounded-sm border border-gold/60 bg-ivory/90 px-4 py-2 font-semibold text-[11px] text-emerald-deep uppercase tracking-[0.14em] shadow-card backdrop-blur-sm">
                  To be revealed soon
                </span>
              </div>
              <figcaption className="mt-3 text-small text-subtle">
                2027 exhibitors & sponsors — logos coming soon
              </figcaption>
            </figure>
            <div className="max-w-[760px] rounded-sm border-l-2 border-l-gold bg-surface px-6 py-5">
              <p className="mb-1 font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
                Join the line-up
              </p>
              <p className="text-body text-muted">
                Contact info@a2mevent.com to be featured among the A2M 2027 exhibitors and sponsors.
              </p>
              <Link className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 [&_svg]:size-4 [&_svg]:shrink-0 gold-metallic text-anthracite hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold focus-visible:outline-anthracite h-12 px-7 text-[12px] mt-4" to="/en/about?interest=interestExhibit#contact">
                Join the line-up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="associate" className="a2m-reveal scroll-mt-24 py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-16">
    <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16">
      <h2 className="font-display font-bold tracking-[-0.01em] text-h2">
        Associate Your Brand
      </h2>
      <div className="mt-8">
        <div className="flex flex-col gap-6">
          <p className="max-w-[760px] text-lead text-muted">
            Tailored opportunities for governments, mining companies, suppliers and investors.
          </p>
          <div className="flex flex-col gap-8">
            <div className="max-w-[760px] rounded-sm border-l-2 border-l-gold bg-surface px-6 py-5">
              <p className="mb-1 font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
                Be visible where decisions are made.
              </p>
              <p className="text-body text-muted">
                A2M 2027 offers partners unrivalled access to senior mining decision-makers from 35 countries. Our exhibition and sponsorship opportunities are specifically designed to transform visibility into meaningful business conversations — from premium boardroom-level branding to high-impact on-floor activation.
              </p>
            </div>
            <h3 className="max-w-[760px] font-display font-semibold text-h3 text-ink">
              Benefits of Exhibiting
            </h3>
            <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
              Exhibiting at A2M positions your company at the center of a highly targeted, senior-level audience. This is your opportunity to showcase your expertise, engage directly with key decision-makers, investors, and commodity buyers, and generate measurable business results.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="h-full">
                <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-sm bg-mist text-emerald-cta">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                      <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M22 12a10 10 0 1 1-20.001 0A10 10 0 0 1 22 12Z" />
                        <path d="M16 12c0 1.313-.104 2.614-.305 3.827c-.2 1.213-.495 2.315-.867 3.244c-.371.929-.812 1.665-1.297 2.168c-.486.502-1.006.761-1.531.761s-1.045-.259-1.53-.761c-.486-.503-.927-1.24-1.298-2.168c-.372-.929-.667-2.03-.868-3.244A23.6 23.6 0 0 1 8 12c0-1.313.103-2.614.304-3.827s.496-2.315.868-3.244c.371-.929.812-1.665 1.297-2.168C10.955 2.26 11.475 2 12 2s1.045.259 1.53.761c.486.503.927 1.24 1.298 2.168c.372.929.667 2.03.867 3.244C15.897 9.386 16 10.687 16 12Z" />
                        <path strokeLinecap="round" d="M2 12h20" />
                      </g>
                    </svg>
                  </span>
                  <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                    Visibility & thought leadership
                  </h3>
                  <p className="text-body text-muted">
                    Increase brand visibility and establish thought leadership.
                  </p>
                </div>
              </div>
              <div className="h-full">
                <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-sm bg-mist text-emerald-cta">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                      <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="9" cy="6" r="4" />
                        <path strokeLinecap="round" d="M15 9a3 3 0 1 0 0-6" />
                        <ellipse cx="9" cy="17" rx="7" ry="4" />
                        <path strokeLinecap="round" d="M18 14c1.754.385 3 1.359 3 2.5c0 1.03-1.014 1.923-2.5 2.37" />
                      </g>
                    </svg>
                  </span>
                  <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                    Decision-makers & buyers
                  </h3>
                  <p className="text-body text-muted">
                    Connect with key decision-makers, investors and buyers.
                  </p>
                </div>
              </div>
              <div className="h-full">
                <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-sm bg-mist text-emerald-cta">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                      <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M13.024 14.56c-2.31.924-3.465 1.386-4.124.938a1.5 1.5 0 0 1-.398-.398c-.448-.66.014-1.814.938-4.124c.197-.493.295-.74.465-.933q.065-.074.139-.138c.193-.17.44-.268.932-.465c2.31-.924 3.464-1.386 4.124-.938a1.5 1.5 0 0 1 .398.398c.448.66-.014 1.814-.938 4.124c-.197.493-.296.739-.465.932a2 2 0 0 1-.139.139c-.193.17-.44.268-.932.465Z" />
                      </g>
                    </svg>
                  </span>
                  <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                    Quality leads
                  </h3>
                  <p className="text-body text-muted">
                    Generate quality leads and accelerate business growth.
                  </p>
                </div>
              </div>
              <div className="h-full">
                <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-sm bg-mist text-emerald-cta">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                      <path fill="none" stroke="currentColor" strokeWidth="1.5" d="m12 9l4.5-4.5m-4.5 10L18.5 8M12 19.5l7.5-7.5M12 22c4.418 0 8-3.646 8-8.143c0-4.462-2.553-9.67-6.537-11.531A3.45 3.45 0 0 0 12 2m0 20c-4.418 0-8-3.646-8-8.143c0-4.462 2.553-9.67 6.537-11.531A3.45 3.45 0 0 1 12 2m0 20V2" />
                    </svg>
                  </span>
                  <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                    Industry trends
                  </h3>
                  <p className="text-body text-muted">
                    Stay ahead of industry trends and best practices.
                  </p>
                </div>
              </div>
              <div className="h-full">
                <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-sm bg-mist text-emerald-cta">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
                        <path d="M14 12a6 6 0 1 1-6-6" />
                        <path d="M10 12a6 6 0 1 1 6 6" />
                      </g>
                    </svg>
                  </span>
                  <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                    Strategic partnerships
                  </h3>
                  <p className="text-body text-muted">
                    Strengthen existing relationships and build new strategic partnerships.
                  </p>
                </div>
              </div>
              <div className="h-full">
                <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
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
                    Reputation & credibility
                  </h3>
                  <p className="text-body text-muted">
                    Enhance your company's reputation and credibility.
                  </p>
                </div>
              </div>
            </div>
            <h3 className="max-w-[760px] font-display font-semibold text-h3 text-ink">
              Benefits of Sponsoring
            </h3>
            <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
              Sponsorship places your brand directly in front of your target audience. We offer a range of tailored sponsorship packages designed to deliver customized, high-visibility exposure to the right people.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="h-full">
                <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-sm bg-mist text-emerald-cta">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                      <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M22 12a10 10 0 1 1-20.001 0A10 10 0 0 1 22 12Z" />
                        <path d="M16 12c0 1.313-.104 2.614-.305 3.827c-.2 1.213-.495 2.315-.867 3.244c-.371.929-.812 1.665-1.297 2.168c-.486.502-1.006.761-1.531.761s-1.045-.259-1.53-.761c-.486-.503-.927-1.24-1.298-2.168c-.372-.929-.667-2.03-.868-3.244A23.6 23.6 0 0 1 8 12c0-1.313.103-2.614.304-3.827s.496-2.315.868-3.244c.371-.929.812-1.665 1.297-2.168C10.955 2.26 11.475 2 12 2s1.045.259 1.53.761c.486.503.927 1.24 1.298 2.168c.372.929.667 2.03.867 3.244C15.897 9.386 16 10.687 16 12Z" />
                        <path strokeLinecap="round" d="M2 12h20" />
                      </g>
                    </svg>
                  </span>
                  <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                    Brand exposure
                  </h3>
                  <p className="text-body text-muted">
                    Unparalleled brand exposure and visibility to the right audience.
                  </p>
                </div>
              </div>
              <div className="h-full">
                <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-sm bg-mist text-emerald-cta">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                      <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="9" cy="6" r="4" />
                        <path strokeLinecap="round" d="M15 9a3 3 0 1 0 0-6" />
                        <ellipse cx="9" cy="17" rx="7" ry="4" />
                        <path strokeLinecap="round" d="M18 14c1.754.385 3 1.359 3 2.5c0 1.03-1.014 1.923-2.5 2.37" />
                      </g>
                    </svg>
                  </span>
                  <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                    Targeted audience
                  </h3>
                  <p className="text-body text-muted">
                    Direct access to a targeted audience of industry leaders and decision-makers.
                  </p>
                </div>
              </div>
              <div className="h-full">
                <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-sm bg-mist text-emerald-cta">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                      <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 15.8L7.143 17L10 14M6 8.8L7.143 10L10 7" />
                        <path strokeLinecap="round" d="M13 9h5m-5 7h5" />
                      </g>
                    </svg>
                  </span>
                  <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                    Thought leadership
                  </h3>
                  <p className="text-body text-muted">
                    Opportunities to showcase thought leadership and expertise.
                  </p>
                </div>
              </div>
              <div className="h-full">
                <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-sm bg-mist text-emerald-cta">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                      <g fill="none">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M8.784 22c-1.686-.752-3.078-1.924-3.993-3.493M14.825 2.186c1.677-.477 3.408-.023 4.617 1.211" />
                        <path fill="currentColor" d="m4.01 8.367l-.372-.652zm2.492.5l.648-.377zm-3.3 1.886l-.647.378zm4.495-7.38l.648-.378zm.842 1.443l-.648.378zm1.877 4.71a.75.75 0 0 0 1.296-.756zm-2.878 2.607a.75.75 0 1 0 1.296-.756zm-3.14-6.875l-.648.378zm7.44-2.327l.648-.378zm2.526 4.33l.648-.377zm1.683 2.888l.373.651a.75.75 0 0 0 .275-1.029zm1.616-4.773l-.648.378zm2.526 4.331l.648-.378zM6.99 17.25l.648-.378zm9.967 2.003l-.373-.65zM13.784 15.3a.75.75 0 0 0 1.296-.756zM4.383 9.018c.633-.362 1.257-.14 1.471.227L7.15 8.49c-.716-1.228-2.323-1.454-3.512-.775zm-.745-1.303c-1.19.681-1.803 2.182-1.083 3.416l1.296-.756c-.21-.36-.1-.996.532-1.357zM7.05 3.75l.842 1.444l1.296-.756l-.842-1.443zm.842 1.444l2.525 4.331l1.296-.755l-2.525-4.332zm.943 6.183L7.15 8.49l-1.296.755l1.684 2.888zM7.15 8.49L5.045 4.88l-1.295.756l2.104 3.61zM5.577 3.523c.634-.362 1.258-.14 1.472.227l1.296-.755C7.629 1.767 6.022 1.54 4.833 2.22zM4.833 2.22c-1.19.681-1.803 2.182-1.083 3.416l1.295-.756c-.21-.36-.099-.996.532-1.357zm6.357 1.088l2.526 4.332l1.296-.756l-2.526-4.331zm2.526 4.332l1.684 2.887l1.295-.756l-1.683-2.887zM9.719 3.08c.633-.361 1.257-.139 1.471.228l1.296-.755c-.716-1.228-2.323-1.454-3.512-.774zm-.745-1.3c-1.19.68-1.803 2.181-1.083 3.415l1.296-.756c-.21-.36-.1-.996.532-1.357zm8.041 3.975l2.526 4.331l1.296-.756L18.31 5zm-1.471-.228c.633-.362 1.257-.14 1.471.228l1.296-.756c-.716-1.227-2.323-1.453-3.512-.774zm-.745-1.302c-1.19.68-1.803 2.182-1.083 3.416l1.296-.756c-.21-.36-.1-.997.532-1.358zM2.555 11.131l3.788 6.497l1.296-.756l-3.788-6.497zm14.03 7.471c-3.367 1.924-7.337 1.029-8.946-1.73l-1.296.756c2.111 3.62 7.065 4.518 10.987 2.276zm2.956-8.517c1.605 2.753.41 6.594-2.956 8.517l.745 1.302c3.924-2.242 5.621-6.949 3.507-10.575zm-4.461 4.46c-.675-1.159-.203-2.863 1.34-3.745l-.745-1.302c-2.102 1.201-3.075 3.77-1.891 5.802z" />
                      </g>
                    </svg>
                  </span>
                  <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                    High-value networking
                  </h3>
                  <p className="text-body text-muted">
                    High-value networking and business-development opportunities.
                  </p>
                </div>
              </div>
              <div className="h-full">
                <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
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
                    Premier association
                  </h3>
                  <p className="text-body text-muted">
                    Align your brand with a premier Pan-African mining event in North America.
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-[760px] rounded-sm border-l-2 border-l-gold bg-surface px-6 py-5">
              <p className="mb-1 font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
                Let's talk
              </p>
              <p className="text-body text-muted">
                Contact info@a2mevent.com to build an offer tailored to your goals.
              </p>
              <Link className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 [&_svg]:size-4 [&_svg]:shrink-0 gold-metallic text-anthracite hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold focus-visible:outline-anthracite h-12 px-7 text-[12px] mt-4" to="/en/about?interest=interestSponsorship#contact">
                Build your sponsorship with us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
