import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'

const Categories = ({categories, error}) => {

    const navigate = useNavigate()

    
    const handleClick = (id, category) => {    
        const searchParams = new URLSearchParams();
          searchParams.set('category', category);
          searchParams.set('currentCategory', id);
          searchParams.set('pageNumber', '1');
    
          navigate(`/products?${searchParams.toString()}`);
      };

    if (error) {
    return
    }  

  return (
    <div className='home-category-container'>
        <ul>
            {categories.map((item) => {
                return (
                    <li key={item.id + 878926498263} onClick={() => handleClick(item.id, item.name)}>{item.name}</li>
            )})}
        </ul>
    </div>
  )
}

export default Categories
