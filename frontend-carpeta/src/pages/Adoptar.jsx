import { useContext } from "react"
import ContextoAdministrador from "../context/ContextLoginRegister"
import '../pages/css/adoptar.css'
const Adoptar = () => {
  const { listaMascotas } = useContext(ContextoAdministrador)
  if (!listaMascotas) {
    return <div>Cargando...</div>
  }
  const imagenBase64 = listaMascotas.imagen.content;
  const imagenURL = `data:${listaMascotas.imagen.mime};base64,${imagenBase64}`;
  return (
    <div className="container justify-content-center imagenContratar ">
      <div className="card text-bg-dark ">
        <img src={imagenURL} className="card-img " alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title text-dark text-uppercase fw-bold">{listaMascotas.tamaño}</h5>
          <p className="card-text text-dark">{listaMascotas.descripcion}</p>
          <p className="card-text text-dark"><small>El valor del listaMascotas: ${listaMascotas.localidad}</small></p>
        </div>
      </div>
    </div>
  )
}
export default Adoptar