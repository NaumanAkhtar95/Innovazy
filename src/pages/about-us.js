import React, { useEffect } from "react"
import "../components/hero/hero.css"
import AboutLandingSection from "../components/about/AboutLandingSection"
import AboutChooseUs from "../components/about/AboutChooseUs"
import AboutWhoAreWe from "../components/about/AboutWhoAreWe"
import AboutUXUX from "../components/about/AboutUXUX"
import AboutCreation from "../components/about/AboutCreation"
import CallToAction from "../ui/CallToAction"
import { useLocation } from "@reach/router";

const AboutUs = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]); 
  return (
    <>
      <AboutLandingSection />
     
      <AboutChooseUs />
      <AboutWhoAreWe />
      <AboutCreation />
      <AboutUXUX />
      <CallToAction />
    </>
  )
}

export default AboutUs
