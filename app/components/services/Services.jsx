import React from 'react'
import Link from 'next/link';
import { IoArrowForward } from "react-icons/io5";

const Services = () => {

    
  const servicesData = [
    {
      title: "Software Development",
      description:
        "Responsive and feature-rich websites. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perferendis, pariatur et veniam at maiores, explicabo magni molestias repellendus dolores aut!",
      slug: "software-development",
    },
    {
      title: "Web Development",
      description:
        "Responsive and feature-rich websites. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perferendis, pariatur et veniam at maiores, explicabo magni molestias repellendus dolores aut!",
      slug: "web-development",
    },
    {
      title: "Application Development",
      description:
        "Responsive and feature-rich websites. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perferendis, pariatur et veniam at maiores, explicabo magni molestias repellendus dolores aut!",
      slug: "application-development",
    },
    {
      title: "Dedicated Software Teams",
      description:
        "Responsive and feature-rich websites. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perferendis, pariatur et veniam at maiores, explicabo magni molestias repellendus dolores aut!",
      slug: "dedicated-software-teams",
    },
    {
      title: "eCommerce",
      description:
        "Responsive and feature-rich websites. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perferendis, pariatur et veniam at maiores, explicabo magni molestias repellendus dolores aut!",
      slug: "ecommerce",
    },
    {
      title: "QA & Testing",
      description:
        "Responsive and feature-rich websites. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perferendis, pariatur et veniam at maiores, explicabo magni molestias repellendus dolores aut!",
      slug: "qa-testing",
    },
    {
      title: "Cloud Services",
      description:
        "Responsive and feature-rich websites. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perferendis, pariatur et veniam at maiores, explicabo magni molestias repellendus dolores aut!",
      slug: "cloud-services",
    },
    {
      title: "Data Engineering",
      description:
        "Responsive and feature-rich websites. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perferendis, pariatur et veniam at maiores, explicabo magni molestias repellendus dolores aut!",
      slug: "data-engineering",
    },
  ];


    return (
        <>
            <section className="border-t container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-10">

                <h2 className='font-semibold text-orange-500 text-lg'>Our Services</h2>
                <h4 className='font-semibold text-3xl my-2'>Software Development & Engineering Services</h4>
                <p className='text-md text-gray-800'>Whether you require a complex enterprise software solution or seamless software integration, we will convert your ideas into reality with our long-standing, industry-proven IT consulting and bespoke software development services.</p>

                <div className='flex items-center justify-center flex-wrap gap-10 mt-6'>


                    {servicesData.map((service, i) => (
                        <div key={i} className="border hover:border-orange-200 rounded-xl shadow-sm p-4 flex itemscenter flex-col w-96  relative">

                            <h3 className='font-semibold my-3 pb-3 text-gray-800 text-xl border-b border-orange-500'>{service.title}</h3>

                            <p className='text-gray-600'>{service.description}</p>

                            <div className='flex justify-end items-center'>

                                <Link href={`/services/${service.slug}`} className='flex items-center justify-center text-orange-500 p-1 pl-3 font-medium text-md mt-4'><span className='relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full'> Know more </span> <span className='px-1'> <IoArrowForward /> </span></Link>

                            </div>

                        </div>
                    ))
                    }



                </div>

            </section>
        </>
    )
}

export default Services