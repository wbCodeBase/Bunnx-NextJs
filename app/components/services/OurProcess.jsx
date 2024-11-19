'use client'

import { useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import "./service.css";

// const processSections = [
//     {
//         id: 1,
//         title: "Requirement Assessment",
//         description: "Initiating the process with a comprehensive understanding of your vision. We delve into your business objectives, market trends, and target audience to ensure a bespoke strategy tailored for success.",
//         activities: [
//             "Client objectives and needs analysis",
//             "Market and user research",
//             "Technology stack evaluation"
//         ],
//         deliverables: [
//             "Requirements Gathering Report",
//             "Market Analysis Summary",
//             "Technology Assessment Report"
//         ]
//     },
//     {
//         id: 2,
//         title: "Agreement on Engagement",
//         description: "Establishing clear terms of collaboration and project scope. We define timelines, milestones, and deliverables to ensure transparent communication and smooth project execution.",
//         activities: [
//             "Scope definition",
//             "Timeline planning",
//             "Resource allocation"
//         ],
//         deliverables: [
//             "Project Scope Document",
//             "Timeline Roadmap",
//             "Resource Plan"
//         ]
//     },
//     {
//         id: 3,
//         title: "Design & Development",
//         description: "Transforming requirements into reality through iterative development. Our expert team creates intuitive designs and robust code following industry best practices.",
//         activities: [
//             "UI/UX design",
//             "Frontend development",
//             "Backend implementation"
//         ],
//         deliverables: [
//             "Design Mockups",
//             "Working Prototype",
//             "Development Milestones"
//         ]
//     },
//     {
//         id: 4,
//         title: "Testing & Quality Assurance",
//         description: "Ensuring excellence through comprehensive testing. We conduct thorough quality checks to deliver a robust and reliable solution.",
//         activities: [
//             "Functional testing",
//             "Performance optimization",
//             "Security assessment"
//         ],
//         deliverables: [
//             "Test Cases Document",
//             "QA Reports",
//             "Performance Metrics"
//         ]
//     },
//     {
//         id: 5,
//         title: "Delivery & Support",
//         description: "Seamless deployment and ongoing support. We ensure smooth transition and provide continuous assistance for optimal performance.",
//         activities: [
//             "Deployment preparation",
//             "Knowledge transfer",
//             "Maintenance planning"
//         ],
//         deliverables: [
//             "Deployment Guide",
//             "Documentation",
//             "Support Plan"
//         ]
//     }
// ]

const processSections = [
    {
        id: 1,
        title: "Gathering Your Requirements",
        description: "We begin by thoroughly understanding your vision, diving into your business objectives, market trends, and target audience to create a customized strategy designed for success.",
        activities: [
            "Client Need Analysis",
            "Gathering all basic information",
            "Marketing and competition research",
            "Tech Stack Assessment"
        ],
        deliverables: [
            "Requirement Gathering Report",
            "Competition Analysis Report",
            "Tech Stack Report"
        ]
    },
    {
        id: 2,
        title: "Service Agreement",
        description: "We create a strong base of trust and collaboration by agreeing on the project scope, methodologies, and deliverables, ensuring a transparent and productive partnership.",
        activities: [
            "Scope definition and agreement",
            "Setting up communication channels",
            "Resource and timeline planning"
        ],
        deliverables: [
            "Project Scope Document",
            "Communication Plan",
            "Detailed Project Schedule"
        ]
    },
    {
        id: 3,
        title: "Design & Development",
        description: "Our team works closely together to develop highly responsive and user-friendly software. We ensure that our solutions align with your vision and meet all necessary requirements.",
        activities: [
            "UX/UI design and prototyping",
            "Frontend and backend development",
            "API Development and Integration"
        ],
        deliverables: [
            "Design Wireframes and Prototype",
            "Web Application up and running",
            "Integrated System Interfaces"
        ]
    },
    {
        id: 4,
        title: "Testing & Quality Assurance",
        description: "Ensuring top performance and security, our thorough testing protocols make sure your web app is reliable, secure, and prepared to handle user demands.",
        activities: [
            "Integration & Functional Testing",
            "Security and load testing",
            "Test Automation"
        ],
        deliverables: [
            "Test Execution Report",
            "Security and Performance Reports",
            "Optimized, Bug-Free Code"
        ]
    },
    {
        id: 5,
        title: "Delivery & Support",
        description: "Rolling out your software with assurance and ongoing support. We guarantee a seamless launch and offer continuous maintenance to keep your application current and effective.",
        activities: [
            "Deployment to production servers",
            "User training and documentation",
            "Ongoing maintenance and updates"
        ],
        deliverables: [
            "Deployed Web Application",
            "Training Materials and Guides",
            "Regular Update and Support Logs"
        ]
    }
]


export default function ProcessShowcase() {
    const [activeSection, setActiveSection] = useState(1)

    return (<>
        <div className="max-w-screen-xl container mx-auto p-4 md:p-8">

            <h2 className='font-semibold text-orange-500 text-lg'>Our Process</h2>
            <h4 className='font-semibold text-3xl my-2'>Our Process for Software Development</h4>
            <p className='text-md text-gray-800'>As a leading software development company in India, we deliver solutions that are visually striking and technically advanced. Our services combine innovative design with advance development techniques to empower your brand. </p>


            <div className='text-white md:my-10 my-6'>
                {/* Mobile View */}
                <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 fle items-star justify-cente lg:space-y-8">
                    {processSections.map((section) => (
                        <div key={section.id} className="space-y-4 bg-[#1a1a1a] p-6 rounded-lg our-process-box">
                            <h2 className="text-2xl font-bold">{section.title}</h2>
                            <p className="text-gray-300">{section.description}</p>
                            <div className="grid gap-6">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Task Involved</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                                        {section.activities.map((activity, index) => (
                                            <li key={index}>{activity}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Outputs</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                                        {section.deliverables.map((deliverable, index) => (
                                            <li key={index}>{deliverable}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop View */}
                <LayoutGroup>
                    <div className="hidden lg:flex gap-4 h-[400px]">
                        {processSections.map((section) => (
                            <motion.div
                                layout
                                key={section.id}
                                className={`relative bg-[#1a1a1a] rounded-lg cursor-pointer overflow-hidden pb-8 transition-colors our-process-box
                ${activeSection === section.id ? 'flex-1' : 'flex-none w-[120px]'}`}
                                onHoverStart={() => setActiveSection(section.id)}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >


                                {/* Background Pattern */}
                                <div className={`absolute inset-0 opacity-10 pointer-events-none`}>
                                    <div className="absolute inset-0"
                                        style={{
                                            backgroundImage: `linear-gradient(60deg, #fff 25%, transparent 25%, transparent 75%, #1a1a1a 75%, #1a1a1a),
                                  linear-gradient(60deg, #fff 25%, transparent 25%, transparent 75%, #1a1a1a 75%, #1a1a1a)`,
                                            backgroundSize: '400px 400px',
                                            backgroundPosition: '0 0, 20px 20px',
                                            backgroundRepeat: 'no-repeat'
                                        }}
                                    />
                                </div>

                                <motion.div
                                    layout
                                    className={`relative h-full flex flex-col ${activeSection === section.id ? 'p-10' : 'p-2'
                                        }`}
                                >
                                    <motion.div
                                        layout
                                        className={`${activeSection === section.id
                                            ? ''
                                            : 'h-full flex flex-col items-center justify-end'
                                            }`}
                                    >
                                        {activeSection !== section.id && (
                                            <div className="absolute top-6 left-0 right-0 flex justify-center animate-pulse">
                                                <ChevronLeft className="w-6 h-6 verticalBounceLeft" />
                                                <ChevronRight className="w-6 h-6 verticalBounceRight" />
                                            </div>
                                        )}



                                        <motion.h2
                                            layout="position"
                                            className={`text-2xl font-bold whitespace-nowrap ${activeSection === section.id
                                                ? 'mb-4'
                                                : 'writing-mode-vertica text-[18px]'
                                                }`}
                                            style={{
                                                writingMode: activeSection === section.id ? 'horizontal-tb' : 'vertical-rl',
                                                transform: activeSection === section.id ? 'none' : 'rotate(180deg)',
                                            }}
                                        >
                                            {section.title}
                                        </motion.h2>



                                    </motion.div>

                                    <AnimatePresence>
                                        {activeSection === section.id && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="space-y-6"
                                            >
                                                <p className="text-gray-300 max-w-2xl">{section.description}</p>

                                                <div className="grid md:grid-cols-2 gap-8">
                                                    <div>
                                                        <h3 className="text-xl font-semibold mb-4">Task Involved</h3>
                                                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                                                            {section.activities.map((activity, index) => (
                                                                <li key={index}>{activity}</li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    <div>
                                                        <h3 className="text-xl font-semibold mb-4">Outputs</h3>
                                                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                                                            {section.deliverables.map((deliverable, index) => (
                                                                <li key={index}>{deliverable}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </LayoutGroup>
            </div>

        </div>
    </>
    )
}
