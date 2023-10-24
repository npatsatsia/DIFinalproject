import React, { useState, useEffect } from 'react'
import './index.css'

const RecentPurchase = ({products}) => {
    const [showRecent, setShowRecent] = useState(false)
    const [recentProduct, setRecentProduct] = useState({})


    useEffect(() => {
        const setTrue = () => {
          setShowRecent(true);
        };
    
        const setFalse = () => {
          setShowRecent(false);
          setRecentProduct({})
        };
    
        setTrue();
    
        const timer1 = setInterval(setFalse, 8000);
        const timer2 = setInterval(setTrue, 30000);
    
        return () => {
          clearInterval(timer1);
          clearInterval(timer2);
        };
      }, []);

      useEffect(() => {
          const randomIndex = Math.floor(Math.random() * products.length);
          console.log(products[randomIndex])
        setRecentProduct(products[randomIndex])
      },[showRecent])

      const productImages = data.images
      console.log(productImages)

  return ( recentProduct &&
        <div className='recent_purchase_container' style={{display: showRecent? 'block' : 'none'}}>
            <div className='recent_purchase_image'>
                <img  alt=" product image" />
            </div>
            <div className="recent_purchase_info">
                <div className="purchase_buyer">
                    <span className='text-small wht'>Someone in Kutaisi, Georgia bought: </span>
                </div>
                <div className="purchased_item">
                    <span>{recentProduct.brand}</span>
                </div>
            </div>
        </div>
  )
}

export default RecentPurchase
