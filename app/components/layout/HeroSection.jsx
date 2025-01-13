"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { createLinkedContent } from '#/utils/LinkBuilder';
import heroDefault from "/public/heroDefault.png"

import { FaLocationArrow } from "react-icons/fa";

const keywordToSlug = {
  'top front end development company': 'front-end-development-services',
  'back end development company': 'back-end-development-services',
};

const HeroSection = ({ title, description, ctaText, imageUrl, ctaRedirectUrl }) => {


  return (
    <>
      <section className="borde pb20 bg-gray800 bg-black text-white">
        <div className="flex justify-center flex-wrap container mx-auto sm:w-11/12 w-full">

          <div className="sm:mt12 w-full lg:w-[58%] py-10 px-4 flex justify-center gap-20 flex-col sm:pt-18">
            <div>
              <h1 className="lg:text-5xl text-3xl my-2 font-semibold responsive-heading">{title}</h1>
              <p className="lg:text-xl text-lg my-6 font-medium">{createLinkedContent(description, keywordToSlug)}</p>

              <button className="flex items-center justify-center sm:justify-start">
                <Link href={ctaRedirectUrl || "/"} className='flex items-center justify-center gap-2 bg[#261E80] p-1 pl-3 font-medium text-lg bg-orange-500 rounded-full mt-4 text-white'><span className="px-2"> {ctaText || "Launch Your Project"} </span> <span className='bg-white rounded-full p-3 text-black rotate-45'> <FaLocationArrow /> </span></Link>
              </button>

            </div>
          </div>

          <div className="md:w-[41%] w-full flex sm:p-10 p-4 items-center justify-center">
            <Image
              src={imageUrl || heroDefault}
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



