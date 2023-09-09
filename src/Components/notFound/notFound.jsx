import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const NotFound = ({setNotFound}) => {
  useEffect(() => {
    setNotFound(true)
  }, [setNotFound])
  
  return (
    <div className='not-found-main'>
      <div className='not-found-bkg'>
        <div className='error-text'>
            <h1>404</h1>
            <h3>Page Not Found</h3>
        </div>
        <div className='error-buttons'>
            <Link to={'/'} style={{ textDecoration: 'none' }} onClick={() => setNotFound(false)}>
                <div className='error-back-home text-btn-normal'>Back To Home</div>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
