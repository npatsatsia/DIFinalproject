import React, {useEffect} from 'react'
import './index.css'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SingleProductInfo from '../../Components/singleProduct/singleProductInfo/singleProductInfo';
import DescriptionAndMayLike from '../../Components/singleProduct/descriptionAndMayLike/descriptionAndMayLike';
import SinglesRelatedProducts from '../../Components/singleProduct/singlesRealatedProducts/singlesRelatedProducts';
// import SinglesDiscount from '../../Components/singleProduct/singlesDiscount/singlesDiscount';
import Subscribe from '../../Components/homeComponents/subscribe/subscribe';
import { getSingleProduct } from '../../slices/filterItems/index';
import Loader from '../../Components/extra/loader/loader';

const DetailMain = () => {
  const dispatch = useDispatch()

  const {productId} = useParams()
  
  const {singleProduct, images, singleProductIsLoading, loading} = useSelector((state) => state.filteredProducts)

  useEffect(() => {
    dispatch(getSingleProduct(productId));
  }, [dispatch, productId]);

  if(loading) {
    return <Loader/>
  }
  
  return (
      <>
        <SingleProductInfo singleProduct={singleProduct} images={images} singleProductIsLoading={singleProductIsLoading}/>
        <DescriptionAndMayLike singleProduct={singleProduct}/>
        <SinglesRelatedProducts/>
        {/* <SinglesDiscount/> */}
        <Subscribe/>
      </>
    )
  }

export default DetailMain
