import React, {useEffect} from 'react'
import './index.css'
import SingleProductInfo from '../../Components/singleProduct/singleProductInfo/singleProductInfo';
import DescriptionAndMayLike from '../../Components/singleProduct/descriptionAndMayLike/descriptionAndMayLike';
import SinglesRelatedProducts from '../../Components/singleProduct/singlesRealatedProducts/singlesRelatedProducts';
// import SinglesDiscount from '../../Components/singleProduct/singlesDiscount/singlesDiscount';
import Subscribe from '../../Components/homeComponents/subscribe/subscribe';

const DetailMain = ({setHeaderSettings}) => {
  useEffect(() => {
    setHeaderSettings({
      brand: false,
      burgermenu: false,
      cartAndProfile: true,
      back: true,
      pagetitle: false,
      search: false,
      categories: false
    })
  }, [])

  return (
    <>
        <SingleProductInfo/>
        <DescriptionAndMayLike/>
        <SinglesRelatedProducts/>
        {/* <SinglesDiscount/> */}
        <Subscribe/>
    </>
    
  )
}

export default DetailMain
