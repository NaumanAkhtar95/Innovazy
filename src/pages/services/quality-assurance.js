import React from 'react';
import { container } from '../../styles/styles';
import QALandingPage from '../../components/qualityAssurance/QALandingPage';
import QAChooseInnovazy from '../../components/qualityAssurance/QAChooseInnovazy';
import QAServices from '../../components/qualityAssurance/QAServices';
import CallToAction from '../../ui/CallToAction';

const QualityAssurance = () => {
    return (
        <>
        <div className={`${container} mt-[130px]`}>
          <QALandingPage/>
          <QAChooseInnovazy/>
          <QAServices/>
        </div>
          <CallToAction/>
        </>
    );
};

export default QualityAssurance;