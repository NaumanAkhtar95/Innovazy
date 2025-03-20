import React from 'react';
import MDLandingPage from '../../components/mobileDevelopment/MDLandingPage';
import MDServicesPlatforms from '../../components/mobileDevelopment/MDServicesPlatforms';
import MDKeyFoucses from '../../components/mobileDevelopment/MDKeyFoucses';
import MDInnovazyBestChoice from '../../components/mobileDevelopment/MDInnovazyBestChoice';
import '../../ui/services.css'

const MobileDevelopment = () => {
    return (
        <>
      <MDLandingPage/>
      <MDServicesPlatforms/>
      <MDKeyFoucses/>
      <MDInnovazyBestChoice/>
        </>
    );
};

export default MobileDevelopment;