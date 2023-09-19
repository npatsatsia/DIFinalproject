import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { initialState } from './initialState'


export const getMostDemandProducts = createAsyncThunk('products/getMostDemandProducts', async () => {
    try {
        const response = await axios.get('https://digitalamazonproject.azurewebsites.net/api/product/mostdemandproducts');
        const data = response.data
        return data
    }catch (error) {
        return error;
}
});

const mostDemandProductsSilce = createSlice({
  name: 'mostDemandProducts',
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [getMostDemandProducts.pending]: (state) => {
      state.loading = true
    },
    [getMostDemandProducts.fulfilled]: (state, action) => {
      state.loading = false
      state.mostDemandProducts = action.payload
    },
    [getMostDemandProducts.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
})


export default mostDemandProductsSilce.reducer