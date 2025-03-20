import React from 'react';
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles';
import PrimaryButton from '../../ui/PrimaryButton';
import SecondaryButton from '../../ui/SecondaryButton';
import CallIcon from '../../assets/icons/CallIconOrange.png'
import ForwardArrow from "../../assets/icons/forwardArrow.png";
import '../../ui/services.css'
import { StaticImage } from 'gatsby-plugin-image';
import GDServices from '../../components/graphicDesigning/GDServices';
import CallToAction from '../../ui/CallToAction';
import GDProcess from '../../components/graphicDesigning/GDProcess';
import { FaCheck } from "react-icons/fa6";
import { PopupModal } from 'react-calendly';
import { useTranslation } from 'react-i18next';

const GraphicsDesign = () => {

  const [showModal, setModal] = React.useState(false);
  const handleClick = () => {
      setModal(true);
  };
  const {t} = useTranslation("graphicDesign")
    return (
     <>
       <div className="homeSectionleftBlob  mt-[150px] z-50 ">
      <div className="homeSectionRightBlob  ">
        <div className={`${container} mt-[130px]`}>
         

          <div className="flex justify-center ">
            <div className="flex flex-col items-center">
              <div className="self-end">
                <div className="h-1 w-24 services_heading_success" />
              </div>

              <h1
                className={`${textwhite}   text-center uppercase tracking-wider font-[Montserrat-Bold] text-[42px] sm:text-[50px] w-[100%] font-medium`}
              >
         {t("gd.mainHeading").split(" ").map((text,index)=>(
          <React.Fragment>
            {`${text} `}
            {text === "Design" && <br/>}
          </React.Fragment>
         ))}
              </h1>
             
              <div className="self-start">
                <div className="h-1 w-24 services_heading_success" />
              </div>
            </div>
          </div>
          <h1
             className={`${textwhite} mt-28 text-[30px] sm:text-[38px]  sm:w-[50%] w-[100%]  font-medium`}
           >
    
       <span className='testi-linear'> {t("gd.subHeadingSliceOne")} </span>{t("gd.subHeadingSliceTwo")} 
           </h1>

           <p
                  className={`w-[100%] sm:w-[45%] z-10  mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}
                >
          {t("gd.desc")} 
                </p>
        
                <div className="flex flex-wrap gap-3 sm:gap-0 mt-12">
                               <button onClick={handleClick}  aria-label="Get Consultation">
                                   <PrimaryButton btnText={t("buttons.primaryButton",{ns:"common"})} image={ForwardArrow} imageAlt="Get Consultation" />
                               </button>
                               <a href="/#contact-us" role="button" rel="noreferrer" aria-label="Contact">
                                   <SecondaryButton btnText={t("buttons.secondaryButton",{ns:"common"})} image={CallIcon} imageAlt="Talk to us" />
                               </a>
                           </div>

                           <GDServices/>
                           <GDProcess/>

<div className="flex justify-center w-full">
                           <h1 className={`${headingText} w-full  mt-28 text-white text-start md:text-center`}>{t("gd.sectionFour.mainHeading")} 
                              
</h1>    

</div>
<div className="flex justify-center">

<p
                  className={`w-[100%]  sm:w-[60%] z-10 text-start sm:text-center mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}
                  >
      {t("gd.sectionFour.desc")}
                </p>
                    </div>

<div className="flex flex-col sm:flex-row  justify-between mt-1 sm:mt-28 gap-20">
    <div className='w-ful sm:w-[50%]'>

    <StaticImage src='../../assets/images/graphicDesignArt.webp' className='h-full w-full hidden sm:block' alt='graphicDesignArt'/>
    </div>
    <div className="graphic_points w-ful sm:w-[50%] ">
        <div className='w-full'>
    <div className="flex items-center gap-4 text-primary-orange mt-3 w-full border-b-2 border-gray-500 pb-5 border-dotted">


                    <FaCheck />
               
                      <h5 className={`${paragraphTextColor} text-[22px]`}>      {t("gd.sectionFour.points.one")}</h5>
</div>
    <div className="flex items-center gap-4 text-primary-orange mt-3 w-full  border-b-2 border-gray-500 pb-5 border-dotted">
<FaCheck />
                      <h5 className={`${paragraphTextColor} text-[20px]`}>       {t("gd.sectionFour.points.two")}
                      </h5>
</div>
    <div className="flex items-center gap-4 text-primary-orange mt-3 w-full  border-b-2 border-gray-500 pb-5 border-dotted">
<FaCheck />
                      <h5 className={`${paragraphTextColor} text-[20px]`}> {t("gd.sectionFour.points.three")}
                      </h5>
</div>
    <div className="flex items-center gap-4 text-primary-orange mt-3 w-full  border-b-2 border-gray-500 pb-5 border-dotted">
<FaCheck />
                      <h5 className={`${paragraphTextColor} text-[20px]`}>  {t("gd.sectionFour.points.four")}

                      </h5>
</div>
    <div className="flex items-center gap-4 text-primary-orange mt-3 w-full  border-b-2 border-gray-500 pb-5 border-dotted">
<FaCheck />
                      <h5 className={`${paragraphTextColor} text-[20px]`}> {t("gd.sectionFour.points.five")}

                      </h5>
</div>
    <div className="flex items-center gap-4 text-primary-orange mt-3 w-full  border-b-2 border-gray-500 pb-5 border-dotted">
<FaCheck />
                      <h5 className={`${paragraphTextColor} text-[20px]`}>{t("gd.sectionFour.points.six")}


                      </h5>
</div>
</div>

    </div>
</div>

          </div>
<CallToAction/>
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
     </>
    );
};

export default GraphicsDesign;