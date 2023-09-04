import React, { useState } from 'react';
import { Slider } from 'antd';

const Pricerange = () => {
  const [show, setShow] = useState(false)
  return (
    <div className='list-range-container'>
      <div className='products-filters-title' onClick={() => (setShow(prev => !prev))}>
        <h6 className='title-h6'>Price range</h6>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={show? '' : 'svg-down'}>
            <path d="M12 8.29504L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.29504Z" fill="#8B96A5"/>
        </svg>
      </div>
      <div className={`slider-filter ${show? 'show-filters' : ''}`}>
        <Slider range={{ draggableTrack: true }} defaultValue={[20, 50]} min={30} max={420} className='filters-ant-slider'/>
        <div className='slider-inputs-container'>
          <div className='input-min'>
            <label htmlFor="input-min" className='font-family-inter'>Min</label>
            <input type="text" placeholder='0' id='input-min'/>
          </div>
          <div className='input-max'>
            <label htmlFor="input-max" className='font-family-inter'>Max</label>
            <input type="text" placeholder='99999' id='input-max'/>
          </div>
        </div>
        <div className='slider-apply-btn'>
          <button className='text-btn-normal blu'>Apply</button>
        </div>
      </div>
    </div>
  )
}

export default Pricerange
