import React from 'react'
import BasketItem from './BasketItem'
import './Basket.css'
export default function Basket(props) {
    const {
        order = [] , 
        toggleBasket = Function.prototype, 
        closeList= Function.prototype,
        increase  = Function.prototype,
        decrease  = Function.prototype,
    } = props;

    const totalPrice = order.reduce((total, oneItem)=>{
        return total+ oneItem.price * oneItem.quantity;
    },0)
    return (
        <ul className="collection basket-list">
        <li className="collection-item active blue accent-4">The basket</li>
    
        {
            order.length ? order.map((item) => (
                <BasketItem key = {item.id} {...item} closeList={closeList} increase={increase} decrease={decrease}/>
            ))
            : <li className="collection-item">nothing here</li>
        }
        <li className="collection-item active blue accent-4">Total price: <span>{totalPrice} RUB</span>
        <span className="right">
        <button className="btn btn-small waves-effect waves-light blue accent-2 btn2" onclick="M.toast({html: 'I am a toast'})">Arrange</button>
        </span>
        </li>
        <a href="/" className="material-icons basket-close" onClick={toggleBasket}>close</a>
      </ul>
    )
}
