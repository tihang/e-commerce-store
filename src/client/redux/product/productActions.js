import { GET_PRODUCTS, SET_COLOR_FILTER, UNSET_COLOR_FILTER } from './productTypes';

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

export const setColorFilterAction = filter => ({
  type: SET_COLOR_FILTER,
  payload: filter
});

export const unsetColorFilterAction = filter => ({
  type: UNSET_COLOR_FILTER,
  payload: filter
});
