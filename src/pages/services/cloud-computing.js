import React from 'react';
import CCLandingPage from '../../components/cloudComputing/CCLandingPage';
import CCAccompanies from '../../components/cloudComputing/CCAccompanies';
import { container } from '../../styles/styles';
import CCExcitesClients from '../../components/cloudComputing/CCExcitesClients';
import CCServices from '../../components/cloudComputing/CCServices';
import CCOffer from '../../components/cloudComputing/CCOffer';
import CallToAction from '../../ui/CallToAction';

const CloudComputing = () => {
    return (
        <>
         <div className={`${container} mt-[130px]`}>

       <CCLandingPage/>
       <CCAccompanies/>
       <CCExcitesClients/>
       <CCServices/>
       <CCOffer/>
         </div>
       <CallToAction/>
        </>
    );
};

export default CloudComputing;