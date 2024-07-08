import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const appStore = configureStore({
  // reducer: cartSlice   we can give like this also
  //if we multiple slice we pass it object
  reducer: {
    cart: cartSlice,
  },
});

export default appStore;
