"use client"


import Image from "next/image";
import Link from "next/link";

import { FaLocationArrow } from "react-icons/fa";

const HeroSection = ({ heroSectionData }) => {

  // const heroSectionData = {
  //   title: "Enterprise",
  //   subtitle: "Software Development Company",
  //   description: "Custom Software Development Services and Solutions to build top-tier intelligent enterprises with speed and agility.",
  //   imageUrl: "https://img.freepik.com/premium-photo/astronaut-outer-space-surrounded-by-planets-satellites-generative-ai_1028873-12416.jpg",
  //   linkUrl: "/",
  // };



  return (
    <>
      <section className="borde pb-20 bg-gray800 bg-black text-white">
        <div className="flex items-cente justify-center flex-wrap container mx-auto sm:w-11/12 w-full">

          <div className="sm:mt-12 w-full lg:w-[55%] py-10 px-4 flex gap-20 flex-col sm:pt-18">
            <div>
              <span className="lg:text-3xl text-2xl font-medium">{heroSectionData && heroSectionData.title ? heroSectionData.title : "Enterprise"}</span>
              <h1 className="lg:text-6xl text-3xl my-2 font-semibold">{heroSectionData && heroSectionData.subtitle ? heroSectionData.subtitle : "Software Development Company"}</h1>
              <p className="lg:text-xl text-lg my-6 font-medium">{heroSectionData && heroSectionData.description ? heroSectionData.description : "Custom Software Development Services and Solutions to build top-tier intelligent enterprises with speed and agility."}</p>

              <div className="flex items-center justify-center sm:justify-start">
                <Link className='flex items-center justify-center gap-2 bg[#261E80] p-1 pl-3 font-medium text-lg bg-orange-500 rounded-full mt-4 text-white' href={heroSectionData && heroSectionData.linkUrl ? heroSectionData.linkUrl : "/"}><span> Get connected with us </span> <span className='bg-white rounded-full p-3 text-black rotate-45'> <FaLocationArrow /> </span></Link>
              </div>

            </div>


          </div>

          <div className="md:w-[44%] w-full">
            <Image
              src={heroSectionData && heroSectionData.imageUrl ? heroSectionData.imageUrl : "https://img.freepik.com/premium-photo/astronaut-outer-space-surrounded-by-planets-satellites-generative-ai_1028873-12416.jpg"}
              alt="Digital Brain Visualization"
              width={600}
              height={600}
              className="w-full h-auto -translate-y6"
            />
          </div>

        </div>
      </section>
    </>
  )
}

export default HeroSection;


// https://cdn-server.hiddenbrains.com/uploads/bnr_large_01_6aed8bff69.webp?ver-20241023164536
