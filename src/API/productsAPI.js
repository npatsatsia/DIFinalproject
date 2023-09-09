import axios from 'axios';
import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from '../Redux/ProductsSlice/index';
import { fetchSingleProductDataStart, fetchSingleProductDataSuccess, fetchSingleProductDataFailure, fetchSingleProductDataImages } from '../Redux/singleProductSlice';

export const fetchProducts = () => async (dispatch) => {
    try {
    dispatch(fetchDataStart());
    const response = await axios.get('https://dummyjson.com/products');
    dispatch(fetchDataSuccess(response.data.products));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
}
};

export const fetchSingleProduct = (id) => async (dispatch) => {
  try {
  dispatch(fetchSingleProductDataStart());
  const response = await axios.get(`https://dummyjson.com/products/${id}`);
  console.log(response.data.images[1])
  dispatch(fetchSingleProductDataSuccess(response.data));
  dispatch(fetchSingleProductDataImages(response.data.images))
} catch (error) {
  dispatch(fetchSingleProductDataFailure(error.message));
}
};