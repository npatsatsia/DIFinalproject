import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Select, ConfigProvider } from 'antd';
import { getCategories } from '../../../slices/filterItems/index';
import './index.css'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { getProducts } from '../../../slices/products/index'


const Search = ({setMainEclipse}) => {
  const [inputValue, setInputValue] = useState('')
  const [selectValueId, setSelectValueId] = useState('')  

  const {categories} = useSelector((state) => state.filteredProducts)

  const {data} = useSelector((state) => state.products)


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

  useEffect(() => {
    dispatch(getProducts({currCategory: '', priceMin: '', priceMax: ''}))
    }, [dispatch])
    
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
              // setInputValue('');

      } else {
        Swal.fire({
                title: 'Error!',
                text: 'Please enter some search keyword',
                icon: 'error',
                confirmButtonText: 'OK'
              });
            }
    };

    
    const handleOnSearch = (string) => {
      setInputValue(string)
    }
    
    const handleOnSelect = (item) => {
      navigate(`product/${item.id}`)
  }

  const handleFocusEclipse = () => {
    setMainEclipse(true)
  }
  

  const formatResult = (item) => {
    return (
      <div className='live-result' style={{ padding: '12px 0' }}>
        <img style={
              { width: '100px',
                height: '100px',
                objectFit: 'contain',
                border: '1px solid #DEE2E7',
                padding: '5px' }}
            src={item.images[0]}
            alt={item.name}/>
        <div style={
              { paddingLeft: '8px',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
                gap: '10px'}}>
          <span style={{ textAlign: 'left',
                width: '400px',
                height: '40px',
                overflow: 'hidden',
                wordWrap: 'break-word',
                whiteSpace: 'normal',
                color: '#8B96A5'}}
          >{item.name}</span>
          <span style={{fontWeight: '600'}}>${item.price}</span>
        </div>
      </div>
    )
  }
  return (
    <div className='header-search-container'>
      {/* <input classname-"text-base gr8" type='text' placeholder='Search' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/> */}
      <ReactSearchAutocomplete
          className='livesearch'
          fuseOptions={{ keys: ["name"] }}
          items={data}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={handleFocusEclipse}
          onSearch={handleOnSearch}
          onSelect={handleOnSelect}
          formatResult={formatResult}
          maxResults={4}
          styling={{
              height: "40px",
              width: '58%',
              border: "unset",
              borderRadius: "unset",
              backgroundColor: "#fff",
              boxShadow: "unset",
              hoverBackgroundColor: "unset",
              color: "unset",
              fontSize: "16px",
              fontFamily: "Inter",
              iconColor: "usnet",
              lineColor: "transparent",
              placeholderColor: "grey",
              // clearIconMargin: '3px 14px 0 0',
              // searchIconMargin: '0 0 0 16px'
            }}
        />
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
