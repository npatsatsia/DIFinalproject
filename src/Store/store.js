import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from '../Store/products/index'
import CategoriesReducer from '../Store/categories/index'
import SingleProductReducer from '../Store/singleProduct/index'
import MostDemandProductsReducer from '../Store/mostDemandProducts/index'
import OfferedProductsReducer from '../Store/offeredProducts/index'
import LatestProductsReducer from '../Store/latestProducts/index'

const store = configureStore({
    reducer: {
        products: ProductsReducer,
        singleProduct: SingleProductReducer,
        categories: CategoriesReducer,
        mostDemandProducts: MostDemandProductsReducer,
        offeredProducts: OfferedProductsReducer,
        latestProducts: LatestProductsReducer
    }
})

export default store