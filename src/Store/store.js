import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from '../Redux/ProductsSlice/index'
import SingleProductReducer from '../Redux/singleProductSlice/index'

const store = configureStore({
    reducer: {
        products: ProductsReducer,
        singleProduct: SingleProductReducer
    }
})

export default store