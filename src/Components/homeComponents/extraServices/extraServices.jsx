import React from 'react'
import './index.css'
import boxes from '../../../Assets/images/firstExtraImage.png'
import customize from '../../../Assets/images/secondExtraImage.png'
import shipping from '../../../Assets/images/thirdExtraImage.png'
import monitoring from '../../../Assets/images/fourthExtraImage.png'

const ExtraServices = () => {
  return (
    <section className='homepg-extra-services-section'>
      <div className='extra-services-container'>
        <div className='extra-services-title'>
          <h3 className='h3-title drk'>Our extra services</h3>
        </div>
        <div className='extra-services-list'>
          <div className='single-extra-service'>
            <img src={boxes} alt="industry hubs" />
            <div>
              <span className='text-title drk'>Source from Industry Hubs</span>
            </div>
          </div>
          <div className='single-extra-service'>
            <img src={customize} alt="Customize Your Products" />
            <div>
              <span className='text-title drk'>Customize Your Products</span>
            </div>
          </div>
          <div className='single-extra-service'>
            <img src={shipping} alt="shipping" />
            <div>
              <span className='text-title drk'>Fast, reliable shipping by ocean or air</span>
            </div>
          </div>
          <div className='single-extra-service'>
            <img src={monitoring} alt="monitoring" />
            <div>
              <span className='text-title drk'>Product monitoring and inspection</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExtraServices
