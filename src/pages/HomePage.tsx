import HeroCarousel from '../components/HeroCarousel'
import KpiBand from '../components/KpiBand'
import PersonaTabs from '../components/PersonaTabs'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <>
  <HeroCarousel />
  <KpiBand
    footnote="The Canada–Africa mining relationship at a glance."
    items={[
      { value: "30%", label: "of global mineral reserves" },
      { value: "45B+", label: "Canadian investments" },
      { value: "120+", label: "TSX-listed companies active" },
      { value: "30+", label: "African mining countries" },
    ]}
  />
  <section className="a2m-reveal py-14 lg:py-16 bg-ivory">
    <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-[900px] text-center">
        <span className="mx-auto mb-6 block h-0.5 w-10 rounded-full bg-gold" aria-hidden="true" />
        <h2 className="text-balance font-display font-bold text-h2 text-ink tracking-[-0.01em]">
          Unlocking Africa's Mining Potential in Montreal
        </h2>
        <p className="mt-6 text-lead text-muted leading-[1.7]">
          African Mining in Montreal (A2M) brings together the leading figures of the African mining industry in Montreal, Canada — government officials, industry visionaries, financiers, investors, and service providers — to explore Africa's vast mining potential and unlock transformative opportunities. This flagship event features keynote presentations from renowned industry thought leaders, interactive panel discussions, investment showcases and exclusive networking opportunities.
        </p>
      </div>
      <div className="mx-auto mt-10 flex max-w-[760px] flex-wrap items-start justify-center gap-x-12 gap-y-5 border-t border-hairline pt-8">
        <div className="text-center">
          <p className="font-semibold text-[10px] text-muted uppercase tracking-[0.16em]">
            Format
          </p>
          <p className="mt-1 font-display font-semibold text-[15px] text-emerald-deep">
            3 days
          </p>
        </div>
        <div className="text-center">
          <p className="font-semibold text-[10px] text-muted uppercase tracking-[0.16em]">
            B2B meetings
          </p>
          <p className="mt-1 font-display font-semibold text-[15px] text-emerald-deep">
            3,000+
          </p>
        </div>
        <div className="text-center">
          <p className="font-semibold text-[10px] text-muted uppercase tracking-[0.16em]">
            Ministerial Roundtable
          </p>
          <p className="mt-1 font-display font-semibold text-[15px] text-emerald-deep">
            June 6
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="a2m-reveal py-14 lg:py-16 relative overflow-hidden a2m-motif bg-emerald-deep">
    <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16 relative z-10">
      <div className="flex flex-col gap-3 items-center text-center">
        <span className="font-semibold text-[11px] uppercase tracking-[0.26em] text-gold">
          Invest · Deal · Decide
        </span>
        <h2 className="font-display font-bold tracking-[-0.01em] text-ivory">
          Three pillars, one platform
        </h2>
        <p className="max-w-[640px] text-ivory/80 mx-auto">
          A2M brings African mining supply and North American capital together around concrete goals.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
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
              Invest
            </h3>
            <p className="text-body text-muted">
              Connect with high-potential projects, leading institutions, and key government decision-makers. All in one powerful platform. Gain access to a curated deal flow of vetted opportunities.
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
              Deal
            </h3>
            <p className="text-body text-muted">
              Showcase your projects, products or services at A2M Marketplace and through high-impact, structured meetings. A2M is engineered for results - Leave with real deals and concrete partnerships, not just business cards.
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
              Decide
            </h3>
            <p className="text-body text-muted">
              Meet African Mining Ministers. and Canadian government officials. The Honorary Country delegation. All the critical decision-makers in one room, at one time.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <Link className="group inline-flex items-center gap-1.5 font-semibold transition-colors text-gold hover:text-champagne" to="/en/program">
          See the program
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4 transition-transform group-hover:translate-x-1" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  </section>
  <section className="a2m-reveal py-14 lg:py-16">
    <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-3">
          <span className="font-semibold text-[11px] uppercase tracking-[0.26em] text-copper">
            Speakers
          </span>
          <h2 className="font-display font-bold tracking-[-0.01em] text-ink">
            Speakers & panellists
          </h2>
          <p className="max-w-[640px] text-muted">
            Leading executives and experts from Canada and Africa — the full line-up is unveiled soon.
          </p>
        </div>
        <Link className="group inline-flex shrink-0 items-center gap-1.5 font-semibold transition-colors text-emerald-cta hover:text-emerald-deep" to="/en/program#speakers">
          See all speakers
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4 transition-transform group-hover:translate-x-1" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
      <div className="mt-10">
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
            </div>
            <span className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 whitespace-nowrap rounded-sm border border-gold/60 bg-ivory/90 px-4 py-2 font-semibold text-[11px] text-emerald-deep uppercase tracking-[0.14em] shadow-card backdrop-blur-sm">
              To be revealed soon
            </span>
          </div>
          <figcaption className="mt-3 text-small text-subtle">
            Speakers to be announced
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
  <PersonaTabs />
  <section className="a2m-reveal py-14 lg:py-16 relative overflow-hidden a2m-motif-light bg-surface">
    <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16 relative z-10">
      <div className="flex flex-col gap-3">
        <span className="font-semibold text-[11px] uppercase tracking-[0.26em] text-copper">
          Why A2M
        </span>
        <h2 className="font-display font-bold tracking-[-0.01em] text-ink">
          Why A2M is different
        </h2>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card flex flex-col gap-3 border-l-2 border-l-gold p-8">
            <div style={{ aspectRatio: '16 / 9' }} className="relative overflow-hidden rounded-sm border border-hairline bg-surface w-full mb-2">
              <img alt="Montréal financial district" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 45vw, 90vw" srcSet="/images/home/why-canada.jpg 384w, /images/home/why-canada.jpg 640w, /images/home/why-canada.jpg 750w, /images/home/why-canada.jpg 828w, /images/home/why-canada.jpg 1080w, /images/home/why-canada.jpg 1200w, /images/home/why-canada.jpg 1920w, /images/home/why-canada.jpg 2048w, /images/home/why-canada.jpg 3840w" src="/images/home/why-canada.jpg" />
            </div>
            <span className="tnum font-display font-bold text-data text-bronze">
              01
            </span>
            <h3 className="font-display font-semibold text-h3 text-ink">
              Canada's competitive edge
            </h3>
            <p className="text-body text-muted">
              Montreal is the world's junior mining finance capital. The Toronto Stock Exchange (TSX and TSX-V) lists the majority of mining companies active across Africa. Over 100 Canadian head offices operate on the continent, with CAD 45+ billion in assets deployed. When you come to A2M, you are meeting the money that funds Africa's mines — on their home turf.
            </p>
          </div>
          <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card flex flex-col gap-3 border-l-2 border-l-gold p-8">
            <div style={{ aspectRatio: '16 / 9' }} className="relative overflow-hidden rounded-sm border border-hairline bg-surface w-full mb-2">
              <img alt="African open-pit mine" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 45vw, 90vw" srcSet="/images/home/why-africa.jpg 384w, /images/home/why-africa.jpg 640w, /images/home/why-africa.jpg 750w, /images/home/why-africa.jpg 828w, /images/home/why-africa.jpg 1080w, /images/home/why-africa.jpg 1200w, /images/home/why-africa.jpg 1920w, /images/home/why-africa.jpg 2048w, /images/home/why-africa.jpg 3840w" src="/images/home/why-africa.jpg" />
            </div>
            <span className="tnum font-display font-bold text-data text-bronze">
              02
            </span>
            <h3 className="font-display font-semibold text-h3 text-ink">
              Africa's strategic position
            </h3>
            <p className="text-body text-muted">
              Africa holds 30% of the world's mineral reserves — including 70% of cobalt, 60% of manganese and 20% of uranium. The clean energy transition is impossible without African minerals. A2M positions Africa not as a passive supplier, but as a strategic partner with the leverage to set the terms of the alliance.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-start">
        <Link className="group inline-flex items-center gap-1.5 font-semibold transition-colors text-emerald-cta hover:text-emerald-deep" to="/en/about#why-participate">
          Why participate
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4 transition-transform group-hover:translate-x-1" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  </section>
  <section className="a2m-reveal py-14 lg:py-16">
    <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-5">
          <span className="font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
            Honorary Country 2027
          </span>
          <h2 className="font-display font-bold text-h2 text-ink tracking-[-0.01em]">
            Côte d'Ivoire
          </h2>
          <p className="text-lead text-muted">
            Discover Côte d'Ivoire — the #1 gold exploration destination in West Africa. 20+ Canadian TSX mining companies already operating. 58 tonnes of gold produced in 2024. Target: 100 tonnes/year by 2030. Côte d'Ivoire will lead a high-level delegation to Montréal to present its flagship projects to Canadian investors.
          </p>
          <div className="grid w-full grid-cols-2 gap-4">
            <div className="rounded-sm border border-hairline bg-card p-4 shadow-card">
              <span className="tnum block font-display font-bold text-data text-emerald-deep">
                N° 1
              </span>
              <span className="mt-1 block text-small text-muted">
                gold exploration in West Africa
              </span>
            </div>
            <div className="rounded-sm border border-hairline bg-card p-4 shadow-card">
              <span className="tnum block font-display font-bold text-data text-emerald-deep">
                20+
              </span>
              <span className="mt-1 block text-small text-muted">
                Canadian TSX companies
              </span>
            </div>
            <div className="rounded-sm border border-hairline bg-card p-4 shadow-card">
              <span className="tnum block font-display font-bold text-data text-emerald-deep">
                58 t
              </span>
              <span className="mt-1 block text-small text-muted">
                of gold produced in 2024
              </span>
            </div>
            <div className="rounded-sm border border-hairline bg-card p-4 shadow-card">
              <span className="tnum block font-display font-bold text-data text-emerald-deep">
                100 t/an
              </span>
              <span className="mt-1 block text-small text-muted">
                target by 2030
              </span>
            </div>
          </div>
          <Link className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 [&_svg]:size-4 [&_svg]:shrink-0 gold-metallic text-anthracite hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold focus-visible:outline-anthracite h-12 px-7 text-[12px]" to="/en/program/honorary-country">
            Discover the Honorary Country
          </Link>
        </div>
        <figure className="flex flex-col gap-1.5">
          <div style={{ aspectRatio: '4 / 5' }} className="relative overflow-hidden rounded-sm border border-hairline bg-surface w-full">
            <img alt="West African gold mining (illustrative)" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 50vw, 100vw" srcSet="/images/home/cote-divoire.jpg 384w, /images/home/cote-divoire.jpg 640w, /images/home/cote-divoire.jpg 750w, /images/home/cote-divoire.jpg 828w, /images/home/cote-divoire.jpg 1080w, /images/home/cote-divoire.jpg 1200w, /images/home/cote-divoire.jpg 1920w, /images/home/cote-divoire.jpg 2048w, /images/home/cote-divoire.jpg 3840w" src="/images/home/cote-divoire.jpg" />
          </div>
          <figcaption className="text-[11px] text-subtle">
            <a href="https://commons.wikimedia.org/wiki/File:Chegga_Artisanal_Mining.jpg" target="_blank" rel="noopener noreferrer" className="underline-offset-2 transition-colors hover:text-muted hover:underline">
              Will Dossett — Wikimedia Commons
              · CC BY-SA 4.0
            </a>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
  <section className="a2m-reveal py-14 lg:py-16">
    <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col gap-3">
        <span className="font-semibold text-[11px] uppercase tracking-[0.26em] text-copper">
          Attend
        </span>
        <h2 className="font-display font-bold tracking-[-0.01em] text-ink">
          Top reasons to attend
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12 mt-12">
        <div className="relative min-h-[320px] overflow-hidden rounded-sm border border-hairline shadow-card sm:col-span-2 lg:col-span-6 lg:row-span-2">
          <div className="overflow-hidden border-hairline bg-surface absolute inset-0 h-full w-full rounded-none border-0">
            <img alt="Conference plenary hall" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 50vw, 100vw" srcSet="/images/home/reasons-decision-makers.jpg 384w, /images/home/reasons-decision-makers.jpg 640w, /images/home/reasons-decision-makers.jpg 750w, /images/home/reasons-decision-makers.jpg 828w, /images/home/reasons-decision-makers.jpg 1080w, /images/home/reasons-decision-makers.jpg 1200w, /images/home/reasons-decision-makers.jpg 1920w, /images/home/reasons-decision-makers.jpg 2048w, /images/home/reasons-decision-makers.jpg 3840w" src="/images/home/reasons-decision-makers.jpg" />
          </div>
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-emerald-deep/95 via-emerald-deep/45 to-emerald-deep/10" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 lg:p-8">
            <span className="tnum font-bold font-display text-data text-gold">
              01
            </span>
            <h3 className="font-display font-semibold text-h3 text-ivory">
              Meet the Decision-Makers
            </h3>
            <p className="max-w-[480px] text-ivory/85 text-small">
              Network with 30+ African Mining Ministers, Canadian government officials, TSX, TSX-V, and other major securities-listed mining companies CEOs, and development finance institution leaders.
            </p>
          </div>
        </div>
        <div className="a2m-motif relative flex flex-col items-start justify-center gap-1.5 overflow-hidden rounded-sm bg-emerald-deep p-6 text-ivory shadow-card lg:col-span-3">
          <span className="tnum relative z-10 font-bold font-display text-champagne text-data-xl">
            30+
          </span>
          <span className="relative z-10 font-semibold text-[11px] text-ivory/80 uppercase tracking-[0.18em]">
            African Ministers
          </span>
        </div>
        <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6 lg:col-span-3">
          <span className="tnum font-bold font-display text-data text-gold">
            02
          </span>
          <h3 className="font-display font-semibold text-h3 text-ink">
            Build Your Pipeline
          </h3>
          <p className="text-body text-muted">
            The Investment Showcase presents pre-screened African projects to investors. Capital Markets Lounge offers private negotiation space. A2M AI-powered matching generates your strategic B2B agenda.
          </p>
        </div>
        <div className="rounded-sm transition-all duration-[250ms] ease-discret border-2 border-gold bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col overflow-hidden sm:col-span-2 lg:col-span-6">
          <div style={{ aspectRatio: '16 / 9' }} className="relative overflow-hidden border-hairline bg-surface w-full rounded-none border-0">
            <img alt="Raw gold ore in quartz" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" srcSet="/images/home/reasons-cote-divoire.jpg 256w, /images/home/reasons-cote-divoire.jpg 384w, /images/home/reasons-cote-divoire.jpg 640w, /images/home/reasons-cote-divoire.jpg 750w, /images/home/reasons-cote-divoire.jpg 828w, /images/home/reasons-cote-divoire.jpg 1080w, /images/home/reasons-cote-divoire.jpg 1200w, /images/home/reasons-cote-divoire.jpg 1920w, /images/home/reasons-cote-divoire.jpg 2048w, /images/home/reasons-cote-divoire.jpg 3840w" src="/images/home/reasons-cote-divoire.jpg" />
          </div>
          <div className="flex flex-1 flex-col gap-3 p-6">
            <span className="tnum font-bold font-display text-data text-gold">
              03
            </span>
            <h3 className="font-display font-semibold text-h3 text-ink">
              Discover Côte d'Ivoire
            </h3>
            <p className="text-body text-muted">
              Explore the #1 gold exploration destination in West Africa. 20+ Canadian TSX mining and companies already operating. 58 tonnes of gold produced in 2024. Target: 100 tonnes/year by 2030.
            </p>
          </div>
        </div>
        <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6 lg:col-span-4">
          <span className="tnum font-bold font-display text-data text-gold">
            04
          </span>
          <h3 className="font-display font-semibold text-h3 text-ink">
            Shape the Future
          </h3>
          <p className="text-body text-muted">
            Co-create the first bilateral Canada-Africa political instrument on critical minerals — alongside 30 African ministers and the Canadian government.
          </p>
        </div>
        <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6 lg:col-span-4">
          <span className="tnum font-bold font-display text-data text-gold">
            05
          </span>
          <h3 className="font-display font-semibold text-h3 text-ink">
            Access African Capital
          </h3>
          <p className="text-body text-muted">
            Meet key African bankers and financiers — the institutions co-financing Africa's next generation of mines.
          </p>
        </div>
        <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6 lg:col-span-4">
          <span className="tnum font-bold font-display text-data text-gold">
            06
          </span>
          <h3 className="font-display font-semibold text-h3 text-ink">
            Leverage the Diplomatic Platform
          </h3>
          <p className="text-body text-muted">
            A2M's ministerial structure means your investment conversations happen within a framework that reduces political and regulatory risk — on both sides of the Atlantic.
          </p>
        </div>
      </div>
      <div className="mt-10 flex justify-start">
        <Link className="group inline-flex items-center gap-1.5 font-semibold transition-colors text-emerald-cta hover:text-emerald-deep" to="/en/plan-your-visit#register">
          Register
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4 transition-transform group-hover:translate-x-1" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  </section>
  <section className="a2m-reveal py-14 lg:py-16 relative overflow-hidden a2m-motif bg-emerald-deep">
    <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16 relative z-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-3">
          <span className="font-semibold text-[11px] uppercase tracking-[0.26em] text-gold">
            Program
          </span>
          <h2 className="font-display font-bold tracking-[-0.01em] text-ivory">
            A glimpse of the program
          </h2>
          <p className="max-w-[640px] text-ivory/80">
            Keynotes and panels shaping the Canada–Africa mining agenda.
          </p>
        </div>
        <Link className="group inline-flex shrink-0 items-center gap-1.5 font-semibold transition-colors text-gold hover:text-champagne" to="/en/program#sessions">
          See the full program
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4 transition-transform group-hover:translate-x-1" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="h-full">
            <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
              <div style={{ aspectRatio: '16 / 9' }} className="relative overflow-hidden rounded-sm border border-hairline bg-surface w-full mb-1">
                <img alt="Africa, Canada & AfCFTA" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw" srcSet="/images/program/keynote-1.jpg 256w, /images/program/keynote-1.jpg 384w, /images/program/keynote-1.jpg 640w, /images/program/keynote-1.jpg 750w, /images/program/keynote-1.jpg 828w, /images/program/keynote-1.jpg 1080w, /images/program/keynote-1.jpg 1200w, /images/program/keynote-1.jpg 1920w, /images/program/keynote-1.jpg 2048w, /images/program/keynote-1.jpg 3840w" src="/images/program/keynote-1.jpg" />
              </div>
              <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                Africa, Canada & AfCFTA
              </h3>
              <p className="text-body text-muted">
                An alliance for the minerals of tomorrow: building a truly equitable partnership.
              </p>
            </div>
          </div>
          <div className="h-full">
            <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
              <div style={{ aspectRatio: '16 / 9' }} className="relative overflow-hidden rounded-sm border border-hairline bg-surface w-full mb-1">
                <img alt="From extraction to transformation" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw" srcSet="/images/program/keynote-2.jpg 256w, /images/program/keynote-2.jpg 384w, /images/program/keynote-2.jpg 640w, /images/program/keynote-2.jpg 750w, /images/program/keynote-2.jpg 828w, /images/program/keynote-2.jpg 1080w, /images/program/keynote-2.jpg 1200w, /images/program/keynote-2.jpg 1920w, /images/program/keynote-2.jpg 2048w, /images/program/keynote-2.jpg 3840w" src="/images/program/keynote-2.jpg" />
              </div>
              <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                From extraction to transformation
              </h3>
              <p className="text-body text-muted">
                Building value chains together, from mine to finished product.
              </p>
            </div>
          </div>
          <div className="h-full">
            <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
              <div style={{ aspectRatio: '16 / 9' }} className="relative overflow-hidden rounded-sm border border-hairline bg-surface w-full mb-1">
                <img alt="Quebec, a strategic partner" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw" srcSet="/images/program/keynote-3.jpg 256w, /images/program/keynote-3.jpg 384w, /images/program/keynote-3.jpg 640w, /images/program/keynote-3.jpg 750w, /images/program/keynote-3.jpg 828w, /images/program/keynote-3.jpg 1080w, /images/program/keynote-3.jpg 1200w, /images/program/keynote-3.jpg 1920w, /images/program/keynote-3.jpg 2048w, /images/program/keynote-3.jpg 3840w" src="/images/program/keynote-3.jpg" />
              </div>
              <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                Quebec, a strategic partner
              </h3>
              <p className="text-body text-muted">
                Capital, expertise and know-how: a complete mining ecosystem for Africa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="a2m-reveal py-14 lg:py-16">
    <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-3">
          <span className="font-semibold text-[11px] uppercase tracking-[0.26em] text-copper">
            Exhibit
          </span>
          <h2 className="font-display font-bold tracking-[-0.01em] text-ink">
            Exhibition opportunities
          </h2>
          <p className="max-w-[640px] text-muted">
            From the A2M Marketplace to the Explorer Village — find the format that fits.
          </p>
        </div>
        <Link className="group inline-flex shrink-0 items-center gap-1.5 font-semibold transition-colors text-emerald-cta hover:text-emerald-deep" to="/en/exhibit-sponsor#exhibition">
          Explore exhibiting
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4 transition-transform group-hover:translate-x-1" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="h-full">
            <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
              <div style={{ aspectRatio: '16 / 9' }} className="relative overflow-hidden rounded-sm border border-hairline bg-surface w-full mb-1">
                <img alt="A2M Marketplace" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw" srcSet="/images/exhibit/marketplace.jpg 256w, /images/exhibit/marketplace.jpg 384w, /images/exhibit/marketplace.jpg 640w, /images/exhibit/marketplace.jpg 750w, /images/exhibit/marketplace.jpg 828w, /images/exhibit/marketplace.jpg 1080w, /images/exhibit/marketplace.jpg 1200w, /images/exhibit/marketplace.jpg 1920w, /images/exhibit/marketplace.jpg 2048w, /images/exhibit/marketplace.jpg 3840w" src="/images/exhibit/marketplace.jpg" />
              </div>
              <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                A2M Marketplace
              </h3>
              <p className="text-body text-muted">
                Furnished 2 × 3 m stand, official-magazine profile and delegate passes included.
              </p>
            </div>
          </div>
          <div className="h-full">
            <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
              <div style={{ aspectRatio: '16 / 9' }} className="relative overflow-hidden rounded-sm border border-hairline bg-surface w-full mb-1">
                <img alt="Explorer Village" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw" srcSet="/images/exhibit/explorer-village.jpg 256w, /images/exhibit/explorer-village.jpg 384w, /images/exhibit/explorer-village.jpg 640w, /images/exhibit/explorer-village.jpg 750w, /images/exhibit/explorer-village.jpg 828w, /images/exhibit/explorer-village.jpg 1080w, /images/exhibit/explorer-village.jpg 1200w, /images/exhibit/explorer-village.jpg 1920w, /images/exhibit/explorer-village.jpg 2048w, /images/exhibit/explorer-village.jpg 3840w" src="/images/exhibit/explorer-village.jpg" />
              </div>
              <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                Explorer Village
              </h3>
              <p className="text-body text-muted">
                1 × 1 m booth for juniors and unlisted companies. Limited spaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="a2m-motif relative overflow-hidden bg-emerald-cta text-ivory">
    <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16 relative z-10 flex flex-col items-start gap-6 py-14 lg:flex-row lg:items-center lg:justify-between">
      <div className="max-w-[640px]">
        <h2 className="font-display font-bold text-h2 text-ivory">
          Download the A2M 2027 program
        </h2>
        <p className="mt-3 text-lead text-mist/90">
          Keynotes, panels, roundtables and the three-day agenda — the full program in one document.
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        <a href="https://a2m-website-git-feat-v4-full-content-andysteph21s-projects.vercel.app/program/a2m-2027-program.pdf" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 [&_svg]:size-4 [&_svg]:shrink-0 gold-metallic text-anthracite hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold focus-visible:outline-anthracite h-14 px-9 text-[13px]">
          Download the program
        </a>
      </div>
    </div>
  </section>
  <section className="a2m-reveal py-14 lg:py-16 relative overflow-hidden a2m-motif-light bg-surface">
    <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16 relative z-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-3">
          <span className="font-semibold text-[11px] uppercase tracking-[0.26em] text-copper">
            News
          </span>
          <h2 className="font-display font-bold tracking-[-0.01em] text-ink">
            Latest news
          </h2>
          <p className="max-w-[640px] text-muted">
            Announcements and media coverage around A2M 2027.
          </p>
        </div>
        <Link className="group inline-flex shrink-0 items-center gap-1.5 font-semibold transition-colors text-emerald-cta hover:text-emerald-deep" to="/en/news">
          See all news
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4 transition-transform group-hover:translate-x-1" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex flex-col overflow-hidden p-0">
            <div style={{ aspectRatio: '16 / 9' }} className="relative overflow-hidden border-hairline bg-surface w-full rounded-none border-0">
              <img alt="Visual: community impact" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" srcSet="/images/news/sustainability-pledge.jpg 256w, /images/news/sustainability-pledge.jpg 384w, /images/news/sustainability-pledge.jpg 640w, /images/news/sustainability-pledge.jpg 750w, /images/news/sustainability-pledge.jpg 828w, /images/news/sustainability-pledge.jpg 1080w, /images/news/sustainability-pledge.jpg 1200w, /images/news/sustainability-pledge.jpg 1920w, /images/news/sustainability-pledge.jpg 2048w, /images/news/sustainability-pledge.jpg 3840w" src="/images/news/sustainability-pledge.jpg" />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-sm px-[9px] py-1 font-sans font-bold text-[9px] uppercase tracking-[0.14em] bg-anthracite/8 text-muted">
                  Internal
                </span>
                <span className="text-small text-subtle">
                  ESG
                  ·
                  November 18, 2026
                </span>
              </div>
              <h3 className="font-display font-semibold text-h3 text-ink">
                Sustainability Program: up to 10% of revenues pledged
              </h3>
              <p className="text-body text-muted">
                A2M directs a share of its revenues to children's education and women's empowerment across Africa.
              </p>
              <div className="mt-auto pt-2">
                <a className="inline-flex items-center gap-1.5 font-semibold text-emerald-cta text-small transition-colors hover:text-emerald-deep" href="#">
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex flex-col overflow-hidden p-0">
            <div style={{ aspectRatio: '16 / 9' }} className="relative overflow-hidden border-hairline bg-surface w-full rounded-none border-0">
              <img alt="Visual: Women in Mining Forum" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" srcSet="/images/news/women-in-mining-programme.jpg 256w, /images/news/women-in-mining-programme.jpg 384w, /images/news/women-in-mining-programme.jpg 640w, /images/news/women-in-mining-programme.jpg 750w, /images/news/women-in-mining-programme.jpg 828w, /images/news/women-in-mining-programme.jpg 1080w, /images/news/women-in-mining-programme.jpg 1200w, /images/news/women-in-mining-programme.jpg 1920w, /images/news/women-in-mining-programme.jpg 2048w, /images/news/women-in-mining-programme.jpg 3840w" src="/images/news/women-in-mining-programme.jpg" />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-sm px-[9px] py-1 font-sans font-bold text-[9px] uppercase tracking-[0.14em] bg-anthracite/8 text-muted">
                  Internal
                </span>
                <span className="text-small text-subtle">
                  Event
                  ·
                  November 5, 2026
                </span>
              </div>
              <h3 className="font-display font-semibold text-h3 text-ink">
                Women in Mining Forum program announced
              </h3>
              <p className="text-body text-muted">
                Keynotes, panels and networking dedicated to women's leadership in mining across Canada and Africa.
              </p>
              <div className="mt-auto pt-2">
                <a className="inline-flex items-center gap-1.5 font-semibold text-emerald-cta text-small transition-colors hover:text-emerald-deep" href="#">
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex flex-col overflow-hidden p-0">
            <div style={{ aspectRatio: '16 / 9' }} className="relative overflow-hidden border-hairline bg-surface w-full rounded-none border-0">
              <img alt="Visual: project showcase" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" srcSet="/images/news/investment-showcase-call.jpg 256w, /images/news/investment-showcase-call.jpg 384w, /images/news/investment-showcase-call.jpg 640w, /images/news/investment-showcase-call.jpg 750w, /images/news/investment-showcase-call.jpg 828w, /images/news/investment-showcase-call.jpg 1080w, /images/news/investment-showcase-call.jpg 1200w, /images/news/investment-showcase-call.jpg 1920w, /images/news/investment-showcase-call.jpg 2048w, /images/news/investment-showcase-call.jpg 3840w" src="/images/news/investment-showcase-call.jpg" />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-sm px-[9px] py-1 font-sans font-bold text-[9px] uppercase tracking-[0.14em] bg-anthracite/8 text-muted">
                  Internal
                </span>
                <span className="text-small text-subtle">
                  Investment
                  ·
                  October 20, 2026
                </span>
              </div>
              <h3 className="font-display font-semibold text-h3 text-ink">
                Investment Showcase opens its call for projects
              </h3>
              <p className="text-body text-muted">
                Pre-screened African mining projects will be presented to institutional investors and DFIs.
              </p>
              <div className="mt-auto pt-2">
                <a className="inline-flex items-center gap-1.5 font-semibold text-emerald-cta text-small transition-colors hover:text-emerald-deep" href="#">
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="a2m-reveal py-14 lg:py-16">
    <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-3">
          <span className="font-semibold text-[11px] uppercase tracking-[0.26em] text-copper">
            Sponsors
          </span>
          <h2 className="font-display font-bold tracking-[-0.01em] text-ink">
            Lead Partners & Sponsors
          </h2>
          <p className="max-w-[640px] text-muted">
            Associate your brand with the flagship Canada–Africa mining event.
          </p>
        </div>
        <Link className="group inline-flex shrink-0 items-center gap-1.5 font-semibold transition-colors text-emerald-cta hover:text-emerald-deep" to="/en/exhibit-sponsor#sponsorship">
          See sponsorship options
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4 transition-transform group-hover:translate-x-1" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
      <div className="mt-10">
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
            </div>
            <span className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 whitespace-nowrap rounded-sm border border-gold/60 bg-ivory/90 px-4 py-2 font-semibold text-[11px] text-emerald-deep uppercase tracking-[0.14em] shadow-card backdrop-blur-sm">
              To be revealed soon
            </span>
          </div>
          <figcaption className="mt-3 text-small text-subtle">
            Sponsors & partners to be announced
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
    </>
  )
}
