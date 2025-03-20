import React, { useEffect } from "react"
import { container, headingText, paragraphTextColor, textwhite } from "../../styles/styles"
import "../../ui/services.css"

import "../../components/hero/hero.css"
import { servicesCards } from "../../utils/servicesCard-data"
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "gatsby"
import CallToAction from "../../ui/CallToAction"
import Lottie from 'react-lottie';
import servicesAnime from '../../utils/services-anime.json'
import { RiUserLocationLine } from "react-icons/ri"
import ClientsBusiness from "../../components/hero/ClientsBusiness"
import { useTranslation } from "react-i18next"
const ServicesHome = () => {
  const location = RiUserLocationLine()
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  },[location.pathname])
  const defaultOptionsSuccess = {
    loop: true,
    autoplay: true,
    animationData: servicesAnime,
};
const {t} = useTranslation("services")
const servicesCardData = servicesCards(t)
  return (
    <div className="homeSectionleftBlob  mt-[150px] z-50 ">
      <div className="homeSectionRightBlob  ">
        <div className={`${container} mt-[130px]`}>
         

         
<div className="flex justify-center ">
  <div className="flex flex-col items-center">
    
    <div className="self-end">
      <div className="h-1 w-24 services_heading_success" />
    </div>
    
    
    <h1
      className={`${textwhite} text-center uppercase tracking-wider font-[Aeonik-Bold] text-[38px] sm:text-[60px] w-[100%] font-medium`}
    >
      {t("services.mainHeadingSliceOne")}<span className="testi-linear">{t("services.mainHeadingSliceTwo")}</span>{t("services.mainHeadingSliceThree")}
    </h1>

    
    <div className="self-start">
      <div className="h-1 w-24 services_heading_success" />
    </div>
  </div>
</div>
           <h1
             className={`${textwhite} mt-28 ${headingText}   w-[100%]  font-medium`}
           >
     {t("services.subHeadingSliceOne")}

<span className='testi-linear'>   {t("services.subHeadingSliceTwo")}</span> 
           </h1>

           <p
                  className={`w-[100%] sm:w-[60%] z-10  mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}
                >
          {t("services.desc")}

                </p>


    



          <div className="grid grid-cols-12 my-56">
            {servicesCardData && servicesCardData.length>0 && servicesCardData.map((serData,index)=>{
return (
            <div className="col-span-12 md:col-span-6">
              <div className={`inner ${serData.imageClass} bg-gray-700 h-[400px] relative`}>
                <div className={`outer-upper overflow-hidden aboslute top-0 left-0  opacity-[0.95] h-[70%] transition-all duration-1000 ease-in-out px-8 ${serData.colorScheme}`}>

                  <div className="h-full flex justify-center flex-col">
                    <h1
                      className={`text-[rgba(255,255,255,0.6)] relative   font-[Montserrat-Bold] text-[32px] sm:text-[50px] w-[100%] font-medium`}
                    >
{serData.title}
                    </h1>
                    <div className="">

                      <p
                        className={`w-[100%] sm:w-[60%] z-10 ${textwhite} mt-5  text-[14px] sm:text-[16px] leading-6 sm:leading-7`}
                      >
                        {serData.desc}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`outer-lower services_heading flex items-center h-[30%] w-full absolute bottom-0`}>
                  <div className="ser_card_footer px-2 flex items-center justify-between w-full pr-4">

                    <h1 className={`${textwhite }  text-[42px] sm:text-[80px] uppercase tracking-wider font-[Montserrat-Bold]  w-[100%] font-medium`}
                    >
{serData.number}
                    </h1>
                    <Link to={serData.path}>
                    <div className="text-[30px] opacity-[.8] hover:opacity-[1] border-2 border-white hover:border-[#703b30] p-[10px] rounded-full hover:text-[#703b30] text-white transition-all duration-200">

                    <FaExternalLinkAlt />
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

)
            })}
          

          </div>



         

        </div>
      </div>
      <CallToAction/>
    </div>
  )
}

export default ServicesHome
