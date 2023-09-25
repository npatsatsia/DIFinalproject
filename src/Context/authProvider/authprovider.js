import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"


const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [user, setUser] = useState([])

    const navigate = useNavigate()

 const userData = async () => {
    try{
        const response = await axios.post('https://digitalamazonproject.azurewebsites.net/api/user/getByEmail', 
        {
         email: auth.signEmail
         },
         {headers: {'Content-Type': 'application/json'}}
         )
         setUser(response.data[0])
     }catch(error) {
         return error
     }
}

 const signOut = () => {
     setAuth({})
     navigate('/')
}
    


    return (
        <AuthContext.Provider value={{ auth, setAuth, user, userData, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;