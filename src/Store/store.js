import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from '../Redux/ProductsSlice/index'
import SingleProductReducer from '../Redux/singleProductSlice/index'
import categoriesReducer from '../Redux/categoriesSlice/index'

const store = configureStore({
    reducer: {
        products: ProductsReducer,
        singleProduct: SingleProductReducer,
        categories: categoriesReducer
    }
})

export default store