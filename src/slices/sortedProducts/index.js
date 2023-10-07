import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import sortedProductsService from '../../Services/sortedProducts.service'

export const getOfferedProducts = createAsyncThunk(
    'products/getOfferedProducts',
    async () => {
        try{
            const response = await sortedProductsService.offeredProducts();
            return response.data
        }catch(error) {
            throw error
        }
    }
)

export const getMostDemandProducts = createAsyncThunk(
    'products/getMostDemandProducts',
    async () => {
        try{
            const response = await sortedProductsService.mostDemandProducts();
            return response.data
        }catch(error) {
            throw error
        }
    }
)

export const getLatestProducts = createAsyncThunk(
    'products/getLatestProductsProducts',
    async () => {
        try{
            const response = await sortedProductsService.latestProducts();
            return response.data
        }catch(error) {
            throw error
        }
    }
)


const initialState = {
    latestProducts: [],
    mostDemandProducts: [],
    offeredProducts: [],
    Loading: false,
    error: null
}

const sortedProducts = createSlice({
    name: 'cart',
    initialState,
    extraReducers: {
        [getLatestProducts.pending]: (state) => {
            state.Loading = true;
            },
        [getLatestProducts.fulfilled]: (state, action) => {
            state.Loading = false;
            state.latestProducts = action.payload
            },
        [getLatestProducts.rejected]: (state,action) => {
            state.Loading = false;
            state.error = action.payload
            },
        [getMostDemandProducts.pending]: (state) => {
            state.Loading = true;
            },
        [getMostDemandProducts.fulfilled]: (state, action) => {
            state.Loading = false;
            state.mostDemandProducts = action.payload
            },
        [getMostDemandProducts.rejected]: (state, action) => {
            state.Loading = false;
            state.error = action.payload
            },
        [getOfferedProducts.pending]: (state) => {
            state.Loading = true;
            },
        [getOfferedProducts.fulfilled]: (state, action) => {
            state.Loading = false;
            state.offeredProducts = action.payload
            },
        [getOfferedProducts.rejected]: (state, action) => {
            state.Loading = false;
            state.error = action.payload
            },
    }
});

export default sortedProducts.reducer