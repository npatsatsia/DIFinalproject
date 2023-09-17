import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Select, ConfigProvider } from 'antd';
import { getCategories } from '../../../Store/categories';
import {FaChevronDown} from 'react-icons/fa6'
import './index.css'
import { useNavigate } from 'react-router-dom';

const Search = ({setSearchParams}) => {
  const [inputValue, setInputValue] = useState('')
  const [selectValueId, setSelectValueId] = useState('')

  const {categories, loading, error} = useSelector((state) => state.categories)

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
      setSearchParams({searchValue: inputValue,
      category: selectValueId})
      navigate('/products')
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
