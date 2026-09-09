// Inert capture form: the original site recorded interest without a public
// backend; submitting shows the same courtesy confirmation.
import { useState, type ReactNode } from 'react'

export default function FakeForm({ className, children }: { className?: string; children: ReactNode }) {
  const [done, setDone] = useState(false)
  if (done) {
    return (
      <div className="grid gap-[5px] rounded-sm border border-[rgba(15,61,46,0.25)] bg-white p-[22px] text-emerald-deep">
        <strong>Thank you.</strong>
        <span className="text-[13px] opacity-70">Your information has been received.</span>
      </div>
    )
  }
  return (
    <form
      className={className}
      onSubmit={(event) => {
        event.preventDefault()
        setDone(true)
      }}
    >
      {children}
    </form>
  )
}
