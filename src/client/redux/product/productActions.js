import { GET_PRODUCTS, SET_FILTER } from './productTypes';

export const getProductsRequest = () => ({
  type: GET_PRODUCTS
});

export const getProductsSuccess = products => ({
  type: GET_PRODUCTS,
  payload: products
});

export const getProductsFailure = products => ({
  type: GET_PRODUCTS,
  payload: products
});

export const setFilter = filter => ({
  type: SET_FILTER,
  pyaload: filter
});
