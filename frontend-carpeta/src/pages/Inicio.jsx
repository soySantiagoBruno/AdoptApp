import { useContext, useEffect } from 'react'
import "./css/inicio.css"
import ContextoAdministrador from '../context/ContextLoginRegister'
import Cards from '../components/Cards'
import ImagenPricipaLogo from '../components/ImagenPricipaLogo'
import { Link } from 'react-router-dom'




const Inicio = () => {
  const { usuarioLogeado, AuthuTokenYUsiario, listaMascotas, serviciosBack } = useContext(ContextoAdministrador)


  useEffect(() => {

    AuthuTokenYUsiario()
    serviciosBack()

    console.log(usuarioLogeado)
  }, [])



  //AuthuTokenYUsiario()
  /* 
  1) BUSCAR SI HAY TOKEN EN LOCALSTRORAGE
  2) TRAER EL LOCAL SI HAY
  3) MANDAR A VALIDAR EL TOKEN SI EXPIRO O NO 
  4) TRAER EL USUARIO SI EL TOKEN NO EXPIRO
  5) RENDERIZAR COMPONENTE CORRESPONDIENTE AL USUARIO LOGEADO
  

  */







  return (
    <div className='row justify-content-center'>
      <ImagenPricipaLogo/>
      { 
                usuarioLogeado.Auth === true && usuarioLogeado.rol === "ADMIN" ?
                    <Link className='btn btn-primary ms-3' to={'/admin'}>Agregar servicios</Link>  
                 :null }
      <Cards listaMascotas={listaMascotas} />
    </div>
  )
}

export default Inicio