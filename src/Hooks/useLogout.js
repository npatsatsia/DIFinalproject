import { useContext } from "react";
import AuthContext from "../Context/authProvider/authprovider";

const useLogout = () => {
        const {setAuth} = useContext(AuthContext)
        const logout = () => {
            setAuth({})
        }
}

export default useLogout