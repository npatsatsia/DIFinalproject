import React, { useCallback, useEffect, useState } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { Modal, Alert, Space } from 'antd';
import { paymentMethods } from '../../../Static/paymentMethods'
import { getCartProducts } from '../../../slices/cart';
import {removeItemFromCart} from '../../../Store/removeFromCart/index'
import CartPriceCounter from '../cartPriceCounter/cartPriceCounter';
import Loader from '../../extra/loader/loader'



const ItemsAndPayment = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0)
  
  const JWToken = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch()

  const navigate = useNavigate()


  const { products, postLoading } = useSelector((state) => state.cartService);

  const { cartRmvloading, removed} = useSelector((state) => state.removeItemFromCart);


  let priceSum = 0

  if(products) {
    for (const item of products) {
      priceSum += parseFloat(item.price);
    }
  }
  
  useEffect(() => {
    setTotalPrice(priceSum)
  }, [priceSum])


  useEffect(() => {
    dispatch(getCartProducts());
  }, [dispatch, postLoading, cartRmvloading])

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = useCallback((id) => {
    const prp = {JWToken, id}
    dispatch(removeItemFromCart(prp))
    setOpen(false);
    setVisible(true)
  },[dispatch, JWToken]);

  const handleCancel = () => {
    setOpen(false);
  };



  if(visible) {
    setTimeout(() => {
      setVisible(false);
    }, 10000);
  }

  return (
    <section className='cart-main-section'>
          {removed &&
            <Space direction="vertical" style={{ width: '100%', paddingTop: '30px', fontFamily: 'Inter'}}>
              {visible && (
                <Alert message="succesfully removed from the cart" type="success" closable />
              )}
            </Space>
          }
          <div className='cart-title-container'>
            <h3 className='h3-title'>{`My Cart ${products.length}`}</h3>
          </div>
      <div className='items-payment-container'>
        {!cartRmvloading? 
        (products.length > 0? 
        (<div className='cart-main-container'>
          <div className='cart-items-container'>
            {products.map((item) => {
              return <div key={item.id} className='cart-single-item-container'>
              <div className='cart-single-image-container'>
                <img src={item.images[0]} alt="product"/>
              </div>
              <div className='cart-product-info-buttons'>
                <div className='cart-product-name'>
                  <span className='text-title drk'>{item.name}</span>
                </div>
                <div className='cart-product-desc'>
                  <span className='text-info gr5'>Size: medium, Color: blue</span>
                  <span className='text-info gr5'>{`Brand: ${item.brand}`}</span>
                </div>
                <div className='cart-product-buttons'>
                  <div className='cart-remove-btn'>
                    <button className='text-btn-small red' onClick={() => showModal()}>Remove</button>
                  </div>
                    <Modal
                      title="Remove item from cart"
                      open={open}
                      cancelText='No'
                      okText='Yes'
                      onOk={() =>handleOk(item.id)}
                      onCancel={handleCancel}
                    >
                      <p>are you sure?</p>
                    </Modal>
                  <div className='cart-save-btn'>
                    <button className='text-btn-small blu'>Save for later</button>
                  </div>
                </div>
              </div>
              <CartPriceCounter showModal={showModal} product={item} setTotalPrice={setTotalPrice} totalPrice={totalPrice}/>
            </div>
            })}
            <div className='cart-buttons-container'>
              <div className='cart-back-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M18.3332 10.0833H7.17734L12.3015 4.95913L10.9998 3.66663L3.6665 11L10.9998 18.3333L12.2923 17.0408L7.17734 11.9166H18.3332V10.0833Z" fill="white"/>
                </svg>
                <button className='text-btn-normal wht' onClick={() => navigate('/products')}>Back to shop</button>
              </div>
              <div className='cart-remove-all-btn'>
                <button className='text-btn-normal blu'>Remove all</button>
              </div>
            </div>
          </div>
        </div>) : (<h3 className='h3-title drk nocartitems'>NO PRODUCTS IN CART</h3>)) : <div className='cart-loader-container'><Loader/></div> }
        <div className='cart-payment-container'>
          <div className='coupon-container'>
            <div className='coupon-title'>
              <span className='text-base gr6'>Have a coupon?</span>
            </div>
            <div className='coupon-form'>
              <div className='coupon-input-button'>
                <div className='coupon-input'>
                  <input className='text-base gr5' type="text"  placeholder='Add coupon'/>
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
                  <span className='text-normal gr6'>${Math.round(totalPrice * 100) / 100}</span>
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
                <h4 className='h4-title drk'>${Math.round(totalPrice * 100) / 100}</h4>
              </div>
              <div className='cart-checkout text-btn-large wht'>Checkout</div>
              <div className='cart-payment-methods'>
                {paymentMethods.map((item, index) => {
                  return <div key={index + 98714231}>{item}</div>
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
