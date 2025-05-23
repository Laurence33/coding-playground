import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  initialState: {
    cars: [],
    searchTerm: ''
  },
  name: 'cars',
  reducers: {
    addCar: (state, action) => {
      state.cars.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost
      })
    },
    removeCar: (state, action) => {
      state.cars = state.cars.filter((car) => car.id !== action.payload)
    },
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    }
  }
})

export default carsSlice;
export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;