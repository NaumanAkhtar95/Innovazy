import * as React from "react";
import AboutSection from "../components/hero/AboutSection";
import BenefitSection from "../components/hero/BenefitSection";
import ClientsBusiness from "../components/hero/ClientsBusiness";
import ContactSection from "../components/hero/ContactSection";
import HomeSection from "../components/hero/HomeSection";
import ServicesSection from "../components/hero/ServicesSection";
import TeamSection from "../components/hero/TeamSection";
import Testimonials from "../components/hero/Testimonials";
import MetaData from "../components/MetaData";
import "../styles/global.css";
import CallToAction from "../ui/CallToAction";
import Loader from "../ui/Loader";
import { useTranslation } from "react-i18next";

export default function Home() {
  const [isLoading, setIsLoading] = React.useState(true);
  const {i18n} = useTranslation()

  React.useEffect(() => {
    setIsLoading(false)

  }, []);
  return <div className="mt-[140px] sm:mt-[120px]">

 {isLoading?(
<Loader/>
    ):( 
<>
<MetaData title="Innovazy - Home" description="We offer innovative, creative and advanced IT solutions to Businesses and Industries around the Globe" keywords="Innovazy, IT Solutions" />
<HomeSection />
<AboutSection />
<ClientsBusiness />
<ServicesSection />
<CallToAction />
<TeamSection />
<BenefitSection />
{i18n.language === "en" && <Testimonials />}

<ContactSection />
</>
    )}
  </div>;
}
