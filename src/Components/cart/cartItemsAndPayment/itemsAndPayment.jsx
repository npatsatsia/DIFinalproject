import React from 'react'
import './index.css'
import tshirt from '../../../Assets/images/tshirtfour.png'
import { paymentMethods } from '../../../Static/paymentMethods'

const ItemsAndPayment = () => {
  return (
    <section className='cart-main-section'>
          <div className='cart-title-container'>
            <h3 className='h3-title'>{`My Cart ${'(items Qty)'}`}</h3>
          </div>
      <div className='items-payment-container'>
        <div className='cart-main-container'>
          <div className='cart-items-container'>
            <div className='cart-single-item-container'>
              <div className='cart-single-image-container'>
                <img src={tshirt} alt="product-image"/>
              </div>
              <div className='cart-product-info-buttons'>
                <div className='cart-product-name'>
                  <span className='text-title drk'>T-shirts with multiple colors, for men and lady</span>
                </div>
                <div className='cart-product-desc'>
                  <span className='text-info gr5'>Size: medium, Color: blue</span>
                  <span className='text-info gr5'>Seller: Artel Market</span>
                </div>
                <div className='cart-product-buttons'>
                  <div className='cart-remove-btn'>
                    <button className='text-btn-small red'>Remove</button>
                  </div>
                  <div className='cart-save-btn'>
                    <button className='text-btn-small blu'>Save for later</button>
                  </div>
                </div>
              </div>
              <div className='cart-price-qty'>
                <div className='cart-product-price'>
                  <span className='text-title drk'>$78.5</span>
                </div>
                <div className='cart-qty-counter'>
                  <div className='qty-minus'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M19 13H5V11H19V13Z" fill="#8B96A5"/>
                    </svg>
                  </div>
                  <div className='cart-qty'>
                    <span className='text-title drk'>2</span>
                  </div>
                  <div className='qty-plus'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#8B96A5"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className='cart-single-item-container'>
              <div className='cart-single-image-container'>
                <img src={tshirt} alt="product-image"/>
              </div>
              <div className='cart-product-info-buttons'>
                <div className='cart-product-name'>
                  <span className='text-title drk'>T-shirts with multiple colors, for men and lady</span>
                </div>
                <div className='cart-product-desc'>
                  <span className='text-info gr5'>Size: medium, Color: blue</span>
                  <span className='text-info gr5'>Seller: Artel Market</span>
                </div>
                <div className='cart-product-buttons'>
                  <div className='cart-remove-btn'>
                    <button className='text-btn-small red'>Remove</button>
                  </div>
                  <div className='cart-save-btn'>
                    <button className='text-btn-small blu'>Save for later</button>
                  </div>
                </div>
              </div>
              <div className='cart-price-qty'>
                <div className='cart-product-price'>
                  <span className='text-title drk'>$78.5</span>
                </div>
                <div className='cart-qty-counter'>
                  <div className='qty-minus'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M19 13H5V11H19V13Z" fill="#8B96A5"/>
                    </svg>
                  </div>
                  <div className='cart-qty'>
                    <span className='text-title drk'>2</span>
                  </div>
                  <div className='qty-plus'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#8B96A5"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className='cart-single-item-container'>
              <div className='cart-single-image-container'>
                <img src={tshirt} alt="product-image"/>
              </div>
              <div className='cart-product-info-buttons'>
                <div className='cart-product-name'>
                  <span className='text-title drk'>T-shirts with multiple colors, for men and lady</span>
                </div>
                <div className='cart-product-desc'>
                  <span className='text-info gr5'>Size: medium, Color: blue</span>
                  <span className='text-info gr5'>Seller: Artel Market</span>
                </div>
                <div className='cart-product-buttons'>
                  <div className='cart-remove-btn'>
                    <button className='text-btn-small red'>Remove</button>
                  </div>
                  <div className='cart-save-btn'>
                    <button className='text-btn-small blu'>Save for later</button>
                  </div>
                </div>
              </div>
              <div className='cart-price-qty'>
                <div className='cart-product-price'>
                  <span className='text-title drk'>$78.5</span>
                </div>
                <div className='cart-qty-counter'>
                  <div className='qty-minus'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M19 13H5V11H19V13Z" fill="#8B96A5"/>
                    </svg>
                  </div>
                  <div className='cart-qty'>
                    <span className='text-title drk'>2</span>
                  </div>
                  <div className='qty-plus'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#8B96A5"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className='cart-buttons-container'>
              <div className='cart-back-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M18.3332 10.0833H7.17734L12.3015 4.95913L10.9998 3.66663L3.6665 11L10.9998 18.3333L12.2923 17.0408L7.17734 11.9166H18.3332V10.0833Z" fill="white"/>
                </svg>
                <button className='text-btn-normal wht'>Back to shop</button>
              </div>
              <div className='cart-remove-all-btn'>
                <button className='text-btn-normal blu'>Remove all</button>
              </div>
            </div>
          </div>
        </div>
        <div className='cart-payment-container'>
          <div className='coupon-container'>
            <div className='coupon-title'>
              <span className='text-base gr6'>Have a coupon?</span>
            </div>
            <div className='coupon-form'>
              <div className='coupon-input-button'>
                <div className='coupon-input'>
                  <input type="text"  placeholder='Add coupon'/>
                </div>
                <div className='coupon-button'>
                  <button className='text-btn-normal blu'>Apply</button>
                </div>
              </div>
            </div>
          </div>
          <div className='cart-payment-info'>
            <div className='cart-payment-info-container'>
              <div className='cart-expense'>
                <div className='payment-subtotal'>
                  <span className='text-normal gr6'>Subtotal:</span>
                  <span className='text-normal gr6'>$1403.00</span>
                </div>
                <div className='payment-shipping'>
                  <span className='text-normal gr6'>Shipping</span>
                  <span className='text-normal red'>-$0.00</span>
                </div>
                <div className='payment-tax'>
                  <span className='text-normal gr6'>Tax</span>
                  <span className='text-normal grn'>+$0.00</span>
                </div>
              </div>
              <div className='cart-total'>
                <h6 className='h6-title drk'>Total:</h6>
                <h4 className='h4-title drk'>$1406.00</h4>
              </div>
              <div className='cart-checkout text-btn-large wht'>Checkout</div>
              <div className='cart-payment-methods'>
                {paymentMethods.map(item => {
                  return item
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ItemsAndPayment
