import React from 'react'
import Spotlight from '../../ui/SpotlightEffect'
import { qaChooseData } from '../../utils/qa-choose-innov-data'
import { headingText, paragraphTextColor, textwhite } from '../../styles/styles'
import { useTranslation } from 'react-i18next'

const QAChooseInnovazy = () => {
  const {t} = useTranslation("qa")
  const qaChooseCards = qaChooseData(t)
  return (
    <>
    <h1
    className={`${textwhite} mt-28 ${headingText} text-center  w-[100%]  font-medium`}
    >

{t("qa.sectionOne.mainHeading")}
  </h1>
  <div className="flex justify-center">
               <p className={`w-[100%] sm:w-[65%] text-center mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] `}>
               {t("qa.sectionOne.desc")}



                   </p>
                   </div>
<Spotlight data={qaChooseCards}/>
   
    </>
  )
}

export default QAChooseInnovazy