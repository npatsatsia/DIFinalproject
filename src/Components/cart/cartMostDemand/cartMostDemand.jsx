import React from 'react'
import './index.css'
import { mostDemand } from '../../../Static/cartMostDemandProducts'

const CartMostDemand = () => {
  return (
    <section className='cart-most-demand-section'>
      <div className='cart-most-demand-title'>
        <h4 className='h4-title drk'>Saved for later</h4>
      </div>
      <div className='cart-most-demand-container'>
        <ul className='cart-most-demand-ul'>
          {mostDemand.map((item) => {
            return <li className='cart-most-demand-li' key={item.id}>
              <div className='cart-md-container'>
                <div className='cart-md-image'>
                  <img src={item.img} alt="product" />
                </div>
                <div className='cart-md-info'>
                  <div className='cart-md-price'>
                    <span className='h5-title drk'>{item.price}</span>
                  </div>
                  <div className='cart-md-product-name'>
                    <span className='text-info gr8'>{item.product}</span>
                  </div>
                  <div className='cart-md-resp-buttons active'>
                    <div className='cart-md-resp-mtc-btn text-btn-small blu'>Move to cart</div>
                    <div className='cart-md-resp-rmv-btn text-btn-small red'>Remove</div>
                  </div>
                </div>  
                <div className='cart-md-add-btn'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M15.1676 11.9166C15.8551 11.9166 16.4601 11.5408 16.7717 10.9725L20.0534 5.02331C20.3926 4.41831 19.9526 3.66665 19.2559 3.66665H5.68924L4.82758 1.83331H1.83008V3.66665H3.66341L6.96341 10.6241L5.72591 12.8608C5.05674 14.0891 5.93674 15.5833 7.33008 15.5833H18.3301V13.75H7.33008L8.33841 11.9166H15.1676ZM6.56008 5.49998H17.6976L15.1676 10.0833H8.73258L6.56008 5.49998ZM7.33008 16.5C6.32174 16.5 5.50591 17.325 5.50591 18.3333C5.50591 19.3416 6.32174 20.1666 7.33008 20.1666C8.33841 20.1666 9.16341 19.3416 9.16341 18.3333C9.16341 17.325 8.33841 16.5 7.33008 16.5ZM16.4967 16.5C15.4884 16.5 14.6726 17.325 14.6726 18.3333C14.6726 19.3416 15.4884 20.1666 16.4967 20.1666C17.5051 20.1666 18.3301 19.3416 18.3301 18.3333C18.3301 17.325 17.5051 16.5 16.4967 16.5Z" fill="#0D6EFD"/>
                  </svg>
                  <span className='text-btn-normal blu'>Move to cart</span>
                </div>
              </div>
            </li>
          })}
        </ul>
      </div>
    </section>
  )
}

export default CartMostDemand
