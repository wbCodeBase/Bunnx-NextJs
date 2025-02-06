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
import Backlog from "/public/iconMethodology/backlog.png";
import RealTime from "/public/iconMethodology/realTime.png";

import { createLinkedContent } from '#/utils/LinkBuilder';

const keywordToSlug = {
    'front end development': 'front-end-development-services',
    'software development services': 'best-software-development-company-in-india',
    'custom software development company': 'custom-software-development-services',
    'best IT consulting services in India': 'it-consulting-services',
    'back end development': 'back-end-development-services',
    'API Development & Integration Services': 'api-development-and-integration-services',
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
        "steps": [
            {
                "title": "Custom API Development and Integration",
                "description": "At Bunnx, we create APIs and connect your back-end with other services. Our team is an expert in building RESTful and GraphQL APIs. This simplifies the process of integrating with third-party platforms and minimizes downtime during the process.",
                "icon": Agile
            },
            {
                "title": "Database Optimization and Management",
                "description": "At our company, we fine-tune your databases to handle data. We can work on multiple backend platforms like MySQL, PostgreSQL, or NoSQL. Not only that, our team can help you with advanced databases like MongoDB, too.",
                "icon": Waterfall
            },
            {
                "title": "Cloud Infrastructure and Deployment",
                "description": "We design systems on cloud platforms like AWS, Azure, or Google Cloud. Our team sets up cloud architectures that focus on quick uptime. We build backup systems to recover from outages.",
                "icon": Rapid
            },
            {
                "title": "Real-Time Data Processing",
                "description": "We have options for regular data updates for chat, notifications, or live data feeds. With tools like WebSockets, Kafka, and RabbitMQ, we stream high-volume data messages and provide instant updates across devices.",
                "icon": DevOps
            }
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

    "custom-software-development-services": {
        h2: "Methodology",
        h4: "Get Smarter Custom Softwares with Effective Custom Software Solutions",
        p: "Making custom software is all about solving the right problems in the smartest way. And our approach involves this as we deliver not just software, but solutions. Here's how custom software development company get it done:",
        steps: [
            {
                title: "Discovery and Strategy",
                description: "Every project starts with a question: what challenge are we solving? And hence, we’ll map out the big picture and focus on what matters most. Our team will hold detailed discussions to define your software’s purpose. We also have experts who share a shared understanding of the problem.",
                icon: FeaturesValidation
            },
            {
                title: "Sketching the Blueprint",
                description: "Before writing a single line of code, we make a solid foundation by creating a detailed plan of how your software will work and look. We will create user flow diagrams to visualize how users navigate the system.",
                icon: Agile
            },
            {
                title: "Making It Real",
                description: "This is where ideas take shape with our developers. They have been building clean and maintainable code for a long time. The experts at Bunnx code the front end for your interface and core features.",
                icon: Coding
            },
            {
                title: "Testing",
                description: "No software leaves our hands rigorous testing is done. For this, we run functional tests to verify every feature works as intended. Our plan also involves conducting performance testing, simulating real-world scenarios, creating detailed feedback reports and resolving issues.",
                icon: RealTime
            }
        ]

    },

    "software-development-consultants": {
        h2: "Methodology",
        h4: "Get Smarter Software with our Consultants",
        p: "We have IT software consulting services that allow for communication and data updates across multiple users and devices. We process streaming data and handle high-throughput messaging.",
        "steps": [
            {
                "title": "Getting to Know You",
                "description": "We start by a little chit-chat with you to understand your business and the challenges you're facing. It's an open conversation to grasp what's working, what's not, and where you want to go. This helps us figure out how we can assist you.",
                "icon": FeaturesValidation
            },
            {
                "title": "Crafting a Plan",
                "description": "We work on creating a plan that's just right for you. This involves outlining the steps we'll take together, the tools we'll use, and setting clear milestones. Think of it as drawing up a roadmap for our journey ahead.",
                "icon": Agile
            },
            {
                "title": "Recommending the Right Tools",
                "description": "With a plan in place, we suggest technologies and methods that fit your specific situation. Our goal is to find solutions that align with your business processes and help you achieve your objectives without unnecessary complexity.",
                "icon": Coding
            },
            {
                "title": "Walking You Through the Process",
                "description": "We don't just hand over a plan and leave you to it. The team will guide you through each step, working closely with your team to implement the solutions we've discussed. It's a collaborative effort to make sure everything fits into your operations.",
                "icon": RealTime
            }
        ]

    },


    "it-consulting-services": {
        h2: "Methodology",
        h4: "Get Smarter Applications with Effective IT Consulting Solutions",
        p: "Bring balance to your tech ecosystem with our experts. We have built methodologies to connect dots of your business ideas and give you the real advantage.",
        "steps": [
            {
                "title": "Back-End Systems",
                "description": "At Bunnx, the best IT consulting services in India, we create systems that keep users and devices connected. We use technologies like WebSockets for live communication, Kafka for managing high-volume data, and RabbitMQ for efficient message queuing. Our experts also make instant data synchronization across your platforms.",
                "icon": FeaturesValidation
            },
            {
                "title": "Modular System Integration",
                "description": "We build pipelines for data and system integration frameworks like Django ORM and Hibernate to simplify the management of relational data. Our expertise extends to APIs that connect your core systems with external platforms, such as ERP, analytics tools, or marketing automation software.",
                "icon": Agile
            },
            {
                "title": "Advanced Data Management Systems",
                "description": "Handling structured and unstructured data is at the core of what we do. If it’s setting up databases using PostgreSQL, MySQL or NoSQL for datasets, we design architectures that make data retrieval and management.",
                "icon": Coding
            },
            {
                "title": "Cloud-Native Solutions",
                "description": "Our team uses cloud platforms like AWS and EC2 for application deployment, S3 for storage, and RDS. For businesses requiring global reach, we also implement Azure Cosmos DB for distributed, low-latency database solutions.",
                "icon": RealTime
            },
            {
                "title": "Event-Driven Architectures",
                "description": "If you are building IT systems, you can rely on proven technologies like WebSockets for instant updates and Apache Kafka for task automation. This strategy makes sure that your systems are not just reactive but proactive.",
                "icon": Rapid
            }
        ]

    },

    "mobile-app-development-services": {
        "h2": "Methodology",
        "h4": "Get Smarter Applications with Effective Mobile App Solutions",
        "p": "Our mobile app development strategies include user-centric design with technological competence. With advanced tools and programming practices, we create mobile applications that are fast and feature-packed.",
        "steps": [
            {
                "title": "Platform-Specific Mobile Development",
                "description": "We build mobile apps natively for iOS using Swift and Objective-C, and for Android. The team also checks deep integration with platform-specific features like Siri, Face ID, Google Maps, and more.",
                "icon": FeaturesValidation
            },
            {
                "title": "API Development and Integration",
                "description": "We develop mobile-specific APIs to enhance connectivity between the app and back-end systems. At Bunnx, our developers fetch data rapidly and synchronize with third-party services. The team also provides you different payment gateways, social media platforms, and analytics tools.",
                "icon": Agile
            },
            {
                "title": "Cross-Platform App Solutions",
                "description": "Our mobile app development services involve usage of code languages like Flutter and React Native to create apps. It makes interfaces for better user experience no matter on which platform the app is being used.",
                "icon": Coding
            },
            {
                "title": "Advanced Mobile Database Management",
                "description": "The Bunnx experts have SQLite for local storage and cloud-hosted databases like Firebase Realtime Database, MongoDB Atlas, or Amazon DynamoDB. So, these solutions make high-speed query processing, offline functionality, and data syncing better.",
                "icon": RealTime
            }
        ]
    },

    "api-development-and-integration-services": {
        "h2": "Methodology",
        "h4": "Get Smarter Applications with Effective API Solutions",
        "p": "Our API Development & Integration strategies are crafted to enhance usability, scalability, and performance. By leveraging cutting-edge technology, we empower organizations to deliver digital experiences.",
        "steps": [
            {
                "title": "API Development & Integration",
                "description": "At Bunnx, we specialize in Custom API Development & Integration Services to connect your systems with third-party platforms and streamline workflows. Our team builds secure RESTful and GraphQL APIs, ensuring smooth data exchange and integration with minimal downtime.",
                "icon": FeaturesValidation
            },
            {
                "title": "Database Optimization for APIs",
                "description": "Efficient data handling is at the core of our API Development & Integration Services. We optimize and structure relational databases (MySQL, PostgreSQL) and NoSQL solutions (MongoDB, DynamoDB) to support high-speed queries, scalable storage, and seamless API interactions.",
                "icon": Agile
            },
            {
                "title": "Cloud-Native API Solutions",
                "description": "Our API Integration Services leverage cloud platforms like AWS, Azure, and Google Cloud to deploy APIs with high availability and resilience. From designing serverless architectures to implementing disaster recovery strategies, we ensure cost-effective and robust cloud-based solutions.",
                "icon": Coding
            },
            {
                "title": "Real-Time API Development & Integration",
                "description": "We build APIs that power real-time data processing and communication. Using WebSockets, Apache Kafka, and RabbitMQ, we enable live updates, high-throughput messaging, and instant notifications across devices and platforms.",
                "icon": RealTime
            }
        ]
    },


    "agile-consulting-services": {
        "h2": "Methodology",
        "h4": "Get Smarter Applications with Effective Agile Consulting Solutions",
        "p": "Whether it’s refining your current processes or introducing new frameworks, we help you unlock smoother collaboration and faster project delivery. Our Agile consulting services follow the best methodology.",
        "steps": [
            {
                "title": "Let’s make Agile your superpower",
                "description": "We’ll help you bring Agile into your workflow in a way that feels natural, not forced. Whether it’s using Scrum to organize your sprints or Kanban to streamline your tasks, we’ll create an approach that works with how your team already operates.",
                "icon": FeaturesValidation
            },
            {
                "title": "Smooth processes, happy teams",
                "description": "Tired of complex workflows? We design systems that cut out the chaos and let your team focus on what they do best. With tools like Jira and automating repetitive tasks, we make teamwork feel like actual teamwork.",
                "icon": Agile
            },
            {
                "title": "Ready for growth, step by step",
                "description": "As your projects grow, your systems need to keep up. We’ll set up Agile processes that are flexible enough to scale with you, no matter how big your plans get. With a clear roadmap and tools that work behind the scenes, you’re all set to handle anything.",
                "icon": Coding
            },
            {
                "title": "Get Above Your Competitors",
                "description": "The planning for Agile consultation doesn’t stop here. We’ll help you stay on track and clear checkpoints so your projects are completed at the earliest. You’ll have everything you need to stay one step ahead.",
                "icon": RealTime
            }
        ]
    },

    "application-development-services": {
        "h2": "Methodology",
        "h4": "Get Smarter Applications with Effective Application Solutions",
        "p": "Creating an application requires complex problem solving and impactful solutions. But we have it all. Here’s our step-by-step approach to building applications that truly work:",
        "steps": [
            {
                "title": "Discovery and Planning",
                "description": "This is where the journey begins. We work with you to know the purpose of the application, identify the challenges it will solve, and outline a clear strategy for development. We host strategy sessions and research market trends.",
                "icon": FeaturesValidation
            },
            {
                "title": "Creating Data Models",
                "description": "Before building begins, we design the application’s structure and workflow. This phase involves creating wireframes and user flow diagrams. It's a finalized blueprint for development.",
                "icon": Agile
            },
            {
                "title": "Development in Action",
                "description": "Our developers code the application, bring every feature and interaction from the blueprint into reality. For this, we write modular code for front-end and back-end. We also integrate third-party tools and APIs.",
                "icon": Coding
            },
            {
                "title": "Rigorous Testing",
                "description": "We test every component thoroughly to identify and fix any flaws. This phase focuses on the quality and readiness of your app. Hence, we focus on running functional, performance, and security tests. Our experts also collect feedback from test users.",
                "icon": RealTime
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
                <p className='text-md text-gray-800'>{createLinkedContent(p, keywordToSlug, serviceDetailPageSlug)}</p>

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

                                    <p className="text-md text-muted-foreground">{createLinkedContent(step.description, keywordToSlug, serviceDetailPageSlug)}</p>
                                </motion.div>
                            </motion.div>


                        ))}
                    </div>

                </div>

            </div>
        </section>
    )
}