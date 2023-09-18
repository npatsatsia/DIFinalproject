import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
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
                return (
                    <Link to={`/products`} state={{id: item.id}} className='link'  key={item.id + 1231233124142}>
                        <li>{item.name}</li>
                    </Link>
            )})}
        </ul>
    </div>
  )
}

export default Categories
