import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { initialState } from './initialstate'


export const getProducts = createAsyncThunk('products/getProducts', async (params) => {
  const {currCategory = '', priceMin= '', priceMax= '', selectedBrands} = params
    try {
    const response = await axios.get(`https://digitalamazonproject.azurewebsites.net/api/product/products?CategoryId=${currCategory}&PriceFrom=${priceMin}&PriceTo=${priceMax}&BrandName=${selectedBrands}`);
    let data = response.data
    return data
    }catch (error) {
    return error;
}
});

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