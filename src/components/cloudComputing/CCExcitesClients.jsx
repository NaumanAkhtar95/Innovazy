import React from 'react'
import { headingText, paragraphTextColor, textwhite } from '../../styles/styles'
import ServicesBusinessCard from '../../ui/ServicesBusinessCard'
import { cloudComputingClients } from '../../utils/cloud-computing-clients-data'
import { useTranslation } from 'react-i18next'
const CCExcitesClients = () => {
  const {t} = useTranslation("cloudComputing")
  const cloudComputingClientsData = cloudComputingClients(t)
  return (
    <>
     <h1
    className={`${textwhite} mt-28 ${headingText} text-start sm:text-center  w-[100%]  font-medium`}
    >

{t("cc.sectionTwo.mainHeading")}
  </h1>
  <p className={`${paragraphTextColor} text-start sm:text-center mt-5`}>{t("cc.sectionTwo.desc")}</p>

<div className="mt-12">

  <ServicesBusinessCard data={cloudComputingClientsData}/>
</div>
    </>
  )
}

export default CCExcitesClients