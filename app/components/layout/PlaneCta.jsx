import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import Link from 'next/link';
import { createLinkedContent } from '#/utils/LinkBuilder';

const PlaneCta = ({ serviceDetailPageSlug }) => {

    const CtaMain = [ 
        {
            span: "Solutions That Evolve as Your Business Grows!",
            head: "Frustrated with a lacklustre website design?",
            para: "Our expert Front-End Development team is here to help you captivate your visitors. Whether it’s sleek animations, navigation, or pixel-perfect design, we craft experiences that leave a lasting impact.",
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
            span: "Scale Your Success with Adaptive CRM Development!",
            head: "Get Expert Insights to Build Better CRM Solutions with Us!",
            para: "Transform your business operations with a CRM software solution that grows alongside your company. We build powerful systems that eliminate workflow bottlenecks and maximize team efficiency.",
            ctaText: "Let's Connect!",
            slug: "crm-software-development-services"
        },
        {
            span: "Scale Your Success with Adaptive CRM Development!",
            head: "Get all your details at one place with the best CRM solutions!",
            para: "Transform your business operations with a CRM software solution that grows alongside your company. We build powerful systems that eliminate workflow bottlenecks and maximize team efficiency.",
            ctaText: "Let's Connect!",
            slug: "software-development-consultants"
        },
        {
            span: "We create softwares that redefines your processes.",
            head: "Get connected with us and gain applications that connect and solve!",
            para: "It all starts with your unique idea. We dig deep to not just technically sound but also help you how real people will use it. Our custom software development delivers tools that truly integrate into your users’ lives. It’s not just about what the app does—it’s about how it makes them feel.",
            ctaText: "Let's Connect!",
            slug: "custom-software-development-services"
        },
        {
            span: "Smart Solutions That Evolve with Your Business!",
            head: "Let us handle complex codes for your website while you scale your business!",
            para: "Are you fed up with unreliable servers and constant downtime? Say no more! Our software development services experts will design solid architectures to boost your database performance.",
            ctaText: "Let's Connect!",
            slug: "best-software-development-company-in-india"
        },
        {
            span: "Get Results with Smart IT Solutions!",
            head: "Stay away from outdated systems with the best IT consulting firm!",
            para: "Use our IT consulting services India to tackle your challenges and simplify complex processes. Let’s turn technology into a tool that helps your business thrive every step of the way.",
            ctaText: "Let's Connect!",
            slug: "it-consulting-services"
        },
        {
            span: "Get Results with Smart IT Solutions!",
            head: "Stay away from outdated systems with the best IT consulting firm!",
            para: "Use our IT consulting services India to tackle your challenges and simplify complex processes. Let’s turn technology into a tool that helps your business thrive every step of the way.",
            ctaText: "Let's Connect!",
            slug: "it-consulting-services"
        },
        {
            span: "Code That Scales, Apps That Shine!",
            head: "Struggling with apps that lag, crash, or fail?",
            para: "Say no more! With Bunnx, you can get the best-in-class solution for all your mobile app development needs. Be it a gaming app or an educational app, our experts are here to help you out in every way. So, let's make the next best app together!",
            ctaText: "Let's Connect!",
            slug: "mobile-app-development-services"
        }, 
        {
            span: "We Code the Connection and Power the Future.",
            head: "Frustrated with unreliable systems and frequent downtimes?",
            para: "Our API Development & Integration Services deliver robust architectures, optimize database performance, and streamline integration services for seamless functionality. So, with us you get the best service with outcomes that matter.",
            ctaText: "Let's Connect!",
            slug: "api-development-and-integration-services"
        }, 
        
    ]

    const ctaMainObj = CtaMain?.find((ctaMain) => ctaMain?.slug === serviceDetailPageSlug) || {
        span: `Where Your Goals Become Our Mission`,
        head: `Elevate Your Business with Cutting-Edge Web Solutions!`,
        para: `Are you ready to elevate your business? At Bunnx, we turn your vision into reality. From eye-catching designs to smooth deployments, our team is dedicated to crafting solutions that help you thrive.`,
        ctaText: "Let's Connect!",
    };

    
const keywordToSlug = {
    'software development services': 'best-software-development-company-in-india',
    'IT consulting services India': 'it-consulting-services',
    'API Development & Integration Services': 'api-development-and-integration-services',
}


    return (
        <>

            <section className='sm:py-12 py-2'>
                <div className="bg-[#00214E] px-4 md:px-6">

                    <div className="container mx-auto max-w-screen-xl flex gap-8 items-center flex-wrap sm:justify-between justify-center sm:px-10 px-4 py-10 bg-purple900 bg-[#00214E] rounded-md borde border-gray-50">

                        {ctaMainObj && <div className='text-white flex gap-4 flex-col lg:items-start items-center xl:w-[58%] w-full'>
                            <span>{ctaMainObj.span}</span>
                            <h2 className='text-3xl font-semibold'>{ctaMainObj.head}</h2>
                            <p>{createLinkedContent(ctaMainObj.para, keywordToSlug, serviceDetailPageSlug)}</p>
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













