import { Link } from "react-router-dom"
import type { Car } from "../types/Car";
interface carPurchaseCardProps {
  car: Car;
}

const CarPurchaseCard = ({car}: carPurchaseCardProps) => {
    
    return (
        <aside className="purchase-card">
     <p className="purchase-card__label">Precio de venta</p>
 
     <h2 className="purchase-card__price">
      USD {car.price.toLocaleString("es-CR")}
     </h2>
 
     <p className="purchase-card__description">
       Precio ilustrativo para este ejercicio académico.
     </p>
 
     <Link
      className="purchase-card__button purchase-card__button--primary"
      to={`/contact?car=${encodeURIComponent(car.name)}`}
     >
      Solicitar información
     </Link>
 
     {/* <button
      type="button"
      className="purchase-card__button purchase-card__button--favorite"
      aria-pressed={favorite}
      onClick={() => toggleFavorite(car.id)}
    >
      <span className="purchase-card__heart">{favorite ? "♥" : "♡"}</span>
 
      {favorite ? "Guardado en favoritos" : "Guardar en favoritos"}
    </button> */}
   </aside>
    )
}
export default CarPurchaseCard
