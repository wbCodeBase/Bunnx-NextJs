'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image';

import Agile from "/public/iconMethodology/scrum.png";
import Waterfall from "/public/iconMethodology/waterfall-chart.png";
import Rapid from "/public/iconMethodology/rapid.png";
import DevOps from "/public/iconMethodology/devops.png";




const contentBySlug = {
    "front-end-development": {
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
    "back-end-development": {
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
}





export default function Methodology({ serviceDetailPageSlug }) {

    const content = contentBySlug[serviceDetailPageSlug] || contentBySlug["front-end-development"]; // Fallback to a default slug
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
                <p className='text-md text-gray-800'>{p}</p>
               
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