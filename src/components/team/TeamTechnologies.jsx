import React from 'react'
import { headingText, textwhite } from '../../styles/styles'
import { technologies } from '../../utils/team-tech-data'
import { useTranslation } from "react-i18next"

const TeamTechnologies = () => {
  const {t} = useTranslation("team")
  return (
    <>
    
    <div className="flex justify-start sm:justify-center mt-28">
              <h1 className={`${textwhite} text-start sm:text-center ${headingText} sm:text-[42px] w-[100%] sm:w-[75%] font-medium`}>
               {t("team.techHeadingOne")} <span className="achive-linear">{t("team.techHeadingTwo")}</span>
              </h1>
            </div>


            <div className="mt-20 grid-cols-3 sm:grid-cols-8 grid gap-2   gap-y-8">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  data-value={tech.value}
                  className={`skill-box background-glass flex items-center justify-center transition-all ease-linear text-white w-[100px] h-[100px] rounded-[50%] ${tech.bgcolorScheme} hover:bg-opacity-90 hover:scale-110 duration-300 col-span-1 `}
                  
     
                >
                  <div className={`text-4xl ${tech.colorScheme}`}>
               {tech.icon}
                  </div>

                </div>
              ))}
            </div>
    </>
  )
}

export default TeamTechnologies