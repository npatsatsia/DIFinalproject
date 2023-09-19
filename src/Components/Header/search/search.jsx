import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Select, ConfigProvider } from 'antd';
import Swal from 'sweetalert2'
import { getCategories } from '../../../Store/categories';
import {FaChevronDown} from 'react-icons/fa6'
import './index.css'

const Search = () => {
  const [inputValue, setInputValue] = useState('')
  const [selectValueId, setSelectValueId] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()


  const {categories, loading, error} = useSelector((state) => state.categories)

  const params = Object.fromEntries([...searchParams])

  const Swal = require('sweetalert2')

  const items = categories.map((item) => {
    return {
      label: item.name,
      value: item.id,

  }})
  
  const dispatch = useDispatch()

  const navigate = useNavigate()
  
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

    
    const handleSearch = () => {
      if (inputValue) {
        const searchParams = new URLSearchParams();
        searchParams.set('searchKey', inputValue);
        searchParams.set('pageNumber', '1');
  
        if (selectValueId) {
          searchParams.set('category', selectValueId.label);
          searchParams.set('currentCategory', selectValueId.value) 
        }
  
        // Use navigate to go to the /products page with the updated search parameters
        navigate(`/products?${searchParams.toString()}`);
              setInputValue('');

      } else {
        Swal.fire({
                title: 'Error!',
                text: 'Please enter some search keyword',
                icon: 'error',
                confirmButtonText: 'OK'
              });
            }
    };
  return (
    <div className='header-search-container'>
      <input type='text' placeholder='Search' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <ConfigProvider
      theme={{
        token: {
          borderRadius: 0,
          colorBorder: 'none',
          colorTextPlaceholder: '#000',
          fontSize: 14,
          fontFamily: "inter",
          colorIcon: '#000'
        }
      }}>
      <Select
        allowClear={true}
        className='selectfrsearch'
        placeholder="All Category"
        optionFilterProp="children"
        onChange={(value, option) => (setSelectValueId(option))}
        options={items}
      />
      </ConfigProvider>
        <button type='button' onClick={() => handleSearch()}>Search</button>
    </div>
  )
}

export default Search
