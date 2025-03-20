import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { headingText, paragraphTextColor, textwhite } from '../../styles/styles'

import { FaCheck } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
const QAServices = () => {
  const {t} = useTranslation("qa")
  return (
    <>
 <div className="flex sm:justify-center">
        <h1
             className={`${textwhite} w-full sm:w-[75%] mt-28 ${headingText} text-start sm:text-center  w-[100%]  font-medium`}
           >
     {t("qa.sectionTwo.mainHeading")}
           </h1>
           </div>


    <div className="grid grid-cols-12 mt-20 ">
        <div className="sm:col-span-6 col-span-12 ">
    <StaticImage src='../../assets/images/qa-service-one.webp' className=' rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'/>
        </div>
        <div className="sm:col-span-6 col-span-12 text-white px-8 pb-4 pt-8 background-glass my_glassMorhism rounded-tr-lg">
        <h1 className={`text-3xl text-white  capitalize`}> {t("qa.sectionTwo.cardOne.title")}
        </h1>
    <p className={`${paragraphTextColor} text-[16px] mt-4`}>{t("qa.sectionTwo.cardOne.desc")}</p>

    <div  className="flex left-pointer items-center  gap-4 text-white mt-8 w-full">
     <FaCheck />
        <div>
          <h5 className={`${paragraphTextColor} text-[16px]`}>{t("qa.sectionTwo.cardOne.pointOne")}</h5>
          <div className="bg-gray-500 b-line  mt-2 h-[3px] w-0 opacity-[.8]" />
        </div>
      </div>
    <div  className="flex left-pointer items-center gap-4 text-white mt-3 w-full">
     <FaCheck />
        <div>
          <h5 className={`${paragraphTextColor} text-[16px]`}> {t("qa.sectionTwo.cardOne.pointTwo")}</h5>
          <div className="bg-gray-500 b-line  mt-2 h-[3px] w-0 opacity-[.8]" />
        </div>
      </div>
    <div  className="flex left-pointer items-center gap-4 text-white mt-3 w-full">
     <FaCheck />
        <div>
          <h5 className={`${paragraphTextColor} text-[16px]`}> {t("qa.sectionTwo.cardOne.pointThree")}</h5>
          <div className="bg-gray-500 b-line  mt-2 h-[3px] w-0 opacity-[0]" />
        </div>
      </div>

        </div>
    </div>
    <div className="grid grid-cols-12  mt-14 sm:mt-0">
       
        <div className="sm:col-span-6 order-2 sm:order-1
         col-span-12 background-glass text-white px-8 pb-4 pt-8  my_glassMorhism rounded-bl-lg">
    <h1 className={`text-3xl text-white  capitalize`}> {t("qa.sectionTwo.cardTwo.title")}
    </h1>
    <p className={`${paragraphTextColor} text-[16px] mt-4`}>{t("qa.sectionTwo.cardTwo.desc")}</p>

    <div  className="flex left-pointer items-center  gap-4 text-white  mt-8 w-full">
     <FaCheck />
        <div>
          <h5 className={`${paragraphTextColor} text-[16px]`}> {t("qa.sectionTwo.cardTwo.pointOne")}</h5>
          <div className="bg-gray-500  b-line  mt-2 h-[3px] w-0 opacity-[.8]" />
        </div>
      </div>
    <div  className="flex left-pointer items-center gap-4 text-white mt-3 w-full">
     <FaCheck />
        <div>
          <h5 className={`${paragraphTextColor} text-[16px]`}>  {t("qa.sectionTwo.cardTwo.pointTwo")}</h5>
          <div className="bg-gray-500  b-line  mt-2 h-[3px] w-0 opacity-[.8]" />
        </div>
      </div>
    <div  className="flex left-pointer items-center gap-4 text-white  mt-3 w-full">
     <FaCheck />
        <div>
          <h5 className={`${paragraphTextColor} text-[16px]`}>  {t("qa.sectionTwo.cardTwo.pointThree")}</h5>
          <div className="bg-gray-500  b-line  mt-2 h-[3px] w-0 opacity-[.8]" />
        </div>
      </div>

        </div>
        <div className="sm:col-span-6 col-span-12  order-1 sm:order-2">
    <StaticImage src='../../assets/images/qa-service-two.webp' className='sm:rounded-br-lg rounded-tl-lg rounded-tr-lg sm:rounded-tr-none sm:rounded-tl-none'/>
        </div>
    </div>
    </>
  )
}

export default QAServices