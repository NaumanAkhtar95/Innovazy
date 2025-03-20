import React from 'react';
import { container, headingText, textwhite } from '../styles/styles';
import PrimaryButton from "./PrimaryButton";
import CallIcon from "../assets/icons/callIcon.png";
import SecondaryButton from './SecondaryButton';
import "../components/hero/hero.css";
import { useTranslation } from 'react-i18next';

const CallToAction = () => {
    const {t} = useTranslation()
    // const { language } = useLanguage();
    return (
        <div className='relative h-[600px] grid'>
            <div className='ctaGradientBlobLeft'>
                <div className='ctaGradientBlobMid'>
                    <div className='ctaGradientBlobRight'>
                        <div className={`${container} mt-[120px]`}>
                            <div className="card rounded-2xl background-glass w-[100%] flex flex-wrap items-center justify-between p-[40px] md:p-[90px]">
                                <h1 className={`${textwhite} ${headingText} w-[100%] lg:w-[55%] text-start`}>{t('cta',{ns:"common"})}</h1>
                                <div className='flex flex-wrap gap-5 w-[100%] lg:w-[40%] mt-10 lg:mt-0 items-center justify-start lg:justify-between '>
                                    <a href='tel:305-501-8021' className='pointer' aria-label='phone'>
                                        <PrimaryButton image={CallIcon} btnText="(305)-501-8021" imageAlt="Call Innovazy for further quries" />
                                    </a>
                                    <a href="/#contact-us" role="button" rel="noreferrer" aria-label="Contact">
                                        <SecondaryButton btnText={t("buttons.contactUs",{ns:"common"})} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;