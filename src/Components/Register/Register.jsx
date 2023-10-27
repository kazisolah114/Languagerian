import React, { useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
    const [roleToggle, setRoleToggle] = useState('Student')
    const [passwordToggle, setPasswordToggle] = useState('hide')
    const handleRoleToggle = (event) => {
        setRoleToggle(event);
    }
    const handlePasswordToggle = (e) => {
        setPasswordToggle(e);
    }
    return (
        <div className='registration'>
            <div className="registration-container container">
                <div className="registration-content">

                    <div className="registration-main">
                        <div className="registration-role">
                            <button onClick={() => handleRoleToggle('Student')} className={`${roleToggle == 'Student' ? 'student-role' : ''}`}>Student Account</button>
                            <button onClick={() => handleRoleToggle('Instructor')} className={`${roleToggle == 'Instructor' ? 'instructor-role' : ''}`}>Instructor Account</button>
                        </div>
                        <div className={`registration-main-content student-registration ${roleToggle !== 'Student' ? 'hide-student' : ''}`}>
                            <h3>Sign up and start learning</h3>
                            <form action="">
                                <div className='registration-field'>
                                    <input type="text" placeholder='Full Name' required />
                                    {/* <span>Full Name</span> */}
                                </div>
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
                                <div className='registration-field'>
                                    {
                                        passwordToggle == 'hide' ?
                                            <input type="password" placeholder='Confirm Password' required />
                                            :
                                            <input type="text" placeholder='Confirm Password' required />
                                    }
                                    {/* <span>Confirm Password</span> */}
                                    {
                                        passwordToggle == 'hide' ? <FaRegEyeSlash onClick={() => handlePasswordToggle('show')} /> : passwordToggle == 'show' ? <FaRegEye onClick={() => handlePasswordToggle('hide')} /> : ''
                                    }
                                </div>
                                <p className='terms-conditions'>By signing up, you agree to our <Link>terms</Link> and <Link>conditions</Link></p>
                                <button className='signup-btn' type="submit">Sign Up</button>
                                <p className='terms-conditions already-login'>Already have an account? <Link to="/login">Login Here</Link></p>
                                {/* <div className="OR">
                                    <span>OR</span>
                                </div> */}
                            </form>
                        </div>
                        <div className={`registration-main-content instructor-registration ${roleToggle !== 'Instructor' ? 'hide-instructor' : ''}`}>
                            <h3>Sign up and start teaching</h3>
                            <form action="">
                                <div className='registration-field'>
                                    <input type="text" placeholder='Full Name' required />
                                    {/* <span>Full Name</span> */}
                                </div>
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
                                <div className='registration-field'>
                                    {
                                        passwordToggle == 'hide' ?
                                            <input type="password" placeholder='Confirm Password' required />
                                            :
                                            <input type="text" placeholder='Confirm Password' required />
                                    }
                                    {/* <span>Confirm Password</span> */}
                                    {
                                        passwordToggle == 'hide' ? <FaRegEyeSlash onClick={() => handlePasswordToggle('show')} /> : passwordToggle == 'show' ? <FaRegEye onClick={() => handlePasswordToggle('hide')} /> : ''
                                    }
                                </div>
                                <p className='terms-conditions'>By signing up, you agree to our <Link>terms</Link> and <Link>conditions</Link></p>
                                <button className='signup-btn' type="submit">Sign Up</button>
                                <p className='terms-conditions already-login'>Already have an account? <Link to="/login">Login Here</Link></p>
                                {/* <div className="OR">
                                    <span>OR</span>
                                </div> */}
                            </form>
                        </div>

                    </div>
                    <div className="registration-image">
                        <img src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4685.jpg?w=740&t=st=1698079097~exp=1698079697~hmac=50d5bc271455752b3f7b7a80ad19688fe62cc2b9671a868dd7c1b806d6955916" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;