import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import { routes } from './routes'

export default function App() {
  // Strip the Pages sub-path so routing works identically at the domain root
  // (Netlify) and under /kossoko-africa-mining-montreal-2026/ (GitHub Pages staging).
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '')
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Navigate to="/en" replace />} />
          {routes.map(({ path, component: Page }) => (
            <Route key={path} path={path} element={<Page />} />
          ))}
        </Route>
        {/* Unknown paths render the same shell with the not-found main. */}
        <Route path="*" element={<SiteLayout />} />
      </Routes>
    </BrowserRouter>
  )
}
