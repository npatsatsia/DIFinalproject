import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { initialState } from './initialState'


export const getLatestProducts = createAsyncThunk('products/getLatestProducts', async () => {
    try {
        const response = await axios.get('https://digitalamazonproject.azurewebsites.net/api/product/latestproducts');
        const data = response.data
        return data
    }catch (error) {
        return error;
}
});

const latestProductsSilce = createSlice({
  name: 'latestProducts',
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [getLatestProducts.pending]: (state) => {
      state.loading = true
    },
    [getLatestProducts.fulfilled]: (state, action) => {
      state.loading = false
      state.latestProducts = action.payload
    },
    [getLatestProducts.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
})


export default latestProductsSilce.reducer