// Home KPI band. The original site animated the numbers in on scroll; the
// `a2m-kpi-on` class is added by an IntersectionObserver, replaying the same
// keyframes (draw rule, rise, reveal) defined in index.css.
import { useEffect, useRef, useState, type ReactNode } from 'react'

type Kpi = { value: string; label: string }

export default function KpiBand({ items, footnote }: { items: Kpi[]; footnote?: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setOn(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(root)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="a2m-motif relative overflow-hidden bg-emerald-deep text-ivory">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-28 bg-gradient-to-b from-emerald-deep to-transparent" />
      <div className={'mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16 relative z-10 py-12 lg:py-14' + (on ? ' a2m-kpi-on' : '')} ref={ref}>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {items.map((kpi) => (
            <div className="flex flex-col items-center text-center" key={kpi.label}>
              <span className="a2m-kpi-rule mb-3 h-0.5 w-8 bg-gold" aria-hidden="true" />
              <span className="a2m-kpi-num tnum font-display font-bold text-data-xl text-champagne">{kpi.value}</span>
              <span className="a2m-kpi-label mt-2 font-semibold text-[11px] text-ivory/80 uppercase tracking-[0.18em]">{kpi.label}</span>
            </div>
          ))}
        </div>
        {footnote ? (
          <p className="mt-8 text-center font-medium text-[11px] text-champagne/60 uppercase tracking-[0.14em]">{footnote}</p>
        ) : null}
      </div>
    </section>
  )
}
