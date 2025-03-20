import React from 'react'
import { container, headingText, paragraphTextColor } from '../../styles/styles'
import { bestChoices } from '../../utils/app-dev-best-choice-data'

import CallToAction from '../../ui/CallToAction'
import CustomSpotlight from '../../ui/CustomSpotlight'
import { useTranslation } from 'react-i18next'

const MDInnovazyBestChoice = () => {
  const {t} = useTranslation("mobileDevelopment")
  const bestChoicesData = bestChoices(t)
  return (
    <>
    <div className={`${container} text-white`}>

    <h1 className={`${headingText} text-start md:text-center mt-28`}>{t("md.sectionThree.mainHeading")}
    </h1>    
    <div className="flex justify-center">
    <p className={`w-[100%] sm:w-[75%] text-start sm:text-center  ${paragraphTextColor} text-[14px] sm:text-[16px] `}>
    {t("md.sectionThree.desc")}
  </p>
    </div>
    <CustomSpotlight data={bestChoicesData}/>
<div className="grid grid-cols-12">



</div>

    </div>
<div className='mt-8'>

    <CallToAction/>
</div>

    </>
  )
}

export default MDInnovazyBestChoice