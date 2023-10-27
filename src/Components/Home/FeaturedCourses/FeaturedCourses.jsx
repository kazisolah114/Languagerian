import React, { useEffect, useState } from 'react';
import { FaRegHeart, FaRegStar, FaRegUserCircle, FaStar } from "react-icons/fa";
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './FeaturedCourses.css'

const FeaturedCourses = () => {

    const [featuredCourses, setFeaturedCourses] = useState([]);
    useEffect(() => {
        fetch('/courses.json')
            .then(res => res.json())
            .then(data => {
                const filteredCourses = data.sort((a, b) => b.rating - a.rating)
                setFeaturedCourses(filteredCourses)
            })
    }, [])

    console.log(featuredCourses)

    return (
        <div className='featured-courses courses'>
            <div className="featured-courses-container container courses-container">
                <div className="section-header">
                    <h2>Top Rated Courses</h2>
                </div>
                <div className="featured-courses-content courses-content">
                    <div className="featured-course-item courses-item">
                        {
                            featuredCourses.slice(0, 6).map(course => <div key={course._id}>
                                <div className="item-banner">
                                    <img src={course.course_banner} alt="" />
                                </div>
                                <div className="item-text">
                                    <h3>{course.course_title} with {course.instructor}</h3>
                                    <p><FaRegUserCircle /> {course.instructor}</p>
                                    <div>
                                        <Rating className='course-rating'
                                            readonly
                                            placeholderRating={course.rating}
                                            emptySymbol={<FaRegStar />}
                                            placeholderSymbol={<FaStar />}
                                            fullSymbol={<FaStar />}
                                        />
                                        <h5>{course.rating}</h5>
                                    </div>
                                    <div className='price-wishlist'>
                                        <h4>USD {course.price}</h4>
                                        <FaRegHeart />
                                    </div>
                                </div>
                                <Link to={`/coursedetails/${course._id}`}>View Details</Link>
                            </div>)
                        }
                    </div>
                    <div className="featured-courses-button">
                        <Link to="/courses"><button>Explore More</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCourses;