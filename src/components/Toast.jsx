import React,{useEffect} from 'react'
import './Toast.css'

export default function Toast(props) {
    const {name='',closeAlert = Function.prototype} = props;

    useEffect(() => {
        const timer = setTimeout(closeAlert,2000)

        return()=>{
            clearTimeout(timer)
        }
        //eslint-disable-next-line
    }, [name])
    return (
        <div className="toast-container">
            <div className="toast"><p>{name} added to the basket!</p></div>
        </div>
    )
}


