import React from 'react';
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles';
import { StaticImage } from 'gatsby-plugin-image';
import '../../ui/services.css'
import { PopupModal } from 'react-calendly';
import ForwardArrow from "../../assets/icons/forwardArrow.png";
import PrimaryButton from '../../ui/PrimaryButton';
import SecondaryButton from '../../ui/SecondaryButton';
import CallIcon from "../../assets/icons/callIcon.png";
import { corporateWebDev } from '../../utils/corporate-dev-data';
import { ourApproach } from '../../utils/ourApproach-data';
import { Link } from 'gatsby';

import CallToAction from '../../ui/CallToAction'

import CustomSpotlight from '../../ui/CustomSpotlight';

import UnitingWithUs from '../../components/webDevelopment/FancyCard';
import { FaCheck } from "react-icons/fa6";
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
const WebDevelopment = () => {
    const [showModal, setModal] = React.useState(false);
    const handleClick = () => {
        setModal(true);
    };
const {t} = useTranslation("webDevelopment")
const ourApproachData = ourApproach(t)
const corporateWebDevData = corporateWebDev(t)
    return (
        <>
        <div className={`${container} mt-[130px]`}>
<div className="flex justify-center ">
            <div className="flex flex-col items-center">
              <div className="self-end">
                <div className="h-1 w-24 services_heading_success" />
              </div>

              <h1
                className={`${textwhite}   text-center uppercase tracking-wider font-[Montserrat-Bold] text-[42px] sm:text-[50px] w-[100%] font-medium`}
              >
          {t("wd.mainHeading").split(" ").map((text,index)=>(
            <React.Fragment key={index}>
                {text}
                {text === "Development" || text === "الويب" ? <br/>: " "}

            </React.Fragment>
          ))}
              </h1>
             
              <div className="self-start">
                <div className="h-1 w-24 services_heading_success" />
              </div>
            </div>
          </div>
          <h1
             className={`${textwhite} mt-28 text-[30px] sm:text-[38px] sm:w-[50%] w-[100%]  font-medium`}
           >
    
       <span className='testi-linear'> {t("wd.subHeadingSliceOne")} </span>   {t("wd.subHeadingSliceTwo")} 
           </h1>

           <p
                  className={`w-[100%] sm:w-[45%] z-10  mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}
                >
 {t("wd.desc")} 






                </p>
        
                <div className="flex flex-wrap gap-3 sm:gap-0 mt-12">
                               <button onClick={handleClick}  aria-label="Get Consultation">
                                   <PrimaryButton btnText="Get Consultation" image={ForwardArrow} imageAlt="Get Consultation" />
                               </button>
                               <a href="/#contact-us" role="button" rel="noreferrer" aria-label="Contact">
                                   <SecondaryButton btnText="Talk to us" image={CallIcon} imageAlt="Talk to us" />
                               </a>
                           </div>


            <div className={`mt-[120px]`}>
            <h1 className={`${textwhite} ${headingText} mx-auto w-[100%] text-start md:text-center`}> {t("wd.sectionOne.mainHeading")} </h1>
            <p className={`w-[100%] sm:w-[65%] mx-auto mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] text-start md:text-center leading-7`}> {t("wd.sectionOne.desc")} </p>

<CustomSpotlight data={ourApproachData}/>
            <div className='mt-10'>
                <div className="grid md:grid-cols-12 gap-4 justify-center">


                    
                </div>
            </div>
            <div className='text-center mt-14'>
                <Link to='/services'>
                    {/* <PrimaryButton btnText="Explore Services" image={ForwardArrow} imageAlt="Get Consultation" /> */}
                    <PrimaryButton image={CallIcon} btnText="(305)-501-8021" imageAlt="Call Innovazy for further quries" />
                </Link>
            </div>
        </div>


<UnitingWithUs/>



<div className="flex items-center flex-col sm:flex-row justify-between mt-28 sm:mt-0">
    <div className='border-r-2 border-primary-orange sm:mr-8 '>
            <h1
                className={`${textwhite}  text-[38px] w-[100%] sm:w-[80%] font-medium`}
              >
          {t("wd.sectionThree.mainHeadingSliceOne")}  <br/>  <span className="text-primary-orange text-[35px] capitalize"> {t("wd.sectionThree.mainHeadingSliceTwo")}
             </span>
              </h1>

              <p className={`w-[100%] sm:w-[70%] mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}>
              {t("wd.sectionThree.desc")}
                      </p>
    </div>

    <div>
    <div className=' flex sm:flex-row flex-col items-center gap-5'>
        <div className="dev-circle border-2 rounded-full border-primary-orange px-8 overflow-hidden  w-[280px] h-[280px] text-center mt-28">
            <h1 className={`${headingText} mt-10 ${textwhite}`}>01</h1>
            <h1 className={` ${textwhite} `}> {t("wd.sectionThree.circleOne.title")}</h1>
            <p className={`w-[100%]  mt-3 ${paragraphTextColor} text-[12px] `}>
            {t("wd.sectionThree.circleOne.desc")}
                      </p>
        </div>
        <div className="dev-circle border-2 rounded-full border-primary-orange px-5 overflow-hidden w-[300px] h-[300px] text-center">
            <h1 className={`${headingText} mt-10 ${textwhite}`}>02</h1>
            <h1 className={` ${textwhite} `}>{t("wd.sectionThree.circleTwo.title")}</h1>
            <p className={`w-[100%]  mt-5 ${paragraphTextColor} text-[12px] `}>
            {t("wd.sectionThree.circleTwo.desc")}
                      </p>
        </div>
    </div>

    <div className=' flex sm:flex-row flex-col  items-center gap-5'>
        <div className="dev-circle border-2 rounded-full border-primary-orange px-8 overflow-hidden w-[280px] h-[280px] text-center mt-28">
            <h1 className={`${headingText} mt-10 ${textwhite}`}>03</h1>
            <h1 className={` ${textwhite} `}>{t("wd.sectionThree.circleThree.title")}</h1>
            <p className={`w-[100%]  mt-3 ${paragraphTextColor} text-[12px] `}>
            {t("wd.sectionThree.circleThree.desc")}
                      </p>
        </div>
        <div className="dev-circle border-2 rounded-full border-primary-orange px-5 overflow-hidden w-[300px] h-[300px] text-center">
            <h1 className={`${headingText} mt-10 ${textwhite}`}>04</h1>
            <h1 className={` ${textwhite} `}>{t("wd.sectionThree.circleFour.title")}           </h1>
            <p className={`w-[100%]  mt-5 ${paragraphTextColor} text-[12px] `}>
            {t("wd.sectionThree.circleFour.desc")}
                      </p>
        </div>
    </div>
    </div>



</div>


<div className="flex sm:flex-row flex-col  justify-between gap-14 mt-32">

<div className='p-5 hidden sm:block'>
    <StaticImage src='../../assets/images/corporateWebDev.webp' alt='' className='w-full h-full cursor-pointer hover:transform hover:scale-110 transition-transform duration-300'/>
</div>

    <div className=' '>

<h1
                className={`${textwhite}  ${headingText} w-[100%]  font-medium`}
                >
       {t("wd.sectionFour.mainHeadingSliceOne")} <span className="text-primary-orange ">{t("wd.sectionFour.mainHeadingSliceTwo")}
        
             </span>
              </h1>

              <p className={`w-[100%] sm:w-[70%] my-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}>
              {t("wd.sectionFour.desc")}
                      </p>
                      {corporateWebDevData && corporateWebDevData.length>0 && corporateWebDevData.map((e,i)=> {
                        return (
<div className="flex items-center gap-4 text-primary-orange mt-3">
<FaCheck />
                      <h5 className={`${paragraphTextColor} text-[13px]`}>{e.data}</h5>
</div>

                        )
                      })}

                      
                  </div>
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
        <CallToAction/>
        </>
    );
};

export default WebDevelopment;