import React from 'react'

export default function GoodsItem(props) {
    const {
        id,
        name,
        description,
        price,
        full_background,
        select=Function.prototype
    } = props

    return (
        <div className="card">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src={full_background} alt={name}/>
    </div>
    <div className="card-content">
      <p className="card-title activator grey-text text-darken-4">{name}</p>
        <div className="desc">
            <p>{description}</p>
            <span className="right">{price} RUB</span>
         </div> 
      <button 
      className="btn teal lighten-3 center" 
      onClick={
        ()=>select({
          id,
          name,
          price
        })
      }
      >Buy</button>
    </div>
  </div>
    )
}
