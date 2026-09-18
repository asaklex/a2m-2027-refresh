// Home hero carousel: two full-viewport slides with an autoplaying track
// (paused for prefers-reduced-motion) — copy per the target screenshots
// (5.38.01 / 5.38.18) plus the lost-version chrome (shot 5.40.42): event
// info bar (DATES / VENUE / HONORARY COUNTRY) with icons, slide-progress
// pills and prev/next arrows over a gradient into the stats band; gold
// outline CTAs; pre-launch badge pill at the top of the content.
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Award, ChevronLeft, ChevronRight, MapPin, Zap } from 'lucide-react'
import { legacyFrenchOrigin } from '../data/navigation'

/** Calendar icon exactly as shipped by the reference build (its lucide
 *  version drew slightly different paths than the current release). */
function CalendarDays({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-calendar-days ${className ?? ''}`.trim()} aria-hidden="true">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}

const PROGRAM_PDF = `${legacyFrenchOrigin}/program/a2m-2027-program.pdf`

type Slide = {
  image: string
  eyebrow: string
  heading: { before: string; gold: string; after?: string }
  paragraph: string
  /** Secondary CTA beside the waitlist button (target layout). */
  secondary: { label: string; href: string }
}

const slides: Slide[] = [
  {
    image: '/images/hero/slide-1.jpg',
    eyebrow: 'June 7–9, 2027 · Montréal',
    heading: { before: 'Build the partnerships that will power the ', gold: 'clean energy transition' },
    paragraph: "Ministers, mining executives, institutional investors and suppliers gather to build tomorrow's partnerships.",
    secondary: { label: 'Ministerial Roundtable', href: '/en/program/ministerial-roundtable' },
  },
  {
    image: '/images/hero/slide-2.jpg',
    eyebrow: 'June 7–9, 2027 · Montréal',
    heading: { before: 'Where ', gold: 'African mineral wealth ', after: 'meets Canadian capital, expertise and know-how' },
    paragraph: "North America's premier platform connecting African mining projects with Canadian investors, markets and expertise.",
    secondary: { label: 'Download the program', href: PROGRAM_PDF },
  },
]

const srcSetFor = (image: string) =>
  [640, 750, 828, 1080, 1200, 1920, 2048, 3840].map((w) => `${image} ${w}w`).join(', ')

/** Static event facts under the slides (shot 5.40.42) — identical on every slide. */
const heroInfo = [
  { icon: CalendarDays, label: 'Dates', value: 'June 7–9, 2027' },
  { icon: MapPin, label: 'Venue', value: 'Centre Mont-Royal, Montréal, Québec, Canada' },
  { icon: Award, label: 'Honorary Country', value: 'Côte d’Ivoire' },
]

/** Both hero CTAs share the target's thin gold outline treatment. */
const heroCtaClass =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 border border-gold bg-transparent text-gold hover:bg-gold hover:text-emerald-deep focus-visible:outline-gold h-10 px-3.5 text-[10px] sm:h-14 sm:px-9 sm:text-[13px]'

export default function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const goTo = (next: number) => setIndex((next + slides.length) % slides.length)

  // The hero starts under the sticky chrome, so --header-h must equal the
  // marquee + header height for the hero to fill the viewport exactly (the
  // reference build hard-coded 156px; ours is measured so it survives the
  // header wrapping at narrow widths).
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const measure = () => {
      const header = document.querySelector('header')
      if (!header) return
      const height = header.offsetTop + header.offsetHeight
      if (height > 0) section.style.setProperty('--header-h', `${height}px`)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    track.style.transform = `translate3d(-${index * 100}%, 0, 0)`
    track.style.transition = 'transform 600ms cubic-bezier(.22,.61,.36,1)'
  }, [index])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % slides.length), 6500)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="a2m-motif relative overflow-hidden bg-emerald-deep text-ivory [margin-top:calc(-1*var(--header-h,156px))]"
      aria-roledescription="carousel"
      aria-label="A2M 2027"
    >
      <div className="relative z-10 overflow-hidden">
        <div className="flex" ref={trackRef}>
          {slides.map((slide, i) => (
            <div
              className="relative min-w-0 flex-[0_0_100%]"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} / ${slides.length}`}
              key={slide.image}
            >
              <img
                alt=""
                aria-hidden="true"
                loading={i === 0 ? undefined : 'lazy'}
                decoding="async"
                data-nimg="fill"
                className="object-cover"
                style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }}
                sizes="100vw"
                srcSet={srcSetFor(slide.image)}
                src={slide.image}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 backdrop-blur-[7px]"
                style={{
                  maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 32%, rgba(0,0,0,0) 66%)',
                  WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 32%, rgba(0,0,0,0) 66%)',
                }}
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
              <div className="mx-auto w-full a2m-cinema relative z-[1] flex min-h-[100svh] max-w-none flex-col justify-center px-4 pb-36 pt-[calc(var(--header-h,156px)_+_0.5rem)] sm:px-6 sm:pb-40 sm:pt-[calc(var(--header-h,156px)_+_1.5rem)] lg:px-14 lg:pb-44">
                <span className="mt-4 font-semibold text-[11px] text-champagne uppercase tracking-[0.28em] [text-shadow:0_1px_10px_rgba(3,20,16,0.55)] sm:mt-5">
                  {slide.eyebrow}
                </span>
                <h1 className="mt-3.5 max-w-[840px] font-bold text-[1.8rem] text-ivory leading-[1.12] tracking-[-0.005em] [font-family:var(--font-display)] [text-shadow:0_2px_22px_rgba(3,20,16,0.55)] sm:mt-5 sm:text-[2.9rem] sm:leading-[1.08] lg:text-[3.4rem]">
                  {slide.heading.before}
                  <span className="text-gold">{slide.heading.gold}</span>
                  {slide.heading.after ?? ''}
                </h1>
                <p className="mt-3.5 max-w-[620px] text-[15px] text-ivory/90 [text-shadow:0_1px_14px_rgba(3,20,16,0.6)] sm:mt-5 sm:text-lead">
                  {slide.paragraph}
                </p>
                <div className="mt-6 flex flex-nowrap gap-2 sm:mt-8 sm:flex-wrap sm:gap-4">
                  <Link to="/en/news#sign-up" className={heroCtaClass}>
                    Join the waitlist
                  </Link>
                  {slide.secondary.href.startsWith('http') ? (
                    <a href={slide.secondary.href} className={heroCtaClass}>
                      {slide.secondary.label}
                    </a>
                  ) : (
                    <Link to={slide.secondary.href} className={heroCtaClass}>
                      {slide.secondary.label}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event info bar — DATES / VENUE / HONORARY COUNTRY, slide-progress
          pills and prev/next arrows (shot 5.40.42). The bar sits on a
          gradient into the emerald stats band; the controls stay clickable
          while the wrapper ignores pointer events. The pre-launch badge
          rides above the bar's content so it clears it at every width. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-emerald-deep via-emerald-deep/45 to-transparent pt-16">
        <div className="mx-auto w-full max-w-none px-4 pb-6 sm:px-6 lg:px-14 lg:pb-8">
          <span className="mb-5 inline-flex items-center gap-2 rounded-sm border border-gold/60 bg-emerald-ink/70 px-3 py-1 text-[13px] font-medium text-champagne backdrop-blur-sm lg:-ml-8">
            <Zap className="size-4 text-gold-light" aria-hidden="true" />
            Pre-launch preview — not yet public
          </span>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 sm:gap-x-9 sm:gap-y-4 lg:gap-x-16">
              {heroInfo.map(({ icon: Icon, label, value }) => (
                <div className="flex items-center gap-2.5 sm:gap-3 lg:gap-4" key={label}>
                  <Icon className="size-4 shrink-0 text-gold-light sm:size-5 lg:size-6" />
                  <div>
                    <p className="font-semibold text-[10px] text-champagne uppercase tracking-[0.16em] lg:text-[11px]">{label}</p>
                    <p className="font-display font-bold text-[13.5px] leading-tight text-ivory sm:text-[15px]">{value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pointer-events-auto flex items-center gap-3 self-start sm:self-auto">
              <div className="flex gap-2">
                {slides.map((slide, i) => (
                  <button
                    type="button"
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={i === index ? 'true' : undefined}
                    className={
                      'h-1 w-8 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-champagne focus-visible:outline-offset-4 ' +
                      (i === index ? 'bg-gold-light' : 'bg-ivory/25 hover:bg-ivory/40')
                    }
                    onClick={() => goTo(i)}
                    key={slide.image}
                  />
                ))}
              </div>
              <div className="hidden gap-2.5 sm:flex">
                <button
                  type="button"
                  aria-label="Previous slide"
                  className="inline-flex size-11 items-center justify-center rounded-sm border border-ivory/40 text-ivory transition-colors hover:bg-ivory hover:text-emerald-deep focus-visible:outline-2 focus-visible:outline-champagne focus-visible:outline-offset-2"
                  onClick={() => goTo(index - 1)}
                >
                  <ChevronLeft className="size-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  aria-label="Next slide"
                  className="inline-flex size-11 items-center justify-center rounded-sm border border-ivory/40 text-ivory transition-colors hover:bg-ivory hover:text-emerald-deep focus-visible:outline-2 focus-visible:outline-champagne focus-visible:outline-offset-2"
                  onClick={() => goTo(index + 1)}
                >
                  <ChevronRight className="size-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
