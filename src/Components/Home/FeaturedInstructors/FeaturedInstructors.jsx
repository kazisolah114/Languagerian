import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaFacebookSquare, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './FeaturedInstructors.css'

const FeaturedInstructors = () => {
    const [featuredInstructors, setFeaturedInstructors] = useState([]);
    useEffect(() => {
        fetch('/instructors.json')
            .then(res => res.json())
            .then(data => {
                setFeaturedInstructors(data);
            })
    }, [])
    console.log(featuredInstructors)
    return (
        <div className="instructors-container instructors">
            <div className="featured-insturctors-container instructors-container container">
                <div className="section-header">
                    <h2>Featured Instructors</h2>
                </div>
                <div className="featured-instructors-content instructors-content">
                    {
                        featuredInstructors.slice(0, 4).map(instructor => <div key={instructor._id}>
                            <div className="instructor-item">
                                <div className="instructor-img">
                                    <img src={instructor.instructor_image} alt="" />
                                </div>
                                <div className="instructor-info">
                                    <h3>{instructor.instructor_name}</h3>
                                    <p className='instructor-email'>{instructor.instructor_email}</p>
                                    <p>{instructor.instructor_title}</p>
                                    <p>{instructor.instructor_name} has {instructor.number_of_courses} courses</p>
                                    <div>
                                    <div className="instructor-social">
                                        <Link to={instructor.instructor_linkedin}><FaLinkedinIn /></Link>
                                        <Link to={instructor.instructor_facebook}><FaFacebookF /></Link>
                                    </div>

                                        <button className='view-courses-btn'>View Courses</button>

                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div className="featured-instructors-btn">
                    <Link to="/instructors"><button>Find More</button></Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedInstructors;