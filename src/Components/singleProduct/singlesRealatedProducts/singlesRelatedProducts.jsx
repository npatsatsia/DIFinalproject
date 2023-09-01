import React from 'react'
import './index.css'
import { relatedArr } from '../../../Static/singleProductRelated'

const SinglesRelatedProducts = () => {
  return (
    <section className='detail-related-section'>
            <div className='detail-related-container'>
                <div className='related-title-container'>
                    <h4 className='title-h4 crk'>Related products</h4>
                </div>
                <div className='related-products-container'>
                    <ul>
                        {relatedArr.map((item) => {
                            return (
                                <li key={item.id}>
                                    <div className='single-related'>
                                        <div className='related-img'>
                                            <div></div>
                                        </div>
                                        <div className='related-info'>
                                            <div>
                                                <span className='text-base gr6'>{item.title}</span>
                                            </div>
                                            <div className='pt9'>
                                                <span className='text-base gr5'>{item.range}</span>
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
