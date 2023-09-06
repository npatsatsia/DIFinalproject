import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from '../Redux/ProductsSlice/index';


export const fetchProducts = () => async (dispatch) => {
    try {
    dispatch(fetchDataStart());
    const response = await axios.get('https://dummyjson.com/products');
    dispatch(fetchDataSuccess(response.data.products));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
}
// export const fetchProducts = createAsyncThunk('products/fetchProducts', async (dispatch) => {
//     try {
//         dispatch(fetchDataStart());
//         const response = await axios.get('https://dummyjson.com/products');
//         dispatch(fetchDataSuccess(response.data));
//     } catch (error) {
//         dispatch(fetchDataFailure(error.message));
//     }
// });

};