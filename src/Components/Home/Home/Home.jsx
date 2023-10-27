import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedCourses from '../FeaturedCourses/FeaturedCourses';
import FeaturedInstructors from '../FeaturedInstructors/FeaturedInstructors';
import Features from '../Features/Features';
import Testimonial from '../Testimonial/Testimonial';
import FAQ from '../FAQ/FAQ';

const Home = () => {
    return (
        <main>
            <Banner />
            <FeaturedCourses />
            <FeaturedInstructors />
            <Features />
            <Testimonial />
            <FAQ />
        </main>
    );
};

export default Home;
