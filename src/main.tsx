import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './input.css'
import './assets/style.css/main.css'
import { BrowserRouter } from 'react-router-dom'
import './assets/style.css/reponsive.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter >
    <App />
  </BrowserRouter>
)
