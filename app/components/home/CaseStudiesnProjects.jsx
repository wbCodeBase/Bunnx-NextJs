import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { MdShield } from "react-icons/md";
import { CgMonday } from "react-icons/cg";
import { IoIosCloud } from "react-icons/io";
import { DiDatabase } from "react-icons/di";

const CaseStudiesnProjects = () => {
    return (
        <>
            <section className="border-t container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-8">


                <div className='grid sm:grid-cols-2 gap-10 grid-cols-1'>

                    <div className="rounded-xl px4">
                        {/* <h2 className='font-semibold text-orange-500 text-lg'>Our Success Stories</h2> */}
                        <h4 className='font-semibold sm:text-3xl text-2xl my-2'>Transforming Dreams into Achievements</h4>
                        <p className='text-md text-gray-800'>Every success story reflects determination and collaboration. Every success story reflects determination and collaboration.</p>


                        <div className='grid sm:grid-cols-2 gap-10 mt-6 grid-cols-1 px-4'>
                            <div className="">
                                {/* <span><SiApacheguacamole className='text-purple-500' /></span> */}
                                <span><DiDatabase className='text-purple-500 text-xl' /></span>
                                <h5 className='font-semibold my-1'>Real Time Data</h5>
                                <p className='text-sm text-gray-500 font-normal'>Every success story reflects design by Abhishek Kashyap</p>
                            </div>

                            <div className="">
                                <span><MdShield className='text-red-500 text-xl' /></span>
                                {/* <span><MdOutlineSecurity className='text-red-500 text-xl' /></span> */}
                                <h5 className='font-semibold my-1'>Real Time Data</h5>
                                <p className='text-sm text-gray-500 font-normal'>Every success story reflects design by Abhishek Kashyap</p>
                            </div>

                            <div className="">
                                <span><CgMonday className='text-yellow-500 text-xl' /></span>
                                <h5 className='font-semibold my-1'>Real Time Data</h5>
                                <p className='text-sm text-gray-500 font-normal'>Every success story reflects design by Abhishek Kashyap</p>
                            </div>

                            <div className="">
                                <span><IoIosCloud className='text-blue-500 text-xl' /></span>
                                <h5 className='font-semibold my-1'>Real Time Data</h5>
                                <p className='text-sm text-gray-500 font-normal'>Every success story reflects design by Abhishek Kashyap</p>
                            </div>

                        </div>

                    </div>

                    <div className="borde rounded-xl p4 flex justify-center items-center flex-col text-center relative">
                        <Image src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/61cd87177372363.64d4e5b1b085c.png" alt="component image" width={500} height={400} />

                        {/* <Link className='flex items-center justify-center gap-2 bg[#261E80] p-1 pl-3 font-medium text-sm bg-orange-500 rounded-full mt-4 text-white' href="/services/mobile-app"><span> Learn more </span> <span className='bg-white rounded-full p-2 text-black'> <FaLocationArrow /> </span></Link> */}
                    </div>

                </div>


            </section>

            <section className="border-t container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-8">


                <div className='grid sm:grid-cols-2 gap-10 grid-cols-1'>



                    <div className="borde rounded-xl p4 flex justify-center items-center flex-col text-center relative">
                        <Image src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/61cd87177372363.64d4e5b1b085c.png" alt="component image" width={500} height={400} />

                        {/* <Link className='flex items-center justify-center gap-2 bg[#261E80] p-1 pl-3 font-medium text-sm bg-orange-500 rounded-full mt-4 text-white' href="/services/mobile-app"><span> Learn more </span> <span className='bg-white rounded-full p-2 text-black'> <FaLocationArrow /> </span></Link> */}
                    </div>


                    <div className="rounded-xl px4">
                        {/* <h2 className='font-semibold text-orange-500 text-lg'>Our Success Stories</h2> */}
                        <h4 className='font-semibold sm:text-3xl text-2xl my-2'>Transforming Dreams into Achievements</h4>
                        <p className='text-md text-gray-800'>Every success story reflects determination and collaboration. Every success story reflects determination and collaboration.</p>


                        <div className='grid gap-4 mt-6 grid-cols-1 px-4'>
                            <div className="">
                                {/* <span><SiApacheguacamole className='text-purple-500' /></span> */}
                                <span><DiDatabase className='text-purple-500 text-xl' /></span>
                                <h5 className='font-semibold my-1'>Real Time Data</h5>
                                <p className='text-sm text-gray-500 font-normal'>Every success story reflects design by Abhishek Kashyap</p>
                            </div>
                            <hr />
                            <div className="">
                                <span><MdShield className='text-red-500 text-xl' /></span>
                                {/* <span><MdOutlineSecurity className='text-red-500 text-xl' /></span> */}
                                <h5 className='font-semibold my-1'>Real Time Data</h5>
                                <p className='text-sm text-gray-500 font-normal'>Every success story reflects design by Abhishek Kashyap</p>
                            </div>
                            <hr />

                            <div className="">
                                <span><CgMonday className='text-yellow-500 text-xl' /></span>
                                <h5 className='font-semibold my-1'>Real Time Data</h5>
                                <p className='text-sm text-gray-500 font-normal'>Every success story reflects design by Abhishek Kashyap</p>
                            </div>

                            {/* <div className="">
                                <span><IoIosCloud className='text-blue-500 text-xl' /></span>
                                <h5 className='font-semibold my-1'>Real Time Data</h5>
                                <p className='text-sm text-gray-500 font-normal'>Every success story reflects design by Abhishek Kashyap</p>
                            </div> */}

                        </div>

                    </div>


                </div>


            </section>
        </>

    )
}

export default CaseStudiesnProjects