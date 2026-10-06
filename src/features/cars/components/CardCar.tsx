import { Link } from "react-router-dom"
import type { Car } from "../types/Car";

interface CardCarProps {
  car: Car;
}

const CardCar = ({car}: CardCarProps) => {
    return (
        <article>
      <div>
        <img src={car.image} alt={`Ilustración de ${car.name}`} />
 
        <span>{car.type}</span>
        <span aria-hidden="true">♡</span>
      </div>
 
      <div>
        <p>{car.location}</p>
        <h3>{car.name}</h3>
 
        <div>
          <span>{car.year}</span>
 
          <span>{car.mileage.toLocaleString("es-CR")} km</span>
 
          <span>{car.seats} pasajeros</span>
        </div>
 
        <div>
          <strong>USD {car.price.toLocaleString("es-CR")}</strong>
 
          <Link to={`/cars/${car.id}`}>Ver detalle →</Link>
        </div>
      </div>
    </article>
    )
}
export default CardCar
