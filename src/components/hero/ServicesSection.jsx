import React from 'react';
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles';
import { services, servicesCardData } from '../../utils/services-data';
import ServiceCard from '../../ui/ServiceCard';
import ForwardArrow from "../../assets/icons/forwardArrow.png";
import PrimaryButton from '../../ui/PrimaryButton';
import "./hero.css";
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';

const ServicesSection = () => {
    const {t} = useTranslation();
    const servicesCards = servicesCardData(t)
    return (
        <div className={`${container} mt-[120px]`}>
            <h1 className={`${textwhite} ${headingText} mx-auto w-[100%] text-start md:text-center`}>{t("sectionFour.mainHeading")}</h1>
            <p className={`w-[100%] sm:w-[65%] mx-auto mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] text-start md:text-center leading-7`}>{t("sectionFour.desc")}</p>

            <div className='mt-10'>
                <div className="grid md:grid-cols-12 gap-4 justify-center">
                    {servicesCards.map((x) => {
                        return <>
                            <ServiceCard fontClassName={x.fontClassName} title={x.title} description={x.description} className={x.className} link={x.link} />
                        </>;
                    })}
                </div>
            </div>
            <div className='text-center mt-14'>
                <Link to='/services'>
                    <PrimaryButton btnText={t("buttons.readMore",{ns:"common"})} image={ForwardArrow} imageAlt="Get Consultation" />
                </Link>
            </div>
        </div>
    );
};

export default ServicesSection;