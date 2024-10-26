import React from 'react'

import Image from 'next/image';
import { FaPhoneAlt } from "react-icons/fa";
import Link from 'next/link';

const CtaSection2 = () => {
    return (
        <>


            <section className='border-t container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-0'>
                <div className="rounded-md container mx-auto max-w-screen-xl sm:px-4 md:px-10 py-10">

                    <div className="h-full w-full flex gap-8 items-center flex-wrap justify-around sm:px-10 px-4 py-10 bg-purple900 bg-[#00214E] rounded-md border border-gray-50">

                        <div className='text-white flex gap-4 flex-col lg:items-start items-center xl:w-[58%] w-full'>
                            <h2>Your Success, Our Priority</h2>
                            <p className='text-3xl font-semibold'>Boost Your Business with Reliable Web</p>
                            <p>From design to deployment, we provide innovative solutions to help your business thrive.</p>

                        </div>

                        <div className='flex justify-center items-center'>

                            <Link className='flex items-center justify-center gap-2 bg[#261E80] p-1 pr-3 font-medium text-md bg-orange-500 rounded-full mt-4 text-white' href="/services/mobile-app"> <span className='bg-white rounded-full p-3 text-xl text-black animate-bounce'> <FaPhoneAlt /> </span> <span> Lets Talk </span></Link>

                        </div>

                    </div>

                </div>
            </section>




        </>
    )
}

export default CtaSection2