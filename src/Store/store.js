import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from '../slices/products/index'
import AuthReducer from '../slices/auth/index'
import MessageReducer from '../slices/auth/message'
import UserInfoReducer from '../Store/userByEmail/index'
import RemoveItemFromCart from '../Store/removeFromCart/index'
import CartServiceReducer from '../slices/cart/index'
import SortedProductsReducer from '../slices/sortedProducts/index'
import FilteredProductsReducer from '../slices/filterItems/index'
import EditUserReducer from '../slices/user/index'

const store = configureStore({
    reducer: {
        products: ProductsReducer,
        filteredProducts: FilteredProductsReducer,
        sortedProducts: SortedProductsReducer,
        auth: AuthReducer,
        message: MessageReducer,
        userInfo: UserInfoReducer,
        cartService: CartServiceReducer,
        removeItemFromCart: RemoveItemFromCart,
        editUserReducer: EditUserReducer
    }
})

export default store