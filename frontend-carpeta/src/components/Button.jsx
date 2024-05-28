import { useContext} from 'react'
import ContextoAdministrador from '../context/ContextLoginRegister'
import { Link} from 'react-router-dom'


const Button = ({listaServicios}) => {
    const {seleccionarServicio } = useContext(ContextoAdministrador)
console.log("ID DEL RESPECTIVO BOTON")
console.log(listaServicios)
    return (
        <>
            <Link className='btn btn-primary ms-3' to={'/servicio'} onClick={() => { seleccionarServicio(listaServicios)}}>Mas Informacion</Link>
            
        </>



    )
}

export default Button