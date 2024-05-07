import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import productReducer from "./slices/productsSlice";
import selectedProductReducer from "./slices/selectedProductSlice";

export default configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer,
        selectedProduct: selectedProductReducer, 
    }
});