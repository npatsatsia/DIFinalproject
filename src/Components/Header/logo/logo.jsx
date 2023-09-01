import React from 'react'
import './index.css'
import Brand from '../../../Assets/images/logo-colored.png'

const LogoContainer = () => {
  return (
    <div className='header-logo-container'>
      <img src={Brand} alt="logo" />
    </div>
  )
}

export default LogoContainer
