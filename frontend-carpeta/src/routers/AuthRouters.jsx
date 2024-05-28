
import {  Route, Routes } from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Register from '../pages/Register'
import Login from '../pages/Login'




const AuthRouters = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registro' element={<Register />} />     
      </Routes>
    </>
  )
}

export default AuthRouters