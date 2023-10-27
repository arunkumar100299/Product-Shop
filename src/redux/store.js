import {configureStore} from "@reduxjs/toolkit" 
import productReducer from "./ProductDetails"
import cartReducer from "./CartDetails"

export const store = configureStore({
    reducer :{
     product : productReducer,
     cart : cartReducer
    }
    
})