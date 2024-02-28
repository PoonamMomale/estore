import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../Redux/slices/categorySlice/categorySlice";
import accordionSlice from "../Redux/slices/accordionSlice/accordionSlice";
import productSlice from "../Redux/slices/productSlice/productSlice";
import cartSlice from "../Redux/slices/Cart/cartSlice";

export const store = configureStore({
   reducer:{
    categoryReducer: categorySlice,
    accordionReducer: accordionSlice,
    productReducer: productSlice,
    cartReducer: cartSlice,
   } 
});