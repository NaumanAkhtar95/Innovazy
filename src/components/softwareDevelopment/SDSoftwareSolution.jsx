import React, { useState } from 'react'
import { container, headingText, paragraphTextColor } from '../../styles/styles'
import { FaPlus } from "react-icons/fa"
import { FaMinus } from "react-icons/fa"
import { customSoftwareSolutions } from '../../utils/custom-sof-sol-data'
import { useTranslation } from 'react-i18next'
const SDSoftwareSolution = () => {
    const [showCusSoftSolution,setShowCustomSoftSolution] = useState(false)
    const {i18n} = useTranslation()

    const handleShowSoftSolution = (selected) => {
if(selected === showCusSoftSolution) {
    setShowCustomSoftSolution(false)
    return
}
setShowCustomSoftSolution(selected)
    }
const {t} = useTranslation("softwareDevelopment")
const customSoftwareSolutionsData = customSoftwareSolutions(t)
  return (
    <>
     <div className={`${container} mt-[130px] text-white`}>
      <h1 className={`${headingText} text-start md:text-center`}> 
      {t("sd.sectionFour.mainHeading")}
      </h1>   

<div className="flex justify-center">
      <p className={`w-[100%] sm:w-[50%] mt-5 text-start sm:text-center ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}>{t("sd.sectionFour.desc")}</p>
</div>

<div className="grid grid-cols-12 mt-12 sm:gap-8">
{customSoftwareSolutionsData.map((e,i) => (
  <div key={i} className="col-span-12 sm:col-span-6 mt-5 w-full">
    <div 
      onClick={() => handleShowSoftSolution(i)} 
      className={`s-custom-sol-box s_faq background-glass py-4 sm:px-4 ${i18n.language === "en"? " border-l-2":" border-r-2"} border-orange-500 flex items-center justify-between overflow-hidden cursor-pointer `}
    >
      <div className={`s-custom-sol-box-circle w-[100%] ${i18n.language === "ar" ? "translate-x-[50%]" : ""}`}></div>
      <h5 className="z-50">{e.question}</h5>
      <div className={`${showCusSoftSolution === i ? "text-primary-orange" : "text-primary-orange"} cursor-pointer sm:block hidden`}>
        {showCusSoftSolution === i ? <FaMinus /> : <FaPlus />}
      </div>
    </div>

    <div
      className={`transition-all duration-500 ease-in-out overflow-hidden ${
        showCusSoftSolution === i ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <p className={`w-[100%] mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}>
        {e.answer}
      </p>
    </div>
  </div>
))}


</div>

      </div>
    </>
  )
}

export default SDSoftwareSolution