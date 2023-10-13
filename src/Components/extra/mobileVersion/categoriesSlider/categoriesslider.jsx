import React, {useEffect} from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../../../slices/filterItems/index'
const CategoriesSlider = ({headerSettings}) => {

const {categories, error} = useSelector((state) => state.filteredProducts)

const dispatch = useDispatch()

const navigate = useNavigate()

const handleClick = (id, category) => {    
  const searchParams = new URLSearchParams();
    searchParams.set('category', category);
    searchParams.set('currentCategory', id);
    searchParams.set('pageNumber', '1');
    
    navigate(`/products?${searchParams.toString()}`);
};

useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

if (error) {
    return
}  

  return (
    <div className={`mobile-categories-slider ${headerSettings.categories? headerSettings.categories : ''}`}>
        <ul>
            {categories.map((item) => {
                return  <li className='text-base blu' key={item.id + 878926498263} onClick={() => handleClick(item.id, item.name)}>{item.name}</li>
            })}
        </ul>
    </div>
  )
}

export default CategoriesSlider
