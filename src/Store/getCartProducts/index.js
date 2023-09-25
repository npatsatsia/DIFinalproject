import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {initialState} from './initialState'

export const getCartProducts = createAsyncThunk('cart/getCartProducts', async (token) => {
    try {
      const response = await axios.get('https://digitalamazonproject.azurewebsites.net/api/cart/getmycartproducts', 
       {headers: {
        Authorization: `Bearer ${token}`,
      }},
      );
      return response.data
    }catch (error) {
      return error;
}
});


const cartProductsSilce = createSlice({
  name: 'cartProducts',
  initialState,
  reducers: {},
  extraReducers: {
    [getCartProducts.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getCartProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.cartProducts = action.payload;
    },
    [getCartProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  }
})


export default cartProductsSilce.reducer