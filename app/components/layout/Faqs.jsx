"use client"

import * as React from 'react';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const defaultFaqData = [

    {
        id: "default-2",
        question: "Why Choose Bunnx for Software Engineering, Consulting, and Outsourcing?",
        answer: {
            type: "list",
            para: "Bunnx offers a highly skilled team dedicated to delivering quality software solutions. Here’s why we stand out:",
            content: [
                "Over 675 developers capable of handling complex projects.",
                "Expertise across a wide range of technologies.",
                "Known for delivering high-standard, reliable work.",
                "Experience across diverse sectors, bringing valuable insights."
            ]
        }
    },
    {
        id: "default-1",
        question: "How much does it cost to outsource software development to India?",
        answer: {
            type: "text",
            content: "The cost of outsourcing software development to India varies based on the project scope, application complexity, and specific needs—like features, integrations, APIs, animations, localization, backend requirements, cross-platform support, and more. If you share a general idea of your project, we’ll gladly provide you with an estimated timeline and cost tailored to your goals."
        }
    },
    {
        id: "default-4",
        question: "I own a digital agency. Do you offer white-label software development services?",
        answer: {
            type: "text",
            content: "Absolutely! We offer full white-label software development services across B2B, B2C, and SaaS models. Our approach is transparent and collaborative, understanding that every business is unique. We work closely with our clients to meet specific needs and offer 24/7 support to keep your business running smoothly. Reach out to one of our experts to learn more about how our white-label solutions can support your agency."
        }
    },
    {
        id: "default-3",
        question: "Is outsourcing software development risky? How do you protect intellectual property and data?",
        answer: {
            type: "list",
            para: "Outsourcing software development can be secure and straightforward when you partner with a trusted company. At ValueCoders, we prioritize your intellectual property (IP) and data protection through various measures:",
            content: [
                "Signing a Non-Disclosure Agreement (NDA)",
                "Complying with industry-specific regulations like GDPR and HIPAA",
                "Adhering to secure coding and robust data protection practices",
                "Using firewalls, encryption, and VPNs to safeguard against online threats",
                "Carefully verifying all employees before they join our team"
            ]
        }
    },
    {
        id: "default-6",
        question: "What kind of developers can I hire through your service?",
        answer: {
            type: "text",
            content: "We offer a wide range of developers, including PHP, React, Node.js, Python, Angular, .NET, and many more. Whether you need frontend, backend, or full-stack developers, we can connect you with experts who fit your project’s unique requirements."
        }
    },
    {
        id: "default-5",
        question: "Do you offer project management support along with developers?",
        answer: {
            type: "text",
            content: "Yes, we can provide project management support to help oversee your project, track progress, and ensure smooth communication between your team and our developers. This option is particularly helpful for clients who want end-to-end support."
        }
    },
    {
        id: "default-7",
        question: "How do you handle intellectual property and data security?",
        answer: {
            type: "text",
            content: "We take IP and data security very seriously. We sign Non-Disclosure Agreements (NDAs) and adhere to industry standards for secure coding, data protection, and compliance with GDPR and other relevant regulations. You retain full ownership of the work completed."
        }
    },
    {
        id: "default-8",
        question: "I want to outsource software development. What engagement options do you offer?",
        answer: {
            type: "paragraph",
            headPara: "At Bunnx, we offer a variety of engagement models to suit your specific project requirements. Whether you need a dedicated team of coders for an ongoing project or just a few extra hands for a one-off task, we have an engagement model that will fit your needs.",
            content: [
                { title: "Dedicated Team", para: "Dedicated team model comprises a PM, SW Engineer, QA Engineer, and other roles defined for each specific project." },
                { title: "Staff Augmentation", para: "We provide extra talent to boost your specific projects. This extended team works as a part of your local team, attending your daily meetings and reporting directly to your manager." },
                { title: "Offshore Development Center", para: "We also provide a dedicated software development office with all required infrastructure and employees in India. Our ODC model helps you save budget and speed up development, recruiting, and optimizing accounting and HR." },
            ]
        }
    },

];



const Faqs = ({ faqData }) => {





    return (
        <>
            <section className="border-t container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-8">
                <section className="flex flex-wrap justify-center md:gap-10 gap-5 py-2 my-6">
                    <div className='lg:w-[30%] w-full'>
                        <h2 className='font-semibold text-orange-500 text-xl'>FAQs</h2>
                        <h4 className='font-semibold text-3xl my-2'>Ask what you want</h4>
                        <p className='text-lg text-gray-800'>Whether you require a complex enterprise software solution or seamless software integration.</p>
                    </div>

                    <div className="lg:w-[62%] w-full py-2">
                        <Accordion type="single" collapsible className="w-full">
                            {(faqData || defaultFaqData).map((faq) => (
                                <AccordionItem key={faq.id} value={faq.id}>
                                    <AccordionTrigger className='text-[17px] text-left text-gray-800 hover:no-underline'>
                                        {faq.question || "No question available"}
                                    </AccordionTrigger>
                                    <AccordionContent className='text-[16px] text-gray-700 my-6'>
                                        {/* Render answer based on its type */}
                                        {faq.answer?.type === "text" && faq.answer?.content && (
                                            <p className=''>{faq.answer.content}</p>
                                        )}

                                        {faq.answer?.type === "paragraph" && Array.isArray(faq.answer.content) && (
                                            <>
                                                {faq.answer.headPara && (
                                                    <p className="mb-3">{faq.answer.headPara}</p>
                                                )}

                                                {faq.answer.content.map((item, index) => (
                                                    <div key={index} className="mb-4 flex">
                                                        {item.para && item.title && <p> <strong>{item.title}:</strong> {item.para}</p>}
                                                    </div>
                                                ))}

                                            </>


                                        )}

                                        {faq.answer?.type === "list" && (
                                            <>
                                                {/* Optional paragraph before the list */}
                                                {faq.answer.para && (
                                                    <p className="mb-3">{faq.answer.para}</p>
                                                )}
                                                {/* List content */}
                                                {Array.isArray(faq.answer.content) && (
                                                    <ul className='list-disc mt-6 list-inside space-y-2'>
                                                        {faq.answer.content.map((item, index) => (
                                                            <li key={index}>{item}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </>
                                        )}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Faqs;
