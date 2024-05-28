
import { Route, Routes } from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Login from '../pages/Login'
import Adoptar from '../pages/Adoptar'


const AuthenticateRuters = () => {

    return (
        <>
            <Routes>
            
                <Route path='/' element={<Inicio />} />
                {/* aca faltaria poner las rutas que solo el admin tiene acceso o las personas que ya se loguearon! */}     
                <Route path='/adoptar' element={<Adoptar />} />
                <Route path='/login' element={<Login/>}/>
                
            </Routes>
        </>
    )
}

export default AuthenticateRuters