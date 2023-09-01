import React, {useState, useEffect} from 'react'
import './index.css'
import AsideFilters from '../../Components/productsList/asideFilters/asideFilters'
import ProductsListView from '../../Components/productsList/productsListView/productsListView'

const ProductsList = ({setHeaderSettings}) => {
  const [showfilters, setShowFilters] = useState(false)
  const [listView, setListview] = useState(false)

  // useEffect(() => {
  //   setHeaderSettings({
  //     brand: false,
  //     burgermenu: false,
  //     cartAndProfile: true,
  //     back: true,
  //     pagetitle: true,
  //     search: true,
  //     categories: true
  //   })
  // }, [])

  return (
    <section className='products-section'>
      <AsideFilters showfilters={showfilters} setShowFilters={setShowFilters} listView={listView} setListview={setListview}/>
      <ProductsListView showfilters={showfilters} setShowFilters={setShowFilters} listView={listView} setListview={setListview} />
    </section>
  )
}

export default ProductsList
