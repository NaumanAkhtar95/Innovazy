import React from 'react';
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles';
import Spotlight from '../../ui/SpotlightEffect';
import { aboutData } from '../../utils/about-data';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
    const { t } = useTranslation("home");
    const aboutData = [
        { title: t('sectionTwo.cards.cardOne.title'), description: t('sectionTwo.cards.cardOne.desc') },
        { title: t('sectionTwo.cards.cardTwo.title'), description: t('sectionTwo.cards.cardTwo.desc') },
        { title: t('sectionTwo.cards.cardThree.title'), description: t('sectionTwo.cards.cardThree.desc') },
        { title: t('sectionTwo.cards.cardFour.title'), description: t('sectionTwo.cards.cardFour.desc') }
    ];
    return (
        <div className={`${container} mt-[120px]`}>
            <h1 className={`${textwhite} ${headingText} w-[100%] text-start md:text-center`}>{t('sectionTwo.mainHeading')}</h1>
            <p className={`w-[100%] md:w-[65%] mx-auto mt-5 ${paragraphTextColor} text-start md:text-center text-[14px] sm:text-[16px] leading-7`}>{t('sectionTwo.description')}</p>
            <Spotlight data={aboutData} />
        </div>
    );
};

export default AboutSection;