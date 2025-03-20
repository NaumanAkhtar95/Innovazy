import React from 'react'
import ServicesBusinessCard from '../../ui/ServicesBusinessCard'
import { appDevServices } from '../../utils/app-development-service-data'
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles'
import { useTranslation } from 'react-i18next'

const MDServicesPlatforms = () => {
  const {t} = useTranslation("mobileDevelopment")
  const appDevServicesData = appDevServices(t)
  return (
    <>
     <div className='relative'>
            <div className='clientGradientBlogTop'>
                <div className='clientGradientBlogBottom'>
                    <div className={`${container} mt-[120px]`}>
                        <h1 className={`${textwhite} ${headingText} mx-auto w-[100%] md:w-[55%] text-start md:text-center`}>{t("md.sectionOne.mainHeading")}</h1>
                        <p className={`w-[100%]  text-start sm:text-center mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] `}>
                        {t("md.sectionOne.desc")}

                            </p>
                        <div className="mt-14"></div>
    <ServicesBusinessCard data={appDevServicesData}/>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default MDServicesPlatforms