import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './index.css'
import Header from '../Components/Header/header'
import SearchBox from '../Components/extra/mobileVersion/searchBox/searchBox'
import Sidebar from '../Components/extra/mobileVersion/sidebar/sidebar'
import FooterMain from '../Components/Footer/footerMain/footerMain'
import FooterOwner from '../Components/Footer/footerOwner/footerOwner'
import Router from '../Routes'
import HeaderMobile from '../Components/extra/mobileVersion/headerMobile/headerMobile'
import CategoriesSlider from '../Components/extra/mobileVersion/categoriesSlider'

const Layout = () => {
const [show, setShow] = useState(false)

const locate = useLocation()
const authLocation = locate.pathname === '/auth'

  return (
    <>
      <Sidebar setShow={setShow} show={show}/>
      <header style={authLocation? {display: 'none'} : {display: 'block'}}>
        <Header show={show} setShow={setShow}/>
        <HeaderMobile show={show} setShow={setShow} />
      </header>
      <main>
        <Router />
      </main>
      <footer style={authLocation?{display: 'none'} : {display: 'block'}}>
        <FooterMain/>
        <FooterOwner/>
      </footer>
    </>
  )
}

export default Layout