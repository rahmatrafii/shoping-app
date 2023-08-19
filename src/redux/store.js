import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
store.subscribe(() => {
  // console.log("store change : ", store.getState());
  const cart = store.getState();
  localStorage.setItem("cart", JSON.stringify(cart.cart));
});
export default store;
