import React, { useEffect } from 'react';
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles';
import ForwardArrow from "../../assets/icons/forwardArrow.png";
import Microsoft from "../../assets/images/microsoftLogo.png";
import CallIcon from "../../assets/icons/callIcon.png";
import PrimaryButton from '../../ui/PrimaryButton';
import SecondaryButton from '../../ui/SecondaryButton';
import "./hero.css";
import { PopupModal } from "react-calendly";
import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'react-i18next';
import { language } from 'gray-matter';
import { useLanguage } from '../../context/LanguageContext';

const HomeSection = () => {
    const { t } = useTranslation("home");
    const [showModal, setModal] = React.useState(false);
    const handleClick = () => {
        setModal(true);
    };
 const {i18n} =    useTranslation()
 const language = i18n.language;

    useEffect(() => {
        document.addEventListener("mousemove", parallax);
        
        function parallax(e) {
            const objects = document.querySelectorAll(".object");
            if (objects) {
                objects.forEach((move) => {
                    const movingValue = move.getAttribute("data-value");
                    const x = (e.clientX * movingValue) / 150;
                    const y = (e.clientY * movingValue) / 150;
                    move.style.transform = `translateX(${x}px) translateY(${y}px)`;
                });
            }
        }

        return () => {
            document.removeEventListener("mousemove", parallax);
        };
    }, []);

    return (
        <div className='homeSectionleftBlob'>
            <div className='homeSectionRightBlob'>
                <div className={`${container}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between">
    <div className='w-full'>
        <h1 className={`${textwhite} ${headingText} w-full sm:w-[100%] font-medium`}>
        {t("sectionOne.mainHeading")}
        </h1>
        <p className={`w-full sm:w-[75%] mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}>
          {t("sectionOne.description")}
        </p>
        <div className="flex flex-wrap gap-3 sm:gap-0 mt-8">
            <button onClick={handleClick} aria-label="Get Consultation">
                <PrimaryButton btnText={t("buttons.primaryButton", { ns: 'common' })}image={ForwardArrow} imageAlt="Get Consultation" />
            </button>
            <a href="/#contact-us" role="button" rel="noreferrer" aria-label="Contact">
                <SecondaryButton btnText={t('buttons.secondaryButton', { ns: 'common' })} image={CallIcon} imageAlt="Talk to us" />
            </a>
        </div>
    </div>
    <div className=' flex justify-center'>

    <img
        data-value="8"
        className={`object h-[90%] w-[90%] hidden md:block z-10 cursor-pointer transition-all ease-linear ${language === "en"?"":"mr-20"}`}
        src={require('../../assets/images/heroBall.svg').default}
        alt='Innovative ball'
        />
        </div>
</div>

                    <div className='mt-7'>
                        <p className={`${textwhite} text-[14px] font-semibold mt-4`}>{t("sectionOne.affiliatedWith")}</p>
                        <img className='mt-2 w-[150px] h-fit' src={Microsoft} alt="Innovazy Affiliated with Microsoft"></img>
                    </div>

                    {
                        typeof window !== 'undefined' ?
                            <PopupModal
                                open={showModal}
                                onModalClose={() => setModal(false)}
                                url="https://calendly.com/innovazy/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=151414&text_color=ffffff&primary_color=f17840"
                                rootElement={document.getElementById("___gatsby")}
                            />
                            :
                            ''
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeSection;