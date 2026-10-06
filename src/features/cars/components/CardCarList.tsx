import type { Car } from "../types/Car"
import CardCar from "./CardCar"

interface CardListProps {
    cars: Car[]
}

const CardCarList = ({cars}: CardListProps) => {
    return (
        <div>
      {cars.map((car) => (
        <CardCar key={car.id} car={car} />
      ))}
    </div>
    )
}
export default CardCarList