import React from 'react'
import './checkout-item.styles.scss'

const CheckOutItem = ( {cartItem : {name,ImageUrl,price,quantity}} ) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={ImageUrl} alt="item"/>
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button">&#10006;</div>
  </div>
)

export default CheckOutItem;