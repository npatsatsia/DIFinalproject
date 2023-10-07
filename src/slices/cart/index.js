import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import cartService from "../../Services/cart.service";

export const getCartProducts = createAsyncThunk(
    'cart/getCartProducts',
    async () => {
        try{
            const response = await cartService.getCartProducts();
            return response
        }catch(error) {
            return error
        }
    }
)

export const addItemTocart = createAsyncThunk(
    'cart/addItemTocart',
    async (id) => {
        try{
            const response = await cartService.addToCart(id);
            return response.data
        }catch(error) {
            return error
        }
    }
)

const initialState = {
    getLoading: false,
    postLoading: false,
    removeLoading: false,
    products: [],
    removed: false,
    added: false,
    error: null
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers: {
        [getCartProducts.pending]: (state) => {
            state.getLoading = true;
            },
        [getCartProducts.fulfilled]: (state, action) => {
            state.getLoading = false;
            state.products = action.payload
            },
        [getCartProducts.rejected]: (state,action) => {
            state.getLoading = false;
            state.error = action.error.message
            },
        [addItemTocart.pending]: (state) => {
            state.postLoading = true;
            },
        [addItemTocart.fulfilled]: (state, action) => {
            state.postLoading = false;
            state.added = action.payload
            },
        [addItemTocart.rejected]: (state, action) => {
            state.postLoading = false;
            state.error = action.error.message
            },
    }
});

export default cartSlice.reducer