
// import ServiceDetailsPage from "./serviceComponent";
import metaData from "#/staticDb/meta.json";

import { notFound } from "next/navigation";
import { getActiveSlugs } from "@/lib/api"; // <-- you'll create this server-side fetch
import Services from "@/components/services/Services";
import HeroSection from "@/components/layout/HeroSection";
import NumericCounterInfo from "@/components/layout/NumericCounterInfo";
import ChooseUs from "@/components/services/ChooseUs";
import Faqs from "@/components/layout/Faqs";
import ProcessShowcase from "@/components/services/OurProcess";
import Methodology from "@/components/services/Methodology";
import HiringModels from "@/components/services/HiringModels";
import GuideTopics from "@/components/services/GuideTopics";
import EngagementModel from "@/components/hire/EngagementModel";
import PlaneCta from "@/components/layout/PlaneCta";
import GlassmorphismCta from "@/components/layout/GlassmorphismCta";
import GlassmorphismCta2 from "@/components/layout/GlassmorphismCta2";
import PageTransition from "@/components/PageTransition";
import heroDefaultImg from "/public/developmentServices.jpg";

function formatparameter(input) {
  return input
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}


export async function generateMetadata({ params }) {
  // read route params
  const currentSlug = params.serviceDetails
  const meta = metaData[currentSlug] || {};

  return {
    title: meta.title || "Software Development Services in India | Custom Development Solutions | Bunnx",
    description: meta.description || "Software development services in India for scalable web & mobile apps development.  We believe in innovative and yet cost-effective solutions tailored by expert developers.",
    robots: meta.robots,
    alternates: {
      canonical: currentSlug,
    },
  }
}


const ServiceDetails = async ({ params }) => {

  const { serviceDetails } = params;

  // Fetch slugs server-side
  const activeSlugData = await getActiveSlugs();

  const isValidSlug = activeSlugData?.some((item) => item?.slug === serviceDetails);

  if (!isValidSlug) {
    notFound(); // ✅ Triggers 404 page with correct status code
  }

  return (
    <>

      {/* <PageTransition> */}
        <HeroSection heroDefaultImg={heroDefaultImg} pageSlug={serviceDetails} extractNameFromSlug={formatparameter(serviceDetails)} />
        <NumericCounterInfo />
        <Services serviceDetailPageSlug={serviceDetails} extractNameFromSlug={formatparameter(serviceDetails)} />
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
      {/* </PageTransition> */}


    </>
  )
}

export default ServiceDetails