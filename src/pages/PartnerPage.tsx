import OnThisPageNav from '../components/OnThisPageNav'
import { Link } from 'react-router-dom'

export default function PartnerPage() {
  return (
    <>
  <div className="a2m-motif relative overflow-hidden border-hairline border-b bg-emerald-deep text-ivory">
    <img alt="" aria-hidden="true" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="100vw" srcSet="/images/program/keynote-2.jpg 640w, /images/program/keynote-2.jpg 750w, /images/program/keynote-2.jpg 828w, /images/program/keynote-2.jpg 1080w, /images/program/keynote-2.jpg 1200w, /images/program/keynote-2.jpg 1920w, /images/program/keynote-2.jpg 2048w, /images/program/keynote-2.jpg 3840w" src="/images/program/keynote-2.jpg" />
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
                Partner with us
              </span>
            </li>
          </ol>
        </nav>
      </div>
      <span className="font-semibold text-[11px] text-gold uppercase tracking-[0.26em] [text-shadow:0_1px_10px_rgba(3,20,16,0.55)]">
        Partner with us
      </span>
      <h1 className="mt-3 max-w-[760px] font-bold text-[1.7rem] text-ivory leading-[1.15] tracking-[-0.005em] [font-family:var(--font-display)] [text-shadow:0_2px_20px_rgba(3,20,16,0.55)] sm:text-[2.4rem] sm:leading-[1.1] lg:text-[2.75rem]">
        Shape the
        <span className="text-gold">
          Canada-Africa
        </span>
        conversation
      </h1>
      <p className="mt-4 max-w-[640px] text-champagne/90 text-lead [text-shadow:0_1px_14px_rgba(3,20,16,0.6)]">
        Speaker, strategic partner or media: contribute to A2M 2027.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-ivory/15 border-t pt-6 lg:mt-12">
        <div className="flex items-center gap-2.5">
          <div>
            <p className="font-semibold text-[10px] text-champagne/85 uppercase tracking-[0.16em]">
              Keynotes & panels
            </p>
            <p className="font-display font-semibold text-[14px] text-ivory leading-tight">
              Speakers
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <div>
            <p className="font-semibold text-[10px] text-champagne/85 uppercase tracking-[0.16em]">
              Bespoke programs
            </p>
            <p className="font-display font-semibold text-[14px] text-ivory leading-tight">
              Strategic partners
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <div>
            <p className="font-semibold text-[10px] text-champagne/85 uppercase tracking-[0.16em]">
              Press accreditation
            </p>
            <p className="font-display font-semibold text-[14px] text-ivory leading-tight">
              Media
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <OnThisPageNav
    items={[
      { id: "speaker", label: "Become a speaker" },
      { id: "strategic", label: "Become a Strategic Partner" },
      { id: "media", label: "Become a Media Partner" },
    ]}
  />
  <section id="speaker" className="a2m-reveal scroll-mt-24 py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-16">
    <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16">
      <h2 className="font-display font-bold tracking-[-0.01em] text-h2">
        Become a speaker
      </h2>
      <div className="mt-8">
        <div className="flex flex-col gap-6">
          <p className="max-w-[760px] text-lead text-muted">
            Share your expertise in a keynote or panel before an audience of decision-makers from African and Canadian mining.
          </p>
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 items-center gap-8 rounded-sm border border-hairline bg-card p-6 shadow-card sm:p-8 lg:grid-cols-[minmax(0,400px)_1fr] lg:gap-10">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="inline-flex size-16 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-emerald-deep">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-7 text-gold">
                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M7 8a5 5 0 0 1 10 0v3a5 5 0 0 1-10 0V8Z" />
                      <path strokeLinecap="round" d="M20 11a8 8 0 0 1-16 0m8 8v3m-3 0h6" />
                    </g>
                  </svg>
                </span>
                <span aria-hidden="true" className="w-6 shrink-0 border-gold/60 border-t-2 border-dotted sm:w-9" />
                <div style={{ aspectRatio: '1 / 1' }} className="relative overflow-hidden rounded-sm border border-hairline bg-surface w-full min-w-0 flex-1">
                  <img alt="Speaker at the podium before A2M delegates" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 320px, 80vw" srcSet="/images/partner/speaker.jpg 640w, /images/partner/speaker.jpg 750w, /images/partner/speaker.jpg 828w, /images/partner/speaker.jpg 1080w, /images/partner/speaker.jpg 1200w, /images/partner/speaker.jpg 1920w, /images/partner/speaker.jpg 2048w, /images/partner/speaker.jpg 3840w" src="/images/partner/speaker.jpg" />
                </div>
              </div>
              <div className="flex flex-col items-start gap-4">
                <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                  The A2M conference offers a platform for experts and thought leaders to share their knowledge and insights through keynote presentations and panel discussions.
                </p>
                <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                  Speakers are selected based on their expertise and ability to deliver engaging and informative presentations that contribute to the advancement of the industry. The selection process is competitive, and proposals are evaluated on their relevance, originality, and overall quality.
                </p>
                <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                  Please submit your proposal through our contact form if you are interested to join our lineup of esteemed speakers. You can also write to us at info@a2mevent.com.
                </p>
                <Link className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 [&_svg]:size-4 [&_svg]:shrink-0 bg-emerald-cta text-white hover:-translate-y-0.5 hover:brightness-125 hover:shadow-emerald focus-visible:outline-emerald-deep h-12 px-7 text-[12px] mt-2" to="/en/about?interest=interestSpeaker#contact">
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
      </div>
    </div>
  </section>
  <section id="strategic" className="a2m-reveal scroll-mt-24 py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-16">
    <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16">
      <h2 className="font-display font-bold tracking-[-0.01em] text-h2">
        Become a Strategic Partner
      </h2>
      <div className="mt-8">
        <div className="flex flex-col gap-6">
          <p className="max-w-[760px] text-lead text-muted">
            Join the elite group of A2M Strategic Partners for thought leadership, brand amplification and high-level networking.
          </p>
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 items-center gap-8 rounded-sm border border-hairline bg-card p-6 shadow-card sm:p-8 lg:grid-cols-[minmax(0,400px)_1fr] lg:gap-10">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="inline-flex size-16 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-emerald-deep">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-7 text-gold">
                    <g fill="none">
                      <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M8.784 22c-1.686-.752-3.078-1.924-3.993-3.493M14.825 2.186c1.677-.477 3.408-.023 4.617 1.211" />
                      <path fill="currentColor" d="m4.01 8.367l-.372-.652zm2.492.5l.648-.377zm-3.3 1.886l-.647.378zm4.495-7.38l.648-.378zm.842 1.443l-.648.378zm1.877 4.71a.75.75 0 0 0 1.296-.756zm-2.878 2.607a.75.75 0 1 0 1.296-.756zm-3.14-6.875l-.648.378zm7.44-2.327l.648-.378zm2.526 4.33l.648-.377zm1.683 2.888l.373.651a.75.75 0 0 0 .275-1.029zm1.616-4.773l-.648.378zm2.526 4.331l.648-.378zM6.99 17.25l.648-.378zm9.967 2.003l-.373-.65zM13.784 15.3a.75.75 0 0 0 1.296-.756zM4.383 9.018c.633-.362 1.257-.14 1.471.227L7.15 8.49c-.716-1.228-2.323-1.454-3.512-.775zm-.745-1.303c-1.19.681-1.803 2.182-1.083 3.416l1.296-.756c-.21-.36-.1-.996.532-1.357zM7.05 3.75l.842 1.444l1.296-.756l-.842-1.443zm.842 1.444l2.525 4.331l1.296-.755l-2.525-4.332zm.943 6.183L7.15 8.49l-1.296.755l1.684 2.888zM7.15 8.49L5.045 4.88l-1.295.756l2.104 3.61zM5.577 3.523c.634-.362 1.258-.14 1.472.227l1.296-.755C7.629 1.767 6.022 1.54 4.833 2.22zM4.833 2.22c-1.19.681-1.803 2.182-1.083 3.416l1.295-.756c-.21-.36-.099-.996.532-1.357zm6.357 1.088l2.526 4.332l1.296-.756l-2.526-4.331zm2.526 4.332l1.684 2.887l1.295-.756l-1.683-2.887zM9.719 3.08c.633-.361 1.257-.139 1.471.228l1.296-.755c-.716-1.228-2.323-1.454-3.512-.774zm-.745-1.3c-1.19.68-1.803 2.181-1.083 3.415l1.296-.756c-.21-.36-.1-.996.532-1.357zm8.041 3.975l2.526 4.331l1.296-.756L18.31 5zm-1.471-.228c.633-.362 1.257-.14 1.471.228l1.296-.756c-.716-1.227-2.323-1.453-3.512-.774zm-.745-1.302c-1.19.68-1.803 2.182-1.083 3.416l1.296-.756c-.21-.36-.1-.997.532-1.358zM2.555 11.131l3.788 6.497l1.296-.756l-3.788-6.497zm14.03 7.471c-3.367 1.924-7.337 1.029-8.946-1.73l-1.296.756c2.111 3.62 7.065 4.518 10.987 2.276zm2.956-8.517c1.605 2.753.41 6.594-2.956 8.517l.745 1.302c3.924-2.242 5.621-6.949 3.507-10.575zm-4.461 4.46c-.675-1.159-.203-2.863 1.34-3.745l-.745-1.302c-2.102 1.201-3.075 3.77-1.891 5.802z" />
                    </g>
                  </svg>
                </span>
                <span aria-hidden="true" className="w-6 shrink-0 border-gold/60 border-t-2 border-dotted sm:w-9" />
                <div style={{ aspectRatio: '1 / 1' }} className="relative overflow-hidden rounded-sm border border-hairline bg-surface w-full min-w-0 flex-1">
                  <img alt="Golden network of light connecting African mining hubs" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 320px, 80vw" srcSet="/images/partner/strategic.jpg 640w, /images/partner/strategic.jpg 750w, /images/partner/strategic.jpg 828w, /images/partner/strategic.jpg 1080w, /images/partner/strategic.jpg 1200w, /images/partner/strategic.jpg 1920w, /images/partner/strategic.jpg 2048w, /images/partner/strategic.jpg 3840w" src="/images/partner/strategic.jpg" />
                </div>
              </div>
              <div className="flex flex-col items-start gap-4">
                <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                  Elevate your organization's profile and influence by joining the elite group of A2M Strategic Partners. This exclusive opportunity offers a tailored platform for thought leadership, brand amplification, and high-level networking.
                </p>
                <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                  By partnering with A2M, you'll gain unparalleled access to a curated audience of decision-makers, innovators, and industry experts. Our bespoke partnership programs are designed to drive business growth, foster meaningful connections, and showcase your organization's expertise.
                </p>
                <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                  Seize this chance to shine alongside the best in the industry and make a lasting impact on the A2M community.
                </p>
                <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                  For more information on how to become a partner of the event, please contact us by email at partners@africanmininginmontreal.com. Our team looks forward to collaborating with you and creating a customized partnership that meets your organization's unique needs and objectives.
                </p>
                <Link className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 [&_svg]:size-4 [&_svg]:shrink-0 bg-emerald-cta text-white hover:-translate-y-0.5 hover:brightness-125 hover:shadow-emerald focus-visible:outline-emerald-deep h-12 px-7 text-[12px] mt-2" to="/en/about?interest=interestPartnership#contact">
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
      </div>
    </div>
  </section>
  <section id="media" className="a2m-reveal scroll-mt-24 py-14 sm:scroll-mt-32 lg:scroll-mt-[205px] lg:py-16 a2m-motif-light relative overflow-hidden bg-surface">
    <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16 relative z-10">
      <h2 className="font-display font-bold tracking-[-0.01em] text-h2">
        Become a Media Partner
      </h2>
      <div className="mt-8">
        <div className="flex flex-col gap-6">
          <p className="max-w-[760px] text-lead text-muted">
            Cover A2M with privileged access to the program, speakers and attendees.
          </p>
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 items-center gap-8 rounded-sm border border-hairline bg-card p-6 shadow-card sm:p-8 lg:grid-cols-[minmax(0,400px)_1fr] lg:gap-10">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="inline-flex size-16 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-emerald-deep">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-7 text-gold">
                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M18 22H6c-1.886 0-2.828 0-3.414-.586C2 20.828 2 19.886 2 18V6c0-1.886 0-2.828.586-3.414C3.172 2 4.114 2 6 2h8c1.886 0 2.828 0 3.414.586C18 3.172 18 4.114 18 6v16Z" />
                      <path strokeLinecap="round" d="M18 8h1c1.414 0 2.121 0 2.56.44C22 8.878 22 9.585 22 11v8.5a2.5 2.5 0 0 1-2.5 2.5H18M6 7h8M6 11h8m-8 4h5" />
                    </g>
                  </svg>
                </span>
                <span aria-hidden="true" className="w-6 shrink-0 border-gold/60 border-t-2 border-dotted sm:w-9" />
                <div style={{ aspectRatio: '1 / 1' }} className="relative overflow-hidden rounded-sm border border-hairline bg-surface w-full min-w-0 flex-1">
                  <img alt="Broadcast camera filming a conference interview" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 320px, 80vw" srcSet="/images/partner/media.jpg 640w, /images/partner/media.jpg 750w, /images/partner/media.jpg 828w, /images/partner/media.jpg 1080w, /images/partner/media.jpg 1200w, /images/partner/media.jpg 1920w, /images/partner/media.jpg 2048w, /images/partner/media.jpg 3840w" src="/images/partner/media.jpg" />
                </div>
              </div>
              <div className="flex flex-col items-start gap-4">
                <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                  As a Media Partner, you'll gain exclusive access to our conference program, speakers, and attendees, providing valuable opportunities for interviews, coverage, and content creation.
                </p>
                <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                  We offer accreditation to professional journalists who report on the African and Canadian mining industries, and accredited media will receive a complimentary Media Pass to A2M. To be eligible for media accreditation, applicants must be editorial staff members.
                </p>
                <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
                  If you're interested in becoming a Media Partner or applying for media accreditation, please contact us by email: media@africanmininginmontreal.com.
                </p>
                <Link className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 [&_svg]:size-4 [&_svg]:shrink-0 bg-emerald-cta text-white hover:-translate-y-0.5 hover:brightness-125 hover:shadow-emerald focus-visible:outline-emerald-deep h-12 px-7 text-[12px] mt-2" to="/en/about?interest=interestMedia#contact">
                  Become a Media Partner
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="a2m-motif relative overflow-hidden rounded-sm border-2 border-gold/60 bg-emerald-deep text-ivory shadow-card">
              <div className="relative z-10 grid items-center gap-8 p-8 lg:grid-cols-[1fr_380px] lg:p-12">
                <div className="flex flex-col items-start gap-4">
                  <h3 className="font-bold text-[1.4rem] text-ivory leading-snug [font-family:var(--font-display)] sm:text-[1.7rem]">
                    Let's build the partnership that will
                    <span className="text-gold">
                      transform African mining
                    </span>
                    for generations
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-3">
                    <Link className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 [&_svg]:size-4 [&_svg]:shrink-0 gold-metallic text-anthracite hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold focus-visible:outline-anthracite h-12 px-7 text-[12px]" to="/en/plan-your-visit#register">
                      Get your pass
                    </Link>
                    <Link className="inline-flex h-12 items-center justify-center rounded-sm border border-ivory/45 px-7 font-sans font-semibold text-[12px] text-ivory uppercase tracking-[0.06em] transition-colors duration-[250ms] ease-discret hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2" to="/en/about?interest=interestPartnership#contact">
                      Partner with us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
