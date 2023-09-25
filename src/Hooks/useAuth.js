import { useContext, useDebugValue } from "react";
import AuthContext from '../Context/authProvider/authprovider'

const useAuth = () => {
    const { auth } = useContext(AuthContext);
    useDebugValue(auth, auth => auth?.signEmail ? "Logged In" : "Logged Out")
    return useContext(AuthContext);
}

export default useAuth;
