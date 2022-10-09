import React from 'react'
import Copyright from '../../copyright/copyright';
import Header2 from '../../header2/header2';
import Sidebar from '../../siderbar/sidebar';
import CreateOrder from '../createOrder';
import './orderCreation.css'

const OrderCreation= ()=>{
    return (
        <div>
            <div><Header2/></div>
            <div className='component'>
            <div><Sidebar/></div>
            <div ><CreateOrder/></div>
            </div>
            <div><Copyright/></div>

        </div>
        
    )
}
export default OrderCreation;


