import { useState } from 'react'
import { Link } from 'react-router-dom'
import { footerOverviewLinks, legacyFrenchOrigin } from '../data/navigation'

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
      className="flex flex-col gap-2"
      onSubmit={(e) => {
        e.preventDefault()
        setDone(true)
      }}
    >
      <input
        type="email"
        className="w-full rounded-sm border border-hairline bg-card px-[18px] font-sans text-ink outline-none transition-all duration-[250ms] ease-discret placeholder:text-anthracite/35 focus:border-emerald-cta focus:shadow-[0_0_0_3px_rgba(15,61,46,0.14)] aria-[invalid=true]:border-deepred aria-[invalid=true]:shadow-[0_0_0_3px_rgba(122,31,31,0.1)] disabled:cursor-not-allowed disabled:bg-anthracite/4 disabled:text-subtle h-12"
        required
        placeholder="Your email address"
        aria-label="Your email address"
      />
      <button
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 [&_svg]:size-4 [&_svg]:shrink-0 gold-metallic text-anthracite hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold focus-visible:outline-anthracite h-10 px-5 text-[11px] w-full"
        type="submit"
      >
        Subscribe
      </button>
    </form>
  )
}

export default function SiteFooter() {
  return (
    <footer className="a2m-motif relative mt-20 overflow-hidden border-ivory/15 border-t bg-emerald-deep text-ivory">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16 relative z-10 grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
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
          <p className="mt-4 text-champagne/85 text-small">A2M is North America's premier platform for mining investment in Africa.</p>
        </div>
        <nav aria-label="A2M 2027" className="flex flex-col gap-3">
          <h2 className="font-semibold text-[11px] text-gold uppercase tracking-[0.18em]">A2M 2027</h2>
          <ul className="flex flex-col gap-2">
            {footerOverviewLinks.map((link) => (
              <li key={link.href}>
                <Link className="text-champagne/85 text-small transition-colors hover:text-gold" to={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-[11px] text-gold uppercase tracking-[0.18em]">Contacts</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="mailto:info@a2mevent.com" className="text-champagne/85 text-small transition-colors hover:text-gold">
                info@a2mevent.com
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-2">
          <h2 className="font-semibold text-[11px] text-gold uppercase tracking-[0.18em]">Newsletter</h2>
          <p className="text-champagne/85 text-small">Get announcements and program updates.</p>
          <NewsletterForm />
        </div>
      </div>
      <div className="relative z-10 border-ivory/15 border-t">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16 flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-[12px] text-champagne/60">© 2027 A2M 2027. All rights reserved.</p>
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
