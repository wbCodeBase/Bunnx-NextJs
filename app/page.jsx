"use client"


import NumericCounterInfo from "@/components/layout/NumericCounterInfo";
import HeroSection from "@/components/layout/HeroSection";
import OurServices from "@/components/home/OurServices";
import TechStacknexpertise from "@/components/home/TechStacknexpertise";
import CaseStudiesnProjects from "@/components/home/CaseStudiesnProjects";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import IndustryWeServed from "@/components/home/IndustryWeServed";
import NewComponent from "@/components/home/NewComponent";
import CtaSection from "@/components/home/CtaSection";
import CtaSection2 from "@/components/home/CtaSection2";
import CtaSection3 from "@/components/home/CtaSection3";
import BasicComponent from "@/components/home/BasicComponent";
import Faqs from "@/components/home/Faqs";



export default function Home() {

  const heroSectionData = {
    title: "Enterprise",
    subtitle: "Software Development Company",
    description: "Custom Software Development Services and Solutions to build top-tier intelligent enterprises with speed and agility.",
    imageUrl: "https://img.freepik.com/premium-photo/astronaut-outer-space-surrounded-by-planets-satellites-generative-ai_1028873-12416.jpg",
    linkUrl: "#contact-us",
  };

  return (
    <>

      <HeroSection {...heroSectionData} />

      <NumericCounterInfo />

      <TechStacknexpertise />

      <OurServices />

      <BasicComponent />

      <CtaSection />

      <NewComponent />

      <IndustryWeServed />

      <WhyChooseUs />

      <CtaSection2 />

      <CaseStudiesnProjects />

      <CtaSection3 />

      <Faqs />



    </>
  );
}
