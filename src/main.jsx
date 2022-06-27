import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import ListaUnica from './pages/ListaUnica'
import Mesas from './pages/Mesas'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='*' element={<App />}></Route>
          <Route path='/ListaUnica' element={<ListaUnica />}></Route>
          <Route path='/Mesas' element={<Mesas />}></Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
