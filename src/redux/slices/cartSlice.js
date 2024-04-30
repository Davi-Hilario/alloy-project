import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addItemToCart: (state, action) => {
            const newCartItem = {
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price,
                description: action.payload.description,
                image: action.payload.image
            };
            state.push(newCartItem);
        },
        removeItemFromCart: (state, action) => {
            return state.filter((product) => product.id !== action.payload.id);
        },
    }

});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;