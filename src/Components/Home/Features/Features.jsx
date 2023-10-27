import React from 'react';
import { Link } from 'react-router-dom';
import './Features.css'
import { HiOutlineChevronRight } from "react-icons/hi";

const Features = () => {
    return (
        <div className='features-section'>
            <div className="features-container container">
                <div className="features-content">

                    <div className="feature-item">
                        <img src="https://scdn.italki.com/ng/static/image/asgardhp/offers_01.png" alt="" />
                        <h4>Find Desired Courses</h4>
                        <p>Find the course you were looking for and learn your desired language.</p>
                        <Link to="/courses">View Courses <HiOutlineChevronRight /></Link>
                    </div>
                    <div className="feature-item">
                        <img src="https://scdn.italki.com/ng/static/image/asgardhp/offers_04.png" alt="" />
                        <h4>Proffesional Teachers</h4>
                        <p>Find the course you were looking for and learn your desired language.</p>
                        <Link to="/instructors">Explore Teachers <HiOutlineChevronRight /></Link>
                    </div>
                    <div className="feature-item">
                        <img src="https://scdn.italki.com/ng/static/image/asgardhp/offers_02.png" alt="" />
                        <h4>Create Free Account</h4>
                        <p>Find the course you were looking for and learn your desired language.</p>
                        <Link to="/register">Create Account <HiOutlineChevronRight /></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Features;