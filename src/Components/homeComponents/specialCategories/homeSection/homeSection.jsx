import React, { useEffect } from 'react'
import './index.css'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa6'
// import {getLatestProducts} from '../../../../Store/latestProducts/index'
import { getLatestProducts } from '../../../../slices/sortedProducts'
const HomeSection = () => {

  const {latestProducts} = useSelector((state) => state.sortedProducts)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLatestProducts())
  }, [dispatch])


  return (
    <section className='homepg-home-categories'>
      <div className='homepg-home-categories-container'>
        <div className='home-outdoor-header-active'>
            <h3 className='h3-title drk'>Latest Products</h3>
        </div>
        <div className='home-outdoor-img-container'>
            <div>
                <h3 className='h3-title drk'>Latest Products</h3>
                <Link to={'/products'} >
                  <button className='btn-normal drk'>Source now</button>
                </Link>
            </div>
        </div>
        <div className='home-outdoor-categories-container'>
            <ul>
                {latestProducts.map((item) => {
                    return <li key={item.id}>
                        <div className='home-single-category'>
                            <div className='home-single-category-text'>
                              <Link to={`/product/${item.id}`}  className='link'>
                                <span className='text-base drk'>{item.name}</span>
                              </Link>
                              <Link to={`/product/${item.id}`}>
                                <img src={item.image} alt={item.name} className='link'/>
                              </Link>
                              <span className='text-small gr5'>From <br className='from-br'/>{item.price}</span>
                            </div>
                        </div>
                    </li>
                })}
                {latestProducts.map((item, i) => {
                    return i < 2 && <li key={item.id}>
                        <div className='home-single-category'>
                            <div className='home-single-category-text'>
                              <Link to={`/product/${item.id}`}  className='link'>
                                <span className='text-base drk' >{item.name}</span>
                              </Link>
                              <Link to={`/product/${item.id}`}>
                                <img src={item.image} alt={item.name} className='link'/>
                              </Link>
                              <span className='text-small gr5'>From <br className='from-br'/>{item.price}</span>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
        </div>
        <div className='sourceing-container-active'>
          <Link to={`/products`} className='link'>
            <div>
              <p className='text-btn-normal blu'>Source now</p>
              <FaArrowRight/>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeSection
