import { useDispatch, useSelector } from "react-redux"
import { createSelector } from "@reduxjs/toolkit";
import { removeCar } from "../store";

const memoizedState = createSelector(
  [(state) => state.form, (state) => state.cars.list, (state) => state.cars.searchTerm],
  (form, cars, searchTerm) => {
    const filteredCars = cars.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return {
      cars: filteredCars,
      name: form.name
    }
  }
)

export default function CarList() {
  const { cars, name } = useSelector(memoizedState);
  const dispatch = useDispatch();

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  }
  const renderedCars = cars.map(car => {
    const isBold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return (
      <div key={car.id} className={`panel ${isBold && 'bold'}`}>
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