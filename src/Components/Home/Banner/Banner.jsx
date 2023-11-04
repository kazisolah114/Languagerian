import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Banner.css'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/autoplay';
import { useMediaQuery } from 'react-responsive';



const Banner = () => {
    const mediumScreen = useMediaQuery({ query: '(max-width: 1268px)' });
    const mobileScreen = useMediaQuery({ query: '(max-width: 628px)' });
    console.log(mobileScreen)
    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    // Banner Course Data
    const [courseData, setCourseData] = useState([]);
    const [courseCount, setCourseCount] = useState({});
    const uniqueCourse = [...new Set(courseData.map(data => data.course_name))];
    useEffect(() => {
        fetch('/courses.json')
            .then(res => res.json())
            .then(data => {
                setCourseData(data);

                const newCourseCount = {};
                data.forEach(item => {
                    const courseName = item.course_name;
                    if (newCourseCount[courseName]) {
                        newCourseCount[courseName]++;
                    } else {
                        newCourseCount[courseName] = 1;
                    }
                })
                setCourseCount(newCourseCount)
            });
    }, []);




    return (
        <div className='banner-section'>
            <div className="banner-container">

                <Slider {...settings}>
                    <div className='banner-content container banner1'>
                        <div className="text-content">
                            <h2>Become fluent in your desired languages</h2>
                            <ul>
                                <li>Learn languages in a fun way</li>
                                <li>Choose courses from your favorite instructors</li>
                                <li>Find quality language courses at low price</li>
                            </ul>
                        </div>
                        <div className="img-content">
                            <img src="https://img.freepik.com/premium-photo/elearning-online-translator-concept-learning-languages-online-laptop-book-flags_505080-1288.jpg?w=900" alt="" />
                        </div>
                    </div>
                    <div className='banner-content container banner2'>
                        <div className="text-content">
                            <h2>Learning languages is always worth it</h2>
                            <ul>
                                <li>Learn languages in a fun way</li>
                                <li>Choose courses from your favorite instructors</li>
                                <li>Find quality language courses at low price</li>
                            </ul>
                        </div>
                        <div className="img-content">
                            <img src="https://scdn.italki.com/ng/static/image/asgardhp/hp_cover_w_1.5x.webp" alt="" />
                        </div>
                    </div>

                </Slider>
                {mobileScreen
                    ?
                    <div className="course-data-banner container">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={2}
                            autoplay={true}
                            reverseDirection={true}
                            loop={true}
                        >
                            {uniqueCourse.map(courseName => {
                                const course = courseData.find(data => data.course_name === courseName);
                                return (
                                    <SwiperSlide className="course-data-item" key={course._id}>
                                        <img src={course.course_image} alt="" />
                                        <div>
                                            <h4>{course.course_name}</h4>
                                            <p>{courseCount[courseName] || 0} Courses</p>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                    :
                    mediumScreen
                    ?
                        
                        <div className="course-data-banner container">
                            <Swiper
                            
                                spaceBetween={50}
                                slidesPerView={3}
                                autoplay={true}
                                reverseDirection={true}
                                loop={true}
                            >
                                {uniqueCourse.map(courseName => {
                                    const course = courseData.find(data => data.course_name === courseName);
                                    return (
                                        <SwiperSlide className="course-data-item" key={course._id}>
                                            <img src={course.course_image} alt="" />
                                            <div>
                                                <h4>{course.course_name}</h4>
                                                <p>{courseCount[courseName] || 0} Courses</p>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    :
                       
                        <div className="course-data-banner container">
                            <Swiper
                              
                              className="mySwiper"
                                spaceBetween={50}
                                slidesPerView={4}
                                autoplay={{delay: 1000}}
                                reverseDirection={true}
                                loop={true}
                            >
                                {uniqueCourse.map(courseName => {
                                    const course = courseData.find(data => data.course_name === courseName);
                                    return (
                                        <SwiperSlide className="course-data-item" key={course._id}>
                                            <img src={course.course_image} alt="" />
                                            <div>
                                                <h4>{course.course_name}</h4>
                                                <p>{courseCount[courseName] || 0} Courses</p>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                }
            </div>
        </div>
    );
};

export default Banner;