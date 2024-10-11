import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GlobalState from './context/ContextFile.jsx'

createRoot(document.getElementById('root')).render(
  <GlobalState>
    <App/>
  </GlobalState>
)
