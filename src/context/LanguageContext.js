import i18next from 'i18next';
import React, { useEffect, useState } from 'react';
import { createContext, useContext } from "react";

const LanguageContext  = createContext()

export const LanguageProvider = ({children}) => {
    const [language,setLanguage] = useState("en");

    const toggleLanguage = () => {
        const newLanguage = language === "en" ? "ar" : "en";
        setLanguage(newLanguage);
        i18next.changeLanguage(newLanguage);
    };
    useEffect(() => {
        document.body.dir = i18next.dir(language);
    }, [language]);
    return(
        <LanguageContext.Provider value={{language,toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}
export const useLanguage = () => useContext(LanguageContext )