import { createSlice } from "@reduxjs/toolkit";

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
  }
})

export const { changeName, changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer;