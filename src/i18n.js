import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';

i18next
  .use(initReactI18next)
  .use(Backend)
  .init({
    debug: true,
    lng: "en", // Set default language
    fallbackLng: "en",
      ns: ['home', 'about','common','cloudComputing','graphicDesign','header','mobileDevelopment','qa','services','softwareDevelopment','team','testimonials','uiux','webDevelopment'],
  defaultNS: 'home',
    backend: {
    //   loadPath: "/locales/{{lng}}/translation.json", // Static folder serves from root
    loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });
