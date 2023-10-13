import React from 'react'
import './index.css'
import { HiOutlineEnvelope } from "react-icons/hi2";

const Subscribe = () => {
  return (
    <section className='homepg-subscribe-section'>
        <div className='subscribe-container'>
            <div className='subscribe-texts'>
                <h4 className='title-h4 drk'>Subscribe on our newsletter</h4>
                <span className='text-normal gr8'>Get daily news on upcoming offers from many suppliers all over the world</span>
            </div>
            <form className='subscribe-inputs-form'>
                <div className='subscribe-inputs-container'>
                    <div className='subscribe-mail'>
                        <HiOutlineEnvelope/>
                        <input className='text-base gr5' type="mail" placeholder='Email'/>
                    </div>
                    <div className='subscribe-button'>
                        <button className='text-btn-normal wht'>Subscribe</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Subscribe
