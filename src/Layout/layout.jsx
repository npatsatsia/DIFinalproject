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
import RecentPurchase from '../Components/extra/recentPurchase/recentPurchase'
import { getProducts } from '../slices/products'


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
const {data} = useSelector(state => state.products)



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

useEffect(() => {
  dispatch(getProducts())
}, [dispatch]);

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
      <RecentPurchase products={data}/>
    </>
  )
}

export default Layout