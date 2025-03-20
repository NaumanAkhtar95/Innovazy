import React from 'react'
import { IoSettings } from "react-icons/io5";
import { PiRecycleFill } from "react-icons/pi";
import { MdLoop } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import { GiInjustice } from "react-icons/gi";
import { IoTimeOutline } from "react-icons/io5";



export const ourApproach = (t) => [
    {
      fontClassName:
        "fa-solid fa-laptop-code mb-8 text-primary-orange text-[40px]",
      title: t("wd.sectionOne.cardOne.title"),
      description:
      t("wd.sectionOne.cardOne.desc"),
      link: "/services/web-development",
      icon:<IoSettings/>,
    },
    {
      fontClassName:
        "fa-brands fa-uncharted mb-8 text-primary-orange text-[40px]",
      title: t("wd.sectionOne.cardTwo.title"),
      description:
      t("wd.sectionOne.cardTwo.desc"),
      link: "/services/software-development",
      icon:<PiRecycleFill />,
    },
    {
      fontClassName: "fa fa-cloud mb-8 text-primary-orange text-[40px]",
      title: t("wd.sectionOne.cardThree.title"),
      description:
      t("wd.sectionOne.cardThree.desc"),
      link: "/services/cloud-computing",
      icon:<MdLoop/>,
    },
    {
      fontClassName: "fa-solid fa-mobile mb-8 text-primary-orange text-[40px]",
      title:t("wd.sectionOne.cardFour.title"),
      description:
      t("wd.sectionOne.cardFour.desc"),
      link: "/services/mobile-development",
      icon:<SlBadge/>,
    },
    {
      fontClassName:
        "fa-solid fa-fingerprint mb-8 text-primary-orange text-[40px]",
      title:t("wd.sectionOne.cardFive.title"),
      description:
      t("wd.sectionOne.cardFive.desc"),
      link: "/services/quality-assurance",
      icon:<GiInjustice/>,
    },
    {
      fontClassName: "fa-solid fa-pen-nib mb-8 text-primary-orange text-[40px]",
      title: t("wd.sectionOne.cardSix.title"),
      description:
      t("wd.sectionOne.cardSix.desc"),
      link: "/services/graphics-design",
      icon:<IoTimeOutline/>,
    },
  ]
  
