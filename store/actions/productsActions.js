import axios from 'axios';
import { baseURL } from '../api/apiService';
import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from './constants';
export const fetchProducts = () => {
  return dispatch => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
    axios.get(`${baseURL}store/products/`)
      .then(response => {
        const products = response.data;
        dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: errorMsg });
      });
  };
};
