
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/layout'
import { lazy } from 'react'

// pages 
import Home from './pages/home'
const NoPage = lazy(() => import('./pages/FourOhFour'));

const Apps = lazy(() => import('./pages/apps/apps'));
// pages/pdftools
const GenPDF = lazy(() => import('./pages/apps/pdf-tools/generate-pdf'));
// pages/templates
const SampleTicket = lazy(() => import('./pages/apps/templates/sample-ticket'));


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
        </Route>
        <Route path="/apps" element={<Layout />} >
          <Route index element={<Apps />} />
          <Route path="generate-pdf" element={<GenPDF />} />
          <Route path="sample-ticket" element={<SampleTicket />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
