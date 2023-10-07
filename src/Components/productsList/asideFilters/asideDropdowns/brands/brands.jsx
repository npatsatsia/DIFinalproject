import React, {useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getBrands } from '../../../../../slices/filterItems/index'



const Brands = () => {
    const [show, setShow] = useState(false)
    const [seeAll, setSeeAll] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()

    const dispatch = useDispatch()

    
    useEffect(() => {
        dispatch(getBrands());
    }, [dispatch]);
    
    const {brands} = useSelector((state) => state.filteredProducts);

    const params = Object.fromEntries([...searchParams]);

    const handleCheckboxChange = (brand, event) => {

        if (event.target.checked) {
            setSearchParams({
                ...params,
                brands: (params.brands || "") + "&" + brand,
                pageNumber: 1
            })
        } else {
            let newBrands = params.brands.split('&')
            setSearchParams({
                ...params,
                brands: (newBrands.filter((item) => item !== brand)).join('&')
            })
        }
      };
      
  return (
    <div className='list-brands-container'>
        <div className='products-filters-title' onClick={() => (setShow(prev => !prev))}>
            <h6 className='title-h6'>Brands</h6>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={show? '' : 'svg-down'}>
                <path d="M12 8.29504L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.29504Z" fill="#8B96A5"/>
            </svg>
        </div>
        <div className={`products-brands-filter ${show? 'show-filters' : ''}`}>
            <ul className={`products-brands-filter-ul ${seeAll? 'seeallbrands' : ''}`}>
                {brands.map((item, index) => {
                    return (
                        <li className='single-check-container pdtb7' key={index + 44372900523542}>
                            <input type="checkbox" id={item} className='checkbox'
                            onChange={(e) => (handleCheckboxChange(e.target.id, e))}
                            checked={params.brands? params.brands.includes(item) : false}
                                
                            />
                            <label htmlFor={item} className='text-base drk pl10'>{item}</label>
                        </li>)
                    })}
            </ul>    
            <div className='filter-seeall pdtb7'>
                <span className='text-base blu pdtb7' onClick={() => (setSeeAll(prev => !prev))}>{seeAll? 'Less' : 'See all'}</span>
            </div> 
        </div>
    </div>
  )
}

export default Brands
