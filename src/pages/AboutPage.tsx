import ContactForm from '../components/ContactForm'
import OnThisPageNav from '../components/OnThisPageNav'
import Tabs from '../components/ui/Tabs'
import { Link } from 'react-router-dom'
import { AgendaSection, ConferenceThemesSection } from './programSections'

export default function AboutPage() {
  return (
    <>
  <div className="a2m-motif relative overflow-hidden border-hairline border-b bg-emerald-deep text-ivory">
    <img alt="" aria-hidden="true" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="100vw" srcSet="/images/home/unlocking.jpg 640w, /images/home/unlocking.jpg 750w, /images/home/unlocking.jpg 828w, /images/home/unlocking.jpg 1080w, /images/home/unlocking.jpg 1200w, /images/home/unlocking.jpg 1920w, /images/home/unlocking.jpg 2048w, /images/home/unlocking.jpg 3840w" src="/images/home/unlocking.jpg" />
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
                A2M 2027
              </span>
            </li>
          </ol>
        </nav>
      </div>
      <span className="font-semibold text-[11px] text-gold uppercase tracking-[0.26em] [text-shadow:0_1px_10px_rgba(3,20,16,0.55)]">
        Overview
      </span>
      <h1 className="mt-3 max-w-[760px] font-bold text-[1.7rem] text-ivory leading-[1.15] tracking-[-0.005em] [font-family:var(--font-display)] [text-shadow:0_2px_20px_rgba(3,20,16,0.55)] sm:text-[2.4rem] sm:leading-[1.1] lg:text-[2.75rem]">
        Where Africa's mining future
        <span className="text-gold">
          meets Canadian capital
        </span>
      </h1>
      <span className="mt-5 block h-0.5 w-10 rounded-full bg-gold" aria-hidden="true" />
      <p className="mt-4 max-w-[640px] text-champagne/90 text-lead [text-shadow:0_1px_14px_rgba(3,20,16,0.6)]">
        The conference, its governance and its commitment to a responsible mining sector.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-ivory/15 border-t pt-6 lg:mt-12">
        <div className="flex items-center gap-2.5">
          <div>
            <p className="font-semibold text-[10px] text-champagne/85 uppercase tracking-[0.16em]">
              Dates
            </p>
            <p className="font-display font-semibold text-[14px] text-ivory leading-tight">
              June 7–9, 2027
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <div>
            <p className="font-semibold text-[10px] text-champagne/85 uppercase tracking-[0.16em]">
              Venue
            </p>
            <p className="font-display font-semibold text-[14px] text-ivory leading-tight">
              Centre Mont-Royal, Montréal
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <div>
            <p className="font-semibold text-[10px] text-champagne/85 uppercase tracking-[0.16em]">
              Honorary Country
            </p>
            <p className="font-display font-semibold text-[14px] text-ivory leading-tight">
              Côte d'Ivoire
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <OnThisPageNav
    items={[
      { id: "conference", label: "A2M 2027" },
      { id: "sessions", label: "Conference Themes" },
      { id: "schedule", label: "Agenda" },
      { id: "why-participate", label: "Why Participate?" },
      { id: "strategic-partners", label: "Institutional Endorsements" },
      { id: "advisory-board", label: "Advisory Board" },
      { id: "meet-the-team", label: "Meet the Team" },
      { id: "sustainability", label: "Sustainability" },
      { id: "contact", label: "Contact Us" },
    ]}
  />
  <section id="conference" className="a2m-reveal scroll-mt-24 py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-16">
    <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16">
      <h2 className="font-display font-bold tracking-[-0.01em] text-h2">
        A2M 2027
      </h2>
      <div className="mt-8">
        <div className="flex flex-col gap-6">
          <p className="max-w-[760px] text-lead text-muted">
            A2M 2027 — African Mining in Montreal is the first North American platform dedicated exclusively to investment, deal-making and high-level political dialogue between Canada and Africa in the mining and critical minerals sector.
          </p>
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-sm border border-hairline bg-card p-5 shadow-card">
                <span className="tnum block font-display font-bold text-data-xl text-emerald-deep">
                  30%
                </span>
                <span className="mt-1 block text-small text-muted">
                  of global mineral reserves
                </span>
              </div>
              <div className="rounded-sm border border-hairline bg-card p-5 shadow-card">
                <span className="tnum block font-display font-bold text-data-xl text-emerald-deep">
                  45B+
                </span>
                <span className="mt-1 block text-small text-muted">
                  Canadian investments
                </span>
              </div>
              <div className="rounded-sm border border-hairline bg-card p-5 shadow-card">
                <span className="tnum block font-display font-bold text-data-xl text-emerald-deep">
                  120+
                </span>
                <span className="mt-1 block text-small text-muted">
                  TSX-listed companies active
                </span>
              </div>
              <div className="rounded-sm border border-hairline bg-card p-5 shadow-card">
                <span className="tnum block font-display font-bold text-data-xl text-emerald-deep">
                  30+
                </span>
                <span className="mt-1 block text-small text-muted">
                  African mining countries
                </span>
              </div>
            </div>
            <h3 className="max-w-[760px] font-display font-semibold text-h3 text-ink">
              Who We Are
            </h3>
            <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
              A2M 2027 is a purpose-built platform for a specific relationship: connecting a continent that holds 30% of the world's critical minerals with a country whose companies, capital markets, and technical expertise are among the best in the world at transforming mineral resources into producing assets.
            </p>
            <h3 className="max-w-[760px] font-display font-semibold text-h3 text-ink">
              Where Africa's Mining Ecosystem Converges
            </h3>
            <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
              A2M 2027 will take place June 7–9, 2027, at the Centre Mont-Royal in Montréal, preceded by a high-level closed diplomatic session on June 6, 2027, at the Fairmont Reine Elizabeth.
            </p>
            <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
              The event brings together the key decision-makers who shape the Canada-Africa mining relationship:
            </p>
            <ul className="flex max-w-[760px] flex-col gap-3">
              <li className="flex items-start gap-3 text-body text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>
                  Executives of TSX-listed mining companies active across Africa
                </span>
              </li>
              <li className="flex items-start gap-3 text-body text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>
                  Portfolio managers from development finance institutions
                </span>
              </li>
              <li className="flex items-start gap-3 text-body text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>
                  African ministers responsible for mining policy, licensing, and fiscal terms
                </span>
              </li>
              <li className="flex items-start gap-3 text-body text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>
                  Institutional investors and capital providers
                </span>
              </li>
              <li className="flex items-start gap-3 text-body text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>
                  Leading engineering, technical, and service providers
                </span>
              </li>
              <li className="flex items-start gap-3 text-body text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>
                  Downstream buyers driving demand for critical minerals
                </span>
              </li>
            </ul>
            <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
              <em className="font-medium [font-family:var(--font-display)] text-copper">
                Montréal is the ideal host city.
              </em>
              It is home to a vibrant bilingual business community that naturally bridges Canada and Africa, and North America's leading destination for international association congresses. Nowhere else offers the institutional depth, credibility, and convening power required for this event.
            </p>
            <h3 className="max-w-[760px] font-display font-semibold text-h3 text-ink">
              Our Vision
            </h3>
            <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
              A future in which the partnership between Canada and Africa in the mining sector is defined by
              <em className="font-medium [font-family:var(--font-display)] text-copper">
                equity, transparency, mutual respect, and shared prosperity
              </em>
              — where Canada's capital, expertise, and standards meet Africa's extraordinary mineral endowment to deliver durable, inclusive development on both sides of the Atlantic.
            </p>
            <div className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
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
                      Equity
                    </p>
                    <p className="mt-1 text-muted text-small">
                      Win-win partnerships, negotiated as equals.
                    </p>
                  </div>
                </div>
              </div>
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
                      Transparency
                    </p>
                    <p className="mt-1 text-muted text-small">
                      Clear rules, measured and published outcomes.
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
                      Shared prosperity
                    </p>
                    <p className="mt-1 text-muted text-small">
                      Lasting value on both sides of the Atlantic.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex max-w-[760px] flex-col gap-4">
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
                    We stand at a historic inflection point. The African Continental Free Trade Area (AfCFTA) has given African governments a powerful collective framework for negotiation. The global race for critical minerals has dramatically increased their leverage. And Canada's Africa Strategy, launched in March 2025, has provided the clearest political signal in decades that the Canadian government is ready to support responsible, long-term investment.
                  </p>
                  <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                    A2M 2027 exists to ensure both regions seize this moment, building a partnership rooted in the values they share, not just the historical asymmetries they inherited.
                  </p>
                </div>
              </details>
            </div>
            <h3 className="max-w-[760px] font-display font-semibold text-h3 text-ink">
              Our Mission
            </h3>
            <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
              A2M's mission is to create the trusted platform where Canada-Africa mining deals get done and Canada-Africa mining policy gets shaped — year after year, with growing depth and impact.
            </p>
            <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
              We achieve this through four core commitments:
            </p>
            <Tabs
              wrapperClassName="flex max-w-[860px] flex-col gap-6"
              listWrapperClassName="relative"
              listPreamble={(
                <>
                  <div aria-hidden="true" className="absolute top-7 left-[12%] hidden h-0.5 right-[12%] bg-gold/55 sm:block" />
                  <div aria-hidden="true" className="absolute top-4 bottom-4 left-7 w-0.5 bg-gold/40 sm:hidden" />
                  </>
              )}
              listAriaLabel="Mission"
              listClassName="relative grid grid-cols-1 gap-5 sm:gap-3 sm:grid-cols-4"
              triggerClassActive="group flex items-center gap-4 text-left sm:flex-col sm:items-center sm:gap-0 sm:text-center"
              triggerClassInactive="group flex items-center gap-4 text-left sm:flex-col sm:items-center sm:gap-0 sm:text-center"
              panelClassName="animate-fade-in rounded-sm border border-hairline border-l-2 border-l-gold bg-card p-6 shadow-card"
              tabs={[
                {
                  triggerActive: (
                    <>
                      <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full border-2 bg-emerald-deep transition-all duration-300 border-gold shadow-gold">
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-6 text-gold">
                          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
                            <path d="M14 12a6 6 0 1 1-6-6" />
                            <path d="M10 12a6 6 0 1 1 6 6" />
                          </g>
                        </svg>
                      </span>
                      <span className="sm:mt-3">
                        <span className="block font-semibold text-[11px] tracking-[0.14em] transition-colors text-copper">
                          01
                        </span>
                        <span className="mt-0.5 block font-display font-semibold text-[15px] leading-snug transition-colors text-emerald-cta">
                          We Connect
                        </span>
                      </span>
                    </>
                  ),
                  triggerInactive: (
                    <>
                      <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full border-2 bg-emerald-deep transition-all duration-300 border-gold/40 group-hover:border-gold/80">
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-6 text-gold">
                          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
                            <path d="M14 12a6 6 0 1 1-6-6" />
                            <path d="M10 12a6 6 0 1 1 6 6" />
                          </g>
                        </svg>
                      </span>
                      <span className="sm:mt-3">
                        <span className="block font-semibold text-[11px] tracking-[0.14em] transition-colors text-copper">
                          01
                        </span>
                        <span className="mt-0.5 block font-display font-semibold text-[15px] leading-snug transition-colors text-emerald-cta">
                          We Connect
                        </span>
                      </span>
                    </>
                  ),
                  panel: (
                    <>
                      <p className="font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
                        01
                        —
                        We Connect
                      </p>
                      <p className="mt-2 text-body text-muted">
                        We identify precisely who needs to meet: TSX-listed explorers and developers seeking finance, African mining ministers with attractive licensing opportunities, royalty companies offering smart capital solutions, and strategic investors. Then we engineer the right moments and settings for those conversations to happen.
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
                          02
                        </span>
                        <span className="mt-0.5 block font-display font-semibold text-[15px] leading-snug transition-colors text-ink group-hover:text-emerald-cta">
                          We Facilitate
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
                          02
                        </span>
                        <span className="mt-0.5 block font-display font-semibold text-[15px] leading-snug transition-colors text-ink group-hover:text-emerald-cta">
                          We Facilitate
                        </span>
                      </span>
                    </>
                  ),
                  panel: (
                    <>
                      <p className="font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
                        02
                        —
                        We Facilitate
                      </p>
                      <p className="mt-2 text-body text-muted">
                        Connection without structure creates noise. Every element of the A2M program — session formats, roundtables, deal rooms, and facilitated interactions — is engineered to move conversations rapidly from introduction to concrete negotiation. We focus relentlessly on outcomes: What does each participant need to hear and who do they need to meet to leave A2M with tangible next steps?
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
                            <path strokeLinecap="round" d="M22 22H2" />
                            <path d="M17 22V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v16m14 0V11.5c0-1.405 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C19.607 8 18.904 8 17.5 8M3 22V11.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C4.393 8 5.096 8 6.5 8" />
                            <path strokeLinecap="round" d="M12 22v-3M10 5h4m-4 3h4m-4 3h4m-4 3h4" />
                          </g>
                        </svg>
                      </span>
                      <span className="sm:mt-3">
                        <span className="block font-semibold text-[11px] tracking-[0.14em] transition-colors text-taupe">
                          03
                        </span>
                        <span className="mt-0.5 block font-display font-semibold text-[15px] leading-snug transition-colors text-ink group-hover:text-emerald-cta">
                          We Legitimise
                        </span>
                      </span>
                    </>
                  ),
                  triggerInactive: (
                    <>
                      <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full border-2 bg-emerald-deep transition-all duration-300 border-gold/40 group-hover:border-gold/80">
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-6 text-champagne/80">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" d="M22 22H2" />
                            <path d="M17 22V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v16m14 0V11.5c0-1.405 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C19.607 8 18.904 8 17.5 8M3 22V11.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C4.393 8 5.096 8 6.5 8" />
                            <path strokeLinecap="round" d="M12 22v-3M10 5h4m-4 3h4m-4 3h4m-4 3h4" />
                          </g>
                        </svg>
                      </span>
                      <span className="sm:mt-3">
                        <span className="block font-semibold text-[11px] tracking-[0.14em] transition-colors text-taupe">
                          03
                        </span>
                        <span className="mt-0.5 block font-display font-semibold text-[15px] leading-snug transition-colors text-ink group-hover:text-emerald-cta">
                          We Legitimise
                        </span>
                      </span>
                    </>
                  ),
                  panel: (
                    <>
                      <p className="font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
                        03
                        —
                        We Legitimise
                      </p>
                      <p className="mt-2 text-body text-muted">
                        Commercial success requires political enablement. The Ministerial Roundtable and diplomatic engagements at A2M 2027 create the high-level policy alignment that gives confidence to investors and operators. Political dialogue is not a side event — it is the foundation for sustainable deal flow.
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
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 22h18" />
                            <path d="M3 11c0-.943 0-1.414.293-1.707S4.057 9 5 9s1.414 0 1.707.293S7 10.057 7 11v6c0 .943 0 1.414-.293 1.707S5.943 19 5 19s-1.414 0-1.707-.293S3 17.943 3 17zm7-4c0-.943 0-1.414.293-1.707S11.057 5 12 5s1.414 0 1.707.293S14 6.057 14 7v10c0 .943 0 1.414-.293 1.707S12.943 19 12 19s-1.414 0-1.707-.293S10 17.943 10 17zm7-3c0-.943 0-1.414.293-1.707S18.057 2 19 2s1.414 0 1.707.293S21 3.057 21 4v13c0 .943 0 1.414-.293 1.707S19.943 19 19 19s-1.414 0-1.707-.293S17 17.943 17 17z" />
                          </g>
                        </svg>
                      </span>
                      <span className="sm:mt-3">
                        <span className="block font-semibold text-[11px] tracking-[0.14em] transition-colors text-taupe">
                          04
                        </span>
                        <span className="mt-0.5 block font-display font-semibold text-[15px] leading-snug transition-colors text-ink group-hover:text-emerald-cta">
                          We Build Continuity
                        </span>
                      </span>
                    </>
                  ),
                  triggerInactive: (
                    <>
                      <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full border-2 bg-emerald-deep transition-all duration-300 border-gold/40 group-hover:border-gold/80">
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-6 text-champagne/80">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 22h18" />
                            <path d="M3 11c0-.943 0-1.414.293-1.707S4.057 9 5 9s1.414 0 1.707.293S7 10.057 7 11v6c0 .943 0 1.414-.293 1.707S5.943 19 5 19s-1.414 0-1.707-.293S3 17.943 3 17zm7-4c0-.943 0-1.414.293-1.707S11.057 5 12 5s1.414 0 1.707.293S14 6.057 14 7v10c0 .943 0 1.414-.293 1.707S12.943 19 12 19s-1.414 0-1.707-.293S10 17.943 10 17zm7-3c0-.943 0-1.414.293-1.707S18.057 2 19 2s1.414 0 1.707.293S21 3.057 21 4v13c0 .943 0 1.414-.293 1.707S19.943 19 19 19s-1.414 0-1.707-.293S17 17.943 17 17z" />
                          </g>
                        </svg>
                      </span>
                      <span className="sm:mt-3">
                        <span className="block font-semibold text-[11px] tracking-[0.14em] transition-colors text-taupe">
                          04
                        </span>
                        <span className="mt-0.5 block font-display font-semibold text-[15px] leading-snug transition-colors text-ink group-hover:text-emerald-cta">
                          We Build Continuity
                        </span>
                      </span>
                    </>
                  ),
                  panel: (
                    <>
                      <p className="font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
                        04
                        —
                        We Build Continuity
                      </p>
                      <p className="mt-2 text-body text-muted">
                        A single deal is a moment. A true partnership is a trajectory. A2M is designed as an enduring platform: tracking projects showcased in the Investment Showcase, reporting on progress one year later, measuring policy outcomes, and continuously adapting the event to emerging opportunities and challenges.
                      </p>
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
  <ConferenceThemesSection />
  <AgendaSection />
  <section id="why-participate" className="a2m-reveal scroll-mt-24 py-16 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-20">
    <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16">
      <div className="flex items-center gap-5">
        <h2 className="font-display font-bold tracking-[-0.01em] text-h2">
          Why Participate?
        </h2>
        <span aria-hidden="true" className="hidden h-px flex-1 bg-hairline sm:block" />
      </div>
      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
            Every delegate has a precise reason to be in Montreal. Whatever your profile, A2M offers direct access to the decision-makers, capital and opportunities of the African mining sector.
          </p>
          <p className="max-w-[760px] border-gold border-l-2 pl-5 font-medium text-[1.2rem] text-ink leading-relaxed [font-family:var(--font-display)] sm:text-[1.3rem]">
            A2M 2027 exists because
            <em className="font-medium [font-family:var(--font-display)] text-copper">
              the most important conversations in African mining are still taking place in the wrong rooms
            </em>
            : bilateral embassy meetings that never reach the right companies, fleeting hallway exchanges at major conferences where African ministers go unmet, and investment committees that dismiss African projects they never truly understood.
          </p>
        </div>
        <div className="flex flex-col gap-5 lg:col-span-5">
          <p className="text-lead text-muted leading-[1.7]">
            Over three focused days at the Centre Mont-Royal in Montréal, we bring every key decision-maker into the same room — and equip them with the tools to do serious business.
          </p>
          <p className="rounded-sm border-l-2 border-l-gold bg-surface px-6 py-5 text-lead text-muted leading-[1.7]">
            Every seat at A2M 2027 represents a decision.
            <em className="font-medium [font-family:var(--font-display)] text-copper">
              The mining deals will be made. The only question is whether your organization will be part of them.
            </em>
          </p>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        <article className="group flex h-full flex-col rounded-sm border border-hairline bg-card p-6 shadow-card transition-all duration-[250ms] ease-discret hover:-translate-y-1 hover:border-gold hover:shadow-card-hover sm:p-7">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="tnum font-display font-bold text-[1.4rem] leading-none text-gold">01</span>
            <span aria-hidden="true" className="h-px flex-1 bg-hairline transition-colors duration-[250ms] ease-discret group-hover:bg-gold/50" />
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-sm bg-mist text-emerald-cta transition-colors duration-[250ms] ease-discret group-hover:bg-gold/10">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                        <path strokeLinecap="round" d="M22 12s-.993.89-2.979 1.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12 2 12m20 4s-.993.89-2.979 1.685l-2.808 1.124C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.891 2 16 2 16" />
                      </g>
                    </svg>
            </span>
          </div>
          <h3 id="majors" className="mt-4 scroll-mt-24 font-display font-semibold text-h3 text-ink transition-colors duration-[250ms] ease-discret group-hover:text-emerald-cta sm:scroll-mt-32 lg:scroll-mt-[205px]">
            Majors & mid-tier
          </h3>
          <p className="mt-2 text-body text-muted">
            Your African operations run on relationships — manage them at the highest level (ministers, DFIs, regulatory intelligence).
          </p>
        </article>
        <article className="group flex h-full flex-col rounded-sm border border-hairline bg-card p-6 shadow-card transition-all duration-[250ms] ease-discret hover:-translate-y-1 hover:border-gold hover:shadow-card-hover sm:p-7">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="tnum font-display font-bold text-[1.4rem] leading-none text-gold">02</span>
            <span aria-hidden="true" className="h-px flex-1 bg-hairline transition-colors duration-[250ms] ease-discret group-hover:bg-gold/50" />
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-sm bg-mist text-emerald-cta transition-colors duration-[250ms] ease-discret group-hover:bg-gold/10">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                        <path d="M13.024 14.56c-2.31.924-3.465 1.386-4.124.938a1.5 1.5 0 0 1-.398-.398c-.448-.66.014-1.814.938-4.124c.197-.493.295-.74.465-.933q.065-.074.139-.138c.193-.17.44-.268.932-.465c2.31-.924 3.464-1.386 4.124-.938a1.5 1.5 0 0 1 .398.398c.448.66-.014 1.814-.938 4.124c-.197.493-.296.739-.465.932a2 2 0 0 1-.139.139c-.193.17-.44.268-.932.465Z" />
                      </g>
                    </svg>
            </span>
          </div>
          <h3 id="juniors" className="mt-4 scroll-mt-24 font-display font-semibold text-h3 text-ink transition-colors duration-[250ms] ease-discret group-hover:text-emerald-cta sm:scroll-mt-32 lg:scroll-mt-[205px]">
            Juniors & exploration
          </h3>
          <p className="mt-2 text-body text-muted">
            Investment Showcase, Capital Markets Lounge and a Deal Flow Package shared with 40+ qualified investors before the event.
          </p>
        </article>
        <article className="group flex h-full flex-col rounded-sm border border-hairline bg-card p-6 shadow-card transition-all duration-[250ms] ease-discret hover:-translate-y-1 hover:border-gold hover:shadow-card-hover sm:p-7">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="tnum font-display font-bold text-[1.4rem] leading-none text-gold">03</span>
            <span aria-hidden="true" className="h-px flex-1 bg-hairline transition-colors duration-[250ms] ease-discret group-hover:bg-gold/50" />
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-sm bg-mist text-emerald-cta transition-colors duration-[250ms] ease-discret group-hover:bg-gold/10">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 11c0-2.828 0-4.243.879-5.121C3.757 5 5.172 5 8 5h5c2.828 0 4.243 0 5.121.879C19 6.757 19 8.172 19 11s0 4.243-.879 5.121C17.243 17 15.828 17 13 17H8c-2.828 0-4.243 0-5.121-.879C2 15.243 2 13.828 2 11Z" />
                        <path d="M19 8.076c.975.096 1.631.313 2.121.803c.88.878.88 2.293.88 5.121s0 4.243-.88 5.121c-.878.88-2.293.88-5.12.88h-5c-2.83 0-4.244 0-5.122-.88c-.49-.49-.707-1.146-.803-2.121" />
                        <path d="M13 11a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z" />
                        <path strokeLinecap="round" d="M16 13V9M5 13V9" />
                      </g>
                    </svg>
            </span>
          </div>
          <h3 id="investors" className="mt-4 scroll-mt-24 font-display font-semibold text-h3 text-ink transition-colors duration-[250ms] ease-discret group-hover:text-emerald-cta sm:scroll-mt-32 lg:scroll-mt-[205px]">
            Investors & DFIs
          </h3>
          <p className="mt-2 text-body text-muted">
            Pre-screened projects, closed-door Investors' Breakfast and complimentary registration for qualified investors.
          </p>
        </article>
        <article className="group flex h-full flex-col rounded-sm border border-hairline bg-card p-6 shadow-card transition-all duration-[250ms] ease-discret hover:-translate-y-1 hover:border-gold hover:shadow-card-hover sm:p-7">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="tnum font-display font-bold text-[1.4rem] leading-none text-gold">04</span>
            <span aria-hidden="true" className="h-px flex-1 bg-hairline transition-colors duration-[250ms] ease-discret group-hover:bg-gold/50" />
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-sm bg-mist text-emerald-cta transition-colors duration-[250ms] ease-discret group-hover:bg-gold/10">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 10c0-1.414 0-2.121.44-2.56C7.878 7 8.585 7 10 7h4c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v4c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-4c-1.414 0-2.121 0-2.56-.44C7 16.122 7 15.415 7 14z" />
                        <path d="M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12Z" />
                        <path strokeLinecap="round" d="M4 12H2m20 0h-2M4 9H2m20 0h-2M4 15H2m20 0h-2m-8 5v2m0-20v2M9 20v2M9 2v2m6 16v2m0-20v2" />
                      </g>
                    </svg>
            </span>
          </div>
          <h3 id="services" className="mt-4 scroll-mt-24 font-display font-semibold text-h3 text-ink transition-colors duration-[250ms] ease-discret group-hover:text-emerald-cta sm:scroll-mt-32 lg:scroll-mt-[205px]">
            Service providers & tech
          </h3>
          <p className="mt-2 text-body text-muted">
            The contracts that will fund your Africa growth are awarded here: targeted meetings and a stand at the heart of the flow.
          </p>
        </article>
        <article className="group flex h-full flex-col rounded-sm border border-hairline bg-card p-6 shadow-card transition-all duration-[250ms] ease-discret hover:-translate-y-1 hover:border-gold hover:shadow-card-hover sm:p-7">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="tnum font-display font-bold text-[1.4rem] leading-none text-gold">05</span>
            <span aria-hidden="true" className="h-px flex-1 bg-hairline transition-colors duration-[250ms] ease-discret group-hover:bg-gold/50" />
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-sm bg-mist text-emerald-cta transition-colors duration-[250ms] ease-discret group-hover:bg-gold/10">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" d="M22 22H2" />
                        <path d="M17 22V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v16m14 0V11.5c0-1.405 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C19.607 8 18.904 8 17.5 8M3 22V11.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C4.393 8 5.096 8 6.5 8" />
                        <path strokeLinecap="round" d="M12 22v-3M10 5h4m-4 3h4m-4 3h4m-4 3h4" />
                      </g>
                    </svg>
            </span>
          </div>
          <h3 id="governments" className="mt-4 scroll-mt-24 font-display font-semibold text-h3 text-ink transition-colors duration-[250ms] ease-discret group-hover:text-emerald-cta sm:scroll-mt-32 lg:scroll-mt-[205px]">
            Governments & ministries
          </h3>
          <p className="mt-2 text-body text-muted">
            Meet the TSX executives with your country on their shortlist and become a founding member of the Canada-Africa framework.
          </p>
        </article>
        <article className="group flex h-full flex-col rounded-sm border border-hairline bg-card p-6 shadow-card transition-all duration-[250ms] ease-discret hover:-translate-y-1 hover:border-gold hover:shadow-card-hover sm:p-7">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="tnum font-display font-bold text-[1.4rem] leading-none text-gold">06</span>
            <span aria-hidden="true" className="h-px flex-1 bg-hairline transition-colors duration-[250ms] ease-discret group-hover:bg-gold/50" />
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-sm bg-mist text-emerald-cta transition-colors duration-[250ms] ease-discret group-hover:bg-gold/10">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-5">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m15.578 3.382l2 1.05c2.151 1.129 3.227 1.693 3.825 2.708C22 8.154 22 9.417 22 11.942v.117c0 2.524 0 3.787-.597 4.801c-.598 1.015-1.674 1.58-3.825 2.709l-2 1.049C13.822 21.539 12.944 22 12 22s-1.822-.46-3.578-1.382l-2-1.05c-2.151-1.129-3.227-1.693-3.825-2.708C2 15.846 2 14.583 2 12.06v-.117c0-2.525 0-3.788.597-4.802c.598-1.015 1.674-1.58 3.825-2.708l2-1.05C10.178 2.461 11.056 2 12 2s1.822.46 3.578 1.382ZM21 7.5L12 12m0 0L3 7.5m9 4.5v9.5" />
              </svg>
            </span>
          </div>
          <h3 id="buyers" className="mt-4 scroll-mt-24 font-display font-semibold text-h3 text-ink transition-colors duration-[250ms] ease-discret group-hover:text-emerald-cta sm:scroll-mt-32 lg:scroll-mt-[205px]">
            Buyers & traders
          </h3>
          <p className="mt-2 text-body text-muted">
            Assemble all three parties to an offtake negotiation in one place, at one time.
          </p>
        </article>
      </div>
      <div className="mt-16 flex items-center gap-5 lg:mt-20">
        <h3 className="font-display font-semibold text-h3 text-ink">
          Your profile in detail
        </h3>
        <span aria-hidden="true" className="hidden h-px flex-1 bg-hairline sm:block" />
      </div>
      <Tabs
        wrapperClassName="mt-8 grid grid-cols-1 items-start gap-6 lg:grid-cols-[320px_1fr] lg:gap-10"
        listAriaOrientation="vertical"
        listClassName="flex flex-col gap-1.5"
        triggerClassActive="flex items-start gap-3.5 border-l-[3px] px-4 py-3.5 text-left transition-colors duration-[250ms] ease-discret border-l-gold bg-mist/60"
        triggerClassInactive="flex items-start gap-3.5 border-l-[3px] px-4 py-3.5 text-left transition-colors duration-[250ms] ease-discret border-l-transparent hover:border-l-gold/40 hover:bg-mist/30"
        panelClassName="animate-fade-in rounded-sm border border-hairline bg-card p-6 shadow-card sm:p-8"
        panelContainerClassName="min-w-0"
              tabs={[
                {
                  triggerActive: (
                    <>
                      <span className="tnum pt-1 font-display font-bold text-[15px] leading-none text-gold">
                        01
                      </span>
                      <span className="font-display font-semibold text-[14px] leading-snug text-emerald-cta">
                        Major & mid-tier mining companies
                      </span>
                    </>
                  ),
                  triggerInactive: (
                    <>
                      <span className="tnum pt-1 font-display font-bold text-[15px] leading-none text-taupe">
                        01
                      </span>
                      <span className="font-display font-semibold text-[14px] leading-snug text-ink">
                        Major & mid-tier mining companies
                      </span>
                    </>
                  ),
                  panel: (
                    <>
                      <p className="font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
                        01
                        —
                        Major & mid-tier mining companies
                      </p>
                      <div className="mt-4 flex flex-col gap-6">
                        <div className="flex flex-col gap-6">
                          <div className="max-w-[760px] rounded-sm border-l-2 border-l-gold bg-surface px-6 py-5">
                            <p className="text-body text-muted">
                              Your African operations run on relationships. A2M is where you manage them at the highest level.
                            </p>
                          </div>
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            As a major or mid-tier mining company operating in Africa, you have already made the most consequential decisions: the asset, the country and the capital structure. What determines whether those decisions generate long-term value is everything that comes after: the quality of your government relations, the stability of your licence, the depth of your community engagement, and your ability to position your company as the partner of choice when the next strategic opportunity emerges in your operating region.
                          </p>
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            All of those outcomes depend on relationships. And the most important relationships in African mining with ministers, with national company directors, with the institutions that co-finance large capital projects are not managed in boardrooms. They are managed in moments of proximity. A2M 2027 creates thirty of those moments simultaneously, over three days, in Montréal.
                          </p>
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            For your government affairs team, A2M is the most efficient ministerial engagement event outside the continent. Thirty African Mining Ministers in one building, available for bilateral meetings coordinated through the A2M protocol team. A Ministerial Roundtable that produces a concrete political outcome, gives your government relations conversations a shared framework that extends the value of those meetings well beyond the event itself.
                          </p>
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            For your corporate development team, A2M is deal origination at scale. The Investment Showcase exposes your team to pre-screened development-stage projects in jurisdictions adjacent to or overlapping with your existing portfolio. The Capital Markets Lounge gives you a private space to move those conversations from introductory to substantive without leaving the building. And the co-investment opportunities generated by the DFI and institutional investor presence at A2M are directly relevant to the large capital requirements of your growth projects.
                          </p>
                          <h3 className="max-w-[760px] font-display font-semibold text-h3 text-ink">
                            What you will leave with
                          </h3>
                          <ul className="flex max-w-[760px] flex-col gap-3">
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Bilateral meetings with Mining Ministers of your operating countries
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Co-investment introductions from DFIs active in your regions
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Market intelligence on regulatory direction across African priority mining jurisdictions
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Brand visibility as a committed long-term partner of African mining development.
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
                      <span className="tnum pt-1 font-display font-bold text-[15px] leading-none text-gold">
                        02
                      </span>
                      <span className="font-display font-semibold text-[14px] leading-snug text-emerald-cta">
                        Junior mining & exploration companies
                      </span>
                    </>
                  ),
                  triggerInactive: (
                    <>
                      <span className="tnum pt-1 font-display font-bold text-[15px] leading-none text-taupe">
                        02
                      </span>
                      <span className="font-display font-semibold text-[14px] leading-snug text-ink">
                        Junior mining & exploration companies
                      </span>
                    </>
                  ),
                  panel: (
                    <>
                      <p className="font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
                        02
                        —
                        Junior mining & exploration companies
                      </p>
                      <div className="mt-4 flex flex-col gap-6">
                        <div className="flex flex-col gap-6">
                          <div className="max-w-[760px] rounded-sm border-l-2 border-l-gold bg-surface px-6 py-5">
                            <p className="text-body text-muted">
                              One week of roadshows will not raise your round. Three days at A2M might.
                            </p>
                          </div>
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            If your company is exploring or developing in Africa, you are solving the same problem every junior faces: too many conversations needed, too few of the right people in the room at the same time, and a capital-raise calendar that never quite aligns with the moment when your technical story is strongest. A2M 2027 is designed to solve that problem directly.
                          </p>
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            The Investment Showcase is your platform. The African projects selected through a rigorous screening process for technical credibility and investment readiness, are presented in front of institutional investors, royalty companies, streaming firms and bank natural resource desks that are actively deploying capital in African mining. For a junior at pre-feasibility or feasibility stage, this is an audience you cannot assemble on your own, in a setting that signals third-party validation before you say a word.
                          </p>
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            But A2M is not just about the pitch. It is about what happens after. The Capital Markets Lounge gives you private 30-minute sessions with the investors who showed interest during your presentation, the same day, without losing momentum to travel logistics. A2M Networking App ensures that every investor who has pre-loaded your deal into their meeting agenda is confirmed and sitting across from you before you leave Montréal. And the Deal Flow Package, distributed to all registered investors weeks before the event, puts your project summary in front of forty qualified investors before they board their flight.
                          </p>
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            For your government relations, A2M gives junior companies access that their budget and headcount could never generate independently. The delegations of the African countries where you operate are in the same building. A 20-minute conversation with key executives of your host country's mining ministry — facilitated by the A2M protocol team — can move a permitting conversation faster than months of in-country follow-up.
                          </p>
                          <h3 className="max-w-[760px] font-display font-semibold text-h3 text-ink">
                            What you will leave with
                          </h3>
                          <ul className="flex max-w-[760px] flex-col gap-3">
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Confirmed follow-up meetings with institutional investors, royalty companies and DFIs who have seen your project
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Direct introductions to potential co-development partners and offtake buyers
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Government relations contacts in your operating jurisdiction
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Media coverage through the event's accredited press corps
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                A validated investment narrative built on the credibility of the A2M platform.
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
                      <span className="tnum pt-1 font-display font-bold text-[15px] leading-none text-gold">
                        03
                      </span>
                      <span className="font-display font-semibold text-[14px] leading-snug text-emerald-cta">
                        Investors, banks & development finance institutions
                      </span>
                    </>
                  ),
                  triggerInactive: (
                    <>
                      <span className="tnum pt-1 font-display font-bold text-[15px] leading-none text-taupe">
                        03
                      </span>
                      <span className="font-display font-semibold text-[14px] leading-snug text-ink">
                        Investors, banks & development finance institutions
                      </span>
                    </>
                  ),
                  panel: (
                    <>
                      <p className="font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
                        03
                        —
                        Investors, banks & development finance institutions
                      </p>
                      <div className="mt-4 flex flex-col gap-6">
                        <div className="flex flex-col gap-6">
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            The challenge in African mining investment is not finding projects. It is finding projects where the technical story is credible, the government is genuinely supportive, the ESG profile is defensible under institutional scrutiny, and the capital structure can absorb the risk at a return that makes sense. Most African mining deal flow fails on at least one of these dimensions before it reaches your investment committee. A2M 2027 is designed to change that.
                          </p>
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            The projects in the A2M Investment Showcase are selected specifically for bankability and government endorsement. They are not self-nominated. They are screened by the A2M program committee against a documented set of investment-readiness criteria, and their presence at the event carries the implicit endorsement of their host governments. For your investment team, this pre-screening compresses the first stage of due diligence into a single event.
                          </p>
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            The Investors' Breakfast Sessions are the centrepiece of the A2M investor program. Only qualified institutions in the room — no project promoters, no mining operators — in a closed session for ninety minutes. Each institution presents its mandate in two minutes. Co-investment synergies are mapped. Capital Markets Lounge slots are pre-allocated. The deals that get structured over the following two days begin in that room. For DFIs with annual deployment targets, institutional investors managing natural resource mandates, and royalty companies with active deal teams, this session alone justifies the registration.
                          </p>
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            All qualified investors attend A2M 2027 on a complimentary basis.
                          </p>
                          <h3 className="max-w-[760px] font-display font-semibold text-h3 text-ink">
                            What you will leave with
                          </h3>
                          <ul className="flex max-w-[760px] flex-col gap-3">
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                A curated pipeline of screened projects with direct access to project holders
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Forty co-investor relationships with documented mandates
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Ministerial-level regulatory intelligence from thirty African jurisdictions
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                A Deal Flow Package four weeks before arrival and post-event tracking reports
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Priority access to the Capital Markets Lounge for the full three days.
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
                      <span className="tnum pt-1 font-display font-bold text-[15px] leading-none text-gold">
                        04
                      </span>
                      <span className="font-display font-semibold text-[14px] leading-snug text-emerald-cta">
                        Service providers, suppliers & technology companies
                      </span>
                    </>
                  ),
                  triggerInactive: (
                    <>
                      <span className="tnum pt-1 font-display font-bold text-[15px] leading-none text-taupe">
                        04
                      </span>
                      <span className="font-display font-semibold text-[14px] leading-snug text-ink">
                        Service providers, suppliers & technology companies
                      </span>
                    </>
                  ),
                  panel: (
                    <>
                      <p className="font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
                        04
                        —
                        Service providers, suppliers & technology companies
                      </p>
                      <div className="mt-4 flex flex-col gap-6">
                        <div className="flex flex-col gap-6">
                          <div className="max-w-[760px] rounded-sm border-l-2 border-l-gold bg-surface px-6 py-5">
                            <p className="text-body text-muted">
                              The contracts that will fund your Africa growth are being awarded by people in this room.
                            </p>
                          </div>
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            Every listed mining company developing or operating in Africa is a potential client. Every African project that moves from exploration to feasibility needs a drilling contractor, an engineering firm, a laboratory, a metallurgical consultant, a technology platform, a logistics provider, a legal advisor and a site security company. Every African government developing its local supplier program is looking for Canadian and Québec partners with the technical credibility to certify and co-develop local companies in your field.
                          </p>
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            At A2M 2027, all of these buyers are in one building for three days. At a curated, event where every delegate has a direct professional stake in African mining, and where your stand is positioned within metres of the investment decisions being made in the Capital Markets Lounge.
                          </p>
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            The business development ROI of three days at A2M is straightforward. Your team arrives with an agenda of confirmed meetings with A2M Networking App. You spend three days having those meetings, attending the sessions most relevant to your market — particularly the session on local content and African supplier partnerships, which is specifically designed around the commercial opportunity that exists between Canadian service expertise and African companies seeking to upgrade — and hosting conversations at your stand during session breaks, lunches and networking activations. You leave with a pipeline of qualified follow-up conversations that your business development team will spend the next quarter converting.
                          </p>
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            For technology companies, A2M is additionally a regulatory and market intelligence event. The sessions on ESG, mining codes, local content obligations and downstream processing requirements give your product and business development teams direct insight into where the compliance gaps are in African mining operations — and therefore where your solution has the strongest case for adoption.
                          </p>
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            For Québec-based firms in particular, the presence of the Québec government as an official partner of A2M, and the keynote of the Minister of Natural Resources and Forests, gives your participation an institutional endorsement that carries weight in every conversation you have with African government procurement officials and international mining companies.
                          </p>
                          <h3 className="max-w-[760px] font-display font-semibold text-h3 text-ink">
                            What you will leave with
                          </h3>
                          <ul className="flex max-w-[760px] flex-col gap-3">
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                A confirmed pipeline of follow-up meetings with TSX development and production companies
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Introductions to African project developers who need your services
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Relationships with African government procurement and local content officials
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Brand visibility before, during and after the event
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Access to the post-event delegate directory for sustained follow-up.
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
                      <span className="tnum pt-1 font-display font-bold text-[15px] leading-none text-gold">
                        05
                      </span>
                      <span className="font-display font-semibold text-[14px] leading-snug text-emerald-cta">
                        Governments & mining ministries
                      </span>
                    </>
                  ),
                  triggerInactive: (
                    <>
                      <span className="tnum pt-1 font-display font-bold text-[15px] leading-none text-taupe">
                        05
                      </span>
                      <span className="font-display font-semibold text-[14px] leading-snug text-ink">
                        Governments & mining ministries
                      </span>
                    </>
                  ),
                  panel: (
                    <>
                      <p className="font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
                        05
                        —
                        Governments & mining ministries
                      </p>
                      <div className="mt-4 flex flex-col gap-6">
                        <div className="flex flex-col gap-6">
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            More than 120 companies listed on the Toronto Stock Exchange are currently active in Africa. They have capital, technical expertise, international ESG standards and a mandate from their shareholders to grow their African portfolios. What they need is what every investor in every sector needs before committing capital: direct, credible engagement with the government of the country where they intend to operate.
                          </p>
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            A2M 2027 gives your ministry that engagement — at scale, in a single mission, on neutral ground.
                          </p>
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            In three days at the Centre Mont-Royal, your delegation will meet the TSX and major securities exchanges executives who have your country on their shortlist, the development finance institutions that co-finance the projects those companies develop, the engineering firms that build the mines, the royalty companies that provide flexible capital at the development stage, and the institutional investors that complete the financing structures. These are conversations that would take months of diplomatic outreach, trade missions and separate bilateral meetings to replicate. A2M compresses them into a structured, facilitated program where your delegation's time is fully allocated from the first hour.
                          </p>
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            The Ministerial Roundtable is a game-changer for Canada-Africa mining relations. Co-chaired by H.E. Issoufou Mahamadou and Canada's Minister of Natural Resources, this closed diplomatic session is a first-of-its-kind bilateral meeting on critical minerals. By attending, your country becomes a founding member of a framework shaping Canada-Africa mining ties for years to come. It sends a strong signal to mining companies and investors that your government is a committed partner in African mining.
                          </p>
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            Through the A2M Networking App platform, your delegation's bilateral meetings with specific companies and investors are confirmed before you land in Montréal. Your minister's schedule is fully prepared. Every conversation is with a counterpart who has reviewed your country's project pipeline in advance and requested the meeting because their organization has a specific interest in your jurisdiction.
                          </p>
                          <h3 className="max-w-[760px] font-display font-semibold text-h3 text-ink">
                            What your delegation will leave with
                          </h3>
                          <ul className="flex max-w-[760px] flex-col gap-3">
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Direct relationships with TSX company leadership teams active in your jurisdiction
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Confirmed follow-up engagements with DFIs and institutional investors reviewing projects in your country
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Technical partnership introductions with Québec's engineering and service firms
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Media visibility through the event's accredited international press corps.
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
                      <span className="tnum pt-1 font-display font-bold text-[15px] leading-none text-gold">
                        06
                      </span>
                      <span className="font-display font-semibold text-[14px] leading-snug text-emerald-cta">
                        Downstream buyers & traders
                      </span>
                    </>
                  ),
                  triggerInactive: (
                    <>
                      <span className="tnum pt-1 font-display font-bold text-[15px] leading-none text-taupe">
                        06
                      </span>
                      <span className="font-display font-semibold text-[14px] leading-snug text-ink">
                        Downstream buyers & traders
                      </span>
                    </>
                  ),
                  panel: (
                    <>
                      <p className="font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
                        06
                        —
                        Downstream buyers & traders
                      </p>
                      <div className="mt-4 flex flex-col gap-6">
                        <div className="flex flex-col gap-6">
                          <div className="max-w-[760px] rounded-sm border-l-2 border-l-gold bg-surface px-6 py-5">
                            <p className="text-body text-muted">
                              The minerals that power your supply chain come from Africa. The people who control that supply chain are in Montréal.
                            </p>
                          </div>
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            Whether you are procuring cobalt for battery cells, manganese for steel production, graphite for anodes, copper for electrical infrastructure or uranium for nuclear energy, your supply chain runs through Africa. The Democratic Republic of Congo holds more than 70 % of global cobalt reserves. Africa produces 60 % of the world's manganese. Significant lithium, graphite, uranium and rare earth deposits are being developed across the continent at a pace that no other region can match. The question is no longer whether Africa is central to your supply chain. The question is whether you are building the relationships that give you access on your terms — or whether you will spend the next decade competing for supply in a market structured by others.
                          </p>
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            A2M 2027 puts you at the table where those terms are being set.
                          </p>
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            For downstream buyers and trading companies, A2M is uniquely valuable because it assembles, in one place, all three parties to an offtake negotiation: the project developers and operators who produce the minerals you need, the governments who regulate and tax that production, and the financiers who structure the capital behind it. Understanding all three simultaneously — and engaging with all three in the same three-day window — gives your procurement and trading teams a market intelligence advantage that is impossible to replicate through separate bilateral outreach.
                          </p>
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            The ZLECAf dimension is particularly significant for downstream buyers. The African Union's continental free trade framework is accelerating the push for local processing and transformation before export — which means the cobalt, lithium and graphite you source from Africa in 2030 may look very different from what you source today. Understanding where that transformation agenda is heading, from the ministers and project developers who are building it, is strategic intelligence that belongs in your supply chain planning. It is available at A2M 2027, directly, in thirty-minute bilateral meetings coordinated through the A2M protocol team.
                          </p>
                          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                            For commodity trading firms, A2M is origination. The projects in the Investment Showcase represent the next generation of African production capacity across the critical minerals spectrum. An offtake conversation initiated in the Capital Markets Lounge in June 2027 — with the project developer, in the presence of the financiers who need offtake certainty to close their round — is a conversation that is worth having before the project reaches production and the competitive pressure for supply intensifies.
                          </p>
                          <h3 className="max-w-[760px] font-display font-semibold text-h3 text-ink">
                            What you will leave with
                          </h3>
                          <ul className="flex max-w-[760px] flex-col gap-3">
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Direct relationships with African project operators and developers across the critical minerals spectrum
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Offtake and supply agreement discussions initiated in the Capital Markets Lounge
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Regulatory intelligence on the ZLECAf transformation agenda and its implications for your supply chain
                              </span>
                            </li>
                            <li className="flex items-start gap-3 text-body text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              <span>
                                Market intelligence from thematic sessions covering every dimension of Africa mining from policy to production.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </>
                  ),
                },
              ]}
            />
    </div>
  </section>
  <section id="strategic-partners" className="a2m-reveal scroll-mt-24 py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-16 a2m-motif-light relative overflow-hidden bg-surface">
    <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16 relative z-10">
      <h2 className="font-display font-bold tracking-[-0.01em] text-h2">
        Institutional Endorsements
      </h2>
      <div className="mt-8">
        <div className="flex flex-col gap-6">
          <p className="max-w-[760px] text-lead text-muted">
            A2M is built on a network of institutional, financial and industrial partners who share its vision of a responsible mining sector.
          </p>
          <div className="flex flex-col gap-8">
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
                </div>
                <span className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 whitespace-nowrap rounded-sm border border-gold/60 bg-ivory/90 px-4 py-2 font-semibold text-[11px] text-emerald-deep uppercase tracking-[0.14em] shadow-card backdrop-blur-sm">
                  To be revealed soon
                </span>
              </div>
              <figcaption className="mt-3 text-small text-subtle">
                Partners & endorsements — logos coming soon
              </figcaption>
            </figure>
            <div className="max-w-[760px] rounded-sm border-l-2 border-l-gold bg-surface px-6 py-5">
              <p className="mb-1 font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
                Become a partner
              </p>
              <p className="text-body text-muted">
                Would your organisation like to partner with A2M? Write to us at info@a2mevent.com.
              </p>
              <Link className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 [&_svg]:size-4 [&_svg]:shrink-0 gold-metallic text-anthracite hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold focus-visible:outline-anthracite h-12 px-7 text-[12px] mt-4" to="/en/about?interest=interestPartnership#contact">
                Build a partnership with us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="advisory-board" className="a2m-reveal scroll-mt-24 py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-16">
    <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16">
      <h2 className="font-display font-bold tracking-[-0.01em] text-h2">
        Advisory Board
      </h2>
      <div className="mt-8">
        <div className="flex flex-col gap-6">
          <p className="max-w-[760px] text-lead text-muted">
            A board of recognised figures from the mining, finance and institutional worlds guides A2M's programming and strategic reach.
          </p>
          <div className="flex flex-col gap-8">
            <figure>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  <div aria-hidden="true" className="flex flex-col items-center gap-3 rounded-sm border border-hairline bg-card p-5 text-center shadow-card">
                    <span className="relative size-16 overflow-hidden rounded-full bg-mist">
                      <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="scale-110 object-cover blur-[6px]" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="64px" srcSet="/images/people/portrait-1.jpg 32w, /images/people/portrait-1.jpg 48w, /images/people/portrait-1.jpg 64w, /images/people/portrait-1.jpg 96w, /images/people/portrait-1.jpg 128w, /images/people/portrait-1.jpg 256w, /images/people/portrait-1.jpg 384w, /images/people/portrait-1.jpg 640w, /images/people/portrait-1.jpg 750w, /images/people/portrait-1.jpg 828w, /images/people/portrait-1.jpg 1080w, /images/people/portrait-1.jpg 1200w, /images/people/portrait-1.jpg 1920w, /images/people/portrait-1.jpg 2048w, /images/people/portrait-1.jpg 3840w" src="/images/people/portrait-1.jpg" />
                    </span>
                    <span className="h-2.5 w-20 rounded-full bg-hairline blur-[2px]" />
                    <span className="h-2 w-14 rounded-full bg-hairline-soft blur-[2px]" />
                  </div>
                  <div aria-hidden="true" className="flex flex-col items-center gap-3 rounded-sm border border-hairline bg-card p-5 text-center shadow-card">
                    <span className="relative size-16 overflow-hidden rounded-full bg-mist">
                      <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="scale-110 object-cover blur-[6px]" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="64px" srcSet="/images/people/portrait-2.jpg 32w, /images/people/portrait-2.jpg 48w, /images/people/portrait-2.jpg 64w, /images/people/portrait-2.jpg 96w, /images/people/portrait-2.jpg 128w, /images/people/portrait-2.jpg 256w, /images/people/portrait-2.jpg 384w, /images/people/portrait-2.jpg 640w, /images/people/portrait-2.jpg 750w, /images/people/portrait-2.jpg 828w, /images/people/portrait-2.jpg 1080w, /images/people/portrait-2.jpg 1200w, /images/people/portrait-2.jpg 1920w, /images/people/portrait-2.jpg 2048w, /images/people/portrait-2.jpg 3840w" src="/images/people/portrait-2.jpg" />
                    </span>
                    <span className="h-2.5 w-20 rounded-full bg-hairline blur-[2px]" />
                    <span className="h-2 w-14 rounded-full bg-hairline-soft blur-[2px]" />
                  </div>
                  <div aria-hidden="true" className="flex flex-col items-center gap-3 rounded-sm border border-hairline bg-card p-5 text-center shadow-card">
                    <span className="relative size-16 overflow-hidden rounded-full bg-mist">
                      <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="scale-110 object-cover blur-[6px]" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="64px" srcSet="/images/people/portrait-3.jpg 32w, /images/people/portrait-3.jpg 48w, /images/people/portrait-3.jpg 64w, /images/people/portrait-3.jpg 96w, /images/people/portrait-3.jpg 128w, /images/people/portrait-3.jpg 256w, /images/people/portrait-3.jpg 384w, /images/people/portrait-3.jpg 640w, /images/people/portrait-3.jpg 750w, /images/people/portrait-3.jpg 828w, /images/people/portrait-3.jpg 1080w, /images/people/portrait-3.jpg 1200w, /images/people/portrait-3.jpg 1920w, /images/people/portrait-3.jpg 2048w, /images/people/portrait-3.jpg 3840w" src="/images/people/portrait-3.jpg" />
                    </span>
                    <span className="h-2.5 w-20 rounded-full bg-hairline blur-[2px]" />
                    <span className="h-2 w-14 rounded-full bg-hairline-soft blur-[2px]" />
                  </div>
                  <div aria-hidden="true" className="flex flex-col items-center gap-3 rounded-sm border border-hairline bg-card p-5 text-center shadow-card">
                    <span className="relative size-16 overflow-hidden rounded-full bg-mist">
                      <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="scale-110 object-cover blur-[6px]" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="64px" srcSet="/images/people/portrait-4.jpg 32w, /images/people/portrait-4.jpg 48w, /images/people/portrait-4.jpg 64w, /images/people/portrait-4.jpg 96w, /images/people/portrait-4.jpg 128w, /images/people/portrait-4.jpg 256w, /images/people/portrait-4.jpg 384w, /images/people/portrait-4.jpg 640w, /images/people/portrait-4.jpg 750w, /images/people/portrait-4.jpg 828w, /images/people/portrait-4.jpg 1080w, /images/people/portrait-4.jpg 1200w, /images/people/portrait-4.jpg 1920w, /images/people/portrait-4.jpg 2048w, /images/people/portrait-4.jpg 3840w" src="/images/people/portrait-4.jpg" />
                    </span>
                    <span className="h-2.5 w-20 rounded-full bg-hairline blur-[2px]" />
                    <span className="h-2 w-14 rounded-full bg-hairline-soft blur-[2px]" />
                  </div>
                  <div aria-hidden="true" className="flex flex-col items-center gap-3 rounded-sm border border-hairline bg-card p-5 text-center shadow-card">
                    <span className="relative size-16 overflow-hidden rounded-full bg-mist">
                      <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="scale-110 object-cover blur-[6px]" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="64px" srcSet="/images/people/portrait-5.jpg 32w, /images/people/portrait-5.jpg 48w, /images/people/portrait-5.jpg 64w, /images/people/portrait-5.jpg 96w, /images/people/portrait-5.jpg 128w, /images/people/portrait-5.jpg 256w, /images/people/portrait-5.jpg 384w, /images/people/portrait-5.jpg 640w, /images/people/portrait-5.jpg 750w, /images/people/portrait-5.jpg 828w, /images/people/portrait-5.jpg 1080w, /images/people/portrait-5.jpg 1200w, /images/people/portrait-5.jpg 1920w, /images/people/portrait-5.jpg 2048w, /images/people/portrait-5.jpg 3840w" src="/images/people/portrait-5.jpg" />
                    </span>
                    <span className="h-2.5 w-20 rounded-full bg-hairline blur-[2px]" />
                    <span className="h-2 w-14 rounded-full bg-hairline-soft blur-[2px]" />
                  </div>
                  <div aria-hidden="true" className="flex flex-col items-center gap-3 rounded-sm border border-hairline bg-card p-5 text-center shadow-card">
                    <span className="relative size-16 overflow-hidden rounded-full bg-mist">
                      <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="scale-110 object-cover blur-[6px]" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="64px" srcSet="/images/people/portrait-6.jpg 32w, /images/people/portrait-6.jpg 48w, /images/people/portrait-6.jpg 64w, /images/people/portrait-6.jpg 96w, /images/people/portrait-6.jpg 128w, /images/people/portrait-6.jpg 256w, /images/people/portrait-6.jpg 384w, /images/people/portrait-6.jpg 640w, /images/people/portrait-6.jpg 750w, /images/people/portrait-6.jpg 828w, /images/people/portrait-6.jpg 1080w, /images/people/portrait-6.jpg 1200w, /images/people/portrait-6.jpg 1920w, /images/people/portrait-6.jpg 2048w, /images/people/portrait-6.jpg 3840w" src="/images/people/portrait-6.jpg" />
                    </span>
                    <span className="h-2.5 w-20 rounded-full bg-hairline blur-[2px]" />
                    <span className="h-2 w-14 rounded-full bg-hairline-soft blur-[2px]" />
                  </div>
                  <div aria-hidden="true" className="flex flex-col items-center gap-3 rounded-sm border border-hairline bg-card p-5 text-center shadow-card">
                    <span className="relative size-16 overflow-hidden rounded-full bg-mist">
                      <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="scale-110 object-cover blur-[6px]" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="64px" srcSet="/images/people/portrait-7.jpg 32w, /images/people/portrait-7.jpg 48w, /images/people/portrait-7.jpg 64w, /images/people/portrait-7.jpg 96w, /images/people/portrait-7.jpg 128w, /images/people/portrait-7.jpg 256w, /images/people/portrait-7.jpg 384w, /images/people/portrait-7.jpg 640w, /images/people/portrait-7.jpg 750w, /images/people/portrait-7.jpg 828w, /images/people/portrait-7.jpg 1080w, /images/people/portrait-7.jpg 1200w, /images/people/portrait-7.jpg 1920w, /images/people/portrait-7.jpg 2048w, /images/people/portrait-7.jpg 3840w" src="/images/people/portrait-7.jpg" />
                    </span>
                    <span className="h-2.5 w-20 rounded-full bg-hairline blur-[2px]" />
                    <span className="h-2 w-14 rounded-full bg-hairline-soft blur-[2px]" />
                  </div>
                  <div aria-hidden="true" className="flex flex-col items-center gap-3 rounded-sm border border-hairline bg-card p-5 text-center shadow-card">
                    <span className="relative size-16 overflow-hidden rounded-full bg-mist">
                      <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="scale-110 object-cover blur-[6px]" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="64px" srcSet="/images/people/portrait-8.jpg 32w, /images/people/portrait-8.jpg 48w, /images/people/portrait-8.jpg 64w, /images/people/portrait-8.jpg 96w, /images/people/portrait-8.jpg 128w, /images/people/portrait-8.jpg 256w, /images/people/portrait-8.jpg 384w, /images/people/portrait-8.jpg 640w, /images/people/portrait-8.jpg 750w, /images/people/portrait-8.jpg 828w, /images/people/portrait-8.jpg 1080w, /images/people/portrait-8.jpg 1200w, /images/people/portrait-8.jpg 1920w, /images/people/portrait-8.jpg 2048w, /images/people/portrait-8.jpg 3840w" src="/images/people/portrait-8.jpg" />
                    </span>
                    <span className="h-2.5 w-20 rounded-full bg-hairline blur-[2px]" />
                    <span className="h-2 w-14 rounded-full bg-hairline-soft blur-[2px]" />
                  </div>
                </div>
                <span className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 whitespace-nowrap rounded-sm border border-gold/60 bg-ivory/90 px-4 py-2 font-semibold text-[11px] text-emerald-deep uppercase tracking-[0.14em] shadow-card backdrop-blur-sm">
                  To be revealed soon
                </span>
              </div>
              <figcaption className="mt-3 text-small text-subtle">
                Advisory board members — profiles to be announced
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="meet-the-team" className="a2m-reveal scroll-mt-24 py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-16">
    <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16">
      <h2 className="font-display font-bold tracking-[-0.01em] text-h2">
        Meet the Team
      </h2>
      <div className="mt-8">
        <div className="flex flex-col gap-6">
          <p className="max-w-[760px] text-lead text-muted">
            The A2M Events Inc. team that designs and orchestrates the conference, from programming to delegation logistics.
          </p>
          <div className="flex flex-col gap-8">
            <figure>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  <div aria-hidden="true" className="flex flex-col items-center gap-3 rounded-sm border border-hairline bg-card p-5 text-center shadow-card">
                    <span className="relative size-16 overflow-hidden rounded-full bg-mist">
                      <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="scale-110 object-cover blur-[6px]" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="64px" srcSet="/images/people/portrait-1.jpg 32w, /images/people/portrait-1.jpg 48w, /images/people/portrait-1.jpg 64w, /images/people/portrait-1.jpg 96w, /images/people/portrait-1.jpg 128w, /images/people/portrait-1.jpg 256w, /images/people/portrait-1.jpg 384w, /images/people/portrait-1.jpg 640w, /images/people/portrait-1.jpg 750w, /images/people/portrait-1.jpg 828w, /images/people/portrait-1.jpg 1080w, /images/people/portrait-1.jpg 1200w, /images/people/portrait-1.jpg 1920w, /images/people/portrait-1.jpg 2048w, /images/people/portrait-1.jpg 3840w" src="/images/people/portrait-1.jpg" />
                    </span>
                    <span className="h-2.5 w-20 rounded-full bg-hairline blur-[2px]" />
                    <span className="h-2 w-14 rounded-full bg-hairline-soft blur-[2px]" />
                  </div>
                  <div aria-hidden="true" className="flex flex-col items-center gap-3 rounded-sm border border-hairline bg-card p-5 text-center shadow-card">
                    <span className="relative size-16 overflow-hidden rounded-full bg-mist">
                      <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="scale-110 object-cover blur-[6px]" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="64px" srcSet="/images/people/portrait-2.jpg 32w, /images/people/portrait-2.jpg 48w, /images/people/portrait-2.jpg 64w, /images/people/portrait-2.jpg 96w, /images/people/portrait-2.jpg 128w, /images/people/portrait-2.jpg 256w, /images/people/portrait-2.jpg 384w, /images/people/portrait-2.jpg 640w, /images/people/portrait-2.jpg 750w, /images/people/portrait-2.jpg 828w, /images/people/portrait-2.jpg 1080w, /images/people/portrait-2.jpg 1200w, /images/people/portrait-2.jpg 1920w, /images/people/portrait-2.jpg 2048w, /images/people/portrait-2.jpg 3840w" src="/images/people/portrait-2.jpg" />
                    </span>
                    <span className="h-2.5 w-20 rounded-full bg-hairline blur-[2px]" />
                    <span className="h-2 w-14 rounded-full bg-hairline-soft blur-[2px]" />
                  </div>
                  <div aria-hidden="true" className="flex flex-col items-center gap-3 rounded-sm border border-hairline bg-card p-5 text-center shadow-card">
                    <span className="relative size-16 overflow-hidden rounded-full bg-mist">
                      <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="scale-110 object-cover blur-[6px]" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="64px" srcSet="/images/people/portrait-3.jpg 32w, /images/people/portrait-3.jpg 48w, /images/people/portrait-3.jpg 64w, /images/people/portrait-3.jpg 96w, /images/people/portrait-3.jpg 128w, /images/people/portrait-3.jpg 256w, /images/people/portrait-3.jpg 384w, /images/people/portrait-3.jpg 640w, /images/people/portrait-3.jpg 750w, /images/people/portrait-3.jpg 828w, /images/people/portrait-3.jpg 1080w, /images/people/portrait-3.jpg 1200w, /images/people/portrait-3.jpg 1920w, /images/people/portrait-3.jpg 2048w, /images/people/portrait-3.jpg 3840w" src="/images/people/portrait-3.jpg" />
                    </span>
                    <span className="h-2.5 w-20 rounded-full bg-hairline blur-[2px]" />
                    <span className="h-2 w-14 rounded-full bg-hairline-soft blur-[2px]" />
                  </div>
                  <div aria-hidden="true" className="flex flex-col items-center gap-3 rounded-sm border border-hairline bg-card p-5 text-center shadow-card">
                    <span className="relative size-16 overflow-hidden rounded-full bg-mist">
                      <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="scale-110 object-cover blur-[6px]" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="64px" srcSet="/images/people/portrait-4.jpg 32w, /images/people/portrait-4.jpg 48w, /images/people/portrait-4.jpg 64w, /images/people/portrait-4.jpg 96w, /images/people/portrait-4.jpg 128w, /images/people/portrait-4.jpg 256w, /images/people/portrait-4.jpg 384w, /images/people/portrait-4.jpg 640w, /images/people/portrait-4.jpg 750w, /images/people/portrait-4.jpg 828w, /images/people/portrait-4.jpg 1080w, /images/people/portrait-4.jpg 1200w, /images/people/portrait-4.jpg 1920w, /images/people/portrait-4.jpg 2048w, /images/people/portrait-4.jpg 3840w" src="/images/people/portrait-4.jpg" />
                    </span>
                    <span className="h-2.5 w-20 rounded-full bg-hairline blur-[2px]" />
                    <span className="h-2 w-14 rounded-full bg-hairline-soft blur-[2px]" />
                  </div>
                  <div aria-hidden="true" className="flex flex-col items-center gap-3 rounded-sm border border-hairline bg-card p-5 text-center shadow-card">
                    <span className="relative size-16 overflow-hidden rounded-full bg-mist">
                      <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="scale-110 object-cover blur-[6px]" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="64px" srcSet="/images/people/portrait-5.jpg 32w, /images/people/portrait-5.jpg 48w, /images/people/portrait-5.jpg 64w, /images/people/portrait-5.jpg 96w, /images/people/portrait-5.jpg 128w, /images/people/portrait-5.jpg 256w, /images/people/portrait-5.jpg 384w, /images/people/portrait-5.jpg 640w, /images/people/portrait-5.jpg 750w, /images/people/portrait-5.jpg 828w, /images/people/portrait-5.jpg 1080w, /images/people/portrait-5.jpg 1200w, /images/people/portrait-5.jpg 1920w, /images/people/portrait-5.jpg 2048w, /images/people/portrait-5.jpg 3840w" src="/images/people/portrait-5.jpg" />
                    </span>
                    <span className="h-2.5 w-20 rounded-full bg-hairline blur-[2px]" />
                    <span className="h-2 w-14 rounded-full bg-hairline-soft blur-[2px]" />
                  </div>
                  <div aria-hidden="true" className="flex flex-col items-center gap-3 rounded-sm border border-hairline bg-card p-5 text-center shadow-card">
                    <span className="relative size-16 overflow-hidden rounded-full bg-mist">
                      <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="scale-110 object-cover blur-[6px]" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="64px" srcSet="/images/people/portrait-6.jpg 32w, /images/people/portrait-6.jpg 48w, /images/people/portrait-6.jpg 64w, /images/people/portrait-6.jpg 96w, /images/people/portrait-6.jpg 128w, /images/people/portrait-6.jpg 256w, /images/people/portrait-6.jpg 384w, /images/people/portrait-6.jpg 640w, /images/people/portrait-6.jpg 750w, /images/people/portrait-6.jpg 828w, /images/people/portrait-6.jpg 1080w, /images/people/portrait-6.jpg 1200w, /images/people/portrait-6.jpg 1920w, /images/people/portrait-6.jpg 2048w, /images/people/portrait-6.jpg 3840w" src="/images/people/portrait-6.jpg" />
                    </span>
                    <span className="h-2.5 w-20 rounded-full bg-hairline blur-[2px]" />
                    <span className="h-2 w-14 rounded-full bg-hairline-soft blur-[2px]" />
                  </div>
                </div>
                <span className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 whitespace-nowrap rounded-sm border border-gold/60 bg-ivory/90 px-4 py-2 font-semibold text-[11px] text-emerald-deep uppercase tracking-[0.14em] shadow-card backdrop-blur-sm">
                  To be revealed soon
                </span>
              </div>
              <figcaption className="mt-3 text-small text-subtle">
                Team members — photos & profiles to be announced
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="sustainability" className="a2m-reveal scroll-mt-24 py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-16 a2m-motif-light relative overflow-hidden bg-surface">
    <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16 relative z-10">
      <h2 className="font-display font-bold tracking-[-0.01em] text-h2">
        Sustainability
      </h2>
      <div className="mt-8">
        <div className="flex flex-col gap-6">
          <p className="max-w-[760px] text-lead text-muted">
            A2M Sustainability Program — Investing in Tomorrow's Africa. A responsible mining investment event has a duty to deliver lasting value to African communities and the industry.
          </p>
          <div className="flex flex-col gap-8">
            <div className="relative min-h-[300px] overflow-hidden rounded-sm border-2 border-gold/60 shadow-card sm:min-h-[340px]">
              <img alt="African schoolchildren in class, golden light" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="100vw" srcSet="/images/about/sustainability-band.jpg 640w, /images/about/sustainability-band.jpg 750w, /images/about/sustainability-band.jpg 828w, /images/about/sustainability-band.jpg 1080w, /images/about/sustainability-band.jpg 1200w, /images/about/sustainability-band.jpg 1920w, /images/about/sustainability-band.jpg 2048w, /images/about/sustainability-band.jpg 3840w" src="/images/about/sustainability-band.jpg" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-emerald-deep/90 via-emerald-deep/60 to-emerald-deep/25" />
              <div className="relative z-10 flex min-h-[300px] flex-col justify-center gap-4 p-8 sm:min-h-[340px] lg:p-12">
                <span className="font-semibold text-[11px] text-gold uppercase tracking-[0.26em]">
                  A2M Sustainability Program
                </span>
                <p className="max-w-[560px] border-gold border-l-2 pl-5 font-medium text-[1.5rem] text-ivory italic leading-snug [font-family:var(--font-display)] [text-shadow:0_2px_18px_rgba(3,20,16,0.6)] sm:text-[1.9rem]">
                  Mining should leave communities stronger than it found them.
                </p>
                <p className="max-w-[520px] text-champagne/90 text-small [text-shadow:0_1px_12px_rgba(3,20,16,0.6)]">
                  Investing in Tomorrow's Africa — children's education and women's empowerment.
                </p>
              </div>
            </div>
            <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
              At A2M Events Inc. we believe that a responsible mining investment event must go beyond connecting people and facilitating transactions.
              <em className="font-medium [font-family:var(--font-display)] text-copper">
                It has a duty to deliver lasting value to the African communities and the industry.
              </em>
              This conviction is the foundation of the A2M Sustainability Program.
            </p>
            <div className="max-w-[760px] rounded-sm border-l-2 border-l-gold bg-surface px-6 py-5">
              <p className="mb-1 font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
                Up to 10% of revenues
              </p>
              <p className="text-body text-muted">
                With each edition, A2M commits to allocating up to 10% of revenues collected into high-impact programs across Africa, with two core priorities: children's education and women's empowerment.
              </p>
            </div>
            <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
              These funds will be directed to carefully selected local community organisations, technical and vocational training institutions, and mining skills development programs, selected for their grassroots presence and the measurability of their results.
            </p>
            <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
              For A2M 2027, special focus will be placed on the Honorary Country and nations whose delegations actively participate in the event. This program sends a powerful message to mining companies, governments, and investors alike: the Canada-Africa mining alliance is measured not only by the deals signed at the table, but by the lasting value and opportunity it creates in African communities.
            </p>
            <div className="max-w-[760px] rounded-sm border-l-2 border-l-gold bg-surface px-6 py-5">
              <p className="mb-1 font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
                Join the cause
              </p>
              <p className="text-body text-muted">
                Join our cause — partner with us to build a more sustainable and inclusive future for Africa's mining communities.
              </p>
              <Link className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 [&_svg]:size-4 [&_svg]:shrink-0 gold-metallic text-anthracite hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold focus-visible:outline-anthracite h-12 px-7 text-[12px] mt-4" to="/en/about?interest=interestPartnership#contact">
                Support the cause
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="contact" className="a2m-reveal scroll-mt-24 py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-16">
    <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16">
      <h2 className="font-display font-bold tracking-[-0.01em] text-h2">
        Contact Us
      </h2>
      <div className="mt-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[340px_1fr] lg:gap-10">
          <aside className="a2m-motif relative overflow-hidden rounded-sm bg-emerald-deep p-8 text-ivory">
            <div className="relative z-10 flex flex-col gap-5">
              <h3 className="font-bold text-[1.5rem] text-ivory leading-snug [font-family:var(--font-display)] sm:text-[1.7rem]">
                Let's Build the
                <span className="text-gold">
                  Right Connection
                </span>
              </h3>
              <p className="text-champagne/85 text-small">
                Tell us what you're interested in, and the A2M team will direct your request to the right person.
              </p>
              <div className="mt-4 border-ivory/15 border-t pt-6">
                <p className="font-semibold text-[11px] text-gold uppercase tracking-[0.22em]">
                  Other ways to reach us
                </p>
                <ul className="mt-4 flex flex-col gap-4">
                  <li className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true">
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="whitespace-pre-line text-ivory/90 text-small">
                      A2M Events Inc. 2001 Robert-Bourassa, Suite 1700 Montréal, QC H3A 2A6, Canada
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true">
                      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                    </svg>
                    <a href="tel:+15144312175" className="text-ivory/90 text-small transition-colors hover:text-gold">
                      +1 514-431-2175
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true">
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                    </svg>
                    <a href="mailto:info@a2mevent.com" className="text-ivory/90 text-small transition-colors hover:text-gold">
                      info@a2mevent.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
