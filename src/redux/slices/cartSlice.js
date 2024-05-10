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
				image: action.payload.image,
				inCart: true,
				isChecked: false,
			};
			state.push(newCartItem);
		},
		toggleCheckedButton: (state, action) => {
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
				console.log(filteredList.length);
				console.log(state.length);
			} else if (filteredList.length === state.length) {
				state.forEach((product) => (product.isChecked = false));
			}
		},
		removeItemFromCart: (state, action) => {
			return state.filter((product) => product.id !== action.payload.id);
		},
		removeCheckedItemsFromCart: (state, action) => {
			return state.filter((product) => !product.isChecked);
		},
	},
});

export const {
	addItemToCart,
	removeItemFromCart,
	removeCheckedItemsFromCart,
	toggleCheckedButton,
	activateAllCheckedButton,
} = cartSlice.actions;

export default cartSlice.reducer;
