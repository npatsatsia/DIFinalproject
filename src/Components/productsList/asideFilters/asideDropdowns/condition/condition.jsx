import React, {useState} from 'react';
import { Radio, Space } from 'antd';


const Condition = () => {
  const [value, setValue] = useState(1);
  const [show, setShow] = useState(false)

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className='list-condition-container'>
        <div className='products-filters-title' onClick={() => (setShow(prev => !prev))}>
          <h6 className='title-h6'>Condition</h6>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={show? '' : 'svg-down'}>
              <path d="M12 8.29504L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.29504Z" fill="#8B96A5"/>
          </svg>
        </div>
        <Radio.Group onChange={onChange} value={value} className={`condition-radio ${show? 'show-filters' : ''}`}>
          <Space direction='vertical'>
            <Radio value={1} className='ptb6 font-family-inter'>Any</Radio>
            <Radio value={2} className='ptb6 font-family-inter'>Refurbished</Radio>
            <Radio value={3} className='ptb6 font-family-inter'>Brand new</Radio>
            <Radio value={4} className='ptb6 font-family-inter'>Old items</Radio>
          </Space>
        </Radio.Group>
    </div>
  )
}

export default Condition
