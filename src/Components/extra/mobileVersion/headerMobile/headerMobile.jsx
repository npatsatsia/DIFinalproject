import React, {useEffect, useState} from 'react'
import './index.css'
import { useLocation, useNavigate, Link, useParams } from 'react-router-dom'
import { Modal } from 'antd';
import brand from '../../../../Assets/images/logo-colored.png'
import BurgerMenu from '../burgerMenu/burgerMenu'
import SearchBox from '../searchBox/searchBox'
import CategoriesSlider from '../categoriesSlider'
import { useSelector } from 'react-redux';

const HeaderMobile = ({show, setShow, cartProducts}) => {
  const [headerSettings, setHeaderSettings] = useState({
    brand: false,
    burgermenu: false,
    pagetitle: false,
    back: false,
    cartAndProfile: false,
    search: false,
    categories: false
  })

  const locate = useLocation()

  const navigate = useNavigate()

  let urlParams = new URLSearchParams(locate.search);

  const URLCategory = urlParams.get('category')

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const { isLoggedIn } = useSelector(state => state.auth)

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setOpen(false);
    navigate('/cart') 
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleMobileHeader = () => {
    switch (locate.pathname) {
      case '/products':
        setHeaderSettings({
          brand: false,
          burgermenu: false,
          cartAndProfile: true,
          back: true,
          pagetitle: true,
          search: true,
          categories: 'products'
        });
        break;
      case '/':
        setHeaderSettings({
          brand: true,
          burgermenu: true,
          cartAndProfile: true,
          back: false,
          pagetitle: false,
          search: true,
          categories: 'home'
        });
        break;
      case '/cart':
        setHeaderSettings({
          brand: false,
          burgermenu: false,
          cartAndProfile: false,
          back: true,
          pagetitle: true,
          search: false,
          categories: false
        });
        break;
    }
  }

  useEffect(() => {
    if(locate.pathname.includes('/product/')){
      setHeaderSettings({
        brand: false,
        burgermenu: false,
        cartAndProfile: true,
        back: true,
        pagetitle: false,
        search: false,
        categories: false
      });
    }else if((locate.pathname.includes('/profile/'))){
      setHeaderSettings({
        brand: true,
        burgermenu: true,
        cartAndProfile: true,
        back: false,
        pagetitle: false,
        search: false,
        categories: false,
      });
    }else{
      handleMobileHeader()
    }
  }, [locate.pathname])

  return (
    <>
      <div className='mobile-header-container'>
        <div className='mobile-header-left'>
          <div className={`mobile-header-burgermenu ${headerSettings.burgermenu? 'active' : ''}`}>
            <BurgerMenu show={show} setShow={setShow}/>
          </div>
          <div className={`go-back ${headerSettings.back? 'active' : ''}`} onClick={() => navigate(-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#1C1C1C"/>
            </svg>
          </div>
          <div className={`mobile-header-logo-container ${headerSettings.brand? 'active' : ''}`}>
            <Link className='link' to={'/'}>
              <img src={brand} alt="logo"/>
            </Link>
          </div>
          <div className={`mobile-header-page-history h5-title drk ${headerSettings.pagetitle? 'active' : ''}`}>{URLCategory? URLCategory : 'Store'}</div>
        </div>
        <div className={`mobile-header-right ${headerSettings.cartAndProfile? 'active' : ''}`}>
          <div className='mobile-header-cart'>
            {isLoggedIn? 
            (
            <div className='mobile-cart-logo'>
              <svg onClick={() => navigate('/cart')}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16.5461 13C17.2961 13 17.9561 12.59 18.2961 11.97L21.8761 5.48C22.2461 4.82 21.7661 4 21.0061 4H6.20609L5.26609 2H1.99609V4H3.99609L7.59609 11.59L6.24609 14.03C5.51609 15.37 6.47609 17 7.99609 17H19.9961V15H7.99609L9.09609 13H16.5461ZM7.15609 6H19.3061L16.5461 11H9.52609L7.15609 6ZM7.99609 18C6.89609 18 6.00609 18.9 6.00609 20C6.00609 21.1 6.89609 22 7.99609 22C9.09609 22 9.99609 21.1 9.99609 20C9.99609 18.9 9.09609 18 7.99609 18ZM17.9961 18C16.8961 18 16.0061 18.9 16.0061 20C16.0061 21.1 16.8961 22 17.9961 22C19.0961 22 19.9961 21.1 19.9961 20C19.9961 18.9 19.0961 18 17.9961 18Z" fill="#1C1C1C"/>
              </svg>
              <div className={`cart-length-dot text-small wht ${cartProducts.length < 1 && 'none'}`}>{cartProducts.length}</div>
            </div>) : 
            (<svg onClick={() => showModal()}xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M16.5461 13C17.2961 13 17.9561 12.59 18.2961 11.97L21.8761 5.48C22.2461 4.82 21.7661 4 21.0061 4H6.20609L5.26609 2H1.99609V4H3.99609L7.59609 11.59L6.24609 14.03C5.51609 15.37 6.47609 17 7.99609 17H19.9961V15H7.99609L9.09609 13H16.5461ZM7.15609 6H19.3061L16.5461 11H9.52609L7.15609 6ZM7.99609 18C6.89609 18 6.00609 18.9 6.00609 20C6.00609 21.1 6.89609 22 7.99609 22C9.09609 22 9.99609 21.1 9.99609 20C9.99609 18.9 9.09609 18 7.99609 18ZM17.9961 18C16.8961 18 16.0061 18.9 16.0061 20C16.0061 21.1 16.8961 22 17.9961 22C19.0961 22 19.9961 21.1 19.9961 20C19.9961 18.9 19.0961 18 17.9961 18Z" fill="#1C1C1C"/>
            </svg>)}
          </div>
            <Modal
              okText='Log In'
              title="You must be authorized"
              open={open}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
              ></Modal>
          <div className='mobile-header-user'>
            <Link to={'/profile/edit-profile'} className='link'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6ZM12 16C14.7 16 17.8 17.29 18 18H6C6.23 17.28 9.31 16 12 16ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#1C1C1C"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <SearchBox headerSettings={headerSettings}/>
      <CategoriesSlider headerSettings={headerSettings} />
    </>
  )
}

export default HeaderMobile
