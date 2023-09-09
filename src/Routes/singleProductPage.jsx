import { Routes, Route } from "react-router-dom"
import NotFound from "../Components/notFound/notFound"
import DetailMain from "../Pages/singleProduct/detailMain"

const SingleProductPage = ({setNotFound}) => {
  return (
    <Routes path="/product">
      <Route path="/:productId" element={<DetailMain/>}/>
      <Route path="*" element={<NotFound setNotFound={setNotFound}/>}/>
    </Routes>
  )
}

export default SingleProductPage
