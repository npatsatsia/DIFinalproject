import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { initialState } from './initialState'



export const addItemTocart = createAsyncThunk('cart/addItemTocart', async ({id, token}) => {
    try {
      const response = await axios.post('https://digitalamazonproject.azurewebsites.net/api/cart/addincart',
    {
        productId: id
    },
    {headers: {
      Authorization: `Bearer ${token}`,
    }},
    );
        console.log('added')
    }catch (error) {
        console.log(error)
      return error;
}
});


const addItemTocartSilce = createSlice({
  name: 'addItemTocart',
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [addItemTocart.pending]: (state) => {
      state.loading = true
    },
    [addItemTocart.fulfilled]: (state) => {
      state.loading = false
    },
    [addItemTocart.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload.error
    }
  }
})


export default addItemTocartSilce.reducer