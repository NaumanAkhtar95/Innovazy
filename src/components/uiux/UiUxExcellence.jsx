import React from 'react'
import { headingText, paragraphTextColor, textwhite } from '../../styles/styles'
import Spotlight from '../../ui/SpotlightEffect'
import { uiuxExcellence } from '../../utils/uiux-excellence-data'
import { useTranslation } from 'react-i18next'


const UiUxExcellence = () => {
  const {t} = useTranslation("uiux")
  const uiuxExcellenceData = uiuxExcellence(t)
  return (
    <>
    <h1
    className={`${textwhite} mt-28 ${headingText} text-start sm:text-center  w-[100%]  font-medium`}
    >

{t("ui.sectionTwo.mainHeading")}
  </h1>
  <div className="flex justify-center">
               <p className={`w-[100%] sm:w-[65%] text-start sm:text-center mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] `}>
               {t("ui.sectionTwo.desc")}

                   </p>
                   </div>
                   <Spotlight data={uiuxExcellenceData} />
                   </>
  )
}

export default UiUxExcellence