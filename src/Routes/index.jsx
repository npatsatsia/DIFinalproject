import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeMain from '../Pages/home/homeMain/homeMain'
import DetailMain from '../Pages/singleProduct/detailMain'
import Login from '../Pages/user/login/login'
import ProductsList from '../Pages/productsList/productsList'
import Cart from '../Pages/cart/cart'
import NotFound from '../Components/notFound/notFound'

const Router = ({setNotFound}) => {
  return (
    <Routes>
        <Route path='/' element={<HomeMain/>}/>
        <Route path='/products/*' element={<ProductsList/>}/>
        <Route path='/product/*' element={<DetailMain/>}/>
        <Route path='/auth' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='*' element={<NotFound setNotFound={setNotFound} />} />
    </Routes>
  )
}

export default Router
