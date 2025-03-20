import React from 'react'
import { container, headingText } from '../../styles/styles'
import { developmentMethodData } from '../../utils/development-method-data';
import CustomSpotlight from '../../ui/CustomSpotlight';
import { useTranslation } from 'react-i18next';

const SDDevelopment = () => {
const {t} = useTranslation("softwareDevelopment")
const developmentMethodCards = developmentMethodData(t)
  return (
    <>
      <div className={`${container} mt-[130px] text-white`}>
      <div class="styled_one">
      <h1 className={`${headingText} text-start md:text-center`}>
        {t("sd.sectionThree.mainHeading").split(" ").map((text,index)=>(
          <React.Fragment>
            {`${text} `}
            {text === "Method" && <br className='hidden sm:block'/>}
          </React.Fragment>
        ))} 
      </h1>   
      </div>



<CustomSpotlight data={developmentMethodCards}/>
     

      </div>
    </>
  )
}

export default SDDevelopment