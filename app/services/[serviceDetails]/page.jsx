'use client';

import { useParams } from 'next/navigation';

import React from "react";
import Services from "@/components/services/Services";
import HeroSection from '@/components/layout/HeroSection';
import NumericCounterInfo from "@/components/layout/NumericCounterInfo";
import CtaSection2 from '@/components/layout/CtaSection2';
import ChooseUs from "@/components/services/ChooseUs";
import Faqs from "@/components/layout/Faqs";
import ProcessShowcase from '@/components/services/OurProcess';
import Methodology from '@/components/services/Methodology';
import GuideTopics from '@/components/services/GuideTopics';


import Lottie from "lottie-react";
import loaderJson from "../../../public/pageAnimations/loader.json";


import { useGetHeroSecItemByStrQuery } from '../../../store/api/myApi';

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
  // var data;

  const faqData = [

    {
      id: "default-1",
      question: "What technology stacks do you use?",
      answer: {
        type: "text",
        content: "We work with a wide array of technologies based on project needs, including frontend frameworks like React and Angular, backend technologies such as Node.js, Python, and Java, as well as mobile frameworks like Flutter and React Native. We can also integrate with popular cloud providers and use databases like MongoDB, MySQL, and PostgreSQL."
      }
    },
    {
      id: "default-2",
      question: "How long does a typical software development project take?",
      answer: {
        type: "text",
        content: "The timeline varies based on project complexity, features, and requirements. Small projects may take a few weeks, while larger or more complex solutions could take several months. After an initial consultation, we can provide a more accurate timeline tailored to your project's specifics."
      }
    },
    {
      id: "default-3",
      question: "How do you ensure the quality and security of the software?",
      answer: {
        type: "text",
        content: "We follow industry best practices in testing, including functional, integration, and security testing. Our team conducts rigorous quality assurance and performance optimization to ensure reliability and robustness. We also implement the latest security protocols to protect your data and application."
      }
    },
    {
      id: "default-4",
      question: "Will I own the software once it’s developed?",
      answer: {
        type: "text",
        content: "Yes, once the project is complete and all payments are made, you retain full ownership of the code and the software. We will provide you with all necessary documentation and source code, allowing you complete control over the final product."
      }
    },


  ];

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

      <ProcessShowcase />

      <Methodology />

      <ChooseUs />

      <GuideTopics />

      <Faqs faqData={faqData} />

    </>
  );
}

