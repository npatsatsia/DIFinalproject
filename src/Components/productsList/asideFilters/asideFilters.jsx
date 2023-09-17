import React from 'react'
import './index.css'
import Category from './asideDropdowns/category/category'
import Ratings from './asideDropdowns/ratings/ratings'
import Brands from './asideDropdowns/brands/brands'
import Pricerange from './asideDropdowns/pricerange/pricerange'
import Features from './asideDropdowns/features/features'
import Condition from './asideDropdowns/condition/condition'

const AsideFilters = ({showfilters, setShowFilters, listView, setListview, setFilterStr, filterStr, priceRange, setPriceRange, setCurrentPageNumber, minValue, maxValue, setMinValue, setMaxValue, brands, setCurrentCategory}) => {

  return (
    <>
      <div className='filters-responsive' onClick={() => (setShowFilters(prev => !prev))}>
        <span className='text-normal drk'>{showfilters? 'Hide Filter' : 'Show Filter'}</span>
      </div>
      <div className='filters-responsive-view'>
        <div className='filters-view-container'>
          <div className='filter-quantity' onClick={() => (setShowFilters(prev => !prev))}>
            <span className='text-btn drk'>{'Filter (3)'}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M5.25343 4.5H12.7534L8.99593 9.225L5.25343 4.5ZM3.19093 4.2075C4.70593 6.15 7.50343 9.75 7.50343 9.75V14.25C7.50343 14.6625 7.84093 15 8.25343 15H9.75343C10.1659 15 10.5034 14.6625 10.5034 14.25V9.75C10.5034 9.75 13.2934 6.15 14.8084 4.2075C15.1909 3.7125 14.8384 3 14.2159 3H3.78343C3.16093 3 2.80843 3.7125 3.19093 4.2075Z" fill="#8B96A5"/>
            </svg>
          </div>
          <div className='resp-view-container'>
            <div className={`grid-view-cont ${!listView? 'active' : ''}`} onClick={() => {setListview(false)}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.16667 2.5H2.5V9.16667H9.16667V2.5Z" fill="#1C1C1C"/>
                <path d="M9.16667 10.8333H2.5V17.5H9.16667V10.8333Z" fill="#1C1C1C"/>
                <path d="M17.5 2.5H10.8333V9.16667H17.5V2.5Z" fill="#1C1C1C"/>
                <path d="M17.5 10.8333H10.8333V17.5H17.5V10.8333Z" fill="#1C1C1C"/>
              </svg>
            </div>
            <div className={`list-view-cont ${listView? 'active' : ''}`} onClick={() => {setListview(true)}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M17.5 6.66671H2.5V3.33337H17.5V6.66671ZM17.5 8.33337H2.5V11.6667H17.5V8.33337ZM17.5 13.3334H2.5V16.6667H17.5V13.3334Z" fill="#1C1C1C"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <aside className={`products-aside-filters ${showfilters? 'active' : ''}`}>
        <Category
          setCurrentCategory={setCurrentCategory}
          setCurrentPageNumber={setCurrentPageNumber}
        />
        <Brands
          brands={brands}
          setFilterStr={setFilterStr} 
          filterStr={filterStr} 
          setCurrentPageNumber={setCurrentPageNumber}/>
        <Pricerange 
          setCurrentPageNumber={setCurrentPageNumber} 
          priceRange={priceRange} 
          setPriceRange={setPriceRange}
          minValue={minValue}
          setMinValue={setMinValue}
          maxValue={maxValue}
          setMaxValue={setMaxValue}/>
        <Features/>
        <Condition/>
        <Ratings/>
      </aside>
    </>
  )
}

export default AsideFilters
