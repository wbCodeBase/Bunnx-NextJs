import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import Link from 'next/link';

const PlaneCta = ({ serviceDetailPageSlug }) => {

    const CtaMain = [ 
        {
            span: "Solutions That Evolve as Your Business Grows!",
            head: "Frustrated with a lacklustre website design?",
            para: "Our expert Front-End Development team is here to help you captivate your visitors.",
            ctaText: "Let's Connect!",
            slug: "front-end-development-services"
        }, 
        {
            span: "Growth-Oriented Strategies That Adapt to Your Expanding Needs!",
            head: "Let us handle complex codes for your website while you scale your business!",
            para: "Are you fed up with unreliable servers and constant downtime? Say no more! Our back-end experts will design solid architectures to boost your database performance.",
            ctaText: "Let's Connect!",
            slug: "back-end-development-services"
        },
        {
            span: "Smart Solutions That Evolve with Your Business!",
            head: "Let us handle complex codes for your website while you scale your business!",
            para: "Are you fed up with unreliable servers and constant downtime? Say no more! Our software development services experts will design solid architectures to boost your database performance.",
            ctaText: "Let's Connect!",
            slug: "best-software-development-company-in-india"
        },
        {
            span: "Smart Solutions That Evolve with Your Business!",
            head: "Scale Your Success with Adaptive CRM Development!",
            para: "Transform your business operations with a CRM software solution that grows alongside your company. We build powerful systems that eliminate workflow bottlenecks and maximize team efficiency.",
            ctaText: "Let's Connect!",
            slug: "crm-software-development-services"
        },
        {
            span: "",
            head: "We create apps that do more than perform—they connect and solve.",
            para: "It all starts with your unique idea. We dig deep to not just technically sound but also help you how real people will use it. Our custom software development delivers tools that truly integrate into your users’ lives. It’s not just about what the app does—it’s about how it makes them feel.",
            ctaText: "Let's Connect!",
            slug: "custom-software-development-services"
        },
        
    ]

    const ctaMainObj = CtaMain?.find((ctaMain) => ctaMain?.slug === serviceDetailPageSlug) || {
        span: `Where Your Goals Become Our Mission`,
        head: `Elevate Your Business with Cutting-Edge Web Solutions!`,
        para: `Are you ready to elevate your business? At Bunnx, we turn your vision into reality. From eye-catching designs to smooth deployments, our team is dedicated to crafting solutions that help you thrive.`,
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

export default PlaneCta;













