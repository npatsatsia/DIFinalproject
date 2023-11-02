import React, { useState, useEffect } from 'react'
import './index.css'
import { cities } from '../../../Static/citiesGeorgia'

const RecentPurchase = ({products}) => {
    const [showRecent, setShowRecent] = useState(false)
    // const [recentProduct, setRecentProduct] = useState({})
    let randomIndex = Math.floor(Math.random() * products.length);
    let recentProduct = products[randomIndex]

    let randomCityIndex = Math.floor(Math.random() * cities.length);
    let city = cities[randomCityIndex]

    useEffect(() => {
        const setTrue = () => {
          setShowRecent(true);
        };
    
        const setFalse = () => {
          setShowRecent(false)
          recentProduct = {}
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
          let randomIndex = Math.floor(Math.random() * products.length);
          let randomCityIndex = Math.floor(Math.random() * cities.length);
          recentProduct = products[randomIndex]
          city = cities[randomCityIndex]
      },[showRecent, products])

      // const productImages = recentProduct.images[1]
      // console.log(recentProduct)

  return ( recentProduct &&
        <div className='recent_purchase_container' style={{display: showRecent? 'flex' : 'none'}}>
            <div className='recent_purchase_image'>
                <img src={recentProduct.images[0]} alt="product image" />
            </div>
            <div className="recent_purchase_info">
                <div className="purchase_buyer">
                    <span className='text-small wht'>Someone in {city.city}, {city.country} bought: </span>
                </div>
                <div className="purchased_item">
                    <span className='text-normal wht'>{recentProduct.brand}</span>
                </div>
            </div>
        </div>
  )
}

export default RecentPurchase
