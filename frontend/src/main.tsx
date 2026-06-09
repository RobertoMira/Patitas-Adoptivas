import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PatitasAdoptivasApp } from './PatitasAdoptivasApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PatitasAdoptivasApp/>
    
  </StrictMode>,
)
