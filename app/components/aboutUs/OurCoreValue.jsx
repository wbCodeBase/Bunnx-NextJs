import React from 'react'

import { GiLaurelsTrophy } from "react-icons/gi";
import { TbDiamond } from "react-icons/tb";
import { BiDiamond } from "react-icons/bi";
import { GoLightBulb } from "react-icons/go";

export default function OurCoreValue() {
    return (
        <>
            <section className="border-t container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-10">

                <h2 className='font-semibold text-orange-500 text-lg'>Our Core Values</h2>
                <h4 className='font-semibold text-3xl my-2'>Inspire Trust and Create a Culture to Grow</h4>
                <p className='text-md text-gray-800'>Bunnx maintains the highest ethical culture and transparency while conducting business. Our core values are the foundation for achieving the highest results for clients, always promoting collaborative relationships based on mutual respect.</p>


                <div className="antialiased my-10">

                    <main className="flex flex-col justify-center overflow-hidden">
                        <div className="w-full rounded-lg max-w-6xl bgorange-50 mx-auto px-4 md:px-6 py-6">

                            <section className="font-quando grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 md:gap-10">


                                <article className='hover:border hover:shadow-sm flex cursor-pointer group items-center flex-col p-4 rounded-lg'>
                                    <h2>
                                        <span className="flex tabular-nums text-4xl font-bold mb-2 duration-\[3s\] ease-out" >                                         
                                        <span className="text-gray-500 text-7xl group-hover:text-orange-500"><GoLightBulb /></span>
                                        </span>
                                    </h2>
                                    <p className="text-md text-gray-700 text-center mt-4">Excellence</p>
                                </article>


                                <article className='hover:border hover:shadow-sm flex cursor-pointer group items-center flex-col p-4 rounded-lg'>
                                    <h2>
                                        <span className="flex tabular-nums text-4xl font-bold mb-2 duration-\[3s\] ease-out" >                                            
                                            <span className="text-gray-500 text-7xl group-hover:text-orange-500"><GoLightBulb /></span>
                                        </span>
                                    </h2>
                                    <p className="text-md text-gray-700 text-center mt-4">Transparency</p>
                                </article>


                                <article className='hover:border hover:shadow-sm flex cursor-pointer group items-center flex-col p-4 rounded-lg'>
                                    <h2>
                                        <span className="flex tabular-nums text-4xl font-bold mb-2 duration-\[3s\] ease-out" >                                            
                                            <span className="text-gray-500 text-7xl group-hover:text-orange-500"><GoLightBulb /></span>
                                        </span>
                                    </h2>
                                    <p className="text-md text-gray-700 text-center mt-4">Integrity</p>
                                </article>

                                <article className='hover:border hover:shadow-sm flex cursor-pointer group items-center flex-col p-4 rounded-lg'>
                                    <h2>
                                        <span className="flex tabular-nums text-4xl font-bold mb-2 duration-\[3s\] ease-out" >
                                            <span className="text-gray-500 text-7xl group-hover:text-orange-500"><GoLightBulb /></span>
                                        </span>
                                    </h2>
                                    <p className="text-md text-gray-700 text-center mt-4">Innovation</p>
                                </article>

                                <article className='hover:border hover:shadow-sm flex cursor-pointer group items-center flex-col p-4 rounded-lg'>
                                    <h2>
                                        <span className="flex tabular-nums text-4xl font-bold mb-2 duration-\[3s\] ease-out" >
                                            <span className="text-gray-500 text-7xl group-hover:text-orange-500"><GoLightBulb /></span>
                                        </span>
                                    </h2>
                                    <p className="text-md text-gray-700 text-center mt-4">Collaboration</p>
                                </article>


                                <article className='hover:border hover:shadow-sm flex cursor-pointer group items-center flex-col p-4 rounded-lg'>
                                    <h2>
                                        <span className="flex tabular-nums text-4xl font-bold mb-2 duration-\[3s\] ease-out" >
                                            <span className="text-gray-500 text-7xl group-hover:text-orange-500"><GoLightBulb /></span>
                                        </span>
                                    </h2>
                                    <p className="text-md text-gray-700 text-center mt-4">Accountability</p>
                                </article>


                            </section>


                        </div>

                    </main>


                </div>

                {/* <div className='flex items-center justify-center flex-wrap gap-10 mt-6'>

                </div> */}

            </section>
        </>
    )
}

