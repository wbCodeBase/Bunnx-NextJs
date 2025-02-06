'use client'

import { useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { createLinkedContent } from '#/utils/LinkBuilder';

import "./service.css";

const keywordToSlug = {
    'front end development company in India': 'front-end-development-services',
    'software development company in India': 'best-software-development-company-in-india',
    'custom software development company': 'custom-software-development-services',
    'CRM software solutions': 'crm-software-development-services',
    'CRM software development company': 'crm-software-development-services',
    'CRM software solution': 'crm-software-development-services',
    'mobile app development company': 'mobile-app-development-services',
    'API Development & Integration Services': 'api-development-and-integration-services',
};


const contentBySlug = {
    "back-end-development-services": {
        h2: "Our Process",
        h4: "Our Process for Back End Development",
        p: "Our back-end development process is not too complex and begins with an analysis of your system requirements. Based on this, we provide you with your server architectures and execute RESTful or GraphQL APIs. Our company also makes database structures using relational or NoSQL technologies. We even use advanced caching strategies, CI/CD pipelines, and QA testing.",
        processSections: [
            {
                id: 1,
                title: "Engineering & System Analysis",
                description: "We start our process by knowing how your business works and identifying how your customer's will connect with your system. This forms the basis of building a solution for your backend.",
                activities: [
                    "Breaking down your business processes",
                    "Mapping out how your data flows",
                    "Writing clear instructions for APIs",
                    "Choosing the right tools and tech"
                ],
                deliverables: [
                    "A document outlining the system features",
                    "A diagram showing how the system will be structured",
                    "A list of tools and platforms to be used"
                ]
            },
            {
                id: 2,
                title: "Architecture & Development Plan",
                description: "Our back end development company designs a scalable, modular back-end architecture for a better data flow, security, and performance. The development strategy is outlined for agile execution.",
                activities: [
                    "Microservices or Monolithic Structures",
                    "Database Schema Design",
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
    "front-end-development-services": {
        h2: "Our Process",
        h4: "Our Process for Frontend Development",
        p: "As an experienced front end development company in India, we create visually appealing and dynamic user interfaces. To boost your digital presence, we combine innovative layouts with modern technologies and interactive features that help your website stand out. We follow a series of well-planned and strategic steps to craft the website that counts.",
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

    "best-software-development-company-in-india": {
        h2: "Our Process",
        h4: "Our Process for Software Development",
        p: "As a leading software development company in India, we deliver solutions that are visually striking and technically advanced. Our services combine innovative design with advance development techniques to empower your brand.",
        processSections: [
            {
                id: 1,
                title: "Gathering Your Requirements",
                description: "We begin by thoroughly understanding your vision, diving into your business objectives, market trends, and target audience to create a customized strategy designed for success.",
                "activities": [
                    "Client Need Analysis",
                    "Gathering all basic information",
                    "Marketing and competition research",
                    "Tech Stack Assessment"
                ],
                "deliverables": [
                    "Requirement Gathering Report",
                    "Competition Analysis Report",
                    "Tech Stack Report"
                ]
            },
            {
                id: 2,
                title: "Service Agreement",
                description: "We create a strong base of trust and collaboration by agreeing on the project scope, methodologies, and deliverables, ensuring a transparent and productive partnership.",
                "activities": [
                    "Scope definition and agreement",
                    "Setting up communication channels",
                    "Resource and timelines planning"
                ],
                "deliverables": [
                    "Project Scope Document",
                    "Communication Plan",
                    "Detailed Project Schedule"
                ]
            },
            {
                id: 3,
                title: "Design & Development",
                description: "Our team works closely together to develop highly responsive and user-friendly softwares. We ensure that our solutions align with your vision and meet all necessary requirements.",
                "activities": [
                    "UX/UI design and prototyping",
                    "Frontend and backend development",
                    "API Development and Integration"
                ],
                "deliverables": [
                    "Design Wireframes and Prototype",
                    "Web Application up and running",
                    "Integrated System Interfaces"
                ]
            },
            {
                id: 4,
                title: "Testing & Quality Assurance",
                description: "Ensuring top performance and security, our thorough testing protocols make sure your web app is reliable, secure, and prepared to handle user demands.",
                "activities": [
                    "Integration & Functional Testing",
                    "Security and load testing",
                    "Test Automation"
                ],
                "deliverables": [
                    "Test Execution Report",
                    "Security and Performance Reports",
                    "Optimized, Bug-Free Code"
                ]
            },
            {
                "id": 5,
                "title": "Delivery & Support",
                "description": "Rolling out your software with assurance and ongoing support. We guarantee a seamless launch and offer continuous maintenance to keep your application current and effective.",
                "activities": [
                    "Deployment to production servers",
                    "User training and documentation",
                    "Ongoing maintenance and updates"
                ],
                "deliverables": [
                    "Deployed Web Application",
                    "Training Materials and Guides",
                    "Regular Update and Support Logs"
                ]
            }

        ]
    },

    "crm-software-development-services": {
        h2: "Our Process",
        h4: "Our Process for CRM Software Development",
        p: "Our CRM development process begins by understanding how your business operations take place and about your customer management. Hence, we develop CRM software solutions that help in customer data management and integrate with your existing tools. We also implement proven development methods and quality testing.",
        processSections: [
            {
                id: 1,
                title: "Analysis of Your System",
                description: "At Bunnx, we analyze your customer relationship. The team also manages the analysed data to create a CRM system that works best for your business.",
                "activities": [
                    "Sales process analysis",
                    "Planning of your business data",
                    "Mapping customer journey",
                    "Platform compatibility assessment"
                ],
                "deliverables": [
                    "Technology implementation plan",
                    "Detailed CRM requirement document",
                    "System flow diagrams"
                ]
            },
            {
                id: 2,
                title: "Design & Development Strategy",
                description: "Our CRM software development company not only creates a structured CRM architecture but also checks your user access levels, data organization, and automation in various operations. We even plan development phases to get to the final execution of our plan.",
                "activities": [
                    "Making user role hierarchies",
                    "Workflow automation planning",
                    "Sprint and timeline organization",
                    "Customer data schema design"
                ],
                "deliverables": [
                    "CRM System architecture",
                    "Development schedule",
                    "Feature documentation"
                ]
            },
            {
                id: 3,
                title: "CRM Development & Integration",
                description: "Our team takes full responsibility for the core CRM functionalities, implements data handling, and connects with the latest business tools and services.",
                "activities": [
                    "Core CRM Module Development",
                    "User Authentication Systems",
                    "Customer Data API Creation",
                    "Business Tool Integration"
                ],
                "deliverables": [
                    "CRM System that always works",
                    "Connected APIs",
                    "Integrated Business Tools"
                ]
            },
            {
                id: 4,
                title: "Quality & Performance Testing",
                description: "Our professionals are talented enough to assure quality work. So, you can rely on us and get data accuracy through testing procedures.",
                "activities": [
                    "Feature and Integration Testing",
                    "Data Management Verification",
                    "Security Protocol Testing",
                    "Speed and Response Monitoring"
                ],
                "deliverables": [
                    "Quality Test Documentation",
                    "Verified System",
                    "Performance Reports"
                ]
            },
            {
                "id": 5,
                "title": "Ongoing Support",
                "description": "We deploy the CRM software solution and provide continuous assistance to maintain functionality of your apps or websites.",
                "activities": [
                    "Implementation of all strategies",
                    "Track your setup working",
                    "Maintaining updated versions of the system"
                ],
                "deliverables": [
                    "Live CRM system with optimized performance.",
                    "Performance dashboards and monitoring configurations.",
                    "Training materials and user guides."
                ]
            }
        ]
    },
    "custom-software-development-services": {
        h2: "Our Process",
        h4: "Our Process for Custom Software Development",
        p: "Our custom software development company follows a structured process while following this to give you a functional product. Here’s our approach:",
        processSections: [
            {
                id: 1,
                title: "Know Your Software Needs",
                description: "What problem are we solving? Who will use it? What’s your long term goal with the software? These questions drive discussions to shape a technical path forward.",
                "activities": [
                    "Host collaborative sessions.",
                    "Map out your  success metrics.",
                    "Manage document workflows.",
                    "Sketch user scenarios.",
                ],
                "deliverables": [
                    "A crystal-clear roadmap.",
                    "A deep understanding of the project scope",
                    "Defined milestones and outcomes."
                ]
            },
            {
                id: 2,
                title: "Designing With Purpose",
                description: "Good softwares is more than being helpful to your customers as they also make it enjoyable during usage. We understand this and bring a lot of ideas to life through thoughtful design.",
                "activities": [
                    "Outline app structure with wireframes.",
                    "Focus on layout in mockups.",
                    "Build prototypes for pre-launch testing.",
                    "Experience app with clickable prototypes."
                ],
                "deliverables": [
                    "A blueprint of your software.",
                    "A design that balances form.",
                    "Feedback-driven prototypes."
                ]
            },
            {
                "id": 3,
                "title": "Building and Integrating Your CRM",
                "description": "Once the design is approved, we build a CRM system that works with your existing tools and processes. Whether it’s core functionalities or third-party integrations, we make sure your system is ready for action.",
                "activities": [
                    "Implement user authentication systems for controlled access.",
                    "Develop features such as contact and lead management.",
                    "Build APIs to share data across platforms.",
                    "Integrate third-party tools like marketing or analytics software."
                ],
                "deliverables": [
                    "A fully functional software for your business.",
                    "Integrated tools that work in harmony with your workflows.",
                    "APIs built to handle your data."
                ]
            }
            ,
            {
                "id": 4,
                "title": "Testing and Refining for Perfection",
                "description": "Before any software consulting services goes live, it undergoes rigorous testing. Before launch, we make all features work as intended, security measures are in place, and every security protocol is airtight.",
                "activities": [
                    "Test each feature and tool integration for accuracy.",
                    "Verify data accuracy across the system.",
                    "Conduct security checks for sensitive information.",
                    "Monitor system speed and responsiveness."
                ],
                "deliverables": [
                    "A thoroughly tested CRM system for use.",
                    "Test reports to back every feature.",
                    "A high-performing solution you can count on."
                ]
            }
            ,
            {
                "id": 5,
                "title": "Ongoing Support and Optimization",
                "description": "A great software evolves alongside your business. We stick around to ensure your CRM remains an asset for years to come. From updates to user training, we help you make the most of your investment.",
                "activities": [
                    "Providing regular updates and enhancements.",
                    "Offering user training and support resources.",
                    "Deployment of your fully developed CRM system.",
                    "Monitoring system performance."
                ],
                "deliverables": [
                    "A live CRM system optimized for your business.",
                    "Dashboards to track performance and system health.",
                    "Training materials and resources for easy onboarding."
                ]
            }

        ]
    },

    "software-development-consultants": {
        h2: "Our Process",
        h4: "Our Process as Software Development Consultants",
        p: "Our process? To help you not just solve problems but transform how your business operates. Let’s build software that doesn’t just support your goals but drives them forward.",
        processSections: [
            {
                "id": 1,
                "title": "Analyzing Your Current System",
                "description": "We thoroughly examine your existing workflows and customer interaction processes. From evaluating sales processes to understanding how data flows through your organization, we check for inefficiencies and missed opportunities. Our team identifies inefficiencies and uncovers opportunities to optimize how your business operates.",
                "activities": [
                    "Breaking down your sales process for inefficiencies",
                    "Organize and structure your data for better usability",
                    "Map customer journey to identify critical touchpoints",
                    "Assess how well your current platforms are"
                ],
                "deliverables": [
                    "A step-by-step implementation plan for your solution",
                    "A detailed requirements document for your business",
                    "Visual system diagrams for better visualization"
                ]
            }
            ,
            {
                "id": 2,
                "title": "Designing Architecture",
                "description": "The architecture of your software should enhance your business, not complicate it. We create a robust architecture that scales with your business, improves data organization, and introduces smart automation where it matters most.",
                "activities": [
                    "Break development into manageable sprints.",
                    "Design an intuitive and efficient customer data model.",
                    "Plan automation for repetitive tasks to save time.",
                    "Define user roles and access levels."
                ],
                "deliverables": [
                    "Documentation for every planned functionality.",
                    "A CRM architecture that scales with your business.",
                    "A clear roadmap for development and execution."
                ]
            },

            {
                id: 3,
                title: "Making Codes",
                description: "Once the designs are locked, it’s time to build them. Our professionals use the programming languages. It helps us develop software that not only looks amazing but has real function.",
                "activities": [
                    "Code the front end.",
                    "Build a back end to maintain large data.",
                    "Test module to catch issues.",
                ],
                "deliverables": [
                    "A working product with core features.",
                    "Infrastructure ready to handle real-world use. ",
                    "Updates on development progress."
                ]
            },
            {
                id: 4,
                title: "Testing, Refining & Perfecting",
                description: "No software is perfect but we can achieve it. That’s why we rigorously test it—breaking it down, pushing it to its limits.",
                "activities": [
                    "Perform functional tests to make every feature work as intended.",
                    "Test performance under real-world conditions to check speed.",
                    "Refine the app based on user feedback from beta testing.",
                ],
                "deliverables": [
                    "Bug-free, production-ready software.",
                    "Performance reports and testing insights.",
                    "Final adjustments to fine-tune the experience."
                ]
            },
            {
                "id": 5,
                "title": "Launch and Beyond",
                "description": "The big moment has arrived. We don’t just hand over your software and disappear—we deploy it, monitor it, and stand by your side.",
                "activities": [
                    "Launch the software.",
                    "Check performance metrics.",
                    "Updates, upgrades, or new features."
                ],
                "deliverables": [
                    "A successful launch.",
                    "Insights into software.",
                    "Support for software future-proof."
                ]
            }
        ]
    },

    "it-consulting-services": {
        h2: "Our Process",
        h4: "Our Process for IT Consulting",
        p: "With expertly crafted IT consulting services from Bunnx, a top-tier consulting company, you can completely transform how your business operates. Here’s our strategy.",
        processSections: [
            {
                "id": 1,
                "title": "Know Your Target Set",
                "description": "We begin our process by getting insights of your workflows and customer management approach. It helps us understand the current IT system you are using for various processes and to improve connection with customers.",
                "activities": [
                    "Sales funnel in-depth analysis.",
                    "Mapping out customer journeys.",
                    "Creating data flow diagrams."
                ],
                "deliverables": [
                    "Technical documentation.",
                    "Clear document outlining for system.",
                    "Technology stack defining.",
                    "Proper implementation strategy."
                ]
            },
            {
                "id": 2,
                "title": "Building the Framework",
                "description": "We don’t just build a system; our team rather creates a well-thought-out structure that organizes your data and adds automation where it matters.",
                "activities": [
                    "Design a structured hierarchy.",
                    "Automate data schema.",
                    "Improve task automation.",
                    "Organize customer data."
                ],
                "deliverables": [
                    "Structured blueprint with data models.",
                    "Timeline for development.",
                    "Document on technical specifications."
                ]
            },
            {
                "id": 3,
                "title": "Development and Integration",
                "description": "This is where the experts of Bunnx create software that’s not difficult to use and still connects with the tools you already use.",
                "activities": [
                    "Build the software features.",
                    "Add secure login.",
                    "Create APIs for tasks.",
                    "Integrate external services."
                ],
                "deliverables": [
                    "A fully functional system.",
                    "Tools and systems sync.",
                    "Modern architecture for upgrades."
                ]
            },
            {
                "id": 4,
                "title": "Testing for Performance",
                "description": "No system goes live without passing our testing services. We check every function of your app, verify data accuracy and test how the system handles its usage.",
                "activities": [
                    "Proper case validation.",
                    "Data handling to prevent errors.",
                    "Conduct tests for encryption.",
                    "System speed and performance under load."
                ],
                "deliverables": [
                    "Reports documenting test results.",
                    "A system handling your daily operations.",
                    "Insights on performance.",
                    "Define future improvements."
                ]
            },
            {
                "id": 5,
                "title": "Deployment and Ongoing Support",
                "description": "When the software is ready, we deploy it and stay by your side to help you adapt. From updates to training, our experts make sure everything works as it should.",
                "activities": [
                    "Deploy the system on cloud.",
                    "Provide updates.",
                    "Configure dashboards.",
                    "Train your team on IT services."
                ],
                "deliverables": [
                    "Live system for your team.",
                    "Real-time tracking.",
                    "Performance dashboards.",
                    "Easy-to-follow training guides."
                ]
            }
        ]
    },

    "mobile-app-development-services": {
        h2: "Our Process",
        h4: "Our Process for Mobile App Development",
        p: "We are always providing mobile applications through a technology-driven approach. Here’s how our mobile app development company build apps to exceed expectations:",
        processSections: [
            {
                "id": 1,
                "title": "Analysis & Technical Scoping",
                "description": "Our team begins with knowing what your app requires to make a clear development roadmap.",
                "activities": [
                    "Detailed charts for navigation.",
                    "Use codes for cross-platform.",
                    "Check database schemas for sync."
                ],
                "deliverables": [
                    "System Requirement Specification (SRS).",
                    "Detailed stack documentation.",
                    "Wireframes diagrams."
                ]
            },
            {
                "id": 2,
                "title": "UI/UX Design Analysis",
                "description": "Our design team uses the following tasks to create interfaces particularly focused for your visitors.",
                "activities": [
                    "Make designs through Figma.",
                    "Go for motion studies.",
                    "Adaptive layouts for resolutions."
                ],
                "deliverables": [
                    "Get UI/UX design mockups.",
                    "Clickable prototypes with effects.",
                    "Complete design handoff package."
                ]
            },
            {
                "id": 3,
                "title": "Custom Full Stack Development",
                "description": "We use the latest technologies that will work on your app's performance, no matter how complex the features are.",
                "activities": [
                    "Make interfaces.",
                    "Develop microservices.",
                    "Use MySQL or NoSQL databases.",
                    "Execute WebSockets."
                ],
                "deliverables": [
                    "Fully functional application code",
                    "Make GraphQL APIs",
                    "Integrate backend for synchronization"
                ]
            },
            {
                "id": 4,
                "title": "Testing and Benchmarking",
                "description": "Our mobile app development company writes unit tests for key components using JUnit, XCTest, or Mocha/Chai. The teams, at Bunnx, often use end-to-end testings for payments flows. Our team also implements integration tests to validate the interaction between UI, backend services, and APIs.",
                "activities": [
                    "Test multiple device types.",
                    "Set up CI/CD pipelines.",
                    "Profile using Xcode."
                ],
                "deliverables": [
                    "Performance benchmarks",
                    "Provide debugging documentation",
                    "Get coverage reports"
                ]
            },
            {
                "id": 5,
                "title": "Final Phase and Support",
                "description": "We configure production environments with infrastructure such as AWS EC2, Kubernetes and automate deployment workflows for zero-downtime rollouts.",
                "activities": [
                    "Compliance with Google Store guidelines.",
                    "Set up tools like New Relic.",
                    "Roll out regular updates."
                ],
                "deliverables": [
                    "Deployed applications with store links",
                    "Monitor dashboards",
                    "Get release notes."
                ]
            }
        ]
    },

    "api-development-and-integration-services": {
        h2: "Our Process",
        h4: "Our Process for API Development & Integration",
        p: "Our API Development & Integration Services follow a structured, detail-oriented approach to deliver secure, scalable, and high-performing APIs. Here's how we transform your requirements into robust API solutions:",
        processSections: [
            {
                "id": 1,
                "title": "Requirement Analysis & Planning",
                "description": "We start by thoroughly analyzing your system requirements, workflows, and integration needs to design APIs that align with your business goals.",
                "activities": [
                    "Identifying Data Exchange",
                    "API Use Case Definition",
                    "Selection of API Standards",
                    "Technology and Framework Evaluation"
                ],
                "deliverables": [
                    "API Specification Document",
                    "Proposed API Diagram",
                    "Technology Stack Recommendation"
                ]
            },
            {
                "id": 2,
                "title": "Architecture & Development",
                "description": "We design a scalable API architecture with security, performance, and modularity in mind, ensuring seamless integration with your existing systems.",
                "activities": [
                    "Defining API Endpoints",
                    "Designing Secure Authentication Mechanisms",
                    "Database Schema Design",
                    "Development Roadmap with Sprints"
                ],
                "deliverables": [
                    "API Architecture Blueprint",
                    "Endpoint Documentation",
                    "Development Milestones and Sprint Plan"
                ]
            },
            {
                "id": 3,
                "title": "Development & Integration",
                "description": "Our developers build APIs with optimized server-side logic and integrate third-party services for enhanced functionality.",
                "activities": [
                    "Developing RESTful or GraphQL APIs",
                    "Implementing Authentication Mechanisms",
                    "Integrating External APIs",
                    "Optimizing API Performance with Caching"
                ],
                "deliverables": [
                    "Secure and Scalable API Codebase",
                    "Functional API Endpoints",
                    "Integrated Cloud Service"
                ]
            },
            {
                "id": 4,
                "title": "Testing & Optimization",
                "description": "We rigorously test APIs to ensure reliability, scalability, and security under real-world conditions.",
                "activities": [
                    "Unit and Integration Testing",
                    "Load and Stress Testing",
                    "Security Testing",
                    "Monitoring with APM Tools"
                ],
                "deliverables": [
                    "Comprehensive API Test Reports",
                    "Debugged API Code",
                    "Performance Certification"
                ]
            },
            {
                "id": 5,
                "title": "Deployment & Continuous Support",
                "description": "Once tested, the APIs are deployed to production, with continuous monitoring and iterative updates to ensure peak performance and reliability.",
                "activities": [
                    "Deployment to Cloud Platforms",
                    "Monitoring with ELK Stack",
                    "Patch Management",
                    "Client Training"
                ],
                "deliverables": [
                    "Fully Deployed API Solution",
                    "Real-Time Monitoring Dashboards",
                    "Maintenance Logs and Support SLA"
                ]
            }
        ]

    },


    "agile-consulting-services": {
        h2: "Our Process",
        h4: "Our Process for Agile Consulting",
        p: "Our process isn’t about just applying a set of methods—it’s about working alongside you, step by step. From getting to know your team to fine-tuning the approach, we ensure every move we make brings you closer to success.",
        "processSections": [
            {
                "id": 1,
                "title": "Finding Your Agile Sweet Spot",
                "description": "Not every Agile framework is a perfect fit for every team. We analyze your current processes and understand how your teams work to identify the best approach.",
                "activities": [
                    "Break down your processes",
                    "Identifying suitable Agile tools",
                    "Build a clear plan",
                    "Easy transition"
                ],
                "deliverables": [
                    "An Agile game plan",
                    "Insightful reports of your processes",
                    "Team alignment strategy"
                ]
            },
            {
                "id": 2,
                "title": "Designing Processes That Get Results",
                "description": "We design workflows that help your teams deliver with confidence, from automating repetitive tasks to enhancing collaboration.",
                "activities": [
                    "Workflow planning",
                    "Sprint planning",
                    "Introduce smart automation",
                    "Agile coaching for your teams"
                ],
                "deliverables": [
                    "An Agile process",
                    "Crystal-clear sprint plans",
                    "Training modules for implementation"
                ]
            },
            {
                "id": 3,
                "title": "Agile in Action",
                "description": "We put the plan into action, ensuring seamless project management, product development, and quality checks.",
                "activities": [
                    "Agile project execution",
                    "Get teams working together",
                    "Project tracking",
                    "Agile setup"
                ],
                "deliverables": [
                    "A fully functioning app",
                    "Tools for collaboration",
                    "Clear project dashboards"
                ]
            },
            {
                "id": 4,
                "title": "Keep Getting Better",
                "description": "We fine-tune your processes and adapt to new challenges, ensuring continuous improvement and growth.",
                "activities": [
                    "Keep an eye on Agile system",
                    "Provide continuous coaching",
                    "Retrospectives to find opportunities",
                    "Look for improvement areas"
                ],
                "deliverables": [
                    "Team performance insights",
                    "Actionable improvement strategies",
                    "A future-ready Agile strategy"
                ]
            },
            {
                "id": 5,
                "title": "Support You Can Count On",
                "description": "We provide ongoing support post-launch, ensuring your platform runs smoothly and continues to grow.",
                "activities": [
                    "Monitor performance post-launch",
                    "Keep everything updated",
                    "Train your team",
                    "Conducting operations"
                ],
                "deliverables": [
                    "A live platform for success",
                    "Easy-to-use dashboards",
                    "Support to grow your business"
                ]
            }
        ]

    },

    "application-development-services": {
        h2: "Our Process",
        h4: "Our Process for Application Development",
        p: "Building an application is challenging but solves complex problems for its users. We follow a structured process while following this to give you a functional product.",
        "processSections": [
            {
                "id": 1,
                "title": "Know Your Vision and Mission",
                "description": "Some of the best experts engage in in-depth discussions to understand the project before our team initiates development. We check your functional requirements and anticipated outcomes. This discovery phase is helpful in defining the technical roadmap.",
                "activities": [
                    "Conducting a gathering session.",
                    "Performing daily updates",
                    "User persona analysis.",
                    "Documenting technical specifications."
                ],
                "deliverables": [
                    "A detailed project document.",
                    "Well-defined user stories.",
                    "Measurable outcomes."
                ]
            },
            {
                "id": 2,
                "title": "Designing Your App",
                "description": "In this phase, we provide you with tangible and intuitive designs of your apps. With the use of user experience (UX) principles and user interface (UI) methodologies, we create aesthetically appealing designs that prioritize usability.",
                "activities": [
                    "Developing wireframes and high-fidelity mockups.",
                    "Using UI components",
                    "Checking color schemes and typography.",
                    "Creating interactive prototypes."
                ],
                "deliverables": [
                    "Wireframes outlining application architecture.",
                    "Clickable prototypes for iterative feedback.",
                    "Finalized UI/UX design specifications."
                ]
            },
            {
                "id": 3,
                "title": "Executing the Plan",
                "description": "With designs approved, we move towards the development phase. Our team uses modern frameworks and programming languages to make maintainable applications while adhering to industry best practices.",
                "activities": [
                    "Using interfaces and back-end logic.",
                    "Configuring databases",
                    "Integrating APIs.",
                    "Conducting unit testing."
                ],
                "deliverables": [
                    "Application with core modules.",
                    "Optimized back-end infrastructure.",
                    "Progress report & test results."
                ]
            },
            {
                "id": 4,
                "title": "Perfecting App Through Testing",
                "description": "This stage involves extensive quality assurance (QA) to understand its functionality, performance, and security. We simulate real-world scenarios to identify and resolve any issues so that it becomes deployment-ready.",
                "activities": [
                    "Conducting security testing.",
                    "Debugging application features.",
                    "Collecting feedback",
                    "Controlled testing environments."
                ],
                "deliverables": [
                    "A production-ready application.",
                    "A resolved issue log",
                    "A user feedback summary."
                ]
            },
            {
                "id": 5,
                "title": "Launching and Supporting",
                "description": "The application is deployed and made available to end-users. Post-launch, we keep it in the monitoring phase where our experts provide technical support to address any issues or implement iterative improvements.",
                "activities": [
                    "Deploying the application",
                    "Production environments or app stores.",
                    "Monitoring application metrics",
                    "Feature enhancements."
                ],
                "deliverables": [
                    "A deployed application.",
                    "Performance metrics and insights.",
                    "A roadmap for updates."
                ]
            }
        ]

    },

    "website-development-services": {
        h2: "Our Process",
        h4: "Our Process for Website Development",
        p: "We take a simple, clear approach to website development that focuses on your needs and goals. From the start, we listen to you and work together to create a plan. Each step is about building a website that fits your business and serves your users well, from design to launch.",
        "processSections": [
            {
                "id": 1,
                "title": "Discovery & Planning",
                "description": "This is where we start by understanding what you want to achieve. We talk about your business and what your website needs to do. This stage helps us get a clear picture of your goals, and we also look at your competitors.",
                "activities": [
                    "Discussing project goals",
                    "Researching competitors",
                    "Identifying what success is",
                    "Defining the website"
                ],
                "deliverables": [
                    "A clear project timeline",
                    "A well-defined set of goals",
                    "A list of functional requirements"
                ]
            },
            {
                "id": 2,
                "title": "Design & Wireframing",
                "description": "Our website development services include creating wireframes and prototypes to map out how the website will look and feel. We focus on the layout, how users will move through the site, and how to best present your content.",
                "activities": [
                    "Creating basic wireframes",
                    "Designing navigation and page layouts",
                    "Getting feedback on designs",
                    "Finalizing overall style"
                ],
                "deliverables": [
                    "A clear web page layout",
                    "Visual designs",
                    "A user-friendly interface plan"
                ]
            },
            {
                "id": 3,
                "title": "Front-End Development",
                "description": "A stunning design is just the beginning. Our front-end developers bring it to life, transforming static wireframes into an interactive, user-friendly experience. Every click, scroll, and animation is crafted to make navigation smooth and engagement natural.",
                "activities": [
                    "Writing the code",
                    "Design with animations",
                    "Runs on desktops and tablets",
                    "Connecting with back-end systems"
                ],
                "deliverables": [
                    "Visually appealing website",
                    "Design for any screen size",
                    "An interactive experience"
                ]
            },
            {
                "id": 4,
                "title": "Testing & Quality Assurance",
                "description": "Before launching, we test everything. We check that all features work as expected and function properly on different browsers and devices. If any issues come up with website development, we fix them right away to make sure everything works as it should.",
                "activities": [
                    "Testing the website",
                    "Checking interactive features",
                    "Running tests for site loads",
                    "Checking for any security risks"
                ],
                "deliverables": [
                    "A website that functions correctly",
                    "A website that loads quickly",
                    "A website that is safe to use"
                ]
            },
            {
                "id": 5,
                "title": "Continuous Support",
                "description": "We monitor it right after launch to make sure everything is working well. Once live, we’re here for any updates or changes you need, whether it’s adding new content, fixing bugs, or adding new features over time.",
                "activities": [
                    "Launching on the production server",
                    "Monitoring performance",
                    "Update your website’s content",
                    "Regular checks and backups"
                ],
                "deliverables": [
                    "A live website ready for users",
                    "Ongoing support for fixes",
                    "Continuous improvements"
                ]
            }
        ]

    },


};


export default function ProcessShowcase({ serviceDetailPageSlug }) {
    const content = contentBySlug[serviceDetailPageSlug] || contentBySlug["best-software-development-company-in-india"]; // Fallback to a default slug
    const { h2, h4, p, processSections } = content;
    const [activeSection, setActiveSection] = useState(1);

    return (
        <>
            <div className="max-w-screen-xl container mx-auto p-4 md:p-8">
                <h2 className='font-semibold text-orange-500 text-lg'>{h2}</h2>
                <h4 className='font-semibold text-3xl my-2'>{h4}</h4>
                <p className='text-md text-gray-800'>{createLinkedContent(p, keywordToSlug, serviceDetailPageSlug)}</p>



                <div className='text-white md:my-10 my-6'>
                    {/* Mobile View */}
                    <div className="lg:hidden grid grid-cols-1 relative sm:grid-cols-2 gap-4 fle items-star justify-cente lg:space-y-8">
                        {processSections.map((section) => (
                            <div key={section.id} className="space-y-4 bg-[#1a1a1a] p-6 rounded-lg">
                                <h2 className="text-2xl font-bold">{section.title}</h2>
                                <p className="text-gray-300">{createLinkedContent(section.description, keywordToSlug, serviceDetailPageSlug)}</p>
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
                                        <h3 className="text-xl font-semibold mb-2">deliverables</h3>
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
                        <div className="hidden lg:flex gap-4 h-[400px] hauto">
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
                                                    <p className="text-gray-300 textsm max-w-2xl">{createLinkedContent(section.description, keywordToSlug, serviceDetailPageSlug)}</p>

                                                    <div className="grid md:grid-cols-2 gap-5">
                                                        <div>
                                                            <h3 className="text-xl font-semibold mb-4">Task Involved</h3>
                                                            <ul className="list-disc list-inside space-y-2 textsm text-gray-300">
                                                                {section.activities.map((activity, index) => (
                                                                    <li key={index}>{activity}</li>
                                                                ))}
                                                            </ul>
                                                        </div>

                                                        <div>
                                                            <h3 className="text-xl font-semibold mb-4">deliverables</h3>
                                                            <ul className="list-disc list-inside space-y-2 textsm text-gray-300">
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








