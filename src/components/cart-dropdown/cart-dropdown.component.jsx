import React from 'react'

import {connect } from 'react-redux'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { CartDropdownButton, CartDropdownContainer, CartItemsContainer, EmptyMessageContainer } from './cart-dropdown.styles'




const CartDropdown = ({cartItems, history , dispatch})  => (
  <CartDropdownContainer >
    <CartItemsContainer >
      {
        cartItems.length ?
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>) :
        <EmptyMessageContainer >Your Cart is Empty</EmptyMessageContainer>
      }
      <CartDropdownButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden())
      }}>GO TO CHECKOUT</CartDropdownButton>
    </CartItemsContainer>
  </CartDropdownContainer>
)

// const mapStateToProps = state => ({
//   cartItems : selectCartItems(state)
// })
const mapStateToProps = createStructuredSelector({
  cartItems : selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown))
