import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  footerEventLinks,
  footerExhibitLinks,
  footerAttendLinks,
  footerVisitLinks,
  type NavLink,
} from '../data/navigation'

// Brand glyphs as inline SVG — lucide no longer ships brand icons.
const brandPaths: Record<string, string> = {
  LinkedIn:
    'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.063 2.063 0 110-4.126 2.063 2.063 0 010 4.126zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  X: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
  Instagram:
    'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  YouTube:
    'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
}

const socials = ['LinkedIn', 'X', 'Instagram', 'YouTube']

const legalLinks = ['Privacy', 'Terms', 'Cookies', 'Accessibility', 'Code of Conduct', 'Cookie preferences']

/** Newsletter capture — no backend, mirrors the original site's courtesy
 *  confirmation once submitted. */
function NewsletterForm() {
  const [done, setDone] = useState(false)
  if (done) {
    return (
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-gold text-small">Thank you.</p>
        <p className="text-champagne/85 text-small">Your subscription has been received.</p>
      </div>
    )
  }
  return (
    <form
      className="flex w-full max-w-xl flex-col gap-2 sm:flex-row"
      onSubmit={(e) => {
        e.preventDefault()
        setDone(true)
      }}
    >
      <input
        type="email"
        className="w-full flex-1 rounded-sm border border-ivory/25 bg-emerald-ink px-[18px] font-sans text-ivory outline-none transition-all duration-[250ms] ease-discret placeholder:text-champagne/45 focus:border-gold focus:shadow-[0_0_0_3px_rgba(211,172,87,0.22)] disabled:cursor-not-allowed disabled:opacity-40 h-12"
        required
        placeholder="Your email"
        aria-label="Your email"
      />
      <button
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 gold-metallic text-anthracite hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold focus-visible:outline-anthracite h-12 px-6 text-[11px]"
        type="submit"
      >
        Subscribe
      </button>
    </form>
  )
}

function LinkColumn({ heading, links, label }: { heading: string; links: NavLink[]; label: string }) {
  return (
    <nav aria-label={label} className="flex flex-col gap-3">
      <h2 className="font-semibold text-[11px] text-gold uppercase tracking-[0.18em]">{heading}</h2>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link className="text-champagne/85 text-small transition-colors hover:text-gold" to={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default function SiteFooter() {
  return (
    <footer className="a2m-motif relative overflow-hidden bg-emerald-deep text-ivory">
      {/* Event details + newsletter */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 pt-14 sm:px-8 lg:px-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="font-display font-bold text-lead text-gold-light">June 7–9, 2027</p>
            <p className="mt-2 text-small text-champagne/85">Centre Mont-Royal</p>
            <p className="text-small text-champagne/85">Montreal, Québec, Canada</p>
          </div>
          <div className="w-full max-w-md">
            <h2 className="font-semibold text-[11px] text-gold uppercase tracking-[0.18em]">Newsletter</h2>
            <p className="mt-1 mb-3 text-small text-champagne/85">
              Programme announcements, confirmed speakers and the moment registration opens.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>
      {/* Contact details + navigation columns */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-2 gap-x-6 gap-y-10 px-4 pb-14 pt-12 sm:grid-cols-3 sm:px-8 lg:grid-cols-5 lg:px-16">
        <div className="flex flex-col text-small text-champagne/85">
          <p>Centre Mont-Royal</p>
          <p className="mt-2">Montreal, Québec, Canada</p>
          <a
            href="mailto:info@a2mevent.com"
            className="mt-2 inline-block transition-colors hover:text-gold"
          >
            info@a2mevent.com
          </a>
          <ul className="mt-6 flex items-center gap-3">
            {socials.map((label) => (
              <li key={label}>
                <a
                  href="#"
                  aria-label={label}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-ivory/20 text-champagne/85 transition-colors hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-4 fill-current">
                    <path d={brandPaths[label]} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <LinkColumn heading="Event" links={footerEventLinks} label="Event" />
        <LinkColumn heading="Exhibit & Sponsor" links={footerExhibitLinks} label="Exhibit and Sponsor" />
        <LinkColumn heading="Attend" links={footerAttendLinks} label="Attend" />
        <LinkColumn heading="Plan Your Visit" links={footerVisitLinks} label="Plan Your Visit" />
      </div>
      {/* Legal row */}
      <div className="relative z-10 border-t border-ivory/15 bg-emerald-ink">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-3 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-16">
          <span className="text-[12px] text-champagne/60">© 2027 A2M. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-champagne/60">
            {legalLinks.map((label) => (
              <a key={label} href="#" className="transition-colors hover:text-gold">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
