import NumericCounterInfo from "@/components/layout/NumericCounterInfo";
import HeroSection from "@/components/layout/HeroSection";
import OurServices from "@/components/home/OurServices";
import Industries from "@/components/home/Industries";
import CaseStudiesnProjects from "@/components/home/CaseStudiesnProjects";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Solutions from "@/components/home/Solutions";
import TechStackExpertise from "@/components/home/TechStackExpertise";
import TopServices from "@/components/home/TopServices";
import Faqs from "@/components/layout/Faqs";
import Testimonial from "@/components/home/Testimonial";

import PlaneCta from "@/components/layout/PlaneCta";
import PlaneCta2 from "@/components/layout/PlaneCta2";
import GlassmorphismCta from "@/components/layout/GlassmorphismCta";
import GlassmorphismCta2 from "@/components/layout/GlassmorphismCta2";

import heroHomeImage from "/public/brodbot.png"
import { auth } from "@/auth";


export const metadata = {
  robots: "noindex", // Ensures pages are marked as noindex
};


export default async function Home() {

  const session = await auth()
  console.log("Home - User", session?.user || "Not Authenticated")

  const heroSectionData = {
    title: "Dynamic Software Engineering, Strategic Consulting & Affordable Outsourcing",
    description: "We are an acclaimed Indian software engineering firm dedicated to delivering exceptional outsourced development solutions and expert engineering teams to clients around the world.",
    imageUrl: heroHomeImage,
    ctaRedirectUrl: "#contact-us",
  };

  return (
    <>

      <HeroSection {...heroSectionData} />

      <NumericCounterInfo />

      <OurServices />

      <PlaneCta />

      <Industries />

      <GlassmorphismCta />

      <TopServices />

      <Solutions />

      <TechStackExpertise />

      <PlaneCta2 />

      <WhyChooseUs />

      <CaseStudiesnProjects />

      <GlassmorphismCta2 />

      <Testimonial />

      <Faqs />



    </>
  );
}
