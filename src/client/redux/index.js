// FINAL REDUX ACTIONS TO BE USED BY REACT

export {
  resetErrorandSuccess, userLogin, userLogout, userRegister, userUploadAvatar
} from './user/userActions';

export { addToCart, removeFromCart } from './cart/cartActions';

export {
  getProductsRequest, getProductsSuccess,
  setColorFilterAction, unsetColorFilterAction,
  setPriceFilterAction, unsetPriceFilterAction
} from './product/productActions';
