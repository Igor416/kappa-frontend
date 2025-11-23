import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Providers } from "./providers";
import { App } from './app';
import { Brand } from './brand';
import { Root } from './root';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Providers>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='' element={<Root />} />
            <Route path=':brand' element={<Brand />} />
          </Route>
        </Routes>
      </Providers>
    </Router>
  </StrictMode>
)
