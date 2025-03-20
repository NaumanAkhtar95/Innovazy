import React from 'react'
import { textwhite } from '../styles/styles'
import { StaticImage } from 'gatsby-plugin-image'

const FancyCard = ({icon,title,desc,imagePath}) => {
  return (
    <>
       <li >
    <a href="" className="fancy_card  w-[300px]">
    { <StaticImage src="../assets/images/serviceNice.webp" className='h-[300px]'/>}
      <div className="text-white h-full flex pt-12 justify-center text-[120px]">


{/* {icon} */}
</div>
      <div className="fancy_card__overlay">
        <div className="fancy_card__header ">
          <svg className="fancy_card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
         
          
         
         <div className="text-white ">

         {icon}
         </div>
          <div className="fancy_card__header-text">
            <h3 className={`fancy_card__title ${textwhite} text-xl`}>{title}</h3>            
            
          </div>
        </div>
        {/* ${paragraphTextColor} */}
        <p className={`fancy_card__description 
          text-white
          
          `}>{desc}</p>
      </div>
    </a>      
  </li>
    </>
  )
}

export default FancyCard