
import { Link } from 'react-router-dom'
import Card from './Card'
const Cards = ({ listaMascotas }) => {
    return (
        <div className="row justify-content-center" >
           
            {
                listaMascotas && listaMascotas.map(
                    (e) => (
                        <Card listaMascotas={e} key={e.id} />
                    )
                )
            }

        </div>
    )
}

export default Cards