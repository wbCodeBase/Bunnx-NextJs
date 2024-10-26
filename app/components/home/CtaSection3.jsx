import React from 'react'

import Image from 'next/image';

const CtaSection3 = () => {
    return (
        <>


            <section className='border-t container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-10'>
                <div style={{ backgroundImage: "url('https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg?cs=srgb&dl=pexels-lennart-wittstock-94105-316681.jpg&fm=jpg')" }} className="rounded-md container mx-auto max-w-screen-xl px-4 md:px-10 py-10 bg-center bg-cover bg-no-repeat">
              
                    <div className="h-full w-full flex gap-8 items-center flex-wrap justify-between sm:px-10 px-4 py-6 bg-blue-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-50">

                        <div className='text-white flex gap-1 flex-col lg:items-start items-center xl:w-[48%] w-full'>
                            <h2>Your Success, Our Priority</h2>
                            <p className='text-3xl font-semibold'>Boost Your Business with Reliable Web Apps</p>
                            <p>From design to deployment, we provide innovative solutions to help your business thrive.</p>
                            <button className="px-6 mt-4 py-3 bg-white/30 backdrop-blur-md text-white font-semibold rounded-full shadow-md hover:bg-white/40 transition duration-300 border border-white/20">
                                Contact Us Now
                            </button>
                        </div>

                        <div className='xl:w-[48%] w-full flex justify-center items-center'>
                            <Image className='transform xl:scale-150' src="https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/Services/IOS/ios-developers-cross-platform.webp" height={400} width={200} alt="ctaSectionImage" />
                        </div>

                    </div>

                </div>
            </section>




        </>
    )
}

export default CtaSection3