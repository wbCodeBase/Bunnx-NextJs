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
  "web application development": 'web-app-development-services',
  "mobile app development company": 'mobile-app-development-services',
};

const HeroSection = ({ heroSectionObj, pageSlug, extractNameFromSlug, heroDefaultImg }) => {

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



