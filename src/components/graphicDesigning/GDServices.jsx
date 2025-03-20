import React from 'react'
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles'
import ServicesBusinessCard from '../../ui/ServicesBusinessCard'
import { graphicServices } from '../../utils/graphice-services-data'
import { useTranslation } from 'react-i18next'

const GDServices = () => {
  const {t} = useTranslation("graphicDesign")
  const graphicServicesData = graphicServices(t)
  return (
    <>
        <div className='relative'>
            <div className='clientGradientBlogTop'>
                <div className='clientGradientBlogBottom'>
                    {/* <div className={`${container} mt-[120px]`}> */}
                    <h1
             className={`${textwhite} mt-28 ${headingText} text-start sm:text-center  w-[100%]  font-medium`}
           >
{t("gd.sectionOne.mainHeading")}
           </h1>

                        <p className={`w-[100%]  text-start sm:text-center mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] `}>
                        {t("gd.sectionOne.desc")}

                            </p>
                        <div className="mt-14"></div>
    <ServicesBusinessCard data={graphicServicesData}/>
    {/* </div> */}
    </div>
    </div>
    </div>
    </>
  )
}

export default GDServices