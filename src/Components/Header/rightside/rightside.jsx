import React, { useState } from 'react';
import './index.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Modal } from 'antd';
import {FaCircleUser, FaMessage, FaHeart, FaCartShopping} from 'react-icons/fa6'

const RightSide = ({cartProducts}) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const {isLoggedIn} = useSelector(state => state.auth)

  const navigate = useNavigate()

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setOpen(false);
    navigate('/auth?account=login')
  };

  const handleCancel = () => {
    setOpen(false);
  };

  console.log(cartProducts)


  return (
    <div className='header-right-side'>
        <Link to={'/profile/edit-profile'} className='link'>
          <div><FaCircleUser className='profile icon'/><span>Profile</span></div>
        </Link>
        <div className='display-none'><FaMessage className='message icon'/><span>Messages</span></div>
        <div className='display-none'><FaHeart className='orders icon'/><span>Orders</span></div>
        {isLoggedIn?  <div className='header-cart-icon' onClick={() => navigate('/cart')}>
                        <FaCartShopping className='cart icon'/>
                        <span>My Cart</span>
                        <div className={`cart-length-dot text-small wht ${cartProducts.length < 1? 'none' : ''}`}>{cartProducts.length}</div>
                      </div> :
        <div onClick={() => showModal()}><FaCartShopping className='cart icon'/>
          <span>My Cart</span>
        </div>
        }
        <Modal
          okText='Log In'
          title="You must be authorized"
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
        </Modal>
    </div>
  )
}

export default RightSide
