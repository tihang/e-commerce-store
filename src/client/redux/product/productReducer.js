import { GET_PRODUCTS, SET_FILTER } from './productTypes';

const initialState = {
  products: [],
  filter: []
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };

    case SET_FILTER:
      return {
        ...state,
        filter: action.payload
      };

    default:
      return state;
  }
};

export default productReducer;
