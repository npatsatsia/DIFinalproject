import React from 'react'
import './index.css'
import BurgerMenu from '../extra/mobileVersion/burgerMenu/burgerMenu'
import LogoContainer from '../Header/logo/logo'
import Search from '../Header/search/search'
import RightSide from '../Header/rightside/rightside'

const Header = () => {
  return (
    <div className='main-header'>
        <LogoContainer/>
        <Search/>
        <RightSide/>
    </div>
  )
}

export default Header
