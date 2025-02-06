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
    "custom application development company": "custom-software-development-services",
    "white-label software development services": "it-outsourcing",
    "Front-End Development companies": "front-end-development-services",
    "Front-End Development company": "front-end-development-services",
    "back-end development agency": "back-end-development-services",
    "software development services": "best-software-development-company-in-india",
    "custom software consulting services": "software-development-consultants",
    "IT consulting services India": "it-consulting-services",
    "CRM software developers company": "crm-software-development-services",
};


const faqData = {
    "it-outsourcing": [

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
            "question": "What software technologies does Bunnx use for development?",
            "answer": {
                "type": "text",
                "content": "We use a wide range of advanced software tools and technologies. And it depends on the type of software you are looking for."
            }
        },
        {
            "id": "default-2",
            "question": "What’s your pricing model?",
            "answer": {
                "type": "text",
                "content": "We have an affordable pricing model for the projects we take on. Our estimates will go well with your budget and provide you with a great value."
            }
        },
        {
            "id": "default-3",
            "question": "Do you provide end-to-end software delivery?",
            "answer": {
                "type": "text",
                "content": "Absolutely! From design and development to implementation, integration, setup, and post-deployment support – we handle it all. Our team builds only industry standard projects. With our software development services, we save your time and resources."
            }
        },
        {
            "id": "default-4",
            "question": "Will you match my timeline?",
            "answer": {
                "type": "text",
                "content": "Yes, we will! After discussing what your requirements are, we create a plan and agree on a timeline together. We always commit to delivering projects on time with minimal hurdles."
            }
        },
        {
            "id": "default-5",
            "question": "Do you provide quality software delivery?",
            "answer": {
                "type": "text",
                "content": "Quality is our top priority and we’re known for it. At every stage of development, we integrate thorough testing to catch and fix issues early. When you work with us, you can trust that quality will never be a concern."
            }
        },
        {
            "id": "default-6",
            "question": "Do you offer after-sales software development services?",
            "answer": {
                "type": "text",
                "content": "Yes, we provide support even after your project is delivered. We’re here to help with everything including updates, maintenance, or guidance."
            }
        }
    ],

    "crm-software-development-services": [
        {
            "id": "crm-1",
            "question": "How do you make my CRM systems genuine and authentic?",
            "answer": {
                "type": "text",
                "content": "We are using modular designs, cloud-native platforms like Docker and Kubernetes. These methods will help your company handle traffic of your visitors, transactions, and data without issues."
            }
        },
        {
            "id": "crm-2",
            "question": "Do you have post-launch support for my CRM systems?",
            "answer": {
                "type": "text",
                "content": "Yes, we provide full post-launch support for your CRM system. This makes us fix any issues, update the software you currently have, and add new features to keep it up to date."
            }
        },
        {
            "id": "crm-3",
            "question": "What is your approach to managing CRM development projects?",
            "answer": {
                "type": "text",
                "content": "We manage CRM development projects by following an iterative approach. With tools like Jira and Trello, we keep clients updated on progress and deliver updates in stages. It allows a big room for feedback throughout the process."
            }
        },
        {
            "id": "crm-4",
            "question": "How do you handle security in CRM systems?",
            "answer": {
                "type": "text",
                "content": "We have tools such as OAuth and JWT for authentication of systems, use SSL/TLS encryption for data in transit, and perform regular security audits to safeguard your CRM and customer information from threats."
            }
        },
        {
            "id": "crm-5",
            "question": "What technologies are you using for CRM software development?",
            "answer": {
                "type": "text",
                "content": "Our CRM software developers company have been using back-end technologies like Python, Java, Node.js, and PHP to make your CRM systems. For data storage and management, we have been relying on databases such as MySQL, PostgreSQL, and MongoDB."
            }
        },
        {
            "id": "crm-6",
            "question": "Why should we choose your CRM development services?",
            "answer": {
                "type": "text",
                "content": "Choosing us means working with a team that understands your business and creates CRM systems. We use proven technologies and techniques to build CRM systems and for long-term support."
            }
        }
    ],

    "custom-software-development-services": [
        {
            "id": "csd-1",
            "question": "What tech stack do you use for custom software development?",
            "answer": {
                "type": "text",
                "content": "Our custom application development company uses React, Angular, and Vue.js for the front end. On the back end, the experts at Bunnx stick to Node.js and Python for building mobile apps. And when it comes to the cloud, we have extreme trust in AWS, Azure, and Google Cloud."
            }
        },
        {
            "id": "csd-2",
            "question": "Can you integrate third-party services with my custom software?",
            "answer": {
                "type": "text",
                "content": "At Bunnx, we sync with CRM systems or add analytics platforms. Our team has also got the API expertise to integrate third-party services with your custom software."
            }
        },
        {
            "id": "csd-3",
            "question": "Do you have a support team after launching our custom software?",
            "answer": {
                "type": "text",
                "content": "Of course! Launch day isn’t the finish line—it’s just the start. We do lower the bugs, tweak features, and roll out updates."
            }
        },
        {
            "id": "csd-4",
            "question": "How will you manage my project?",
            "answer": {
                "type": "text",
                "content": "We keep things transparent and organized. Using tools such as Jira, our experts break your project into bite-sized phases. This way, you can share feedback at every step. It will make us stay laser-focused on what matters to your project."
            }
        },
        {
            "id": "csd-5",
            "question": "Do you create mobile apps using Flutter?",
            "answer": {
                "type": "text",
                "content": "Yes, we do! If it’s iOS or Android, Flutter and React Native are our go-to tools for creating apps. Which one we use depends on your app—whether you’re going for a UI, fast performance, or both."
            }
        },
        {
            "id": "csd-6",
            "question": "How do you get safe custom software?",
            "answer": {
                "type": "text",
                "content": "Security is mandated into every stage of our development process. From encrypting data with SSL/TLS protocols to implementing OAuth and JWT for authentication, our custom application development company takes no chances."
            }
        }
    ],

    "software-development-consultants": [
        {
            "id": "csd-1",
            "question": "How do you make sure about our software security?",
            "answer": {
                "type": "text",
                "content": "We take security seriously. From secure authentication methods like OAuth and JWT to SSL/TLS encryption for data, we ensure your software and data are safe. With our regular security audits, you can keep your system protected from threats."
            }
        },
        {
            "id": "csd-2",
            "question": "How do you make software consulting services reliable?",
            "answer": {
                "type": "text",
                "content": "We take a practical approach to software consulting. This is done by analyzing your business and recommendations from our team for the right technologies. Our custom software consulting services keep things simple and easy for your team to manage."
            }
        },
        {
            "id": "csd-3",
            "question": "Do you offer support after delivering the solution?",
            "answer": {
                "type": "text",
                "content": "Yes. The work at Bunnx doesn’t stop once the project is delivered. We stick around to help you fix any issues and add new features to your software. Think of it as having a trusted tech partner by your side."
            }
        },
        {
            "id": "csd-4",
            "question": "How do you manage software consultancy projects?",
            "answer": {
                "type": "text",
                "content": "We like to keep things transparent and collaborative. Using tools like Trello and Jira, we break down the work into smaller steps, so you know exactly what’s happening and when. This way, you can give feedback at every stage, ensuring we’re always moving in the right direction."
            }
        },
        {
            "id": "csd-5",
            "question": "What technologies do you rely on in your software consultancy services?",
            "answer": {
                "type": "text",
                "content": "As we work with a range of technologies, we still prefer Python, Java, Node.js, and PHP for back-end. For databases, we stick to options like MySQL, PostgreSQL, and MongoDB. And when it comes to architecture, we make sure it’s modern and scalable."
            }
        },
        {
            "id": "csd-6",
            "question": "Why should you choose us for software consultancy?",
            "answer": {
                "type": "text",
                "content": "Because we genuinely care about solving your challenges, not just delivering a product. We take the time to understand your business, suggest the right solutions, and stick with you for the long haul. It’s not just about building great software—it’s about building trust."
            }
        }
    ],

    "it-consulting-services": [
        {
            "id": "1",
            "question": "What services are included in IT consulting?",
            "answer": {
                "type": "text",
                "content": "IT consulting services India help businesses set up new systems, fix issues in the old apps, or get advice on how to use emerging tech. If you work with the latest technology, your system will remain updated and the business will grow."
            }
        },
        {
            "id": "2",
            "question": "How can an IT consulting company help my business?",
            "answer": {
                "type": "text",
                "content": "An IT consulting services India can make your team work smarter. They can maintain the security of your systems. Our agency will also analyze the current IT structure and install new systems."
            }
        },
        {
            "id": "3",
            "question": "Why should I go for a custom IT solution instead of buying something off the shelf?",
            "answer": {
                "type": "text",
                "content": "Off-the-shelf software might work for some, but custom IT solutions are built just for you. They’re designed only after looking at how your business works and whether it will be able to adopt advanced tech or not."
            }
        },
        {
            "id": "4",
            "question": "What does working with an IT consultant look like?",
            "answer": {
                "type": "text",
                "content": "Our team will reach out to you for a chat on the tech challenges you're facing. Then, together, we will figure out the best way to tackle those challenges. From there, we can set things to keep you updated every step of the way."
            }
        },
        {
            "id": "5",
            "question": "Should I invest a lot of my budget for IT consulting services?",
            "answer": {
                "type": "text",
                "content": "The cost depends on what you need and how big or small your project is. Custom-built services might require a bigger investment upfront, but they save you time and reduce the need for constant fixes. If you need just a little assistance, you'll not be required to allocate a higher budget on this."
            }
        },
        {
            "id": "6",
            "question": "Can IT consultants help with data security?",
            "answer": {
                "type": "text",
                "content": "Data security is a priority of every IT consultant at Bunnx. They protect your customer information with measures, like encryption and access control. Plus, it keeps your systems compliant with privacy laws. So, you don’t have to worry about your data being exposed."
            }
        },
        {
            "id": "7",
            "question": "How do I know when I need IT consulting?",
            "answer": {
                "type": "text",
                "content": "If you're struggling with various tech problems you can’t solve on your own, that’s when you should reach out to an IT consultant. We’re here to help you with technical and make sure everything works like it should."
            }
        }
    ],

    "mobile-app-development-services": [
        {
            "id": "1",
            "question": "What technologies will you use for mobile app development?",
            "answer": {
                "type": "text",
                "content": "We have a mix of technologies and our usage depends on what type of project you have. For apps, we work with Swift for iOS and Kotlin for Android. Also, if you need a cross-platform app, we use React Native and Flutter. This way, we can pick what works best for your mobile application development."
            }
        },
        {
            "id": "2",
            "question": "How do you keep mobile apps secure?",
            "answer": {
                "type": "text",
                "content": "We stick to the strategy of creating apps that have clean content, safe codes, encrypt sensitive data, and follow the latest industry rules. We also test and review the app so that we quickly catch and fix app issues."
            }
        },
        {
            "id": "3",
            "question": "What’s your approach to project management for mobile app development?",
            "answer": {
                "type": "text",
                "content": "When it comes to working for our clients, we work with agility. We break the project into smaller tasks, stay in regular contact with you, and make changes based on your feedback. You’ll get regular updates on what’s happening so you always know where things stand."
            }
        },
        {
            "id": "4",
            "question": "Do you provide post-launch support for mobile apps?",
            "answer": {
                "type": "text",
                "content": "Yes, we do! After your app is live, we’re still here to help. If it’s fixing bugs or handling a lot of people on the app at one time, we'll do it all. Our team always helps you become the best among competitors."
            }
        },
        {
            "id": "5",
            "question": "How do you make sure the app can grow with the business?",
            "answer": {
                "type": "text",
                "content": "We have designers that make apps with the future in mind. From writing codes that work to handling data, we do everything that will help you grow your business."
            }
        },
        {
            "id": "6",
            "question": "Why should I choose your mobile app development services?",
            "answer": {
                "type": "text",
                "content": "When you work with us, you’re not just getting a development team—you’re getting a partner for a long time. That's because we care about your app as much as you do. And that's why our team makes the whole process easy and transparent for you."
            }
        }
    ],

    "api-development-and-integration-services": [
        {
            "id": "1",
            "question": "How do you ensure the scalability of your solutions?",
            "answer": {
                "type": "text",
                "content": "Scalability is built into our development process by leveraging cloud-native technologies, microservices architecture, and containerized environments. This ensures your system can handle growing user demands, traffic spikes, and larger datasets without performance degradation."
            }
        },
        {
            "id": "2",
            "question": "What technologies do you specialize in?",
            "answer": {
                "type": "text",
                "content": "We specialize in a wide range of programming languages and frameworks, including Python, Node.js, Java, Ruby on Rails, and PHP. Our expertise extends to relational and non-relational databases, cloud platforms like AWS and Azure, and containerization tools like Docker. These tools allow us to address challenges such as real-time data processing, complex system integrations, and global deployments."
            }
        },
        {
            "id": "3",
            "question": "How do you address security concerns in API Development & Integration?",
            "answer": {
                "type": "text",
                "content": "Security is integrated at every stage of development. We implement advanced authentication protocols, data encryption techniques, and API security layers. Regular vulnerability assessments and compliance checks ensure your application meets industry standards and remains safeguarded against threats."
            }
        },
        {
            "id": "4",
            "question": "Do you provide post-launch support?",
            "answer": {
                "type": "text",
                "content": "We offer extensive post-launch support, addressing issues such as system monitoring, bug fixes, and performance tuning. Our team also provides updates and feature enhancements, ensuring your application evolves with user needs and market demands."
            }
        },
        {
            "id": "5",
            "question": "How do you tackle data management challenges?",
            "answer": {
                "type": "text",
                "content": "We handle data management by designing optimized database schemas, implementing indexing for faster queries, and employing data partitioning techniques. These practices ensure seamless data handling, even with large volumes, and maintain data integrity across systems."
            }
        },
        {
            "id": "6",
            "question": "How do you ensure timely delivery of projects?",
            "answer": {
                "type": "text",
                "content": "We achieve timely project delivery by breaking down tasks into sprints and using agile workflows. Regular updates and reviews ensure alignment with the timeline, and potential delays are addressed proactively through contingency planning."
            }
        }
    ],


    "agile-consulting-services": [
        {
            "id": "1",
            "question": "How does Agile actually work for my business?",
            "answer": {
                "type": "text",
                "content": "Agile is like a team huddle before the big game. It’s all about breaking down your big plans into small, doable steps. But we make sure there are regular check-ins and tweaks along the way so the process feels less overwhelming and more manageable."
            }
        },
        {
            "id": "2",
            "question": "What kind of businesses can benefit from Agile?",
            "answer": {
                "type": "text",
                "content": "From tech startups to retail giants, Agile can work for any team that wants to deliver projects with accuracy and within deadlines. If you are managing a product launch, a website revamp, or even day-to-day operations, Agile adds structure without the stress."
            }
        },
        {
            "id": "3",
            "question": "Will Agile assist my team?",
            "answer": {
                "type": "text",
                "content": "Agile consultants will work with your workflow and collaborate without upending everything. It’s not about forcing change but about making small adjustments so your team works smarter, not harder."
            }
        },
        {
            "id": "4",
            "question": "Do we need any special tool or software for Agile?",
            "answer": {
                "type": "text",
                "content": "Nope, you don’t need anything fancy! Tools like Trello, Asana, or even simple spreadsheets work great. Agile is more about the mindset than the tools—regular check-ins, task prioritization, and a clear plan are what really make it work."
            }
        },
        {
            "id": "5",
            "question": "Why should I choose your team for Agile consulting services?",
            "answer": {
                "type": "text",
                "content": "We’re not about forcing textbook solutions onto your business. Our team takes time to understand how you already work and show you how Agile consulting services can bring out the best in your experts. We stick with you every step of the way, guiding you through the process without any confusion."
            }
        }
    ],

    "application-development-services": [
        {
            "id": "1",
            "question": "What technologies do you use for application development?",
            "answer": {
                "type": "text",
                "content": "Our application development company uses React, Angular, and Vue.js for front-end development; Node.js, Python, and Java for back-end development for mobile apps. We also work with AWS, Azure, and Google Cloud."
            }
        },
        {
            "id": "2",
            "question": "Can you connect third-party services to the applications?",
            "answer": {
                "type": "text",
                "content": "At Bunnx, we use APIs and third-party tools like payment gateways, CRM systems, or analytics platforms. This helps us in extending the functionality of your app."
            }
        },
        {
            "id": "3",
            "question": "Do you provide support after launching application development?",
            "answer": {
                "type": "text",
                "content": "We do offer support for bug fixing and adding new features in your app."
            }
        },
        {
            "id": "4",
            "question": "How will you manage my projects?",
            "answer": {
                "type": "text",
                "content": "We follow methods and break the work into smaller phases to allow for feedback. Jira also keeps us on track and communicates with clients."
            }
        },
        {
            "id": "5",
            "question": "Do you create mobile apps on Flutter?",
            "answer": {
                "type": "text",
                "content": "We develop your apps for iOS and Android using Flutter or React Native. Whatever language we use to code your app depends on the type of application you want us to create."
            }
        },
        {
            "id": "6",
            "question": "How do we build safe applications?",
            "answer": {
                "type": "text",
                "content": "Security is built into every step of our application development process because we use encryption (e.g., SSL/TLS, OAuth and JWT). Our team also follows standards like GDPR, HIPAA, and PCI-DSS when required."
            }
        }
    ],

    "website-development-services": [
        {
            "id": "1",
            "question": "What technologies do you specialize in?",
            "answer": {
                "type": "text",
                "content": "We work with a variety of web technologies, including front-end frameworks like React and Angular, back-end frameworks such as WordPress, Laravel, and Django, as well as database and cloud platforms like AWS and Azure."
            }
        },
        {
            "id": "2",
            "question": "How do you ensure the security of our websites?",
            "answer": {
                "type": "text",
                "content": "We implement strong encryption, secure login systems, and conduct regular security checks. Our team stays updated on the latest security trends to protect your users' data."
            }
        },
        {
            "id": "3",
            "question": "What is your approach to project management?",
            "answer": {
                "type": "text",
                "content": "We use project management tools like Trello and Jira to organize tasks and track progress. Our process ensures clear communication and transparency throughout the project."
            }
        },
        {
            "id": "4",
            "question": "Do you offer post-launch support?",
            "answer": {
                "type": "text",
                "content": "Yes, we provide ongoing support, including maintenance, updates, bug fixes, and assistance with any issues after your website goes live."
            }
        },
        {
            "id": "5",
            "question": "How do you ensure the scalability of your websites?",
            "answer": {
                "type": "text",
                "content": "We design websites with modular architecture and optimized code, ensuring they can handle increasing traffic and feature expansions as your business grows."
            }
        },
        {
            "id": "6",
            "question": "How do you ensure the user-friendliness of the website or app?",
            "answer": {
                "type": "text",
                "content": "Our design team focuses on creating intuitive and visually appealing interfaces with smooth navigation, clear calls to action, and an optimal user experience."
            }
        }
    ],

};



const Faqs = ({ serviceDetailPageSlug }) => {

    const data = faqData[serviceDetailPageSlug] || faqData["best-software-development-company-in-india"];

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
                                        <p>{createLinkedContent(faq?.answer?.content, keywordToSlug, serviceDetailPageSlug)}</p>
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
