import React from 'react'
import './index.css'
import {FaArrowRight} from 'react-icons/fa6'
import { specialCategoriesArray } from '../../../../Static/homeStartingArrays'

const HomeSection = () => {
  return (
    <section className='homepg-home-categories'>
      <div className='homepg-home-categories-container'>
        <div className='home-outdoor-header-active'>
            <h1>Home and outdoor</h1>
        </div>
        <div className='home-outdoor-img-container'>
            <div>
                <span>Home and outdoor</span>
                <button>Source now</button>
            </div>
        </div>
        <div className='home-outdoor-categories-container'>
            <ul>
                {specialCategoriesArray.map((item) => {
                    return <li key={item.id}>
                        <div className='home-single-category'>
                            <div className='home-single-category-text'>
                                <span>{item.category}</span>
                                <img src={item.photo} alt={item.category} />
                                <span>From <br className='from-br'/>{item.priceFrom}</span>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
        </div>
        <div className='sourceing-container-active'>
          <div>
            <a>Source now</a>
            <FaArrowRight/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection
