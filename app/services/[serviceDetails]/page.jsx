'use client';

import { useParams } from 'next/navigation';

import React from "react";
import Services from "@/components/services/Services";
import HeroSection from '@/components/layout/HeroSection';
import NumericCounterInfo from "@/components/layout/NumericCounterInfo";
import CtaSection2 from '@/components/layout/CtaSection2';
import ChooseUs from "@/components/services/ChooseUs";
import Faqs from "@/components/home/Faqs";

// import { useGetItemByIdQuery } from '../../../store/api/myApi';

function formatparameter(input) {
  return input
    .split('-') // Split the string by hyphen
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
    .join(' '); // Join them back together without hyphens
}

export default function ServiceDetails() {
  const params = useParams();
  const { serviceDetails } = params;

  console.log(serviceDetails);

  // const { data, error, isLoading } = useGetItemByIdQuery(serviceDetails);

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;



  const heroSectionData = {
    title: "Enterprise",
    subtitle: formatparameter(serviceDetails),
    description: "Custom Software Development Services and Solutions to build top-tier intelligent enterprises with speed and agility.",
    imageUrl: "https://img.freepik.com/premium-photo/astronaut-outer-space-surrounded-by-planets-satellites-generative-ai_1028873-12416.jpg",
    linkUrl: "#contact-us",
  };

  return (
    <>

      {/* <div>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
      </div> */}

      <HeroSection {...heroSectionData} />

      <NumericCounterInfo />

      <Services />

      <CtaSection2 />

      <ChooseUs />

      <Faqs />

    </>
  );
}

