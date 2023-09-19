import React, {useEffect} from 'react'
import './index.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SingleProductInfo from '../../Components/singleProduct/singleProductInfo/singleProductInfo';
import DescriptionAndMayLike from '../../Components/singleProduct/descriptionAndMayLike/descriptionAndMayLike';
import SinglesRelatedProducts from '../../Components/singleProduct/singlesRealatedProducts/singlesRelatedProducts';
// import SinglesDiscount from '../../Components/singleProduct/singlesDiscount/singlesDiscount';
import Subscribe from '../../Components/homeComponents/subscribe/subscribe';
import { getSingleProduct } from '../../Store/singleProduct';
import Loader from '../../Components/extra/loader/loader';
const DetailMain = () => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {productId} = useParams()

  const {singleProduct, images, loading} = useSelector((state) => state.singleProduct)


  useEffect(() => {
    dispatch(getSingleProduct(productId));
  }, [dispatch, productId]);


  useEffect(() => {
    if(!singleProduct && !loading) {
      navigate('/notfound')
    }
  }, [singleProduct, loading])


  if(loading) {
    return <Loader/>
  }
  

  return (
      <>
        <SingleProductInfo singleProduct={singleProduct} images={images}/>
        <DescriptionAndMayLike singleProduct={singleProduct}/>
        <SinglesRelatedProducts/>
        {/* <SinglesDiscount/> */}
        <Subscribe/>
      </>
    )
  }

export default DetailMain
