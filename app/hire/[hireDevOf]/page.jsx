"use client"


import { useEffect } from "react";
import { useParams, useRouter, usePathname } from "next/navigation";


import TechExpertise from "@/components/hire/TechExpertise";
import EngagementModel from "@/components/hire/EngagementModel";
import BenefitsHiring from "@/components/hire/BenefitsHiring";
import HiringModelsHire from "@/components/hire/HiringModelsHire";
import HeroSection from '@/components/layout/HeroSection';
import NumericCounterInfo from "@/components/layout/NumericCounterInfo";
import CtaSectionMain from '@/components/layout/CtaSectionMain';
import ChooseUs from "@/components/services/ChooseUs";
import Faqs from "@/components/layout/Faqs";
import StepToHire from "@/components/hire/StepToHire";

import { useGetTemplateContentByStrQuery } from '../../../store/api/myApi';   

import Lottie from "lottie-react";
import loaderJson from "/public/pageAnimations/loader.json";
import Techcard from "@/components/hire/Techcard";


function formatparameter(input) {
  return input
    .split('-') // Split the string by hyphen
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
    .join(' '); // Join them back together without hyphens
}


const activeSlug = [
  // Slugs from hireDataSlugs
  { slug: "frontend-developer", label: "frontend-developer", isActive: true },
  { slug: "mobile-developer", label: "mobile-developer", isActive: true },
  { slug: "full-stack-developer", label: "full-stack-developer", isActive: true },
  { slug: "devops-developer", label: "devops-developer", isActive: true },
  { slug: "cms-developer", label: "cms-developer", isActive: true },
  { slug: "ecommerce-developer", label: "ecommerce-developer", isActive: true },
  { slug: "php-developer", label: "php-developer", isActive: true },
  { slug: "laravel-developer", label: "laravel-developer", isActive: true },
  { slug: "node-developer", label: "node-developer", isActive: true },
  { slug: "codeigniter-developer", label: "codeigniter-developer", isActive: true },
  { slug: "c-sharp-developer", label: "c-sharp-developer", isActive: true },
  { slug: "ruby-on-rails-developer", label: "ruby-on-rails-developer", isActive: true },
  { slug: "django-developer", label: "django-developer", isActive: true },
  { slug: "golang-developer", label: "golang-developer", isActive: true },
  { slug: "java-developer", label: "java-developer", isActive: true },
  { slug: "dot-net-developer", label: "dot-net-developer", isActive: true },
  { slug: "nextJs-developer", label: "nextJs-developer", isActive: true },
  { slug: "reactJs-developer", label: "reactJs-developer", isActive: true },
  { slug: "angularJs-developer", label: "angularJs-developer", isActive: true },
  { slug: "vueJs-developer", label: "vueJs-developer", isActive: true },
  { slug: "wordpress-developer", label: "wordpress-developer", isActive: true },
  { slug: "drupal-developer", label: "drupal-developer", isActive: true },
  { slug: "sitecore-developer", label: "sitecore-developer", isActive: true },
  { slug: "magento-developer", label: "magento-developer", isActive: true },
  { slug: "shopify-developer", label: "shopify-developer", isActive: true },
  { slug: "squarespace-developer", label: "squarespace-developer", isActive: true },
  { slug: "android-developer", label: "android-developer", isActive: true },
  { slug: "flutter-developer", label: "flutter-developer", isActive: true },
  { slug: "ios-developer", label: "ios-developer", isActive: true },
  { slug: "swift-developer", label: "swift-developer", isActive: true },
  { slug: "iconic-developer", label: "iconic-developer", isActive: true },
  { slug: "react-native-developer", label: "react-native-developer", isActive: true },
  { slug: "mean-developer", label: "mean-developer", isActive: true },
  { slug: "mern-developer", label: "mern-developer", isActive: true },
  { slug: "azure-developer", label: "azure-developer", isActive: true },
  { slug: "aws-developer", label: "aws-developer", isActive: true },
  { slug: "digital-ocean-developer", label: "digital-ocean-developer", isActive: true },
];



export default function HireDevOf() {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const { hireDevOf } = params;

    // Check if the current path matches any active slug
    useEffect(() => {
      if (!activeSlug.some((item) => `/hire/${item.slug}` === pathname)) {
        router.replace("/404"); // Adjust the path to match your 404 page route
      }
      console.log("pathname", pathname);
      
    }, [pathname, router]);

  const { data, error, isLoading } = useGetTemplateContentByStrQuery("hire");

  // Handle loading state
  if (isLoading || error) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        {isLoading && <Lottie animationData={loaderJson} loop={true} />}
        {error && <p>Error fetching template data</p>}
      </div>
    );
  }

  const faqData = [

    {
        id: "default-2",
        question: "How can I hire a PHP developer in just 5 steps?",
        answer: {
            type: "list",
            para: "Hiring a PHP developer is simple:",
            content: [
                "Drop an Inquiry",
                "Consult with Our Experts",
                "Select an Engagement Model",
                "Sign Off and Begin Work",
                "Scale Your Team"
            ]
        }
    },
    {
      id: "default-8",
      question:  "What hiring models do you offer for developers?",
      answer: {
          type: "paragraph",
          headPara: "We provide flexible models:",
          content: [
              { title: "Monthly Based", para: "Hire offshore staff for up to 160 hours/month with monthly billing cycles." },
              { title: "Hourly Based", para: "Pay for hours worked with real-time updates via timesheets." },
              { title: "Fixed-Cost Projects", para: "Establish a project cost, scope, and timeline before starting." },
          ]
      }
  },
    {
        id: "default-1",
        question: "Can I scale my team during the project?",
        answer: {
            type: "text",
            content: "Yes, you can easily scale your team at any stage of the project based on evolving requirements."
        }
    },
    {
        id: "default-7",
        question: "How does the offshore hiring process work?",
        answer: {
            type: "text",
            content: "Our offshore developers integrate seamlessly with your team, working remotely while maintaining effective communication and delivering high-quality results."
        }
    },
    {
        id: "default-4",
        question: "Can I hire developers on an hourly basis for small tasks?",
        answer: {
            type: "text",
            content: "Yes, our hourly model allows flexibility to add or revoke hours as needed, with real-time updates and communication through your preferred channels."
        }
    },
    {
        id: "default-5",
        question: "Do you offer post-project support?",
        answer: {
            type: "text",
            content: "Yes, our developers can assist with post-project maintenance and updates to ensure smooth performance after deployment."
        }
    },
   
    {
        id: "default-6",
        question: "How do I book a consultation?",
        answer: {
            type: "text",
            content: "You can book a consultation directly through our website by filling out a form or contacting our team to discuss your requirements."
        }
    },
   



];


  const heroSectionObj = (data.heroSection).find((heroData) => heroData.fetchOnSlug === hireDevOf) || {};
  const serviceSectionObj = (data?.servicesSection).filter((serviceData) => serviceData?.fetchOnSlug.includes(hireDevOf)) || [];
  
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
    titlePrefix: heroSectionObj?.titlePrefix || "Hire",
    title: heroSectionObj?.title || formatparameter(hireDevOf), 
    description: heroSectionObj?.description || "Our skilled php developers seamlessly integrate with your team, offering flexible engagement models with Monthly contracts, part-time collaboration and hourly arrangements.",
    imageUrl: "https://img.freepik.com/premium-photo/astronaut-outer-space-surrounded-by-planets-satellites-generative-ai_1028873-12416.jpg",
    ctaText: heroSectionObj?.ctaText || "Book a Consultation",
    ctaRedirectUrl: heroSectionObj?.ctaRedirectUrl || "#contact-us",
  };




  return (
    <>

      <HeroSection {...heroSectionData} />

      <NumericCounterInfo />

      <TechExpertise servicesData={servicesData} />

      <CtaSectionMain />

      <BenefitsHiring />

      <EngagementModel hiredevOf={formatparameter(hireDevOf)} />

      <HiringModelsHire />

      <Techcard />

      <CtaSectionMain />

      <StepToHire hiredevOf={formatparameter(hireDevOf)} />

      <ChooseUs />

      <Faqs faqData={faqData} />


    </>
  );
}

