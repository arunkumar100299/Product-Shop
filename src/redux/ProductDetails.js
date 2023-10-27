import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products = [...state.products, { 
                id: action.payload.id, 
                title: action.payload.title,
                price: action.payload.price, 
                image: action.payload.image,
                quantity: action.payload.quantity
            }]
        },
        updateQuantity: (state,action)=>{
            state.products =  state.products.map((pro)=>{
               if(pro.id === action.payload.id){
                  pro.quantity = action.payload.quantity;
               }
               return pro;
            })
        }
    }
})

export const { addProduct,updateQuantity } = productSlice.actions;

export default productSlice.reducer;