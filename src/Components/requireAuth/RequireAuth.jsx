import { useLocation, Outlet, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"


const RequireAuth = () => {
  const {isLoggedIn} = useSelector((state) => state.auth)

    const location = useLocation()

  return (
    isLoggedIn
        ? <Outlet/>
        : <Navigate to={"/auth?account=login"} state={{from: location}} replace/>
        );
      }
export default RequireAuth
