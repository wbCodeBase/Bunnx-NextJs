"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import heroDefault from "/public/heroDefault.png"

import { FaLocationArrow } from "react-icons/fa";

const HeroSection = ({ title, description, ctaText, imageUrl, ctaRedirectUrl }) => {

  const [lineHeight, setLineHeight] = useState("3.6rem");

  useEffect(() => {
    const handleResize = () => {
      setLineHeight(window.innerWidth < 768 ? "2.5rem" : "3.6rem");
    };

    // Set initial lineHeight based on current window width
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  
  return (
    <>
      <section className="borde pb20 bg-gray800 bg-black text-white">
        <div className="flex items-cente justify-center flex-wrap container mx-auto sm:w-11/12 w-full">

          <div className="sm:mt12 w-full lg:w-[58%] py-10 px-4 flex justify-center gap-20 flex-col sm:pt-18">
            <div>
              <h1 style={{
                lineHeight: window?.innerWidth < 768 ? "2.5rem" : "3.6rem"
              }} className="lg:text-5xl text-3xl my-2 font-semibold">{title}</h1>
              <p className="lg:text-xl text-lg my-6 font-medium">{description}</p>

              <button className="flex items-center justify-center sm:justify-start">
                <Link href={ctaRedirectUrl || "/"} className='flex items-center justify-center gap-2 bg[#261E80] p-1 pl-3 font-medium text-lg bg-orange-500 rounded-full mt-4 text-white'><span className="px-2"> {ctaText || "Launch Your Project"} </span> <span className='bg-white rounded-full p-3 text-black rotate-45'> <FaLocationArrow /> </span></Link>
              </button>

            </div>
          </div>

          <div className="md:w-[41%] w-full flex items-center justify-center">
            <Image
              src={imageUrl || heroDefault}
              alt="Digital Brain Visualization"
              className="w-full h-auto -translatey6"
            />
          </div>

        </div>
      </section>
    </>
  )
}

export default HeroSection;



