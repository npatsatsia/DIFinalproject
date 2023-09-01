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
const [categoriesArr, setCategoriesArr] = useState([])
const [headerSettings, setHeaderSettings] = useState({
  brand: false,
  burgermenu: false,
  pagetitle: false,
  back: false,
  cartAndProfile: false,
  search: false,
  categories: false
})

const location = useLocation()

const fetchData = async () => {
    try {
      const result = await fetch('https://digital-react-project.azurewebsites.net/api/product/categories');
      const data = await result.json();
      setCategoriesArr([...data])
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };

    useEffect(() => {
      fetchData()
      
    }, [])

    useEffect(() => {
      console.log(location)
      
    }, [location])

  return (
    <>
      <Sidebar setShow={setShow} show={show}/>
      <header>
        <Header show={show} setShow={setShow}/>
        <HeaderMobile show={show} setShow={setShow} headerSettings={headerSettings} setHeaderSettings={setHeaderSettings}/>
        <SearchBox headerSettings={headerSettings}/>
        <CategoriesSlider categoriesArr={categoriesArr} headerSettings={headerSettings}/>
      </header>
      <main>
        <Router categoriesArr={categoriesArr} headerSettings={headerSettings} setHeaderSettings={setHeaderSettings}/>
      </main>
      <footer>
        <FooterMain/>
        <FooterOwner/>
      </footer>
    </>
  )
}

export default Layout