import React from 'react'
import { headingText, paragraphTextColor, textwhite } from '../../styles/styles'
import Spotlight from '../../ui/SpotlightEffect'
import { cloudComputingAccompanies } from '../../utils/cloud-computing-data'
import { useTranslation } from 'react-i18next'

const CCAccompanies = () => {
  const {t} = useTranslation("cloudComputing")
  const cloudComputingAccompaniesData = cloudComputingAccompanies(t)
  return (
    <>
    <h1
    className={`${textwhite} mt-28 ${headingText} text-start sm:text-center  w-[100%]  font-medium`}
    >

{t("cc.sectionOne.mainHeading")}
  </h1>

               <p className={`w-[100%]  text-start sm:text-center mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] `}>
               {t("cc.sectionOne.desc")}
                   </p>
                   <Spotlight data={cloudComputingAccompaniesData} />
      </>

  )
}

export default CCAccompanies