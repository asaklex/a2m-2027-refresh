// Home hero carousel: three full-viewport slides with an autoplaying track
// (paused for prefers-reduced-motion), dot pagination and arrow controls —
// behaviour ported from the legacy clone, markup faithful to the reference.
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Award, ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
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
    heading: { before: 'Where', gold: 'African mineral wealth', after: 'meets Canadian capital, expertise and know how' },
    paragraph: "North America's premier platform connecting African mining projects with Canadian investors, markets and expertise.",
    secondary: { label: 'Download the program', href: PROGRAM_PDF },
  },
  {
    image: '/images/hero/slide-2.jpg',
    eyebrow: '30+ African mining countries',
    heading: { before: 'Build the partnerships that will power the', gold: 'clean energy transition' },
    paragraph: "Ministers, mining executives, institutional investors and suppliers gather to build tomorrow's partnerships.",
    secondary: { label: 'Ministerial Roundtable', href: '/en/program/ministerial-roundtable' },
  },
  {
    image: '/images/hero/slide-3.jpg',
    eyebrow: 'Critical minerals',
    heading: { before: 'Join the deal-making platform transforming', gold: 'African mining' },
    paragraph: "Cobalt, lithium, copper, rare earths: access Africa's strategic resources through the world's leading mining finance market.",
    secondary: { label: 'Download the program', href: PROGRAM_PDF },
  },
]

const srcSetFor = (image: string) =>
  [640, 750, 828, 1080, 1200, 1920, 2048, 3840].map((w) => `${image} ${w}w`).join(', ')

const heroInfo = [
  { icon: CalendarDays, label: 'Dates', value: 'June 7 – 9, 2027' },
  { icon: MapPin, label: 'Venue', value: 'Centre Mont-Royal, Montréal, Québec, Canada' },
  { icon: Award, label: 'Honorary Country', value: "Côte d'Ivoire" },
]

export default function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  const goTo = (next: number) => setIndex((next + slides.length) % slides.length)

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
              <div className="mx-auto w-full a2m-cinema relative z-[1] flex min-h-[100svh] max-w-none flex-col justify-center px-4 pb-36 pt-[calc(var(--header-h,156px)_+_0.5rem)] sm:px-6 sm:pb-40 sm:pt-[calc(var(--header-h,156px)_+_1.5rem)] lg:px-6 lg:pb-44">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/60 bg-emerald-ink/50 px-3.5 py-1.5 font-semibold text-[10.5px] text-champagne uppercase tracking-[0.18em] backdrop-blur-sm [text-shadow:none]">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-gold-light" />
                  Pre-launch · Founding Delegate rate
                </span>
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
                  <Link
                    to="/en/news#sign-up"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 gold-metallic text-anthracite hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold focus-visible:outline-anthracite h-10 px-3.5 text-[10px] sm:h-14 sm:px-9 sm:text-[13px]"
                  >
                    Join the waitlist
                  </Link>
                  {slide.secondary.href.startsWith('http') ? (
                    <a
                      href={slide.secondary.href}
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 border bg-transparent focus-visible:outline-emerald-cta h-10 border-champagne px-3.5 text-[10px] text-champagne hover:bg-champagne hover:text-emerald-deep sm:h-14 sm:px-9 sm:text-[13px]"
                    >
                      {slide.secondary.label}
                    </a>
                  ) : (
                    <Link
                      to={slide.secondary.href}
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 border bg-transparent focus-visible:outline-emerald-cta h-10 border-champagne px-3.5 text-[10px] text-champagne hover:bg-champagne hover:text-emerald-deep sm:h-14 sm:px-9 sm:text-[13px]"
                    >
                      {slide.secondary.label}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide info bar + controls */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-emerald-deep via-emerald-deep/45 to-transparent pt-16">
        <div className="mx-auto w-full flex max-w-none flex-col gap-6 px-4 pb-6 sm:flex-row sm:items-end sm:justify-between sm:px-6 lg:px-6 lg:pb-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 sm:gap-x-9 sm:gap-y-4">
            {heroInfo.map(({ icon: Icon, label, value }) => (
              <div className="flex items-center gap-2.5 sm:gap-3" key={label}>
                <Icon className="size-4 shrink-0 text-gold sm:size-5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[10px] text-champagne/85 uppercase tracking-[0.16em]">{label}</p>
                  <p className="font-display font-semibold text-[13.5px] text-ivory leading-tight sm:text-[15px]">{value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="pointer-events-auto flex items-center gap-3 self-start sm:self-auto">
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  type="button"
                  aria-label={String(i + 1)}
                  aria-current={i === index ? 'true' : undefined}
                  className={
                    'h-1.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-champagne focus-visible:outline-offset-4 ' +
                    (i === index ? 'w-8 bg-champagne' : 'w-4 bg-champagne/40 hover:bg-champagne/70')
                  }
                  onClick={() => goTo(i)}
                  key={i}
                />
              ))}
            </div>
            <div className="hidden gap-2 sm:flex">
              <button
                type="button"
                aria-label="←"
                className="inline-flex size-10 items-center justify-center rounded-sm border border-champagne/40 text-champagne transition-colors hover:bg-champagne hover:text-emerald-deep focus-visible:outline-2 focus-visible:outline-champagne focus-visible:outline-offset-2"
                onClick={() => goTo(index - 1)}
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="→"
                className="inline-flex size-10 items-center justify-center rounded-sm border border-champagne/40 text-champagne transition-colors hover:bg-champagne hover:text-emerald-deep focus-visible:outline-2 focus-visible:outline-champagne focus-visible:outline-offset-2"
                onClick={() => goTo(index + 1)}
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
