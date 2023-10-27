import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}



export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.cart = [...state.cart, {
                id: action.payload.id,
                title: action.payload.title,
                price: action.payload.price,
                image: action.payload.image,
                quantity: action.payload.quantity,
                totalPrice: action.payload.totalPrice
            }]
        },
        updateCart: (state, action) => {
            state.cart = state.cart.map((pro) => {
                if (pro.id === action.payload.id) {
                    pro.quantity = action.payload.quantity;
                    pro.totalPrice = action.payload.totalPrice;
                }
                return pro;
            })
        }

    }

})

export const { addCart, updateCart } = cartSlice.actions;

export default cartSlice.reducer;
