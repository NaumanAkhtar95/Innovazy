import React from 'react'
import { container, headingText } from '../../styles/styles'
import SDCard from './SDCard';
import Spotlight from '../../ui/SpotlightEffect';
import { customSoftwareData } from '../../utils/custom-software-data';
import { SDServices } from '../../utils/our-services-soft-dev-data';
import { useTranslation } from 'react-i18next';

const SDOurServices = () => {
    const {t} = useTranslation("softwareDevelopment")
    const SDServicesData = SDServices(t) 
    const customSoftwareCards = customSoftwareData(t) 
  return (
    <>
    <div className={`${container} mt-[130px] text-white`}>




<div className='relative'>
            <div className=''>
                <div className=''>
                    <div className={` mt-[120px]`}>
<h1 className={`${headingText} text-start md:text-center`}>{t("sd.sectionOne.mainHeading").split(' ').map((text,index)=>(
    <React.Fragment>
        {`${text} `}  {text === "Under" && (
            <>
            <br className='hidden sm:block'/>
            </>
        )}
         </React.Fragment>
))} 
</h1>    


                     
                        <div className="mt-14">
                            {SDServicesData.map((x,i) => {
                                return <div key={i} className='mb-8'>
                                    <SDCard number={x.number} heading={x.heading} subHeading={x.subHeading} description={x.description} />
                                </div>;
                            })}
                        </div>

                        <div class="styled_one mt-28">
                        <h1 className={`${headingText}   text-start md:text-center`}>{t("sd.sectionTwo.mainHeading")}
                        </h1>    
</div>
                        <Spotlight data={customSoftwareCards} />
                    </div>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default SDOurServices