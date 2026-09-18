// "Who's in the room" persona tabs on the home page. The panels were
// client-rendered on the reference site (empty in the SSR snapshot); their
// content was captured by the legacy clone and lives in ./personaPanels.
import { useState } from 'react'
import { personaSectionClassName, PersonaSectionHeader, personaTabs } from '../data/personaTabs'
import { majorsMidTiers, juniorsExploration, investorsDFIs, servicesTech, governmentsMinistries, buyersTraders } from './personaPanels'

const panels: Record<string, React.ReactNode> = {
  majors: majorsMidTiers,
  juniors: juniorsExploration,
  investors: investorsDFIs,
  services: servicesTech,
  governments: governmentsMinistries,
  buyers: buyersTraders,
}

const TRIGGER_CLASS =
  'inline-flex items-center rounded-sm border px-4 py-2 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 shrink-0 gap-2 whitespace-nowrap border-ivory/25 bg-transparent text-champagne/85 hover:border-gold hover:bg-ivory/5 hover:text-ivory focus-visible:outline-champagne data-[state=active]:border-gold data-[state=active]:bg-gold data-[state=active]:text-emerald-deep'

const PANEL_CLASS = 'focus-visible:outline-2 focus-visible:outline-offset-2 mt-10 animate-fade-in focus-visible:outline-champagne'

export default function PersonaTabs() {
  const [active, setActive] = useState(0)

  const onKeyDown = (event: React.KeyboardEvent) => {
    let next: number | null = null
    if (event.key === 'ArrowRight') next = active + 1
    else if (event.key === 'ArrowLeft') next = active - 1
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = personaTabs.length - 1
    if (next === null) return
    event.preventDefault()
    const index = (next + personaTabs.length) % personaTabs.length
    setActive(index)
    document.getElementById(`persona-trigger-${index}`)?.focus()
  }

  return (
    <section className={personaSectionClassName}>
      <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16 relative z-10">
        <PersonaSectionHeader />
        <div className="mt-10">
          <div dir="ltr" data-orientation="horizontal">
            <div
              role="tablist"
              aria-orientation="horizontal"
              className="flex items-center w-full flex-nowrap justify-start gap-2.5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex-wrap lg:overflow-visible lg:pb-0"
              tabIndex={-1}
              data-orientation="horizontal"
              style={{ outline: 'none' }}
              onKeyDown={onKeyDown}
            >
              {personaTabs.map((tab, i) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-controls={`persona-panel-${tab.id}`}
                  data-state={i === active ? 'active' : 'inactive'}
                  id={`persona-trigger-${i}`}
                  className={TRIGGER_CLASS}
                  tabIndex={i === active ? 0 : -1}
                  data-orientation="horizontal"
                  key={tab.id}
                  onClick={() => setActive(i)}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
            {personaTabs.map((tab, i) => (
              <div
                data-state={i === active ? 'active' : 'inactive'}
                data-orientation="horizontal"
                role="tabpanel"
                aria-labelledby={`persona-trigger-${i}`}
                id={`persona-panel-${tab.id}`}
                tabIndex={0}
                className={PANEL_CLASS}
                key={tab.id}
                hidden={i !== active}
              >
                {panels[tab.id]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
