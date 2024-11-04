import Image from 'next/image';
import React from 'react'

import partnersLogo from '/public/logo/bunnx-logo.png'

const OurTeam = () => {
    return (
        <>
            <section className="container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-8">

                <h2 className='font-semibold text-orange-500 text-lg'>Our Team</h2>
                <h4 className='font-semibold text-3xl my-2'>Bunnx team is passionate about delivering excellence to scale New heights of success.</h4>
                <p className='text-md text-gray-800'>We have a professional and dedicated team with proficiency in web, mobile and emerging technologies. Our in-house team comprises of professional thinkers with decades of experience in the industry and a track record of transforming your idea into a reality that aligns with your needs.</p>


                <section className="flex flex-wrap justify-cente justify-between gap-8 py-2 mt-6">

                    <div className='lg:w-[50%] w-full border rounded-md'>

                        <Image className='h-auto w-full' src={"/whyChooseUs.jpg"} alt="Custom Software Development" width={650} height={600} />

                        <div className='p-6'>

                            <p className='font-semibold text-xl my-2'>Empowering Your Vision with Expert Team</p>
                            <p className='text-md text-gray-800'>We are a team of believers, dreamers, doers and creators. We are customer-centric, creating new opportunities.</p>

                        </div>

                    </div>

                    <div className='lg:w-[47%] w-full flex flex-col gap-4 rounded-md'>

                        <p className='text-lg text-gray-800'>
                            We have a team of 500+ skilled and dedicated professionals comprising project managers, business analysts, quality analysts, UX/UI designers, architects, and developers. Our team is highly experienced, creative, dynamic and skilled working collaboratively at all stages to deliver successful solutions.
                        </p>

                        <p className='text-lg text-gray-800'>
                            We are a team of believers, dreamers, doers and creators. We are customer-centric, creating new opportunities.
                        </p>


                        <div className='bg-red500 flex sm:justify-start justify-center items-center p-6 gap-8 flex-wrap'>

                            <Image className='h-16 w-auto' src={`https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png`} height={30} width={90} alt="partnerLogo" />
                            <Image className='h-16 w-auto' src={`https://assets.aboutamazon.com/4b/7f/4a4a80724a5e9a6b4a1931e8bf99/prime-logo-rgb-prime-blue-master.png`} height={30} width={90} alt="partnerLogo" />
                            <Image className='h-16 w-auto' src={`https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png`} height={30} width={90} alt="partnerLogo" />
                            <Image className='h-16 w-auto' src={`https://assets.aboutamazon.com/4b/7f/4a4a80724a5e9a6b4a1931e8bf99/prime-logo-rgb-prime-blue-master.png`} height={30} width={90} alt="partnerLogo" />
                            <Image className='h-16 w-auto' src={`https://1000logos.net/wp-content/uploads/2022/08/Myntra-Logo.png`} height={30} width={90} alt="partnerLogo" />
                            <Image className='h-16 w-auto' src={`https://www.cdnlogo.com/logos/d/69/digitalocean.svg`} height={30} width={90} alt="partnerLogo" />


                        </div>



                    </div>

                </section>


            </section>
        </>

    )
}

export default OurTeam;