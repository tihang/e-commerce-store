import {
  SET_COLOR_FILTER, UNSET_COLOR_FILTER,
  GET_PRODUCT_SUCCESS, GET_PRODUCT_REQUEST,
  SET_PRICE_FILTER, UNSET_PRICE_FILTER
} from './productTypes';

const initialState = {
  result: [],
  loading: false,
  filter: {
    color: [],
    price: ''
  }
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case SET_COLOR_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          color: [...state.filter.color, action.payload]
        }
      };
    case UNSET_COLOR_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          color: [...state.filter.color.filter(color => color !== action.payload)]
        }
      };
    case SET_PRICE_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          price: action.payload
        }
      };
    case UNSET_PRICE_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          price: ''
        }
      };
    default:
      return state;
  }
};

export default productReducer;
