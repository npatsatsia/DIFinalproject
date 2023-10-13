import React, { useState } from 'react'
import './index.css'
import { regionsArray } from '../../../Static/homeStartingArrays'

const Regions = () => {
    const [showMore, setShowMore] = useState(true)

  return (
    <section className='homepg-regions-section'>
        <div className='homepg-regions-container'>
            <div className='regions-title'>
                <h3 className='h3-title drk'>Suppliers by region</h3>
            </div>
            <div className='regions-list-container'>
                <ul className={`regions-list-ul`}>
                    {regionsArray.map((item) => {
                        return  <li className={`${showMore ? 'more' : ''}`} key={item.id}>
                                    <div className='signle-region'>
                                        <div className='regions-flag'>
                                            <img src={item.flag} alt={item.country} />
                                        </div>
                                        <div className='regions-info'>
                                            <span className='text-normal drk'>{item.country}</span>
                                            <span className='text-small gr5'>{item.web}</span>
                                        </div>
                                    </div>
                                </li>
                    })}
                </ul>
                <div className={`show-more-regions${showMore ? ' active' : ''}`} onClick={() => setShowMore(!showMore)}>
                    <span className='text-title'>{showMore ? 'More...' : 'Show Less'}</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Regions