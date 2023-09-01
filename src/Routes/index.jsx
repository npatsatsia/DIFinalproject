import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeMain from '../Pages/home/homeMain/homeMain'
import DetailMain from '../Pages/singleProduct/detailMain'
import Login from '../Pages/user/login/login'
import ProductsList from '../Pages/productsList/productsList'

const Router = ({headerSettings, setHeaderSettings, categoriesArr}) => {
  return (
    <Routes>
        <Route path='/' element={<HomeMain headerSettings={headerSettings} setHeaderSettings={setHeaderSettings} categoriesArr={categoriesArr}/>}/>
        <Route path='/products' element={<ProductsList headerSettings={headerSettings} setHeaderSettings={setHeaderSettings}/>}/>
        <Route path='/product/*' element={<DetailMain headerSettings={headerSettings} setHeaderSettings={setHeaderSettings}/>}/>
        <Route path='/auth' element={<Login/>}/>
    </Routes>
  )
}

export default Router
