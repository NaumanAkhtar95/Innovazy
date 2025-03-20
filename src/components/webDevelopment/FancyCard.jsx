import React from 'react'


import { headingText,  textwhite } from '../../styles/styles'

import { unitingWithUs } from '../../utils/dev-uniting-data';
import SDCard from '../softwareDevelopment/SDCard';
import { useTranslation } from 'react-i18next';


const UnitingWithUs = () => {
  const {t} = useTranslation("webDevelopment")
  const unitingWithUsData = unitingWithUs(t)
  return (
<>


<div className='homeSectionleftBlob'>
     <div className='homeSectionRightBlob'>
    <div className='mt-32'>
          <div class="styled_one mb-28">
    <h1 className={`${textwhite} ${headingText} font-medium  mx-auto w-[100%] text-center`}> {t("wd.sectionTwo.mainHeading")}</h1>
    </div>
{unitingWithUsData.map((x,i) => {
                                return <div key={i} className='mb-8'>
                                    <SDCard number={x.number} heading={x.heading} subHeading={x.subHeading} description={x.description} />
                                </div>;
                            })}
</div>
</div>
</div>


</>
  )
}

export default UnitingWithUs