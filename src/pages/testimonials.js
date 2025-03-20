import React, { useEffect } from 'react';
import TestimonialsLandingPage from '../components/testimonials/TestimonialsLandingPage';
import '../ui/testimonials.css'
import CallToAction from '../ui/CallToAction';
import Faqs from '../components/testimonials/Faqs';
import { RiUserLocationFill } from 'react-icons/ri';

const Testimonials = () => {
    const location = RiUserLocationFill();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behaviour: "smooth"
        })
    }, [location.pathname])
    return (
        <>
            <TestimonialsLandingPage />
            <Faqs />
            <CallToAction />
        </>
    );
};

export default Testimonials;