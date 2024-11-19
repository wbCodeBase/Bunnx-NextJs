import React from 'react'
import Link from 'next/link';
import { IoArrowForward } from "react-icons/io5";


const defaultServicesData = [
  {
    title: "Custom Software Development",
    description:
      "We are committed to deliver custom software solutions that perfectly align with your complex technical needs. You Share your requirements, and we'll create a custom application that evolves with your business and user demands.",
    slug: "custom-software-development",
    fetchOnSlug: ["custom-software-development", "software-outsourcing", "qa-testing", "ecommerce"]
  },
  {
    title: "Software Outsourcing Services",
    description:
      "Our software outsourcing services reduce costs, accelerate timelines, and connect you with top-tier talent to give you a competitive edge. At Bunnx we have domain experts, our team delivers tailored, efficient solutions that meet your business needs.",
    slug: "software-outsourcing",    
    fetchOnSlug: ["support-maintenance", "software-outsourcing", "devops", "ecommerce"]
  },
  {
    title: "QA & Testing",
    description:
      "Our certified experts perform thorough testing to detect and resolve any errors or bugs that could affect your software’s performance. Guarantee the quality, reliability, and performance of your software applications with our QA Experts and testing services. ",
    slug: "qa-testing",
    fetchOnSlug: ["custom-software-development", "mobile-app-development", "qa-testing", "cloud-services"]
  },
  {
    title: "Ecommerce",
    description:
      "As a leading software development company in India, we offer comprehensive e-commerce solutions, including secure payment gateways and streamlined shopping experiences, ensuring convenience for your customers.",
    slug: "ecommerce",
  },
  {
    title: "Web App Development",
    description:
      "Our team builds responsive, scalable, and efficient web applications tailored to your business needs. We focus on creating seamless user experiences, ensuring high performance, security, and easy navigation.",
    slug: "web-app-development",
  },
  {
    title: "Devops",
    description:
      "Adopt DevOps to optimize software development and operations. With our expertise in collaboration, automation, continuous integration, and delivery pipelines, we empower your business to achieve greater efficiency, quality, and agility.",
    slug: "devops",
  },
  {
    title: "Mobile App Development",
    description:
      "Our skilled mobile app developers combine deep IT knowledge with extensive hands-on experience across diverse projects. They analyze your business ecosystem to fully understand your needs and goals, delivering tailored solutions that best fit your requirements.",
    slug: "mobile-app-development",
  },
  {
    title: "Cloud App & Hosting Services",
    description:
      "Leverage our expertise to build secure, scalable cloud applications tailored to your needs. We assess your requirements, develop a risk-mitigation strategy, ensure smooth integration, and optimize performance for maximum efficiency.",
    slug: "cloud-services",
  },
  {
    title: "Support and Maintenance",
    description:
      "At our software development company in India, we prioritise application maintenance just as much as development. We recognize that even the most innovative solutions are only valuable when supported by a stable, well-maintained ecosystem free from bugs and glitches.",
    slug: "support-maintenance",
  },
];



const Services = ({ servicesData }) => {


  return (
    <>
      <section className="container mx-auto max-w-screen-xl px-4 md:px-6 py-10">

        <h2 className='font-semibold text-orange-500 text-lg'>Our Services</h2>
        <h4 className='font-semibold text-3xl my-2'>Our Software Development Services</h4>
        <p className='text-md text-gray-800'>We are a leading software development company in India, providing unique and innovative custom software development services that help your business to achieve exponential growth.</p>

        <div className='flex items-cente justify-center flex-wrap gap-10 mt-6'>

          {(servicesData || defaultServicesData).map((service, i) => (
            <div key={i} className="border hover:border-orange-200 rounded-xl shadow-sm p-4 flex itemscenter flex-col w-96  relative">

              <h3 className='font-semibold my-3 pb-3 text-gray-800 text-xl border-b border-orange-500'>{service.title}</h3>

              <p className='text-gray-600'>{service.description}</p>


              {service?.ctaRedirectUrl &&
                <div className='flex justify-end items-center'>
                  <Link href={`/service/${service.ctaRedirectUrl}`} className='flex items-center justify-center text-orange-500 p-1 pl-3 font-medium text-md mt-4'><span className='relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full'> Know more </span> <span className='px-1'> <IoArrowForward /> </span></Link>
                </div>
              }

            </div>
          ))
          }



        </div>

      </section>
    </>
  )
}

export default Services