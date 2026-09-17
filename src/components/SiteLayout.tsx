// App shell: skip link, header, main outlet with the reference site's
// page-enter animation, footer and the global modal layers.
import { useEffect, useRef, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import ClosingCtaBand from './ClosingCtaBand'
import AnnouncementMarquee from './AnnouncementMarquee'
import StickyWaitlistBar from './StickyWaitlistBar'
import MobileMenu from './MobileMenu'
import { NoticeDialog, TextSizeDialog, restoreTextSize } from './dialogs'
import { AccountDialogContext } from './AccountDialogContext'
import { routes } from '../routes'

type DialogName = 'login' | 'register' | 'text-size' | null

const titleFor = (pathname: string) => routes.find((r) => r.path === pathname)?.title ?? 'Page not found · A2M 2027'

function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-content-center justify-items-start gap-[18px] bg-[#f7f5ef] px-6 py-10 text-ink" id="main">
      <h1 className="m-0 font-display text-[42px] text-emerald-deep">Page not found</h1>
      <p className="m-0 text-[15px] text-[#68716b]">The page you are looking for does not exist.</p>
      <Link className="inline-flex min-h-12 cursor-pointer items-center rounded-sm border-0 bg-[linear-gradient(135deg,#e0bd68,#b8923f)] px-6 text-[11px] font-bold uppercase tracking-[0.08em] text-[#17251f] hover:-translate-y-0.5" to="/en">
        Back to homepage
      </Link>
    </main>
  )
}

export default function SiteLayout() {
  const { pathname, hash } = useLocation()
  const [dialog, setDialog] = useState<DialogName>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [notFound, setNotFound] = useState(false)
  const lastTriggerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    setNotFound(!routes.some((r) => r.path === pathname))
  }, [pathname])

  // Per-route document metadata.
  useEffect(() => {
    document.documentElement.lang = 'en'
    document.title = titleFor(pathname)
  }, [pathname])

  // Restore the persisted text-size preference once on mount.
  useEffect(() => {
    restoreTextSize()
  }, [])

  // Scroll management: top on navigation, to the anchor when a hash is present.
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        try {
          document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ block: 'start' })
        } catch {
          // Ignore malformed hashes.
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
      }
    })
    return () => window.cancelAnimationFrame(frame)
  }, [pathname, hash])

  // Lock body scroll while a modal layer is open.
  useEffect(() => {
    if (!dialog && !mobileOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [dialog, mobileOpen])

  // Restore focus to the trigger once every modal layer has closed.
  useEffect(() => {
    if (dialog || mobileOpen) return
    const trigger = lastTriggerRef.current
    if (trigger && document.contains(trigger)) trigger.focus()
    lastTriggerRef.current = null
  }, [dialog, mobileOpen])

  // Placeholder "#" links (dead "Read more" affordances) stay inert, as on
  // the archived site.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest?.('a[href="#"]')
      if (anchor) event.preventDefault()
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  const openAccount = (kind: 'login' | 'register', trigger?: HTMLElement) => {
    if (trigger) lastTriggerRef.current = trigger
    setDialog(kind)
  }

  return (
    <AccountDialogContext.Provider value={{ openAccount }}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:rounded-sm focus:bg-emerald-cta focus:px-4 focus:py-2 focus:font-semibold focus:text-[12px] focus:text-white focus:uppercase focus:tracking-[0.06em]">
        Skip to main content
      </a>
      <AnnouncementMarquee />
      <SiteHeader
        onOpenTextSize={(trigger) => {
          lastTriggerRef.current = trigger
          setDialog('text-size')
        }}
        onOpenAccount={openAccount}
        onOpenMobileMenu={(trigger) => {
          lastTriggerRef.current = trigger
          setMobileOpen(true)
        }}
      />
      {notFound ? (
        <NotFound />
      ) : (
        <main id="main" className="flex-1">
          <div className="a2m-page-enter" key={pathname}>
            <Outlet />
          </div>
        </main>
      )}
      {/* Closing CTA band glued flush to the footer (shot 5.39.43). */}
      <ClosingCtaBand />
      <SiteFooter />
      {/* Clearance for the fixed waitlist bar so the legal line stays readable. */}
      <div aria-hidden="true" className="h-[57px]" />
      <StickyWaitlistBar />
      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} onOpenAccount={openAccount} />}
      {(dialog === 'login' || dialog === 'register') && <NoticeDialog kind={dialog} onClose={() => setDialog(null)} />}
      {dialog === 'text-size' && <TextSizeDialog onClose={() => setDialog(null)} />}
    </AccountDialogContext.Provider>
  )
}
