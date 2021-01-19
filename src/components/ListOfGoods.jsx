import React from 'react'
import GoodsItem from './GoodsItem'
import './Goods.css'
export default function ListOfGoods(props) {
    const {goods = [],select = Function.prototype} = props
    if(!goods.length){
        return <h3>Nothing here</h3>
    }
    return (
        <div className="goods container">
            {
                goods.map(item=>(
                    <GoodsItem key={item.id} {...item} select={select}/>
                )) 
            }
        </div>
    )
}
