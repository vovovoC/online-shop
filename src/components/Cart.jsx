import React from 'react'
import './Cart.css'

export default function Cart(props) {
    const {quantity=0, toggleBasket = Function.prototype} = props;
    return (
        <div className="cart blue darken-4 white-text" onClick={toggleBasket}>
           <span className="right">
           <i className="material-icons">shopping_cart</i>
            {
                quantity!==0 ? <span className="cart-quantity ">{quantity}</span> : null
            }
            </span>
        </div>
    )
}
