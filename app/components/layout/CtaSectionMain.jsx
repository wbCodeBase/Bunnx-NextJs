import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import Link from 'next/link';

const CtaSectionMain = ({ serviceDetailPageSlug }) => {

    const CtaMain = [
        {
            span: "Solutions That Evolve as Your Business Grows!",
            head: "Frustrated with a lacklustre website design?",
            para: "Our expert Front-End Development team is here to help you captivate your visitors.",
            ctaText: "Let's Connect!",
            slug: "front-end-development"
        },
        {
            span: "Growth-Oriented Strategies That Adapt to Your Expanding Needs!",
            head: "Ready to bring your dream project to life?",
            para: "Tired of unreliable servers and frequent downtimes? Our back-end specialists build robust architectures, improve database performance, and streamline API integrations.",
            ctaText: "Let's Connect!",
            slug: "back-end-development"
        },
    ]

    const ctaMainObj = CtaMain?.find((ctaMain) => ctaMain?.slug === serviceDetailPageSlug) || {
        span: `Your Success, Our Priority`,
        head: `Boost Your Business with Reliable Web`,
        para: `From design to deployment, we provide innovative solutions to help your business thrive.`,
        ctaText: "Let's Connect!",
    };

    return (
        <>


            <section className='sm:py-12 py-2'>
                <div className="bg-[#00214E] px-4 md:px-6">

                    <div className="container mx-auto max-w-screen-xl flex gap-8 items-center flex-wrap sm:justify-between justify-center sm:px-10 px-4 py-10 bg-purple900 bg-[#00214E] rounded-md borde border-gray-50">

                        {ctaMainObj && <div className='text-white flex gap-4 flex-col lg:items-start items-center xl:w-[58%] w-full'>
                            <span>{ctaMainObj.span}</span>
                            <h2 className='text-3xl font-semibold'>{ctaMainObj.head}</h2>
                            <p>{ctaMainObj.para}</p>
                        </div>
                        }


                        <div className='flex justify-center items-center'>

                            <Link href="tel:+91-9971544661" className='flex items-center justify-center gap-2 bg[#261E80] p-1 pr-3 font-medium text-md bg-orange-500 rounded-full mt-4 text-white'> <span className='bg-white rounded-full p-3 text-xl text-black animate-bounce'> <FaPhoneAlt /> </span> <span> {ctaMainObj.ctaText} </span></Link>

                        </div>

                    </div>

                </div>
            </section>


        </>
    )
}

export default CtaSectionMain