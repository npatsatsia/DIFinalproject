import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { initialState } from './initialState'


export const getBrands = createAsyncThunk('products/getBrands', async () => {
    try {
        const response = await axios.get('https://digitalamazonproject.azurewebsites.net/api/product/products/');
        let data = response.data
        return data
    }catch (error) {
        return error;
}
});

const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [getBrands.pending]: (state) => {
      state.loading = true
    },
    [getBrands.fulfilled]: (state, action) => {
      state.loading = false
      let brandsArr = action.payload.map((item) => (item.brand))
      state.brands = brandsArr.filter((item, index) => brandsArr.indexOf(item) === index)
    },
    [getBrands.rejected]: (state) => {
      state.loading = false
    }
  }
})

// export const { clearProducs, removeProduct } = productsSilce.actions

export default brandsSlice.reducer