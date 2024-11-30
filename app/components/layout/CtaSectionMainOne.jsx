import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import Link from 'next/link';

const CtaSectionMainOne = () => {
    return (
        <>


            <section className='sm:py-12 py-2'>
                <div className="bg-[#00214E] px-4 md:px-6">

                    <div className="container mx-auto max-w-screen-xl flex gap-8 items-center flex-wrap sm:justify-between justify-center sm:px-10 px-4 py-10 bg-purple900 bg-[#00214E] rounded-md borde border-gray-50">

                        <div className='text-white flex gap-4 flex-col lg:items-start items-center xl:w-[58%] w-full'>
                            <h2>Let’s Build Something Extraordinary Together!</h2>
                            <h2 className='text-3xl font-semibold'>Bring your ideas to life with our expertise and innovation.</h2>
                            <p>Your vision deserves the best—let’s make it happen!</p>

                        </div>

                        <div className='flex justify-center items-center'>

                            <Link href="tel:+91-9971544661" className='flex items-center justify-center gap-2 bg[#261E80] p-1 pr-3 font-medium text-md bg-orange-500 rounded-full mt-4 text-white'> <span className='bg-white rounded-full p-3 text-xl text-black animate-bounce'> <FaPhoneAlt /> </span> <span> Lets Talk </span></Link>

                        </div>

                    </div>

                </div>
            </section>


        </>
    )
}

export default CtaSectionMainOne