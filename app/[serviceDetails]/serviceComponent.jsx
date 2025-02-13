'use client'

import { useParams, useRouter } from "next/navigation";

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

import { useGetPageContentByStrQuery, useGetActiveSlugQuery } from '../../store/api/myApi';
import heroDefaultImg from "/public/developmentServices.jpg"

import PlaneCta from '@/components/layout/PlaneCta';
import GlassmorphismCta from "@/components/layout/GlassmorphismCta";
import GlassmorphismCta2 from "@/components/layout/GlassmorphismCta2";


import PageTransition from "@/components/PageTransition";
import { AnimatePresence } from "framer-motion";


function formatparameter(input) {
  return input
    .split('-') // Split the string by hyphen
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
    .join(' '); // Join them back together without hyphens
}



export default function ServiceDetailsComp() {
  const params = useParams();
  const router = useRouter();
  const { serviceDetails } = params;


  const { data: pageContentData, error: pageContentError, isLoading: pageContentIsLoading } = useGetPageContentByStrQuery({
    templateName: "service",
    pageSlug: serviceDetails
  });

  // const { data, error, isLoading } = useGetTemplateContentByStrQuery("service");
  const { data: activeSlugData, error: activeSlugError, isLoading: activeSlugIsLoading } = useGetActiveSlugQuery();


  console.log(pageContentError);


  if (pageContentIsLoading || pageContentError || activeSlugIsLoading || activeSlugError) {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-full space-y-4">
        {/* Show loader if either loading flag is true */}
        {(pageContentIsLoading) && (
          <div className="flex items-center justify-center h-screen w-full">
            <Lottie animationData={loaderJson} loop={true} />
          </div>
        )}

        {/* Display error messages */}
        {pageContentError && (
          <p className="text-red-500 text-lg">
            Error fetching page data: {pageContentError?.data?.error || pageContentError?.message || "Unknown error"}
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



  if (activeSlugData) {
    const isSlugActive = activeSlugData?.some((item) => `${item?.slug}` === serviceDetails);

    // Redirect to 404 if no matching slug is found
    if (!isSlugActive) {
      router.replace("/404");
      return null
    }
  }



  // const heroSectionObj = data?.heroSection?.find((heroData) => heroData?.fetchOnSlug?.slug === serviceDetails) || {};

  // const serviceSectionObj = data?.servicesSection?.filter((service) => service?.fetchOnSlug?.map((slug) => slug?.slug).includes(serviceDetails)) || [];




  return (
    <>

      <AnimatePresence mode="wait">
        <PageTransition key={router.route}>

          <HeroSection heroSectionObj={pageContentData?.heroSection} heroDefaultImg={heroDefaultImg} pageSlug={serviceDetails} extractNameFromSlug={formatparameter(serviceDetails)} />

          <NumericCounterInfo />

          <Services serviceSectionObj={pageContentData?.servicesSection} serviceDetailPageSlug={serviceDetails} extractNameFromSlug={formatparameter(serviceDetails)} />

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

        </PageTransition>
      </AnimatePresence>
    </>
  );
}
