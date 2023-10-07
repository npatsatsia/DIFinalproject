import React, { useState, useEffect } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import {FaSistrix} from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../../slices/products/index'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'



const SearchBox = ({headerSettings}) => {
  const [value, setValue] = useState('')

  const {data} = useSelector((state) => state.products)

  const dispatch = useDispatch()

  const navigate = useNavigate()
  
  useEffect(() => {
    dispatch(getProducts({currCategory: '', priceMin: '', priceMax: ''}))
    }, [dispatch])

   const handleSubmit = (e) => {
    e.preventDefault()

    if (value) {
      const searchParams = new URLSearchParams();
      searchParams.set('searchKey', value);
      searchParams.set('pageNumber', '1');

      navigate(`/products?${searchParams.toString()}`);
      setValue('');
    } else return
  };

    const handleOnSearch = (string) => {
      setValue(string)
    }
    
    const handleOnSelect = (item) => {
      navigate(`product/${item.id}`)
  }
  const formatResult = (item) => {
    return (
      <div className='live-result' style={{ padding: '12px 0', paddingLeft: '12px' }}>
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
                width: '100%',
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
    <form onSubmit={handleSubmit} className={`secondary-search-form ${headerSettings.search? 'active' : ''}`}>
      {/* <div className='mobile-search' > */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M14.4417 13.067H13.7176L13.4609 12.8195C14.3592 11.7745 14.9001 10.4178 14.9001 8.94198C14.9001 5.65114 12.2326 2.98364 8.94173 2.98364C5.6509 2.98364 2.9834 5.65114 2.9834 8.94198C2.9834 12.2328 5.6509 14.9003 8.94173 14.9003C10.4176 14.9003 11.7742 14.3595 12.8192 13.4611L13.0667 13.7178V14.442L17.6501 19.0161L19.0159 17.6503L14.4417 13.067ZM8.94173 13.067C6.65923 13.067 4.81673 11.2245 4.81673 8.94198C4.81673 6.65948 6.65923 4.81698 8.94173 4.81698C11.2242 4.81698 13.0667 6.65948 13.0667 8.94198C13.0667 11.2245 11.2242 13.067 8.94173 13.067Z" fill="#8B96A5"/>
        </svg>
        <input type="text" placeholder='Search' value={value} onChange={(e) => setValue(e.target.value)}/> */}
        <ReactSearchAutocomplete
          className='mobile-search'
          fuseOptions={{ keys: ["name"] }}
          items={data}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onSearch={handleOnSearch}
          onSelect={handleOnSelect}
          formatResult={formatResult}
          maxResults={4}
          styling={{
              height: "100%",
              border: "unset",
              borderRadius: "unset",
              backgroundColor: "white",
              boxShadow: "unset",
              hoverBackgroundColor: "#eee",
              color: "#212121",
              fontSize: "16px",
              fontFamily: "Inter",
              iconColor: "grey",
              lineColor: "transparent",
              placeholderColor: "grey",
              // clearIconMargin: '3px 14px 0 0',
              // searchIconMargin: '0 0 0 16px'
            }}
        />
      {/* </div> */}
    </form>
  )
}

export default SearchBox
