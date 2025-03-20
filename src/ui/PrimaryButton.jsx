import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';

const PrimaryButton = ({ image, btnText, imageAlt, classBtn, classText, fontAwesome }) => {
const {i18n} =    useTranslation()
const language = i18n.language;
    return (
        <div>
            <button className={`button-primary py-[12px] px-[5px] sm:px-[40px] relative  ${language === "en"?'mr-5':'ml-5'} overflow-hidden font-medium text-gray-600 bg-white border border-gray-100 rounded-lg shadow-inner group ${classBtn}`}>
                <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-1 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-0 group-hover:opacity-10 group-hover:translate-x-0 z-10"></span>
                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-8 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-0 group-hover:opacity-10 group-hover:translate-x-0 z-10"></span>
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-[#F17840] group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-[#F17840] group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#F17840] group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#F17840] group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gradient-to-r from-[#ff621a] from-20% via-[#f58652] via-40% to-[#b63a02] to-70% opacity-0 group-hover:opacity-40 "></span>
                    {language === "en" ? (
                        <>
                <span className={`relative transition-colors duration-300 delay-200 group-hover:text-white ease flex items-center w-full text-[12px] sm:text-[16px] ${classText}`}>{fontAwesome ? fontAwesome : ""} 
                    <p className='w-full px-4 sm:px-0'>{btnText}</p> {image &&  <img className='h-[13px] sm:h-[15px] ml-1 mr-3 sm:mr-0 sm:ml-4' src={image} alt={imageAlt}></img>}</span>
                        
                        </>
                    ) : (
                        <>
                <span className={`relative transition-colors duration-300 delay-200 group-hover:text-white ease flex items-center w-full text-[12px] sm:text-[16px] ${classText}`}>{fontAwesome ? fontAwesome : ""} 
                    <p className='w-full px-4 sm:px-0'>{btnText}</p> {image &&  <img className='h-[13px] sm:h-[15px] ml-1 mr-3 sm:mr-4 rotate-180' src={image} alt={imageAlt}></img>}</span>
                        </>
                    )
                    }
            </button>
        </div>
    );
};

export default PrimaryButton;