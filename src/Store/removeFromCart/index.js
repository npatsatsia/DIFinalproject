import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { initialState } from './initialState'


export const removeItemFromCart = createAsyncThunk(
    'cart/removeItemFromCart',
    async ({id, token}) => {
      try {
        const response = await fetch(
          `https://digitalamazonproject.azurewebsites.net/api/cart/removefromcart/`,
          {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ productId: id })
          }
        );
  
        if (!response.ok) {
          throw new Error('Failed to remove item from cart');
        }
        return response.ok
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  );


const removeItemFromCartSilce = createSlice({
  name: 'removeItemFromCart',
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [removeItemFromCart.pending]: (state) => {
      state.loading = true
    },
    [removeItemFromCart.fulfilled]: (state, action) => {
      state.loading = false
      state.removed = action.payload
    },
    [removeItemFromCart.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload.error
    }
  }
})


export default removeItemFromCartSilce.reducer