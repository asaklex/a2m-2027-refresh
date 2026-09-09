// Site navigation — one source of truth for the desktop header dropdowns,
// the mobile menu and the footer link column.

export type NavLink = { label: string; href: string }
export type NavFlyoutItem = NavLink & { children?: NavLink[] }
export type NavSection = { label: string; href: string; items: NavFlyoutItem[] }

export const navSections: NavSection[] = [
  {
    label: 'A2M Overview',
    href: '/en/about',
    items: [
      { label: 'A2M 2027', href: '/en/about#conference' },
      { label: 'Why Participate?', href: '/en/about#why-participate' },
      { label: 'Institutional Endorsements', href: '/en/about#strategic-partners' },
      { label: 'Advisory Board', href: '/en/about#advisory-board' },
      { label: 'Meet the Team', href: '/en/about#meet-the-team' },
      { label: 'Sustainability', href: '/en/about#sustainability' },
      { label: 'Contact Us', href: '/en/about#contact' },
    ],
  },
  {
    label: 'Features',
    href: '/en/program',
    items: [
      { label: 'Highlights', href: '/en/program#highlights' },
      { label: 'Program overview', href: '/en/program#sessions' },
      { label: 'Speakers & Panellists', href: '/en/program#speakers' },
      { label: 'Agenda', href: '/en/program#schedule' },
      {
        label: 'Ministerial Roundtable',
        href: '/en/program/ministerial-roundtable',
        children: [
          { label: 'Overview', href: '/en/program/ministerial-roundtable#ministerial-round-table' },
          { label: "Canada's Africa Strategy", href: '/en/program/ministerial-roundtable#canada-africa-strategy' },
          { label: 'Honorary Patron', href: '/en/program/ministerial-roundtable#honorary-patron' },
        ],
      },
      { label: 'Honorary Country', href: '/en/program/honorary-country' },
      { label: 'Women in Mining Forum', href: '/en/program/women-in-mining' },
      { label: "Investors' Breakfast", href: '/en/program/investors-breakfast' },
      { label: 'Business Matchmaking', href: '/en/program#matchmaking' },
      { label: 'Networking & Social Events', href: '/en/program/networking' },
    ],
  },
  {
    label: 'Exhibit or Sponsor',
    href: '/en/exhibit-sponsor',
    items: [
      { label: 'Why Exhibit', href: '/en/exhibit-sponsor#why-exhibit' },
      {
        label: 'Exhibition opportunities',
        href: '/en/exhibit-sponsor#exhibition',
        children: [
          { label: 'A2M Marketplace', href: '/en/exhibit-sponsor#marketplace' },
          { label: "Explorers' Village", href: '/en/exhibit-sponsor#explorers-village' },
        ],
      },
      { label: 'Why Sponsor', href: '/en/exhibit-sponsor#why-sponsor' },
      { label: 'Sponsorship Opportunities', href: '/en/exhibit-sponsor#sponsorship' },
      { label: 'Exhibitors & Sponsors', href: '/en/exhibit-sponsor#exhibitors-sponsors' },
      { label: 'Associate Your Brand', href: '/en/exhibit-sponsor#associate' },
    ],
  },
  {
    label: 'Partner with us',
    href: '/en/partner',
    items: [
      { label: 'Become a speaker', href: '/en/partner#speaker' },
      { label: 'Become a Strategic Partner', href: '/en/partner#strategic' },
      { label: 'Become a Media Partner', href: '/en/partner#media' },
    ],
  },
  {
    label: 'Plan Your Visit',
    href: '/en/plan-your-visit',
    items: [
      { label: 'Register as a Delegate', href: '/en/plan-your-visit#register' },
      { label: 'Book Accommodation', href: '/en/plan-your-visit#where-to-stay' },
      { label: 'Request invitation letter', href: '/en/plan-your-visit#visa' },
      { label: 'Discover Montréal', href: '/en/plan-your-visit#discover-montreal' },
      { label: 'Venue & Accessibility', href: '/en/plan-your-visit#venue' },
      { label: 'Useful Information', href: '/en/plan-your-visit#useful-info' },
    ],
  },
  {
    label: 'News',
    href: '/en/news',
    items: [
      { label: 'News Release', href: '/en/news#news-release' },
      { label: 'Market News', href: '/en/news#market-news' },
      { label: 'Sign up', href: '/en/news#sign-up' },
    ],
  },
]

export const footerOverviewLinks: NavLink[] = navSections[0].items

/** The original site's French edition; the deployment is archived, so the
 *  link points at the recorded origin. Update if a French edition returns. */
export const legacyFrenchOrigin = 'https://a2m-website-git-feat-v4-full-content-andysteph21s-projects.vercel.app'
