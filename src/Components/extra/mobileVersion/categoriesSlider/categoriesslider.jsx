import React, {useEffect} from 'react'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../loader/loader'
import { getCategories } from '../../../../Store/categories'

const CategoriesSlider = ({headerSettings}) => {

const {categories, loading, error} = useSelector((state) => state.categories)

const dispatch = useDispatch()

useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

if(loading) {
  return <Loader/>
}
if (error) {
    return <div>{error.message}</div>
}  

  return (
    <div className={`mobile-categories-slider ${headerSettings.categories? headerSettings.categories : ''}`}>
        <ul>
            {categories.map((item) => {
                return <li key={item.id + 6234563434622523}>{item.name}</li>
            })}
        </ul>
    </div>
  )
}

export default CategoriesSlider
