"use client"

import React from 'react'
import { MdShield } from "react-icons/md";
import { CgMonday } from "react-icons/cg";
import { DiDatabase } from "react-icons/di";
import { FaLocationArrow } from "react-icons/fa";
import Link from 'next/link';

const HeroSection = () => {
    return (<>
        <section className="borde pb20 bg-gray800 bg-gray-100">
            <div className="flex items-cente justify-center flex-wrap container mx-auto sm:w-11/12 w-full">

                <div className="sm:mt-8 w-full lg:w-[55%] py-10 px-4 flex gap-20 flex-col sm:pt-18">
                    <div>
                        <h1 className="lg:text-4xl text-2xl font-bold">Contact Us</h1>
                        <p className="lg:text-xl text-md text-gray-600 my-4">Let’s talk about your next big app idea. Send us a message and we will be in touch to know more about your project requirements. Hire us and work with the world-class web & mobile development teams.</p>

                        <div className="flex items-center justify-center sm:justify-start">
                            <Link href="/" className='flex items-center justify-center gap-2 bg[#261E80] p-1 pl-3 font-medium text-lg bg-orange-500 rounded-full mt-4 text-white'><span> Get in touch </span> <span className='bg-white rounded-full p-3 text-black rotate-45'> <FaLocationArrow /> </span></Link>
                        </div>

                    </div>


                </div>

                <div className="md:w-[44%] w-full flex items-center justify-center">

                    <div className='grid gap-4 my-10 grid-cols-1 px-4'>
                        <div className="">
                            <span><DiDatabase className='text-purple-500 text-xl' /></span>
                            <h5 className='font-semibold my-1'>Quick Responses</h5>
                            <p className='text-sm text-gray-500 font-normal'>Reach out for fast, efficient answers.</p>
                        </div>
                        <hr />
                        <div className="">
                            <span><MdShield className='text-red-500 text-xl' /></span>
                            <h5 className='font-semibold my-1'>Expert Advice</h5>
                            <p className='text-sm text-gray-500 font-normal'>Our team is here to provide tailored solutions.</p>
                        </div>
                        <hr />


                        <div className="">
                            <span><CgMonday className='text-yellow-500 text-xl' /></span>
                            <h5 className='font-semibold my-1'>Reliable Support</h5>
                            <p className='text-sm text-gray-500 font-normal'>Count on us whenever you need assistance.</p>
                        </div>


                    </div>


                </div>

            </div>
        </section>
    </>
    )
}

export default HeroSection