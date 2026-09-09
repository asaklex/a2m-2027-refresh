// About-page contact form (client-rendered on the reference site; markup
// captured by the legacy clone). Interest checkboxes are interactive and
// submitting shows the same courtesy confirmation as before.
import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

const interests: { id: string; label: string }[] = [
  { id: 'interestInvestment', label: 'Investment Opportunities' },
  { id: 'interestExhibit', label: 'Exhibit at A2M' },
  { id: 'interestSponsorship', label: 'Sponsorship' },
  { id: 'interestGovernment', label: 'Government / Ministerial Participation' },
  { id: 'interestMedia', label: 'Media Partnership' },
  { id: 'interestSpeaker', label: 'Speaker / Panellist Inquiry' },
  { id: 'interestPartnership', label: 'Partnership with A2M' },
  { id: 'interestGeneral', label: 'General Inquiry' },
]

const fields: { id: string; label: string; type?: string; autoComplete?: string; required?: boolean; half?: boolean }[] = [
  { id: 'firstName', label: 'First name', autoComplete: 'given-name', required: true, half: true },
  { id: 'lastName', label: 'Last name', autoComplete: 'family-name', required: true, half: true },
  { id: 'company', label: 'Organization / Company', autoComplete: 'organization', half: true },
  { id: 'jobTitle', label: 'Job title', autoComplete: 'organization-title', half: true },
  { id: 'email', label: 'Email', type: 'email', autoComplete: 'email', required: true, half: true },
  { id: 'phone', label: 'Phone number', type: 'tel', autoComplete: 'tel', half: true },
]

const inputClass =
  'h-14 w-full rounded-sm border border-hairline bg-card px-[18px] font-sans text-ink outline-none transition-all duration-[250ms] ease-discret placeholder:text-anthracite/35 focus:border-emerald-cta focus:shadow-[0_0_0_3px_rgba(15,61,46,0.14)] aria-[invalid=true]:border-deepred aria-[invalid=true]:shadow-[0_0_0_3px_rgba(122,31,31,0.1)] disabled:cursor-not-allowed disabled:bg-anthracite/4 disabled:text-subtle'

const labelClass = 'mb-2 block font-sans font-semibold text-[11px] text-muted uppercase tracking-[0.1em]'

function InterestCheckbox({ id, label, checked, onToggle }: { id: string; label: string; checked: boolean; onToggle: () => void }) {
  return (
    <label htmlFor={`interest-${id}`} className="flex cursor-pointer items-center gap-3 rounded-sm border border-hairline bg-ivory px-3.5 py-3 transition-colors hover:border-gold">
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        data-state={checked ? 'checked' : 'unchecked'}
        value="on"
        className="flex size-5 shrink-0 items-center justify-center rounded-sm border-[1.5px] border-taupe bg-card transition-colors duration-200 ease-discret outline-none data-[state=checked]:border-emerald-cta data-[state=checked]:bg-emerald-cta data-[state=checked]:text-white focus-visible:outline-2 focus-visible:outline-emerald-cta focus-visible:outline-offset-2"
        id={`interest-${id}`}
        onClick={onToggle}
      >
        {checked && <Check className="size-4" aria-hidden="true" />}
      </button>
      <input
        aria-hidden="true"
        tabIndex={-1}
        type="checkbox"
        value="on"
        checked={checked}
        onChange={() => {}}
        style={{ position: 'absolute', pointerEvents: 'none', opacity: '0', margin: '0px', transform: 'translateX(-100%)', width: '24px', height: '24px' }}
      />
      <span className="text-ink text-small">{label}</span>
    </label>
  )
}

export default function ContactForm() {
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const [done, setDone] = useState(false)

  if (done) {
    return (
      <div className="grid w-full gap-[5px] rounded-sm border border-[rgba(15,61,46,0.25)] bg-card p-[22px] shadow-card text-emerald-deep">
        <strong>Thank you.</strong>
        <span className="text-[13px] opacity-70">Your information has been received.</span>
      </div>
    )
  }

  return (
    <form
      noValidate
      className="w-full rounded-sm border border-hairline bg-card p-6 shadow-card sm:p-8"
      onSubmit={(event) => {
        event.preventDefault()
        setDone(true)
      }}
    >
      <fieldset>
        <legend className="block font-display font-semibold text-[15px] text-ink">What are you interested in?</legend>
        <p className="mt-1 text-small text-subtle">Please select all that apply.</p>
        <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {interests.map((interest) => (
            <InterestCheckbox
              key={interest.id}
              id={interest.id}
              label={interest.label}
              checked={Boolean(checked[interest.id])}
              onToggle={() => setChecked((current) => ({ ...current, [interest.id]: !current[interest.id] }))}
            />
          ))}
        </div>
      </fieldset>
      <fieldset className="mt-9 border-hairline border-t pt-7">
        <legend className="sr-only">Your information</legend>
        <p className="font-display font-semibold text-[15px] text-ink">Your information</p>
        <p className="mt-1 text-small text-subtle">Please fill in all required fields.</p>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {fields.map((field) => (
            <div className="flex flex-col" key={field.id}>
              <label className={labelClass} htmlFor={field.id}>
                {field.label}
              </label>
              <input
                className={inputClass}
                id={field.id}
                autoComplete={field.autoComplete}
                aria-invalid="false"
                required={field.required}
                type={field.type}
                name={field.id}
              />
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-col">
          <label className={labelClass} htmlFor="country">
            Country
          </label>
          <input className={inputClass} id="country" autoComplete="country-name" name="country" />
        </div>
        <div className="mt-5 flex flex-col">
          <label className={labelClass} htmlFor="message">
            Message
          </label>
          <textarea
            className="min-h-[140px] w-full rounded-sm border border-hairline bg-card px-[18px] py-4 font-sans text-ink outline-none transition-all duration-[250ms] ease-discret placeholder:text-anthracite/35 focus:border-emerald-cta focus:shadow-[0_0_0_3px_rgba(15,61,46,0.14)] aria-[invalid=true]:border-deepred aria-[invalid=true]:shadow-[0_0_0_3px_rgba(122,31,31,0.1)]"
            id="message"
            aria-invalid="false"
            name="message"
          />
        </div>
      </fieldset>
      <button
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 [&_svg]:size-4 [&_svg]:shrink-0 gold-metallic text-anthracite hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold focus-visible:outline-anthracite h-14 px-9 text-[13px] mt-7"
        type="submit"
      >
        Reach us
        <ArrowRight aria-hidden="true" />
      </button>
    </form>
  )
}
