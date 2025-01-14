'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image';

import Agile from "/public/iconMethodology/scrum.png";
import Waterfall from "/public/iconMethodology/waterfall-chart.png";
import Rapid from "/public/iconMethodology/rapid.png";
import DevOps from "/public/iconMethodology/devops.png";
import Meeting from "/public/iconMethodology/meeting.png";
import Startup from "/public/iconMethodology/startup.png";
import Coding from "/public/iconMethodology/coding.png";
import FeaturesValidation from "/public/iconMethodology/integration.png";
import Backlog from "/public/iconMethodology/backlog.PNG";
import RealTime from "/public/iconMethodology/realTime.PNG";

import { createLinkedContent } from '#/utils/LinkBuilder';

const keywordToSlug = {
    'front end development': 'front-end-development-services',
    'software development services': 'best-software-development-company-in-india',
};

const contentBySlug = {
    "front-end-development-services": {
        h2: "Methodology",
        h4: "Get Smarter Applications with Effective Front End Solutions",
        p: "Our front end development strategies are specifically designed to improve usability, scalability, and performance. By combining user-centric design with technological competence, we enable organisations to provide seamless digital experiences.",
        steps: [
            {
                title: "Agile Development",
                description: "At Bunnx, we adopt an iterative approach, focusing on continuous feedback and swift iterations to ensure a polished and responsive user interface.",
                icon: Agile,
            },
            {
                title: "Waterfall Development",
                description: "For projects with well-defined requirements, we utilize the waterfall method to deliver front ends that meet exact specifications in a structured, phase-wise manner.",
                icon: Waterfall,
            },
            {
                title: "Rapid Development",
                description: "To tackle tight deadlines, we employ rapid development practices, building interface prototypes and refining them iteratively based on real-time user feedback.",
                icon: Rapid,
            },
            {
                title: "DevOps Development",
                description: "By implementing DevOps, Hidden Brains ensures streamlined collaboration between design and development, accelerating deployment while maintaining code quality and reliability.",
                icon: DevOps,
            },

        ]
    },
    "back-end-development-services": {
        h2: "Methodology",
        h4: "Get Smarter Applications with Effective Back End Solutions",
        p: "Our back end development strategies are specifically designed to improve usability, scalability, and performance. By combining user-centric design with technological competence, we enable organisations to provide digital experiences.",
        steps: [
            {
                title: "Custom API Development and Integration",
                description: "At Bunnx, we provide API solutions for communication between your back-end and third-party services. Our team develops RESTful and GraphQL APIs to integrate APIs into your system with minimal downtime.",
                icon: Agile,
            },
            {
                title: "Database Optimization and Management",
                description: "Our back-end team excels in optimizing and structuring your databases for speed. Whether you need relational databases like MySQL or PostgreSQL, or NoSQL databases like MongoDB, we ensure they are well-tuned for fast queries and easy data retrieval.",
                icon: Waterfall,
            },
            {
                title: "Cloud Infrastructure and Deployment",
                description: "Our back-end solutions leverage cloud platforms like AWS, Azure, and Google Cloud. We design custom cloud architectures and deploy applications with high availability, disaster recovery, and cost efficiency in mind.",
                icon: Rapid,
            },
            {
                title: "Real-Time Data Processing",
                description: "We build real-time back-end systems that allow for communication and data updates across multiple users and devices. Our expertise includes setting up WebSockets, Kafka, and RabbitMQ to process streaming data, handle high-throughput messaging, and push notifications.",
                icon: DevOps,
            },

        ]
    },
    "best-software-development-company-in-india": {
        h2: "Methodology",
        h4: "Get Softwares that Require Low Maintenance",
        p: "Our software development services team works towards developing a more secure and advanced software solution by using technologies that are latest and fruitful.",
        steps: [
            {
                title: "Daily Sync Meetings",
                description: "The Scrum Master facilitates daily stand-ups to resolve blockers,  review progress, and other challenges faced by our team members.",
                icon: Meeting,
            },
            {
                title: "Project Initiation",
                description: "We kick off with bi-weekly sprints and planned rollouts. Our experts adhere to defined project timelines for this.",
                icon: Startup,
            },
            {
                title: "Task Implementation & Development",
                description: "Our team works in collaboration with your staff to execute tasks, address user stories, and move towards sprint objectives.",
                icon: Coding,
            },
            {
                title: "Feature Validation",
                description: "Quality Assurance Engineers are used to validate and test new features for good functionality and integration of your system.",
                icon: FeaturesValidation,
            },
            {
                title: "Backlog Management",
                description: "The software development services team takes full responsibility for updating the sprint backlog and making sure your projects are provided to you on time.",
                icon: Backlog,
            },
            {
                title: "Sprint Retrospectives",
                description: "Post-sprint reviews are made to identify areas of improvement,  check workflows of the team, and improve0 future sprint planning.",
                icon: Agile,
            },

        ]
    },
    "crm-software-development-services": {
        h2: "Methodology",
        h4: "Get Smarter Applications with Effective CRM Software Development Solutions",
        p: "We build real-time back-end systems that allow for communication and data updates across multiple users and devices. Our expertise includes setting up WebSockets, Kafka, and RabbitMQ to process streaming data, handle high-throughput messaging, and push notifications.",
        steps: [ 
            {
                title: "CRM Module Integration",
                description: "At Bunnx, we develop lead management pipelines with Django ORM or Hibernate. We also design contact tracking modules with indexed database queries. Our API development helps in integration with ERP systems, marketing automation tools, and analytics platforms.",
                icon: FeaturesValidation,
            },
            {
                title: "Advanced Customer Data Management",
                description: "We implement data management systems using SQL schemas for relational data in PostgreSQL or MySQL. The document-based NoSQL architectures with MongoDB or Couchbase are also used to manage unstructured customer interaction data.",
                icon: Agile,
            },
            {
                title: "Cloud-Native CRM Execution",
                description: "Some of the technologies we, at Bunnx, use are AWS EC2, S3, and RDS for application hosting and data storage. Azure Cosmos DB for globally distributed databases supporting low-latency customer queries.",
                icon: Coding,
            },
            {
                title: "Real-Time CRM Systems",
                description: "We build WebSocket-based notification for instant updates on lead or customer status. Event-driven architecture using Apache Kafka or RabbitMQ for high-throughput messaging and task queuing is also our go-to strategy.",
                icon: RealTime,
            }
        ]
        
    },
}





export default function Methodology({ serviceDetailPageSlug }) {

    const content = contentBySlug[serviceDetailPageSlug] || contentBySlug["front-end-development-services"]; // Fallback to a default slug
    const { h2, h4, p, steps } = content;

    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: "-100px" })
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        if (isInView) {
            const interval = setInterval(() => {
                setActiveIndex((prev) => (prev < 5 ? prev + 1 : prev))
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [isInView])






    return (
        <section className='bg-gray-50'>
            <div className='container mx-auto max-w-screen-xl px-4 md:px-6 sm:py-10 py-5'>

                <h2 className='font-semibold text-orange-500 text-lg'>{h2}</h2>
                <h4 className='font-semibold sm:text-4xl text-2xl my-2'>{h4}</h4>
                <p className='text-md text-gray-800'>{createLinkedContent(p, keywordToSlug)}</p>
               
                <div ref={containerRef} className="relative mt-8 my-4">

                    <div className="grid gap-5 grid-col-1 sm:grid-cols-2 md:grid-cols-4">
                        {steps.map((step, index) => (


                            <motion.div
                                key={index}
                                className="relative"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: isInView ? 1 : 0,
                                    y: isInView ? 0 : 20,
                                }}
                                transition={{ delay: index * 0.2 }}
                            >


                                <motion.div className={`relativ flex items-start flex-col rounded-2xl p-6 bg-white border border-blue-100 hover:shadow-md cursor-pointer h-full shadow-sm`}>


                                    <motion.div
                                        className={`rounded-full p-3 transition-colors ${index <= activeIndex ? 'bg-amber-50' : 'bg-background'
                                            }`}
                                        animate={{
                                            backgroundColor: index <= activeIndex ? 'rgb(255 251 235)' : 'rgb(255 255 255)',
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >


                                        <Image src={step.icon} className='h-12 w-auto' alt={step.title} />



                                    </motion.div>

                                    <h3 className="text-lg my-4 font-semibold">{step.title}</h3>

                                    <p className="text-md text-muted-foreground">{step.description}</p>
                                </motion.div>
                            </motion.div>


                        ))}
                    </div>

                </div>

            </div>
        </section>
    )
}