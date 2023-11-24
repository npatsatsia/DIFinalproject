import authApi from '../API/axios'




const register = (userName, regPassword, regEmail) => {
    return authApi.post('user/registerUser', 
    {
        userName: userName,
        password: regPassword,
        email: regEmail
    },
    {headers: {'Content-Type': 'application/json'}},
    )
}

const login = async (signEmail, signPassword) => {
    return await authApi.post('user/LogIn', 
    {
        email: signEmail,
        password: signPassword
    },
    {headers: {'Content-Type': 'application/json'}},
    )
}

const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userinfo");
};

const authService = {
    register,
    login,
    logout,
};

export default authService;
