import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from '../Store/products/index'
import CategoriesReducer from '../Store/categories/index'
import SingleProductReducer from '../Store/singleProduct/index'
import MostDemandProductsReducer from '../Store/mostDemandProducts/index'
import OfferedProductsReducer from '../Store/offeredProducts/index'
import LatestProductsReducer from '../Store/latestProducts/index'
import BrandsReducer from '../Store/brands/index'
import AuthReducer from '../slices/auth/index'
import MessageReducer from '../slices/auth/message'
import CartProductsReducer from '../Store/getCartProducts/index'
import UserInfoReducer from '../Store/userByEmail/index'
import AddItemToCart from '../Store/addToCart/index'
import RemoveItemFromCart from '../Store/removeFromCart/index'

const store = configureStore({
    reducer: {
        products: ProductsReducer,
        singleProduct: SingleProductReducer,
        categories: CategoriesReducer,
        mostDemandProducts: MostDemandProductsReducer,
        offeredProducts: OfferedProductsReducer,
        latestProducts: LatestProductsReducer,
        Brands: BrandsReducer,
        cartProducts: CartProductsReducer,
        auth: AuthReducer,
        message: MessageReducer,
        userInfo: UserInfoReducer,
        addItemTocart: AddItemToCart,
        removeItemFromCart: RemoveItemFromCart
    }
})

export default store