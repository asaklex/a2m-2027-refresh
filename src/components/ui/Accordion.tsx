// Single-open accordion matching the reference's Radix markup (the panel
// contents themselves were client-rendered upstream and are empty in the
// archived snapshots, so panels stay empty until content is authored).
import { useState, type CSSProperties, type ReactNode } from 'react'

export type AccordionItem = {
  itemClassName: string
  triggerClassName: string
  trigger: ReactNode
  panel: ReactNode
}

export default function Accordion({ items, containerClassName }: { items: AccordionItem[]; containerClassName?: string }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div data-orientation="vertical" className={containerClassName}>
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div
            data-state={isOpen ? 'open' : 'closed'}
            data-orientation="vertical"
            className={item.itemClassName}
            key={i}
          >
            <h3 data-orientation="vertical" data-state={isOpen ? 'open' : 'closed'} className="flex">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`a2m-acc-panel-${i}`}
                data-state={isOpen ? 'open' : 'closed'}
                data-orientation="vertical"
                id={`a2m-acc-trigger-${i}`}
                className={item.triggerClassName}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                {item.trigger}
              </button>
            </h3>
            <div
              data-state={isOpen ? 'open' : 'closed'}
              id={`a2m-acc-panel-${i}`}
              hidden={!isOpen}
              role="region"
              aria-labelledby={`a2m-acc-trigger-${i}`}
              data-orientation="vertical"
              className="overflow-hidden text-body text-muted data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
              style={{ '--radix-accordion-content-height': 'var(--radix-collapsible-content-height)', '--radix-accordion-content-width': 'var(--radix-collapsible-content-width)' } as CSSProperties}
            >
              {item.panel}
            </div>
          </div>
        )
      })}
    </div>
  )
}
