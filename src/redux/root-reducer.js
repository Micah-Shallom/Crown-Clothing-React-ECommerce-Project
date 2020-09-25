import { combineReducers } from 'redux'
import userReducer from './user/user-reducer.jsx'
import cartReducer from './cart/cart.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import directoryReducer from './directory/directory.reducer.js';
import shopReducer from './shop/shop.reducer.js';

const persistConfig = {
  key : 'root',
  storage : storage,
  whitelist : ['cart'] 
  // user from combineReducers wasnt passed into whitelist because its persistance has already been handled by fireBase
}

const rootReducer = combineReducers ({
  user : userReducer,
  cart : cartReducer,
  directory : directoryReducer,
  shop : shopReducer
});

// export default combineReducers ({
//   user : userReducer,
//   cart : cartReducer
// });

export default persistReducer(persistConfig, rootReducer);