import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import { routes } from './routes'

export default function App() {
  return (
    <BrowserRouter>
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
