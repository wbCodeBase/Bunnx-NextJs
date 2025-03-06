"use client"
import React from "react";
import Image from "next/image";
// import Link from "next/link";

// import heroDefaultImg from "/public/heroDefault.png"
// import heroDefaultImg from "/public/heroDefault.png"
// import { createLinkedContent } from '#/utils/LinkBuilder';
import { IoReader } from "react-icons/io5";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import Link from "next/link";

// Keep value empty if no redirection is required 
// const keywordToSlug = {
//   'top front end development company': 'front-end-development-services',
// };




const HeroSectionBlog = () => {


  const heroSectionData = {
    title: "Rust vs Go: Navigating Modern Systems Programming in 2025",
    description: "InIn the ever-evolving landscape of systems programming, two languages have emerged as formidable contenders to C++'s long-standing dominance: Rust and Go. As we move through 2025, the debate between these technologies has intensified, with each offering distinct approaches to modern development challenges.",
    // imageUrl: heroDefaultImg,
    // imageUrl: "https://cdn.prod.website-files.com/6311f5c94c17c1515c3acb72/67379dccc1b03a43e31c2285_Blog%20and%20Case%20Study%20Templates%20(43)-p-800.png", 
    imageUrl: "https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?t=st=1741264600~exp=1741268200~hmac=05ef51efe23fb3d77675e324f2ffc89df1b10c3eabc42938010da04ea26ebefe&w=1380",
    ctaTextPri: "Read more",
    ctaText: "All posts",
    ctaRedirectUrl: "/blog/rust-vs-go-modern-systems-programming",
  };

  const { title, description, imageUrl, ctaTextPri, ctaText, ctaRedirectUrl } = heroSectionData;

  return (
    <>
      <section className="bg-black text-white">
        <div className="flex justify-center flex-wrap container mx-auto sm:w-11/12 w-full lg:p-10">

          <div className="sm:mt12 w-full lg:w-[41%] py-6 px-4 flex justify-center gap-20 flex-col sm:pt-18">
            <div>
              <h1 className="lg:text-4xl text-3xl my-2 font-semibold">{title}</h1>
              <p className="lg:text-lg text-gray-300 text-lg my-4 font-medium">{description}</p>

              <div className="flex pa items-center gap-4 mt-6">
                <div>

                  {/* <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar> */}

                  <div className="relative w-10 h-10 rounded-full border border-gray-500 overflow-hidden">
                    <Image
                      src="https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg?height=50&width=50"
                      alt="Neha Garg"
                      fill
                      className="object-cover"
                    />
                  </div>

                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-medium">Neha Garg</span>
                  <span className="text-gray-300 text-xs">Nov 14, 2024</span>
                </div>
              </div>

              <button className="flex items-center justify-center sm:justify-start ">
                <Link href={ctaRedirectUrl} className='flex items-center justify-center p-1 hover:bg-orange-500 font-medium text-md border border-white rounded-full mt-8 text-white'>
                  <span className='bg-white rounded-full p-2 text-black'> <IoReader /> </span>
                  <span className="px-2"> {ctaTextPri} </span>
                </Link>
              </button>

            </div>
          </div>

          <div className="md:w-[55%] w-full flex sm:p-10 p-4 items-center justify-center">
            {/* <Image
              src={imageUrl}
              alt="Digital Brain Visualization"
              className="lg:max-w-lg h-auto border border-white rounded-3xl"
            /> */}

            <Image
              src={imageUrl}
              alt="Digital Brain Visualization"
              width={600} // Provide width
              height={800} // Provide height
              className="lg:max-w-lg h-auto borde border-white rounded-3xl"
            />

          </div>

        </div>
      </section>
    </>
  )
}


export default HeroSectionBlog;