import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Select, ConfigProvider } from 'antd';
import Swal from 'sweetalert2'
import { getCategories } from '../../../Store/categories';
import {FaChevronDown} from 'react-icons/fa6'
import './index.css'

const Search = ({setSearchParams}) => {
  const [inputValue, setInputValue] = useState('')
  const [selectValueId, setSelectValueId] = useState('')

  const {categories, loading, error} = useSelector((state) => state.categories)

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
    if(inputValue){
      setSearchParams({searchValue: inputValue,
      category: selectValueId})
      navigate('/products')
    } else{
      Swal.fire({
        title: 'Error!',
        text: 'Please enter some search keyword',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }
    setInputValue('')
    }
    
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
          onChange={(value) => (setSelectValueId(value))}
          options={items}
        />
        </ConfigProvider>
        <button type='button' onClick={() => handleSearch()}>Search</button>
    </div>
  )
}

export default Search
