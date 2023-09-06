import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './index.css'
import AsideFilters from '../../Components/productsList/asideFilters/asideFilters'
import ProductsListView from '../../Components/productsList/productsListView/productsListView'
import { fetchProducts } from '../../API/productsAPI'


const ProductsList = () => {
const [showfilters, setShowFilters] = useState(false)
const [listView, setListview] = useState(false)
const [filterStr, setFilterStr] = useState([])
const [priceRange, setPriceRange] = useState([0, 4999])

const dispatch = useDispatch()

const {data, loading, error} = useSelector((state) => state.products);

useEffect(() => {
  dispatch(fetchProducts());
}, [dispatch]);


  return (
    <section className='products-section'>
      <AsideFilters 
        data={data}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        setFilterStr={setFilterStr}
        filterStr={filterStr}
        showfilters={showfilters} 
        setShowFilters={setShowFilters} 
        listView={listView} 
        setListview={setListview}/>
      <ProductsListView
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        products={data}
        setFilterStr={setFilterStr}
        filterStr={filterStr}
        loading={loading}
        error={error}
        showfilters={showfilters} 
        setShowFilters={setShowFilters} 
        listView={listView} 
        setListview={setListview} />
    </section>
  )
}

export default ProductsList
