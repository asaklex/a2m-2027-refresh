import { Link } from 'react-router-dom'

export default function HonoraryCountryPage() {
  return (
    <>
  <div className="a2m-motif relative overflow-hidden border-hairline border-b bg-emerald-deep text-ivory">
    <img alt="" aria-hidden="true" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="100vw" srcSet="/images/home/cote-divoire.jpg 640w, /images/home/cote-divoire.jpg 750w, /images/home/cote-divoire.jpg 828w, /images/home/cote-divoire.jpg 1080w, /images/home/cote-divoire.jpg 1200w, /images/home/cote-divoire.jpg 1920w, /images/home/cote-divoire.jpg 2048w, /images/home/cote-divoire.jpg 3840w" src="/images/home/cote-divoire.jpg" />
    <div aria-hidden="true" className="absolute inset-0 backdrop-blur-[6px]" style={{ maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 36%, rgba(0,0,0,0) 72%)', WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 36%, rgba(0,0,0,0) 72%)' }} />
    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-emerald-deep/95 via-emerald-deep/70 to-emerald-deep/25" />
    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-emerald-deep/90 to-transparent" />
    <div className="mx-auto w-full relative z-10 flex min-h-[420px] max-w-none flex-col justify-center px-4 py-12 sm:px-6 lg:min-h-[520px] lg:px-6 lg:py-16">
      <div className="mb-6 [&_[aria-current]]:text-champagne [&_a]:text-champagne/80 [&_svg]:text-champagne/40">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-[12px] text-subtle">
            <li>
              <Link className="transition-colors hover:text-emerald-cta" to="/en">
                Home
              </Link>
            </li>
            <li className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right size-3.5 text-hairline" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
              <Link className="transition-colors hover:text-emerald-cta" to="/en/program">
                Features
              </Link>
            </li>
            <li className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right size-3.5 text-hairline" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
              <span aria-current="page" className="text-muted">
                Honorary Country
              </span>
            </li>
          </ol>
        </nav>
      </div>
      <span className="font-semibold text-[11px] text-gold uppercase tracking-[0.26em] [text-shadow:0_1px_10px_rgba(3,20,16,0.55)]">
        Features
      </span>
      <h1 className="mt-3 max-w-[760px] font-bold text-[1.7rem] text-ivory leading-[1.15] tracking-[-0.005em] [font-family:var(--font-display)] [text-shadow:0_2px_20px_rgba(3,20,16,0.55)] sm:text-[2.4rem] sm:leading-[1.1] lg:text-[2.75rem]">
        One
        <span className="text-gold">
          Honorary Country
        </span>
        , a continental showcase
      </h1>
      <span className="mt-5 block h-0.5 w-10 rounded-full bg-gold" aria-hidden="true" />
      <p className="mt-4 max-w-[640px] text-champagne/90 text-lead [text-shadow:0_1px_14px_rgba(3,20,16,0.6)]">
        Each A2M edition designates one African country as its Guest Honorary Country. For 2027, it is Côte d'Ivoire.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-ivory/15 border-t pt-6 lg:mt-12">
        <div className="flex items-center gap-2.5">
          <div>
            <p className="font-semibold text-[10px] text-champagne/85 uppercase tracking-[0.16em]">
              Honorary Country 2027
            </p>
            <p className="font-display font-semibold text-[14px] text-ivory leading-tight">
              Côte d'Ivoire
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16">
    <div className="py-14 lg:py-16">
      <div className="flex flex-col gap-6">
        <p className="max-w-[760px] text-lead text-muted">
          Each A2M edition designates one African country as its Guest Honorary Country. For 2027, it is Côte d'Ivoire.
        </p>
        <div className="flex flex-col gap-8">
          <div className="max-w-[760px] rounded-sm border-l-2 border-l-gold bg-surface px-6 py-5">
            <p className="mb-1 font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
              Côte d'Ivoire · Honorary Country 2027
            </p>
            <p className="text-body text-muted">
              Côte d'Ivoire will lead a high-level delegation to Montréal to present its flagship projects to Canadian investors and operators.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-sm border border-hairline bg-card p-5 shadow-card">
              <span className="tnum block font-display font-bold text-data-xl text-emerald-deep">
                #1
              </span>
              <span className="mt-1 block text-small text-muted">
                gold exploration destination in West Africa
              </span>
            </div>
            <div className="rounded-sm border border-hairline bg-card p-5 shadow-card">
              <span className="tnum block font-display font-bold text-data-xl text-emerald-deep">
                20+
              </span>
              <span className="mt-1 block text-small text-muted">
                Canadian TSX companies already operating
              </span>
            </div>
            <div className="rounded-sm border border-hairline bg-card p-5 shadow-card">
              <span className="tnum block font-display font-bold text-data-xl text-emerald-deep">
                58 t
              </span>
              <span className="mt-1 block text-small text-muted">
                of gold produced in 2024
              </span>
            </div>
            <div className="rounded-sm border border-hairline bg-card p-5 shadow-card">
              <span className="tnum block font-display font-bold text-data-xl text-emerald-deep">
                100 t/an
              </span>
              <span className="mt-1 block text-small text-muted">
                production target by 2030
              </span>
            </div>
          </div>
          <div className="grid gap-4 grid-cols-1">
            <figure className="flex flex-col gap-1.5">
              <div style={{ aspectRatio: '16 / 9' }} className="relative overflow-hidden rounded-sm border border-hairline bg-surface w-full">
                <img alt="West African gold mining (illustrative)" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" srcSet="/images/home/cote-divoire.jpg 256w, /images/home/cote-divoire.jpg 384w, /images/home/cote-divoire.jpg 640w, /images/home/cote-divoire.jpg 750w, /images/home/cote-divoire.jpg 828w, /images/home/cote-divoire.jpg 1080w, /images/home/cote-divoire.jpg 1200w, /images/home/cote-divoire.jpg 1920w, /images/home/cote-divoire.jpg 2048w, /images/home/cote-divoire.jpg 3840w" src="/images/home/cote-divoire.jpg" />
              </div>
              <figcaption className="text-[11px] text-subtle">
                <a href="https://commons.wikimedia.org/wiki/File:Chegga_Artisanal_Mining.jpg" target="_blank" rel="noopener noreferrer" className="underline-offset-2 transition-colors hover:text-muted hover:underline">
                  Will Dossett — Wikimedia Commons
                  · CC BY-SA 4.0
                </a>
              </figcaption>
            </figure>
          </div>
          <h3 className="max-w-[760px] font-display font-semibold text-h3 text-ink">
            Why Côte d'Ivoire
          </h3>
          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
            Côte d'Ivoire is the largest economy in the West African Economic and Monetary Union (WAEMU) and one of the continent's fastest-growing mining jurisdictions. Building on two decades of political and economic stabilization, the country has turned its mining sector into a pillar of its National Development Plan, with a modern mining code, streamlined permitting and an explicit target of multiplying gold production by 2030.
          </p>
          <p className="max-w-[760px] text-lead text-muted leading-[1.7]">
            Canadian-listed operators are central to that story. Barrick, Endeavour Mining, Allied Gold, Fortuna and Montage all run mines or advanced projects in the country, making Côte d'Ivoire one of the clearest illustrations of the Canada-Africa mining relationship that A2M exists to accelerate.
          </p>
          <h3 className="max-w-[760px] font-display font-semibold text-h3 text-ink">
            Flagship minerals
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="h-full">
              <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                  Gold
                </h3>
                <p className="text-body text-muted">
                  A producing cluster of world-class mines — Tongon, Ity, Yaouré, Sissingué, Agbaou, Bonikro and Séguéla — with one of West Africa's most active exploration pipelines.
                </p>
              </div>
            </div>
            <div className="h-full">
              <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                  Manganese
                </h3>
                <p className="text-body text-muted">
                  Fast-growing exports from the south-west deposits, positioning the country among Africa's emerging suppliers to global steel and battery chains.
                </p>
              </div>
            </div>
            <div className="h-full">
              <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                  Nickel & cobalt
                </h3>
                <p className="text-body text-muted">
                  The Biankouma-Sipilou lateritic deposits hold battery-grade nickel and cobalt — directly relevant to critical-minerals supply chains.
                </p>
              </div>
            </div>
            <div className="h-full">
              <div className="rounded-sm border transition-all duration-[250ms] ease-discret border-hairline bg-card shadow-card hover:-translate-y-1 hover:border-gold hover:shadow-card-hover flex h-full flex-col gap-3 p-6">
                <h3 className="flex items-center gap-2.5 font-display font-semibold text-h3 text-ink">
                  Bauxite & iron ore
                </h3>
                <p className="text-body text-muted">
                  Large reserved deposits in the west opening a second mining cycle, with infrastructure corridors shared with Guinea and Liberia under study.
                </p>
              </div>
            </div>
          </div>
          <h3 className="max-w-[760px] font-display font-semibold text-h3 text-ink">
            What Côte d'Ivoire brings to A2M 2027
          </h3>
          <ul className="flex max-w-[760px] flex-col gap-3">
            <li className="flex items-start gap-3 text-body text-muted">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>
                A ministerial-level delegation led by the ministry in charge of mines
              </span>
            </li>
            <li className="flex items-start gap-3 text-body text-muted">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>
                A national pavilion and presentation of flagship projects to Canadian investors and operators
              </span>
            </li>
            <li className="flex items-start gap-3 text-body text-muted">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>
                Participation in the Ministerial Roundtable on June 6 and a featured role across the three-day program
              </span>
            </li>
            <li className="flex items-start gap-3 text-body text-muted">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-1 size-4 shrink-0 text-emerald-cta" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>
                A cultural and economic showcase of Ivorian industry, entrepreneurship and investment readiness
              </span>
            </li>
          </ul>
          <div className="max-w-[760px] rounded-sm border-l-2 border-l-gold bg-surface px-6 py-5">
            <p className="mb-1 font-semibold text-[11px] text-copper uppercase tracking-[0.18em]">
              The Honorary Country program
            </p>
            <p className="text-body text-muted">
              The Honorary Country receives dedicated support from A2M Events Inc. before, during, and after the event: program co-design, stand production, delegation logistics, media coordination, and a certified post-event report on partnerships expressed and contacts qualified.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16 border-hairline border-t py-8">
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex min-h-10 items-center">
        <Link className="group inline-flex items-center gap-2 font-semibold text-emerald-cta text-small transition-colors hover:text-emerald-deep" to="/en/program/ministerial-roundtable">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left size-4 transition-transform group-hover:-translate-x-1" aria-hidden="true">
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Ministerial Roundtable
        </Link>
      </div>
      <Link className="font-semibold text-muted text-small underline-offset-4 transition-colors hover:text-emerald-cta hover:underline" to="/en/program">
        Back to Features
      </Link>
      <div className="flex min-h-10 items-center justify-end">
        <Link className="group inline-flex items-center gap-2 font-semibold text-emerald-cta text-small transition-colors hover:text-emerald-deep" to="/en/program/women-in-mining">
          Women in Mining Forum
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4 transition-transform group-hover:translate-x-1" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  </div>
    </>
  )
}
