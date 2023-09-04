import React, { useState } from 'react'

const Features = () => {
    const [show, setShow] = useState(false)
  return (
    <div className='list-brands-container'>
        <div className='products-filters-title' onClick={() => (setShow(prev => !prev))}>
            <h6 className='title-h6'>Features</h6>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={show? '' : 'svg-down'}>
                <path d="M12 8.29504L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.29504Z" fill="#8B96A5"/>
            </svg>
        </div>
        <div className={`products-features-filter ${show? 'show-filters' : ''}`}>
            <div className='single-check-container pdtb7'>
                <input type="checkbox" id='metallic' className='checkbox'/>
                <label htmlFor="metallic" className='text-base drk pl10'>Metallic</label>
            </div>
            <div className='single-check-container pdtb7'>
                <input type="checkbox" id='plastic' className='checkbox'/>
                <label htmlFor="plastic" className='text-base drk pl10'>Plastic cover</label>
            </div>
            <div className='single-check-container pdtb7'>
                <input type="checkbox" id='8gbram' className='checkbox'/>
                <label htmlFor="8gbram" className='text-base drk pl10'>8GB Ram</label>
            </div>
            <div className='single-check-container pdtb7'>
                <input type="checkbox" id='superpower' className='checkbox'/>
                <label htmlFor="superpower" className='text-base drk pl10'>Super power</label>
            </div>
            <div className='single-check-container pdtb7'>
                <input type="checkbox" id='largememory' className='checkbox'/>
                <label htmlFor="largememory" className='text-base drk pl10'>Large Memory</label>
            </div>
            <div className='filter-seeall pdtb7'>
                <span className='text-base blu pdtb9'>See all</span>
            </div>
            <span className='text-base red'style={{display: 'block'}}>filter has no function</span>
        </div>
    </div>
  )
}

export default Features
