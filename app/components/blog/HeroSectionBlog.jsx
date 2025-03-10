"use client"

import React from "react";
import Image from "next/image";

import { useParams } from "next/navigation"
import { IoReader } from "react-icons/io5";

import Link from "next/link";



const HeroSectionBlog = () => {

  const params = useParams()
  console.log("Params", params)

  const heroSectionData = {
    title: "Rust vs Go: Navigating Modern Systems Programming in 2025",
    description: "In the ever-evolving landscape of systems programming, two languages have emerged as formidable contenders to C++'s long-standing dominance: Rust and Go. As we move through 2025, the debate between these technologies has intensified, with each offering distinct approaches to modern development challenges.",
    imageUrl: "https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?t=st=1741264600~exp=1741268200~hmac=05ef51efe23fb3d77675e324f2ffc89df1b10c3eabc42938010da04ea26ebefe&w=1380",
    ctaTextPri: "Read more",
    category: "Programming & Development",
    categorySlug: "/blog/cat/programming-and-development",
    ctaRedirectUrl: "/blog/rust-vs-go-modern-systems-programming",
  };

  const { title, description, imageUrl, ctaTextPri, category, categorySlug, ctaRedirectUrl } = heroSectionData;

  return (
    <>
      <section className="bg-black text-white">
        <div className="flex justify-center flex-wrap container mx-auto sm:w-11/12 w-full lg:p-10">

          <div className="sm:mt12 w-full lg:w-[41%] py-6 px-4 flex justify-center gap-20 flex-col sm:pt-18">
            <div>
              <h1 className="lg:text-4xl text-3xl my-2 font-semibold">{title}</h1>
              <p className="lg:text-lg text-gray-300 text-lg my-4 font-medium">{description}</p>


              <button className="flex items-center justify-center sm:justify-start ">
                  <Link href={categorySlug} className='flex items-center justify-center p-1 font-medium text-md border border-orange-500 rounded-full text-orange-500'>
                    <span className="px-2"> {category} </span>
                  </Link>
                </button>

              <div className="flex mt-8 gap-10">
                <div className="flex items-center gap-4">
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
                  <Link href={params?.title ? "/blog" : ctaRedirectUrl} className='flex items-center justify-center mt-2 p-1 hover:bg-orange-500 font-medium text-md border border-white rounded-full text-white'>
                    <span className='bg-white rounded-full p-2 text-black'> <IoReader /> </span>
                    <span className="px-2"> {params?.title ? "All Posts" : ctaTextPri} </span>
                  </Link>
                </button>
              </div>

            </div>
          </div>

          <div className="md:w-[55%] w-full flex sm:p-10 p-4 items-center justify-center">
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


function formatparameter(input) {
  return input
    .split('-') // Split the string by hyphen
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
    .join(' '); // Join them back together without hyphens
}

export const HeroSectionCategory = () => {

  const params = useParams()
  console.log("Params", params.category)




  return (
    <>
      <section className="bg-black text-white">
        <div className="flex justify-center flex-wrap container mx-auto sm:w-11/12 w-full lg:p-10">

          <div className="sm:mt12 w-full py-6 px-4 flex justify-center gap-20 flex-col sm:pt-18">
            <div className="text-center">
              <h1 className="lg:text-6xl text-4xl my-4 font-semibold">{formatparameter(params.category)}</h1>
              <p className="text-gray-300 lg:text-2xl text-xl my-4 font-medium">Your Trusted Source For Software Development Wisdom</p>
              <p className="lg:text-lg text-gray-300 text-lg my-4 font-medium">Get expert guidance and real-world tips from industry leaders, making your journey through the world of software development smoother, smarter, and more rewarding.</p>

              <div className="flex items-center justify-center gap-10">

                <button className="flex items-center justify-center sm:justify-start ">
                  <Link href="/blog" className='flex items-center justify-center mt-2 p-1.5 hover:bg-orange-500 font-medium text-md border border-white rounded-full text-white'>
                    <span className='bg-white rounded-full p-2 text-black'> <IoReader fontSize={20} /> </span>
                    <span className="px-2"> All Posts </span>
                  </Link>
                </button>

              </div>

            </div>
          </div>


        </div>
      </section>
    </>
  )
}