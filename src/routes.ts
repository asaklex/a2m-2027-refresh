import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProgramPage from './pages/ProgramPage'
import MinisterialRoundtablePage from './pages/MinisterialRoundtablePage'
import HonoraryCountryPage from './pages/HonoraryCountryPage'
import WomenInMiningPage from './pages/WomenInMiningPage'
import InvestorsBreakfastPage from './pages/InvestorsBreakfastPage'
import NetworkingPage from './pages/NetworkingPage'
import ExhibitSponsorPage from './pages/ExhibitSponsorPage'
import PartnerPage from './pages/PartnerPage'
import PlanYourVisitPage from './pages/PlanYourVisitPage'
import NewsPage from './pages/NewsPage'
import SitemapPage from './pages/SitemapPage'

export const routes = [
  { path: '/en', title: 'A2M 2027 — Africa Mining in Montréal', component: HomePage },
  { path: '/en/about', title: 'A2M Overview · A2M 2027', component: AboutPage },
  { path: '/en/program', title: 'Features · A2M 2027', component: ProgramPage },
  { path: '/en/program/ministerial-roundtable', title: 'Ministerial Roundtable · A2M 2027', component: MinisterialRoundtablePage },
  { path: '/en/program/honorary-country', title: 'Honorary Country · A2M 2027', component: HonoraryCountryPage },
  { path: '/en/program/women-in-mining', title: 'Women in Mining Forum · A2M 2027', component: WomenInMiningPage },
  { path: '/en/program/investors-breakfast', title: "Investors' Breakfast · A2M 2027", component: InvestorsBreakfastPage },
  { path: '/en/program/networking', title: 'Networking & Social Events · A2M 2027', component: NetworkingPage },
  { path: '/en/exhibit-sponsor', title: 'Exhibit or Sponsor · A2M 2027', component: ExhibitSponsorPage },
  { path: '/en/partner', title: 'Partner with us · A2M 2027', component: PartnerPage },
  { path: '/en/plan-your-visit', title: 'Plan Your Visit · A2M 2027', component: PlanYourVisitPage },
  { path: '/en/news', title: 'News · A2M 2027', component: NewsPage },
  { path: '/en/sitemap-page', title: 'Sitemap · A2M 2027', component: SitemapPage },
] as const
