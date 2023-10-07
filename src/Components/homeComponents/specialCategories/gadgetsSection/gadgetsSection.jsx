import React, { useEffect } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// import { getMostDemandProducts } from '../../../../Store/mostDemandProducts/index'
import { getMostDemandProducts } from '../../../../slices/sortedProducts'
import {FaArrowRight} from "react-icons/fa6"


const GadgetsSection = () => {

  const {mostDemandProducts} = useSelector((state) => state.sortedProducts)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMostDemandProducts())
  }, [dispatch])

  return (
    <section className='homepg-gadgets-categories'>
      <div className='homepg-gadgets-categories-container'>
        <div className='homepg-gadgets-header-active'>
            <h1 className='h3-title drk'>Most Demand Products</h1>
        </div>
        <div className='homepg-gadgets-img-container'>
            <div>
                <span className='h3-title drk'>Most Demand Products</span>
                <Link to={'/products'} >
                  <button className='btn-normal drk'>Source now</button>
                </Link>
            </div>
        </div>
        <div className='home-gadgets-categories-container'>
            <ul>
                {mostDemandProducts.map((item) => {
                    return <li key={item.id}>
                        <div className='homepg-gadgets-single-category'>
                            <div className='homepg-gadgets-single-category-text'>
                              <Link to={`/product/${item.id}`} className='link'>
                                <span>{item.name}</span>
                              </Link>
                              <Link to={`/product/${item.id}`} className='link'>
                                <img src={item.images[1]} alt={item.name}  className='link'/>
                              </Link>
                              <span>From <br className='from-br'/>{item.price}</span>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
        </div>
        <div className='sourceing-container-active'>
          <Link to={`/products`} className='link'>
            <div>
              <p>Source now</p>
              <FaArrowRight/>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default GadgetsSection
