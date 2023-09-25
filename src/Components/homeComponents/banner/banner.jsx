import React, {useEffect, useState} from 'react';
import './index.css'
import { Link, useNavigate } from 'react-router-dom';
import { Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import avatar from '../../../Assets/images/Avatar.png'
import Categories from './categories/categories';
import { getCategories } from '../../../Store/categories';
import { logout } from '../../../slices/auth';
import { getUserInfo } from '../../../Store/userByEmail';



const Banner = () => {
const [open, setOpen] = useState(false);
const [confirmLoading, setConfirmLoading] = useState(false);

const {categories, error, loading} = useSelector((state) => state.categories)

const {isLoggedIn, email} = useSelector((state) => state.auth)

const {userName} = useSelector((state) => state.userInfo)

const dispatch = useDispatch()

const navigate = useNavigate()

const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    dispatch(logout())
    setConfirmLoading(true);
    setOpen(false);
    navigate('/')
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleNavLogin = () => {
        const searchParams = new URLSearchParams();
          searchParams.set('account', 'login');      
          navigate(`/auth?${searchParams.toString()}`);
  }

  const handleNavReg = () => {
        const searchParams = new URLSearchParams();
        searchParams.set('account', 'register');      
        navigate(`/auth?${searchParams.toString()}`);
  }

useEffect(() => {
    dispatch(getCategories());
}, [dispatch]);

useEffect(() => {
    dispatch(getUserInfo(email))
},[])


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
                            <span>Hi, <span className={isLoggedIn? 'text-small grn' : 'text-small'}>{isLoggedIn? userName : 'User'}</span></span>
                            <span>{isLoggedIn? 'Welcome Back' : "Let's Get Started"}</span>
                        </div>
                    </div>
                    <div className='user-buttons'>
                        <button onClick={() => handleNavReg()} className={`user-join-button ${isLoggedIn? 'btn-dsnone' : ''}`} >Sign up</button>
                        <button onClick={() => handleNavLogin()} className={`user-login-button ${isLoggedIn? 'btn-dsnone' : ''}`} >Log in</button>
                        <button className={`user-join-button ${!isLoggedIn? 'btn-dsnone' : ''}`} onClick={() => showModal()}>Log out</button>
                        <button className={`user-login-button ${!isLoggedIn? 'btn-dsnone' : ''}`}>User Settings</button>
                        <Modal
                            okText='Log out'
                            title="Are you sure you want to log out?"
                            open={open}
                            onOk={handleOk}
                            confirmLoading={confirmLoading}
                            onCancel={handleCancel}
                        ></Modal>
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
