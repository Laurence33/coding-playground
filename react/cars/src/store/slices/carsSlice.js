import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  initialState: {
    list: [],
    searchTerm: ''
  },
  name: 'cars',
  reducers: {
    addCar: (state, action) => {
      state.list.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost
      })
    },
    removeCar: (state, action) => {
      state.list = state.list.filter((car) => car.id !== action.payload)
    },
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    }
  }
})

export default carsSlice;
export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;