import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './index.css'
import Header from '../Components/Header/header'
import Sidebar from '../Components/extra/mobileVersion/sidebar/sidebar'
import FooterMain from '../Components/Footer/footerMain/footerMain'
import FooterOwner from '../Components/Footer/footerOwner/footerOwner'
import Router from '../Routes'
import HeaderMobile from '../Components/extra/mobileVersion/headerMobile/headerMobile'
import { getCartProducts } from '../slices/cart'


const Layout = () => {
const [show, setShow] = useState(false)
const [notFound, setNotFound] = useState(false)
const [mainEclipse, setMainEclipse] = useState(false)

const locate = useLocation()
const authLocation = locate.pathname === '/auth'

const dispatch = useDispatch()

const navigate = useNavigate()

const {products, postLoading, removeLoading } = useSelector(state => state.cartService)
const {sortedProductsIsLoading} = useSelector(state => state.sortedProducts)

const {isLoggedIn, loading } = useSelector(state => state.auth)

useEffect(() => {
  if (locate.pathname === '/profile' || locate.pathname === '/profile/') {
    navigate('/profile/edit-profile');
  }
}, [locate.pathname, navigate]);

useEffect(() => {
  if(isLoggedIn) {
    dispatch(getCartProducts())
  }
}, [dispatch, isLoggedIn, postLoading, removeLoading, loading, sortedProductsIsLoading])


// Set an item in localStorage with an expiration time
const setItemWithTimeout = (key, value, expirationInMilliseconds) => {
  const item = {
    value: value,
    expiration: Date.now() + expirationInMilliseconds,
  };
  localStorage.setItem(key, JSON.stringify(item));
  
  // Set a timeout to remove the item from localStorage when it expires
  setTimeout(() => {
    localStorage.removeItem(key);
  }, expirationInMilliseconds);
};

// Get an item from localStorage
const getItem = (key) => {
  const item = JSON.parse(localStorage.getItem(key));
  if (item && Date.now() < item.expiration) {
    return item.value;
  } else {
    // The item has expired or doesn't exist
    localStorage.removeItem(key);
    return null;
  }
};

// Example usage:
setItemWithTimeout('myToken', 'myTokenValue', 3600000); // Set a token that expires in 1 hour

const token = getItem('myToken'); // Get the token (it will be null if it has expired)

useEffect(() => {
  window.scrollTo(0, 0);
}, [locate.pathname]);

  return (
    <>
      <Sidebar setShow={setShow} show={show} cartProducts={products}/>  
      <header style={authLocation || notFound? {display: 'none'} : {display: 'block'}}>
        <Header cartProducts={products} setMainEclipse={setMainEclipse}/>
        <HeaderMobile show={show} setShow={setShow} cartProducts={products}/>
      </header>
      <main>
        <Router setNotFound={setNotFound}/>
      </main>
      <footer style={authLocation || notFound?{display: 'none'} : {display: 'block'}}>
        <FooterMain/>
        <FooterOwner/>
      </footer>
    </>
  )
}

export default Layout