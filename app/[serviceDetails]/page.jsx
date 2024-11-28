'use client'

import { useEffect } from "react";
import { useParams, useRouter, usePathname } from "next/navigation";

import Services from "@/components/services/Services";
import HeroSection from '@/components/layout/HeroSection';
import NumericCounterInfo from "@/components/layout/NumericCounterInfo";
import CtaSectionMain from '@/components/layout/CtaSectionMain';
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


function formatparameter(input) {
  return input
    .split('-') // Split the string by hyphen
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
    .join(' '); // Join them back together without hyphens
}





export default function ServiceDetails() {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const { serviceDetails } = params;




  const { data, error, isLoading } = useGetTemplateContentByStrQuery("service");
  const { data: activeSlugData, error: activeSlugError, isLoading: activeSlugIsLoading } = useGetActiveSlugQuery();

  console.log(activeSlugData, activeSlugError, activeSlugIsLoading);


  // Check if the current path matches any active slug
  useEffect(() => {
    // Wait until activeSlugData is loaded, then check if the pathname matches
    if (!isLoading && activeSlugData) {
      const isSlugActive = activeSlugData.some((item) => `/${item.slug}` === pathname);

      // Redirect to 404 if no matching slug is found
      if (!isSlugActive) {
        router.replace("/404");
      }
    }
  }, [activeSlugData, isLoading, pathname, router]);

  console.log("error", error);


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
    {
      id: "default-5",
      question: "What industries can benefit from custom software solutions?",
      answer: {
        type: "text",
        content: "Custom software is suitable for a wide range of industries, including healthcare, finance, retail, education, and more. It ensures tailored solutions that address specific business needs."
      }
    },
    {
      id: "default-6",
      question: "How do you ensure the software evolves with my business?",
      answer: {
        type: "text",
        content: "We use scalable architectures and modular design, allowing the software to adapt and integrate with your growing needs and emerging technologies."
      }
    },


  ];


  const heroSectionObj = data?.heroSection?.find((heroData) => heroData?.fetchOnSlug === serviceDetails) || {};
  const serviceSectionObj = data?.servicesSection?.filter((serviceData) => serviceData?.fetchOnSlug.includes(serviceDetails)) || [];

  // console.log("HeroSection data from template obj", heroSectionObj);
  // console.log("serviceSection data from template obj", serviceSectionObj);

  const servicesData = (Array.isArray(serviceSectionObj) && serviceSectionObj.length > 0)
    ? serviceSectionObj
    : [
      {
        title: "Custom Software Development",
        description:
          "We are committed to deliver custom software solutions that perfectly align with your complex technical needs. You Share your requirements, and we'll create a custom application that evolves with your business and user demands.",
        ctaRedirectUrl: "custom-software-development",
      },
      {
        title: "Software Outsourcing Services",
        description:
          "Our software outsourcing services reduce costs, accelerate timelines, and connect you with top-tier talent to give you a competitive edge. At Bunnx we have domain experts, our team delivers tailored, efficient solutions that meet your business needs.",
        ctaRedirectUrl: "software-outsourcing",
      },
      {
        title: "Desktop App Development",
        description:
          "We create robust desktop applications for Mac, Windows, and Linux using C++/Qt, .NET, and Python. Our expertise ensures high-performance solutions tailored to your specific requirements, providing seamless functionality across all major operating systems.",
        ctaRedirectUrl: "",
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
        ctaRedirectUrl: "dedicated-development-teams"
      },
      {
        title: "QA & Testing",
        description:
          "Our certified experts perform thorough testing to detect and resolve any errors or bugs that could affect your software performance. Guarantee the quality, reliability, and performance of your software applications with our QA Experts and testing services. ",
        ctaRedirectUrl: "qa-testing",
      },
      {
        title: "Ecommerce",
        description:
          "As a leading software development company in India, we offer comprehensive e-commerce solutions, including secure payment gateways and streamlined shopping experiences, ensuring convenience for your customers.",
        ctaRedirectUrl: "ecommerce",
      },
      {
        title: "Features Advancement",
        description:
          "As a leading software development company in India, we offer comprehensive e-commerce solutions, including secure payment gateways and streamlined shopping experiences, ensuring convenience for your customers.",
        ctaRedirectUrl: "features-advancement",
      },
      {
        title: "Web App Development",
        description:
          "Our team builds responsive, scalable, and efficient web applications tailored to your business needs. We focus on creating seamless user experiences, ensuring high performance, security, and easy navigation.",
        ctaRedirectUrl: "web-app-development",
      },
      {
        title: "Devops",
        description:
          "Adopt DevOps to optimize software development and operations. With our expertise in collaboration, automation, continuous integration, and delivery pipelines, we empower your business to achieve greater efficiency, quality, and agility.",
        ctaRedirectUrl: "devops",
      },
      {
        title: "Mobile App Development",
        description:
          "Our skilled mobile app developers combine deep IT knowledge with extensive hands-on experience across diverse projects. They analyze your business ecosystem to fully understand your needs and goals, delivering tailored solutions that best fit your requirements.",
        ctaRedirectUrl: "mobile-app-development",
      },
      {
        title: "API & Software Integration",
        description:
          "We utilize API-driven development to seamlessly integrate custom software with your corporate and third-party systems and services. Our approach ensures smooth, efficient connectivity and enhances the functionality of your software solutions.",
        ctaRedirectUrl: "api-integration",
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
        ctaRedirectUrl: "",
      },


      {
        title: "Application Support Services",
        description:
          "Ensure uninterrupted business operations with proactive support across all levels (L0, L1, L2, L3). Our experts resolve issues, reduce downtime, and enhance system stability, allowing your business to focus on growth and innovation.",
        ctaRedirectUrl: "",
      },
      {
        title: "Application Security Management",
        description:
          "Safeguard your software with end-to-end security management. Our team implements proactive threat detection and prevention measures to minimize risks and ensure your applications remain compliant with industry standards.",
        ctaRedirectUrl: "",
      },
      {
        title: "Application Performance Management",
        description:
          "Achieve peak performance with our application monitoring and optimization services. We ensure your systems run smoothly and efficiently by addressing challenges and improving overall performance for better user experiences.",
        ctaRedirectUrl: "",
      },
      {
        title: "CI/CD and DevOps Implementation",
        description:
          "Accelerate software delivery with seamless CI/CD and DevOps practices. We enhance your development pipelines, enabling faster releases, reduced errors, and greater efficiency for continuous improvements in your applications.",
        ctaRedirectUrl: "",
      },
      {
        title: "Cloud Migration",
        description:
          "Future-proof your software with a smooth transition to the cloud. We provide end-to-end cloud migration services, ensuring minimal disruption while enhancing scalability, flexibility, and cost efficiency.",
        ctaRedirectUrl: "",
      },

    ];


  const heroSectionData = {
    titlePrefix: heroSectionObj?.titlePrefix || "Enterprise",
    title: heroSectionObj?.title || formatparameter(serviceDetails),
    description: heroSectionObj?.description || "Custom Software Development Services and Solutions to build top-tier intelligent enterprises with speed and agility.",
    imageUrl: "https://img.freepik.com/premium-photo/astronaut-outer-space-surrounded-by-planets-satellites-generative-ai_1028873-12416.jpg",
    ctaText: heroSectionObj?.ctaText || "Get Connected With us",
    ctaRedirectUrl: heroSectionObj?.ctaRedirectUrl || "#contact-us",
  };



  return (
    <>

      <HeroSection {...heroSectionData} />

      <NumericCounterInfo />

      <Services servicesData={servicesData} />

      <CtaSectionMain />

      <ProcessShowcase />

      <Methodology />

      <ChooseUs />

      <EngagementModel hiredevOf={formatparameter(serviceDetails)} />

      <HiringModels />

      <GuideTopics />

      <Faqs faqData={faqData} />

    </>
  );
}







const activeSlug = [
  // Slugs from servicesDataSlugs
  { slug: "cms-development", label: "cms-development", isActive: true },
  { slug: "software-development", label: "software-development", isActive: true },
  { slug: "crm-software-development", label: "crm-software-development", isActive: true },
  { slug: "software-consulting", label: "software-consulting", isActive: true },
  { slug: "it-consulting", label: "it-consulting", isActive: true },
  { slug: "agile-consulting", label: "agile-consulting", isActive: true },
  { slug: "web-app-development", label: "web-app-development", isActive: true },
  { slug: "front-end-development", label: "front-end-development", isActive: true },
  { slug: "backend-development", label: "backend-development", isActive: true },
  { slug: "api-development", label: "api-development", isActive: true },
  { slug: "full-stack-development", label: "full-stack-development", isActive: true },
  { slug: "website-development", label: "website-development", isActive: true },
  { slug: "ecommerce-web-development", label: "ecommerce-web-development", isActive: true },
  { slug: "ecommerce-web-consulting", label: "ecommerce-web-consulting", isActive: true },
  { slug: "ecommerce-advancement", label: "ecommerce-advancement", isActive: true },
  { slug: "ecommerce-maintenance-support", label: "ecommerce-maintenance-support", isActive: true },
  { slug: "staff-augmentation", label: "staff-augmentation", isActive: true },
  { slug: "it-outsourcing", label: "it-outsourcing", isActive: true },
  { slug: "offshore-dedicated-centre", label: "offshore-dedicated-centre", isActive: true },
  { slug: "qa-consulting", label: "qa-consulting", isActive: true },
  { slug: "software-testing", label: "software-testing", isActive: true },
  { slug: "mobile-app-testing", label: "mobile-app-testing", isActive: true },
  { slug: "web-app-testing", label: "web-app-testing", isActive: true },
  { slug: "qa-outsourcing", label: "qa-outsourcing", isActive: true }
];