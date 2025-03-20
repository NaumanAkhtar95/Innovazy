import React from 'react'
import { keyFocusesData } from '../../utils/app-dev-key-focuses-data'
import Spotlight from '../../ui/SpotlightEffect'
import { container, headingText } from '../../styles/styles'
import { useTranslation } from 'react-i18next'
const MDKeyFoucses = () => {
  const {t} = useTranslation("mobileDevelopment")
  const keyFocusesCards = keyFocusesData(t)
  return (
    <>
    <div className={`${container}`}>
    
    <h1 className={`${headingText} mt-28 text-white text-start md:text-center`}>{t("md.sectionTwo.mainHeading")}
    </h1>    
    
     <Spotlight data={keyFocusesCards} />
    </div>
    </>
  )
}

export default MDKeyFoucses