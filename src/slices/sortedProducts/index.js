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
    sortedProductsIsLoading: false,
    error: null
}

const sortedProducts = createSlice({
    name: 'sortedProducts',
    initialState,
    extraReducers: {
        [getLatestProducts.pending]: (state) => {
            state.sortedProductsIsLoading = true;
            },
        [getLatestProducts.fulfilled]: (state, action) => {
            state.sortedProductsIsLoading = false;
            state.latestProducts = action.payload
            },
        [getLatestProducts.rejected]: (state,action) => {
            state.sortedProductsIsLoading = false;
            state.error = action.payload
            },
        [getMostDemandProducts.pending]: (state) => {
            state.sortedProductsIsLoading = true;
            },
        [getMostDemandProducts.fulfilled]: (state, action) => {
            state.sortedProductsIsLoading = false;
            state.mostDemandProducts = action.payload
            },
        [getMostDemandProducts.rejected]: (state, action) => {
            state.sortedProductsIsLoading = false;
            state.error = action.payload
            },
        [getOfferedProducts.pending]: (state) => {
            state.sortedProductsIsLoading = true;
            },
        [getOfferedProducts.fulfilled]: (state, action) => {
            state.sortedProductsIsLoading = false;
            state.offeredProducts = action.payload
            },
        [getOfferedProducts.rejected]: (state, action) => {
            state.sortedProductsIsLoading = false;
            state.error = action.payload
            },
    }
});

export default sortedProducts.reducer