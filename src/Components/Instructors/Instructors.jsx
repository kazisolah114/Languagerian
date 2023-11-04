import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaFacebookSquare, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Instructors.css'

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('/instructors.json')
            .then(res => res.json())
            .then(data => {
                setInstructors(data);
            })
    }, [])
    console.log(instructors)
    return (
        <div className='instructors'>
            <div className="instructors-container container">
                <div className="section-header">
                    <h2>Meet the instructors</h2>
                </div>
                <div className="instructors-content">
                    {
                        instructors.map(instructor => <div key={instructor._id}>
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
                                            <Link to={`https://www.${instructor.instructor_linkedin}`} target='_blank'><FaLinkedinIn /></Link>
                                            <Link to={`https://www.${instructor.instructor_facebook}`} target='_blank'><FaFacebookF /></Link>
                                        </div>

                                        <button className='view-courses-btn'>View Courses</button>

                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Instructors;