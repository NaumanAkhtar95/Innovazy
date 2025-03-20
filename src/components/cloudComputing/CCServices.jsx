import React from 'react'
import { headingText, paragraphTextColor } from '../../styles/styles'
import { cloudComputingServices } from '../../utils/cloud-computing-services'
import { FaCheck } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

const CCServices = () => {
  const {t} = useTranslation("cloudComputing")
  const cloudComputingServicesData = cloudComputingServices(t)
  const itemsPerDiv = Math.ceil(cloudComputingServicesData.length / 3); 
  return (
    <>
      <h1 className={`${headingText} mt-12 sm:mt-28 text-white text-start md:text-center`}>{t("cc.sectionThree.mainHeading")}</h1>
      
      <div className="flex justify-start sm:justify-center">
        <p className={`w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] z-10 text-start sm:text-center mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}>
        {t("cc.sectionThree.desc")}
        </p>
      </div>
      
      <div className="grid grid-cols-12 gap-10 mt-16 sm:mt-22 w-full">

       
        <div className="hidden sm:flex absolute gap-5 justify-end left-[50%] ">
          <div className="w-[50px] sm:w-[300px] h-[50px] sm:h-[300px] opacity-[.5] bg-[#2c242e] mt-24 rounded-full animate-move"></div>
          <div className="w-[50px] sm:w-[150px] h-[50px] sm:h-[150px] opacity-[.5] bg-[#4A4A4A] rounded-full absolute -left-[300px] bottom-0 animate-move-two"></div>
        </div>

       
        <div className="col-span-12 sm:col-span-6 w-full">
          <div className="relative">
            <div className="flex absolute gap-5 justify-end animate-move">
              <div className="w-[40px] sm:w-[100px] h-[40px] sm:h-[100px] opacity-[.5] bg-[#000000] mt-24 rounded-full"></div>
              <div className="w-[40px] sm:w-[150px] h-[40px] sm:h-[150px] opacity-[.5] bg-[#000000] rounded-full"></div>
            </div>

            <div className="my_glassMorhism background-glass h-[320px] w-[350px] sm:w-full sm:h-[420px]  px-4 sm:py-6 flex items-center rounded-[16px]">
              <div>
                {cloudComputingServicesData.slice(0, itemsPerDiv).map((item, index) => (
                  <div className="flex items-center gap-4 text-green-500 w-full" key={index}>
                    <FaCheck />
                    <div>
                      <h5 className="text-white text-[16px] sm:text-[18px]">{item.title}</h5>
                      <div className="bg-primary-orange b-line mt-2 h-[3px] w-0 opacity-[.8]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      
        <div className="col-span-12 sm:col-span-6 w-full">
          <div className="relative w-full">
            <div className="flex gap-5 justify-end absolute w-full" >
              {/* <div className="w-[50px] sm:w-[100px] h-[50px] sm:h-[100px] bg-[#23313ae2] mt-24 rounded-full animate-move"></div> */}
              <div className="w-[50px] sm:w-[150px] h-[50px] sm:h-[150px] opacity-[.5] absolute right-0 bg-[#392418bb] rounded-full animate-move"></div>
            </div>

           
            <div className="my_glassMorhism background-glass relative h-[200px] sm:h-[200px] sm:w-full w-[350px] px-4 sm:py-6 flex items-center rounded-[16px]">
              <div>
                {cloudComputingServicesData.slice(itemsPerDiv, itemsPerDiv * 2).map((item, index) => (
                  <div className="flex items-center gap-4 text-green-500 w-full" key={index}>
                    <FaCheck />
                    <div>
                      <h5 className="text-white text-[16px] sm:text-[18px]">{item.title}</h5>
                      <div className="bg-primary-orange b-line mt-2 h-[3px] w-0 opacity-[.8]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

         
            <div className="my_glassMorhism background-glass relative h-[200px] sm:h-[200px] sm:w-full mt-5 w-[350px] px-4 sm:py-6 flex items-center rounded-[16px]">
              <div>
                {cloudComputingServicesData.slice(itemsPerDiv * 2).map((item, index) => (
                  <div className="flex items-center gap-4 text-green-500 w-full" key={index}>
                    <FaCheck />
                    <div>
                      <h5 className="text-white text-[16px] sm:text-[18px]">{item.title}</h5>
                      <div className="bg-primary-orange b-line mt-2 h-[3px] w-0 opacity-[.8]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default CCServices
