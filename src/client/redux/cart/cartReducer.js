/* eslint-disable no-underscore-dangle */
import { CART_ADD, CART_REMOVE } from './cartTypes';

const initialState = {
  items: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD:
      // If existing item in cart
      if (state.items.findIndex(item => item._id === action.payload._id) !== -1) {
        const items = state.items.reduce((itemAccumulator, item) => {
          if (item._id === action.payload._id) {
            itemAccumulator.push({ ...item, count: item.count + 1 });
          } else {
            itemAccumulator.push(item);
          }
          return itemAccumulator;
        }, []);
        return { ...state, items };
      }
      return { ...state, items: [...state.items, { ...action.payload, count: 1 }] };
    case CART_REMOVE:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload._id)
      };
    default:
      return state;
  }
};

export default cartReducer;
