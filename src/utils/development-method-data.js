import React from 'react'
import { FaEdit } from "react-icons/fa";

import { FaBuilding } from "react-icons/fa";
import { IoAnalyticsSharp } from "react-icons/io5";
import { GiAutoRepair } from "react-icons/gi";
import { FaBuildingColumns } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";

export const developmentMethodData = (t) => [
    {
        title:t("sd.sectionThree.cardOne.title"),
        description:t("sd.sectionThree.cardOne.desc"),
        icon:<FaEdit />,
    },
    {
        title:t("sd.sectionThree.cardTwo.title"),
        description:t("sd.sectionThree.cardTwo.desc"),
        icon:<FaBuilding />,
    },
    {
        title:t("sd.sectionThree.cardThree.title"),
        description:t("sd.sectionThree.cardThree.desc"),
        icon:<IoAnalyticsSharp />,
    },
    {
        title:t("sd.sectionThree.cardFour.title"),
        description:t("sd.sectionThree.cardFour.desc"),
        icon:<FaBuildingColumns />,
    },
    {
        title:t("sd.sectionThree.cardFive.title"),
        description:t("sd.sectionThree.cardFive.desc"),
        icon:<SlBadge />,
    },
    {
        title:t("sd.sectionThree.cardSix.title"),
        description:t("sd.sectionThree.cardSix.desc"),
        icon:<GiAutoRepair />,
    },
]