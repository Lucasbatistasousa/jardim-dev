import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './pages/Home/index.css'
import { RouterProvider } from 'react-router-dom'
import router from '../routes.jsx'
import Home from './pages/Home/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    
  </StrictMode>,
)
