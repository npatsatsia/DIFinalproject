import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './index.css'
import Header from '../Components/Header/header'
import Sidebar from '../Components/extra/mobileVersion/sidebar/sidebar'
import FooterMain from '../Components/Footer/footerMain/footerMain'
import FooterOwner from '../Components/Footer/footerOwner/footerOwner'
import Router from '../Routes'
import HeaderMobile from '../Components/extra/mobileVersion/headerMobile/headerMobile'
import Loader from '../Components/extra/loader/loader'

const Layout = () => {
const [show, setShow] = useState(false)
const [notFound, setNotFound] = useState(false)
const [mainErrpr, setMainErrpr] = useState(false)

const locate = useLocation()
const authLocation = locate.pathname === '/auth'

  return (
    <>
      <Sidebar setShow={setShow} show={show}/>
      <header style={authLocation || notFound? {display: 'none'} : {display: 'block'}}>
        <Header/>
        <HeaderMobile show={show} setShow={setShow}/>
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