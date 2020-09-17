import { combineReducers } from 'redux'
import userReducer from './user/user-reducer.jsx'
import cartReducer from './cart/cart.reducer';

export default combineReducers ({
  user : userReducer,
  cart : cartReducer
});