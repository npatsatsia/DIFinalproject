import React from 'react'
import './index.css'
import LogoContainer from '../Header/logo/logo'
import Search from '../Header/search/search'
import RightSide from '../Header/rightside/rightside'

const Header = ({setSearchParams}) => {
  return (
    <div className='main-header'>
        <LogoContainer/>
        <Search setSearchParams={setSearchParams}/>
        <RightSide/>
    </div>
  )
}

export default Header
