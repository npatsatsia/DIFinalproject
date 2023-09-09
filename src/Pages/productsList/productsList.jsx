import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import './index.css'
import AsideFilters from '../../Components/productsList/asideFilters/asideFilters'
import ProductsListView from '../../Components/productsList/productsListView/productsListView'
import { fetchProducts } from '../../API/productsAPI'


const ProductsList = () => {
const [showfilters, setShowFilters] = useState(false)
const [listView, setListview] = useState(false)
const [filterStr, setFilterStr] = useState([])
const [currentPageNumber, setCurrentPageNumber] = useState([1])
const [minValue, setMinValue] = useState(0)
const [maxValue, setMaxValue] = useState(4999)
const [priceRange, setPriceRange] = useState([minValue, maxValue])

const dispatch = useDispatch()

const location = useLocation()

const {data, loading, error, brands} = useSelector((state) => state.products);

let products = data

useEffect(() => {
  dispatch(fetchProducts());
}, [dispatch]);

useEffect(() => {

}, [minValue, maxValue])


useEffect(() => {
  const searchParams = new URLSearchParams(location.search);
  searchParams.set('priceRange', priceRange.join('-'));
  searchParams.set('brands', filterStr.join(','));
  searchParams.set('pageNumber', currentPageNumber.join('='));
  const newURL = `${window.location.pathname}?${searchParams.toString()}`;
  window.history.pushState({ path: newURL }, '', newURL);
}, [filterStr, priceRange, currentPageNumber, location.search]);

useEffect(() => {
  const searchParams = new URLSearchParams(location.search);

  const brandsParam = searchParams.get('brands');
  
  if (brandsParam) {
    const selectedBrands = brandsParam.split(',');
    setFilterStr(selectedBrands);
  }

  const priceRangeParam = searchParams.get('priceRange');
  
  if (priceRangeParam) {
    const parsedPriceRange = priceRangeParam.split('-');
    setPriceRange(parsedPriceRange);
  }

  const pageParams = searchParams.get('pageNumber');

  if (pageParams) {
    const selectedPage = pageParams.split('=');
    setCurrentPageNumber(selectedPage);
  }
}, [location.search, setFilterStr]);

if(filterStr.length > 0) {
  products = products.filter((item) => (filterStr.includes(item.brand)))

  }

  let filteredByPrice = products.filter((item) => (+item.price > +priceRange[0] && +item.price < +priceRange[1]))
  products = filteredByPrice



  return (
    <section className='products-section'>
      <AsideFilters
        minValue={minValue}
        setMinValue={setMinValue}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        setCurrentPageNumber= {setCurrentPageNumber}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        data={data}
        setFilterStr={setFilterStr}
        filterStr={filterStr}
        showfilters={showfilters} 
        setShowFilters={setShowFilters} 
        listView={listView} 
        setListview={setListview}/>
      <ProductsListView
        brands={brands}
        data={data}
        currentPageNumber = {currentPageNumber}
        setCurrentPageNumber = {setCurrentPageNumber}
        setPriceRange={setPriceRange}
        products={products}
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
