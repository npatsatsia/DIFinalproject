import React from 'react'
import './index.css'

const CategoriesSlider = ({categoriesArr, headerSettings}) => {

  return (
    <div className={`mobile-categories-slider ${headerSettings.categories? headerSettings.categories : ''}`}>
        <ul>
            {categoriesArr.map((item) => {
                return <li key={item.id}>{item.name}</li>
            })}
        </ul>
    </div>
  )
}

export default CategoriesSlider
