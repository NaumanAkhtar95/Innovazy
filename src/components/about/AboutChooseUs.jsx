import React from 'react'
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles'
import PrimaryButton from '../../ui/PrimaryButton'
import ForwardArrow from "../../assets/icons/forwardArrow.png";
import { Link } from 'gatsby';
import CustomSpotlight from '../../ui/CustomSpotlight';
import { whyChooseUs } from '../../utils/about-us-choose';
import { useTranslation } from 'react-i18next';

const AboutChooseUs = () => {
  const {t} = useTranslation("about")
  const whyChooseUsData = whyChooseUs(t)
  return (
    <>
        <div className={`${container} mt-[150px]`}>
  <h1 className={`${textwhite} ${headingText} w-[100%] text-start md:text-center`}>{t("sectionTwo.mainHeading")}</h1>
  <p className={`w-[100%] md:w-[65%] mx-auto mt-5 ${paragraphTextColor} text-start md:text-center text-[14px] sm:text-[16px] leading-7`}>{t("sectionTwo.desc")}</p>
<CustomSpotlight data={whyChooseUsData}/>
  <div className='text-center mt-16'>
                <Link to='/services'>
                    <PrimaryButton btnText={t("buttons.exploreServices",{ns:"common"})} image={ForwardArrow} imageAlt="Get Consultation" />
                </Link>
            </div>

  </div>



    </>
  )
}

export default AboutChooseUs