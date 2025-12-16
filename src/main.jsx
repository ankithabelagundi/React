import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< HEAD

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
=======
import MainPage from './components/MainPage.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MainPage/>
>>>>>>> master
  </StrictMode>,
)
