import React from 'react'
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles'
import { FaLinkedin } from "react-icons/fa";
import TestimonialsSlider from './TestimonialsSlider';
import { useTranslation } from 'react-i18next';

const TestimonialsLandingPage = () => {
  const { t, i18n } = useTranslation("testimonials")
  return (
    <>

      <div className="homeSectionleftBlob  mt-[150px] z-50 ">
        <div className="homeSectionRightBlob  ">

          <div className={`${container}  `}>


            <div className="flex justify-center ">
              <div className="flex flex-col items-center">

                <div className="self-end">
                  <div className="h-1 w-24 services_heading_success" />
                </div>


                <h1
                  className={`${textwhite} text-center uppercase tracking-wider font-[Aeonik-Bold] text-[38px] sm:text-[60px] w-[100%] font-medium`}
                >
                  {t("testimonials.mainHeadingSliceOne")}<span className="testi-linear">{t("testimonials.mainHeadingSliceTwo")}</span>{t("testimonials.mainHeadingSliceThree")}
                </h1>


                <div className="self-start">
                  <div className="h-1 w-24 services_heading_success" />
                </div>
              </div>
            </div>
            <h1
              className={`${textwhite} mt-28 ${headingText}   w-[100%]  font-medium`}
            >
              {t("testimonials.subHeadingSliceOne")}<span className='testi-linear'> {t("testimonials.subHeadingSliceTwo")}</span>  {t("testimonials.subHeadingSliceThree")}
            </h1>
            <p
              className={`w-[100%] sm:w-[60%] z-10  mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}
            >
              {t("testimonials.desc")}
            </p>
            {i18n.language === "en" && <div className="mt-36">
              <TestimonialsSlider />
            </div>}
          </div>
        </div>
      </div>

    </>
  )
}

export default TestimonialsLandingPage