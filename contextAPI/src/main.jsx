import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Story from './context/Story.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Story>
    <App />
    </Story>
  </StrictMode>,
)
