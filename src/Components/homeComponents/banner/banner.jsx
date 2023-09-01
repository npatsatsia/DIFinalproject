import React, { useEffect, useState } from 'react';
import './index.css'
import avatar from '../../../Assets/images/Avatar.png'

const Banner = ({categoriesArr}) => {

  return (
    <section className='home-banner-section'>
        <div className='home-main-container'>
            <div className='home-category-container'>
                <ul>
                    {categoriesArr.map((item) => {
                        return <li key={item.id}>{item.name}</li>
                    })}
                </ul>
            </div>
            <div className='home-latest-trending'>
                {/* <img src={banner} className='background-container' alt='banner'/> */}
                <div className='banner-info'>
                    <span>Latest trending</span>
                    <span>Electronic items</span>
                    <button>Learn more</button>
                </div>
            </div>
            <div className='home-user'>
                <div className='user-get-started'>
                    <div className='user-avatar'>
                        <div className='user-avatar-container'>
                            <img src={avatar} alt='avatar'/>
                        </div>
                        <div className='span-container'>
                            <span>Hi, User</span>
                            <span>Let's Get Started</span>
                        </div>
                    </div>
                    <div className='user-buttons'>
                        <button className='user-join-button'>Join now</button>
                        <button className='user-login-button'>Log in</button>
                    </div>
                </div>
                <div className='new-supplier'>
                    <span>Get US $10 off with a new supplier</span>
                </div>
                <div className='send-quotes'>
                    <span>Send quotes with supplier preferences</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner
