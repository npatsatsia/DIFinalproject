import React, { useEffect } from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Timer from '../../extra/timer/timer';
import { getOfferedProducts } from '../../../slices/sortedProducts';

const Offers = () => {
    const targetDate = new Date(2023, 8, 30, 23, 59, 59);

    const dispatch = useDispatch()

    const {offeredProducts} = useSelector((state) => state.sortedProducts)

    useEffect(() => {
        dispatch(getOfferedProducts())
    }, [dispatch])

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
                    offeredProducts.map((item) => {
                        return <li key={item.id}>
                                    <div className='home-offers-image-container'>
                                        <Link to={`/product/${item.id}`}>
                                            <img src={item.image} alt={item.name} />
                                        </Link>
                                    </div>
                                    <div className='home-offers-info-container'>
                                        <span>{item.name}</span>
                                        <span>{`-${Math.floor((item.newPrice / item.oldPrice) * 100)}%`}</span>
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
