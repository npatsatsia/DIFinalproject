import React from 'react'
import './index.css'
// import { VscArchive, VscSend, VscSearch, } from "react-icons/vsc";
// import { FaShieldHalved } from "react-icons/fa6";
import boxes from '../../../Assets/images/firstExtraImage.png'
import customize from '../../../Assets/images/secondExtraImage.png'
import shipping from '../../../Assets/images/thirdExtraImage.png'
import monitoring from '../../../Assets/images/fourthExtraImage.png'

const ExtraServices = () => {
  return (
    <section className='homepg-extra-services-section'>
      <div className='extra-services-container'>
        <div className='extra-services-title'>
          <h3>Our extra services</h3>
        </div>
        <div className='extra-services-list'>
          <div className='single-extra-service'>
            {/* <div className='icon-circle'>
              <VscSearch className='icon-circle-icon'/>
            </div> */}
            <img src={boxes} alt="industry hubs" />
            <div>
              <span>Source from Industry Hubs</span>
            </div>
          </div>
          <div className='single-extra-service'>
            {/* <div className='icon-circle'>
              <VscArchive className='icon-circle-icon'/>
            </div> */}
            <img src={customize} alt="Customize Your Products" />
            <div>
              <span>Customize Your Products</span>
            </div>
          </div>
          <div className='single-extra-service'>
            {/* <div className='icon-circle'>
              <VscSend className='icon-circle-icon'/>
            </div> */}
            <img src={shipping} alt="shipping" />
            <div>
              <span>Fast, reliable shipping by ocean or air</span>
            </div>
          </div>
          <div className='single-extra-service'>
            {/* <div className='icon-circle'>
              <FaShieldHalved className='icon-circle-icon'/>
            </div> */}
            <img src={monitoring} alt="monitoring" />
            <div>
              <span>Product monitoring and inspection</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExtraServices
