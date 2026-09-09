import { Link } from 'react-router-dom'

export default function SitemapPage() {
  return (
    <>
  <div className="a2m-motif relative overflow-hidden border-hairline border-b bg-emerald-deep text-ivory">
    <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16 relative z-10 py-12 lg:py-16">
      <div className="mb-6 [&_a]:text-champagne/80 [&_[aria-current]]:text-champagne [&_svg]:text-champagne/40">
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
              <span aria-current="page" className="text-muted">
                Sitemap
              </span>
            </li>
          </ol>
        </nav>
      </div>
      <h1 className="mt-3 max-w-[820px] font-display font-bold text-h1 text-ivory tracking-[-0.01em]">
        Sitemap
      </h1>
    </div>
  </div>
  <section className="a2m-reveal py-14 lg:py-16">
    <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-16">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <nav aria-label="A2M Overview">
          <Link className="font-display font-semibold text-h3 text-emerald-deep hover:text-emerald-cta" to="/en/about">
            A2M Overview
          </Link>
          <ul className="mt-4 flex flex-col gap-2 border-hairline border-l pl-4">
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/about#conference">
                A2M 2027
              </Link>
            </li>
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/about#why-participate">
                Why Participate?
              </Link>
            </li>
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/about#strategic-partners">
                Institutional Endorsements
              </Link>
            </li>
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/about#advisory-board">
                Advisory Board
              </Link>
            </li>
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/about#meet-the-team">
                Meet the Team
              </Link>
            </li>
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/about#sustainability">
                Sustainability
              </Link>
            </li>
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/about#contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <nav aria-label="Features">
          <Link className="font-display font-semibold text-h3 text-emerald-deep hover:text-emerald-cta" to="/en/program">
            Features
          </Link>
          <ul className="mt-4 flex flex-col gap-2 border-hairline border-l pl-4">
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/program#highlights">
                Highlights
              </Link>
            </li>
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/program#sessions">
                Program overview
              </Link>
            </li>
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/program#speakers">
                Speakers & Panellists
              </Link>
            </li>
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/program#schedule">
                Agenda
              </Link>
            </li>
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/program/ministerial-roundtable">
                Ministerial Roundtable
              </Link>
              <ul className="mt-2 flex flex-col gap-1.5 border-hairline border-l pl-4">
                <li>
                  <Link className="text-muted text-small transition-colors hover:text-emerald-cta" to="/en/program/ministerial-roundtable#ministerial-round-table">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link className="text-muted text-small transition-colors hover:text-emerald-cta" to="/en/program/ministerial-roundtable#canada-africa-strategy">
                    Canada's Africa Strategy
                  </Link>
                </li>
                <li>
                  <Link className="text-muted text-small transition-colors hover:text-emerald-cta" to="/en/program/ministerial-roundtable#honorary-patron">
                    Honorary Patron
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/program/honorary-country">
                Honorary Country
              </Link>
            </li>
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/program/women-in-mining">
                Women in Mining Forum
              </Link>
            </li>
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/program/investors-breakfast">
                Investors' Breakfast
              </Link>
            </li>
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/program#matchmaking">
                Business Matchmaking
              </Link>
            </li>
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/program/networking">
                Networking & Social Events
              </Link>
            </li>
          </ul>
        </nav>
        <nav aria-label="Exhibit or Sponsor">
          <Link className="font-display font-semibold text-h3 text-emerald-deep hover:text-emerald-cta" to="/en/exhibit-sponsor">
            Exhibit or Sponsor
          </Link>
          <ul className="mt-4 flex flex-col gap-2 border-hairline border-l pl-4">
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/exhibit-sponsor#why-exhibit">
                Why Exhibit
              </Link>
            </li>
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/exhibit-sponsor#exhibition">
                Exhibition opportunities
              </Link>
              <ul className="mt-2 flex flex-col gap-1.5 border-hairline border-l pl-4">
                <li>
                  <Link className="text-muted text-small transition-colors hover:text-emerald-cta" to="/en/exhibit-sponsor#marketplace">
                    A2M Marketplace
                  </Link>
                </li>
                <li>
                  <Link className="text-muted text-small transition-colors hover:text-emerald-cta" to="/en/exhibit-sponsor#explorers-village">
                    Explorers' Village
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/exhibit-sponsor#why-sponsor">
                Why Sponsor
              </Link>
            </li>
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/exhibit-sponsor#sponsorship">
                Sponsorship Opportunities
              </Link>
            </li>
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/exhibit-sponsor#exhibitors-sponsors">
                Exhibitors & Sponsors
              </Link>
            </li>
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/exhibit-sponsor#associate">
                Associate Your Brand
              </Link>
            </li>
          </ul>
        </nav>
        <nav aria-label="Partner with us">
          <Link className="font-display font-semibold text-h3 text-emerald-deep hover:text-emerald-cta" to="/en/partner">
            Partner with us
          </Link>
          <ul className="mt-4 flex flex-col gap-2 border-hairline border-l pl-4">
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/partner#speaker">
                Become a speaker
              </Link>
            </li>
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/partner#strategic">
                Become a Strategic Partner
              </Link>
            </li>
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/partner#media">
                Become a Media Partner
              </Link>
            </li>
          </ul>
        </nav>
        <nav aria-label="Plan Your Visit">
          <Link className="font-display font-semibold text-h3 text-emerald-deep hover:text-emerald-cta" to="/en/plan-your-visit">
            Plan Your Visit
          </Link>
          <ul className="mt-4 flex flex-col gap-2 border-hairline border-l pl-4">
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/plan-your-visit#register">
                Register as a Delegate
              </Link>
            </li>
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/plan-your-visit#where-to-stay">
                Book Accommodation
              </Link>
            </li>
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/plan-your-visit#visa">
                Request invitation letter
              </Link>
            </li>
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/plan-your-visit#discover-montreal">
                Discover Montréal
              </Link>
            </li>
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/plan-your-visit#venue">
                Venue & Accessibility
              </Link>
            </li>
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/plan-your-visit#useful-info">
                Useful Information
              </Link>
            </li>
          </ul>
        </nav>
        <nav aria-label="News">
          <Link className="font-display font-semibold text-h3 text-emerald-deep hover:text-emerald-cta" to="/en/news">
            News
          </Link>
          <ul className="mt-4 flex flex-col gap-2 border-hairline border-l pl-4">
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/news#news-release">
                News Release
              </Link>
            </li>
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/news#market-news">
                Market News
              </Link>
            </li>
            <li>
              <Link className="text-body text-muted transition-colors hover:text-emerald-cta" to="/en/news#sign-up">
                Sign up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
    </>
  )
}
