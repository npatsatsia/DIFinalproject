import React from 'react'
import './index.css'
import ItemsAndPayment from '../../Components/cart/cartItemsAndPayment/itemsAndPayment'
import StaticInfo from '../../Components/cart/cartStaticInfo/staticInfo'
import CartMostDemand from '../../Components/cart/cartMostDemand/cartMostDemand'

const Cart = () => {
  return (
    <>
        <ItemsAndPayment/>
        <StaticInfo/>
        <CartMostDemand/>
    </>
  )
}

export default Cart
