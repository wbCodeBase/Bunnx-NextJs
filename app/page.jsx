import NumericCounterInfo from "@/components/layout/NumericCounterInfo";
// import HeroSection from "@/components/layout/HeroSection";
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
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";


export const metadata = {
  robots: "noindex", // Ensures pages are marked as noindex
}; 


export default async function Home() {

  const session = await auth()
  console.log("Home - User", session?.user || "Not Authenticated")

  const heroSectionObj = {
    title: "Dynamic Software Engineering, Strategic Consulting & Affordable Outsourcing",
    description: "We are an acclaimed Indian software engineering firm dedicated to delivering exceptional outsourced development solutions and expert engineering teams to clients around the world.",
    imageUrl: heroHomeImage,
    ctaText: "Get Connected Now",
    ctaRedirectUrl: "#contact-us",
  };

  return (
    <>

      <section className="borde pb20 bg-gray800 bg-black text-white">
        <div className="flex justify-center flex-wrap container mx-auto sm:w-11/12 w-full">

          <div className="sm:mt12 w-full lg:w-[58%] py-10 px-4 flex justify-center gap-20 flex-col sm:pt-18">
            <div>
              <h1 className="lg:text-5xl text-3xl my-2 font-semibold responsive-heading">{heroSectionObj.title}</h1>
              <p className="lg:text-xl text-lg my-6 font-medium">{heroSectionObj.description}</p>

              <button className="flex items-center justify-center sm:justify-start">
                <Link href={heroSectionObj.ctaRedirectUrl || "/"} className='flex items-center justify-center gap-2 bg[#261E80] p-1 pl-3 font-medium text-lg bg-orange-500 rounded-full mt-4 text-white'><span className="px-2"> {heroSectionObj.ctaText || "Launch Your Project"} </span> <span className='bg-white rounded-full p-3 text-black rotate-45'> <FaLocationArrow /> </span></Link>
              </button>

            </div>
          </div>

          <div className="md:w-[41%] w-full flex sm:p-10 p-4 items-center justify-center">
            <Image
              src={heroSectionObj.imageUrl}
              alt="Digital Brain Visualization"
              className="w-full h-auto"
            />
          </div>

        </div>
      </section>

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
