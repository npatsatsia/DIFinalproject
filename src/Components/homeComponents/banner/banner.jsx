import React, {useEffect} from 'react';
import './index.css'
import { useSelector, useDispatch } from 'react-redux';
import avatar from '../../../Assets/images/Avatar.png'
import Categories from './categories/categories';
import { fetchCategories } from '../../../API/productsAPI';

const Banner = () => {
const {categories, loading, error} = useSelector((state) => state.categories)

const dispatch = useDispatch()

useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <section className='home-banner-section'>
        <div className='home-main-container'>
            <Categories 
            categories={categories}
            loading={loading}
            error={error}
            />
            <div className='home-latest-trending'>
                <div className='banner-info'>
                    <span>Latest trending</span>
                    <span>Electronic items</span>
                    <button>Learn more</button>
                </div>
            </div>
            <div className='home-user'>
                <div className='user-get-started'>
                    <div className='user-avatar'>
                        <div className='user-avatar-container'>
                            <img src={avatar} alt='avatar'/>
                        </div>
                        <div className='span-container'>
                            <span>Hi, User</span>
                            <span>Let's Get Started</span>
                        </div>
                    </div>
                    <div className='user-buttons'>
                        <button className='user-join-button'>Join now</button>
                        <button className='user-login-button'>Log in</button>
                    </div>
                </div>
                <div className='new-supplier'>
                    <span>Get US $10 off with a new supplier</span>
                </div>
                <div className='send-quotes'>
                    <span>Send quotes with supplier preferences</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner
