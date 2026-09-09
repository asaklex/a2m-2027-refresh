// Generic accessible tabs, reproducing the reference site's two tab families:
// card triggers with distinct active/inactive styling (mission, pillars,
// conference themes, matchmaking) and sidebar triggers. Keyboard navigation
// matches the original Radix behavior (arrow keys wrap, Home/End).
import { useRef, useState, type ReactNode } from 'react'

export type TabItem = {
  /** Trigger content rendered when this tab is active (state-styled markup). */
  triggerActive: ReactNode
  /** Trigger content rendered when this tab is inactive. */
  triggerInactive: ReactNode
  /** Panel body content. */
  panel: ReactNode
}

type Props = {
  wrapperClassName?: string
  wrapperDir?: string
  /** Wrapper element around the tablist itself (timeline layouts). */
  listWrapperClassName?: string
  /** Decorative siblings rendered before the tablist inside its wrapper. */
  listPreamble?: ReactNode
  listClassName: string
  listAriaLabel?: string
  listAriaOrientation?: 'horizontal' | 'vertical'
  triggerClassActive: string
  triggerClassInactive: string
  panelClassName: string
  panelContainerClassName?: string
  tabs: TabItem[]
}

export default function Tabs({
  wrapperClassName,
  wrapperDir,
  listWrapperClassName,
  listPreamble,
  listClassName,
  listAriaLabel,
  listAriaOrientation,
  triggerClassActive,
  triggerClassInactive,
  panelClassName,
  panelContainerClassName,
  tabs,
}: Props) {
  const [active, setActive] = useState(0)
  const listRef = useRef<HTMLDivElement>(null)
  const vertical = listAriaOrientation === 'vertical'

  const focusTrigger = (index: number) => {
    const next = (index + tabs.length) % tabs.length
    setActive(next)
    const button = listRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]
    button?.focus()
  }

  const onKeyDown = (event: React.KeyboardEvent) => {
    const nextKey = vertical ? 'ArrowDown' : 'ArrowRight'
    const prevKey = vertical ? 'ArrowUp' : 'ArrowLeft'
    if (event.key === nextKey) { event.preventDefault(); focusTrigger(active + 1) }
    else if (event.key === prevKey) { event.preventDefault(); focusTrigger(active - 1) }
    else if (event.key === 'Home') { event.preventDefault(); focusTrigger(0) }
    else if (event.key === 'End') { event.preventDefault(); focusTrigger(tabs.length - 1) }
  }

  const panels = tabs.map((tab, i) => (
    <div
      key={i}
      id={`a2m-tabpanel-${i}`}
      role="tabpanel"
      aria-labelledby={`a2m-tab-${i}`}
      hidden={i !== active}
      className={panelClassName}
    >
      {tab.panel}
    </div>
  ))

  const list = (
    <div
      ref={listRef}
      role="tablist"
      className={listClassName}
      aria-label={listAriaLabel}
      aria-orientation={listAriaOrientation}
      onKeyDown={onKeyDown}
    >
      {tabs.map((tab, i) => (
        <button
          key={i}
          id={`a2m-tab-${i}`}
          type="button"
          role="tab"
          aria-selected={i === active}
          aria-controls={`a2m-tabpanel-${i}`}
          tabIndex={i === active ? 0 : -1}
          className={i === active ? triggerClassActive : triggerClassInactive}
          onClick={() => setActive(i)}
        >
          {i === active ? tab.triggerActive : tab.triggerInactive}
        </button>
      ))}
    </div>
  )

  return (
    <div className={wrapperClassName} dir={wrapperDir}>
      {listWrapperClassName ? (
        <div className={listWrapperClassName}>
          {listPreamble}
          {list}
        </div>
      ) : (
        list
      )}
      {panelContainerClassName ? <div className={panelContainerClassName}>{panels}</div> : panels}
    </div>
  )
}
