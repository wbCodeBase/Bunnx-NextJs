

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
    content: {
        'Software Development': {
            title: 'Software Development',
            description: 'Bunnx is your go-to software development agency in this evolving and dynamic era. Our software development services adhere to high-quality coding.',
            columns: [
                {
                    title: 'CONSULTING',
                    items: [
                        { name: 'Software Consulting', description: 'Expert advice on tech' },
                        { name: 'IT Consulting', description: 'Expert IT solutions, delivered' },
                        { name: 'Agile Consulting', description: 'Agile expertise, faster results' },
                        { name: 'CRM Consulting', description: 'Optimizing customer relations' },
                    ],
                },
                {
                    title: 'DEVELOPMENT',
                    items: [
                        { name: 'Custom Software', description: 'Tailored solutions for excellence' },
                        { name: 'Enterprise Software', description: 'Powering enterprise growth' },
                        { name: 'Software Product Engineering', description: 'Building market-ready software' },
                        { name: 'Application Development', description: 'Transform ideas into powerful apps' },
                    ],
                },

            ],
        },
        'Application Development': {
            title: 'Application Development',
            description: 'Cutting-edge application solutions',
            columns: [
                {
                    title: 'WEB APPLICATIONS',
                    items: [
                        { name: 'Progressive Web Apps', description: 'Next-gen web experiences' },
                        { name: 'Single Page Applications', description: 'Fast, dynamic web apps' },
                    ],
                },
                {
                    title: 'MOBILE APPLICATIONS',
                    items: [
                        { name: 'iOS App Development', description: 'Sleek, powerful iOS apps' },
                        { name: 'Android App Development', description: 'Robust Android solutions' },
                        { name: 'Cross-platform Development', description: 'Build once, run everywhere' },
                    ],
                }
            ],
        },
        'Dedicated Software Teams': {
            title: 'Dedicated Software Teams',
            description: 'Cutting-edge application solutions',
            columns: [
                {
                    title: 'WEB APPLICATIONS',
                    items: [
                        { name: 'Progressive Web Apps', description: 'Next-gen web experiences' },
                        { name: 'Single Page Applications', description: 'Fast, dynamic web apps' },
                    ],
                },
                {
                    title: 'MOBILE APPLICATIONS',
                    items: [
                        { name: 'iOS App Development', description: 'Sleek, powerful iOS apps' },
                        { name: 'Android App Development', description: 'Robust Android solutions' },
                        { name: 'Cross-platform Development', description: 'Build once, run everywhere' },
                    ],
                }
            ],
        },
        'eCommerce': {
            title: 'eCommerce',
            description: 'Cutting-edge application solutions',
            columns: [
                {
                    title: 'WEB APPLICATIONS',
                    items: [
                        { name: 'Progressive Web Apps', description: 'Next-gen web experiences' },
                        { name: 'Single Page Applications', description: 'Fast, dynamic web apps' },
                    ],
                },
                {
                    title: 'MOBILE APPLICATIONS',
                    items: [
                        { name: 'iOS App Development', description: 'Sleek, powerful iOS apps' },
                        { name: 'Android App Development', description: 'Robust Android solutions' },
                        { name: 'Cross-platform Development', description: 'Build once, run everywhere' },
                    ],
                }
            ],
        },
        'QA & Testing': {
            title: 'QA & Testing',
            description: 'Cutting-edge application solutions',
            columns: [
                {
                    title: 'WEB APPLICATIONS',
                    items: [
                        { name: 'Progressive Web Apps', description: 'Next-gen web experiences' },
                        { name: 'Single Page Applications', description: 'Fast, dynamic web apps' },
                    ],
                },
                {
                    title: 'MOBILE APPLICATIONS',
                    items: [
                        { name: 'iOS App Development', description: 'Sleek, powerful iOS apps' },
                        { name: 'Android App Development', description: 'Robust Android solutions' },
                        { name: 'Cross-platform Development', description: 'Build once, run everywhere' },
                    ],
                }
            ],
        },
        'Cloud Services': {
            title: 'QA & Testing',
            description: 'Cutting-edge application solutions',
            columns: [
                {
                    title: 'WEB APPLICATIONS',
                    items: [
                        { name: 'Progressive Web Apps', description: 'Next-gen web experiences' },
                        { name: 'Single Page Applications', description: 'Fast, dynamic web apps' },
                        { name: 'Cross-platform Development', description: 'Build once, run everywhere' },
                    ],
                },
                {
                    title: 'MOBILE APPLICATIONS',
                    items: [
                        { name: 'iOS App Development', description: 'Sleek, powerful iOS apps' },
                        { name: 'Android App Development', description: 'Robust Android solutions' },
                    ],
                }
            ],
        },
    },
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
            <section className="relativ border-t container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-8">

                <h2 className='font-semibold text-orange-500 text-lg'>Our Services</h2>
                <h4 className='font-semibold text-3xl my-2'>Software Development & Engineering Services</h4>
                <p className='text-md text-gray-800'>Whether you require a complex enterprise software solution or seamless software integration, we will convert your ideas into reality with our long-standing, industry-proven IT consulting and bespoke software development services.</p>

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

                                            <h2 className='text-3xl font-bold'> {techStackData.content[activeCategory].title} </h2>
                                            <p className="text-gray-600 font-medium mt-4">{techStackData.content[activeCategory].description}</p>

                                        </div>



                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:gap-6">
                                            {techStackData.content[activeCategory].columns.map((column, index) => (
                                                <div key={index} className='relative'>

                                                    {column.items.map((item, itemIndex) => (
                                                        <div key={itemIndex} className="mb-4 mt-2 cursor-pointer rounded-lg py-1 px-2 group">
                                                            <div className="flex items-center gap-4">

                                                                <span className="relative flex h-3 w-3">
                                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                                                                </span>

                                                                <h4 className="font-medium inline-block text-lg relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 group-hover:after:w-full">{item.name}</h4>
                                                            </div>
                                                        </div>
                                                    ))}


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
