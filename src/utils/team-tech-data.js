import React from 'react'
import { TbBrandReactNative } from "react-icons/tb";
import { FaReact, FaAngular, FaHtml5, FaCss3Alt, FaBootstrap, FaVuejs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import {SiJest }from 'react-icons/si';
import {SiExpress } from 'react-icons/si';

import {SiPython }from 'react-icons/si';
import {SiSelenium } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";



export const technologies = [
    { 
      name: "React", 
      value: 2, 
      icon: <FaReact />, 
      colorScheme: "text-blue-400", // React's brand color
      bgcolorScheme: "hover:bg-blue-400" // React's brand color
    },
    { 
      name: "React", 
      value: 2, 
      icon: <RiNextjsFill />, 
      colorScheme: "text-black", // React's brand color
      bgcolorScheme: "hover:bg-gray-400" // React's brand color
    },
  
    { 
      name: "Angular", 
      value: 2, 
      icon: <FaAngular />, 
      colorScheme: "text-red-600" ,// Angular's brand color
      bgcolorScheme: "hover:bg-red-600" // Angular's brand color
    },
    { 
      name: "Vue.js", 
      value: -2, 
      icon: <FaVuejs />, 
      colorScheme: "text-green-500", // Vue's brand color
      bgcolorScheme: "hover:bg-green-500" // Vue's brand color
    },
    { 
      name: "HTML", 
      value: 2, 
      icon: <FaHtml5 />, 
      colorScheme: "text-orange-600", // HTML's brand color
      bgcolorScheme: "hover:bg-orange-600" // HTML's brand color
    },
    { 
      name: "CSS", 
      value: -2, 
      icon: <FaCss3Alt />, 
      colorScheme: "text-blue-600", // CSS's brand color
      bgcolorScheme: "hover:bg-blue-600" // CSS's brand color
    },
    { 
      name: "Tailwind", 
      value: 2, 
      icon: <SiTailwindcss />, 
      colorScheme: "text-teal-400", // Tailwind's brand color
      bgcolorScheme: "hover:bg-teal-400" // Tailwind's brand color
    },
    { 
      name: "Bootstrap", 
      value: -2, 
      icon: <FaBootstrap />, 
      colorScheme: "text-purple-600", // Bootstrap's brand color
      bgcolorScheme: "hover:bg-purple-600" // Bootstrap's brand color
    },
    { 
      name: "React Native", 
      value: -2, 
      icon:<TbBrandReactNative />, 
      colorScheme: "text-blue-400", // React Native shares React's brand color
      bgcolorScheme: "hover:bg-blue-400" // React Native shares React's brand color
    },
    { 
      name: "JavaScript", 
      value: 2, 
      icon: <IoLogoJavascript />, 
      colorScheme: "text-yellow-400", // JavaScript's brand color
      bgcolorScheme: "hover:bg-yellow-400" // JavaScript's brand color
    },
    { 
      name: "TypeScript", 
      value: -2, 
      icon: <SiTypescript />, 
      colorScheme: "text-blue-500", // TypeScript's brand color
      bgcolorScheme: "hover:bg-blue-500" // TypeScript's brand color
    },
    { 
      name: "Jest", 
      value: 2, 
      icon: <SiJest />, 
      colorScheme: "text-purple-600", // Jest's brand color
      bgcolorScheme: "hover:bg-purple-400" // Jest's brand color
    },
    { 
      name: "Express", 
      value: 2, 
      icon: <SiExpress />, 
      colorScheme: "text-black", // Express's brand color
      bgcolorScheme: "hover:bg-gray-600" // Express's brand color
    },
  
    { 
      name: "Python", 
      value: 2, 
      icon: <SiPython />, 
      colorScheme: "text-blue-600", // Python brand color
      bgcolorScheme: "hover:bg-blue-500" // Python brand color
    },
    { 
      name: "Node", 
      value: 2, 
      icon: <FaNodeJs />, 
      colorScheme: "text-green-600", // Node.js brand color
      bgcolorScheme: "hover:bg-green-500" // Node.js brand color
    },
    { 
      name: "Selenium", 
      value: 2, 
      icon: <SiSelenium />, 
      colorScheme: "text-green-600", // Selenium brand color
      bgcolorScheme: "hover:bg-green-500" // Selenium brand color
    },
    
    
  ];
  