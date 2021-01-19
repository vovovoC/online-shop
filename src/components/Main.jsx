import React,{useState, useEffect} from 'react'
import {API_KEY,API_URL} from '../config'
import Preloader from './Preloader'
import ListOfGoods from './ListOfGoods'
import Cart from './Cart'
import './Main.css'
import Basket from './Basket'
import Toast from './Toast'


export default function Main() {
    const [goods, setGoods] = useState([])
    const [loading,setLoading] = useState(true)
    const [order,setOrder] = useState([])
    const [show,setShow] = useState(false)
    const [alert, setAlert] = useState('')
    const toggleBasket = ()=> setShow(!show)

    useEffect( function getGoods(){
        fetch(API_URL, {
            headers:{
                'Authorization' :API_KEY,
            },
        }).then(response =>response.json()).then(data =>{
           data.featured && setGoods(data.featured)
           setLoading(false)
        })
    },[])
    const closeAlert = () =>{
        setAlert('')
    }
    const select = (item) =>{
        setAlert(item.name)
        const indexFind = order.findIndex(orderItem=> orderItem.id=== item.id)
        if(indexFind<0){
            const createItem = {
                ...item,
                quantity:1,
            }
            setOrder([...order, createItem])
        }
        else{
            const newOrder = order.map((orderItem,index)=>{
                if(indexFind===index){
                   return{
                    ...orderItem,
                    quantity:orderItem.quantity+1,
                   }
                }else{
                    return orderItem;
                }
            })
            setOrder(newOrder)
        }  
    }
    const increase = (item) =>{
        const newOrder = order.map(element => {
            if(element.id===item){
                const newQuan = element.quantity +1
                return{
                    ...element,
                    quantity:newQuan,
                }
            }else{
                return element
            }
        })
        setOrder(newOrder)
    }
    const decrease = (item) =>{
        const newOrder = order.map(element => {
            if(element.id===item){
                const newQuan = element.quantity - 1
                return{
                    ...element,
                    quantity:newQuan>=0 ? newQuan : 0,
                }
            }else{
                return element
            }
        })
        setOrder(newOrder)
    }
    const closeList = (itemId) =>{
        const newOrder = order.filter((element)=>element.id !== itemId)
        setOrder(newOrder)
     }
   
    return (
        <main className="content">
            <Cart quantity={order.length} toggleBasket={toggleBasket}/>
           {
                loading ? <Preloader/> : <ListOfGoods goods={goods} select={select}/>
           }
           { 
                show && <Basket order={order} closeList={closeList} toggleBasket={toggleBasket} increase={increase} decrease={decrease}/> 
           }
           {
               alert && <Toast name={alert} closeAlert={closeAlert}/>
           }
        </main>
    )
}
