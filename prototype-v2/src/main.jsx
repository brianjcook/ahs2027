import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AdminApp from './admin/AdminApp.jsx'

function Root() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<AdminApp />} />
        <Route path="*" element={
          <div style={{ padding: '40px', textAlign: 'center' }}>
            <h1>404 - Page Not Found</h1>
            <p>
              <Link to="/">Go to Prototype</Link> | <Link to="/admin">Go to Admin Panel</Link>
            </p>
          </div>
        } />
      </Routes>
    </HashRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
