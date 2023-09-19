import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import './index.css'
import AsideFilters from '../../Components/productsList/asideFilters/asideFilters'
import ProductsListView from '../../Components/productsList/productsListView/productsListView'
import { getProducts } from '../../Store/products'


const ProductsList = () => {
  const [showfilters, setShowFilters] = useState(false)
  const [listView, setListview] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()

  
  const dispatch = useDispatch()
  
  const params = Object.fromEntries([...searchParams])

  const {data, loading, error, brands} = useSelector((state) => state.products);

  let products = data

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);


  // /// products filter by brand
  if(params.brands) {
    products = products.filter((item) => (params.brands.includes(item.brand)))
  }else {
    products = data
  }
  
  // /// products filter by price
  if(params.priceRange){
    let priceSplit = params.priceRange.split('-')
    products = products.filter((item) => (+item.price > +priceSplit[0] && +item.price < +priceSplit[1]))
  }
  
  // /// category show products
  if(params.currentCategory) {
    products = products.filter((item) => (item.categoryId === params.currentCategory))
  }

  // /// filter by searching
  if(params.searchKey) {
    products = products.filter((item) => { return ((item.brand + item.name + item.model).toLowerCase()).includes((params.searchKey).toLowerCase())})
  }


  return (
    <section className='products-section'>
      <AsideFilters
        brands={brands}
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

