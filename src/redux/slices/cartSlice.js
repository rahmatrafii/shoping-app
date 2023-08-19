import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem("cart")) || [],
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.find((item) => {
        return item.id === action.payload.id;
      });
      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    removeToCard: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    reduce: (state, action) => {
      const itemInCart = state.find((item) => {
        return item.id === action.payload;
      });

      itemInCart.quantity -= 1;
    },

    plus: (state, action) => {
      const itemInCart = state.find((item) => {
        return item.id === action.payload;
      });

      itemInCart.quantity += 1;
    },
  },
});

export const { addToCart, removeToCard, reduce, plus } = cartSlice.actions;
export default cartSlice.reducer;
