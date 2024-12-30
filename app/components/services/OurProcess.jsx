'use client'

import { useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import "./service.css";


const contentBySlug = {
    "back-end-development": {
        h2: "Our Process",
        h4: "Our Process for Back End Development",
        p: "Our back-end development process begins with an in-depth analysis of your system requirements and business logic. We design scalable server architectures, implement secure RESTful or GraphQL APIs, and optimize database structures using relational or NoSQL technologies. We use advanced caching strategies, CI/CD pipelines, and rigorous QA testing, and future-ready solutions.",
        processSections: [
            {
                id: 1,
                title: "Engineering & System Analysis",
                description: "We begin by conducting a comprehensive system analysis to understand your business logic, data workflows, and integration requirements.",
                activities: [
                    "Business Logic Analysis",
                    "Database Modeling and Entity-Relationship Mapping",
                    "API Requirement Specification",
                    "Technology and Framework Selection"
                ],
                deliverables: [
                    "Detailed System Requirement Specification (SRS)",
                    "Proposed Architecture Diagram",
                    "Technology Stack Blueprint"
                ]
            },
            {
                id: 2,
                title: "Agreement and Planning",
                description: "Our back end development company designs a scalable, modular back-end architecture for a better data flow, security, and performance. The development strategy is outlined for agile execution.",
                activities: [
                    "Architecting Microservices or Monolithic Structures",
                    "Database Schema Design (Relational/NoSQL)",
                    "Defining API Endpoints and Data Flows",
                    "Task Breakdown and Sprint Planning"
                ],
                deliverables: [
                    "Back-End Architecture Blueprint",
                    "Development Roadmap with Milestones",
                    "API Documentation"
                ]
            },
            {
                id: 3,
                title: "Back-End Coding & Integration",
                description: "Our developers build and integrate core functionalities, focusing on efficient server-side, secure APIs, and third-party service integrations.",
                activities: [
                    "Server-Side Coding (Node.js, Python, Java, etc.)",
                    "Implementing Authentication & Authorization (JWT, OAuth 2.0)",
                    "API Development (RESTful/GraphQL)",
                    "Third-Party Service and Cloud Integration",
                ],
                deliverables: [
                    "Secure Codebase",
                    "Functional API Interfaces",
                    "Integrated Cloud and Third-Party Services"
                ]
            },
            {
                id: 4,
                title: "Quality Assurance & Stress Testing",
                description: "Get code reliability, performance optimization, and scalability through automated and manual testing under real-world conditions.",
                activities: [
                    "Unit, Integration, and Regression Testing",
                    "Load Testing and Scalability Assessment",
                    "Vulnerability Scanning and Security Testing",
                    "Performance Monitoring (APM tools)"
                ],
                deliverables: [
                    "Comprehensive Test Reports",
                    "Debugged Code",
                    "Performance Certification"
                ]
            },
            {
                id: 5,
                title: "Continuous Support",
                description: "The finalized solution is deployed to production, followed by continuous monitoring and iterative updates to maintain peak performance.",
                activities: [
                    "Deployment on Cloud Platforms (AWS, Azure, GCP)",
                    "Setting Up Monitoring Tools (New Relic, ELK Stack)",
                    "Regular Updates and Patch Management",
                    "Providing Client Training and Knowledge Transfer"
                ],
                deliverables: [
                    "Fully Deployed Solution",
                    "Monitoring and Performance Dashboards",
                    "Maintenance Logs and Support SLA Documentation"
                ]
            }
        ]
    },
    "front-end-development": {
        h2: "Our Process",
        h4: "Our Process for Frontend Development",
        p: "As an experienced front-end development company in India, we create visually appealing and dynamic user interfaces. To boost your digital presence, we combine innovative layouts with modern technologies and interactive features that help your website stand out. We follow a series of well-planned and strategic steps to craft the website that counts.",
        processSections: [
            {
                id: 1,
                title: "Understanding Your Vision",
                description: "We start by analyzing your goals, user needs, and market dynamics to deliver tailored front-end solutions that align with your brand identity and objectives.",
                activities: [
                    "Client Requirement Analysis",
                    "Gathering UX/UI preferences",
                    "Research on design trends",
                    "Platform and framework assessment"
                ],
                deliverables: [
                    "Requirement Analysis Report",
                    "UX/UI Trends Report",
                    "Technology Stack Recommendation"
                ]
            },
            {
                id: 2,
                title: "Agreement and Planning",
                description: "Our front end development company establishes a secure framework for collaboration by finalizing the project scope, workflows, and timelines for a seamless development experience.",
                activities: [
                    "Defining scope and deliverables",
                    "Establishing communication protocols",
                    "Creating resource allocation and timeline plans"
                ],
                deliverables: [
                    "Project Scope Documentation",
                    "Communication and Workflow Plan",
                    "front end Development Timeline"
                ]
            },
            {
                id: 3,
                title: "Design & Implementation",
                description: "Our team creates responsive, accessible, and scalable designs, ensuring seamless user experiences across all devices and browsers.",
                activities: [
                    "Wireframe and prototype creation",
                    "HTML/CSS/JavaScript development",
                    "Component integration and state management"
                ],
                deliverables: [
                    "Interactive Prototypes and Mockups",
                    "Responsive UI Implementation",
                    "Functional Component Library"
                ]
            },
            {
                id: 4,
                title: "Testing & Optimization",
                description: "Through rigorous testing, we ensure high performance, cross-browser compatibility, and optimal responsiveness for your front-end application.",
                activities: [
                    "Cross-Browser and Device Testing",
                    "Code Validation and Performance Optimization",
                    "Automated Testing for Components"
                ],
                deliverables: [
                    "Testing and Compatibility Reports",
                    "Optimized front end Codebase",
                    "Bug-Free and Validated Application"
                ]
            },
            {
                id: 5,
                title: "Deployment & Maintenance",
                description: "We deliver your project ready for production and provide consistent support to ensure smooth functionality and updates as required.",
                activities: [
                    "Deployment to hosting platforms",
                    "Knowledge transfer and documentation",
                    "Ongoing monitoring and updates"
                ],
                deliverables: [
                    "Deployed front end Application",
                    "User Training and Support Documentation",
                    "Maintenance Logs and Updates"
                ]
            }
        ]
    },
};


export default function ProcessShowcase({ serviceDetailPageSlug }) {
    const content = contentBySlug[serviceDetailPageSlug] || contentBySlug["front-end-development"]; // Fallback to a default slug
    const { h2, h4, p, processSections } = content;
    const [activeSection, setActiveSection] = useState(1);

    return (
        <>
            <div className="max-w-screen-xl container mx-auto p-4 md:p-8">
                <h2 className='font-semibold text-orange-500 text-lg'>{h2}</h2>
                <h4 className='font-semibold text-3xl my-2'>{h4}</h4>
                <p className='text-md text-gray-800'>{p}</p>



                <div className='text-white md:my-10 my-6'>
                    {/* Mobile View */}
                    <div className="lg:hidden grid grid-cols-1 relative sm:grid-cols-2 gap-4 fle items-star justify-cente lg:space-y-8">
                        {processSections.map((section) => (
                            <div key={section.id} className="space-y-4 bg-[#1a1a1a] p-6 rounded-lg">
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
                                    className={`relative bg-[#1a1a1a] rounded-lg cursor-pointer overflow-hidden pb-8 transition-colors
                ${activeSection === section.id ? 'flex-1' : 'flex-none w-[100px]'}`}
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
                                        className={`relative h-full flex flex-col ${activeSection === section.id ? 'p-6' : 'p-2'
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

                                                    <div className="grid md:grid-cols-2 gap-5">
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
    );
}








