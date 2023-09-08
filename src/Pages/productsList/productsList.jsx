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
const [priceRange, setPriceRange] = useState([0, 4999])
const [currentPageNumber, setCurrentPageNumber] = useState([1])
const [minValue, setMinValue] = useState(0)
const [maxValue, setMaxValue] = useState(4999)

const dispatch = useDispatch()

const location = useLocation()

const {data, loading, error} = useSelector((state) => state.products);

let products = data

useEffect(() => {
  dispatch(fetchProducts());
}, [dispatch]);


useEffect(() => {
  const searchParams = new URLSearchParams(location.search);
  // searchParams.set('priceRange', priceRange.join('-'));
  searchParams.set('minInRange', minValue);
  searchParams.set('maxInRange', maxValue);
  searchParams.set('brands', filterStr.join(','));
  searchParams.set('pageNumber', currentPageNumber.join('='));
  const newURL = `${window.location.pathname}?${searchParams.toString()}`;
  window.history.pushState({ path: newURL }, '', newURL);
}, [filterStr, priceRange, currentPageNumber, minValue, maxValue]);

useEffect(() => {
  const searchParams = new URLSearchParams(location.search);

  const rangeMin = searchParams.get('minInRange');
  
  if (rangeMin) {
    const parsedRangeMin = rangeMin.split('-');
    setMinValue(parsedRangeMin);
  }

  const rangeMax = searchParams.get('maxInRange');
  
  if (rangeMax) {
    const parsedRangeMax = rangeMax.split('-');
    setMaxValue(parsedRangeMax);
  }

  const brandsParam = searchParams.get('brands');
  
  if (brandsParam) {
    const selectedBrands = brandsParam.split(',');
    setFilterStr(selectedBrands);
  }

  // const priceRangeParam = searchParams.get('priceRange');
  
  // if (priceRangeParam) {
  //   const parsedPriceRange = priceRangeParam.split('-');
  //   setPriceRange(parsedPriceRange);
  // }

  const pageParams = searchParams.get('pageNumber');

  if (pageParams) {
    const selectedPage = pageParams.split('=');
    setCurrentPageNumber(selectedPage);
  }
}, [location.search, setFilterStr]);

if(filterStr.length > 0) {
  products = products.filter((item) => (filterStr.includes(item.brand)))

  }

  if(priceRange !== []) {
    let filteredByPrice = products.filter((item) => (+item.price > +minValue && +item.price < +maxValue))
    products = filteredByPrice
  }


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
        data={data}
        currentPageNumber = {currentPageNumber}
        setCurrentPageNumber = {setCurrentPageNumber}
        priceRange={priceRange}
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
