import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import {FaArrowRight} from "react-icons/fa6"
import { specialCategoriesArr } from '../../../../Static/homeStartingArrays'

const GadgetsSection = () => {
  return (
    <section className='homepg-gadgets-categories'>
      <div className='homepg-gadgets-categories-container'>
        <div className='homepg-gadgets-header-active'>
            <h1>Consumer electronics</h1>
        </div>
        <div className='homepg-gadgets-img-container'>
            <div>
                <span>Consumer electronics and gadgets</span>
                <Link to={'/products'} >
                  <button>Source now</button>
                </Link>
            </div>
        </div>
        <div className='home-gadgets-categories-container'>
            <ul>
                {specialCategoriesArr.map((item) => {
                    return <li key={item.id}>
                        <div className='homepg-gadgets-single-category'>
                            <div className='homepg-gadgets-single-category-text'>
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

export default GadgetsSection
