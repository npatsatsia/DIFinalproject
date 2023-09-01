import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import { HiMiniListBullet, HiOutlineHeart, HiOutlineHome, HiOutlineShoppingCart } from "react-icons/hi2";
import { TfiHeadphoneAlt, TfiWorld, TfiLayoutMediaLeftAlt } from "react-icons/tfi";
import avatar from '../../../../Assets/images/Avatar.png';


const Sidebar = ({show, setShow}) => {
    const [userAvatar, setUserAvatar] = useState(false)
    const sideNavRef = useRef();

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
            <div className='sidebar-user'>
                <div className='sb-user-img'>
                    <img src={userAvatar? avatar : avatar} alt="avatar" />
                </div>
                <div className='sb-user-links'>
                    <span>Sign In</span> | <span>Register</span>
                </div>
            </div>
            <div className='sidebar-main'>
                <div className='sidebar-single-item with-icon'>
                    <HiOutlineHome/>
                    <span>Home</span>
                </div>
                <div className='sidebar-single-item with-icon'>
                    <HiMiniListBullet/>
                    <span>Categories</span>
                </div>
                <div className='sidebar-single-item with-icon'>
                    <HiOutlineHeart/>
                    <span>Favorites</span>
                </div>
                <div className='sidebar-single-item with-icon'>
                    <HiOutlineShoppingCart/>
                    <span>Cart</span>
                </div>
            </div>
            <div className='grey-line'></div>
            <div className='sidebar-more'>
                <div className='sidebar-single-item with-icon'>
                    <TfiWorld/>
                    <span>English | USD</span>
                </div>
                <div className='sidebar-single-item with-icon'>
                    <TfiHeadphoneAlt/>
                    <span>Contact Us</span>
                </div>
                <div className='sidebar-single-item with-icon'>
                    <TfiLayoutMediaLeftAlt/>
                    <span>About</span>
                </div>
            </div>
            <div className='grey-line'></div>
            <div className='sidebar-info'>
                <div className='sidebar-single-item'>
                    <span>User agreement</span>
                </div>
                <div className='sidebar-single-item'>
                    <span>Partnership</span>
                </div>
                <div className='sidebar-single-item'>
                    <span>Privacy policy</span>
                </div>
            </div>
        </div>
        {/* <div className='sidebar-close' onClick={() => (setShow(false))}>
            <TfiArrowCircleLeft className='sidebar-close-icon'/>
        </div> */}
    </aside>
    </div>

  )
}

export default Sidebar
