import React, {useEffect} from 'react'
import './index.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../../API/productsAPI';
import SingleProductInfo from '../../Components/singleProduct/singleProductInfo/singleProductInfo';
import DescriptionAndMayLike from '../../Components/singleProduct/descriptionAndMayLike/descriptionAndMayLike';
import SinglesRelatedProducts from '../../Components/singleProduct/singlesRealatedProducts/singlesRelatedProducts';
// import SinglesDiscount from '../../Components/singleProduct/singlesDiscount/singlesDiscount';
import Subscribe from '../../Components/homeComponents/subscribe/subscribe';

const DetailMain = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {productId} = useParams()

  const {singleProduct, images, loading, error} = useSelector((state) => state.singleProduct)

  useEffect(() => {
      dispatch(fetchSingleProduct(productId));
    }, [dispatch, productId]);

  if(loading) {
    return <div>loading...</div>
}

if(error) {
    navigate('*')
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
