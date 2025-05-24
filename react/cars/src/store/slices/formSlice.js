import { createSlice } from "@reduxjs/toolkit";
import { addCar } from './carsSlice';

const formSlice = createSlice({
  initialState: {
    name: '',
    cost: ''
  },
  name: 'form',
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeCost: (state, action) => {
      state.cost = action.payload;
    }
  },
  extraReducers(builder) {
    builder.addCase(addCar, (state, action) => {
      state.name = '';
      state.cost = 0;
    })
  }
})

export const { changeName, changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer;