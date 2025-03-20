import React from 'react'
import { FaOpencart } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";


export const bestChoices = (t) => [
    {
        title: t("md.sectionThree.cardOne.title"),
        description:t("md.sectionThree.cardOne.desc"),
        imagePath:"imageOne" ,
        icon:<FaOpencart />,
    },
    {
        title:t("md.sectionThree.cardTwo.title"),
        description:t("md.sectionThree.cardTwo.desc"),
        imagePath:"imageTwo" ,
        icon:<FaBriefcase />,
    },
    {
        title:t("md.sectionThree.cardThree.title"),
        description:t("md.sectionThree.cardThree.desc"),
        imagePath:"imageThree" ,
        icon:<FaTrophy />,
    }
]