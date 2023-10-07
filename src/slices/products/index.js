import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import products from '../../Services/products.service'

export const getProducts = createAsyncThunk('products/getProducts',
 async (params) => {
      try {
      const response = await products(params);
      let data = response.data
      return data
      }catch (error) {
      throw error;
  }
  });

  const initialState = {
    data: [],
    loading: false,
    error: null
  }

  const productsSilce = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {
      [getProducts.pending]: (state) => {
        state.loading = true
      },
      [getProducts.fulfilled]: (state, action) => {
        state.loading = false
        state.data = action.payload
      },
      [getProducts.rejected]: (state) => {
        state.loading = false
      }
    }
  })
  
  export default productsSilce.reducer

