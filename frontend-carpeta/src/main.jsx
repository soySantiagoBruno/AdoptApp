import * as bootstrao from 'bootstrap'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Inicio from './pages/Inicio'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import { ContextLoginRegister } from './context/ContextLoginRegister'
import AppRouters from './routers/AppRouters'




ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextLoginRegister>
    <BrowserRouter>
      <Navbar />
      <AppRouters />
    </BrowserRouter>
  </ContextLoginRegister>
)
