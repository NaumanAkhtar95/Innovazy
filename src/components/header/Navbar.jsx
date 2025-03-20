import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useCallback } from 'react';
import { container, navListItem } from '../../styles/styles';
import "./navbar.css";
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from 'react-i18next';

const Navbar = () => {

    const {t} = useTranslation("header")
    const { language, toggleLanguage } = useLanguage();
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [smallScreen, setSmallScreen] = React.useState(false);





    React.useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 768) {
                setSmallScreen(true);
            }
            else {
                setSmallScreen(false);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
            if (window.scrollY > 0) {
                document.querySelector('#navigationBar').classList.add('onScrollNav');
            }
            else {
                document.querySelector('#navigationBar').classList.remove('onScrollNav');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <div>
            <nav id='navigationBar' className={`${smallScreen ? "smallScreenNav" : ""} border-gray-200 fixed top-0 left-0 right-0 transition-all ease-in-out duration-300 z-[999] h-fit w-full bg-opacity-30 py-4`}>
                <div className={`${container} flex flex-wrap items-center justify-between mx-auto`}>
                    <Link to="/" className="flex items-end space-x-3 rtl:space-x-reverse transition-all ease-in-out">
                        <StaticImage src='../../assets/logo/InnovazyWhite.png' id='logo' alt="Logo" className={`logo ${isScrolled ? "onScrollLogo" : ""}`} />
                    </Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse block md:hidden">

                        <button data-collapse-toggle="navbar-cta" onClick={() => toggleMobileMenu()} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400" aria-controls="navbar-cta" aria-expanded={isMobileMenuOpen ? 'true' : 'false'}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>

                    <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all ease-in-out ${isMobileMenuOpen ? "" : "hidden"}`} id="navbar-cta">
                        <ul className="flex flex-col font-medium p-0 py-5 sm:py-0 sm:p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 transition-all ease-in-out float-none sm:float-left">
                            <li className='self-start md:self-center mb-4 sm:mb-0'>
                                <Link to="/" onClick={() => { setMobileMenuOpen(false); }} activeClassName="!font-semibold !text-white activeLink" className="my-2 px-3 md:p-0 text-[#9F9E9E] text-[14px] transition-all ease-in-out duration-500">{t("home")}</Link>
                            </li>
                            <li className='self-start md:self-center mb-4 sm:mb-0'>
                                <Link onClick={() => { setMobileMenuOpen(false); }} to="/about-us" activeClassName="!font-semibold !text-white activeLink" className=" my-2 px-3 md:p-0 text-[#9F9E9E] text-[14px] transition-all ease-in-out duration-500">{t("aboutus")}</Link>
                            </li>
                            <li className='self-start md:self-center mb-4 sm:mb-0'>
                                <div className="mx-auto flex w-full items-center justify-center">
                                    <div className="group relative cursor-pointer">
                                        <div className="flex items-center justify-between space-x-5">
                                            <Link onClick={() => { setMobileMenuOpen(false); }} to='/services' activeClassName="!font-semibold !text-white activeLink" className="menu-hover flex items-center justify-between w-full px-3 rounded text-[#9F9E9E] text-[14px]">{t("service")}
                                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                                </svg>
                                            </Link>
                                        </div>
                                        <div className="dropdown invisible absolute z-50 flex rounded-xl w-max flex text-gray-800 shadow-md opacity-0 transition-opacity ease-in-out duration-300 background-glass-dark">
                                            <div>
                                                <Link onClick={() => { setMobileMenuOpen(false); }} to='/services/web-development' className={`${navListItem}`}>{t("services.webappdev")}</Link>
                                                <Link onClick={() => { setMobileMenuOpen(false); }} to='/services/mobile-development' className={`${navListItem}`}>{t("services.mobileapp")}</Link>
                                                <Link onClick={() => { setMobileMenuOpen(false); }} to='/services/cloud-computing' className={`${navListItem}`}>{t("services.cloudcomputing")}</Link>
                                                <Link onClick={() => { setMobileMenuOpen(false); }} to='/services/quality-assurance' className={`${navListItem} !border-b-0`}>{t("services.qualityassurance")}</Link>
                                            </div>
                                            <div>
                                                <Link onClick={() => { setMobileMenuOpen(false); }} to='/services/software-development' className={`${navListItem}`}>{t("services.softwaredevelopment")}</Link>
                                                <Link onClick={() => { setMobileMenuOpen(false); }} to='/services/graphics-design' className={`${navListItem}`}>{t("services.graphicsdesign")}</Link>
                                                <Link onClick={() => { setMobileMenuOpen(false); }} to='/services/ui-ux' className={`${navListItem}`}>{t("services.uiuxdesign")}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='self-start md:self-center mb-4 sm:mb-0'>
                                <Link onClick={() => { setMobileMenuOpen(false); }} to="/team" activeClassName="!font-semibold !text-white activeLink" className="my-2 px-3 md:p-0 text-[#9F9E9E] text-[14px] transition-all ease-in-out duration-500">{t("team")}</Link>
                            </li>
                            <li className='self-start md:self-center mb-4 sm:mb-0'>
                                <Link onClick={() => { setMobileMenuOpen(false); }} to="/testimonials" activeClassName="!font-semibold !text-white activeLink" className="my-2 px-3 md:p-0 text-[#9F9E9E] text-[14px] transition-all ease-in-out duration-500">{t("clientsay")}</Link>
                            </li>
                            <li className='self-start md:self-center mb-4 sm:mb-0'>
                                <Link onClick={() => { setMobileMenuOpen(false); }} to="/blogs" activeClassName="!font-semibold !text-white activeLink" className="my-2 px-3 md:p-0 text-[#9F9E9E] text-[14px] transition-all ease-in-out duration-500">{t("blogs")}</Link>
                            </li>
                            <li activeClassName="!font-semibold !text-white activeLink" className='self-start md:self-center mb-4 sm:mb-0 px-3 md:p-0 text-[#9F9E9E] text-[14px] cursor-pointer transition-all ease-in-out duration-500"' onClick={toggleLanguage}>
                            {language === "en" ? "Arabic" : "English"}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;