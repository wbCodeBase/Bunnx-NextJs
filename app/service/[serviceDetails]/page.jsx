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
import HiringModels from '@/components/services/HiringModels';
import GuideTopics from '@/components/services/GuideTopics';


import Lottie from "lottie-react";
import loaderJson from "../../../public/pageAnimations/loader.json";


import { useGetTemplateContentByStrQuery } from '../../../store/api/myApi';    

function formatparameter(input) {
  return input
    .split('-') // Split the string by hyphen
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
    .join(' '); // Join them back together without hyphens
}

export default function ServiceDetails() {
  const params = useParams();
  const { serviceDetails } = params;



  const { data, error, isLoading } = useGetTemplateContentByStrQuery("service");

  // Handle loading state
  if (isLoading) return <div className='flex items-center justify-center h-screen w-full'><Lottie animationData={loaderJson} loop={true} /></div>;


  // Handle error state
  if (error) return <p>Error fetching template data</p>;
  
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

  const servicesData = [
    {
      title: "Custom Software Development",
      description:
        "We are committed to deliver custom software solutions that perfectly align with your complex technical needs. You Share your requirements, and we'll create a custom application that evolves with your business and user demands.",
      slug: "custom-software-development",
    },
    {
      title: "Software Outsourcing Services",
      description:
        "Our software outsourcing services reduce costs, accelerate timelines, and connect you with top-tier talent to give you a competitive edge. At Bunnx we have domain experts, our team delivers tailored, efficient solutions that meet your business needs.",
      slug: "software-outsourcing",
    },
    {
      title: "Desktop App Development",
      description:
        "We create robust desktop applications for Mac, Windows, and Linux using C++/Qt, .NET, and Python. Our expertise ensures high-performance solutions tailored to your specific requirements, providing seamless functionality across all major operating systems.",
      slug: "",
    },
    {
      title: "Database Integration",
      description:
        "We organize your raw data efficiently, enabling seamless analysis and informed decision-making. Our database development services ensure your data is structured for optimal performance and accessibility, enhancing your ability to derive actionable insights.",
    },
    {
      title: "On-demand Software Teams",
      description:
        "Accelerate development projects and access skilled professionals with our flexible on-demand software teams. Integrate our talent into your workflow for efficient collaboration and faster project delivery.",
      slug: "dedicated-development-teams"
    },
    {
      title: "QA & Testing",
      description:
        "Our certified experts perform thorough testing to detect and resolve any errors or bugs that could affect your software performance. Guarantee the quality, reliability, and performance of your software applications with our QA Experts and testing services. ",
      slug: "qa-testing",
    },
    {
      title: "Ecommerce",
      description:
        "As a leading software development company in India, we offer comprehensive e-commerce solutions, including secure payment gateways and streamlined shopping experiences, ensuring convenience for your customers.",
      slug: "ecommerce",
    },
    {
      title: "Features Advancement",
      description:
        "As a leading software development company in India, we offer comprehensive e-commerce solutions, including secure payment gateways and streamlined shopping experiences, ensuring convenience for your customers.",
      slug: "features-advancement",
    },
    {
      title: "Web App Development",
      description:
        "Our team builds responsive, scalable, and efficient web applications tailored to your business needs. We focus on creating seamless user experiences, ensuring high performance, security, and easy navigation.",
      slug: "web-app-development",
    },
    {
      title: "Devops",
      description:
        "Adopt DevOps to optimize software development and operations. With our expertise in collaboration, automation, continuous integration, and delivery pipelines, we empower your business to achieve greater efficiency, quality, and agility.",
      slug: "devops",
    },
    {
      title: "Mobile App Development",
      description:
        "Our skilled mobile app developers combine deep IT knowledge with extensive hands-on experience across diverse projects. They analyze your business ecosystem to fully understand your needs and goals, delivering tailored solutions that best fit your requirements.",
      slug: "mobile-app-development",
    },
    {
      title: "API & Software Integration",
      description:
        "We utilize API-driven development to seamlessly integrate custom software with your corporate and third-party systems and services. Our approach ensures smooth, efficient connectivity and enhances the functionality of your software solutions.",
      slug: "api-integration",
    },
    {
      title: "Cloud App & Hosting Services",
      description:
        "Leverage our expertise to build secure, scalable cloud applications tailored to your needs. We assess your requirements, develop a risk-mitigation strategy, ensure smooth integration, and optimize performance for maximum efficiency.",

    },
    {
      title: "Support and Maintenance",
      description:
        "At our software development company in India, we prioritise application maintenance just as much as development. We recognize that even the most innovative solutions are only valuable when supported by a stable, well-maintained ecosystem free from bugs and glitches.",
      slug: "",
    },


    {
      title: "Application Support Services",
      description:
        "Ensure uninterrupted business operations with proactive support across all levels (L0, L1, L2, L3). Our experts resolve issues, reduce downtime, and enhance system stability, allowing your business to focus on growth and innovation.",
      slug: "",
    },
    {
      title: "Application Security Management",
      description:
        "Safeguard your software with end-to-end security management. Our team implements proactive threat detection and prevention measures to minimize risks and ensure your applications remain compliant with industry standards.",
      slug: "",
    },
    {
      title: "Application Performance Management",
      description:
        "Achieve peak performance with our application monitoring and optimization services. We ensure your systems run smoothly and efficiently by addressing challenges and improving overall performance for better user experiences.",
      slug: "",
    },
    {
      title: "CI/CD and DevOps Implementation",
      description:
        "Accelerate software delivery with seamless CI/CD and DevOps practices. We enhance your development pipelines, enabling faster releases, reduced errors, and greater efficiency for continuous improvements in your applications.",
      slug: "",
    },
    {
      title: "Cloud Migration",
      description:
        "Future-proof your software with a smooth transition to the cloud. We provide end-to-end cloud migration services, ensuring minimal disruption while enhancing scalability, flexibility, and cost efficiency.",
      slug: "",
    },


  ];

  const heroSectionObj = (data.heroSection).find((heroData) => heroData.fetchOnSlug === serviceDetails)

  console.log("HeroSection data from template obj", heroSectionObj);

  const heroSectionData = {
    titlePrefix: heroSectionObj?.titlePrefix || "Enterprise",
    title: heroSectionObj?.title || formatparameter(serviceDetails),
    description: heroSectionObj?.description || "Custom Software Development Services and Solutions to build top-tier intelligent enterprises with speed and agility.",
    imageUrl: "https://img.freepik.com/premium-photo/astronaut-outer-space-surrounded-by-planets-satellites-generative-ai_1028873-12416.jpg",
    ctaRedirectUrl: heroSectionObj?.ctaRedirectUrl || "#contact-us",
  };



  return (
    <>

      <HeroSection {...heroSectionData} />

      <NumericCounterInfo />

      <Services servicesData={servicesData} />

      <CtaSection2 />

      <ProcessShowcase />

      <Methodology />

      <ChooseUs />

      <HiringModels />

      <GuideTopics />

      <Faqs faqData={faqData} />

    </>
  );
}

