import React from 'react'
import './index.css'
import { HiOutlineEnvelope } from "react-icons/hi2";

const Subscribe = () => {
  return (
    <section className='homepg-subscribe-section'>
        <div className='subscribe-container'>
            <div className='subscribe-texts'>
                <h4>Subscribe on our newsletter</h4>
                <span>Get daily news on upcoming offers from many suppliers all over the world</span>
            </div>
            <form className='subscribe-inputs-form'>
                <div className='subscribe-inputs-container'>
                    <div className='subscribe-mail'>
                        <HiOutlineEnvelope/>
                        <input type="mail" placeholder='Email'/>
                    </div>
                    <div className='subscribe-button'>
                        <button>Subscribe</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Subscribe
