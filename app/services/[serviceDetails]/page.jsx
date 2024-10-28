"use client"

import React from "react";
import { useParams } from 'next/navigation';
import OurServices from "@/components/services/OurServices";
import HeroSection from '@/components/layout/HeroSection';
import NumericCounterInfo from "@/components/layout/NumericCounterInfo";

function formatparameter(input) {
  return input
    .split('-') // Split the string by hyphen
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
    .join(' '); // Join them back together without hyphens
}

export default function RouteDetails() {
  const params = useParams();
  const { serviceDetails } = params;

  console.log(serviceDetails);

  const heroSectionData = {
    title: "Enterprise",
    subtitle: formatparameter(serviceDetails),
    description: "Custom Software Development Services and Solutions to build top-tier intelligent enterprises with speed and agility.",
    imageUrl: "https://img.freepik.com/premium-photo/astronaut-outer-space-surrounded-by-planets-satellites-generative-ai_1028873-12416.jpg",
    linkUrl: "#contact-us",
  };

  return (
    <>

      <HeroSection {...heroSectionData} />

      <NumericCounterInfo />

      <OurServices />

    </>
  );
}

