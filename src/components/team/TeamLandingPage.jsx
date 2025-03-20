import React, { useEffect } from "react"
import {
  container,
  headingText,
  paragraphTextColor,
  textwhite,
} from "../../styles/styles"
import { teamHomePageData } from "../../utils/team-data"
import TeamCard from "./TeamCard"
import '../../ui/testimonials.css'
import { technologies } from "../../utils/team-tech-data";
import { useTranslation } from "react-i18next"


const TeamLandingPage = () => {
  const {t} = useTranslation("team")
  useEffect(() => {
       function parallaxEffect(event) {
const elements = document.querySelectorAll(".skill-box")
console.log("element-----",elements)
if(elements){

  elements.forEach((item,index)=>{
    console.log("mousemovevalue ---",event.ClientX)
    const moveValue = item.getAttribute("data-value")
    const x = (event.clientX * moveValue) / 150;
    const y = (event.clientY * moveValue) / 150;
    item.style.transform = `translateX(${x}px) translateY(${y}px)`;
  }) 
}
    }

    document.addEventListener("mousemove",parallaxEffect)
  return () => {
      document.removeEventListener("mousemove", parallaxEffect)
    }
  }, [])

  return (
    <div>
      <div className="homeSectionleftBlob">
        <div className="homeSectionRightBlob">
          {/* <div className={`${container} `}> */}
            <div className="w-full">
              <h1
                className={`${textwhite} ${headingText} text-start text-[42px] sm:text-[55px] w-[100%] sm:w-[75%] font-medium`}
              >
             {t("team.mainHeadingOne")}
                <span className="text-primary-orange "> {t("team.mainHeadingTwo")}</span>
              </h1>
            </div>
            <p
              className={`w-[100%] sm:w-[60%]  mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}
            >
           {t("team.desc")}
            </p>

            <div className="grid md:grid-cols-12 gap-4 justify-center">
              {teamHomePageData.map(x => {
                return (
                  <>
                    <TeamCard
                      name={x.name}
                      image={x.image}
                      imageAlt={x.imageAlt}
                      description={x.description}
                      designation={x.designation}
                      github={x.github}
                      instagram={x.instagram}
                      linkedIn={x.linkedIn}
                      twitter={x.twitter}
                    />
                  </>
                )
              })}
         

          

          



  

          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamLandingPage
