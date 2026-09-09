// Modal layers: focus-trapped dialogs for the account notices (login /
// register are not open yet) and the accessibility text-size control.
// Ported from the legacy clone, restyled with the project's utility classes.
import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'

/** Focus trap + Escape handling for modal layers. */
export function useModalA11y(onClose: () => void) {
  const ref = useRef<HTMLElement>(null)
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose
  useEffect(() => {
    const root = ref.current
    if (!root) return
    const focusables = () =>
      Array.from(root.querySelectorAll<HTMLElement>('button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])')).filter((el) => !el.hasAttribute('disabled'))
    ;(focusables()[0] ?? root).focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.stopPropagation()
        onCloseRef.current()
        return
      }
      if (event.key !== 'Tab') return
      const items = focusables()
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && (document.activeElement === first || !root.contains(document.activeElement))) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    root.addEventListener('keydown', onKeyDown)
    return () => root.removeEventListener('keydown', onKeyDown)
  }, [])
  return ref
}

const noticeCopy = {
  login: {
    title: 'Login opening soon',
    body: "The delegate portal opens about eight weeks before the event. You'll be able to sign in here once registration is open.",
  },
  register: {
    title: 'Registration opening soon',
    body: 'Registration for A2M 2027 will open soon. Subscribe to the newsletter at the bottom of the page to be notified as soon as it opens.',
  },
} as const

const backdropClass = 'fixed inset-0 z-[100] grid bg-[rgba(3,20,16,0.72)] backdrop-blur-[7px]'
const modalClass =
  'relative w-[min(520px,100%)] max-h-[calc(100vh-40px)] overflow-y-auto rounded-sm border border-[rgba(188,151,67,0.35)] bg-white p-[52px] text-ink shadow-[0_28px_90px_rgba(3,20,16,0.35)] focus:outline-none max-sm:p-11 max-sm:px-6 max-sm:pb-7'
const closeButtonClass = 'absolute top-[17px] right-[17px] grid size-[38px] cursor-pointer place-items-center border-0 bg-transparent text-emerald-deep'
const primaryButtonClass =
  'min-h-12 cursor-pointer rounded-sm border-0 bg-[linear-gradient(135deg,#e0bd68,#b8923f)] px-6 text-[11px] font-bold uppercase tracking-[0.08em] text-[#17251f]'

export function NoticeDialog({ kind, onClose }: { kind: 'login' | 'register'; onClose: () => void }) {
  const ref = useModalA11y(onClose)
  const copy = noticeCopy[kind]
  return (
    <div className={backdropClass + ' place-items-center p-5'} role="presentation" onMouseDown={onClose}>
      <section ref={ref} className={modalClass} role="dialog" aria-modal="true" aria-labelledby="a2m-notice-title" tabIndex={-1} onMouseDown={(event) => event.stopPropagation()}>
        <button className={closeButtonClass} type="button" aria-label="Close dialog" onClick={onClose} autoFocus>
          <X size={20} />
        </button>
        <h2 id="a2m-notice-title" className="mb-3.5 font-display text-[34px] leading-[1.05] text-emerald-deep">
          {copy.title}
        </h2>
        <p className="mb-7 text-sm leading-[1.65] text-[#68716b]">{copy.body}</p>
        <button type="button" className={primaryButtonClass} onClick={onClose}>
          Close
        </button>
      </section>
    </div>
  )
}

const TEXT_SIZE_KEY = 'a2m-text-size'
const textSizeOptions = [
  { label: 'A', percent: 100 },
  { label: 'A+', percent: 120 },
  { label: 'A++', percent: 140 },
] as const

export function applyTextSize(percent: number) {
  document.documentElement.style.fontSize = percent === 100 ? '' : `${(percent / 100) * 16}px`
}

export function restoreTextSize() {
  const saved = Number(window.localStorage.getItem(TEXT_SIZE_KEY))
  if (saved) applyTextSize(saved)
}

export function TextSizeDialog({ onClose }: { onClose: () => void }) {
  const ref = useModalA11y(onClose)
  const [percent, setPercent] = useState(() => Number(window.localStorage.getItem(TEXT_SIZE_KEY)) || 100)
  const choose = (value: number) => {
    setPercent(value)
    applyTextSize(value)
    window.localStorage.setItem(TEXT_SIZE_KEY, String(value))
  }
  return (
    <div className={backdropClass + ' place-items-center p-5'} role="presentation" onMouseDown={onClose}>
      <section ref={ref} className={modalClass} role="dialog" aria-modal="true" aria-labelledby="a2m-textsize-title" tabIndex={-1} onMouseDown={(event) => event.stopPropagation()}>
        <button className={closeButtonClass} type="button" aria-label="Close dialog" onClick={onClose}>
          <X size={20} />
        </button>
        <h2 id="a2m-textsize-title" className="mb-3.5 font-display text-[34px] leading-[1.05] text-emerald-deep">
          Text size
        </h2>
        <p className="mb-7 text-sm leading-[1.65] text-[#68716b]">Make the site easier to read by adjusting the size of all text. Your preference is saved on this device.</p>
        <div className="mb-6 flex items-center gap-2.5" role="group" aria-label="Text size options">
          {textSizeOptions.map((option) => (
            <button
              key={option.label}
              type="button"
              aria-pressed={percent === option.percent}
              className={
                'min-h-12 min-w-14 cursor-pointer rounded-sm border text-sm font-bold ' +
                (percent === option.percent ? 'border-emerald-deep bg-emerald-deep text-white' : 'border-[#d7d8d4] bg-white text-emerald-deep')
              }
              onClick={() => choose(option.percent)}
            >
              {option.label}
            </button>
          ))}
          <span className="ml-auto text-[13px] text-[#68716b] tabular-nums" aria-live="polite">
            {percent}%
          </span>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            className="min-h-12 cursor-pointer rounded-sm border border-[#d7d8d4] bg-transparent px-5 text-[11px] font-bold uppercase tracking-[0.08em] text-emerald-deep"
            onClick={() => choose(100)}
          >
            Reset
          </button>
          <button type="button" className={primaryButtonClass} onClick={onClose}>
            Close
          </button>
        </div>
      </section>
    </div>
  )
}
