import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  footerOverviewLinks,
  footerVisitLinks,
  footerPartnerLinks,
  footerProgramLinks,
  footerNewsLinks,
  legacyFrenchOrigin,
  type NavLink,
} from '../data/navigation'

function goFrench() {
  window.location.assign(`${legacyFrenchOrigin}/fr${window.location.pathname.replace(/^\/en/, '')}`)
}

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
        placeholder="Your email address"
        aria-label="Your email address"
      />
      <button
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 gold-metallic text-anthracite hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold focus-visible:outline-anthracite h-12 px-6 text-[11px]"
        type="submit"
      >
        Sign up
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
          <li key={link.href}>
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
    <footer className="relative mt-20 overflow-hidden border-ivory/15 border-t bg-emerald-deep text-ivory">
      {/* Brand + newsletter zone */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 pt-14 sm:px-8 lg:px-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <img
              alt="A2M 2027"
              loading="lazy"
              width="764"
              height="301"
              decoding="async"
              data-nimg="1"
              className="h-16 w-auto"
              style={{ color: 'transparent' }}
              srcSet="/images/brand/a2m-logo-light.png 1x, /images/brand/a2m-logo-light.png 2x"
              src="/images/brand/a2m-logo-light.png"
            />
            <p className="mt-4 text-small text-champagne/85">Building critical partnerships in African mining.</p>
            <p className="mt-1 text-small text-champagne/60">L&rsquo;événement phare du secteur minier africain.</p>
          </div>
          <div className="w-full max-w-md">
            <h2 className="font-semibold text-[11px] text-gold uppercase tracking-[0.18em]">Stay in the loop</h2>
            <p className="mt-1 mb-3 text-small text-champagne/85">
              Get monthly updates on African mining investments, deals, and the A2M 2027 program.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>
      {/* Link columns */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-2 gap-x-6 gap-y-10 px-4 pb-14 pt-12 sm:grid-cols-3 sm:px-8 lg:grid-cols-5 lg:px-16">
        <LinkColumn heading="Event" links={footerOverviewLinks} label="A2M 2027" />
        <LinkColumn heading="Visit" links={footerVisitLinks} label="Plan Your Visit" />
        <LinkColumn heading="Partner" links={footerPartnerLinks} label="Partner with us" />
        <LinkColumn heading="Program" links={footerProgramLinks} label="Program" />
        <LinkColumn heading="News" links={footerNewsLinks} label="News" />
      </div>
      <div className="relative z-10 border-ivory/15 border-t">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-8 lg:px-16">
          <p className="text-[12px] text-champagne/60">© 2027 A2M. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link className="text-[12px] text-champagne/60 transition-colors hover:text-gold" to="/en/sitemap-page">
              Sitemap
            </Link>
            <div className="inline-flex items-center gap-1 text-[11px] font-semibold" aria-busy="false">
              <span className="flex items-center">
                <button type="button" onClick={goFrench} className="rounded-sm px-1 uppercase tracking-[0.08em] transition-colors text-champagne/70 hover:text-ivory">
                  fr
                </button>
              </span>
              <span className="flex items-center">
                <span className="mx-1 text-ivory/30">/</span>
                <button type="button" aria-current="true" className="rounded-sm px-1 uppercase tracking-[0.08em] transition-colors text-gold">
                  en
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
