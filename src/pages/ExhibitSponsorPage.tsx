import OnThisPageNav from '../components/OnThisPageNav'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

const btnGold =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 [&_svg]:size-4 [&_svg]:shrink-0 gold-metallic text-anthracite hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold focus-visible:outline-anthracite'

const btnGhostLight =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-ivory/30 font-sans font-semibold uppercase tracking-[0.06em] text-ivory transition-all duration-[250ms] ease-discret hover:border-champagne hover:text-champagne focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne'

function IconGlobe() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12a10 10 0 1 1-20.001 0A10 10 0 0 1 22 12Z" />
        <path d="M16 12c0 1.313-.104 2.614-.305 3.827c-.2 1.213-.495 2.315-.867 3.244c-.371.929-.812 1.665-1.297 2.168c-.486.502-1.006.761-1.531.761s-1.045-.259-1.53-.761c-.486-.503-.927-1.24-1.298-2.168c-.372-.929-.667-2.03-.868-3.244A23.6 23.6 0 0 1 8 12c0-1.313.103-2.614.304-3.827s.496-2.315.868-3.244c.371-.929.812-1.665 1.297-2.168C10.955 2.26 11.475 2 12 2s1.045.259 1.53.761c.486.503.927 1.24 1.298 2.168c.372.929.667 2.03.867 3.244C15.897 9.386 16 10.687 16 12Z" />
        <path strokeLinecap="round" d="M2 12h20" />
      </g>
    </svg>
  )
}

function IconPeople() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="6" r="4" />
        <path strokeLinecap="round" d="M15 9a3 3 0 1 0 0-6" />
        <ellipse cx="9" cy="17" rx="7" ry="4" />
        <path strokeLinecap="round" d="M18 14c1.754.385 3 1.359 3 2.5c0 1.03-1.014 1.923-2.5 2.37" />
      </g>
    </svg>
  )
}

function IconBadge() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 15.8L7.143 17L10 14M6 8.8L7.143 10L10 7" />
        <path strokeLinecap="round" d="M13 9h5m-5 7h5" />
      </g>
    </svg>
  )
}

function IconHandshake() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
      <g fill="none">
        <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M8.784 22c-1.686-.752-3.078-1.924-3.993-3.493M14.825 2.186c1.677-.477 3.408-.023 4.617 1.211" />
        <path fill="currentColor" d="m4.01 8.367l-.372-.652zm2.492.5l.648-.377zm-3.3 1.886l-.647.378zm4.495-7.38l.648-.378zm.842 1.443l-.648.378zm1.877 4.71a.75.75 0 0 0 1.296-.756zm-2.878 2.607a.75.75 0 1 0 1.296-.756zm-3.14-6.875l-.648.378zm7.44-2.327.648-.378zm2.526 4.33l.648-.377zm1.683 2.888l.373.651a.75.75 0 0 0 .275-1.029zm1.616-4.773l-.648.378zm2.526 4.331.648-.378zM6.99 17.25l.648-.378zm9.967 2.003l-.373-.65zM13.784 15.3a.75.75 0 0 0 1.296-.756zM4.383 9.018c.633-.362 1.257-.14 1.471.227L7.15 8.49c-.716-1.228-2.323-1.454-3.512-.775zm-.745-1.303c-1.19.681-1.803 2.182-1.083 3.416l1.296-.756c-.21-.36-.1-.996.532-1.357zM7.05 3.75l.842 1.444l1.296-.756l-.842-1.443zm.842 1.444l2.525 4.331l1.296-.755l-2.525-4.332zm.943 6.183L7.15 8.49l-1.296.755l1.684 2.888zM7.15 8.49L5.045 4.88l-1.295.756l2.104 3.61zM5.577 3.523c.634-.362 1.258-.14 1.472.227l1.296-.755C7.629 1.767 6.022 1.54 4.833 2.22zM4.833 2.22c-1.19.681-1.803 2.182-1.083 3.416l1.295-.756c-.21-.36-.099-.996.532-1.357zm6.357 1.088l2.526 4.332l1.296-.756l-2.526-4.331zm2.526 4.332l1.684 2.887l1.295-.756l-1.683-2.887zM9.719 3.08c.633-.361 1.257-.139 1.471.228l1.296-.755c-.716-1.228-2.323-1.454-3.512-.774zm-.745-1.3c-1.19.68-1.803 2.181-1.083 3.415l1.296-.756c-.21-.36-.1-.996.532-1.357zm8.041 3.975l2.526 4.331l1.296-.756L18.31 5zm-1.471-.228c.633-.362 1.257-.14 1.471.228l1.296-.756c-1.16-1.227-2.323-1.453-3.512-.774zm-.745-1.302c-1.19.68-1.803 2.182-1.083 3.416l1.296-.756c-.21-.36-.1-.997.532-1.358zM2.555 11.131l3.788 6.497l1.296-.756l-3.788-6.497zm14.03 7.471c-3.367 1.924-7.337 1.029-8.946-1.73l-1.296.756c2.111 3.62 7.065 4.518 10.987 2.276zm2.956-8.517c1.605 2.753.41 6.594-2.956 8.517l.745 1.302c3.924-2.242 5.621-6.949 3.507-10.575zm-4.461 4.46c-.675-1.159-.203-2.863 1.34-3.745l-.745-1.302c-2.102 1.201-3.075 3.77-1.891 5.802z" />
      </g>
    </svg>
  )
}

function IconSkyline() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" d="M22 22H2" />
        <path d="M17 22V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v16m14 0V11.5c0-1.405 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C19.607 8 18.904 8 17.5 8M3 22V11.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C4.393 8 5.096 8 6.5 8" />
        <path strokeLinecap="round" d="M12 22v-3M10 5h4m-4 3h4m-4 3h4m-4 3h4" />
      </g>
    </svg>
  )
}

function IconBars() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 22h18" />
        <path d="M3 11c0-.943 0-1.414.293-1.707S4.057 9 5 9s1.414 0 1.707.293S7 10.057 7 11v6c0 .943 0 1.414-.293 1.707S5.943 19 5 19s-1.414 0-1.707-.293S3 17.943 3 17zm7-4c0-.943 0-1.414.293-1.707S11.057 5 12 5s1.414 0 1.707.293S14 6.057 14 7v10c0 .943 0 1.414-.293 1.707S12.943 19 12 19s-1.414 0-1.707-.293S10 17.943 10 17zm7-3c0-.943 0-1.414.293-1.707S18.057 2 19 2s1.414 0 1.707.293S21 3.057 21 4v13c0 .943 0 1.414-.293 1.707S19.943 19 19 19s-1.414 0-1.707-.293S17 17.943 17 17z" />
      </g>
    </svg>
  )
}

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

function BenefitCard({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-sm border border-hairline bg-card p-6 shadow-card transition-all duration-[250ms] ease-discret hover:-translate-y-1 hover:border-gold hover:shadow-card-hover">
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-gold-light via-gold to-gold-deep opacity-0 transition-opacity duration-[250ms] ease-discret group-hover:opacity-100" />
      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-sm bg-mist text-emerald-cta transition-colors duration-[250ms] ease-discret group-hover:bg-emerald-deep group-hover:text-champagne">
        {icon}
      </span>
      <h4 className="font-display font-semibold text-h3 text-ink">{title}</h4>
      <p className="text-body text-muted">{children}</p>
    </div>
  )
}

function ShowcaseCard({ img, alt, icon, title, children }: { img: string; alt: string; icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-sm border border-ivory/15 bg-ivory/5 transition-all duration-[250ms] ease-discret hover:-translate-y-1 hover:border-gold/60 hover:shadow-emerald">
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-cinema group-hover:scale-105"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-emerald-deep/90 via-emerald-deep/15 to-transparent" />
      </div>
      <div className="-mt-6 flex flex-1 flex-col gap-3 px-6 pb-6">
        <span className="relative inline-flex size-10 shrink-0 items-center justify-center rounded-sm border border-gold/40 bg-emerald-deep text-gold-light shadow-emerald">
          {icon}
        </span>
        <h3 className="relative font-display font-semibold text-h3 text-ivory">{title}</h3>
        <p className="relative text-body text-champagne/80">{children}</p>
      </div>
    </div>
  )
}

function FormatCard({ id, img, alt, eyebrow, title, children }: { id: string; img: string; alt: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <div id={id} className="flex scroll-mt-24 flex-col overflow-hidden rounded-sm border border-hairline bg-card shadow-card transition-all duration-[250ms] ease-discret hover:-translate-y-1 hover:shadow-card-hover sm:scroll-mt-32 lg:scroll-mt-[205px]">
      <div className="relative">
        <img
          src={img}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="aspect-[16/9] w-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-emerald-deep/85 via-emerald-deep/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <span className="font-semibold text-[11px] text-gold-light uppercase tracking-[0.22em] [text-shadow:0_1px_10px_rgba(3,20,16,0.55)]">
            {eyebrow}
          </span>
          <h3 className="mt-1 font-display font-bold tracking-[-0.01em] text-h2 text-ivory [text-shadow:0_2px_16px_rgba(3,20,16,0.6)]">
            {title}
          </h3>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-5 p-6 lg:p-8">{children}</div>
    </div>
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

const sponsorBenefits = [
  { icon: <IconGlobe />, title: 'Brand exposure', body: 'Unparalleled brand exposure and visibility to the right audience.' },
  { icon: <IconPeople />, title: 'Targeted audience', body: 'Direct access to a targeted audience of industry leaders and decision-makers.' },
  { icon: <IconBadge />, title: 'Thought leadership', body: 'Opportunities to showcase thought leadership and expertise.' },
  { icon: <IconHandshake />, title: 'High-value networking', body: 'High-value networking and business-development opportunities.' },
  { icon: <IconSkyline />, title: 'Premier association', body: 'Align your brand with a premier Pan-African mining event in North America.' },
]

const sponsorReasons = [
  {
    title: 'Brand leadership in a defining market',
    body: "The Canada-Africa critical minerals partnership is not a trend. It is a structural shift driven by the energy transition, Canada's Critical Minerals Strategy and the operationalization of the AfCFTA. The companies that establish brand leadership now — at the inaugural edition of the A2M Convention that institutionalizes this partnership — will be the reference names when the next generation of Canada-Africa deals is being assembled. First-mover advantage in brand positioning is real, and it compounds over time.",
  },
  {
    title: 'Direct access to African Mining Ministers',
    body: 'No advertising campaign, no trade mission and no bilateral meeting request gives your organization what a sponsorship at A2M 2027 gives you: three days of physical proximity to the ministers who control the licensing, permitting and fiscal regimes of the countries where your business operates or intends to operate. The Capital Markets Lounge, the Gala Dinner seating arrangement and the Ministerial Roundtable protocol meetings are all designed to maximize the quality of these interactions for sponsors who have earned priority access.',
  },
  {
    title: 'Deal flow you cannot generate alone',
    body: 'The Investment Showcase presents pre-screened African mining projects to all delegates. As a sponsor, your team has priority access to private 30-minute sessions with the project holders of their choice, before these projects are seen by the broader market. For royalty companies, streaming firms, private equity funds and development finance institutions, this is the densest concentration of bankable African project exposure available at a single event anywhere in North America.',
  },
  {
    title: 'A brand association that works in both directions',
    body: 'A2M 2027 is diplomatically credible because of its Ministerial Roundtable. It is commercially credible because of the quality of its sponsors. These two credibilities reinforce each other. When your logo appears alongside our official and institutional partners, it sends a message to the African governments and investors in the room that your organization is not just present in this market — it is committed to it at the highest level.',
  },
  {
    title: 'Post-event visibility that extends beyond three days',
    body: 'The Ministerial Roundtable will be referenced in government documents, investor presentations and industry reports for years. Every A2M post-event publication, deal-tracking report and media mention carries the names of the sponsors. Your investment in A2M 2027 generates visibility that does not end when the delegates leave Montreal.',
  },
]

const tiers = [
  { name: 'Platinum', bar: 'bg-gradient-to-r from-ivory via-champagne to-ivory', note: 'Top-position branding and keynote speaking slots.' },
  { name: 'Gold', bar: 'gold-metallic', note: 'Premium exhibition booths and prime visibility.' },
  { name: 'Silver', bar: 'bg-gradient-to-r from-mist via-ivory to-mist', note: 'High-visibility presence across the event floor.' },
  { name: 'Bronze', bar: 'bg-gradient-to-r from-bronze via-gold-deep to-bronze', note: 'Focused packages with bundles of delegate passes.' },
]

export default function ExhibitSponsorPage() {
  return (
    <>
      <div className="a2m-motif relative overflow-hidden border-hairline border-b bg-emerald-ink text-ivory">
        <img
          alt=""
          aria-hidden="true"
          decoding="async"
          loading="eager"
          className="absolute inset-0 size-full object-cover"
          src="/images/exhibit/hall-hero.jpg"
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
                    Exhibit or Sponsor
                  </span>
                </li>
              </ol>
            </nav>
          </div>
          <span className="font-semibold text-[11px] text-gold-light uppercase tracking-[0.26em] [text-shadow:0_1px_10px_rgba(3,20,16,0.55)]">
            Exhibit or Sponsor
          </span>
          <h1 className="mt-3 max-w-[820px] font-bold text-[1.9rem] text-ivory leading-[1.12] tracking-[-0.01em] [font-family:var(--font-display)] [text-shadow:0_2px_20px_rgba(3,20,16,0.55)] sm:text-[2.6rem] lg:text-[3.1rem]">
            Be <span className="text-gold-light">in the room</span> where deals happen
          </h1>
          <span className="mt-5 block h-0.5 w-10 rounded-full bg-gold" aria-hidden="true" />
          <p className="mt-4 max-w-[640px] text-champagne/90 text-lead [text-shadow:0_1px_14px_rgba(3,20,16,0.6)]">
            Showcase your organisation and align your brand with the flagship mining event.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link className={`${btnGold} h-12 px-7 text-[12px]`} to="/en/about?interest=interestSponsorship#contact">
              Build your sponsorship with us
            </Link>
            <Link className={`${btnGhostLight} h-12 px-7 text-[12px]`} to="/en/exhibit-sponsor#marketplace">
              Explore exhibition formats
            </Link>
          </div>
          <dl className="mt-12 grid max-w-[720px] grid-cols-1 gap-6 border-ivory/15 border-t pt-8 sm:grid-cols-3">
            <div>
              <dt className="font-semibold text-[10px] text-champagne/85 uppercase tracking-[0.16em]">
                Countries represented
              </dt>
              <dd className="tnum mt-1 font-display font-bold text-data-xl text-ivory">
                35
              </dd>
            </div>
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
                Exhibition formats
              </dt>
              <dd className="tnum mt-1 font-display font-bold text-data-xl text-ivory">
                2
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <OnThisPageNav
        items={[
          { id: 'associate', label: 'Associate Your Brand' },
          { id: 'why-exhibit', label: 'Why Exhibit' },
          { id: 'exhibition', label: 'Exhibition opportunities' },
          { id: 'why-sponsor', label: 'Why Sponsor' },
          { id: 'sponsorship', label: 'Sponsorship Opportunities' },
        ]}
      />
      <section id="associate" className="a2m-reveal scroll-mt-24 py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-20">
        <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-16">
            <div className="lg:sticky lg:top-[140px] lg:self-start">
              <span className="font-semibold text-[11px] text-copper uppercase tracking-[0.22em]">
                Partnership
              </span>
              <h2 className="mt-2 font-display font-bold tracking-[-0.01em] text-h2">
                Associate Your Brand
              </h2>
              <p className="mt-4 text-lead text-muted">
                Tailored opportunities for governments, mining companies, suppliers and investors.
              </p>
              <div className="mt-6">
                <Callout label="Be visible where decisions are made.">
                  A2M 2027 offers partners unrivalled access to senior mining decision-makers from 35 countries. Our exhibition and sponsorship opportunities are specifically designed to transform visibility into meaningful business conversations — from premium boardroom-level branding to high-impact on-floor activation.
                </Callout>
              </div>

            </div>
            <div className="flex min-w-0 flex-col gap-12">
              <div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {sponsorBenefits.map((b) => (
                    <BenefitCard key={b.title} icon={b.icon} title={b.title}>
                      {b.body}
                    </BenefitCard>
                  ))}
                </div>
              </div>
              <Callout label="Let's talk">
                Contact info@a2mevent.com to build an offer tailored to your goals.
              </Callout>
            </div>
          </div>
        </div>
      </section>
      <section id="why-exhibit" className="a2m-motif relative scroll-mt-24 overflow-hidden bg-emerald-deep py-16 text-ivory sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-24">
        <div className="relative z-10 mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-16">
            <div>
              <span className="font-semibold text-[11px] text-gold-light uppercase tracking-[0.22em]">
                Exhibition
              </span>
              <h2 className="mt-2 font-display font-bold tracking-[-0.01em] text-h2 text-ivory">
                Why Exhibit
              </h2>
              <p className="mt-4 text-lead text-champagne/90">
                Three days of face time with the people who decide what gets built, financed and operated in African mining.
              </p>
              <div className="mt-6">
                <div className="rounded-sm border border-gold/40 bg-gold/10 px-6 py-5">
                  <p className="text-body text-ivory">
                    Exhibition spaces are allocated on a first-confirmed basis, ensuring priority placement for early bookings.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex min-w-0 flex-col gap-8">
              <p className="max-w-[760px] text-lead text-champagne/80 leading-[1.7]">
                A2M offers three days of face time with the people who decide what gets built, financed and operated in African mining. Every delegate who walks past your stand has a direct professional stake in African mining — as an operator, a financier, a government official, a developer or a service buyer. The exhibition hosts the same audience that mining companies spend months trying to reach through cold outreach, conference networking and international roadshows.
              </p>
              <p className="max-w-[760px] text-lead text-champagne/80 leading-[1.7]">
                Your exhibition stand sits in the biggest African Mining event in North America. You are not waiting for the right moment — the right moment is designed into the program around you. Your team is on the floor when African Mining Ministers are walking between sessions, when mining executives are looking for a service partner, and when institutional investors are moving from a panel into a bilateral meeting.
              </p>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                <ShowcaseCard img="/images/exhibit/why-visibility.jpg" alt="Delegates photographing a branded exhibition totem on the A2M floor" icon={<IconGlobe />} title="Brand visibility">
                  Before delegates from 35 countries, all with a stake in African mining.
                </ShowcaseCard>
                <ShowcaseCard img="/images/exhibit/why-leads.jpg" alt="Two delegates shaking hands across a matchmaking table" icon={<IconPeople />} title="Qualified leads">
                  Lead generation and targeted B2B meetings via the matchmaking platform.
                </ShowcaseCard>
                <ShowcaseCard img="/images/exhibit/why-positioning.jpg" alt="Executives shaking hands in front of national flags" icon={<IconBars />} title="Strategic positioning">
                  At the heart of the critical-minerals market and the Canada-Africa alliance.
                </ShowcaseCard>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="exhibition" className="a2m-reveal scroll-mt-24 py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-20">
        <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-16">
            <div>
              <span className="font-semibold text-[11px] text-copper uppercase tracking-[0.22em]">
                Formats
              </span>
              <h2 className="mt-2 font-display font-bold tracking-[-0.01em] text-h2">
                Exhibition opportunities
              </h2>
              <p className="mt-4 text-lead text-muted">
                From the A2M Marketplace to the Explorers' Village, choose the format that fits your objectives.
              </p>
            </div>
            <div className="flex min-w-0 flex-col justify-center">
              <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                A2M offers two complementary exhibition formats. The A2M Marketplace is the main floor where Canadian companies and African entities showcase capabilities and opportunities; the Explorers' Village gives early-stage exploration companies a targeted showcase to investors and financiers. Choose the format that fits your objectives below.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <FormatCard id="marketplace" img="/images/exhibit/marketplace-floor.jpg" alt="Delegates conversing between exhibition stands on the A2M Marketplace floor" eyebrow="The place where every deal starts!" title="A2M Marketplace">
              <p className="text-lead text-muted">
                The industry's meeting point where Canadian companies and African entities showcase, discover and close.
              </p>
              <p className="text-body text-muted leading-[1.7]">
                A2M Marketplace is the industry's meeting point where Canadian companies showcase their capabilities to African governments and operators, and African entities present their opportunities to Canadian investors. The Marketplace floor is designed for targeted discovery and productive interaction, not passive browsing.
              </p>
              <div>
                <h4 className="font-display font-semibold text-h3 text-ink">
                  By exhibiting at the Marketplace, you will:
                </h4>
                <ul className="mt-4 flex flex-col gap-3">
                  <Check>Increase brand visibility and establish thought leadership.</Check>
                  <Check>Connect with key decision-makers, investors, and buyers.</Check>
                  <Check>Generate leads and drive business growth.</Check>
                  <Check>Stay updated on industry trends and best practices.</Check>
                  <Check>Strengthen existing relationships and build new ones.</Check>
                  <Check>Enhance your company's reputation and credibility.</Check>
                </ul>
              </div>
              <div>
                <h4 className="font-display font-semibold text-h3 text-ink">
                  Standard Exhibitor Package includes:
                </h4>
                <ul className="mt-4 flex flex-col gap-3">
                  <Check>Name and logo printed directly on the fascia of a 2 × 3 furnished exhibition stand.</Check>
                  <Check>Logo and profile (max 100 words) in the official event magazine (2,000 copies).</Check>
                  <Check>2 complimentary delegate passes + 50% discount on 2 additional delegate passes.</Check>
                  <Check>Access to all event functions including the A2M Matchmaking platform.</Check>
                </ul>
              </div>
            </FormatCard>
            <FormatCard id="explorers-village" img="/images/exhibit/explorers-village-zone.jpg" alt="Investors talking with exploration geologists beside core-sample displays in the Explorers' Village" eyebrow="Juniors & unlisted" title="Explorers' Village">
              <p className="text-lead text-muted">
                A high-visibility showcase for early-stage exploration companies, in front of international investors and deal-makers.
              </p>
              <p className="text-body text-muted leading-[1.7]">
                Forge Pathways to Growth: Connect, Showcase, and Partner at the Explorers' Village. The Explorers' Village at A2M is a gateway to transformative partnerships and growth in Africa's mining sector. This dynamic platform unites early-stage development and unlisted exploration companies with a curated audience of international investors, financiers, mining executives, and deal-makers, providing high-visibility exposure and targeted access to advance their projects.
              </p>
              <div>
                <h4 className="font-display font-semibold text-h3 text-ink">
                  Unlock Opportunities:
                </h4>
                <ul className="mt-4 flex flex-col gap-3">
                  <Check>High-visibility project showcase.</Check>
                  <Check>Direct access to global investors and partners.</Check>
                  <Check>Advance your assets with capital and expertise.</Check>
                </ul>
              </div>
              <div>
                <h4 className="font-display font-semibold text-h3 text-ink">
                  Explorers' Village package includes:
                </h4>
                <ul className="mt-4 flex flex-col gap-3">
                  <Check>1 × 1 m furnished exhibition booth.</Check>
                  <Check>Logo and profile (max 100 words) in the official event magazine (2,000 copies).</Check>
                  <Check>1 complimentary delegate pass.</Check>
                  <Check>Access to all event functions including the A2M Matchmaking platform.</Check>
                </ul>
              </div>
              <Callout>
                Limited spaces available under the Explorers' Village program. Connect with our team to join the next Explorers' Village.
              </Callout>
            </FormatCard>
          </div>
        </div>
      </section>
      <section id="why-sponsor" className="a2m-reveal scroll-mt-24 border-hairline border-t bg-surface/60 py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-20">
        <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-16">
            <div className="lg:sticky lg:top-[140px] lg:self-start">
              <span className="font-semibold text-[11px] text-copper uppercase tracking-[0.22em]">
                Sponsorship
              </span>
              <h2 className="mt-2 font-display font-bold tracking-[-0.01em] text-h2">
                Why Sponsor
              </h2>
              <p className="mt-4 text-lead text-muted">
                Sponsoring A2M 2027 is not a marketing expense: it is strategic positioning in the market that will define African mining for the next twenty years.
              </p>
              <p className="mt-4 text-body text-muted leading-[1.7]">
                The companies and institutions that sponsor A2M are not buying logo placement.

                They are buying something far more valuable:{' '}
                <span className="font-display font-medium text-lead text-copper leading-[1.6]">
                  Their association with the most significant political and commercial moment in Africa mining in a generation.
                </span>
              </p>
            </div>
            <div className="flex min-w-0 flex-col gap-10 lg:pt-8">
              <div>
                <h3 className="font-display font-semibold text-h3 text-ink">
                  The Audience You Cannot Reach Any Other Way
                </h3>
                <p className="mt-3 max-w-[760px] text-lead text-muted leading-[1.7]">
                  Every delegate at A2M 2027 is a decision-maker with a direct stake in African mining. They are not attendees. They are buyers, investors, ministers, operators and <br/> financiers - the exact people your business development team spends months trying to reach through cold outreach, conference networking and international roadshows.{' '}
                  <br/>
                  <em className="font-medium [font-family:var(--font-display)] text-copper">
                    As a sponsor, you do not chase them. You are already at the table when they arrive.
                  </em>
                </p>
                <details className="group mt-5">
                  <summary className="inline-flex w-fit cursor-pointer list-none items-center gap-2 rounded-sm border border-gold/50 px-4 py-2 font-semibold text-[12px] text-copper uppercase tracking-[0.08em] transition-colors hover:bg-gold hover:text-anthracite focus-visible:outline-2 focus-visible:outline-emerald-cta focus-visible:outline-offset-2 [&::-webkit-details-marker]:hidden">
                    <span className="group-open:hidden">Read more +</span>
                    <span className="hidden group-open:inline">Show less −</span>
                  </summary>
                  <p className="mt-4 max-w-[760px] text-lead text-muted leading-[1.7]">
                    A2M 2027 brings together an unparalleled audience: CEOs and CFOs of TSX, TSX-V, and other major securities-listed mining companies active in Africa; heads of natural resources banking and global investment banks; managing directors of African mining-focused private equity funds; portfolio managers from development finance institutions like FinDev Canada and the African Development Bank; and official delegations from over 30 African governments. This unique gathering won't be replicated anywhere else in North America — it's a one-time opportunity, here, for three days.
                  </p>
                </details>
              </div>
              <div>
                <h3 className="font-display font-semibold text-h3 text-ink">
                  Five Reasons to Sponsor A2M 2027
                </h3>
                <ol className="mt-6 flex flex-col">
                  {sponsorReasons.map((r, i) => (
                    <li key={r.title} className="grid gap-4 border-hairline border-t py-8 first:border-t-0 first:pt-0 sm:grid-cols-[96px_minmax(0,1fr)] sm:gap-8">
                      <span className="tnum font-display font-bold text-data-xl text-gold">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h4 className="font-display font-semibold text-h3 text-ink">{r.title}</h4>
                        <p className="mt-2 text-body text-muted leading-[1.7]">{r.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h3 className="font-display font-semibold text-h3 text-ink">
                  Who Should Sponsor A2M 2027?
                </h3>
                <p className="mt-3 max-w-[760px] text-lead text-muted leading-[1.7]">
                  A2M sponsorship is designed for organizations whose growth depends on the quality of their relationships in African mining — TSX, TSX-V, and other major securities-listed mining companies seeking government access and co-investment partners in Africa, banks and financial advisory firms with natural resources mandates, royalty and streaming companies sourcing new deals, development finance institutions deploying capital in African critical minerals, mining equipment and services companies targeting African operators and Canadian developers, and law firms and consultancies building Africa-focused practices.
                </p>
                <div className="mt-6 max-w-[760px]">
                  <Callout>
                    If your next three years of business development include Africa, your brand belongs at A2M 2027.
                  </Callout>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="sponsorship" className="a2m-motif relative scroll-mt-24 overflow-hidden bg-emerald-deep py-16 text-ivory sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-24">
        <div className="relative z-10 mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16">
          <div className="max-w-[760px]">
            <span className="font-semibold text-[11px] text-gold-light uppercase tracking-[0.22em]">
              Packages
            </span>
            <h2 className="mt-2 font-display font-bold tracking-[-0.01em] text-h2 text-ivory">
              Sponsorship Opportunities
            </h2>
            <p className="mt-4 text-lead text-champagne/90 leading-[1.7]">
              Platinum, Gold, Silver and Bronze partnerships are shaped around your objectives — from top-position branding and keynote speaking slots to premium exhibition booths and bundles of delegate passes. Every package is tailored to your goals and priced on request.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tiers.map((t) => (
              <div key={t.name} className="flex h-full flex-col overflow-hidden rounded-sm border border-ivory/15 bg-ivory/5 transition-colors duration-[250ms] ease-discret hover:border-gold/60">
                <span aria-hidden="true" className={`h-1.5 w-full ${t.bar}`} />
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <h3 className="font-display font-semibold text-h3 text-ivory">{t.name}</h3>
                  <p className="text-body text-champagne/80">{t.note}</p>
                  <p className="mt-auto pt-4 font-semibold text-[10px] text-champagne/60 uppercase tracking-[0.16em]">
                    Priced on request
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-start gap-4 rounded-sm border border-gold/40 bg-gold/10 p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[520px] text-body text-champagne/90">
              Customisable packages: our team will help you craft a tailored offer.
            </p>
            <Link className={`${btnGold} h-10 shrink-0 px-5 text-[11px]`} to="/en/about?interest=interestSponsorship#contact">
              Contact sales
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
