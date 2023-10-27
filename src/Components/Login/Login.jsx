import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const [passwordToggle, setPasswordToggle] = useState('hide');
    const handlePasswordToggle = (e) => {
        setPasswordToggle(e);
    }
    return (
        <div className='login'>
            <div className="login-container container">
                <div className="login-content registration-content">
                    
                <div className="login-main registration-main">
                        
                        <div className={`login-main-content registration-main-content student-registration`}>
                            <h3>Welcome back! Please login here</h3>
                            <form action="">
                                
                                <div className='registration-field'>
                                    <input type="email" placeholder='Email' required />
                                    {/* <span>Email</span> */}
                                </div>
                                <div className='registration-field'>
                                    {
                                        passwordToggle == 'hide' ?
                                            <input type="password" placeholder='Password' required />
                                            :
                                            <input type="text" placeholder='Password' required />
                                    }
                                    {/* <span>Password</span> */}
                                    {
                                        passwordToggle == 'hide' ? <FaRegEyeSlash onClick={() => handlePasswordToggle('show')} /> : passwordToggle == 'show' ? <FaRegEye onClick={() => handlePasswordToggle('hide')} /> : ''
                                    }
                                </div>
                                <div className="login-rememberme">
                                    <input type="checkbox" id="rememberme" />
                                    <label htmlFor="rememberme">remember me</label>
                                </div>
                                <button className='login-btn signup-btn' type="submit">Login</button>
                                <p className='terms-conditions already-login'>Don't have an account? <Link to="/registration">Register Here</Link></p>
                                {/* <div className="OR">
                                    <span>OR</span>
                                </div> */}
                            </form>
                        </div>

                    </div>
                    <div className="login-image registration-image">
                        <img src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4685.jpg?w=740&t=st=1698079097~exp=1698079697~hmac=50d5bc271455752b3f7b7a80ad19688fe62cc2b9671a868dd7c1b806d6955916" alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;