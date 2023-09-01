import React, {useEffect} from 'react'
import './index.css'
import SingleProductInfo from '../../Components/singleProduct/singleProductInfo/singleProductInfo';
import DescriptionAndMayLike from '../../Components/singleProduct/descriptionAndMayLike/descriptionAndMayLike';
import SinglesRelatedProducts from '../../Components/singleProduct/singlesRealatedProducts/singlesRelatedProducts';
// import SinglesDiscount from '../../Components/singleProduct/singlesDiscount/singlesDiscount';
import Subscribe from '../../Components/homeComponents/subscribe/subscribe';

const DetailMain = ({setHeaderSettings}) => {

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
