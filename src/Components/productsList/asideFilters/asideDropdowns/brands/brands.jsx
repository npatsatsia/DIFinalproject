import React, {useState} from 'react'

const Brands = () => {
    const [show, setShow] = useState(false)
  return (
    <div className='list-brands-container'>
        <div className='products-filters-title' onClick={() => (setShow(prev => !prev))}>
            <h6 className='title-h6'>Brands</h6>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={show? '' : 'svg-down'}>
                <path d="M12 8.29504L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.29504Z" fill="#8B96A5"/>
            </svg>
        </div>
        <div className={`products-brands-filter ${show? 'show-filters' : ''}`}>
            <div className='single-check-container pdtb7'>
                <input type="checkbox" id='samsung' className='checkbox'/>
                <label htmlFor="samsung" className='text-base drk pl10'>Samsung</label>
            </div>
            <div className='single-check-container pdtb7'>
                <input type="checkbox" id='apple' className='checkbox'/>
                <label htmlFor="apple" className='text-base drk pl10'>Apple</label>
            </div>
            <div className='single-check-container pdtb7'>
                <input type="checkbox" id='huawei' className='checkbox'/>
                <label htmlFor="huawei" className='text-base drk pl10'>Huawei</label>
            </div>
            <div className='single-check-container pdtb7'>
                <input type="checkbox" id='pocco' className='checkbox'/>
                <label htmlFor="pocco" className='text-base drk pl10'>Pocco</label>
            </div>
            <div className='single-check-container pdtb7'>
                <input type="checkbox" id='lenovo' className='checkbox'/>
                <label htmlFor="lenovo" className='text-base drk pl10'>Lenovo</label>
            </div>
            <div className='filter-seeall pdtb7'>
                <span className='text-base blu pdtb7'>See all</span>
            </div> 
        </div>
    </div>
  )
}

export default Brands
