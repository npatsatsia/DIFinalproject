import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from '../Redux/ProductsSlice/index'

const store = configureStore({
    reducer: {
        products: ProductsReducer
    }
})

export default store