import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import productReducer from './product/productReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'cart']
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  product: productReducer
});

export default persistReducer(persistConfig, rootReducer);
