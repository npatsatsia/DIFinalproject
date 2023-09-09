import { createSlice } from '@reduxjs/toolkit';

const singleProductSlice = createSlice({
  name: 'singleProduct',
  initialState: {
    singleProduct: [],
    images: [],
    loading: false,
    error: null
  },
  reducers: {
    fetchSingleProductDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSingleProductDataSuccess: (state, action) => {
      state.singleProduct = action.payload
      state.loading = false;
      state.error = null;
    },
    fetchSingleProductDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchSingleProductDataImages: (state, action) => {
        state.images = action.payload;
        state.loading = false;
        state.error = null;
    }
  },
});

export const { fetchSingleProductDataStart, fetchSingleProductDataSuccess, fetchSingleProductDataFailure, fetchSingleProductDataImages } = singleProductSlice.actions;


export default singleProductSlice.reducer