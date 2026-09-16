import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ALargeSmall, ChevronDown, ChevronRight, Globe, House, Menu } from 'lucide-react'
import { navSections, legacyFrenchOrigin } from '../data/navigation'

type Props = {
  onOpenTextSize: (trigger: HTMLElement) => void
  onOpenAccount: (kind: 'login' | 'register', trigger: HTMLElement) => void
  onOpenMobileMenu: (trigger: HTMLElement) => void
}

// Open (hover/focus) fills the trigger like the target design; the current
// section just tints the text.
const navLinkClass = (active: boolean, open = false) =>
  'flex items-center gap-1 rounded-sm px-3 py-2 font-sans font-medium text-[13.5px] transition-colors duration-200 ease-discret ' +
  (open
    ? 'bg-emerald-deep text-white'
    : active
      ? 'text-emerald-cta hover:bg-anthracite/4'
      : 'text-muted hover:bg-anthracite/4 hover:text-anthracite')

const dropLinkClass = 'block px-4 py-2 text-body text-muted transition-colors hover:bg-mist hover:text-emerald-deep'

const subLinkClass =
  'flex items-center justify-between gap-2 px-4 py-2 font-semibold text-body text-ink transition-colors hover:bg-mist hover:text-emerald-deep'

function goFrench() {
  window.location.assign(`${legacyFrenchOrigin}/fr${window.location.pathname.replace(/^\/en/, '')}`)
}

// Hover-intent timing: menus open quickly, but stay open briefly after the
// pointer leaves so diagonal moves towards them don't snap them shut.
const OPEN_DELAY_MS = 60
const CLOSE_DELAY_MS = 260

/** State-driven dropdown behaviour for one nav section and its optional
 *  nested flyout: only one panel open at a time, closes on navigation,
 *  Escape, outside pointer-down, and on pointer leave with a grace
 *  delay. Keyboard users get the same menu via focus. */
function useDropdownController() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  // Which dropdown row (by href) has its nested flyout open — a single
  // boolean would show every flyout in the panel at once.
  const [flyoutHref, setFlyoutHref] = useState<string | null>(null)
  const openTimer = useRef<number>(0)
  const closeTimer = useRef<number>(0)
  const rootRef = useRef<HTMLElement>(null)

  const clearTimers = () => {
    window.clearTimeout(openTimer.current)
    window.clearTimeout(closeTimer.current)
  }

  const openMenu = (index: number) => {
    clearTimers()
    if (openIndex === index) return
    // Opening from closed: brief intent delay. Switching menus: swap at once
    // so two panels never fade over each other.
    if (openIndex === null) openTimer.current = window.setTimeout(() => setOpenIndex(index), OPEN_DELAY_MS)
    else setOpenIndex(index)
  }

  const scheduleClose = () => {
    clearTimers()
    closeTimer.current = window.setTimeout(() => {
      setOpenIndex(null)
      setFlyoutHref(null)
    }, CLOSE_DELAY_MS)
  }

  // Close when the route changes (clicking a menu item navigates).
  const { pathname, hash } = useLocation()
  useEffect(() => {
    clearTimers()
    setOpenIndex(null)
    setFlyoutHref(null)
  }, [pathname, hash])

  // Escape closes and re-focuses the section link; outside pointer-down closes.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape' || openIndex === null) return
      event.stopPropagation()
      const link = rootRef.current?.querySelector<HTMLAnchorElement>(`li[data-nav-section='${openIndex}'] > a`)
      setOpenIndex(null)
      setFlyoutHref(null)
      link?.focus()
    }
    const onPointerDown = (event: PointerEvent) => {
      if (openIndex === null) return
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        clearTimers()
        setOpenIndex(null)
        setFlyoutHref(null)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
      clearTimers()
    }
  }, [openIndex])

  return { rootRef, openIndex, flyoutHref, openMenu, scheduleClose, cancelClose: clearTimers, setFlyoutHref }
}

export default function SiteHeader({ onOpenTextSize, onOpenAccount, onOpenMobileMenu }: Props) {
  const { pathname } = useLocation()
  const activeSection = navSections.find((s) => pathname === s.href || pathname.startsWith(s.href + '/'))
  const { rootRef, openIndex, flyoutHref, openMenu, scheduleClose, cancelClose, setFlyoutHref } = useDropdownController()

  const panelVisibility = (open: boolean) =>
    'transition-opacity duration-200 ease-discret ' +
    (open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')

  return (
    <header ref={rootRef} className="sticky top-0 z-40 border-hairline border-b transition-colors duration-300 bg-ivory">
      {/* Utility bar */}
      <div className="hidden border-hairline border-b md:block">
        <div className="flex items-center justify-end gap-2.5 px-4 py-1 sm:px-6">
          <button
            type="button"
            onClick={(e) => onOpenAccount('login', e.currentTarget)}
            className="rounded-sm px-1 text-[11px] font-semibold tracking-[0.08em] text-muted transition-colors hover:text-emerald-cta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-cta"
          >
            Log in
          </button>
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
          <span className="hidden whitespace-nowrap border-hairline border-l pl-4 text-sm text-muted leading-tight md:block">
            <span className="block font-bold text-anthracite uppercase tracking-[0.06em]">June 7–9, 2027</span>
            <span className="block">Centre Mont-Royal, Montréal</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden flex-col items-end gap-2.5 lg:flex">
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={goFrench}
                aria-label="Switch to French"
                className="inline-flex h-10 items-center gap-1 rounded-full border border-hairline px-3 text-[11px] font-semibold tracking-[0.08em] text-muted uppercase transition-colors hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-cta"
              >
                <Globe className="size-3 text-taupe" aria-hidden="true" />
                EN
                <ChevronDown className="size-3 text-taupe" aria-hidden="true" />
              </button>
              <Link
                to="/en/news#sign-up"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 [&_svg]:size-4 [&_svg]:shrink-0 bg-emerald-deep text-gold-light hover:-translate-y-0.5 hover:shadow-emerald focus-visible:outline-gold-light h-10 px-5 text-[11px]"
              >
                Join the waitlist
              </Link>
            </div>

            <nav aria-label="Navigation principale" className="hidden lg:block">
              <ul className="flex items-center gap-1">
                <li className="group relative" key="home">
                  <Link
                    aria-label="Home"
                    to="/en"
                    className="flex items-center rounded-sm px-3 py-2 text-anthracite transition-colors duration-200 ease-discret hover:bg-anthracite/4 hover:text-emerald-cta"
                  >
                    <House className="size-4" aria-hidden="true" />
                  </Link>
                </li>
                {navSections.map((section, index) => {
                  const isOpen = openIndex === index
                  return (
                    <li
                      className="group relative"
                      key={section.href}
                      data-nav-section={index}
                      onMouseEnter={() => openMenu(index)}
                      onMouseLeave={scheduleClose}
                      onFocusCapture={() => {
                        cancelClose()
                        openMenu(index)
                      }}
                      onBlurCapture={(event) => {
                        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) scheduleClose()
                      }}
                    >
                      <Link
                        className={navLinkClass(section === activeSection, isOpen)}
                        to={section.href}
                        aria-expanded={section.plain ? undefined : isOpen}
                        aria-haspopup={section.plain ? undefined : 'true'}
                      >
                        {section.label}
                        {!section.plain && (
                          <ChevronDown
                            className={
                              'size-3.5 transition-transform duration-200 ' +
                              (isOpen ? 'rotate-180 text-white' : 'text-taupe')
                            }
                            aria-hidden="true"
                          />
                        )}
                      </Link>
                      {!section.plain && (
                      <div
                        data-dropdown="true"
                        onMouseEnter={() => cancelClose()}
                        onMouseLeave={scheduleClose}
                        className={'absolute top-full right-0 z-50 min-w-[260px] pt-2 ' + panelVisibility(isOpen)}
                      >
                        <ul className="rounded-sm border border-hairline bg-card py-2 shadow-card-hover">
                          {section.items.map((item) =>
                            item.children ? (
                              <li
                                className="relative"
                                data-side="right"
                                key={item.href}
                                onMouseEnter={() => {
                                  cancelClose()
                                  setFlyoutHref(item.href)
                                }}
                                onMouseLeave={() => setFlyoutHref(null)}
                              >
                                <Link className={subLinkClass} to={item.href}>
                                  <span>{item.label}</span>
                                  <ChevronRight
                                    className={'size-3.5 shrink-0 text-taupe transition-transform duration-200' + (flyoutHref === item.href ? ' rotate-180' : '')}
                                    aria-hidden="true"
                                  />
                                </Link>
                                <div
                                  data-flyout="true"
                                  onMouseEnter={() => cancelClose()}
                                  className={
                                    'absolute top-0 left-full z-50 min-w-[240px] pl-1 transition-opacity duration-200 ease-discret ' +
                                    (flyoutHref === item.href && isOpen
                                      ? 'visible opacity-100 pointer-events-auto'
                                      : 'invisible opacity-0 pointer-events-none')
                                  }
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
                      )}
                    </li>
                  )
                })}
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
