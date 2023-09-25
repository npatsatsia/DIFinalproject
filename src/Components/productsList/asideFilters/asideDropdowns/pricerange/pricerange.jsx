import React, { useEffect, useState } from 'react';
import { Slider } from 'antd';
import { useSearchParams } from 'react-router-dom';

const Pricerange = () => {
  const [show, setShow] = useState(false)
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(4999)
  const [searchParams, setSearchParams] = useSearchParams()


  const params = Object.fromEntries([...searchParams]);

  useEffect(() => {
    if(params.priceRange) {
      setMinValue(+(params.priceRange.split("-"))[0])
      setMaxValue(+(params.priceRange.split("-"))[1])
    }
  }, [searchParams])

  const handlePriceRange = () => {
    if (minValue !== '' &&
        +minValue >= 0 &&
        maxValue !== '' &&
        +maxValue > 0 &&
        +minValue < +maxValue) {
        setSearchParams({
            ...params,
            priceRange: minValue + "-" + maxValue,
            pageNumber: 1
        })}
  };

  const handleSliderRange = (value) => {
    setMinValue(value[0])
    setMaxValue(value[1])
  }
  
  return (
    <div className='list-range-container'>
      <div className='products-filters-title' onClick={() => (setShow(prev => !prev))}>
        <h6 className='title-h6'>Price range</h6>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={show? '' : 'svg-down'}>
            <path d="M12 8.29504L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.29504Z" fill="#8B96A5"/>
        </svg>
      </div>
      <form onSubmit={(e) => (e.preventDefault())} className={`slider-filter ${show? 'show-filters' : ''}`}>
        <Slider 
          range={{ draggableTrack: true }}
          value={[minValue, maxValue]}
          defaultValue={[0, 4999]}
          min={0} max={5000}
          className='filters-ant-slider'
          onChange={(value) => (handleSliderRange(value))}
          />
        <div className='slider-inputs-container'>
          <div className='input-min'>
            <label htmlFor="input-min" className='font-family-inter'>Min</label>
            <input type="number" placeholder={`0`} value={+minValue} id='input-min' onChange={(e) => (setMinValue(e.target.value))}/>
          </div>
          <div className='input-max'>
            <label htmlFor="input-max" className='font-family-inter'>Max</label>
            <input type="number" placeholder={`4999`} value={+maxValue} id='input-max' onChange={(e) => (setMaxValue(e.target.value))}/>
          </div>
        </div>
        <div className='slider-apply-btn'>
          <button className='text-btn-normal blu' type='submit' onClick={handlePriceRange}>Apply</button>
        </div>
      </form>
    </div>
  )
}

export default Pricerange
