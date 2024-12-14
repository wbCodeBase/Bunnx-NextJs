import NumericCounterInfo from "@/components/layout/NumericCounterInfo";
import HeroSection from "@/components/layout/HeroSection";
import OurServices from "@/components/home/OurServices";
import Industries from "@/components/home/Industries";
import CaseStudiesnProjects from "@/components/home/CaseStudiesnProjects";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Solutions from "@/components/home/Solutions";
import TechStackExpertise from "@/components/home/TechStackExpertise";
import CtaSection from "@/components/home/CtaSection";
import CtaSectionMain from "@/components/layout/CtaSectionMain";
import CtaSectionMainOne from "@/components/layout/CtaSectionMainOne";
import CtaSection3 from "@/components/home/CtaSection3";
import TopServices from "@/components/home/TopServices";
import Faqs from "@/components/layout/Faqs";
import Testimonial from "@/components/home/Testimonial";

import heroHomeImage from "/public/brodbot.png"
import { auth } from "./auth";

export default async function Home() {

  const session = await auth()
  console.log("Home - User", session?.user || "Not Authenticated")

  const heroSectionData = {
    title: "Building Digital Trust with Smart IT Solutions",
    // title: "Dynamic Software Engineering, Strategic Consulting & Cost-Effective Outsourcing",
    description: "Empowering businesses across India with comprehensive software development services that transform innovative ideas into powerful digital realities.",
    // description: "Transforming product experiences with data-driven digital strategies such as AI, machine learning, blockchain, IoT, and quantum computing.",
    imageUrl: heroHomeImage,
    ctaRedirectUrl: "#contact-us",
  };

  return (
    <>

      <HeroSection {...heroSectionData} />

      <NumericCounterInfo />

      <OurServices />
      
      <CtaSectionMainOne />

      <Industries />

      <CtaSection />

      <TopServices />

      <Solutions />

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
