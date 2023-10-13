import React from 'react'
import './index.css'

const SinglesDiscount = () => {
  return (
    <section className='detail-discount-section'>
            <div className='detail-discount-container'>
                <svg xmlns="http://www.w3.org/2000/svg" width="745" height="120" viewBox="0 0 745 120" fill="none">
                    <path d="M0 6C0 2.68629 2.68629 0 6 0H700.47L745 120H6.00002C2.68631 120 0 117.314 0 114V6Z" fill="#237CFF"/>
                </svg>
                <div className='discount-text-btn-container'>
                    <div>
                        <div>
                            <h3 className='title-h3 wht'>Super discount on more than 100 USD</h3>
                        </div>
                        <div>
                            <span className='text-base wht'>Have you ever finally just write dummy info</span>
                        </div>
                    </div>
                    <div>
                        <button className='text-btn wht'>Shop now</button>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default SinglesDiscount
