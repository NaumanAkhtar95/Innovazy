import React from 'react';
import { container } from '../../styles/styles';
import UIUXLandingPage from '../../components/uiux/UIUXLandingPage';
import UIUXKnownFor from '../../components/uiux/UIUXKnownFor';
import UiUxExcellence from '../../components/uiux/UiUxExcellence';
import CallToAction from '../../ui/CallToAction';
import UIUXHighEndPerformance from '../../components/uiux/UIUXHighEndPerformance';
import '../../ui/services.css'
const UIUX = () => {
    return (
        <>
        <div className={`${container} mt-[130px]`}>
          <UIUXLandingPage/>
          <UIUXKnownFor/>
          <UiUxExcellence/>
          <UIUXHighEndPerformance/>
        </div>
          <CallToAction/>
        </>
    );
};

export default UIUX;