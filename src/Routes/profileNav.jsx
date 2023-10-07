import { Routes, Route } from "react-router-dom"
import Profile from "../Components/profile/profileMain/profile"
import NotFound from "../Components/notFound/notFound"

const ProfileNav = ({setNotFound}) => {
  return (
    <Routes path="/profile">
      <Route path="/:section" element={<Profile/>}/>
      <Route path="*" element={<NotFound setNotFound={setNotFound}/>}/> 
    </Routes>
  )
}

export default ProfileNav
