import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/*Libreiras de bootstrap*/ 
import 'bootstrap-icons/font/bootstrap-icons.css';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
