import React from 'react'
import './index.css'

const Suppliers = () => {
  return (
    <section className='home-supplier-section'>
        <div className='home-supplier-background'>
            <div className='home-supplier-container'>
                <div className='home-supplier-text'>
                    <h2>An easy way to send requests to all suppliers</h2>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</span>
                </div>
                <form>
                    <div className='inquiry-form'>
                        <h3>Send quote to suppliers</h3>
                        <input type="text"  placeholder='What item you need?'/>
                        <textarea placeholder='Type more details'></textarea>
                        <div className='inquiry-form-quantity'>
                            <input type="text" placeholder='Quantity'/>
                            <select>
                                <option>litres</option>
                                <option>kgs</option>
                                <option>metre</option>
                                <option>peace</option>
                            </select>
                        </div>
                        <button>Send inquiry</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Suppliers
