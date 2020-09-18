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