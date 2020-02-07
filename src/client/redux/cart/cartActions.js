import { CART_ADD, CART_REMOVE } from './cartTypes';


export const addToCart = item => ({
  type: CART_ADD,
  payload: item
});

export const removeFromCart = item => ({
  type: CART_REMOVE,
  payload: item
});
