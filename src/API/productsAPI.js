import axios from 'axios';
import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from '../Redux/ProductsSlice/index';
import { fetchSingleProductDataStart, fetchSingleProductDataSuccess, fetchSingleProductDataFailure, fetchSingleProductDataImages } from '../Redux/singleProductSlice';
import { fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailure} from '../Redux/categoriesSlice'

export const fetchProducts = () => async (dispatch) => {
    try {
    dispatch(fetchDataStart());
    const response = await axios.get('http://digital-amazon-test.somee.com/api/product/products');
    dispatch(fetchDataSuccess(response.data));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
}
};

export const fetchSingleProduct = (id) => async (dispatch) => {
  try {
  dispatch(fetchSingleProductDataStart());
  const response = await axios.get(`http://digital-amazon-test.somee.com/api/product/products/${id}`);
  dispatch(fetchSingleProductDataSuccess(response.data));
  dispatch(fetchSingleProductDataImages(response.data.images))
} catch (error) {
  dispatch(fetchSingleProductDataFailure(error.message));
}
};

export const fetchCategories = () => async (dispatch) => {
  try {
  dispatch(fetchCategoriesStart());
  const response = await axios.get('http://digital-amazon-test.somee.com/api/product/categories');
  dispatch(fetchCategoriesSuccess(response.data));
} catch (error) {
  dispatch(fetchCategoriesFailure(error.message));
}
};