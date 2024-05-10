import { createSlice } from "@reduxjs/toolkit";

const selectedProductSlice = createSlice({
	name: "selectedProduct",
	initialState: [],
	reducers: {
		pickSelectedProduct: (state, action) => {
			const newSelectedProduct = {
				id: action.payload.id,
				name: action.payload.name,
				price: action.payload.price,
				description: action.payload.description,
				image: action.payload.image,
				inCart: true,
			};
			state.pop();
			state.push(newSelectedProduct);
		},
	},
});

export const { pickSelectedProduct } = selectedProductSlice.actions;

export default selectedProductSlice.reducer;
