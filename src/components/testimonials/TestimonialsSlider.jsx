import React, { useState } from 'react';
import {  paragraphTextColor } from '../../styles/styles';
import { Carousel } from 'primereact/carousel';
import { testimonials } from '../../utils/testimonials-data';
import Testimonial from "../../assets/icons/quote.png";
import { useTranslation } from 'react-i18next';

const TestimonialsSlider = () => {
    const [autoplayInterval,setAutoplayInterval] = useState(3000)
    const {t} = useTranslation("testimonials");
    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '480px',  // For smaller screens like mobile devices
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '360px',  // For very small screens
            numVisible: 1,
            numScroll: 1
        }
    ];


    const handleMouseEnter = () => {
        setAutoplayInterval(0)
    }
    const handleMouseLeave = () => {
setAutoplayInterval(3000)
    }

    const reviewTemplate = (review) => {
        return (
            <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='card border-l-2 border-primary-orange testimonial_card background-glass relative my-7 p-8 w-[90%] mx-auto' id={review.id} style={{ borderRadius: "50px 20px" }}>
            <div className="testi_circle " style={{ borderRadius: "50px 20px" }}></div>
                <div className='grid '>
                    <div className='flex items-center justify-between z-50'>
                        <span className='h-[1px] bg-[#262626] w-[100px]'></span>
                        <img className='h-[38px] w-[38px] mr-4' src={Testimonial} alt='Testimonials' />
                        <span className='h-[1px] bg-[#262626] w-[100px]'></span>
                    </div>
                    
                    <p className={`font-normal text-primary-lighter text-[15px] italic pt-5 w-[100%] ${paragraphTextColor} z-50 hover:text-white`}>{review.message}</p>
                    {/* <span className='text-right mt-5 italic font-medium text-[15px] text-white z-50 hover:text-white'>- {review.name}</span> */}
                    <div className="category text-primary-orange mt-5 text-2xl flex items-center justify-between">
                    {review.category}

                    <h4 className='text-right  italic font-medium text-[15px] text-white z-50 hover:text-white'>- {review.name}</h4>

                    </div>
                </div>
            </div>
        );
    };

    return (
        
            
            <Carousel
                pt={{
                    indicators: { className: "h-[30px] hidden sm:flex w-[5%] flex justify-between mx-auto mt-5" },
                    indicatorButton: { className: "rounded-full h-[14px] w-[14px] bg-sky-600" },
                    nextButton: {
                        style: { height: "35px", width: "35px", borderRadius: "50%" },
                        className: "background-glass text-white hidden sm:flex"
                    },
                    previousButton: {
                        style: { height: "35px", width: "35px", borderRadius: "50%" },
                        className: "background-glass text-white hidden sm:flex"
                    },
                }}
                showIndicators={false}
                showNavigators={true}
                autoplayInterval={autoplayInterval} value={testimonials} numVisible={3} numScroll={1}
                responsiveOptions={responsiveOptions} itemTemplate={reviewTemplate} circular />
        
    );
};

export default TestimonialsSlider;