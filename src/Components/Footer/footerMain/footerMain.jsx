import React from 'react'
import './index.css'
import SingleService from './footerSingleServiceList/singleService'
import brand from '../../../Assets/images/logo-colored.png'
import { SiYoutube, SiInstagram, SiFacebook, SiLinkedin, SiTwitter } from "react-icons/si";
import android from '../../../Assets/images/android.png'
import apple from '../../../Assets/images/apple.png'
import {footerListArray} from '../../../Static/footerLinks'

const FooterMain = () => {
  return (
    <section className='footer-main-section'>
        <div className='footer-main-container'>
            <div className='footer-social'>
                <div className='brand-container'>
                    <img src={brand} alt="brand" />
                </div>
                <div className='brand-info'>
                    <span className='text-info gr6'>Best information about the company gies here but now lorem ipsum is</span>
                </div>
                <div className='footer-social-icons'>
                    <SiFacebook className='footer-icon'/>
                    <SiTwitter className='footer-icon'/>
                    <SiLinkedin className='footer-icon'/>
                    <SiInstagram className='footer-icon'/>
                    <SiYoutube className='footer-icon'/>
                </div>
            </div>
            {footerListArray.map((item) => {
                return <SingleService key={item.id} list={item.list} title={item.title}/>
            })}
            <div className='footer-download'>
                <h6 className='text-title drk'>Get app</h6>
                <div className='app-stores'>
                    <div className='footer-apple'>
                        <img src={apple} alt="download from app store" />
                    </div>
                    <div className='footer-android'>
                        <img src={android} alt="download from play store" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FooterMain
