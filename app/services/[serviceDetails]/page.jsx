'use client';

import { useParams } from 'next/navigation';

import React from "react";
import Services from "@/components/services/Services";
import HeroSection from '@/components/layout/HeroSection';
import NumericCounterInfo from "@/components/layout/NumericCounterInfo";
import CtaSection2 from '@/components/layout/CtaSection2';
import ChooseUs from "@/components/services/ChooseUs";
import Faqs from "@/components/home/Faqs";

import { useGetHeroSecItemByStrQuery } from '../../../store/api/myApi';

import Lottie from "lottie-react";
import loaderJson from "../../../public/pageAnimations/loader.json";

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

  const { data, error, isLoading } = useGetHeroSecItemByStrQuery(serviceDetails);

  // Handle loading state
  if (isLoading) return <div className='flex items-center justify-center h-screen w-full'><Lottie animationData={loaderJson} loop={true} /></div>;


  // Handle error state
  if (error) return <p>Error fetching data</p>;


  const heroSectionData = {
    titlePrefix: data?.titlePrefix || "Enterprise",
    title: data?.title || formatparameter(serviceDetails),
    description: data?.description || "Custom Software Development Services and Solutions to build top-tier intelligent enterprises with speed and agility.",
    imageUrl: "https://img.freepik.com/premium-photo/astronaut-outer-space-surrounded-by-planets-satellites-generative-ai_1028873-12416.jpg",
    ctaRedirectUrl: data?.ctaRedirectUrl || "#contact-us",
  };


  return (
    <>


      <HeroSection {...heroSectionData} />

      <NumericCounterInfo />

      <Services />

      <CtaSection2 />

      <ChooseUs />

      <Faqs />

    </>
  );
}

