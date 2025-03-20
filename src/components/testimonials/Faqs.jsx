import React, { useState } from "react"
import { container,  textwhite } from "../../styles/styles"
import { faqs } from "../../utils/faqs-data"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Faqs = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)
const {t} = useTranslation("testimonials")
  const handleToggle = index => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null)
    } else {
      setOpenFaqIndex(index)
    }
  }
  const faqsData = faqs(t)
  return (
    <div className="relative">
      <div className="homeSectionleftBlob  mt-[150px] z-50 ">
        <div className="homeSectionRightBlob  ">
          <div className={`${container}  `}>
            <div className="flex justify-center mt-28 ">
              <div className="flex flex-col w-fit items-center py-12">
             

                <h1
                  className={`${textwhite} text-center uppercase tracking-wider font-[Aeonik-Bold] text-[60px] w-[100%] font-medium`}
                >
                  {t("testimonials.faqs.mainHeadingSliceOne")}<span className="testi-linear">{t("testimonials.faqs.mainHeadingSliceTwo")}</span>
                </h1>

              
              </div>
            </div>


<div className="grid grid-cols-12 sm:gap-8">
              {faqsData.map((faq, index) => {
                return (
                  <div className="col-span-12 ">
                    <div onClick={() => handleToggle(index)} className={`f-ques py-2 sm:py-5 px-5 mt-4 sm:mt-0 background-glass text-white cursor-pointer ${openFaqIndex === index ? "max-h-[300px]" : "max-h-[65px]"} transition-all duration-200 ease-in-out overflow-hidden `}>
  <div className="flex items-center justify-between">

  <h1 className="">      {faq.question}</h1>
  <div className={`drop_arrow ${openFaqIndex === index ? "rotate-180" : "rotate-0"} text-3xl cursor-pointer transition-all duration-500 ease-in-out`}    >
  <MdOutlineKeyboardArrowDown />
  </div>
  </div>
  <div className="f-ans">
    <p className="text-[14px] leading-6 sm:leading-7 mt-5">   {faq.answer}
</p>
</div>
</div>
                    </div>
                )
              }
            )
          }
          </div>



  
  </div>

          </div>
        </div>
      </div>
    // </div>
  )
}

export default Faqs
