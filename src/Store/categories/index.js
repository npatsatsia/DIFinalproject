import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { initialState } from './initialState'


export const getCategories = createAsyncThunk('products/getCategories', async () => {
    try {
    const response = await axios.get('https://digitalamazonproject.azurewebsites.net/api/product/categories');
    const data = response.data
    return data
    }catch (error) {
    return error;
}
});

const categoriesSilce = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [getCategories.pending]: (state) => {
      state.loading = true
    },
    [getCategories.fulfilled]: (state, action) => {
      state.loading = false
      state.categories = action.payload
    },
    [getCategories.rejected]: (state) => {
      state.loading = false
    }
  }
})


export default categoriesSilce.reducer