import OnThisPageNav from '../components/OnThisPageNav'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

const btnGold =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 [&_svg]:size-4 [&_svg]:shrink-0 gold-metallic text-anthracite hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold focus-visible:outline-anthracite'

const btnGhostLight =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-ivory/30 font-sans font-semibold uppercase tracking-[0.06em] text-ivory transition-all duration-[250ms] ease-discret hover:border-champagne hover:text-champagne focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne'

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

function CalloutDark({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <div className="rounded-sm border border-gold/40 bg-gold/10 px-6 py-5">
      {label && (
        <p className="mb-1 font-semibold text-[11px] text-gold-light uppercase tracking-[0.18em]">{label}</p>
      )}
      <div className="text-body text-champagne/90">{children}</div>
    </div>
  )
}

function TrackCard({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-sm border border-ivory/15 bg-ivory/5 p-6 transition-all duration-[250ms] ease-discret hover:-translate-y-1 hover:border-gold/60 hover:shadow-emerald">
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-gold-light via-gold to-gold-deep opacity-0 transition-opacity duration-[250ms] ease-discret group-hover:opacity-100" />
      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-sm border border-gold/40 bg-emerald-deep text-gold-light shadow-emerald">
        {icon}
      </span>
      <h3 className="font-display font-semibold text-h3 text-ivory">{title}</h3>
      <p className="text-body text-champagne/80">{children}</p>
    </div>
  )
}

function ImagePanel({ img, alt, eyebrow, tone = 'light' }: { img: string; alt: string; eyebrow: string; tone?: 'light' | 'dark' }) {
  const frame = tone === 'dark' ? 'border-ivory/15' : 'border-hairline'
  return (
    <div className={`relative overflow-hidden rounded-sm border ${frame} shadow-card`}>
      <img
        src={img}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="aspect-[16/9] w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-emerald-deep/85 via-emerald-deep/10 to-transparent" />
      <span className="absolute bottom-5 left-6 font-semibold text-[11px] text-gold-light uppercase tracking-[0.22em] [text-shadow:0_1px_10px_rgba(3,20,16,0.55)]">
        {eyebrow}
      </span>
    </div>
  )
}

export default function PartnerPage() {
  return (
    <>
      <div className="a2m-motif relative overflow-hidden border-hairline border-b bg-emerald-ink text-ivory">
        <img
          alt=""
          aria-hidden="true"
          decoding="async"
          loading="eager"
          className="absolute inset-0 size-full object-cover"
          src="/images/partner/partner-hero.jpg"
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
                    Partner with us
                  </span>
                </li>
              </ol>
            </nav>
          </div>
          <span className="font-semibold text-[11px] text-gold-light uppercase tracking-[0.26em] [text-shadow:0_1px_10px_rgba(3,20,16,0.55)]">
            Partner with us
          </span>
          <h1 className="mt-3 max-w-[820px] font-bold text-[1.9rem] text-ivory leading-[1.12] tracking-[-0.01em] [font-family:var(--font-display)] [text-shadow:0_2px_20px_rgba(3,20,16,0.55)] sm:text-[2.6rem] lg:text-[3.1rem]">
            Shape the <span className="text-gold-light">Canada-Africa</span> conversation
          </h1>
          <span className="mt-5 block h-0.5 w-10 rounded-full bg-gold" aria-hidden="true" />
          <p className="mt-4 max-w-[640px] text-champagne/90 text-lead [text-shadow:0_1px_14px_rgba(3,20,16,0.6)]">
            Speaker, strategic partner or media: contribute to A2M 2027.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link className={`${btnGold} h-12 px-7 text-[12px]`} to="/en/about?interest=interestPartnership#contact">
              Start a partnership
            </Link>
            <Link className={`${btnGhostLight} h-12 px-7 text-[12px]`} to="/en/partner#speaker">
              Speakers, partners &amp; media
            </Link>
          </div>
          <dl className="mt-12 grid max-w-[720px] grid-cols-1 gap-6 border-ivory/15 border-t pt-8 sm:grid-cols-3">
            <div>
              <dt className="font-semibold text-[10px] text-champagne/85 uppercase tracking-[0.16em]">
                Keynotes &amp; panels
              </dt>
              <dd className="mt-1 font-display font-bold text-data-xl text-ivory">
                Speakers
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[10px] text-champagne/85 uppercase tracking-[0.16em]">
                Bespoke programs
              </dt>
              <dd className="mt-1 font-display font-bold text-data-xl text-ivory">
                Strategic partners
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[10px] text-champagne/85 uppercase tracking-[0.16em]">
                Press accreditation
              </dt>
              <dd className="mt-1 font-display font-bold text-data-xl text-ivory">
                Media
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <OnThisPageNav
        items={[
          { id: "speaker", label: "Become a speaker" },
          { id: "strategic", label: "Become a Strategic Partner" },
          { id: "media", label: "Become a Media Partner" },
        ]}
      />
      <section id="speaker" className="a2m-reveal scroll-mt-24 py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-20">
        <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-16">
            <div className="lg:sticky lg:top-[140px] lg:self-start">
              <span className="font-semibold text-[11px] text-copper uppercase tracking-[0.22em]">
                Speakers
              </span>
              <h2 className="mt-2 font-display font-bold tracking-[-0.01em] text-h2">
                Become a speaker
              </h2>
              <p className="mt-4 text-lead text-muted">
                Share your expertise in a keynote or panel before an audience of decision-makers from African and Canadian mining.
              </p>
              <div className="mt-6">
                <Callout label="Submit a proposal">
                  Please submit your proposal through our contact form if you are interested to join our lineup of esteemed speakers.
                </Callout>
              </div>
            </div>
            <div className="flex min-w-0 flex-col gap-8">
              <ImagePanel
                img="/images/partner/keynote-stage.jpg"
                alt="Speaker at a gold lectern before an A2M audience, emerald curtain behind"
                eyebrow="Keynotes & panels"
              />
              <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                The A2M conference offers a platform for experts and thought leaders to share their knowledge and insights through keynote presentations and panel discussions.
              </p>
              <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                Speakers are selected based on their expertise and ability to deliver engaging and informative presentations that contribute to the advancement of the industry. The selection process is competitive, and proposals are evaluated on their relevance, originality, and overall quality.
              </p>
              <div>
                <Link className={`${btnGold} h-12 px-7 text-[12px]`} to="/en/about?interest=interestSpeaker#contact">
                  Become a Speaker
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="strategic" className="a2m-motif relative scroll-mt-24 overflow-hidden bg-emerald-deep py-16 text-ivory sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-24">
        <div className="relative z-10 mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-16">
            <div className="lg:sticky lg:top-[140px] lg:self-start">
              <span className="font-semibold text-[11px] text-gold-light uppercase tracking-[0.22em]">
                Strategic Partners
              </span>
              <h2 className="mt-2 font-display font-bold tracking-[-0.01em] text-h2 text-ivory">
                Become a Strategic Partner
              </h2>
              <p className="mt-4 text-lead text-champagne/90">
                Join the elite group of A2M Strategic Partners for thought leadership, brand amplification and high-level networking.
              </p>
              <div className="mt-6">
                <CalloutDark label="Contact the partnerships team">
                  For more information on how to become a partner of the event, please contact us. Our team looks forward to collaborating with you and creating a customized partnership that meets your organization's unique needs and objectives.
                </CalloutDark>
              </div>
            </div>
            <div className="flex min-w-0 flex-col gap-10">
              <ImagePanel
                img="/images/partner/strategic-boardroom.jpg"
                alt="Executives in conversation around a boardroom table at dusk, emerald chairs and a gold chandelier"
                eyebrow="Bespoke programs"
                tone="dark"
              />
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                <TrackCard icon={<IconBadge />} title="Thought leadership">
                  A tailored platform for thought leadership and your organization's expertise.
                </TrackCard>
                <TrackCard icon={<IconBars />} title="Brand amplification">
                  Your brand showcased alongside the best in the industry.
                </TrackCard>
                <TrackCard icon={<IconPeople />} title="High-level networking">
                  Unparalleled access to a curated audience of decision-makers, innovators and industry experts.
                </TrackCard>
              </div>
              <p className="max-w-[760px] text-lead text-champagne/80 leading-[1.7]">
                Elevate your organization's profile and influence by joining the elite group of A2M Strategic Partners. This exclusive opportunity offers a tailored platform for thought leadership, brand amplification, and high-level networking.
              </p>
              <p className="max-w-[760px] text-lead text-champagne/80 leading-[1.7]">
                By partnering with A2M, you'll gain unparalleled access to a curated audience of decision-makers, innovators, and industry experts. Our bespoke partnership programs are designed to drive business growth, foster meaningful connections, and showcase your organization's expertise.
              </p>
              <p className="max-w-[760px] text-lead text-champagne/80 leading-[1.7]">
                Seize this chance to shine alongside the best in the industry and make a lasting impact on the A2M community.
              </p>
              <div>
                <Link className={`${btnGold} h-12 px-7 text-[12px]`} to="/en/about?interest=interestPartnership#contact">
                  Become a Strategic Partner
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="media" className="a2m-reveal scroll-mt-24 border-hairline border-t bg-surface/60 py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-20">
        <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-16">
            <div className="lg:sticky lg:top-[140px] lg:self-start">
              <span className="font-semibold text-[11px] text-copper uppercase tracking-[0.22em]">
                Media
              </span>
              <h2 className="mt-2 font-display font-bold tracking-[-0.01em] text-h2">
                Become a Media Partner
              </h2>
              <p className="mt-4 text-lead text-muted">
                Cover A2M with privileged access to the program, speakers and attendees.
              </p>
              <div className="mt-6">
                <Callout label="Media accreditation">
                  Please contact us, if you're interested in becoming a Media Partner or applying for media accreditation.
                </Callout>
              </div>
            </div>
            <div className="flex min-w-0 flex-col gap-8">
              <ImagePanel
                img="/images/partner/press-wall.jpg"
                alt="Journalists interviewing an executive in front of an emerald and gold media wall"
                eyebrow="Press accreditation"
              />
              <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                As a Media Partner, you'll gain exclusive access to our conference program, speakers, and attendees, providing valuable opportunities for interviews, coverage, and content creation.
              </p>
              <div>
                <h3 className="font-display font-semibold text-h3 text-ink">
                  Media accreditation
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  <Check>Accreditation is offered to professional journalists who report on the African and Canadian mining industries.</Check>
                  <Check>Accredited media receive a complimentary Media Pass to A2M.</Check>
                  <Check>To be eligible, applicants must be editorial staff members.</Check>
                </ul>
              </div>
              <div>
                <Link className={`${btnGold} h-12 px-7 text-[12px]`} to="/en/about?interest=interestMedia#contact">
                  Become a Media Partner
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="a2m-motif relative overflow-hidden bg-emerald-deep py-16 text-ivory lg:py-24">
        <div className="relative z-10 mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16">
          <div className="grid items-center gap-8 rounded-sm border border-gold/40 bg-gold/10 p-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:p-12">
            <div className="flex flex-col items-start gap-4">
              <h2 className="max-w-[820px] font-bold text-[1.4rem] text-ivory leading-snug [font-family:var(--font-display)] sm:text-[1.7rem]">
                Let's build the partnership that will
                <span className="text-gold-light">
                  {' '}transform African mining{' '}
                </span>
                for generations
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link className={`${btnGold} h-12 px-7 text-[12px]`} to="/en/plan-your-visit#register">
                Get your pass
              </Link>
              <Link className={`${btnGhostLight} h-12 px-7 text-[12px]`} to="/en/about?interest=interestPartnership#contact">
                Partner with us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
