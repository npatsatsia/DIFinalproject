import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../../../../slices/filterItems/index'

const Category = () => {
  const [show, setShow] = useState(false)
  const [seeAll, setSeeAll] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()


  const {categories, loading, error} = useSelector((state) => state.filteredProducts)

  const params = Object.fromEntries([...searchParams]);


  const dispatch = useDispatch()

  const handleCurrentCategory = (id, category) => {
        setSearchParams({
            ...params,
            currentCategory: id,
            category,
            pageNumber: 1
        })
  };

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);


  if (error) {
      return 
  } 

  return (
    <div className='list-category-container'>
        <div className='products-filters-title' onClick={() => (setShow(prev => !prev))}>
          <h6 className='title-h6'>Category</h6>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={show? '' : 'svg-down'}>
              <path d="M12 8.29504L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.29504Z" fill="#8B96A5"/>
          </svg>
        </div>
        <div className={`products-category-filter ${show? 'show-filters' : ''}`}>
          <ul className={`products-filter-ul ${seeAll? 'seeall' : ''}`}>
            {
              categories.map((item) => (
                <li key={item.id + 99982664325} className='single-filter-li text-base gr6 pdtb7' onClick={() => handleCurrentCategory(item.id, item.name)}>{item.name}</li>
            ))}
          </ul>
          <div className='filter-seeall pdtb7'>
              <span className='text-base blu' onClick={() => (setSeeAll(prev => !prev))}>{seeAll? 'Less' : 'See all'}</span>
          </div>
        </div>
    </div>
  )
}

export default Category
