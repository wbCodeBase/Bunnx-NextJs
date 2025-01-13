'use client'

import { useParams, useRouter, usePathname } from "next/navigation";

import Services from "@/components/services/Services";
import HeroSection from '@/components/layout/HeroSection';
import NumericCounterInfo from "@/components/layout/NumericCounterInfo";
import ChooseUs from "@/components/services/ChooseUs";
import Faqs from "@/components/layout/Faqs";
import ProcessShowcase from '@/components/services/OurProcess';
import Methodology from '@/components/services/Methodology';
import HiringModels from '@/components/services/HiringModels';
import GuideTopics from '@/components/services/GuideTopics';
import EngagementModel from '@/components/hire/EngagementModel';


import Lottie from "lottie-react";
import loaderJson from "../../public/pageAnimations/loader.json";

import { useGetTemplateContentByStrQuery, useGetActiveSlugQuery } from '../../store/api/myApi';

import heroBrain from "/public/developmentServices.jpg"


import PlaneCta from '@/components/layout/PlaneCta';
import GlassmorphismCta from "@/components/layout/GlassmorphismCta";
import GlassmorphismCta2 from "@/components/layout/GlassmorphismCta2";


function formatparameter(input) {
  return input
    .split('-') // Split the string by hyphen
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
    .join(' '); // Join them back together without hyphens
}




export default function ServiceDetailsComp() {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const { serviceDetails } = params;



  const { data, error, isLoading } = useGetTemplateContentByStrQuery("service");
  const { data: activeSlugData, error: activeSlugError, isLoading: activeSlugIsLoading } = useGetActiveSlugQuery();

  // console.log(activeSlugData, activeSlugError, activeSlugIsLoading);


  if (isLoading || activeSlugIsLoading || activeSlugError || error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-full space-y-4">
        {/* Show loader if either loading flag is true */}
        {(isLoading || activeSlugIsLoading) && (
          <div className="flex items-center justify-center h-screen w-full">
            <Lottie animationData={loaderJson} loop={true} />
          </div>
        )}

        {/* Display error messages */}
        {error && (
          <p className="text-red-500 text-lg">
            Error fetching template data: {error?.data?.error || error?.message || "Unknown error"}
          </p>
        )}
        {activeSlugError && (
          <p className="text-red-500 text-lg">
            Error fetching active slug data: {activeSlugError?.data?.error || activeSlugError?.message || "Unknown error"}
          </p>
        )}
      </div>
    );
  }





  if (!isLoading && activeSlugData) {
    const isSlugActive = activeSlugData.some((item) => `/${item.slug}` === pathname);

    // Redirect to 404 if no matching slug is found
    if (!isSlugActive) {
      router.replace("/404");
      return null
    }
  }



  const heroSectionObj = data?.heroSection?.find((heroData) => heroData?.fetchOnSlug?.slug === serviceDetails) || {};

  const serviceSectionObj = data?.servicesSection?.filter((service) => service?.fetchOnSlug?.map((slug) => slug?.slug).includes(serviceDetails)) || [];


  const servicesData = (Array.isArray(serviceSectionObj) && serviceSectionObj.length > 0)
    ? serviceSectionObj
    : [
      {
        title: "Front-End Development",
        description:
          "Take the user level to the next level and develop a flawless website with the top front end development company.",
        ctaRedirectUrl: {
          slug: "front-end-development-services",
        }
      },
      {
        title: "Back-End Development",
        description:
          "Redesign the future of your web presence with a flawlessly tuned website, crafted by the wizards of the best back end development.",
        ctaRedirectUrl: {
          slug: "back-end-development-services",
        }
      },
      {
        title: "Full Stack Development",
        description:
          "Full Stack Development involves building and managing both front-end and back-end of web applications, ensuring seamless functionality.",
        ctaRedirectUrl: {
          slug: "full-stack-development",
        },
      },
      {
        title: "Software Development",
        description: "Custom Software Development Services and Solutions to build top-tier intelligent enterprises with speed and agility.",
        ctaRedirectUrl: {
          slug: "best-software-development-company-in-india",
        },
      },

    ];




  const heroSectionData = {
    title: heroSectionObj?.title || formatparameter(serviceDetails),
    description: heroSectionObj?.description || "Custom Software Development Services and Solutions to build top-tier intelligent enterprises with speed and agility.",
    imageUrl: heroBrain,
    ctaText: heroSectionObj?.ctaText || "Get Connected With us",
    ctaRedirectUrl: heroSectionObj?.ctaRedirectUrl || "#contact-us",
  };



  return (
    <>

      <HeroSection {...heroSectionData} />

      <NumericCounterInfo />

      <Services servicesData={servicesData} serviceDetailPageSlug={serviceDetails} extractNameFromSlug={formatparameter(serviceDetails)} />

      <PlaneCta serviceDetailPageSlug={serviceDetails} />

      <ProcessShowcase serviceDetailPageSlug={serviceDetails} />

      <Methodology serviceDetailPageSlug={serviceDetails} />

      <ChooseUs serviceDetailPageSlug={serviceDetails} />

      <GlassmorphismCta serviceDetailPageSlug={serviceDetails} />

      <EngagementModel serviceDetailPageSlug={serviceDetails} hiredevOf={formatparameter(serviceDetails)} />

      <HiringModels serviceDetailPageSlug={serviceDetails} />

      <GlassmorphismCta2 serviceDetailPageSlug={serviceDetails} />

      <GuideTopics serviceDetailPageSlug={serviceDetails} />

      <Faqs serviceDetailPageSlug={serviceDetails} />

    </>
  );
}
