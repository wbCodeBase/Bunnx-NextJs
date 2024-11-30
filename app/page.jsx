"use client"


import NumericCounterInfo from "@/components/layout/NumericCounterInfo";
import HeroSection from "@/components/layout/HeroSection";
import OurServices from "@/components/home/OurServices";
import OurServices2 from "@/components/home/OurServices2";
import CaseStudiesnProjects from "@/components/home/CaseStudiesnProjects";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import IndustryWeServed from "@/components/home/IndustryWeServed";
import TechStackExpertise from "@/components/home/TechStackExpertise";
import CtaSection from "@/components/home/CtaSection";
import CtaSectionMain from "@/components/layout/CtaSectionMain";
import CtaSectionMainOne from "@/components/layout/CtaSectionMainOne";
import CtaSection3 from "@/components/home/CtaSection3";
import BasicComponent from "@/components/home/BasicComponent";
import Faqs from "@/components/layout/Faqs";
import Testimonial from "@/components/home/Testimonial";





export default function Home() {

  const heroSectionData = {
    titlePrefix: "Building",
    title: "Digital Trust with Smart IT Solutions",
    description: "Transforming product experiences with data-driven digital strategies, leveraging cutting-edge technologies such as AI, machine learning, blockchain, IoT, and quantum computing.",
    imageUrl: "https://img.freepik.com/premium-photo/astronaut-outer-space-surrounded-by-planets-satellites-generative-ai_1028873-12416.jpg",
    ctaRedirectUrl: "#contact-us",
  };

  return (
    <>

      <HeroSection {...heroSectionData} />

      <NumericCounterInfo />

      <OurServices />
      
      <CtaSectionMainOne />

      <OurServices2 />

      <BasicComponent />

      <CtaSection />

      <IndustryWeServed />

      <TechStackExpertise />

      <CtaSectionMain />

      <WhyChooseUs />

      <CaseStudiesnProjects />

      <CtaSection3 />

      <Testimonial />

      <Faqs />



    </>
  );
}
