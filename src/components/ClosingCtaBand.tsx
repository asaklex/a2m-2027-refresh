// "Be part of African Mining in Montreal" closing band (LAYOUT shot
// 2026-07-31 5.39.43 + 5.42.41): full-bleed dusk photo under a dark emerald
// overlay, left-aligned copy, two gold-outline actions. Rendered directly
// above the footer with zero gap — the footer's top margin was removed for
// this pairing.
import { Link } from 'react-router-dom'
import { legacyFrenchOrigin } from '../data/navigation'

const PROGRAM_PDF = `${legacyFrenchOrigin}/program/a2m-2027-program.pdf`

const goldOutlineButton =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 h-12 border border-gold px-6 text-[11px] text-gold hover:bg-gold hover:text-emerald-deep focus-visible:outline-gold'

export default function ClosingCtaBand() {
  return (
    <section aria-label="Be part of African Mining in Montreal" className="relative isolate overflow-hidden bg-emerald-ink">
      <img
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
        src="/images/hero/slide-3.jpg"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-emerald-ink/95 via-emerald-deep/85 to-emerald-deep/55"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-8 lg:px-16">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-light">
          June 7–9 2027 · Centre Mont-Royal · Montreal
        </p>
        <h2 className="mt-2 max-w-[400px] font-display text-h2 text-ivory">
          Be part of African Mining in Montreal
        </h2>
        <p className="mt-2 max-w-[760px] text-lead text-champagne/85">
          Join ministers, executives and investors shaping the Canada–Africa mining agenda.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <Link className={goldOutlineButton} to="/en/news#sign-up">
            Join the waitlist
          </Link>
          <a className={goldOutlineButton} href={PROGRAM_PDF} target="_blank" rel="noreferrer">
            Download the program
          </a>
        </div>
      </div>
    </section>
  )
}
