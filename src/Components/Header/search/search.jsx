import React from 'react'
import {FaChevronDown} from 'react-icons/fa6'
import './index.css'

const Search = () => {
  return (
    <div className='header-search-container'>
        <input type='text' placeholder='Search'/>
        <span>All Category<FaChevronDown className='chevron-down'/></span>
        <button type='button'>Search</button>
    </div>
  )
}

export default Search
