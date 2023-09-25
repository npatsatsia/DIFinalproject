import React, { useEffect, useRef, useState } from 'react'

const CartPriceCounter = ({product, setTotalPrice, totalPrice}) => {
    const [itemCounter, setItemCounter] = useState(1)

    const totalRef = useRef()

    const handleMinus = () => {
        if(itemCounter > 1){
          setItemCounter(prev => prev - 1)
          setTotalPrice(prev => (prev - parseFloat(product.price)))
        }
        console.log(totalPrice)
      }

      const handlePlus = () => {
            setItemCounter(prev => prev + 1)          
            setTotalPrice(prev => (prev + parseFloat(product.price)))
      }

  return (
    <div className='cart-price-qty'>
        <div className='cart-product-price'>
            <span className='text-title drk'>${(product.price * itemCounter).toFixed(2)}</span>
        </div>
        <div className='cart-qty-counter'>
            <div className='qty-minus' onClick={() => handleMinus()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 13H5V11H19V13Z" fill="#8B96A5"/>
            </svg>
            </div>
            <div className='cart-qty'>
            <span className='text-title drk' ref={totalRef} >{itemCounter}</span>
            </div>
            <div className='qty-plus' onClick={() => handlePlus()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#8B96A5"/>
            </svg>
            </div>
        </div>
    </div>
  )
}

export default CartPriceCounter
