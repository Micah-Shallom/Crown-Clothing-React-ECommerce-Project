import { createSelector } from 'reselect';

//input selector
const selectCart = state => state.cart;



//output selector
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumilatedQuantity,cartItem) => accumilatedQuantity+cartItem.quantity,0) 
)

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumilatedQuantity,cartItem) => accumilatedQuantity+cartItem.quantity * cartItem.price,0) 
)