import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss'
import {connect } from 'react-redux'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect'



const CartDropdown = ({cartItems})  => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
      }
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  </div>
)

// const mapStateToProps = state => ({
//   cartItems : selectCartItems(state)
// })
const mapStateToProps = createStructuredSelector({
  cartItems : selectCartItems
})
export default connect(mapStateToProps)(CartDropdown)