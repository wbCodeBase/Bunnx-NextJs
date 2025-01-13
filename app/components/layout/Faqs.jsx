"use client";

import * as React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { createLinkedContent } from '#/utils/LinkBuilder';


const keywordToSlug = {
"outsourcing software development": "it-outsourcing",
"white-label software development services": "it-outsourcing",
"Front-End Development companies": "front-end-development-services",
"Front-End Development company": "front-end-development-services",
"back-end development agency": "back-end-development-services",
};


const faqData = {
    "default": [

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

    ],
    "back-end-development-services": [
        {
            id: "backend-1",
            question: "What technologies do you specialize in?",
            answer: {
                type: "text",
                content:
                    "We specialize in a wide range of back-end technologies, including Python (Django, Flask), Java (Spring Boot), Node.js (Express, NestJS), Ruby on Rails, Go, and PHP (Laravel). We also have expertise in various databases, cloud platforms, and containerization technologies.",
            },
        },
        {
            id: "backend-2",
            question: "How do you ensure the security of our applications?",
            answer: {
                type: "text",
                content:
                    "We prioritize security throughout the development process. This includes implementing robust authentication and authorization mechanisms, conducting regular security audits and penetration testing.",
            },
        },
        {
            id: "backend-3",
            question: "What is your approach to project management?",
            answer: {
                type: "text",
                content:
                    "We follow agile methodologies, emphasizing iterative development, close collaboration, and regular communication with our clients. Our back-end development agency uses project management tools to track progress.",
            },
        },
        {
            id: "backend-4",
            question: "Do you offer post-launch support?",
            answer: {
                type: "text",
                content:
                    "Yes, we provide comprehensive post-launch support, including bug fixes, maintenance, performance optimization, and ongoing support to ensure the continued smooth operation of your application.",
            },
        },
        {
            id: "backend-5",
            question: "How do you ensure the scalability of your solutions?",
            answer: {
                type: "text",
                content:
                    "We design and develop solutions using microservices architecture, cloud-native technologies, and containerization techniques to accommodate growing user bases and data volumes.",
            },
        },
        {
            id: "backend-6",
            question:
                "What are the benefits of hiring your back-end development services?",
            answer: {
                type: "text",
                content:
                    "By hiring our services, you gain access to a team of skilled engineers, accelerate development timelines, reduce costs, and benefit from our expertise.",
            },
        },
    ],
    "front-end-development-services": [
        {
            id: "default-1",
            question: "What technologies do Front-End Development companies use?",
            answer: {
                type: "text",
                content:
                    "Top Front-End Development companies work with a variety of technologies, including React.js, Angular, and Vue.js.",
            },
        },
        {
            id: "default-2",
            question: "Do Front-End Development companies offer post-launch support?",
            answer: {
                type: "text",
                content:
                    "Yes, most Front-End Development companies provide post-launch support and maintenance services, including bug fixes, updates, performance optimization, and feature enhancements to keep your application running smoothly.",
            },
        },
        {
            id: "default-3",
            question: "Why should I hire a Front-End Development company?",
            answer: {
                type: "text",
                content:
                    "Hiring a Front-End Development company ensures you get end-to-end development services under one roof. They offer expertise in multiple programming languages, frameworks, and tools, enabling them to deliver seamless, user-friendly, and robust applications tailored to your business needs.",
            },
        },
        {
            id: "default-4",
            question:
                "How does a Front-End Development company ensure scalability and security?",
            answer: {
                type: "text",
                content:
                    "A reliable company designs systems with scalability in mind, using modular architecture and cloud solutions to handle growth. For security, they implement best practices like data encryption, secure authentication, and regular vulnerability assessments to protect your application from threats.",
            },
        },
        {
            id: "default-5",
            question: "Do Front-End Development companies offer post-launch support?",
            answer: {
                type: "text",
                content:
                    "Yes, most Front-End Development companies provide post-launch support and maintenance services, including bug fixes, updates, performance optimization, and feature enhancements.",
            },
        },
    ],


    "best-software-development-company-in-india": [
        {
            "id": "default-1",
            "question": "What technologies do you specialize in for software development?",
            "answer": {
                "type": "text",
                "content": "We work with a wide range of software development technologies, including but not limited to Python, Java, C++, Node.js, JavaScript frameworks like React and Angular, and database technologies like MySQL, MongoDB, and PostgreSQL. We choose the best fit for each project based on its unique requirements."
            }
        },
        {
            "id": "default-2",
            "question": "How do you ensure the security of the software you develop?",
            "answer": {
                "type": "text",
                "content": "Security is a top priority in our development process. We implement advanced encryption techniques, perform regular vulnerability assessments, and use secure authentication methods to ensure that your software is safe from threats. Additionally, we stay up-to-date with the latest security standards and best practices."
            }
        },
        {
            "id": "default-3",
            "question": "Why should I choose your software development services?",
            "answer": {
                "type": "text",
                "content": "Choosing our software development services means working with a team that’s passionate about delivering high-quality, tailor-made solutions. We take the time to understand your business needs, ensuring the software we build is not only functional but also scalable and secure. With our expertise in multiple programming languages and frameworks, we guarantee a seamless experience for your users."
            }
        },
        {
            "id": "default-4",
            "question": "What is your approach to ensuring scalability and flexibility in your software solutions?",
            "answer": {
                "type": "text",
                "content": "We believe that software should grow with your business. That's why we build solutions with scalability in mind. Our team leverages cloud platforms, microservices architecture, and modular design patterns to ensure that your software can handle increasing demands. Whether you're expecting more users, bigger data, or new features, we ensure your system can scale with ease."
            }
        },
        {
            "id": "default-5",
            "question": "Do you offer post-launch support for the software you develop?",
            "answer": {
                "type": "text",
                "content": "Absolutely! Our relationship with clients doesn’t end once the software is launched. We offer comprehensive post-launch support, including bug fixes, software updates, performance optimization, and new feature development. We are here to ensure that your software continues to perform at its best long after launch."
            }
        }
    ]

};

const Faqs = ({ serviceDetailPageSlug }) => {
    const data = faqData[serviceDetailPageSlug] || faqData["default"];

    return (
        <section className="border-t container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-8">
            <section className="flex flex-wrap justify-center md:gap-10 gap-5 py-2 my-6">
                <div className="lg:w-[30%] w-full">
                    <h2 className="font-semibold text-orange-500 text-xl">FAQs</h2>
                    <h4 className="font-semibold text-3xl my-2">Ask what you want</h4>
                    <p className="text-lg text-gray-800">
                        Whether you require a complex enterprise software solution or
                        seamless software integration.
                    </p>
                </div>

                <div className="lg:w-[62%] w-full py-2">
                    <Accordion type="single" collapsible className="w-full">
                        {data.map((faq) => (
                            <AccordionItem key={faq.id} value={faq.id}>
                                <AccordionTrigger className="text-[17px] text-left text-gray-800 hover:no-underline">
                                    {faq.question || "No question available"}
                                </AccordionTrigger>
                                <AccordionContent className="text-[16px] text-gray-700 my-6">

                                    {faq.answer?.type === "text" && faq.answer?.content && (
                                        <p>{createLinkedContent(faq?.answer?.content, keywordToSlug)}</p>
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
    );
};

export default Faqs;

// "use client"

// import * as React from 'react';

// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
// } from "@/components/ui/accordion"

//   ];

// const defaultFaqData = [

//     {
//         id: "default-2",
//         question: "Why Choose Bunnx for Software Engineering, Consulting, and Outsourcing?",
//         answer: {
//             type: "list",
//             para: "Bunnx offers a highly skilled team dedicated to delivering quality software solutions. Here’s why we stand out:",
//             content: [
//                 "Over 675 developers capable of handling complex projects.",
//                 "Expertise across a wide range of technologies.",
//                 "Known for delivering high-standard, reliable work.",
//                 "Experience across diverse sectors, bringing valuable insights."
//             ]
//         }
//     },
//     {
//         id: "default-1",
//         question: "How much does it cost to outsource software development to India?",
//         answer: {
//             type: "text",
//             content: "The cost of outsourcing software development to India varies based on the project scope, application complexity, and specific needs—like features, integrations, APIs, animations, localization, backend requirements, cross-platform support, and more. If you share a general idea of your project, we’ll gladly provide you with an estimated timeline and cost tailored to your goals."
//         }
//     },
//     {
//         id: "default-4",
//         question: "I own a digital agency. Do you offer white-label software development services?",
//         answer: {
//             type: "text",
//             content: "Absolutely! We offer full white-label software development services across B2B, B2C, and SaaS models. Our approach is transparent and collaborative, understanding that every business is unique. We work closely with our clients to meet specific needs and offer 24/7 support to keep your business running smoothly. Reach out to one of our experts to learn more about how our white-label solutions can support your agency."
//         }
//     },
//     {
//         id: "default-3",
//         question: "Is outsourcing software development risky? How do you protect intellectual property and data?",
//         answer: {
//             type: "list",
//             para: "Outsourcing software development can be secure and straightforward when you partner with a trusted company. At ValueCoders, we prioritize your intellectual property (IP) and data protection through various measures:",
//             content: [
//                 "Signing a Non-Disclosure Agreement (NDA)",
//                 "Complying with industry-specific regulations like GDPR and HIPAA",
//                 "Adhering to secure coding and robust data protection practices",
//                 "Using firewalls, encryption, and VPNs to safeguard against online threats",
//                 "Carefully verifying all employees before they join our team"
//             ]
//         }
//     },
//     {
//         id: "default-6",
//         question: "What kind of developers can I hire through your service?",
//         answer: {
//             type: "text",
//             content: "We offer a wide range of developers, including PHP, React, Node.js, Python, Angular, .NET, and many more. Whether you need frontend, backend, or full-stack developers, we can connect you with experts who fit your project’s unique requirements."
//         }
//     },
//     {
//         id: "default-5",
//         question: "Do you offer project management support along with developers?",
//         answer: {
//             type: "text",
//             content: "Yes, we can provide project management support to help oversee your project, track progress, and ensure smooth communication between your team and our developers. This option is particularly helpful for clients who want end-to-end support."
//         }
//     },
//     {
//         id: "default-7",
//         question: "How do you handle intellectual property and data security?",
//         answer: {
//             type: "text",
//             content: "We take IP and data security very seriously. We sign Non-Disclosure Agreements (NDAs) and adhere to industry standards for secure coding, data protection, and compliance with GDPR and other relevant regulations. You retain full ownership of the work completed."
//         }
//     },
//     {
//         id: "default-8",
//         question: "I want to outsource software development. What engagement options do you offer?",
//         answer: {
//             type: "paragraph",
//             headPara: "At Bunnx, we offer a variety of engagement models to suit your specific project requirements. Whether you need a dedicated team of coders for an ongoing project or just a few extra hands for a one-off task, we have an engagement model that will fit your needs.",
//             content: [
//                 { title: "Dedicated Team", para: "Dedicated team model comprises a PM, SW Engineer, QA Engineer, and other roles defined for each specific project." },
//                 { title: "Staff Augmentation", para: "We provide extra talent to boost your specific projects. This extended team works as a part of your local team, attending your daily meetings and reporting directly to your manager." },
//                 { title: "Offshore Development Center", para: "We also provide a dedicated software development office with all required infrastructure and employees in India. Our ODC model helps you save budget and speed up development, recruiting, and optimizing accounting and HR." },
//             ]
//         }
//     },

// ];

// const Faqs = () => {

//     return (
//         <>
//             <section className="border-t container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-8">
//                 <section className="flex flex-wrap justify-center md:gap-10 gap-5 py-2 my-6">
//                     <div className='lg:w-[30%] w-full'>
//                         <h2 className='font-semibold text-orange-500 text-xl'>FAQs</h2>
//                         <h4 className='font-semibold text-3xl my-2'>Ask what you want</h4>
//                         <p className='text-lg text-gray-800'>Whether you require a complex enterprise software solution or seamless software integration.</p>
//                     </div>

//                     <div className="lg:w-[62%] w-full py-2">
//                         <Accordion type="single" collapsible className="w-full">
//                             {(faqData || defaultFaqData).map((faq) => (
//                                 <AccordionItem key={faq.id} value={faq.id}>
//                                     <AccordionTrigger className='text-[17px] text-left text-gray-800 hover:no-underline'>
//                                         {faq.question || "No question available"}
//                                     </AccordionTrigger>
//                                     <AccordionContent className='text-[16px] text-gray-700 my-6'>
//                                         {/* Render answer based on its type */}
//                                         {faq.answer?.type === "text" && faq.answer?.content && (
//                                             <p className=''>{faq.answer.content}</p>
//                                         )}

//                                         {faq.answer?.type === "paragraph" && Array.isArray(faq.answer.content) && (
//                                             <>
//                                                 {faq.answer.headPara && (
//                                                     <p className="mb-3">{faq.answer.headPara}</p>
//                                                 )}

//                                                 {faq.answer.content.map((item, index) => (
//                                                     <div key={index} className="mb-4 flex">
//                                                         {item.para && item.title && <p> <strong>{item.title}:</strong> {item.para}</p>}
//                                                     </div>
//                                                 ))}

//                                             </>

//                                         )}

//                                         {faq.answer?.type === "list" && (
//                                             <>
//                                                 {/* Optional paragraph before the list */}
//                                                 {faq.answer.para && (
//                                                     <p className="mb-3">{faq.answer.para}</p>
//                                                 )}
//                                                 {/* List content */}
//                                                 {Array.isArray(faq.answer.content) && (
//                                                     <ul className='list-disc mt-6 list-inside space-y-2'>
//                                                         {faq.answer.content.map((item, index) => (
//                                                             <li key={index}>{item}</li>
//                                                         ))}
//                                                     </ul>
//                                                 )}
//                                             </>
//                                         )}
//                                     </AccordionContent>
//                                 </AccordionItem>
//                             ))}
//                         </Accordion>
//                     </div>
//                 </section>
//             </section>
//         </>
//     )
// }

// export default Faqs;
