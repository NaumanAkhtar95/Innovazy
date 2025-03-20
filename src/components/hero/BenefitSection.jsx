import React from 'react';
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles';
import Spotlight from '../../ui/SpotlightEffect';
import { benefitData } from '../../utils/benefits-data';
import { useTranslation } from 'react-i18next';

const BenefitSection = () => {
    const {t} = useTranslation();
    const benefitCardsData = benefitData(t)
    return (
        <div className={`${container} mt-[120px]`}>
            <h1 className={`${textwhite} ${headingText} w-[100%] text-start md:text-center`}>{t("sectionSix.mainHeading")}</h1>
            <p className={`w-[100%] sm:w-[65%] mx-auto mt-5 ${paragraphTextColor} text-start md:text-center leading-7 text-[14px] sm:text-[16px]`}>{t("sectionSix.desc")}</p>
            <Spotlight data={benefitCardsData} />
        </div>
    );
};

export default BenefitSection;