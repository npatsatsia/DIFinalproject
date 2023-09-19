import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { initialState } from './initialState'


export const getSingleProduct = createAsyncThunk('products/getSingleProduct', async (id) => {
    try {
        const response = await axios.get(`https://digitalamazonproject.azurewebsites.net/api/product/products/${id}`);
        return response.data
    }catch (error) {
         throw error
}
});

const singleProductSlice = createSlice({
  name: 'singleProduct',
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [getSingleProduct.pending]: (state) => {
      state.singleProduct = undefined
      state.loading = true
    },
    [getSingleProduct.fulfilled]: (state, action) => {
        state.loading = false
        state.singleProduct = action.payload
        state.images = action.payload.images
    },
    [getSingleProduct.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error
    }
  }
})


export default singleProductSlice.reducer