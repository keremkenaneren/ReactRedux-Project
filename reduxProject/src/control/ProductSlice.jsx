import {createSlice} from "@reduxjs/toolkit"
import products from "../ProductItems"


const initialState = {
    products:products,
    quantity:0,
    price:0,
}


const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        clearCard: (state) => {
            state.products = []
        },
        removeCard: (state,action) => {
            const products = state.products.find((item)=>item.id === action.payload)
            products.quantity === 0 ? products.quantity = 0 : products.quantity -= 1
        },
        increase: (state,action) => {
            const products = state.products.find((item)=>item.id === action.payload)
            products.quantity += 1
        },
        calculatePrice: (state) => {
            let total = 0;
            let quantity = 0;
            state.products.forEach((item) => {
                total += item.quantity*item.price
                quantity += item.quantity;
            })
            state.price = total;
            state.quantity = quantity;
        }
    },
})

export const {clearCard, removeCard, increase, calculatePrice} =  productSlice.actions
export default productSlice.reducer
