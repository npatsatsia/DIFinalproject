import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import './index.css'
import AsideFilters from '../../Components/productsList/asideFilters/asideFilters'
import ProductsListView from '../../Components/productsList/productsListView/productsListView'
import { getProducts } from '../../Store/products'


const ProductsList = ({searchParams, setSearchParams}) => {
  const [showfilters, setShowFilters] = useState(false)
  const [listView, setListview] = useState(false)
  const [filterStr, setFilterStr] = useState([])
  const [currentPageNumber, setCurrentPageNumber] = useState(1)
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(4999)
  const [priceRange, setPriceRange] = useState([minValue, maxValue])
  const [currentCategory, setCurrentCategory] = useState('')
  const [url, setUrl] = useState('')
  const [URLSaveParams, setURLSaveParams] = useState({
    filterStr: [],
    currentPageNumber: 1,
    priceRange: [minValue, maxValue],
    currentCategory: '',
    searchValue: ''
  })


  useEffect(() => {

  }, [])
  
  const dispatch = useDispatch()

  const location = useLocation()
  const navigate = useNavigate()
  
  let urlParams = new URLSearchParams(location.search);


  const {data, loading, error, brands} = useSelector((state) => state.products);
  let products = data

  let trueFilters = filterStr.filter((item) => (brands.includes(item)))


  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if(searchParams.category) {
      setCurrentCategory(searchParams.category)
    }
  }, [searchParams])



  useEffect(() => {
    let urlParams = new URLSearchParams(location.search);
    urlParams.set('searchKey', searchParams.searchValue);
    urlParams.set('priceRange', priceRange.join('-'));
    urlParams.set('brands', trueFilters.join('&'));
    urlParams.set('pageNumber', currentPageNumber);
    urlParams.set('currentCategory', currentCategory);
    urlParams.set('URLSaveParams', URLSaveParams);
    
    // window.history.pushState({ path: newURL }, '', newURL);
    setUrl(`${location.pathname}?${urlParams.toString()}`)
  }, [currentCategory, searchParams, priceRange, currentPageNumber, trueFilters, url, location.search]);


  

  useEffect(() => {
    const URLSaveParams = urlParams.get('URLSaveParams');

    if (URLSaveParams) {
      const selectedURLParams = URLSaveParams;
      setURLSaveParams(selectedURLParams)
    }


    const searchTextParam = urlParams.get('searchKey');

    if (searchTextParam) {
      const selectedsearchText = searchTextParam;
      setSearchParams({
        searchValue: selectedsearchText,
      })
    }

    const categoryParam = urlParams.get('currentCategory');

    if (categoryParam) {
      const selectedCategory = categoryParam;
      setCurrentCategory(selectedCategory)
    }

    const brandsParam = urlParams.get('brands');

    if (brandsParam) {
      const selectedBrands = brandsParam.split('&');
      setFilterStr(selectedBrands)    
    }
    
    const priceRangeParam = urlParams.get('priceRange');
    
    if (priceRangeParam) {
      const parsedPriceRange = priceRangeParam.split('-');
      setPriceRange(parsedPriceRange);
    }
    
    const pageParams = urlParams.get('pageNumber');

    if (pageParams) {
      const selectedPage = pageParams.split('=');
      setCurrentPageNumber(selectedPage);
    }

  
  }, [location.search]);

  useEffect(() => {
    navigate(url)
  }, [url])

  // useEffect(() => {

  // /// products filter by brand
  
  if(trueFilters.length > 0) {
    products = products.filter((item) => (trueFilters.includes(item.brand)))
  }else {
    products = data
  }
  
  // /// products filter by price
  products = products.filter((item) => (+item.price > +priceRange[0] && +item.price < +priceRange[1]))
  
  
  // /// category show products
  if(currentCategory !== '') {
    products = products.filter((item) => (item.categoryId === currentCategory ))
  }


  if(searchParams.searchValue) {
    products = products.filter((item) => { return ((item.brand + item.name + item.model).toLowerCase()).includes((searchParams.searchValue).toLowerCase())})
  }
  // }, [trueFilters, priceRange, currentPageNumber, currentCategory]);
  


  return (
    <section className='products-section'>
      <AsideFilters
        setCurrentCategory={setCurrentCategory}
        brands={brands}
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
        products={products}
        trueFilters={trueFilters}
        currentPageNumber = {currentPageNumber}
        setCurrentPageNumber = {setCurrentPageNumber}
        setPriceRange={setPriceRange}
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
