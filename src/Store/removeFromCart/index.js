import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { initialState } from './initialState'


export const removeItemFromCart = createAsyncThunk(
    'cart/removeItemFromCart',
    async ({JWToken, id}) => {
      try {
        const response = await fetch(
          `https://digitalinstitute-amazon.azurewebsites.net/api/cart/removefromcart`,
          {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${JWToken}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ productId: id })
          }
        );
        return response.ok
      } catch (error) {
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
      state.cartRmvloading = true
    },
    [removeItemFromCart.fulfilled]: (state, action) => {
      state.cartRmvloading = false
      state.removed = action.payload
    },
    [removeItemFromCart.rejected]: (state, action) => {
      state.cartRmvloading = false
      state.error = action.payload
    }
  }
})


export default removeItemFromCartSilce.reducer