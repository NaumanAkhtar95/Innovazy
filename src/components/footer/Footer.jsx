import React from 'react';
import { container, lightTextColor, textSizeNormal } from '../../styles/styles';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import MailIcon from "../../assets/icons/mailIcon.png";
import CallIcon from "../../assets/icons/CallIconOrange.png";
import LocationIcon from "../../assets/icons/locationIcon.png";
import LinkedinIcon from "../../assets/icons/linkedinIcon.png";
import TwitterIcon from "../../assets/icons/twitterIcon.png";
import FacebookIcon from "../../assets/icons/facebookIcon.png";
import "./footer.css";
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const {t} = useTranslation("header")
    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior:"smooth"
        })
    }
    return (
        <div className={`${container} mt-[140px]`}>
            <Link to="/" className="flex items-center  sm:justify-center space-x-3 rtl:space-x-reverse">
                <StaticImage src='../../assets/logo/InnovazyWhite.png' alt="Logo" className='!w-[150px]' />
            </Link>
            <div className="flex flex-wrap items-start sm:items-center justify-between my-8 mx-auto gap-3 sm:gap-0 flex-col sm:flex-row w-[100%] sm:w-[60%] md:w-[60%] lg:w-[40%]">
                <Link to='/' className={`${textSizeNormal} text-[#B3B3B3] cursor-pointer`} onClick={handleScrollTop}>{t("home")}</Link>
                <Link to='/about-us' className={`${textSizeNormal} text-[#B3B3B3] cursor-pointer`} onClick={handleScrollTop}>{t("aboutus")}</Link>
                <Link to='/services' className={`${textSizeNormal} text-[#B3B3B3] cursor-pointer`}onClick={handleScrollTop}>{t("service")}</Link>
                <Link to='/testimonials' className={`${textSizeNormal} text-[#B3B3B3] cursor-pointer`}onClick={handleScrollTop}>{t("clientsay")}</Link>
                <Link to='/blogs' className={`${textSizeNormal} text-[#B3B3B3] cursor-pointer`}>{t("blogs")}</Link>
            </div>
            <hr className='border-[#262626]' />
            <div className="flex flex-wrap my-10 justify-between items-start sm:items-center mx-auto gap-3 sm:gap-0 flex-col sm:flex-row w-[100%] sm:w-[60%] md:w-[70%] lg:w-[50%]">
                <div className='flex items-center w-fit'>
                    <img src={MailIcon} alt="Send us a mail (Innovazy)"></img>
                    <p className={`ml-3 ${lightTextColor} leading-7 ${textSizeNormal}`}>info@innovazy.com</p>
                </div>
                <div className='flex items-center w-fit'>
                    <img src={CallIcon} alt="Give us a call (Innovazy)"></img>
                    <p className={`ml-3 ${lightTextColor} leading-7 ${textSizeNormal}`}>+91 91813 23 2309</p>
                </div>
                <div className='flex items-center w-fit'>
                    <img src={LocationIcon} alt="Location (Innovazy)"></img>
                    <p className={`ml-3 ${lightTextColor} leading-7 ${textSizeNormal}`}>Dubai, UAE</p>
                </div>
            </div>
            <hr className='border-[#262626]' />
            <div className='my-8 flex flex-wrap gap-5 justify-between items-center footer-last rounded-[10px] md:rounded-[100px]'>
                <div className='flex flex-wrap gap-4 mr-10'>
                    <a target="_blank" rel='noreferrer' aria-label='Facebook' href="https://www.facebook.com/innovazy"><span className='span-social'><img className='w-[18px]' src={FacebookIcon} alt="Innovazy Facebook"></img></span></a>
                    <a target="_blank" rel='noreferrer' aria-label='Twitter' href="https://www.twitter.com/innovazy1"><span className='span-social'><img className='w-[18px]' src={TwitterIcon} alt="Innovazy Twitter"></img></span></a>
                    <a target="_blank" rel='noreferrer' aria-label='LinkedIn' href="https://www.linkedin.com/company/innovazy-llc/"><span className='span-social'><img className='w-[18px]' src={LinkedinIcon} alt="Innovazy Linkedin"></img></span></a>
                </div>
                <p className={`${lightTextColor} leading-7 ${textSizeNormal}`}>{t("rightsReserved")}</p>
                <p className={`${lightTextColor} leading-7 ${textSizeNormal}`}><Link to='/privacy-policy'>{t("privacyPolicy")}</Link>&nbsp; <span>|</span> &nbsp;<Link to='/terms-of-service'>{t("termsService")}</Link></p>
            </div>
        </div>
    );
};

export default Footer;