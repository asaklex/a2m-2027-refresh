// Slide-in mobile navigation. Ported from the legacy clone's working
// implementation, restyled with the project's utility classes.
import { useState } from 'react'
import { ChevronDown, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { navSections, legacyFrenchOrigin } from '../data/navigation'
import { useModalA11y } from './dialogs'

type Props = {
  onClose: () => void
  onOpenAccount: (kind: 'login' | 'register') => void
}

export default function MobileMenu({ onClose, onOpenAccount }: Props) {
  const ref = useModalA11y(onClose)
  const navigate = useNavigate()
  const [expanded, setExpanded] = useState<string | null>(null)
  const go = (kind: 'login' | 'register') => {
    onClose()
    onOpenAccount(kind)
  }

  return (
    <div className="fixed inset-0 z-[100] grid justify-items-end bg-[rgba(3,20,16,0.72)] backdrop-blur-[7px]" role="presentation" onMouseDown={onClose}>
      <aside
        ref={ref}
        className="h-full w-[min(420px,92vw)] overflow-y-auto bg-white text-ink shadow-[-24px_0_70px_rgba(3,20,16,0.25)] focus:outline-none"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        tabIndex={-1}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex min-h-[74px] items-center justify-between border-b border-[#dedfdc] px-[22px] font-display text-[18px] font-bold text-emerald-deep">
          <span>A2M 2027</span>
          <button type="button" aria-label="Close menu" onClick={onClose} autoFocus className="grid place-items-center">
            <X size={22} />
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          {navSections.map((section) => {
            const isOpen = expanded === section.label
            return (
              <div className="border-b border-[#e5e5e2]" key={section.label}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  className={'flex min-h-[58px] w-full items-center justify-between px-[22px] text-left text-sm font-semibold text-emerald-deep ' + (isOpen ? '[&>svg]:rotate-180' : '')}
                  onClick={() => setExpanded((current) => (current === section.label ? null : section.label))}
                >
                  <span>{section.label}</span>
                  <ChevronDown size={18} aria-hidden="true" className="transition-transform" />
                </button>
                {isOpen && (
                  <ul className="list-none rounded-none bg-[#f3f5f1] px-0 pb-3.5 pt-1.5">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <button type="button" className="w-full px-8 py-2.5 text-left text-[13px] text-[#68716b]" onClick={() => navigate(item.href)}>
                          {item.label}
                        </button>
                        {item.children && (
                          <ul>
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <button type="button" className="w-full px-12 pb-1.5 text-left text-[12.5px] text-[#68716b]" onClick={() => navigate(child.href)}>
                                  {child.label}
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </nav>
        <div className="grid grid-cols-2 gap-2.5 px-[22px] pb-3 pt-6">
          <button type="button" className="gold-metallic min-h-[46px] border border-[#bc9743] text-[11px] font-bold uppercase tracking-[0.07em] text-emerald-deep" onClick={() => go('register')}>
            Register now
          </button>
          <button type="button" className="min-h-[46px] border border-[#bc9743] text-[11px] font-bold uppercase tracking-[0.07em] text-emerald-deep" onClick={() => go('login')}>
            Log in
          </button>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-[#e5e5e2] px-[22px] pt-4 pb-7 text-xs font-semibold uppercase tracking-[0.06em] text-[#68716b]">
          <span>Language</span>
          <span>
            <button
              type="button"
              onClick={() => window.location.assign(`${legacyFrenchOrigin}/fr`)}
            >
              fr
            </button>
            <span aria-hidden="true"> / </span>
            <button type="button" aria-current="true" disabled className="cursor-default text-emerald-deep">
              en
            </button>
          </span>
        </div>
      </aside>
    </div>
  )
}
