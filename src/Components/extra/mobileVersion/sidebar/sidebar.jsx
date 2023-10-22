import React, { useCallback, useEffect, useRef, useState } from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Modal } from 'antd';
import { HiMiniListBullet, HiOutlineHeart, HiOutlineHome, HiOutlineShoppingCart } from "react-icons/hi2";
import { TfiHeadphoneAlt, TfiWorld, TfiLayoutMediaLeftAlt } from "react-icons/tfi";
import avatar from '../../../../Assets/images/Avatar.png';
import authAvatar from '../../../../Assets/images/authAvatar.png'
import { logout } from '../../../../slices/auth';

const Sidebar = ({show, setShow, cartProducts}) => {
    const [open, setOpen] = useState(false);
    const [navToCartModal, setNavToCartModal] = useState(false)

    const {isLoggedIn} = useSelector((state) => state.auth)

    const sideNavRef = useRef();
    
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleNavLogin = () => {
        setShow(false)
        const searchParams = new URLSearchParams();
          searchParams.set('account', 'login');      
          navigate(`/auth?${searchParams.toString()}`);
  }

  const handleNavReg = () => {
        setShow(false)
        const searchParams = new URLSearchParams();
        searchParams.set('account', 'register');      
        navigate(`/auth?${searchParams.toString()}`);
  }
    // /// logout modal
    const showModal = () => {
        setOpen(true);
      };

    
      const handleOk = useCallback(() => {
        setOpen(false);
        dispatch(logout());
        navigate('/');
        setShow(false);
      }, [dispatch, navigate]);
      
    
      const handleCancel = () => {
        setOpen(false);
      };

      // /// cart modal
      const showSliderModal = () => {
        setNavToCartModal(true)
    }

    const handleCartOk = useCallback(() => {
        navigate('/auth?account=login')
        setNavToCartModal(false);
        setShow(false)
    }, [navigate]);

    const handleCancelCart = () => {
        setNavToCartModal(false);
      };

      const handleClickOncart = useCallback(() => {
        setShow(false)
        navigate('/cart')
      },[navigate])
    

    useEffect(() => {
        let sidebarHandler = (e) => {
          if(!sideNavRef.current.contains(e.target)){
            setShow(false)
          }
        };
      
        document.addEventListener('mousedown', sidebarHandler)

        return() => {
            document.removeEventListener('mousedown', sidebarHandler)
        }
      });

  return (
    <div className={`sidebar-aside ${show? 'show' : 'hide'}`} >
    <aside ref={sideNavRef}>
        <div className='sidebar-container'>
            <div className='sidebar-user text-base drk'>
                <div className='sb-user-img'>
                    <img src={isLoggedIn? authAvatar : avatar} alt="avatar" />
                </div>
                    {isLoggedIn? 
                        <div className='sb-user-links'>
                            <Link to={'/profile/edit-profile'} className='link' >
                                <span onClick={() => (setShow(false))}>Profile </span>
                            </Link>
                             | 
                            <span className='red' onClick={() => showModal()}> Log out</span>
                            <Modal
                                okText='Log out'
                                title="Are you sure you want to log out?"
                                open={open}
                                onOk={handleOk}
                                onCancel={handleCancel}
                            ></Modal>
                        </div>
                    : 
                        <div className='sb-user-links'>
                            <span onClick={() => handleNavLogin()}>Sign in </span>
                             | 
                            <span onClick={() => handleNavReg()}> Sign Up</span>
                        </div>}
            </div>
            <div className='sidebar-main'>
                <div className='sidebar-single-item with-icon text-base drk'>
                    <HiOutlineHome/>
                    <Link className='link' to={'/'}>
                        <span className='text-base drk'>Home</span>
                    </Link>
                </div>
                <div className='sidebar-single-item with-icon'>
                    <HiMiniListBullet/>
                    <Link className='link' to={'/products'}>
                        <span className='text-base drk'>Categories</span>
                    </Link>
                </div>
                <div className='sidebar-single-item with-icon'>
                    <HiOutlineHeart/>
                    <span className='text-base drk'>Favorites</span>
                </div>
                <div className='sidebar-single-item with-icon'>
                    <HiOutlineShoppingCart/>
                    {isLoggedIn?
                        <span onClick={() => handleClickOncart()}>Cart{cartProducts.length > 0 && <span className='text-normal wht sidebar-cart-items'>{cartProducts.length}</span>}</span> :
                        <span onClick={() => showSliderModal()} className='text-base drk'>Cart</span>
                    }
                    <Modal
                        okText='Log In'
                        title="You must be authorized"
                        open={navToCartModal}
                        onOk={handleCartOk}
                        onCancel={handleCancelCart}
                        >
                    </Modal>
                </div>
            </div>
            <div className='grey-line'></div>
            <div className='sidebar-more'>
                <div className='sidebar-single-item with-icon'>
                    <TfiWorld/>
                    <span className='text-base drk'>English | USD</span>
                </div>
                <div className='sidebar-single-item with-icon'>
                    <TfiHeadphoneAlt/>
                    <span className='text-base drk'>Contact Us</span>
                </div>
                <div className='sidebar-single-item with-icon'>
                    <TfiLayoutMediaLeftAlt/>
                    <span className='text-base drk'>About</span>
                </div>
            </div>
            <div className='grey-line'></div>
            <div className='sidebar-info'>
                <div className='sidebar-single-item'>
                    <span className='text-base drk'>User agreement</span>
                </div>
                <div className='sidebar-single-item'>
                    <span className='text-base drk'>Partnership</span>
                </div>
                <div className='sidebar-single-item'>
                    <span className='text-base drk'>Privacy policy</span>
                </div>
            </div>
        </div>
    </aside>
    </div>

  )
}

export default Sidebar
