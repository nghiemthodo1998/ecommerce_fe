import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      return { ...state, value: state.value + 1 + action.payload };
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
