import {
  GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS,
  SET_COLOR_FILTER, UNSET_COLOR_FILTER,
  SET_PRICE_FILTER, UNSET_PRICE_FILTER
} from './productTypes';

// TO ACTIVATE LOADING SPINNER
export const getProductsRequest = () => ({
  type: GET_PRODUCT_REQUEST
});
// TO ACTIVATE LOADING SPINNER
export const getProductsSuccess = () => ({
  type: GET_PRODUCT_SUCCESS,
});


// TO SET FILTER TO COLOR ARRAY
export const setColorFilterAction = filter => ({
  type: SET_COLOR_FILTER,
  payload: filter
});
// TO UNSET FILTER FROM COLOR ARRAY
export const unsetColorFilterAction = filter => ({
  type: UNSET_COLOR_FILTER,
  payload: filter
});


// TO SET FILTER TO PRICE ARRAY
export const setPriceFilterAction = filter => ({
  type: SET_PRICE_FILTER,
  payload: filter
});
// TO UNSET FILTER FROM PRICE ARRAY
export const unsetPriceFilterAction = filter => ({
  type: UNSET_PRICE_FILTER,
  payload: filter
});
