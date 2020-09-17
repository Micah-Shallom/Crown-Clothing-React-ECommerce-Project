const { cartActionTypes } = require("./cart.types")

export const toggleCartHidden = () => ({
  type : cartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
  type : cartActionTypes.ADD_ITEM,
  payload : item
})