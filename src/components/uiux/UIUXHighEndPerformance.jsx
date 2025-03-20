import React from 'react'
import { headingText, paragraphTextColor, textwhite } from '../../styles/styles'
import { useTranslation } from 'react-i18next'

const UIUXHighEndPerformance = () => {
  const {t} = useTranslation("uiux")
  return (
    
    <div className=' mt-32'>
    <div className="homeSectionleftBlob  ">
         <div className="homeSectionRightBlob  ">
    <div className='mt-28'>
    <div class="styled_one">
    <h1
             className={`${textwhite}  text-center ${headingText}   w-[100%]  font-medium`}
           >
    {t("ui.sectionThree.mainHeadingSliceOne")}
       <span className='testi-linear'>    {t("ui.sectionThree.mainHeadingSliceTwo")}   </span> <br/>  
           </h1>
           </div>



        

        <div className="grid grid-cols-12 gap-10 mt-16 sm:mt-22 w-full">


<div className="hidden sm:flex absolute gap-5 justify-end left-[50%] ">
  <div className="w-[50px] sm:w-[300px] opacity-[.3] h-[50px] sm:h-[300px] bg-[#2c242e] mt-24 rounded-full animate-move"></div>
  {/* <div className="w-[50px] sm:w-[150px] h-[50px] sm:h-[150px] bg-[#a1a49c] rounded-full absolute -left-[300px] bottom-0 animate-move-two"></div> */}
</div>

{/* First Column */}
<div className="col-span-12 sm:col-span-6 w-full">
  <div className="relative">
    <div className="flex absolute gap-5 justify-end animate-move">
      <div className="w-[40px] opacity-[.3] sm:w-[100px] h-[40px] sm:h-[100px] bg-[#1e1425] mt-24 rounded-full"></div>
      <div className="w-[40px] opacity-[.3] sm:w-[150px] h-[40px] sm:h-[150px] bg-[#858179] rounded-full"></div>
    </div>

    <div className="my_glassMorhism background-glass h-[320px] w-[350px] sm:w-full sm:h-[420px] flex items-center  px-4 sm:py-6  rounded-[16px]">
      <div>
    <h1 className='text-white text-start sm:text-center text-3xl'>  {t("ui.sectionThree.cardOne.mainHeading")} </h1>
    <p className='text-white mt-5 text-start sm:text-center'>{t("ui.sectionThree.cardOne.desc")}</p>
      </div>
    </div>
  </div>
</div>

{/* Second Column */}
<div className="col-span-12 sm:col-span-6 w-full">
  <div className="relative w-full">
    <div className="flex gap-5 justify-end absolute w-full">
      {/* <div className="w-[50px] sm:w-[100px] h-[50px] sm:h-[100px] bg-[#342409] mt-24 rounded-full animate-move"></div> */}
      <div className="w-[50px] opacity-[.3] sm:w-[150px] h-[50px] sm:h-[150px] absolute right-0 bg-[#0e304e8d] rounded-full animate-move"></div>
    </div>

    {/* First Subsection */}
    <div className="my_glassMorhism background-glass relative py-4 min-h-[200px] sm:h-[200px] sm:w-full w-[350px] px-4 sm:py-6 flex items-center rounded-[16px]">
    <div>
    <h1 className='text-white text-2xl '> {t("ui.sectionThree.cardTwo.mainHeading")}</h1>
    <p className={`mt-5 text-white`}>{t("ui.sectionThree.cardTwo.desc")}</p>
      </div>
    </div>

    {/* Second Subsection */}
    <div className="my_glassMorhism background-glass relative py-4 min-h-[200px] sm:h-[200px] sm:w-full mt-5 w-[350px] px-4 sm:py-6 flex items-center rounded-[16px]">
      <div>
      <div>
    <h1 className='text-white text-2xl'>  {t("ui.sectionThree.cardThree.mainHeading")}</h1>
    <p className={`mt-5 text-white`}>{t("ui.sectionThree.cardThree.desc")}</p>
      </div>
      </div>
    </div>




  </div>
</div>
</div>




    </div>
    </div>
    </div>
    </div>
  )
}

export default UIUXHighEndPerformance