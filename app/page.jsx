"use client"


import NumericCounterInfo from "./components/home/NumericCounterInfo";
import HeroSection from "./components/home/HeroSection";
import OurServices from "./components/home/OurServices";
import TechStacknexpertise from "./components/home/TechStacknexpertise";
import CaseStudiesnProjects from "./components/home/CaseStudiesnProjects";
import WhyChooseUs from "./components/home/WhyChooseUs";
import ClientTestimonials from "./components/home/ClientTestimonials";
import IndustryWeServed from "./components/home/IndustryWeServed";
import NewComponent from "./components/home/NewComponent";
import CtaSection from "./components/home/CtaSection";
import CtaSection2 from "./components/home/CtaSection2";
import CtaSection3 from "./components/home/CtaSection3";



export default function Home() {
  return (
    <>

      <HeroSection />

      <NumericCounterInfo />

      <TechStacknexpertise />

      <OurServices />

      <CtaSection />

      <NewComponent />

      <WhyChooseUs />

      <CtaSection2 />

      <CaseStudiesnProjects />

      <CtaSection3 />

      <IndustryWeServed />

      {/* <ClientTestimonials /> */}



    </>
  );
}
