import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import productReducer from "./slices/productsSlice";

export default configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer,
    }
});