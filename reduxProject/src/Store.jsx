import {configureStore} from  "@reduxjs/toolkit"
import productReducer from "./control/ProductSlice"

export const store = configureStore({
    reducer:{
        product:productReducer,
    },
})