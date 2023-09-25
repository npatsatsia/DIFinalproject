import React, {useState, useEffect, useContext} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import './index.css'
import AsideFilters from '../../Components/productsList/asideFilters/asideFilters'
import ProductsListView from '../../Components/productsList/productsListView/productsListView'
import { getProducts } from '../../Store/products'
import AuthContext from '../../Context/authProvider/authprovider'




const ProductsList = () => {
  const { auth } = useContext(AuthContext);

  const [showfilters, setShowFilters] = useState(false)
  const [listView, setListview] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()

  const dispatch = useDispatch()
  
  const params = Object.fromEntries([...searchParams])
  
  const {data, loading, error} = useSelector((state) => state.products);
  
  let priceSplit = params.priceRange? params.priceRange.split('-') : ''
  let currCategory = params.currentCategory
  let priceMin = priceSplit[0]
  let priceMax = priceSplit[1]
  let selectedBrands = params.brands? (params.brands.split('&')).filter((item) => item !== '') : ''
  let asyncParams = {currCategory, priceMin, priceMax, selectedBrands}

  let products = data

  useEffect(() => {
    dispatch(getProducts(asyncParams));
  }, [dispatch, searchParams]);


  /// filter by searching
  if(params.searchKey) {
    products = products.filter((item) => { return ((item.brand + item.name + item.model).toLowerCase()).includes((params.searchKey).toLowerCase())})
  }

  console.log(auth)

  return (
    <section className='products-section'>
      <AsideFilters
        showfilters={showfilters} 
        setShowFilters={setShowFilters} 
        listView={listView} 
        setListview={setListview}/>
      <ProductsListView
        products={products}
        loading={loading}
        error={error}
        listView={listView} 
        setListview={setListview} />
    </section>
  )
}

export default ProductsList

