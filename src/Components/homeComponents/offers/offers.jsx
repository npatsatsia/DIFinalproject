import React from 'react';
import './index.css';
import Timer from '../../extra/timer/timer';
import { offersArray } from '../../../Static/homeStartingArrays';

const Offers = () => {
    const targetDate = new Date(2023, 8, 16, 23, 59, 59);
  return (
    <section className='home-offers-section'>
        <div className='home-offers-container'>
            <div className='home-timer-container'>
                <div className='home-timer-text'>
                    <span>Deals and offers</span>
                    <span>Hygiene equipments</span>
                </div>
                <Timer targetDate={targetDate}/>   
            </div>
            <div className='home-offers-list-container'>
                <ul>{
                    offersArray.map((item, index) => {
                        return <li key={index}>
                                    <div className='home-offers-image-container'>
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className='home-offers-info-container'>
                                        <span>{item.category}</span>
                                        <span>{item.discount}</span>
                                    </div>
                                </li>
                    })
                }</ul>
            </div>
        </div>
    </section>
  )
}

export default Offers
