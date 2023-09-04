import React, {useEffect, useState} from 'react'
import './index.css'
import Banner from '../../../Components/homeComponents/banner/banner'
import Offers from '../../../Components/homeComponents/offers/offers'
import HomeSection from '../../../Components/homeComponents/specialCategories/homeSection/homeSection'
import GadgetsSection from '../../../Components/homeComponents/specialCategories/gadgetsSection/gadgetsSection'
import Suppliers from '../../../Components/homeComponents/suppliers/suppliers'
import Recomended from '../../../Components/homeComponents/recomended/recomended'
import ExtraServices from '../../../Components/homeComponents/extraServices/extraServices'
import Regions from '../../../Components/homeComponents/regions/regions'
import Subscribe from '../../../Components/homeComponents/subscribe/subscribe'

const HomeMain = () => {
  const [categoriesArr, setCategoriesArr] = useState([])

  const fetchData = async () => {
    try {
      const result = await fetch('https://digital-react-project.azurewebsites.net/api/product/categories');
      const data = await result.json();
      setCategoriesArr([...data])
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
        <Banner categoriesArr={categoriesArr}/>
        <Offers/>
        <HomeSection/>
        <GadgetsSection/>
        <Suppliers/>
        <Recomended/>
        <ExtraServices/>
        <Regions/>
        <Subscribe/>
    </>
  )
}

export default HomeMain
