import React from 'react'
import './index.css'
import { recomendedArray } from '../../../Static/homeStartingArrays'

const Recomended = () => {
  return (
    <section className='homepg-recommended-items-section'>
        <div className='overlay'>
            <span>unavelable</span>
        </div>
        <div className='recommended-items-container'>
            <div className='title-container'>
                <h3 className='h3-title'>Recommended items</h3>
            </div>
            <div className='recommended-items-list-container'>
                <ul className='recomended-items-ul'>
                    {recomendedArray.map((item) => {
                        return <li key={item.id}>
                            <div className='recommended-single-item'>
                                <img src={item.image} alt={item.about} />
                                <div className='recommended-price-about'>
                                    <span className='text-title drk'>{`$${item.price}`}</span>
                                    <span className='text-normal gr5'>{item.about}</span>
                                </div>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Recomended
