"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { createLinkedContent } from '#/utils/LinkBuilder';
// import heroDefault from "/public/heroDefault.png"
import { FaLocationArrow } from "react-icons/fa";

// Keep value empty if no redirection is required 
const keywordToSlug = {
  'top front end development company': 'front-end-development-services',
  'back end development company': 'back-end-development-services',
  'software development company in India': 'best-software-development-company-in-india',
  'software development services': 'best-software-development-company-in-india',
  'CRM software solutions': 'crm-software-development-services',
  "custom software development company": 'custom-software-development-services',
  "IT consulting services India": 'it-consulting-services',
  "web development company": 'web-application-development-services',
  "mobile app development company": 'mobile-app-development-services',
};

const HeroSection = ({ pageSlug, extractNameFromSlug, heroDefaultImg }) => {


  const heroSection = [  {
    "title": "Front End Development Services",
    "description": "Take the user level to the next level and develop a flawless website with the top front end development company.",
    "ctaText": "Get started with us",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "front-end-development-services"
  },
  {
    "title": "Software Development Services",
    "description": "Bunnx is Leading software Development Company in India to plan, implement new softwares and upgrades, improve customer service, and drive productivity. Enhance user satisfaction, drive results and accelerate innovation with Leading software development services that exceed expectations in functionality and growth.",
    "ctaText": "Get started with us",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "best-software-development-company-in-india"
  },
  {
    "title": "Back End Development Services",
    "description": "Behind every great app is a strong backend. We realise this and write the codes that make things work in the background of your website. This makes us the best back end development company in India.",
    "ctaText": "Get started with us",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "back-end-development-services"
  },
  {
    "title": "CRM Software Development Services",
    "description": "Using smooth CRM software solutions created by professionals at a top CRM software development company, you can't reimagine how your company will operate in the future.",
    "ctaText": "Get Connected Now",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "crm-software-development-services"
  },
  {
    "title": "Custom Software Development Services",
    "description": "Whether it’s building an app with real-time analytics, integrating advanced APIs, or optimizing performance for heavy user traffic, our custom software development company handles the technical complexities so you can offer your users the best.",
    "ctaText": "Get Connected Now",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "custom-software-development-services"
  },
  {
    "title": "Software Development Consultants",
    "description": "With smart software consulting services, we help you rethink how your business runs, simpler, faster, and more efficiently. As one of India’s leading software consulting companies, we’re all about creating solutions that actually work for you.",
    "ctaText": "Get Connected Now",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "software-development-consultants"
  },
  {
    "title": "IT Consulting Services",
    "description": "With our IT consulting services India, you can completely change how your business operates and gets ready for the future. As one of India’s top IT consulting firms, it brings innovation to the core of your operations.",
    "ctaText": "Get Connected Now",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "it-consulting-services"
  },
  {
    "title": "Web Application Development Services",
    "description": "Web applications should do more than just functioning. And hence, our web development company builds such apps that don’t just work but leave a lasting impression. Every project we take on is crafted with a lot of detailed work while balancing design.",
    "ctaText": "Get Connected Now",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "web-application-development-services"
  },
  {
    "title": "Mobile App Development Services",
    "description": "Get futuristic mobile experiences with apps that go beyond the ordinary. Our mobile app development company creates a balance between design and performance. We also excel in collaboration and precision. From wireframes to the final launch, we pay attention to every detail.",
    "ctaText": "Get Connected Now",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "mobile-app-development-services"
  },
  {
    "title": "API Development & Integration Services",
    "description": "We design APIs that make your systems work better together. With our API Development & Integration services, your applications can communicate effortlessly and your business can run smartly. Get the best outcome of API development & integration with no hassle at all!",
    "ctaText": "Get started with us",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "api-development-and-integration-services"
  },
  {
    "title": "Agile Consulting Services",
    "description": "Tired of endless meetings and bottlenecks slowing your team down? Agile isn’t just a method and we’re here to help you master it.",
    "ctaText": "Get started with us",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "agile-consulting-services"
  },
  {
    "title": "CMS Development Services",
    "description": "Now no more struggling with updates or dealing with web designs—just an effortless way to manage your content. Our team builds CMS solutions that let you add, edit, and organize everything without the usual maintenance tension.",
    "ctaText": "Get started with us",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "cms-development-services"
  },
  {
    "title": "Application Development Services",
    "description": "Let’s create an application that is built to impress your visitors. With our application development services, we’ll bring better apps that have the right user interface and stand out from the crowd.",
    "ctaText": "Get Connected Now",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "application-development-services"
  },
  {
    "title": "Website Development Services",
    "description": "From idea to launch, we build websites that truly reflect your business. You'll get exceptional results from the best website development company.",
    "ctaText": "Get Connected Now",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "website-development-services"
  },
  {
    "title": "Full Stack Development Services",
    "description": "Remold the potential of your presence online with a fully customized website created by experts of our full stack development company.",
    "ctaText": "Get started with us",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "full-stack-development-services"
  },
  {
    "title": "Ecommerce Development Company",
    "description": "Transform the future of your online business with a perfectly designed eCommerce website, built by specialists from a leading eCommerce development company. Elevate your brand with innovative solutions and an error-free user experience that sets your digital store apart.",
    "ctaText": "Get started with us",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "ecommerce-development-company"
  },
  {
    "title": "Ecommerce Consulting Services to Grow Your Business",
    "description": "We are the best eCommerce consultant in India that dives deep into your goals, making sure every click and scroll translates to sales. We optimize your mobile experience or revamp your product pages.",
    "ctaText": "Get Connected Now",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "ecommerce-consulting-services"
  },
  {
    "title": "Ecommerce Maintenance & Support",
    "description": "Our eCommerce website maintenance & support services team in India builds and maintains online stores that are fast and free from frustrating errors. If you're starting fresh or upgrading an existing store, we make sure your website runs like a dream.",
    "ctaText": "Get Connected Now",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "ecommerce-maintenance-and-support-services"
  },
  {
    "title": "Shopify Development Agency",
    "description": "Dreaming of an online store that doesn’t just sell but leaves an impression? Bunnx, a top Shopify development company in India can turn your ideas into a digital masterpiece. We think sleek designs, lightning-fast performance, and features that wow your customers.",
    "ctaText": "Get Connected Now",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "shopify-development-company-in-india"
  },
  {
    "title": "Ecommerce Implementation Services",
    "description": "We don’t just set up ecommerce platforms; we build stores that make browsing, buying, and returning effortless. Our team handles the ecommerce implementation process. If you’re launching a new store or giving an old one a fresh look, we make sure your ecommerce site isn’t just another shop.",
    "ctaText": "Get Connected Now",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "ecommerce-implementation"
  }]

  const heroSectionObj = heroSection.filter(section => 
    section.fetchOnSlug === pageSlug
  );

  const heroSectionData = { 
    title: heroSectionObj?.title || extractNameFromSlug,
    description: heroSectionObj?.description || "Custom Software Development Services and Solutions to build top-tier intelligent enterprises with speed and agility.",
    imageUrl: heroSectionObj?.imageUrl || heroDefaultImg,
    ctaText: heroSectionObj?.ctaText || "Get Connected With us",
    ctaRedirectUrl: heroSectionObj?.ctaRedirectUrl || "#contact-us", 
  };

  const { title, description, imageUrl, ctaText, ctaRedirectUrl } = heroSectionData;


  return (
    <>
      <section className="borde pb20 bg-gray800 bg-black text-white">
        <div className="flex justify-center flex-wrap container mx-auto sm:w-11/12 w-full">

          <div className="sm:mt12 w-full lg:w-[58%] py-10 px-4 flex justify-center gap-20 flex-col sm:pt-18">
            <div>
              <h1 className="lg:text-5xl text-3xl my-2 font-semibold responsive-heading">{title}</h1>
              <p className="lg:text-xl text-lg my-6 font-medium">{createLinkedContent(description, keywordToSlug, pageSlug)}</p>

              <button className="flex items-center justify-center sm:justify-start">
                <Link href={ctaRedirectUrl || "/"} className='flex items-center justify-center gap-2 bg[#261E80] p-1 pl-3 font-medium text-lg bg-orange-500 rounded-full mt-4 text-white'><span className="px-2"> {ctaText || "Launch Your Project"} </span> <span className='bg-white rounded-full p-3 text-black rotate-45'> <FaLocationArrow /> </span></Link>
              </button>

            </div>
          </div>

          <div className="md:w-[41%] w-full flex sm:p-10 p-4 items-center justify-center">
            <Image
              src={imageUrl}
              alt="Digital Brain Visualization"
              className="w-full h-auto"
            />
          </div>

        </div>
      </section>
    </>
  )
}

export default HeroSection;



