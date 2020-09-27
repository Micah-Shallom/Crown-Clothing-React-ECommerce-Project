import React from 'react'
import { CartImage, CartItemContainer, CartItemDetailsContainer } from './cart-item.styles';

const CartItem = ( { item : {imageUrl, price, name, quantity} } ) => (
  <CartItemContainer className="cart-item">
    <CartImage src={imageUrl} alt="item"/>
    <CartItemDetailsContainer className="item-details">
      <span className="name">{name}</span>
      <span className="price">${quantity} x {price}</span>
    </CartItemDetailsContainer>
  </CartItemContainer>
)
export default CartItem;