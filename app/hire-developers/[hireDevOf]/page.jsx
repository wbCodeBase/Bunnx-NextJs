"use client"

import React from "react";
import { useParams } from 'next/navigation';
import Services from "@/components/services/Services";
import HeroSection from '@/components/layout/HeroSection';
import NumericCounterInfo from "@/components/layout/NumericCounterInfo";
import CtaSection2 from '@/components/layout/CtaSection2';
import ChooseUs from "@/components/services/ChooseUs";
import Faqs from "@/components/home/Faqs";

function formatparameter(input) {
  return input
    .split('-') // Split the string by hyphen
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
    .join(' '); // Join them back together without hyphens
}

export default function HireDevOf() {
  const params = useParams();
  const { hireDevOf } = params;

  console.log(hireDevOf);

  const heroSectionData = {
    title: "Enterprise",
    subtitle: formatparameter(hireDevOf),
    description: "Custom Software Development Services and Solutions to build top-tier intelligent enterprises with speed and agility.",
    imageUrl: "https://img.freepik.com/premium-photo/astronaut-outer-space-surrounded-by-planets-satellites-generative-ai_1028873-12416.jpg",
    linkUrl: "#contact-us",
  };

  return (
    <>

      <HeroSection {...heroSectionData} />

      <NumericCounterInfo />

      <Services />

      <CtaSection2 />

      <ChooseUs />

      <Faqs/>

    </>
  );
}

