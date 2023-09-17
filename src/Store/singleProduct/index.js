import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { initialState } from './initialState'


export const getSingleProduct = createAsyncThunk('products/getSingleProduct', async (id) => {
    try {
        const response = await axios.get(`https://digitalamazonproject.azurewebsites.net/api/product/products/${id}`);
        return response
    }catch (error) {
         console.log(error)
}
});

const singleProductSlice = createSlice({
  name: 'singleProduct',
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [getSingleProduct.pending]: (state) => {
      state.loading = true
    },
    [getSingleProduct.fulfilled]: (state, action) => {
        state.loading = false
        state.singleProduct = action.payload.data
        state.images = action.payload.data.images
        state.statusCode = action.payload.status
    },
    [getSingleProduct.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
})


export default singleProductSlice.reducer