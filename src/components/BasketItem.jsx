import React from 'react'
import './Basket.css'

export default function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        closeList = Function.prototype,
        increase = Function.prototype,
        decrease = Function.prototype,
    } = props
  
    return (
      <ul>
          <li id={id} className="collection-item">
            {name} x {quantity} = {price * quantity} RUB
                <button className="btn btn-small btn-floating blue accent-2" onClick={()=>increase(id)}><i className="material-icons">add</i></button>
                <button className="btn btn-small btn-floating blue accent-2" onClick={()=>decrease(id)}><i className="material-icons">remove</i></button> 
            <span className="secondary-content" onClick={()=>closeList(id)}>
                <i className="material-icons close-list">close</i>
            </span>
            <hr/>
        </li>
      </ul>
    )
}
