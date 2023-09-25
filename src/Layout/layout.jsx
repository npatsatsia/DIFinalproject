import React, { useState, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './index.css'
import Header from '../Components/Header/header'
import Sidebar from '../Components/extra/mobileVersion/sidebar/sidebar'
import FooterMain from '../Components/Footer/footerMain/footerMain'
import FooterOwner from '../Components/Footer/footerOwner/footerOwner'
import Router from '../Routes'
import HeaderMobile from '../Components/extra/mobileVersion/headerMobile/headerMobile'
import Loader from '../Components/extra/loader/loader'
import {getCartProducts} from '../Store/getCartProducts'


const Layout = () => {
const [show, setShow] = useState(false)
const [notFound, setNotFound] = useState(false)

const JWToken = JSON.parse(localStorage.getItem("user"));

const locate = useLocation()
const authLocation = locate.pathname === '/auth'

const dispatch = useDispatch()

const {cartProducts} = useSelector(state => state.cartProducts)

const {loading} = useSelector(state => state.addItemTocart)


useEffect(() => {
  if(JWToken) {
    dispatch(getCartProducts(JWToken.jwt))
  }
}, [dispatch, loading])

  return (
    <>
      <Sidebar setShow={setShow} show={show}/>
      <header style={authLocation || notFound? {display: 'none'} : {display: 'block'}}>
        <Header cartProducts={cartProducts}/>
        <HeaderMobile show={show} setShow={setShow} cartProducts={cartProducts}/>
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