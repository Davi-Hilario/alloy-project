import cartReducer from "./slices/cartSlice";
import storage from "redux-persist/lib/storage";
import productReducer from "./slices/productsSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import selectedProductReducer from "./slices/selectedProductSlice";

const rootReducer = combineReducers({
	cart: cartReducer,
	products: productReducer,
	selectedProduct: selectedProductReducer,
});

const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
});

export const persistor = persistStore(store);
