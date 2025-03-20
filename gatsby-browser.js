// gatsby-browser.js
import React from "react";
import MainLayout from "./src/components/MainLayout";
import './src/ui/nprogress.css'
import { I18nextProvider } from "react-i18next";
import i18next from './src/i18n.js'; // Path to your i18n config
export const wrapPageElement = ({ element, props }) => {
  return (
    <I18nextProvider i18n={i18next}>
  <MainLayout {...props}>{element}</MainLayout>
  </I18nextProvider>
  );
};



export const onRouteUpdate = () => {
  // window.scrollTo(0, 0);
  setTimeout(()=>{
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
    
  },1000)
  window.requestAnimationFrame(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  });
};
