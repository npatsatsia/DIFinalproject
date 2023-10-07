import React, { useState } from 'react'
import './index.css'
import { useSelector } from 'react-redux'
import Banner from '../../../Components/homeComponents/banner/banner'
import Offers from '../../../Components/homeComponents/offers/offers'
import HomeSection from '../../../Components/homeComponents/specialCategories/homeSection/homeSection'
import GadgetsSection from '../../../Components/homeComponents/specialCategories/gadgetsSection/gadgetsSection'
import Suppliers from '../../../Components/homeComponents/suppliers/suppliers'
import Recomended from '../../../Components/homeComponents/recomended/recomended'
import ExtraServices from '../../../Components/homeComponents/extraServices/extraServices'
import Regions from '../../../Components/homeComponents/regions/regions'
import Subscribe from '../../../Components/homeComponents/subscribe/subscribe'
import Loader from '../../../Components/extra/loader/loader'

const HomeMain = () => {

  return (
    <>
      <Banner/>
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
