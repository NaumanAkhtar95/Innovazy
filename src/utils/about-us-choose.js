import React from 'react'
import { PiPaintBrushFill } from "react-icons/pi";
import { FaBuildingColumns } from "react-icons/fa6";
import { IoIosClock } from "react-icons/io";
import { IoBarChartOutline } from "react-icons/io5";
import { FaHandshakeAngle } from "react-icons/fa6";
import { MdAccountBalanceWallet } from "react-icons/md";



export const whyChooseUs = (t) => [
    {
      "title": t("sectionTwo.cards.cardOne.title"),
      "description": t("sectionTwo.cards.cardOne.desc"),
      "icon": <FaBuildingColumns />,
    },
    {
    "title": t("sectionTwo.cards.cardTwo.title"),
      "description": t("sectionTwo.cards.cardTwo.desc"),
      "icon": <PiPaintBrushFill/>
    },
    {
     "title": t("sectionTwo.cards.cardThree.title"),
      "description": t("sectionTwo.cards.cardThree.desc"),
      "icon": <IoIosClock />,
    },
    {
       "title": t("sectionTwo.cards.cardFour.title"),
      "description": t("sectionTwo.cards.cardFour.desc"),
      "icon": <IoBarChartOutline />,
    },
    {
     "title": t("sectionTwo.cards.cardFive.title"),
      "description": t("sectionTwo.cards.cardFive.desc"),
      "icon": <FaHandshakeAngle />,
    },
    {
      "title": t("sectionTwo.cards.cardSix.title"),
      "description": t("sectionTwo.cards.cardSix.desc"),
      "icon": <MdAccountBalanceWallet />
    }
  ];
  