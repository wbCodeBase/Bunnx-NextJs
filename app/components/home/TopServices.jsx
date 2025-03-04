import React from 'react'
import Image from 'next/image';
import { IoMdAppstore } from "react-icons/io";
import { MdShield } from "react-icons/md";
import { CgMonday } from "react-icons/cg";
import { MdOutlineSettingsSuggest } from "react-icons/md";  

const TopServices = () => {
    return (
        <>
            <section className="container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-12">


                <div className='grid sm:grid-cols-2 gap-10 grid-cols-1'>

                    <div className="rounded-xl px4">
                        <h2 className='font-semibold text-orange-500 text-lg'>Top Services</h2>
                        <h4 className='font-semibold sm:text-3xl text-2xl my-2'>Futuristic Software Solutions</h4>
                        <p className='text-md text-gray-800'>We provide expert software development services designed to meet your unique business needs, ensuring innovation and future-readiness.</p>

                        <div className='grid sm:grid-cols-2 gap-10 mt-6 grid-cols-1 px-4'>
                            <div className="">
                                {/* <span><SiApacheguacamole className='text-purple-500' /></span> */}
                                <span><MdOutlineSettingsSuggest className='text-purple-500 text-xl' /></span> 
                                <h5 className='font-semibold my-1'>Product Prototyping</h5>
                                <p className='text-sm text-gray-500 font-normal'>Turn your ideas into reality with rapid prototyping.</p>
                            </div>

                            <div className="">
                                <span><MdShield className='text-red-500 text-xl' /></span>
                                {/* <span><MdOutlineSecurity className='text-red-500 text-xl' /></span> */}
                                <h5 className='font-semibold my-1'>System Modernization</h5>
                                <p className='text-sm text-gray-500 font-normal'>Upgrade legacy systems for improved performance and scalability.</p>
                            </div>

                            <div className="">
                                <span><CgMonday className='text-yellow-500 text-xl' /></span>
                                <h5 className='font-semibold my-1'>Web App Development</h5>
                                <p className='text-sm text-gray-500 font-normal'>Build responsive and feature-rich web applications seamlessly.</p>
                            </div>

                            <div className="">
                                <span><IoMdAppstore className='text-blue-500 text-xl' /></span>
                                <h5 className='font-semibold my-1'>Mobile App Development</h5>
                                <p className='text-sm text-gray-500 font-normal'>Deliver exceptional user experiences with custom mobile solutions.</p>
                            </div>

                        </div>

                    </div>

                    <div className="borde rounded-xl p4 flex justify-center items-center flex-col text-center relative">

                        <Image src={"/basicComponent/wall.jpg"} className='rounded-xl' alt="component image" width={500} height={400} />

                       {/* <Link className='flex items-center justify-center gap-2 bg[#261E80] p-1 pl-3 font-medium text-sm bg-orange-500 rounded-full mt-4 text-white' href="/services/mobile-app"><span> Learn more </span> <span className='bg-white rounded-full p-2 text-black'> <FaLocationArrow /> </span></Link> */}
                    </div>

                </div>


            </section></>
    )
}

export default TopServices