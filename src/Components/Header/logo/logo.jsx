import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import Brand from '../../../Assets/images/logo-colored.png'

const LogoContainer = () => {
  return (
    <div className='header-logo-container'>
      <Link to={'/'}>
        <img src={Brand} alt="logo" />
      </Link>
    </div>
  )
}

export default LogoContainer
