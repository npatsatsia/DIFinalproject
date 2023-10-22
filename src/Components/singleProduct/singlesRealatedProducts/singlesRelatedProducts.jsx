import React, {useEffect} from 'react'
import './index.css'
import { useDispatch, useSelector } from 'react-redux';
import { getMostDemandProducts } from '../../../slices/sortedProducts';
import { useNavigate } from 'react-router-dom';

const SinglesRelatedProducts = () => {
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const {mostDemandProducts} = useSelector((state) => state.sortedProducts)

    useEffect(() => {
        dispatch(getMostDemandProducts())
    },[dispatch]) 

  return (
    <section className='detail-related-section'>
            <div className='detail-related-container'>
                <div className='related-title-container'>
                    <h4 className='title-h4 crk'>Related products</h4>
                </div>
                <div className='related-products-container'>
                    <ul>
                        {mostDemandProducts.map((item) => {
                            return (
                                    <li key={item.id} onClick={() => {navigate(`/product/${item.id}`)}}>
                                        <div className='single-related'>
                                            <div className='related-img'>
                                                <img src={item.images[1]} alt={item.name}/>
                                            </div>
                                            <div className='related-info'>
                                                <div>
                                                    <span className='text-base gr6'>{item.brand}</span>
                                                </div>
                                                <div className='pt9'>
                                                    <span className='text-base gr5'>${item.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                            )})}
                    </ul>
                </div>
            </div>
        </section>
  )
}

export default SinglesRelatedProducts
