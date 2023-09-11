import React from 'react'
import './index.css'
import Loader from '../../../extra/loader/loader'

const Categories = ({categories, loading, error}) => {

    if(loading) {
        return <Loader/>
    }
    if (error) {
        return <div>{error.message}</div>
    }    
    
  return (
    <div className='home-category-container'>
        <ul>
            {categories.map((item) => {
                return <li key={item.id + 1231233124142}>{item.name}</li>
            })}
        </ul>
    </div>
  )
}

export default Categories
