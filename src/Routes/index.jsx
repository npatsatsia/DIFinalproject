import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import HomeMain from '../Pages/home/homeMain/homeMain'
import Login from '../Pages/user/login/login'
import ProductsList from '../Pages/productsList/productsList'
import Cart from '../Pages/cart/cart'
import NotFound from '../Components/notFound/notFound'
import DetailMain from '../Pages/singleProduct/detailMain'

const Router = ({setNotFound, setMainLoader}) => {
  return (
    <Routes>
      <Route path='/' element={<HomeMain/>}/>
      <Route path='/products' element={<ProductsList/>}/>
      <Route path='/product/:productId' element={<DetailMain setNotFound={setNotFound}/>}/>
      <Route path='/auth' element={<Login/>}/>
      <Route path='/cart' element={<Cart/>} />
      <Route path='/notfound' element={<NotFound setNotFound={setNotFound}/>} />
      <Route path='*' element={<Navigate to={'/notfound'}/>} />
    </Routes>
  )
}

export default Router
