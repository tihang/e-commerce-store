import { GET_PRODUCTS, SET_COLOR_FILTER, UNSET_COLOR_FILTER } from './productTypes';

const initialState = {
  result: [],
  filter: {
    gender: {},
    color: [],
    price: ''
  }
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        result: action.payload
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

    default:
      return state;
  }
};

export default productReducer;
