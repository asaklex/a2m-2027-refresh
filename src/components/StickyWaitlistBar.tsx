import { Link } from 'react-router-dom'

/** Pre-launch sticky bar pinned above the footer — target chrome from the
 *  2026-09 redesign screenshots. SiteLayout adds a spacer of the same
 *  height so the footer's legal line is never covered. */
export default function StickyWaitlistBar() {
  return (
    <aside
      aria-label="Registration status"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-ivory/10 bg-emerald-ink text-ivory shadow-[0_-8px_24px_rgba(0,0,0,0.22)]"
    >
      <div className="mx-auto flex w-full max-w-[max(1280px,80vw)] items-center justify-between gap-3 px-4 py-2.5 sm:px-8 lg:px-16">
        <p className="min-w-0 truncate text-[11.5px] leading-snug sm:text-[12.5px]">
          <span className="font-semibold whitespace-nowrap">A2M 2027 — June 7–9, 2027 · Montreal</span>
          <span className="hidden text-champagne/80 md:inline">
            {' '}
            — Registration not open yet. Join the waitlist for the Founding Delegate rate.
          </span>
        </p>
        <Link
          to="/en/news#sign-up"
          className="inline-flex flex-none items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 gold-metallic text-anthracite hover:brightness-105 hover:shadow-gold focus-visible:outline-anthracite h-9 px-4 text-[10.5px]"
        >
          Join the waitlist
        </Link>
      </div>
    </aside>
  )
}
