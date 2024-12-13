"use client"

import React, { useState, useRef, useEffect } from "react"
import { ChevronRight, ChevronDown, Menu, X, Phone } from 'lucide-react'
import Link from "next/link"

const techStackData = {
    categories: [
        'Software Development',
        'Application Development',
        'Dedicated Software Teams',
        'eCommerce',
        'QA & Testing',
        'Cloud Services',
    ],

    "content": {
        "Software Development": {
            "title": "Software Development",
            "description": "Bunnx is your go-to software development agency in this evolving and dynamic era. Our software development services adhere to high-quality coding.",
            "columns": [
                { "name": "Custom Software Development", "description": "Tailored solutions for excellence", "slug": "custom-software-development" },
                { "name": "CMS Development", "description": "Faster CMS Development", "slug": "cms-development" },
                { "name": "CRM Software Development", "description": "Transform ideas into powerful apps", "slug": "crm-software-development" },
                { "name": "Software Consulting", "description": "Expert advice on tech", "slug": "software-consulting" },

                { "name": "IT Consulting", "description": "Software Outsourcing", "slug": "it-consulting" },
                { "name": "Agile Consulting", "description": "Optimizing customer relations", "slug": "agile-consulting" },
            ]
        },
        "Application Development": {
            "title": "Application Development",
            "description": "Elevate your digital presence with our comprehensive software development services. From web and mobile app development to full-stack solutions, we provide cutting-edge application development that empowers businesses to achieve their technological objectives efficiently and effectively.",
            "columns": [
                { "name": "Web App Development", "description": "Next-gen web experiences", "slug": "web-app-development" },
                { "name": "Mobile App Development", "description": "Fast, dynamic web apps", "slug": "mobile-app-development" },
                { "name": "Frontend Development", "description": "Sleek, powerful iOS apps", "slug": "frontend-development" },
                { "name": "Backend Development", "description": "Robust Android solutions", "slug": "backend-development" },
                { "name": "API Development", "description": "Build once, run everywhere", "slug": "api-development" },
                { "name": "Full stack Development", "description": "Build once, run everywhere", "slug": "full-stack-development" },
                { "name": "Website Development", "description": "Build once, run everywhere", "slug": "website-development" },
            ]
        },
        "Dedicated Software Teams": {
            "title": "Dedicated Software Teams",
            "description": "Maximize your project potential with our dedicated software development teams. As a premier offshore software development company, we offer flexible staffing solutions, expert developer hiring, and comprehensive IT outsourcing services to meet your unique business needs.",
            "columns": [
                { "name": "Staff Augmentation", "description": "Next-gen web experiences", "slug": "staff-augmentation" },
                { "name": "Hire Software Developer", "description": "Fast, dynamic web apps", "slug": "hire-software-developer" },
                { "name": "IT Outsourcing", "description": "Sleek, powerful iOS apps", "slug": "it-outsourcing" },
                { "name": "Dedicated Development Teams", "description": "Robust Android solutions", "slug": "dedicated-development-teams" },
                { "name": "Offshore Dedicated Centre", "description": "Build once, run everywhere", "slug": "offshore-dedicated-centre" }
            ]
        },
        "eCommerce": {
            "title": "eCommerce",
            "description": "Transform your online business with our custom software development services. We specialize in creating robust eCommerce solutions that enhance user experience, drive sales, and provide seamless web development and consulting for businesses of all sizes.",
            "columns": [
                { "name": "Ecommerce Web Development", "description": "Next-gen web experiences", "slug": "ecommerce-web-development" },
                { "name": "Ecommerce Web Consulting", "description": "Fast, dynamic web apps", "slug": "ecommerce-web-consulting" },
                { "name": "Ecommerce Advancement", "description": "Sleek, powerful iOS apps", "slug": "ecommerce-advancement" },
                { "name": "Ecommerce Maintenance & Support", "description": "Robust Android solutions", "slug": "ecommerce-maintenance-support" },
            ]
        },
        "QA & Testing": {
            "title": "QA & Testing",
            "description": "Ensure software excellence with our comprehensive QA and testing services. As a top software development company in India, we provide rigorous testing methodologies, consulting, and quality assurance to deliver reliable and high-performing software solutions.",
            "columns": [
                { "name": "QA Consulting", "description": "Next-gen web experiences", "slug": "qa-consulting" },
                { "name": "Software Testing", "description": "Fast, dynamic web apps", "slug": "software-testing" },
                { "name": "Web App Testing", "description": "Sleek, powerful iOS apps", "slug": "web-app-testing" },
                { "name": "Mobile App Testing", "description": "Robust Android solutions", "slug": "mobile-app-testing" },
                { "name": "QA Outsourcing", "description": "Build once, run everywhere", "slug": "qa-outsourcing" }
            ]
        },
        "Cloud Services": {
            "title": "Cloud Services",
            "description": "Navigate the digital landscape with our advanced cloud services. We offer strategic cloud application development, migration, and consulting that leverage cutting-edge technologies to optimize your business's technological infrastructure and performance.",
            "columns": [
                { "name": "Cloud Application Development", "description": "Sleek, powerful iOS apps", "slug": "cloud-application-development" },
                { "name": "Cloud Strategy & Consulting", "description": "Next-gen web experiences", "slug": "cloud-strategy-consulting" },
                { "name": "Cloud Migration", "description": "Fast, dynamic web apps", "slug": "cloud-migration" },
                { "name": "Devops Integration", "description": "Build once, run everywhere", "slug": "devops-integration" },
            ]
        }
    }

}


const OurServices = () => {


    const [activeCategory, setActiveCategory] = useState('Software Development')
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)




    const handleCategoryHover = (category) => {
        setActiveCategory(category)
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }




    return (
        <>
            <section className="relativ bordert container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-8">

                <span className='font-semibold text-orange-500 text-lg'>Our Services</span>
                <h2 className='font-semibold text-3xl my-2'>Premier Software Development Services in India</h2>
                <p className='text-md text-gray-800'>As a top-tier custom software development company in India, we transform complex business challenges into innovative digital solutions. Our comprehensive software development services range from enterprise-level software solutions to seamless system integrations, delivering cutting-edge technologies that drive your business forward.</p>

                <div className="w-full my-6 transition-all duration-300 ease-in-out">
                    <div className="container mx-auto flex relative flex-col lg:flex-row">

                        <div className="border-r bg-blue900 bg-black text-white w-full lg:w-1/4 p-6 hidden md:block">
                            {techStackData.categories.map((category) => (
                                <div
                                    key={category}
                                    className={`py-3 my-1 group px-5 text-lg w-[19rem] text-nowrap transform hover:translate-x-1 transition-all ease-in-out duration-300 flex items-center cursor-pointer font-medium ${activeCategory === category ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
                                        }`}
                                    onMouseEnter={() => handleCategoryHover(category)}
                                >
                                    {category}
                                    <ChevronRight className="float-right h-5 w-5 hidden group-hover:block" />
                                </div>
                            ))}

                        </div>



                        <div className="w-full lg:w-3/4">



                            {techStackData.content[activeCategory] && (
                                <>
                                    <div className='p-6 sm:px-20 my-5 border'>


                                        <div className="mb-4 py-4 border-b">

                                            <h4 className='text-3xl font-bold'> {techStackData.content[activeCategory].title} </h4>
                                            <p className="text-gray-600 font-medium mt-4">{techStackData.content[activeCategory].description}</p>

                                        </div>



                                        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 lg:grid-cols-2 sm:gap-2">
                                            {techStackData.content[activeCategory].columns.map((column, index) => (
                                                <div key={index} className='relative'>

                                                    <div className="cursor-pointer rounded-lg py-1 px-2 group">
                                                        <Link href={`/${column.slug}`} className="flex items-center gap-4">

                                                            <span className="relative flex h-3 w-3">
                                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                                                            </span>

                                                            <h5 className="font-medium inline-block text-lg relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 group-hover:after:w-full">{column.name}</h5>

                                                        </Link>
                                                    </div>


                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-6 flex justify-end">
                                            <Link href="#" className="text-white bg-blue-600 hover:bg-white border-2 hover:border-blue-600 hover:text-blue-600 rounded-lg px-6 py-3 transition-colors duration-200">
                                                View More <ChevronRight className="inline h-4 w-4" />
                                            </Link>
                                        </div>

                                    </div>
                                </>
                            )}



                        </div>



                    </div>
                </div>


            </section>
        </>
    )
}

export default OurServices;
