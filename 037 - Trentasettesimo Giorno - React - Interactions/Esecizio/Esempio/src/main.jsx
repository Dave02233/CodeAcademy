import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App items={['item numero 1', 'item numero 2', 'item numero 3']} />
  </StrictMode>,
)
