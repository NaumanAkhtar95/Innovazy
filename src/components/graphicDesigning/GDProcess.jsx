import React from 'react'
import { headingText, paragraphTextColor, textwhite } from '../../styles/styles'
import { useTranslation } from 'react-i18next'

const GDProcess = () => {
    const {t,i18n} = useTranslation("graphicDesign")
  return (
    <>
    
    <div className="flex items-center flex-col sm:flex-row justify-between mt-28 sm:mt-0">
    <div className={`${i18n.language === "en"?"border-r-2":"border-l-2"} border-primary-orange border-dashed sm:mr-8 `}>
            <h1
                className={`${textwhite}  text-[38px] w-[100%] sm:w-[75%] font-medium`}
              >
       {t("gd.sectionTwo.mainHeadingSliceOne")}  <span className="text-primary-orange text-[35px]"> {t("gd.sectionTwo.mainHeadingSliceTwo")} 
             </span>
              </h1>

              <p className={`w-[100%] sm:w-[70%] mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}>
              {t("gd.sectionTwo.desc")} 
                      </p>
    </div>

    <div>
    <div className=' flex sm:flex-row flex-col items-center gap-5'>
        <div className="dev-circle border-2 rounded-full border-primary-orange border-dashed px-8 overflow-hidden  w-[280px] h-[280px] text-center mt-28">
            <h1 className={`${headingText} mt-10 ${textwhite}`}>01</h1>
            <h1 className={` ${textwhite} `}>{t("gd.sectionTwo.circleOne.title")} </h1>
            <p className={`w-[100%]  mt-3 ${paragraphTextColor} text-[12px] `}>
            {t("gd.sectionTwo.circleOne.desc")}
                      </p>
        </div>
        <div className="dev-circle border-2 rounded-full border-primary-orange border-dashed px-5 overflow-hidden w-[300px] h-[300px] text-center">
            <h1 className={`${headingText} mt-10 ${textwhite}`}>02</h1>
            <h1 className={` ${textwhite} `}>{t("gd.sectionTwo.circleTwo.title")}</h1>
            <p className={`w-[100%]  mt-5 ${paragraphTextColor} text-[12px] `}>
            {t("gd.sectionTwo.circleTwo.desc")}
                      </p>
        </div>
    </div>

    <div className=' flex sm:flex-row flex-col  items-center gap-5'>
        <div className="dev-circle border-2 rounded-full border-primary-orange border-dashed px-8 overflow-hidden w-[280px] h-[280px] text-center mt-28">
            <h1 className={`${headingText} mt-10 ${textwhite}`}>03</h1>
            <h1 className={` ${textwhite} `}>{t("gd.sectionTwo.circleThree.title")}</h1>
            <p className={`w-[100%]  mt-3 ${paragraphTextColor} text-[12px] `}>
            {t("gd.sectionTwo.circleThree.desc")}
                      </p>
        </div>
        <div className="dev-circle border-2 rounded-full border-primary-orange border-dashed px-5 overflow-hidden w-[300px] h-[300px] text-center">
            <h1 className={`${headingText} mt-10 ${textwhite}`}>04</h1>
            <h1 className={` ${textwhite} `}>{t("gd.sectionTwo.circleFour.title")}</h1>
            <p className={`w-[100%]  mt-5 ${paragraphTextColor} text-[12px] `}>
            {t("gd.sectionTwo.circleFour.desc")}
                      </p>
        </div>
    </div>
    </div>



</div>

    </>
  )
}

export default GDProcess