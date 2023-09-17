import React, {useEffect, useState} from 'react'
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
  const [product, setProduct] = useState({})
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {productId} = useParams()

  const {singleProduct, statusCode, images, loading, error} = useSelector((state) => state.singleProduct)

  // console.log(singleProduct)


  useEffect(() => {
      dispatch(getSingleProduct(productId));
      setProduct(singleProduct)
    }, [dispatch, productId]);


    // useEffect(() => {

    //   else 
    //   }else
    //   setProduct(singleProduct)
    // }, [productId])
    
    if(loading) {
      return <Loader/>
    }


  if(error) {
    navigate('*')
  }


  return (
      <>
        <SingleProductInfo singleProduct={singleProduct} images={images}/>
        <DescriptionAndMayLike singleProduct={product}/>
        <SinglesRelatedProducts/>
        {/* <SinglesDiscount/> */}
        <Subscribe/>
      </>
    )
  }

export default DetailMain
