"use client"


import NumericCounterInfo from "./components/home/NumericCounterInfo";
import HeroSection from "./components/home/HeroSection";
import OurServices from "./components/home/OurServices";
import TechStacknexpertise from "./components/home/TechStacknexpertise";
import CaseStudiesnProjects from "./components/home/CaseStudiesnProjects";
import WhyChooseUs from "./components/home/WhyChooseUs";
import ClientTestimonials from "./components/home/ClientTestimonials";
import CtaSection from "./components/home/CtaSection";



export default function Home() {
  return (
    <>

      <HeroSection />

      <NumericCounterInfo />

      <OurServices />

      <TechStacknexpertise />

      <WhyChooseUs />

      <ClientTestimonials />

      <CtaSection />


    </>
  );
}
