import React from 'react'

import Image from 'next/image';

const CtaSection3 = () => {
    return (
        <>


            <section className='border-t container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-10'>
                <div style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1697730150275-dba1cfe8af9c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWVzdGhldGljJTIwZGVza3RvcHxlbnwwfHwwfHx8MA%3D%3D')" }} className="rounded-md container mx-auto max-w-screen-xl px-4 md:px-10 py-10 bg-center bg-cover bg-no-repeat">

                    <div className="h-full w-full flex gap-8 items-center flex-wrap justify-between sm:px-10 px-4 py-6 bg-purple-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-50">

                        <div className='text-white flex gap-1 flex-col lg:items-start items-center xl:w-[48%] w-full'>
                            <h2>Your Success, Our Priority</h2>
                            <p className='text-3xl font-semibold'>Boost Your Business with Reliable Web Apps</p>
                            <p>From design to deployment, we provide innovative solutions to help your business thrive.</p>
                            <button className="px-6 mt-4 py-3 bg-white/30 backdrop-blur-md text-white font-semibold rounded-full shadow-md hover:bg-white/40 transition duration-300 border border-white/20">
                                Contact Us Now
                            </button>
                        </div>

                        <div className='xl:w-[48%] w-full flex justify-center items-center'>
                            <Image className='transform xl:scale-150' src="https://static.vecteezy.com/system/resources/previews/036/053/413/non_2x/ai-generated-rocket-in-the-sky-rocket-cartoon-on-transparent-background-free-png.png" height={200} width={200} alt="ctaSectionImage" />
                        </div>

                    </div>

                </div>
            </section>




        </>
    )
}

export default CtaSection3