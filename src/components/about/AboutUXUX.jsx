import React from 'react'
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles'
import ForwardArrow from "../../assets/icons/forwardArrow.png";
import PrimaryButton from '../../ui/PrimaryButton'
import { Link } from 'gatsby';
import Lottie from 'react-lottie';
import uiuxAnime from '../../utils/uiux-lottie.json'
import { useTranslation } from 'react-i18next';

const AboutUXUX = () => {
  const defaultOptionsSuccess = {
    loop: true,
    autoplay: true,
    animationData: uiuxAnime,
    
};
const {t} = useTranslation("about")
  return (
    <div className='my-20'>
        


     


<div className="hidden sm:flex absolute gap-5 justify-end left-[50%] ">
  <div className="w-[50px] opacity-[.3] sm:w-[300px] h-[50px] sm:h-[300px] bg-[#2c242e] mt-24 rounded-full animate-move"></div>
  <div className="w-[50px] opacity-[.3] sm:w-[150px] h-[50px] sm:h-[150px] bg-[#a1a49c] rounded-full absolute -left-[300px] bottom-0 animate-move-two"></div>
</div>


<div className={`${container}  w-full `}>
  <div className="relative">
    <div className="flex absolute gap-5 justify-end animate-move">
      <div className="w-[40px] sm:w-[100px] h-[40px] sm:h-[100px] opacity-[.3] bg-[#4A4A4A] mt-24 rounded-full"></div>
      <div className="w-[40px] sm:w-[150px] h-[40px] sm:h-[150px] opacity-[.3] bg-[#7B8C9C] rounded-full"></div>
    </div>

    <div className="my_glassMorhism background-glass min-h-[320px] w-[full] sm:w-full sm:min-h-[500px] py-4 px-2 sm:px-16 sm:py-6  rounded-[16px]">
<div className={`flex  items-center justify-between`}>

      <div className="py-4 sm:py-6 ">
    <h1 className={`${textwhite} ${headingText} mx-auto w-[100%]  text-start `}>{t("sectionFour.mainHeadingOne")}<span className="text-orange-500 font-semibold">{t("sectionFour.mainHeadingTwo")} </span> </h1>

    <p className={`w-[100%] sm:w-[80%] mt-8 text-white leading-7 text-[16px]  `}>{t("sectionFour.desc")}</p>

    <div className=" mt-16">
<Link to='/services'>
                    <PrimaryButton btnText={t("buttons.exploreServices",{ns:"common"})} image={ForwardArrow} imageAlt="Get Consultation" />
                </Link>
</div>
</div>

<div className="hidden sm:block">
<Lottie options={defaultOptionsSuccess}
                                height={300}
                                width={500}
                                isStopped={false}
                                isPaused={false} />
                                </div>
                                </div>
    </div>
  </div>
</div>





    </div>
  )
}

export default AboutUXUX