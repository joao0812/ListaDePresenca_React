import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './pages/App'
import { Home } from './pages/Home'
import './styles/global.css' // A estilização sendo feita aq no main.jsx faz com que o estilo desse arquivo css seja implementado em todas as páginas q estiverem entre <React.StrictMode>


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Home />
  </React.StrictMode>
)
