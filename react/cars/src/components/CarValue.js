import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const memoizedTotalCost = createSelector(
  [(state) => state.cars.list, (state) => state.cars.searchTerm],
  (cars, searchTerm) => {
    const filteredCars = cars.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const totalCost = filteredCars.reduce((acc, car) => acc + car.cost, 0);
    return totalCost;
  }
);

export default function CarValue() {
  const totalCost = useSelector(memoizedTotalCost)
  return <div className="car-value">
    Total Cost: ${totalCost}
  </div>
}