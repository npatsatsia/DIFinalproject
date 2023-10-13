import React from 'react'
import './index.css'

const Suppliers = () => {
  return (
    <section className='home-supplier-section'>
        <div className='home-supplier-background'>
            <div className='home-supplier-container'>
                <div className='home-supplier-text'>
                    <h2 className='title-h2 wht'>An easy way to send requests to all suppliers</h2>
                    <span className='text-normal wht'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</span>
                </div>
                <form>
                    <div className='inquiry-form'>
                        <h4 className='title-h4 drk'>Send quote to suppliers</h4>
                        <input className='text-base' type="text"  placeholder='What item you need?'/>
                        <textarea className='text-base' placeholder='Type more details'></textarea>
                        <div className='inquiry-form-quantity'>
                            <input className='text-base' type="text" placeholder='Quantity'/>
                            <select className='text-base drk'>
                                <option className='text-small drk'>litres</option>
                                <option className='text-small drk'>kgs</option>
                                <option className='text-small drk'>metre</option>
                                <option className='text-small drk'>peace</option>
                            </select>
                        </div>
                        <button className='text-btn-normal wht'>Send inquiry</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Suppliers
