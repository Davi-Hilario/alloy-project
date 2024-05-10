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
				inCart: action.payload.inCart,
				isChecked: false,
			};
			state.push(newProduct);
		},
		removeAllProducts: (state, action) => {
			if (state.length != 0) {
				state.length = action.length;
			}
		},
		toggleAddToCart: (state, action) => {
			const index = state.findIndex(
				(product) => product.id === action.payload.id
			);
			state[index].inCart = action.payload.inCart;
		},
		addItemToCart: (state, action) => {
			let index = state.findIndex(
				(product) => product.id === action.payload.id
			);
			state[index].inCart = true;
		},
		toggleCheckedButton: (state, action) => {
			console.log("pressed");
			state.forEach((product) => {
				if (action.payload.id === product.id) {
					product.isChecked = !product.isChecked;
					return;
				}
			});
		},
		activateAllCheckedButton: (state, action) => {
			let filteredList = state.filter((product) => product.isChecked);
			if (filteredList.length >= 0 && filteredList.length !== state.length) {
				state.forEach((product) => (product.isChecked = true));
			} else if (filteredList.length === state.length) {
				state.forEach((product) => (product.isChecked = false));
			}
		},
		removeItemFromCart: (state, action) => {
			let index = state.findIndex(
				(product) => product.id === action.payload.id
			);
			state[index].inCart = false;
		},
		removeCheckedItemsFromCart: (state, action) => {
			let checkedItems = state.filter((product) => product.isChecked);
			checkedItems.forEach((item) => {
				let index = state.findIndex((product) => product.id === item.id);
				state[index].inCart = false;
			});
		},
	},
});

export const {
	addAllProducts,
	toggleAddToCart,
	removeAllProducts,
	addItemToCart,
	toggleCheckedButton,
	activateAllCheckedButton,
	removeItemFromCart,
	removeCheckedItemsFromCart,
} = productsSlice.actions;

export default productsSlice.reducer;
