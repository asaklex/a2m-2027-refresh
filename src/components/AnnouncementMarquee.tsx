// Announcement ticker above the header — target chrome from the 2026-09
// redesign screenshots. The message scrolls continuously and pauses on
// hover; screen readers get one static reading (the track is aria-hidden).
function Message() {
  return (
    <>
      Exhibition space for A2M 2027 is allocated on a{' '}
      <strong className="font-bold text-gold-light">first-confirmed basis</strong> — priority placement for early
      confirmations — limited booths available.
    </>
  )
}

const REPEATS = 4

export default function AnnouncementMarquee() {
  return (
    // relative+z-40: the hero pulls up under the marquee+header via its
    // negative --header-h margin; without this it would paint over the
    // marquee (positioned elements stack above static ones).
    <div className="a2m-marquee relative z-40 border-b border-ivory/10 bg-emerald-deep">
      <p className="sr-only">
        <Message />
      </p>
      <div className="a2m-marquee-track items-center py-2" aria-hidden="true">
        {[0, 1].map((half) => (
          <span key={half} className="flex items-center">
            {Array.from({ length: REPEATS }).map((_, i) => (
              <span
                key={i}
                className="flex items-center font-sans text-[11.5px] font-medium tracking-[0.1em] text-champagne/90 uppercase"
              >
                <span className="px-5">
                  <Message />
                </span>
                <span aria-hidden="true" className="text-gold-light">
                  •
                </span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}
