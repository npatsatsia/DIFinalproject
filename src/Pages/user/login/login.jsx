import React, {useState} from 'react'
import './index.css'
import Socials from '../../../Components/extra/socials/socials'

const Login = () => {
    const [changeToReg, setChangeToReg] = useState(false)

  return (
    <section className='user-section-page'>
        <div className='user-container'>
            <div className='container'>
                {!changeToReg? 
                    <>
                        <div className='text-link'>
                            <div className='welcome'>
                                <span>Welcome to <span>LOREM</span></span>
                                <h1>Sign in</h1>
                            </div>
                            <div className='link'>
                                <span>no account?</span>
                                <div onClick={() => setChangeToReg(true)}>Sign up</div>
                            </div>
                        </div>
                        <div className='social-login'>
                            <Socials/>
                        </div>
                        <form className='user-login-form'>
                            <div className='login-user inpt'>
                                <label htmlFor="user">Enter your username or email address</label>
                                <input type="text" name="user" id="user" placeholder='Username or email address'/>
                            </div>
                            <div className='login-password inpt'>
                                <label htmlFor="password">Enter your Password</label>
                                <input type="password" name="password" id="password" placeholder='Password'/>
                            </div>
                            <span>forgot password</span>
                            <div className='sign-btn-container'>
                                <button className='sign-btn'>Sign in</button>
                            </div>
                        </form>
                    </>    
                :
                    <>
                        <div className='text-link'>
                            <div className='welcome'>
                                <span>Welcome to <span>LOREM</span></span>
                                <h1>Sign up</h1>
                            </div>
                            <div className='link'>
                                <span>Have an Account ?</span>
                                <div onClick={() => setChangeToReg(false)}>Sign in</div>
                            </div>
                        </div>
                        <form className='user-sigup-form'>
                            <div className='signup-email inpt'>
                                <label htmlFor="email">Enter your email address</label>
                                <input type="email" name="email" id="email" placeholder='email address'/>
                            </div>
                            <div className='signup-user-contact'>
                                <div className='signup-user inpt'>
                                    <label htmlFor="signup-user">User name</label>
                                    <input type="text" name="signup-user" id="signup-user" placeholder='User name'/>
                                </div>
                                <div className='signup-contact inpt'>
                                    <label htmlFor="signup-contact">Contact Number</label>
                                    <input type="text" name="signup-contact" id="signup-contact" placeholder='Contact Number'/>
                                </div>
                            </div>
                            <div className='signup-password inpt'>
                                <label htmlFor="password">Enter your Password</label>
                                <input type="password" name="password" id="password" placeholder='Password'/>
                            </div>
                            <div className='sign-btn-container'>
                                <button className='sign-btn'>Sign up</button>
                            </div>
                        </form>
                    </>
                }
            </div>
        </div>
    </section>
  )
}

export default Login
