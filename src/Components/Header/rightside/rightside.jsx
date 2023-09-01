import React from 'react'
import './index.css'
import {FaCircleUser, FaMessage, FaHeart, FaCartShopping} from 'react-icons/fa6'

const RightSide = () => {
  return (
    <div className='header-right-side'>
        <div><FaCircleUser className='profile icon'/><span>Profile</span></div>
        <div className='display-none'><FaMessage className='message icon'/><span>Messages</span></div>
        <div className='display-none'><FaHeart className='orders icon'/><span>Orders</span></div>
        <div><FaCartShopping className='cart icon'/><span>My Cart</span></div>
    </div>
  )
}

export default RightSide
