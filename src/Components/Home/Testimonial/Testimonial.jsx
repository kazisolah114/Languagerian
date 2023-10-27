import BearCarousel from 'bear-react-carousel';
import 'bear-react-carousel/dist/index.css';
import React, { useEffect, useState } from 'react';
import './Testimonial.css';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";



const Testimonial = () => {

    const [testimonial, setTestimonial] = useState([]);
    useEffect(() => {
        fetch('/testimonial.json')
            .then(res => res.json())
            .then(data => setTestimonial(data))
    }, [])
    console.log(testimonial)


    const data = testimonial.map(item => {
        return {
            key: item.id,
            // BearSlideImage or BearSlideCard
            // children: <BearSlideImage imageUrl={row.imageUrl}/>
            children: <TestimonialItem item={item} />
        };
    });

    const CustomBanner = () => {
        return <BearCarousel
            data={data}
            // height="350px"
            isEnableLoop
            slidesPerView={2}
            isEnableNavButton

            // isEnablePagination
            // isDebug
            // isCenteredSlides
        />
    }

    return (
        <div className='testimonial-section'>
            <div className="testimonial-container container">
                <div className="section-header">
                    <h2>Words From Previous Clients</h2>
                </div>
                <div className="testimonial-content">
                    
                    <CustomBanner />
                    


                </div>
            </div>
        </div>
    );
};

export default Testimonial;



const TestimonialItem = ({ item }) => {
    return (
        <div className='testimonial-item' key={item.id}>
            <FaQuoteLeft className='quote-left' />
            <div className="item-container">
                <p>{item.testimonial.slice(0, 190)}...</p>
                <div className='testimonial-user'>
                    <img src={item.image} alt="" />
                    <div>
                        <h5>{item.name}</h5>
                        <p>{item.position}</p>
                    </div>
                </div>
            </div>
            <FaQuoteRight className='quote-right' />
        </div>
    )
}