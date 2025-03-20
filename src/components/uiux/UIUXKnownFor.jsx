import React from 'react'
import { headingText, paragraphTextColor, textwhite } from '../../styles/styles'
import ServicesBusinessCard from '../../ui/ServicesBusinessCard'
import { uiuxknownFor } from '../../utils/uiux-knownfor-data'
import { useTranslation } from 'react-i18next'
const UIUXKnownFor = () => {
  const {t} = useTranslation("uiux")
  const uiuxknownForData = uiuxknownFor(t)
  return (
    <>
     <h1
    className={`${textwhite} mt-28 ${headingText} text-start sm:text-center  w-[100%]  font-medium`}
    >
{t("ui.sectionOne.mainHeading")}
  </h1>
  <div className="flex justify-center">

  <p className={`${paragraphTextColor} w-full sm:w-[65%] ttext-start sm:text-center mt-5`}>{t("ui.sectionOne.desc")}
</p>
  </div>


<div className="mt-12">

  <ServicesBusinessCard data={uiuxknownForData}/>
</div>
</>
  )
}

export default UIUXKnownFor