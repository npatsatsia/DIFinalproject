import React, { useEffect } from 'react'
import './index.css'
import LogoContainer from '../Header/logo/logo'
import Search from '../Header/search/search'
import RightSide from '../Header/rightside/rightside'

const Header = ({cartProducts, setMainEclipse}) => {

  return (
    <div className='main-header'>
        <LogoContainer/>
        <Search setMainEclipse={setMainEclipse}/>
        <RightSide cartProducts={cartProducts}/>
    </div>
  )
}

export default Header
