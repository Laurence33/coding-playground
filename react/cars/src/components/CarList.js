import { useDispatch, useSelector } from "react-redux"
import { createSelector } from "@reduxjs/toolkit";
import { removeCar } from "../store";

const memoizedCars = createSelector(
  [(state) => state.cars.list, (state) => state.cars.searchTerm],
  (cars, searchTerm) => {
    return cars.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
)

export default function CarList() {
  const cars = useSelector(memoizedCars);
  const dispatch = useDispatch();

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  }
  const renderedCars = cars.map(car => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          onClick={() => handleCarDelete(car)}
          className="button is-danger">Delete</button>
      </div>
    )
  })
  return <div className="car-list">
    {renderedCars}
    <hr />
  </div>
}