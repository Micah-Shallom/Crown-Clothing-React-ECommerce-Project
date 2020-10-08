import React from 'react'

import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions.js'
import { selectCartItemsCount } from '../../redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect'

import {CartIconContainer,ItemCountContainer,ShoppingIcon} from './cart-icon.styles.js'


const CartIcon = ( {toggleCartHidden , itemCount} ) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon'/>
    <ItemCountContainer className='item-count'> {itemCount} </ItemCountContainer>
  </CartIconContainer>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden : () => dispatch(toggleCartHidden())
});

//  BEFORE USING SELECTORS TO MEMOIZE SPECIFIC SECTION OF OUR STATE TO PREVENT RENDERING WHEN A DIFFERENT STATE NOT CONNECTED TO THIS PARTICULAR STATE IS CHANGED
// const mapStateToProps = ({ cart : {cartItems} }) => ({
//   itemCount : cartItems.reduce((accumilatedQuantity,cartItem) => accumilatedQuantity+cartItem.quantity,0)
// })

//AFTER MEMOIZATON
// const mapStateToProps = state => ({
//   itemCount : selectCartItemsCount(state)
// })
const mapStateToProps = createStructuredSelector({
  itemCount : selectCartItemsCount
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);