import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';

const SecondaryButton = ({ image, btnText, imageAlt, classBtn }) => {
    // const { language } = useLanguage();
const {i18n} =    useTranslation()
const language = i18n.language;

    return (
        <div>
            <button className={`button-secondary flex items-center transition-all duration-500 bg-gradient-to-tl to-[#1c1c1c]/30 via-[#080808]/60 from-[#313131]/25 bg-size-200 bg-pos-0 hover:bg-pos-100 text-[12px] sm:text-[16px] ${classBtn}`}>{image && <img className={`h-[15px]  ${language === "en"?'mr-4':'ml-4'}`} src={image} alt={imageAlt}></img>} {btnText}</button>
        </div>
    );
};

export default SecondaryButton;