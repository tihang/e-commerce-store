import { CART_ADD, CART_REMOVE } from './cartTypes';

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD:
      return {
        ...state,
        items: [...state.items, action.payload]
      };

    case CART_REMOVE:

      return {
        ...state,
        // eslint-disable-next-line no-underscore-dangle
        items: state.items.filter(item => item._id !== action.payload._id)
      };
    default:
      return state;
  }
};

export default cartReducer;
