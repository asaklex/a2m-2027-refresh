// Home hero carousel: two full-viewport slides with an autoplaying track
// (paused for prefers-reduced-motion) — copy per the target screenshots
// (5.38.01 / 5.38.18) plus the lost-version chrome (shot 5.40.42): event
// info bar (DATES / VENUE / HONORARY COUNTRY) above pagination dots,
// next-slide chevron at the bar's right end, gold outline CTAs,
// pre-launch badge pill above the info bar.
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Zap } from 'lucide-react'
import { legacyFrenchOrigin } from '../data/navigation'

const PROGRAM_PDF = `${legacyFrenchOrigin}/program/a2m-2027-program.pdf`

/** No longer used — kept out per target chrome. */

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
    heading: { before: 'Build the partnerships that will power the', gold: 'clean energy transition' },
    paragraph: "Ministers, mining executives, institutional investors and suppliers gather to build tomorrow's partnerships.",
    secondary: { label: 'Ministerial Roundtable', href: '/en/program/ministerial-roundtable' },
  },
  {
    image: '/images/hero/slide-2.jpg',
    eyebrow: 'June 7–9, 2027 · Montréal',
    heading: { before: 'Where', gold: 'African mineral wealth', after: 'meets Canadian capital, expertise and know-how' },
    paragraph: "North America's premier platform connecting African mining projects with Canadian investors, markets and expertise.",
    secondary: { label: 'Download the program', href: PROGRAM_PDF },
  },
]

const srcSetFor = (image: string) =>
  [640, 750, 828, 1080, 1200, 1920, 2048, 3840].map((w) => `${image} ${w}w`).join(', ')

/** Static event facts under the slides (shot 5.40.42) — identical on every slide. */
const infoColumns: { label: string; value: string }[] = [
  { label: 'Dates', value: 'June 7–9, 2027' },
  { label: 'Venue', value: 'Centre Mont-Royal, Montréal, Québec, Canada' },
  { label: 'Honorary Country', value: 'Côte d’Ivoire' },
]

/** Both hero CTAs share the target's thin gold outline treatment. */
const heroCtaClass =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 border border-gold bg-transparent text-gold hover:bg-gold hover:text-emerald-deep focus-visible:outline-gold h-10 px-3.5 text-[10px] sm:h-14 sm:px-9 sm:text-[13px]'

export default function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

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
              <div className="mx-auto w-full a2m-cinema relative z-[1] flex min-h-[100svh] max-w-none flex-col justify-center px-4 pb-[26rem] pt-[calc(var(--header-h,156px)_+_0.5rem)] sm:px-6 sm:pb-[21.5rem] sm:pt-[calc(var(--header-h,156px)_+_1.5rem)] lg:px-6 lg:pb-80">
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

      {/* Event info bar — DATES / VENUE / HONORARY COUNTRY (shot 5.40.42).
          Offsets clear the fixed bottom sticky bar: the hero overshoots the
          fold by (marquee + header − --header-h), worst case ~125px on lg. */}
      <div className="absolute inset-x-0 bottom-[13.5rem] z-20">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-12">
            {infoColumns.map((column, i) => (
              <div key={column.label} className="flex min-w-0 items-center">
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    className="mr-12 hidden h-8 w-px shrink-0 bg-ivory/25 sm:block"
                  />
                )}
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-champagne">
                    {column.label}
                  </p>
                  <p className="mt-1 whitespace-nowrap text-[13px] text-ivory">{column.value}</p>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={() => setIndex((current) => (current + 1) % slides.length)}
              aria-label="Next slide"
              className="ml-auto hidden h-10 w-10 shrink-0 items-center justify-center rounded-sm text-champagne/90 transition-colors duration-[250ms] hover:text-champagne focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:inline-flex"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Pagination dots (shot 5.40.42): active = champagne pill */}
      <div className="absolute inset-x-0 bottom-[12rem] z-20 flex items-center justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={[
              'transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold',
              i === index
                ? 'h-1.5 w-7 rounded-full bg-champagne'
                : 'h-1.5 w-1.5 rounded-full bg-champagne/40 hover:bg-champagne/70',
            ].join(' ')}
          />
        ))}
      </div>

      {/* Pre-launch badge pill, above the info bar (target chrome) */}
      <span className="absolute bottom-[23rem] left-4 z-20 inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-emerald-ink/70 px-3.5 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-champagne backdrop-blur-sm sm:bottom-[17rem] sm:left-6 lg:left-6">
        <Zap className="size-3 text-gold-light" aria-hidden="true" />
        Pre-launch preview — not yet public
      </span>
    </section>
  )
}
