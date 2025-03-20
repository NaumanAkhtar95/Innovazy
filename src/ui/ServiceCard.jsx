import { Link } from 'gatsby';
import React from 'react';
import { paragraphTextColor } from '../styles/styles';
import SecondaryButton from './SecondaryButton';
import PrimaryButton from './PrimaryButton';
import ForwardArrow from "../assets/icons/forwardArrow.png";
import { useTranslation } from 'react-i18next';

const ServiceCard = ({ fontClassName, title, description, className, link }) => {
    const {t} = useTranslation();
    return (
        <div className={`card background-glass px-8 py-10 rounded-xl mt-6 col-span-4 ${className}`}>
            <i className={`${fontClassName}`}></i>
            <h2 className='text-[24px] font-semibold text-white mb-5'>{title}</h2>
            <p className={`w-[100%] ${paragraphTextColor} leading-7 text-[14px] mb-8`}>{description}</p>
            <Link to={link}>
                {/* <SecondaryButton btnText="Read More" classBtn="!px-10 !h-[45px] text-[13px]" /> */}
                <PrimaryButton btnText={t("buttons.readMore",{ns:"common"})} image={ForwardArrow} imageAlt="Read More" />
            </Link>
        </div>
    );
};

export default ServiceCard;