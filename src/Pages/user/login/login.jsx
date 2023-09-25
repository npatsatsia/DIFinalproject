import React, { useRef, useState, useEffect } from 'react'
import './index.css'
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Socials from '../../../Components/extra/socials/socials'
import { FaInfoCircle, FaTimesCircle, FaCheckCircle,} from "react-icons/fa";
import {login} from '../../../slices/auth/index'
import { register } from '../../../slices/auth/index'
import { clearMessage } from '../../../slices/auth/message'

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Login = () => {
    // register refs
    const userRef = useRef();
    const emailRef = useRef()
    const errRef = useRef();
    // login refs
    const signEmailRef = useRef();
    const signErrRef = useRef();    
    
    // ///
    const navigate = useNavigate()
    const [searchParams, setSearchparams] = useSearchParams()
    
    const params = Object.fromEntries([...searchParams])

    // const location = useLocation()
    // const from = location.state?.from?.pathname || "/"
    
    // registration needs
    const [regEmail, setRegEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [regPassword, setRegPassword] = useState('')
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [regRePassword, setRegRePassword] = useState('')
    const [validRepwd, setValidRePwd] = useState(false);
    const [rePwdFocus, setRePwdFocus] = useState(false);

    const [username, setUsername] = useState('')
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');

    // toggle between register and login
    const [changeToReg, setChangeToReg] = useState(false)

    // login needs
    const [signEmail, setSignEmail] = useState('')
    const [signPassword, setSignPassword] = useState('')
    const [signErrMsg, setSignErrMsg] = useState('');

    const { isLoggedIn, error } = useSelector((state) => state.auth);
    const { message } = useSelector((state) => state.message);

    const dispatch = useDispatch();

    useEffect(() => {
        if(params.account === 'register'){
            setChangeToReg(true)
        }else {
            setChangeToReg(false)
        }
    },[params])

    useEffect(() => {
        dispatch(clearMessage());
      }, [dispatch]);


    useEffect(() => {
        // userRef.current.focus();
    }, [])

    // register needs
    useEffect(() => {
        setValidName(USER_REGEX.test(username));
    }, [username])

    useEffect(() => {
        setValidEmail(USER_REGEX.test(regEmail));
    }, [regEmail])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(regPassword));
        setValidRePwd(regPassword === regRePassword);
    }, [regPassword, regRePassword])

    // error messages
    useEffect(() => {
        setErrMsg('');
    }, [username, regEmail, regPassword, regRePassword])

    useEffect(() => {
        setSignErrMsg('');
    }, [signEmail, signPassword])

    const handleChangeToLogin = () => {
        const searchParams = new URLSearchParams();
          searchParams.set('account', 'login');      
          navigate(`/auth?${searchParams.toString()}`);
    }

    // register function
   const handleRegister = async (e) => {
    e.preventDefault()

    const v1 = USER_REGEX.test(username);
    const v2 = PWD_REGEX.test(regPassword);

    if (!v1 || !v2) {
        setErrMsg("Invalid Entry");
        return;
    }
    
    // setSuccessful(false);

    dispatch(register({ username, regPassword, regEmail}))
      .unwrap()
      .then(() => {
        // setSuccessful(true);
      })
      .catch(() => {
        // setSuccessful(false);
      });
        setUsername('');
        setRegEmail('')
        setRegPassword('');
        setRegRePassword('');
}


const handleAuth = async (e) => {
    e.preventDefault()
    // 'setloading: true'

    dispatch(login({ signEmail, signPassword }))
    .unwrap()
    .then(() => {
        navigate('/')
    })
    
    .catch(() => {
        // 'setloading: false'
    })
    setSignEmail('');
    setSignPassword('');

    if (isLoggedIn) {
        return <Navigate to="/" />;
      }

        signErrRef.current.focus();
   }

useEffect(() => {
    if(message) {
     setErrMsg(message);
     setSignErrMsg(message)
    }
    setTimeout(() => {
        setErrMsg('');
        setSignErrMsg('')
    }, 10000);
},[message])


  return (
    <section className='user-section-page'>
        <div className='user-container'>
            <div className='container'>
                {!changeToReg? 
                   ( <>
                        <div className='text-link'>
                            <div className='welcome'>
                                <span>Welcome to <span>LOREM</span></span>
                                <h1>Sign in</h1>
                            </div>
                            <div className='link'>
                                <span>no account?</span>
                                <div onClick={() => navigate('/auth?account=register')}>Sign up</div>
                            </div>
                            <p ref={signErrRef} className={signErrMsg ? "errmsg" : "offscreen"} aria-live="assertive">{signErrMsg}</p>
                        </div>
                        <div className='social-login'>
                            <Socials/>
                        </div>
                        <form  onSubmit={handleAuth} className='user-login-form' >
                            <div className='login-user inpt'>
                                <label htmlFor="user">Enter your email address</label>
                                <input 
                                    type="email" 
                                    id="user"
                                    autoComplete="off"
                                    placeholder='email address'
                                    required
                                    ref={signEmailRef}
                                    value={signEmail} 
                                    onChange={(e) => (setSignEmail(e.target.value))}/>
                            </div>
                            <div className='login-password inpt'>
                                <label htmlFor="signPassword">Enter your Password</label>
                                <input 
                                    type="password" 
                                    id="signPassword" 
                                    required
                                    value={signPassword}
                                    onChange={(e) => (setSignPassword(e.target.value))}
                                    placeholder='Password'
                                />
                            </div>
                            <span>forgot password</span>
                            <div className='sign-btn-container'>
                                <button className='sign-btn' type='submit'>Sign in</button>
                            </div>
                        </form>
                    </>
                ) : (
                        <>
                            <div className='text-link'>
                                <div className='welcome'>
                                    <span>Welcome to <span>LOREM</span></span>
                                    <h1>Sign up</h1>
                                </div>
                                <div className='link'>
                                    <span>Have an Account ?</span>
                                    <div onClick={() => navigate('/auth?account=login')}>Sign in</div>
                                </div>
                            </div>
                            <p ref={errRef} className={errMsg ? "errmsg text-normal" : "offscreen"} aria-live="assertive">{errMsg}</p>
                            <form className='user-sigup-form' onSubmit={handleRegister}>
                                <div className='signup-email inpt'>
                                    <label htmlFor="email">Enter your email address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        autoComplete='off'
                                        ref={emailRef}
                                        value={regEmail}
                                        aria-invalid={validEmail? 'false' : 'true'}
                                        onChange={(e) => setRegEmail(e.target.value)}
                                        placeholder='email address'
                                        onFocus={() => setEmailFocus(true)}
                                        onBlur={() => setEmailFocus(false)}
                                        />
                                </div>
                                <div className='signup-user-contact'>
                                    <label htmlFor="username">
                                            Enter Username:
                                        <FaCheckCircle className={validName && username ? "valid" : "hide"} />
                                        <FaTimesCircle className={validName || !username ? "hide" : "invalid"} />
                                    </label>
                                    <input 
                                        ref={userRef}
                                        autoComplete='off'
                                        required
                                        type="text" 
                                        name="username" 
                                        id="username" 
                                        aria-invalid={validName? 'false' : 'true'}
                                        aria-describedby='uidnote'
                                        value={username} 
                                        onChange={(e) => setUsername(e.target.value)} 
                                        placeholder='Username'
                                        onFocus={() => setUserFocus(true)}
                                        onBlur={() => setUserFocus(false)}
                                        />
                                </div>
                                <p id="uidnote" className={userFocus && username && !validName ? "instructions" : "offscreen"}>
                                    <FaInfoCircle />
                                    4 to 24 characters.<br />
                                    Must begin with a letter.<br />
                                    Letters, numbers, underscores, hyphens allowed.
                                </p>
                                <div className='signup-password inpt'> 
                                    <div className='signup-user inpt'>
                                        <label htmlFor="signup-password">
                                                Enter your Password:
                                            <FaCheckCircle className={validPwd ? "valid" : "hide"} />
                                            <FaTimesCircle className={validPwd || !regPassword ? "hide" : "invalid"} />
                                        </label>
                                        <input
                                            type="password" 
                                            name="signup-password" 
                                            id="signup-password" 
                                            value={regPassword} 
                                            onChange={(e) => setRegPassword(e.target.value)}
                                            required
                                            aria-invalid={validPwd ? "false" : "true"}
                                            aria-describedby="pwdnote"
                                            onFocus={() => setPwdFocus(true)}
                                            onBlur={() => setPwdFocus(false)}
                                            placeholder='Password'/>
                                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                                            <FaInfoCircle />
                                            8 to 24 characters.<br />
                                            Must include uppercase and lowercase letters, a number and a special character.<br />
                                            Allowed special characters: <span aria-label="exclamation mark">!</span>
                                            <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span>
                                            <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                                        </p>
                                    </div>
                                    <div className='signup-contact inpt'>
                                        <label htmlFor="signup-repass">
                                                Re-enter Password:
                                            <FaCheckCircle className={validRepwd && regRePassword ? "valid" : "hide"} />
                                            <FaTimesCircle className={validRepwd || !regRePassword ? "hide" : "invalid"} />
                                        </label>
                                        <input 
                                            type="password" 
                                            name="signup-repass" 
                                            id="signup-repass"
                                            aria-describedby="confirmnote"
                                            aria-invalid={validRepwd ? "false" : "true"}
                                            required
                                            value={regRePassword} 
                                            onChange={(e) => setRegRePassword(e.target.value)} 
                                            onFocus={() => setRePwdFocus(true)}
                                            onBlur={() => setRePwdFocus(false)}
                                            placeholder='Confirm Password'/>
                                        <p id="confirmnote" className={rePwdFocus && !validRepwd ? "instructions" : "offscreen"}>
                                            <FaInfoCircle />
                                            Must match the first password input field.
                                        </p>
                                    </div>
                                </div>
                                <div className='sign-btn-container'>
                                    <button className='sign-btn' type='submit'>Sign up</button>
                                </div>
                            </form>
                        </>
                    )
                }
            </div>
        </div>
    </section>
  )
}

export default Login
