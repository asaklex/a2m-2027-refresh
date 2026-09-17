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
        className="absolute inset-0 h-full w-full scale-[1.02] object-cover blur-[2px]"
        src="/images/hero/slide-1.jpg"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#2a3a2e]/60 via-[#241d10]/55 to-[#1c160b]/60 backdrop-blur-[2px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b150f]/75"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 pb-6 pt-14 sm:px-8 lg:px-16">
        <h2 className="max-w-[400px] font-display text-h2 text-ivory">
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
