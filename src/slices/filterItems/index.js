import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import filterProductsBy from "../../Services/filterItems.service";

export const getCategories = createAsyncThunk(
    'products/getCategories',
    async () => {
        try{
            const response = await filterProductsBy.categories();
            return response.data
        }catch(error) {
            throw error
        }
    }
)

export const getBrands = createAsyncThunk(
    'products/getBrands',
    async () => {
        try{
            const response = await filterProductsBy.brands();
            return response.data
        }catch(error) {
            throw error
        }
    }
)

export const getSingleProduct = createAsyncThunk(
    'products/getSingleProduct',
    async (id) => {
        try{
            const response = await filterProductsBy.singleProduct(id);
            return response.data
        }catch(error) {
            throw error
        }
    }
)


const initialState = {
    categories: [],
    brands: [],
    singleProduct: [],
    singleProductIsLoading: false,
    images: [],
    Loading: false,
    error: null
}

const filteredProducts = createSlice({
    name: 'filterProducts',
    initialState,
    extraReducers: {
        [getCategories.pending]: (state) => {
            state.Loading = true;
            },
        [getCategories.fulfilled]: (state, action) => {
            state.Loading = false;
            state.categories = action.payload
            },
        [getCategories.rejected]: (state,action) => {
            state.Loading = false;
            state.error = action.payload
            },
        [getBrands.pending]: (state) => {
            state.Loading = true;
            },
        [getBrands.fulfilled]: (state, action) => {
            state.Loading = false;
            state.brands = [...new Set(action.payload.map((item) => item.brand))];
            },
        [getBrands.rejected]: (state, action) => {
            state.Loading = false;
            state.error = action.payload
            },
        [getSingleProduct.pending]: (state) => {
            state.singleProductIsLoading = true;
            },
        [getSingleProduct.fulfilled]: (state, action) => {
            state.singleProductIsLoading = false;
            state.singleProduct = action.payload
            state.images = action.payload.images
            },
        [getSingleProduct.rejected]: (state, action) => {
            state.singleProductIsLoading = false;
            state.error = action.payload
            },
    }
});

export default filteredProducts.reducer