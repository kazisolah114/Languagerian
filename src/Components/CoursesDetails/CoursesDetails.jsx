import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import './CoursesDetails.css'
import Rating from 'react-rating';
import { FaGlobe, FaRegStar, FaStar } from 'react-icons/fa';

const CoursesDetails = () => {
    const { id } = useParams();
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch('/courses.json')
            .then(res => res.json())
            .then(data => {
                const filteredCourse = data.find(item => item._id === id);
                setCourse(filteredCourse)
            })
    }, [id])
    console.log(course)

    return (
        <div className='course-details-page'>
            <div className="course-details-container container">
                <div className='course-details-content'>
                    <div className="course-details">
                        <div className="course-details-header">
                            <h1>{course.course_title}</h1>
                            <p className='course-headline'>A practical language course for office workers, academics, and administrators who want to improve their productivity.</p>
                            <p className='course-instructor'>Instructor: {course.instructor}</p>
                            <div className="course-category">
                                <img src={course.course_image} alt="" />
                                <p>Course category: {course.course_name}</p>
                            </div>
                            <div className='rating-students'>
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

                                <p>{course.purchases} students</p>

                            </div>
                            <div className='date-language'>
                                <p>Posted on {course.course_posted_date}</p>
                                <p><FaGlobe /> {course.course_language}</p>
                            </div>
                        </div>
                        <div className="course-details-main">
                            <div>
                                <b>Course Details</b>
                                <p>{course.course_details}</p>
                            </div>
                            <div>
                                <b>Pre-requirements</b>
                                <p>{course.course_requirements}</p>
                            </div>
                        </div>
                    </div>
                    <div className="course-buy">
                        <div className="course-buy-banner">
                            <img src={course.course_banner} alt="" />
                        </div>
                        <div className="price">
                            <div>
                                <h2>${course.price}</h2>
                                <p><del>${(course.price + course.price * 0.3).toFixed(2)}</del> 30% off</p>
                            </div>
                            <div>
                                <p>YAY, you are one step away from learning {course.course_name}</p>
                            </div>
                        </div>
                        <div className="course-buy-btns">
                            <button className='course-btn course-cart-btn'>Add to cart</button>
                            <button className='course-btn course-buy-btn'>Buy Now</button>
                        </div>

                    </div>
                </div>
                <div className="browse-more-course" style={{ display: 'grid', gridTemplateColumns: 'auto 420px', gap: '20px' }}>
                    <Link to="/courses"><button>Browse More</button></Link>
                    <h1></h1>
                </div>
            </div>
        </div>
    );
};

export default CoursesDetails;