import React from 'react';

import SDLandingPage from '../../components/softwareDevelopment/SDLandingPage';
import SDOurServices from '../../components/softwareDevelopment/SDOurServices';
import '../../ui/services.css'
import SDDevelopment from '../../components/softwareDevelopment/SDDevelopment';
import SDSoftwareSolution from '../../components/softwareDevelopment/SDSoftwareSolution';
import CallToAction from '../../ui/CallToAction';
const SoftwareDevelopment = () => {
    return (
        <>
        <SDLandingPage/>
        <SDOurServices/>
        <SDDevelopment/>
        <SDSoftwareSolution/>
        <CallToAction/>
        </>
    );
};

export default SoftwareDevelopment;