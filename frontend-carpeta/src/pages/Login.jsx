import  { useContext, useEffect, useState } from 'react'
import ContextoAdministrador from '../context/ContextLoginRegister'
import { Navigate } from 'react-router-dom'

// FORM DE LOGIN
const formInciallogin = {
  email: "",
  password: ""
}


// puede ser igual a null? para que arranque todo sin sesion

const Login = () => {
  //todo lo que viene del back esta aca 
  const { SubmitLogin, usuarioLogeado, AuthuTokenYUsiario } = useContext(ContextoAdministrador)

  useEffect(() => {
    AuthuTokenYUsiario()
    console.log(usuarioLogeado)

  }, [])


    //form y use State para form
    const [formlogin, setformlogin] = useState(formInciallogin)


  if (usuarioLogeado.Auth===true) {
    return <Navigate to="/" />;
  }

  






  //funcion para ir actualizando el form login
  const handleChangelogin = (e) => {
    setformlogin({
      ...formlogin,
      [e.target.name]: e.target.value,

    })
    console.log(formlogin)
  }


  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Usuario</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={handleChangelogin} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={handleChangelogin} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={(e) => SubmitLogin(e, formlogin)}>
          inciar
        </button>
      </form>
    </div>
  )
}

export default Login