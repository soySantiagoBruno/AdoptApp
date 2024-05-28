import '../pages/css/cards.css'
import Button from './Button'
const Card = ({ listaMascotas }) => {
  const imagenBase64 = listaMascotas.imagen.content;

  // Convierte la imagen base64 en una URL de objeto
  const imagenURL = `data:${listaMascotas.imagen.mime};base64,${imagenBase64}`;
  return (



    <div className="col-4">
      <div className="card border border-1 mt-4 ">
        <img src={imagenURL} className="imagenDeInicio " alt={listaMascotas.imagen.name} />
        <div className="card-body">
          <h5 className="card-title">{listaMascotas.localidad}</h5>
          <p className="card-text">{listaMascotas.descripcion}</p>
        </div>
        <div className='d-flex justify-content-center'>
          <Button listaMascotas={listaMascotas.id} className=' btn btn-outline-dark btn-sm w-50 ' >Mas informacion</Button>
        

        </div>
      </div>
    </div>
  )
}

export default Card