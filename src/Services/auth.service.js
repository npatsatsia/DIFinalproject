import authApi from '../API/auth.axios'




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


// const handleAuth = async (e) => {
//     e.preventDefault()
//         try {
//             const response = await axios.post('https://digitalamazonproject.azurewebsites.net/api/User/LogIn',
//                 JSON.stringify({ email: signEmail, password: signPassword }),
//                 {
//                     headers: { 'Content-Type': 'application/json' },
//                 }
//             );
//             const accessToken = response?.data?.jwt;
//             setAuth({signEmail, signPassword, accessToken});
//             setSignEmail('');
//             setSignPassword('');
//             navigate(from, {replace: true});
//     }catch(err) {
//         if (!err?.response) {
//             setSignErrMsg('No Server Response');
//         } else if (err.response?.status === 400) {
//             setSignErrMsg('Missing Username or Password');
//         } else if (err.response?.status === 401) {
//             setSignErrMsg('Unauthorized');
//         } else {
//             setSignErrMsg('Login Failed');
//         }
//         signErrRef.current.focus();
//    }
// }

// const handleRegister = async (e) => {
//     e.preventDefault()

//     const v1 = USER_REGEX.test(username);
//     const v2 = PWD_REGEX.test(regPassword);

//     if (!v1 || !v2) {
//         setErrMsg("Invalid Entry");
//         return;
//     }
//         try {
//             const response = await axios.post('https://digitalamazonproject.azurewebsites.net/api/user/registerUser',
//             {
//                 userName: username,
//                 password: regPassword,
//                 email: regEmail
//             },
//             {headers: {'Content-Type': 'application/json'}}
//         )
//         setUsername('');
//         setRegEmail('')
//         setRegPassword('');
//         setRegRePassword('');
//     }catch (error) {
//         if (!error?.response) {
//             setErrMsg('No Server Response');
//         } else if (error.response?.status === 409) {
//             setErrMsg('Username Taken');
//         } else {
//             setErrMsg('Registration Failed')
//         }
//         // errRef.current.focus();
//     }
// }