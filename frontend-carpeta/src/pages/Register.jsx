import  { useContext, useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import ContextoAdministrador from '../context/ContextLoginRegister'


const Register = () => {
    const {SubmitRegistro,AuthuTokenYUsiario,usuarioLogeado}=useContext(ContextoAdministrador)
  //funcion para ir actualizando el form registro
const [form, setform] = useState(
    {
        nombre: "",
        email: "",
        password:"",
        repeatePassword:""
    }
)
///




  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,

    })
    console.log(form)
  }




    return (
        <>
            <h1>Registrarse</h1>
            <form className="row g-3" action=''>

                <div className="col">
                    <label htmlFor="nombref" className="form-label">Nombre</label>
                    <input type="text" className="form-control" placeholder="First name" aria-label="First name" id='nombref' name='nombre' onChange={handleChange} />
                </div>
                <div className="col">
                    <label htmlFor="" className="form-label">email</label>
                    <input type="email" className="form-control" placeholder="Last name" aria-label="Last name" name='email' onChange={handleChange} />
                </div>
                <div className="col">
                    <label htmlFor="inputPassword4w" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4w" name='password' onChange={handleChange} />
                </div>
                <div className="col">
                    <label htmlFor="inputPassword4we" className="form-label">Repeteat Password</label>
                    <input type="password" className="form-control" id="inputPassword4we" name='repeatePassword' onChange={handleChange} />
                </div>
                <div className="col">
                    <label htmlFor="nombref" className="form-label">Localidad</label>
                    <input type="text" className="form-control" placeholder="First name" aria-label="First name" id='nombref' name='localidad' onChange={handleChange} />
                </div>



                <div className="col-12">
                    <button type="submit" className="btn btn-primary " onClick={(e) => { SubmitRegistro(e,form) }} >Enviar</button>
                    <Link className='btn btn-primary ms-3' to={'/'}  > Ir Inicio</Link>
                    <Link className='btn btn-primary ms-3' to={'/admin'}  > Volver</Link>

                </div>
            </form>
        </>
    )
}

export default Register