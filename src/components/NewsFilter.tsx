// News topic filter: the reference site rendered the filter tabs and card
// grid client-side; the archived snapshots preserve the initial grid, and
// this component restores the working filter.
import { Fragment, useState, type ReactNode } from 'react'

type Tab = { value: string; label: string }
type Card = { topic: string; node: ReactNode }

const TRIGGER_CLASS =
  'inline-flex items-center rounded-sm border border-hairline bg-card px-4 py-2 font-semibold text-muted transition-colors hover:border-gold hover:text-ink focus-visible:outline-2 focus-visible:outline-emerald-cta focus-visible:outline-offset-2 data-[state=active]:border-emerald-cta data-[state=active]:bg-emerald-cta data-[state=active]:text-white'

export default function NewsFilter({ tabs, cards }: { tabs: Tab[]; cards: Card[] }) {
  const [value, setValue] = useState(tabs[0]?.value ?? 'all')
  const visible = value === 'all' ? cards : cards.filter((card) => card.topic.toLowerCase() === value.toLowerCase())

  const onKeyDown = (event: React.KeyboardEvent) => {
    let next: number | null = null
    const index = tabs.findIndex((t) => t.value === value)
    if (event.key === 'ArrowRight') next = index + 1
    else if (event.key === 'ArrowLeft') next = index - 1
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = tabs.length - 1
    if (next === null) return
    event.preventDefault()
    const target = (next + tabs.length) % tabs.length
    setValue(tabs[target].value)
    document.getElementById(`news-filter-trigger-${target}`)?.focus()
  }

  return (
    <>
      <div dir="ltr" data-orientation="horizontal">
        <div
          role="tablist"
          aria-orientation="horizontal"
          className="flex flex-wrap items-center gap-2"
          tabIndex={-1}
          data-orientation="horizontal"
          style={{ outline: 'none' }}
          onKeyDown={onKeyDown}
        >
          {tabs.map((tab, i) => (
            <button
              type="button"
              role="tab"
              aria-selected={tab.value === value}
              aria-controls={`news-filter-panel-${tab.value}`}
              data-state={tab.value === value ? 'active' : 'inactive'}
              id={`news-filter-trigger-${i}`}
              className={TRIGGER_CLASS}
              tabIndex={tab.value === value ? 0 : -1}
              data-orientation="horizontal"
              key={tab.value}
              onClick={() => setValue(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" aria-live="polite">
        {visible.map((card, i) => (
          <Fragment key={i}>{card.node}</Fragment>
        ))}
      </div>
    </>
  )
}
