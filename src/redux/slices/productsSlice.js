import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        addAllProducts: (state, action) => {
            const newProduct = {
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price,
                description: action.payload.description,
                image: action.payload.image,
                inCart: false,
            };
            state.push(newProduct);
        },
        toggleAddToCart: (state, action) => {
            const index = state.findIndex((product) => product.id === action.payload.id);
            state[index].inCart = action.payload.inCart;
        }
    }

});

export const { addAllProducts, toggleAddToCart } = productsSlice.actions;

export default productsSlice.reducer;