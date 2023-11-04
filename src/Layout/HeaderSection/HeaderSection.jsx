import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './HeaderSection.css'
import { HiMenu, HiSearch, HiX } from "react-icons/hi";

const HeaderSection = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    console.log(menuToggle)
    return (
        <header className='header-section'>
            <div className="header-container container-head-foot">
                <div className="header-content">
                    <div className="header-logo">
                        <Link to="/"><img src="https://i.ibb.co/NFB6QkH/logo.png" alt="" /></Link>
                    </div>
                    <div className="header-search">
                        <form action="">
                            <input type="text" placeholder='Korean | Spanish | French' />
                            <button type="submit"><HiSearch /> Search</button>
                        </form>
                    </div>
                    <div className="menu-toggle">
                        <h5 className='menu-toggler' onClick={() => setMenuToggle(!menuToggle)}>
                        {
                        menuToggle
                        ?
                        <HiX />
                        :
                        <HiMenu />
                        }
                        </h5>
                        
                    </div>
                    <div className={`header-menu ${menuToggle ? 'show-header-menu' : 'hide-header-menu'}`} onClick={() => setMenuToggle(false)}>
                        <ul>
                            <li><NavLink to="/" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }>Home</NavLink></li>
                            <li><NavLink to="/courses" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ''
                            }>Courses</NavLink></li>
                            <li><NavLink to="/instructors" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ''
                            }>Instructors</NavLink></li>
                            <li><NavLink to="/community" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ''
                            }>Community</NavLink></li>
                        </ul>
                        <div className="header-user-login">
                            <Link to="/login"><button className='user-button user-login-button'>Log In</button></Link>
                            <Link to="/registration"><button className='user-button user-registration-button'>Join Now</button></Link>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default HeaderSection;