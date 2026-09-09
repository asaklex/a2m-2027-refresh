import { Link, useLocation } from 'react-router-dom'
import { ALargeSmall, ChevronDown, ChevronRight, Menu } from 'lucide-react'
import { navSections, legacyFrenchOrigin } from '../data/navigation'

type Props = {
  onOpenTextSize: (trigger: HTMLElement) => void
  onOpenAccount: (kind: 'login' | 'register', trigger: HTMLElement) => void
  onOpenMobileMenu: (trigger: HTMLElement) => void
}

const navLinkClass = (active: boolean) =>
  'flex items-center gap-1 rounded-sm px-3 py-2 font-sans font-medium text-[13.5px] transition-colors duration-200 ease-discret ' +
  (active ? 'text-emerald-cta' : 'text-muted hover:bg-anthracite/4 hover:text-anthracite')

const dropLinkClass = 'block px-4 py-2 text-body text-muted transition-colors hover:bg-mist hover:text-emerald-deep'

function goFrench() {
  window.location.assign(`${legacyFrenchOrigin}/fr${window.location.pathname.replace(/^\/en/, '')}`)
}

export default function SiteHeader({ onOpenTextSize, onOpenAccount, onOpenMobileMenu }: Props) {
  const { pathname } = useLocation()
  const activeSection = navSections.find((s) => pathname === s.href || pathname.startsWith(s.href + '/'))

  return (
    <header className="sticky top-0 z-40 border-hairline border-b transition-colors duration-300 bg-ivory">
      {/* Utility bar */}
      <div className="hidden border-hairline border-b md:block">
        <div className="flex items-center justify-end gap-2.5 px-4 py-1 sm:px-6">
          <div className="inline-flex items-center gap-1 text-[11px] font-semibold" aria-busy="false">
            <span className="flex items-center">
              <button type="button" onClick={goFrench} className="rounded-sm px-1 uppercase tracking-[0.08em] transition-colors text-muted hover:text-anthracite">
                fr
              </button>
            </span>
            <span className="flex items-center">
              <span className="mx-1 text-hairline">/</span>
              <button type="button" aria-current="true" className="rounded-sm px-1 uppercase tracking-[0.08em] transition-colors text-emerald-cta">
                en
              </button>
            </span>
          </div>
          <span aria-hidden="true" className="h-3.5 w-px bg-hairline" />
          <button
            type="button"
            aria-label="Text size"
            title="Text size"
            className="inline-flex size-8 items-center justify-center rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-emerald-cta focus-visible:outline-offset-2 text-muted hover:bg-anthracite/5 hover:text-anthracite"
            aria-haspopup="dialog"
            aria-expanded="false"
            data-state="closed"
            onClick={(e) => onOpenTextSize(e.currentTarget)}
          >
            <ALargeSmall className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Main bar */}
      <div className="flex min-h-16 w-full items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <Link className="flex items-center" aria-label="A2M 2027" to="/en">
            <img
              alt="A2M 2027"
              width="1200"
              height="471"
              decoding="async"
              data-nimg="1"
              className="h-[3.375rem] w-auto sm:h-[3.75rem] md:h-[4.5rem] lg:h-[5.25rem]"
              style={{ color: 'transparent' }}
              srcSet="/images/brand/a2m-logo.png 1x, /images/brand/a2m-logo.png 2x"
              src="/images/brand/a2m-logo.png"
            />
          </Link>
          <span className="hidden whitespace-nowrap border-hairline border-l pl-4 text-sm text-muted leading-tight md:block lg:hidden xl:block">
            <span className="block font-bold text-anthracite uppercase tracking-[0.06em]">June 7–9, 2027</span>
            <span className="block">Centre Mont-Royal, Montréal</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden flex-col items-end gap-2.5 lg:flex">
            <div className="flex items-center gap-2">
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 [&_svg]:size-4 [&_svg]:shrink-0 border bg-transparent h-10 px-5 text-[11px] border-gold text-gold hover:bg-gold hover:text-anthracite focus-visible:outline-gold"
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                data-state="closed"
                onClick={(e) => onOpenAccount('login', e.currentTarget)}
              >
                Log in
              </button>
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 [&_svg]:size-4 [&_svg]:shrink-0 gold-metallic text-anthracite hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold focus-visible:outline-anthracite h-10 px-5 text-[11px]"
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                data-state="closed"
                onClick={(e) => onOpenAccount('register', e.currentTarget)}
              >
                Register
              </button>
            </div>

            <nav aria-label="Navigation principale" className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {navSections.map((section) => (
                  <li className="group relative" key={section.href}>
                    <Link className={navLinkClass(section === activeSection)} to={section.href}>
                      {section.label}
                      <ChevronDown className="size-3.5 text-taupe transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden="true" />
                    </Link>
                    <div
                      data-dropdown="true"
                      className="pointer-events-none absolute top-full right-0 z-50 min-w-[260px] pt-2 opacity-0 transition-opacity duration-200 ease-discret group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100"
                    >
                      <ul className="rounded-sm border border-hairline bg-card py-2 shadow-card-hover">
                        {section.items.map((item) =>
                          item.children ? (
                            <li className="group/sub relative" data-side="left" key={item.href}>
                              <Link
                                className="flex items-center justify-between gap-2 px-4 py-2 font-semibold text-body text-ink transition-colors hover:bg-mist hover:text-emerald-deep"
                                to={item.href}
                              >
                                <span>{item.label}</span>
                                <ChevronRight
                                  className="size-3.5 shrink-0 text-taupe transition-transform duration-200 group-data-[side=left]/sub:rotate-180"
                                  aria-hidden="true"
                                />
                              </Link>
                              <div
                                data-flyout="true"
                                className="pointer-events-none invisible absolute top-0 z-50 min-w-[240px] opacity-0 transition-opacity duration-200 ease-discret group-data-[side=left]/sub:right-full group-data-[side=left]/sub:pr-1 group-data-[side=right]/sub:left-full group-data-[side=right]/sub:pl-1 group-hover/sub:pointer-events-auto group-hover/sub:visible group-hover/sub:opacity-100 group-focus-within/sub:pointer-events-auto group-focus-within/sub:visible group-focus-within/sub:opacity-100"
                              >
                                <ul className="rounded-sm border border-hairline bg-card py-2 shadow-card-hover">
                                  {item.children.map((child) => (
                                    <li key={child.href}>
                                      <Link className={dropLinkClass} to={child.href}>
                                        {child.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </li>
                          ) : (
                            <li key={item.href}>
                              <Link className={dropLinkClass} to={item.href}>
                                {item.label}
                              </Link>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            className="inline-flex size-11 items-center justify-center rounded-sm text-anthracite transition-colors hover:bg-anthracite/5 lg:hidden"
            aria-haspopup="dialog"
            aria-expanded="false"
            data-state="closed"
            onClick={(e) => onOpenMobileMenu(e.currentTarget)}
          >
            <Menu className="size-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}
