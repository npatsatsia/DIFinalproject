import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    brands: [],
    loading: false,
    error: null
  },
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.data = action.payload
      const brandsArr = action.payload.map((item) => (item.brand))
      state.brands = brandsArr.filter((item, index) => brandsArr.indexOf(item) === index)
      state.loading = false;
      state.error = null;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = productsSlice.actions;

export default productsSlice.reducer;
