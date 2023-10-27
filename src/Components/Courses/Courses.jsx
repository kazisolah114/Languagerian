import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import './Courses.css';
import { FaRegHeart, FaRegStar, FaRegUserCircle, FaStar } from "react-icons/fa";
import Rating from 'react-rating';
import { Link, useParams } from 'react-router-dom';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [activeCourse, setActiveCourse] = useState('All Courses')
    useEffect(() => {
        fetch('/courses.json')
            .then(res => res.json())
            .then(data => {
                setCourses(data)
            })
    }, [])

    const handleActiveCourse = (activeItem) => {
        setActiveCourse(activeItem);
    }


    return (
        <div className='courses'>
            <div className="courses-container container">
                <Tabs className="courses-content">
                    <TabList className="courses-menu">
                        <Tab onClick={(event) => handleActiveCourse(event.target.textContent)} className={`${activeCourse == "All Courses" ? 'active-course' : ''}`}>All Courses</Tab>
                        <Tab onClick={(event) => handleActiveCourse(event.target.textContent)} className={`${activeCourse == "English" ? 'active-course' : ''}`}>English</Tab>
                        <Tab onClick={(event) => handleActiveCourse(event.target.textContent)} className={`${activeCourse == "Spanish" ? 'active-course' : ''}`}>Spanish</Tab>
                        <Tab onClick={(event) => handleActiveCourse(event.target.textContent)} className={`${activeCourse == "German" ? 'active-course' : ''}`}>German</Tab>
                        <Tab onClick={(event) => handleActiveCourse(event.target.textContent)} className={`${activeCourse == "French" ? 'active-course' : ''}`}>French</Tab>
                        <Tab onClick={(event) => handleActiveCourse(event.target.textContent)} className={`${activeCourse == "Japanese" ? 'active-course' : ''}`}>Japanese</Tab>
                        <Tab onClick={(event) => handleActiveCourse(event.target.textContent)} className={`${activeCourse == "Italian" ? 'active-course' : ''}`}>Italian</Tab>
                        <Tab onClick={(event) => handleActiveCourse(event.target.textContent)} className={`${activeCourse == "Chinese" ? 'active-course' : ''}`}>Chinese</Tab>
                        <Tab onClick={(event) => handleActiveCourse(event.target.textContent)} className={`${activeCourse == "Bengali" ? 'active-course' : ''}`}>Bengali</Tab>
                    </TabList>

                    <TabPanel className="courses-item">
                        {
                            courses.map(course => <div key={course._id}>
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
                    </TabPanel>
                    <TabPanel className="courses-item">
                        {
                            courses.filter(course => course.course_name === "English").map(course => <div key={course._id}>
                                <div className="item-banner">
                                    <img src={course.course_banner} alt="" />
                                </div>
                                <div className="item-text">
                                    <h3>{course.course_title} with {course.instructor}</h3>
                                    <p><FaRegUserCircle /> {course.instructor}</p>
                                    <div>
                                        <Rating className='course-rating'
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
                    </TabPanel>
                    <TabPanel className="courses-item">
                        {
                            courses.filter(course => course.course_name === "Spanish").map(course => <div key={course._id}>
                                <div className="item-banner">
                                    <img src={course.course_banner} alt="" />
                                </div>
                                <div className="item-text">
                                    <h3>{course.course_title} with {course.instructor}</h3>
                                    <p><FaRegUserCircle /> {course.instructor}</p>
                                    <div>
                                        <Rating className='course-rating'
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
                    </TabPanel>
                    <TabPanel className="courses-item">
                        {
                            courses.filter(course => course.course_name === "German").map(course => <div key={course._id}>
                                <div className="item-banner">
                                    <img src={course.course_banner} alt="" />
                                </div>
                                <div className="item-text">
                                    <h3>{course.course_title} with {course.instructor}</h3>
                                    <p><FaRegUserCircle /> {course.instructor}</p>
                                    <div>
                                        <Rating className='course-rating'
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
                    </TabPanel>
                    <TabPanel className="courses-item">
                        {
                            courses.filter(course => course.course_name === "French").map(course => <div key={course._id}>
                                <div className="item-banner">
                                    <img src={course.course_banner} alt="" />
                                </div>
                                <div className="item-text">
                                    <h3>{course.course_title} with {course.instructor}</h3>
                                    <p><FaRegUserCircle /> {course.instructor}</p>
                                    <div>
                                        <Rating className='course-rating'
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
                    </TabPanel>
                    <TabPanel className="courses-item">
                        {
                            courses.filter(course => course.course_name === "Japanese").map(course => <div key={course._id}>
                                <div className="item-banner">
                                    <img src={course.course_banner} alt="" />
                                </div>
                                <div className="item-text">
                                    <h3>{course.course_title} with {course.instructor}</h3>
                                    <p><FaRegUserCircle /> {course.instructor}</p>
                                    <div>
                                        <Rating className='course-rating'
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
                    </TabPanel>
                    <TabPanel className="courses-item">
                        {
                            courses.filter(course => course.course_name === "Italian").map(course => <div key={course._id}>
                                <div className="item-banner">
                                    <img src={course.course_banner} alt="" />
                                </div>
                                <div className="item-text">
                                    <h3>{course.course_title} with {course.instructor}</h3>
                                    <p><FaRegUserCircle /> {course.instructor}</p>
                                    <div>
                                        <Rating className='course-rating'
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
                    </TabPanel>
                    <TabPanel className="courses-item">
                        {
                            courses.filter(course => course.course_name === "Chinese").map(course => <div key={course._id}>
                                <div className="item-banner">
                                    <img src={course.course_banner} alt="" />
                                </div>
                                <div className="item-text">
                                    <h3>{course.course_title} with {course.instructor}</h3>
                                    <p><FaRegUserCircle /> {course.instructor}</p>
                                    <div>
                                        <Rating className='course-rating'
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
                    </TabPanel>
                    <TabPanel className="courses-item">
                        {
                            courses.filter(course => course.course_name === "Bengali").map(course => <div key={course._id}>
                                <div className="item-banner">
                                    <img src={course.course_banner} alt="" />
                                </div>
                                <div className="item-text">
                                    <h3>{course.course_title} with {course.instructor}</h3>
                                    <p><FaRegUserCircle /> {course.instructor}</p>
                                    <div>
                                        <Rating className='course-rating'
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
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Courses;