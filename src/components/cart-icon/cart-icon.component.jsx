import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg.svg'
import './cart-icon.styles.scss'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions.js'
import { selectCartItemsCount } from '../../redux/cart/cart.selector'

const CartIcon = ( {toggleCartHidden , itemCount} ) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon'/>
    <span className='item-count'> {itemCount} </span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden : () => dispatch(toggleCartHidden())
})

//  BEFORE USING SELECTORS TO MEMOIZE SPECIFIC SECTION OF OUR STATE TO PREVENT RENDERING WHEN A DIFFERENT STATE NOT CONNECTED TO THIS PARTICULAR STATE IS CHANGED
// const mapStateToProps = ({ cart : {cartItems} }) => ({
//   itemCount : cartItems.reduce((accumilatedQuantity,cartItem) => accumilatedQuantity+cartItem.quantity,0)
// })

//AFTER MEMOIZATON
const mapStateToProps = state => ({
  itemCount : selectCartItemsCount(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);