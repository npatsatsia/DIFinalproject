import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import HomeMain from '../Pages/home/homeMain/homeMain'
import Login from '../Pages/user/login/login'
import ProductsList from '../Pages/productsList/productsList'
import Cart from '../Pages/cart/cart'
import NotFound from '../Components/notFound/notFound'
import DetailMain from '../Pages/singleProduct/detailMain'
import OuteletMain from './otlet'
import RequireAuth from '../Components/requireAuth/RequireAuth'

const Router = ({setNotFound}) => {
  const JWToken = JSON.parse(localStorage.getItem("user"));
  return (
    <Routes>
      <Route path='/' element={<OuteletMain/>}>
        <Route path='/' element={<HomeMain/>}/>
        <Route path='/products' element={<ProductsList/>}/>
        <Route path='/product/:productId' element={<DetailMain setNotFound={setNotFound}/>}/>
        <Route path='/auth' element={<Login/>}/>
        <Route element={<RequireAuth/>}>
          <Route path='/cart' element={<Cart/>} />
        </Route>
        <Route path='/notfound' element={<NotFound setNotFound={setNotFound}/>} />
        <Route path='*' element={<Navigate to={'/notfound'}/>} />
      </Route>
    </Routes>
  )
}

export default Router
