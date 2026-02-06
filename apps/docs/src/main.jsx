import React from 'react'
import LenisProvider from './leisprovider/lenisProvider.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@workspace/ui/global.css'
import './style/index.css'
// import './style/mdx.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LenisProvider>
      <BrowserRouter>
        <Navbar />
        <App />
      </BrowserRouter>
    </LenisProvider>
  </StrictMode>
)
