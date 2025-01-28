'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import guideIntroDefault from "/public/guideIntroDefault.jpeg";

import { createLinkedContent } from '#/utils/LinkBuilder';


const keywordToSlug = {
  'front end development companies': 'front-end-development-services',
  'back end development services': 'back-end-development-services',
  'backend development services': 'back-end-development-services',
  'back end development company': 'back-end-development-services',
  'software development companies in India': 'best-software-development-company-in-india',
  'custom software development company': 'custom-software-development-services',
  'IT consulting services India': 'it-consulting-services',
};

const guideContent = {
  'front-end-development-services': {
    title: "User Guide to Front End Development",
    description:
      "Explore the essentials of creating, managing, and optimizing web interfaces. It covers methodologies, benefits, best practices, and insights for selecting partners, streamlining development, and understanding the front end's crucial role in modern applications.",
    sections: [
      {
        id: '0',
        title: 'What is Software Development Service?',
        content: {
          heading: 'Introduction and Importance of Front End Development',
          image: {
            src: '/techGrpImg.jpg',
            alt: 'Software development workspace showing code on a laptop screen',
          },
          description: [
            "Front End development is critical to bridging the gap between backend logic and user interaction, translating complex functionalities into appealing interfaces. Our expertise uses modern technologies such as React.js, Angular, Vue.js, and Tailwind CSS to craft high-performance applications. By implementing robust UI frameworks, modular architectures, and scalable design systems, we build apps that align with industry standards.",
          ],
        },
      },
      {
        id: '1',
        title: 'Types Of Software Development Services',
        content: {
          heading: 'Types of Front End Development Services:',
          description: [
            "With front end development services, businesses can reduce time-to-market and achieve alignment between visual design and backend systems. Here are the main types:",
          ],
          list: [
            {
              title: 'Component Development',
              detail:
                'Building reusable UI components tailored to business needs and design systems. Includes everything from initial wireframing through development, testing, and maintenance.',
            },
            {
              title: 'Progressive Web Apps (PWA)',
              detail:
                'Development focusing on web applications that offer native-like experiences across devices, with features like offline functionality and push notifications.',
            },
            {
              title: 'Responsive Web Development',
              detail:
                'Creating fluid interfaces that adapt seamlessly across devices and screen sizes, ensuring consistent user experience.',
            },
            {
              title: 'Enterprise UI Development',
              detail:
                'Specialized in creating large-scale application interfaces that handle complex business processes, such as admin dashboards, analytics platforms, and enterprise portals.',
            },
            {
              title: 'JAMstack Development',
              detail:
                'Building performant web experiences using JavaScript, APIs, and Markup, delivered through modern CDNs without traditional server dependencies.',
            },
            {
              title: 'Interface Maintenance and Support',
              detail:
                'Ongoing updates, performance optimization, and bug fixes to ensure interfaces remain fast, accessible, and secure over time.',
            },
          ],
        },
      },

      {
        id: '2',
        title: 'Why Choose Custom Front End Development?',
        content: {
          heading: 'Why Choose Custom Front End Development?',
          description: [
            "Custom front-end development is a premier service offered by leading front end development companies because:",
          ],
          list: [
            {
              title: 'Tailored User Experience (UX)',
              detail:
                'Custom interfaces are specifically built to meet unique user needs, enhancing functionality and optimizing workflow efficiency.',
            },
            {
              title: 'Scalability',
              detail:
                'Designed with a component-based architecture that not only supports growth but is also easily extendable as your business needs evolve.',
            },
            {
              title: 'Competitive Advantage',
              detail:
                'By offering unique user interactions, custom solutions provide a distinct edge over competitors relying on standardized template solutions.',
            },
            {
              title: 'Enhanced Performance and Security',
              detail:
                'Custom front-end development adopts the latest best practices in security, safeguarding your applications against XSS and other client-side vulnerabilities to ensure superior performance.',
            },

          ],
        },
      },


      {
        id: '3',
        title: 'What are the Types of Front End Specializations?',
        content: {
          heading: 'What are the Types of Front End Specializations?',
          description: [
            "Here are key areas of front-end expertise offered in front end development services:",
          ],
          list: [
            {
              title: 'UI Development',
              detail:
                'Focuses on pixel-perfect implementation of designs using modern HTML5, CSS3, and JavaScript, ensuring accessible and beautiful interfaces.',
            },
            {
              title: 'State Management',
              detail:
                'Handles complex application state and data flow using technologies like Redux, MobX, or Zustand for predictable user experiences.',
            },
            {
              title: 'Front-end Architecture',
              detail:
                'Combines modular design patterns and performance optimization to build maintainable, scalable applications.',
            },
            {
              title: 'Cross-Platform Development',
              detail:
                'Creates consistent experiences across devices using frameworks like React Native or Flutter',
            },
            {
              title: 'Modern Web Development',
              detail:
                'Leverages cutting-edge tools like Next.js, Remix, or Astro for optimized web applications.',
            },
            {
              title: 'Desktop Web Apps',
              detail:
                'Builds desktop-class web applications using Electron or Tauri with web technologies.',
            },
          ],
        },
      },

      {
        id: '4',
        title: 'Choosing the Right Front End Partner',
        content: {
          heading: 'Choosing the Right Front End Partner',
          description: [
            "Selecting the right front end development company is crucial. Consider:",
          ],
          list: [
            {
              title: 'Technical Stack',
              detail:
                'Verify expertise in modern front end frameworks and tools.',
            },
            {
              title: 'Component Library',
              detail:
                'Review their reusable component systems and design implementations.',
            },
            {
              title: 'Communication',
              detail:
                ' Assess their ability to collaborate with designers and backend teams.',
            },
            {
              title: 'Development Process',
              detail:
                'Ensure their workflow aligns with your continuous deployment needs.',
            },
            {
              title: 'Performance Focus',
              detail:
                'Evaluate their approach to web vitals and optimization.',
            },
          ],
        },
      },


    ],
  },
  "crm-software-development-services": {
    "title": "User Guide to CRM Software Development",
    "description": "This guide is meant to help you understand CRM systems and how they can support business growth. We’ll cover key features, benefits, and ways on how we use CRM technologies for your business. If you’re just starting with CRM or improving your current system, this guide will help you organize customer management and use CRM.",
    "sections": [
      {
        "id": "0",
        "title": "What is CRM Software Development?",
        "content": {
          "heading": "Introduction and Importance of Back End Development",
          "description": [
            "Developers use platforms for CRM like Salesforce, Microsoft Dynamics, or custom-built services to make day-to-day operations more simple. CRM software is central to modern business, organizing customer data, tracking sales, and improving customer relationships. CRM systems include tools like lead tracking, contact management, and service integration."
          ],
          image: {
            src: guideIntroDefault,
            alt: 'Software development workspace showing code on a laptop screen',
          },
        }
      },
      {
        "id": "1",
        "title": "Types of CRM Software Development Services",
        "content": {
          "heading": "Types of CRM Software Development Services",
          "description": [
            "A CRM software development company provides services for your business to manage customers and improve sales based on its metrics. Here are the main services offered:"
          ],
          "list": [
            {
              "title": "Custom CRM Module Development",
              "detail": "We create CRM modules for lead tracking and customer management. These modules are designed to fit your existing processes and integrate with the tools you already use and are emerging."
            },
            {
              "title": "Real-Time CRM Systems",
              "detail": "Our team organizes your customer data to make it easy to store, retrieve, and maintain."
            },
            {
              "title": "Sales Pipeline Automation",
              "detail": "At Bunnx, we have the best developers who automate leads tracking and manage customer interactions, including lead scoring, opportunity tracking, and sales forecasting."
            },
            {
              "title": "Customer Service Integration",
              "detail": "Our CRM systems include features like ticket management and service request tracking. It helps your support team provide better service across all customer touchpoints."
            },
            {
              "title": "Cloud-Based CRM Implementation",
              "detail": "We set up CRM systems on cloud platforms like AWS, Azure, and Google Cloud, making your system easy to access and expand as your business grows."
            },
            {
              "title": "Multi-Channel Customer Engagement",
              "detail": "We integrate different customer communication channels like email, social media, phone, and web into one system. So, now you can manage all interactions in one place."
            },
            {
              "title": "Data Security and Privacy",
              "detail": "Don't worry because you can trust us as we keep your customer's information safe with our team. We take steps to protect customer data through secure authentication, encryption, and compliance with privacy regulations."
            },
            {
              "title": "Integration and Automation",
              "detail": "Our professionals will make you feel more connected to your customers and less manual. We connect your CRM system with other business tools, automating data flow between sales, marketing, and customer service."
            },
            {
              "title": "Analytics and Reporting",
              "detail": "Our CRM experts create custom dashboards and reporting tools to help you track customer behavior, sales trends, and other important metrics."
            }
          ]

        }
      },
      {
        "id": "2",
        "title": "Why Choose Custom CRM Software Development?",
        "content": {
          "heading": "Why Choose Custom CRM Software Development?",
          "description": [
            "Custom CRM systems are designed for your business, unlike off-the-shelf solutions that may require you to adjust your processes. Here’s why custom CRM makes sense:"
          ],
          "list": [
            {
              "title": "Get More ROI",
              "detail": "A custom CRM is built around how you work. This will make it easier to manage customer interactions and get more sales every year."
            },
            {
              "title": "Grow with Your Business",
              "detail": "As your company expands, your custom CRM system can grow with you. If you need more features, more users, or more data capacity, the system can adjust as your needs change."
            },
            {
              "title": "You Control Security and Data",
              "detail": "With a custom system, you decide how to protect your customer data, including how to secure it, who has access, and how to stay compliant with laws."
            },
            {
              "title": "Generate Better Experiences",
              "detail": "A custom CRM has features that matter most to your business, eliminating the clutter of unnecessary tools. This not only simplifies the user interface but also reduces the learning curve for your team."
            }
          ]
        }
      },
      {
        "id": "3",
        "title": "What are the Types of CRM Specializations?",
        "content": {
          "heading": "What are the Types of CRM Specializations?",
          "description": [
            "Here are some specific areas of expertise we provide through CRM development:"
          ],
          "list": [
            {
              "title": "API Development and Integration",
              "detail": "We create and manage APIs that allow your CRM to connect with other important tools so that the systems work well together."
            },
            {
              "title": "Database Development and Management",
              "detail": "Our team organizes and optimizes both SQL and NoSQL databases to make sure your customer data is easy to manage and available when you need it."
            },
            {
              "title": "Cloud CRM Solutions and DevOps",
              "detail": "We deploy your CRM system to cloud platforms like AWS, Azure, or Google Cloud, and automate processes to update."
            },
            {
              "title": "Security and Compliance",
              "detail": "We take security measures into account and this includes encryption and authentication to protect customer data and make sure your CRM is compliant with privacy laws."
            },
            {
              "title": "Microservices Architecture",
              "detail": "We design CRM systems as smaller, independent parts that can be updated or scaled without affecting the whole system."
            },
            {
              "title": "Performance Optimization",
              "detail": "We focus on minimizing delays and improving the speed of data retrieval. It makes sure the system performs well during busy times."
            },
            {
              "title": "Server Management and Administration",
              "detail": "We manage the infrastructure required for CRM operations. It makes servers run properly and configure your systems."
            },
            {
              "title": "Data Science and Analytics",
              "detail": "We integrate data tools and analytics into CRM systems. Moreover, we are confident that our team will track customer behaviors, sales trends, and predict future actions that will make your revenue grow and increase ROI."
            }
          ]
        }
      },
      {
        "id": "4",
        "title": "Choosing the Right CRM Development Partner",
        "content": {
          "heading": "Choosing the Right CRM Development Partner",
          "description": [
            "Choosing the right CRM software development company has always been important for all types of companies. Here’s what to look for:"
          ],
          "list": [
            {
              "title": "Technical Knowledge",
              "detail": "Make sure the CRM partner has experience with the tools and technologies you need, like Node.js, Python, Java, or PHP, and that they know how to build the features you need."
            },
            {
              "title": "API Design and System Architecture",
              "detail": "They should be capable of building reliable, scalable APIs and designing systems that can handle your needs now and in the future."
            },
            {
              "title": "Development Process",
              "detail": "Check that their development process uses modern techniques like version control and automated testing to make sure the final product meets your standards."
            },
            {
              "title": "Data Management and Security",
              "detail": "They must have experience in handling sensitive customer data and be able to apply encryption, authentication, and other measures to keep that data safe."
            },
            {
              "title": "Scaling and Handling Traffic",
              "detail": "They should be skilled in scaling systems, including handling spikes in traffic and keeping your CRM fast and stable no matter how much data you’re managing."
            }
          ],

        }
      },
      {
        "id": "5",
        "title": "Strategies to Reduce Time and Cost in Back End Development",
        "content": {
          "heading": "Strategies to Reduce Time and Cost in Back End Development",
          "description": [
            "We use several strategies to make CRM development more efficient, saving you time and money:"
          ],
          "list": [
            {
              "title": "Microservices Architecture",
              "detail": "We stick to the microservices-based approach for the CRM system, where each core functionality—such as user authentication, lead management, reporting, and customer support—runs as an isolated service. Each service communicates via RESTful APIs or message brokers like Kafka or RabbitMQ."
            },
            {
              "title": "API-First Approach",
              "detail": "We start by designing strong APIs that help different parts of your CRM communicate with each other and with external tools."
            },
            {
              "title": "Serverless Computing",
              "detail": "Our company uses serverless platforms, like AWS Lambda and Google Cloud Functions, to execute CRM processes without managing physical servers."
            },
            {
              "title": "Caching",
              "detail": "The team always run behind reducing the load on databases, speed up response times, and lower operational costs. Our strategy for this is to reduce redundant database queries."
            }
          ],

        }
      }

    ]
  },
  'back-end-development-services': {
    title: "User Guide to Back End Development",
    description: "Dive into the fundamentals of developing and managing web interfaces. This guide covers key methodologies, advantages, and best practices. You'll also explore expert tips on selecting the right partners, streamlining the development process, and recognizing the role of back-end systems.",
    sections: [
      {
        id: '0',
        title: 'Introduction and Importance of Back End Development',
        content: {
          heading: 'Introduction and Importance of Back End Development',
          image: {
            src: guideIntroDefault,
            alt: 'Software development workspace showing code on a laptop screen',
          },
          description: [
            "Back-end development is the cornerstone of any robust web application, responsible for managing databases, server-side logic, and application architecture. It involves the design of APIs, handling data storage, and authentication. With technologies like Node.js, Django, and Ruby on Rails, back-end developers work to create scalable systems.",
          ],
        },
      },
      {
        id: '1',
        title: 'Types Of Back End Development Services',
        content: {
          heading: 'Types of Back End Development Services',
          description: [
            "With back end development services, businesses can reduce time-to-market and achieve alignment between visual design and backend systems. Here are the main types:",
          ],
          list: [
            {
              title: 'API Development and Integration',
              detail: 'Back-end development involves creating and integrating APIs (Application Programming Interfaces) that facilitate communication between the front-end and the server. RESTful APIs, GraphQL, and WebSocket APIs are common choices for updates between systems and applications.',
            },
            {
              title: 'Database Management and Optimization',
              detail: 'Efficient database design and management are crucial for any back-end system. This service includes selecting the right database (SQL or NoSQL), ensuring data consistency, optimizing queries for performance, and implementing data backup and recovery strategies.',
            },
            {
              title: 'Server-Side Logic and Architecture',
              detail: 'This service focuses on developing the core business logic that drives the application’s functionality. It includes designing scalable, fault-tolerant server architectures using frameworks like Node.js, Django, or Spring, ensuring that the back-end can handle complex tasks and large user loads.',
            },
            {
              title: 'Authentication and Authorization',
              detail: 'Our back end development company gives secure user authentication (verifying identities) and authorization. Technologies such as OAuth, JWT, and two-factor authentication (2FA) are used to implement secure login systems, user roles, and permissions for sensitive data.',
            },
            {
              title: 'Cloud Integration and Management',
              detail: 'Cloud services such as AWS, Google Cloud, and Azure are commonly integrated into back-end solutions for scalability and resource management. This service includes setting up cloud environments, configuring virtual servers, managing cloud databases, and leveraging services like storage, caching, and load balancing.',
            },
            {
              title: 'Microservices Architecture',
              detail: 'Microservices-based back-end development involves breaking down large applications into smaller, loosely coupled services that can be developed, deployed, and scaled independently. This approach improves scalability, fault tolerance, and maintainability by isolating different functionalities into separate services.',
            },
            {
              title: 'Performance Optimization',
              detail: 'Our back end development services focus on optimizing the performance of back-end systems through techniques such as query optimization, load balancing, caching (e.g., Redis or Memcached), and optimizing server resources. The goal is to ensure fast data retrieval, minimal latency, and efficient server-side processing.',
            },
            {
              title: 'Data Security and Compliance',
              detail: 'Ensuring the security of sensitive data is a core responsibility of back-end development. This service includes implementing encryption protocols (SSL/TLS), securing APIs, conducting vulnerability assessments, and ensuring compliance with regulations like GDPR, HIPAA, and PCI-DSS.',
            },
            {
              title: 'DevOps and Continuous Integration/Continuous Deployment (CI/CD)',
              detail: 'DevOps practices and CI/CD pipelines are integrated into back-end development to automate testing, integration, and deployment processes. This service ensures faster development cycles, improved collaboration, and quicker delivery of updates.',
            },
            {
              title: 'Real-Time Data Processing',
              detail: 'Real-time data processing services include handling real-time data streams using technologies like WebSockets or message brokers like Apache Kafka. This is essential for applications that require live updates, such as messaging platforms, stock trading apps, and IoT devices.',
            },
          ],
        },
      },
      {
        id: '2',
        title: 'Why Choose Custom Back End Development?',
        content: {
          heading: 'Why Choose Custom Back End Development?',
          description: [
            "Opting for custom back end development services means building a system that’s uniquely crafted to meet the specific needs of your business. Unlike off-the-shelf solutions, custom development offers the flexibility to create exactly what you need.",
          ],
          list: [
            {
              title: 'Made for Your Needs',
              detail: 'Custom back-end development allows you to create a system tailored to your business. It’s designed to fit your vision and goals.',
            },
            {
              title: 'Built for Growth',
              detail: 'With a custom solution, you get a system that can grow as your business does. It’s designed with scalability in mind, so as your needs change, the back end can easily be adjusted.',
            },
            {
              title: 'Stronger Security and Control',
              detail: 'When you build a custom back end, you have full control over security. You can implement measures for your data and applications.',
            },
            {
              title: 'Better Performance, Less Overhead',
              detail: 'Custom back end development services are optimized to run smoothly, leading to faster performance, fewer errors, and a better overall user experience.',
            },
          ],
        },
      },



      {
        id: '3',
        title: 'What are the Types of Back End Specializations?',
        content: {
          heading: 'What are the Types of Back End Specializations?',
          description: [
            "Here are key areas of back-end expertise offered in back end development services:",
          ],
          list: [
            {
              title: 'API Development and Integration',
              detail: 'API specialists focus on creating, managing, and integrating APIs that allow different software systems to communicate.',
            },
            {
              title: 'Database Development and Management',
              detail: 'Database specialists handle data storage, retrieval, and optimization. They design and manage SQL and NoSQL databases.',
            },
            {
              title: 'Cloud Computing and DevOps',
              detail: 'Cloud and DevOps specialists focus on managing cloud infrastructure and automating deployment processes. They work with services like AWS, Azure, or Google Cloud.',
            },
            {
              title: 'Security and Compliance',
              detail: ' Security specialists are responsible for safeguarding back-end systems against vulnerabilities and attacks. They implement encryption, secure APIs, and access control mechanisms.',
            },

            {
              title: "Performance Engineering",
              detail: "Performance engineers optimize the back-end architecture to ensure fast data processing and minimal latency. They work on load balancing, caching strategies, and server optimizations."
            },
            {
              title: "Microservices Architecture",
              detail: "Experts in microservices design and implement distributed architectures that break down large applications into smaller, independently deployable services."
            },
            {
              title: "Server Management and Administration",
              detail: "Server administrators specialize in configuring, maintaining, and managing the hardware and software of the back-end servers."
            },
            {
              title: "Data Science and Analytics",
              detail: "Back-end specialists in data science focus on collecting, storing, and analyzing large datasets. They build data pipelines, integrate machine learning models, and implement algorithms for predictive analysis."
            }


          ],
        },
      },



      {
        id: '4',
        title: 'Choosing the Right Back End Partner',
        content: {
          heading: 'Choosing the Right Back End Partner',
          description: [
            "Selecting the right back end development company is crucial. Consider:",
          ],
          list: [
            {
              "title": "Technical Stack",
              "detail": "Verify expertise in modern back-end frameworks and tools like Node.js, Python, Java, Ruby on Rails, etc."
            },
            {
              "title": "API Design & Architecture",
              "detail": "Evaluate their ability to design robust, scalable, and secure APIs. Review their experience with microservices architecture, serverless functions, and API gateways."
            },
            {
              "title": "Data Management & Security",
              "detail": "Assess our backend development services in data modeling, database administration, and data security best practices (encryption, authentication, authorization)."
            },
            {
              "title": "Development Process",
              "detail": "Ensure their workflow aligns with your agile development needs, including CI/CD pipelines, version control (Git), and testing methodologies."
            },
            {
              "title": "Scalability & Performance",
              "detail": "Evaluate their approach to optimizing for reliability. Consider their experience with load balancing, caching strategies, and monitoring tools."
            }

          ],
        },
      },


      {
        id: '5',
        title: 'Strategies to Reduce Time and Cost in Back End Development',
        content: {
          heading: 'Strategies to Reduce Time and Cost in Back End Development',
          description: [
            "Optimizing back end development processes can significantly reduce project timelines and costs while ensuring high-quality outputs. Here are key strategies:",
          ],
          list: [
            {
              "title": "Microservices Architecture",
              "detail": "Decompose complex applications into smaller, independent services. This promotes modularity, improves maintainability, and allows for independent scaling and deployment."
            },
            {
              "title": "API-First Development",
              "detail": "Prioritize the design and development of well-defined APIs. This facilitates clear communication between front-end and back-end teams, and improves testability."
            },
            {
              "title": "Serverless Computing",
              "detail": "Utilize platforms like AWS Lambda, Azure Functions, or Google Cloud Functions to execute code without managing servers."
            },
            {
              "title": "Caching Strategies",
              "detail": "Our backend development services include implementing caching mechanisms (e.g., in-memory caching, database caching) to reduce the number of database queries."
            }
          ],

        },
      },


    ],
  },
  "best-software-development-company-in-india": {
    "title": "Guide to Software Development Services",
    "description": "Explore the various aspects of software development services, their types, and why custom solutions are essential for business growth. This guide also highlights the best platforms and methodologies for software development.",
    "sections": [
      {
        "id": "0",
        "title": "What is Software Development Service?",
        "content": {
          "heading": "Introduction and Importance of Software Development",
          "description": [
            "Software development services are a set of broad activities required to design, modelling, develop and deploy software solutions. Usually these services are being provided either by some companies or teams of developers and the features can be customized for individual business needs. The intent is to provide high-value software that addresses a problem, increases productivity, or offers new business or user capabilities."
          ],
          image: {
            src: guideIntroDefault,
            alt: 'Software development workspace showing code on a laptop screen',
          },
        }
      },
      {
        "id": "1",
        "title": "Types of Software Development Services",
        "content": {
          "heading": "Types of Software Development Services",
          "description": [
            "Here are the various types of software development services offered to meet different business needs:"
          ],
          "list": [
            {
              "title": "Custom Software Development",
              "detail": "An application developed as per business needs and industry-specific requirements. Everything from initial planning and design through coding, testing, and maintenance."
            },
            {
              "title": "Mobile App Development",
              "detail": "This is a type of development which concentrates on the applications for mobile devices like Smartphones and Tablets, mostly on iOs and Android platforms."
            },
            {
              "title": "Web Development",
              "detail": "Building applications or websites that run on the web and can be accessed through a browser (front-end development & back-end development)."
            },
            {
              "title": "Enterprise software development",
              "detail": "This service is suited for creating large-scale applications that cater to business processes, such as ERP systems, CRM platforms and other enterprise solutions."
            },
            {
              "title": "Cloud Application Development",
              "detail": "It relates to the creation of cloud-native apps that can be delivered on a subscription basis over the internet without local infrastructure."
            },
            {
              "title": "Software Maintenance and Support",
              "detail": "Once deployed, there will be regular updates, bug fixes, etc. To make sure the software is functional and safe while maintaining its security over time."
            }
          ]
        }
      },
      {
        "id": "2",
        "title": "Why Should One Go for Custom Software Development?",
        "content": {
          "heading": "Why Should One Go for Custom Software Development?",
          "description": [
            "Custom software development is one of the top services offered by leading software development companies in India because:"
          ],
          "list": [
            {
              "title": "Custom Fit",
              "detail": "Custom software is built for unique business needs and enhancing workflows and operations."
            },
            {
              "title": "Scalability",
              "detail": "It is built for business growth and can be easily upgraded and modified when required."
            },
            {
              "title": "Competitive Edge",
              "detail": "Scalability benefits - Unique attributes offer an advantage over competitors using generic solutions."
            },
            {
              "title": "Efficiency",
              "detail": "By automating processes, custom software can enhance productivity and decrease errors."
            },
            {
              "title": "Pricing",
              "detail": "The first round of pricing is indeed expensive, but you won't be paying any more money just for licensing or unnecessary features later."
            },
            {
              "title": "Security",
              "detail": "Custom solutions provide better security based on industry requirements, making them less susceptible to attacks."
            }
          ]
        }
      },
      {
        "id": "3",
        "title": "What are the Types of Software Development?",
        "content": {
          "heading": "What are the Types of Software Development?",
          "description": [
            "Software development encompasses various types, including:"
          ],
          "list": [
            {
              "title": "Front-End Development",
              "detail": "Focuses on building the user interface (UI) and client-side behaviour using languages like HTML, CSS, and JavaScript, ensuring a seamless user experience."
            },
            {
              "title": "Back-End Development",
              "detail": "Involves server-side development, databases management and API integration using languages like Python, Java, php, dot net and Ruby to ensure functionality and system performance."
            },
            {
              "title": "Full-Stack Development",
              "detail": "Combines both front-end and back-end development, enabling developers to handle all aspects of a software project from UI, backend and server-side operations."
            },
            {
              "title": "Mobile Development",
              "detail": "Specializes in creating applications for mobile platforms (iOS and Android) using technologies like Swift, Kotlin, or React Native for ios and android."
            },
            {
              "title": "Web Development",
              "detail": "Focuses on building web applications that run on browsers using technologies such as JavaScript, Python, and PHP for both front-end and back-end."
            },
            {
              "title": "Desktop Development",
              "detail": "Involves creating applications that run on desktop operating systems like Windows or macOS, often using languages like dotnet or java."
            }
          ]
        }
      },
      {
        "id": "4",
        "title": "Which is the Best Platform to Develop Custom Software?",
        "content": {
          "heading": "Which is the Best Platform to Develop Custom Software?",
          "description": [
            "Choosing the right platform is crucial for smooth operation, scalability, and maintainability. Here are the main options:"
          ],
          "list": [
            {
              "title": "Web Development",
              "detail": "Building applications that run on the web using technologies such as JavaScript, Python, and PHP for both front-end and back-end development."
            },
            {
              "title": "Mobile Development",
              "detail": "Specializes in creating applications for mobile platforms (iOS and Android) using technologies like Swift, Kotlin, or React Native for ios and android."
            },
            {
              "title": "Cloud Platforms",
              "detail": "Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP) provide hosting, storage, and scalable cloud solutions."
            }
          ],
          "factors": [
            {
              "title": "Project Requirements",
              "detail": "Ensure the platform aligns with specific needs."
            },
            {
              "title": "Scalability",
              "detail": "Choose a platform capable of growing with demand."
            },
            {
              "title": "Security",
              "detail": "Prioritize platforms with robust security features."
            },
            {
              "title": "Community and Support",
              "detail": "Opt for platforms with active communities and good documentation."
            }
          ]
        }
      }

    ]
  },

  "custom-software-development-services": {
    "title": "User Guide to custom software Development",
    "description": "Learn about custom software development and it can be achieved with the right technologies and programming languages. Our custom software development services are armed with the right tools so that we can help you build something remarkable.",
    "sections": [
      {
        "id": "0",
        "title": "What is Software Development Service?",
        "content": {
          "heading": "Introduction and Importance of custom software Development",
          "description": [
            "Custom software development requires creation of both the visible, interactive parts of an application (the front end) and the behind-the-scenes systems (the back end). It could be a web app, a mobile app, or a software solution. It isn’t just about building software—it’s about solving problems and automating tasks. Custom software development is a process that covers an interface, back-end systems, and technology use. With advanced tools, programming languages, and innovative approaches, custom software solutions grow your company. It helps in operating the company and delivering experiences that your customers can never forget."
          ],
          image: {
            src: guideIntroDefault,
            alt: 'Software development workspace showing code on a laptop screen',
          },
        }
      },
      {
        "id": "1",
        "title": "Types of Custom Software Development Services",
        "content": {
          "heading": "Types of Custom Software Development Services",
          "description": [
            "The custom software development services are made to serve at the best of its abilities. Here's what it includes:"
          ],
          "list": [
            {
              "title": "Custom Software Development",
              "detail": "Solutions built from scratch to make a custom scheduling app to streamline your customer's activities. Similarly, this can be used in a number of softwares to track shipments to minimize delays and directly address operational inefficiencies. It gives control over features, architecture, and workflows."
            },
            {
              "title": "Mobile App Development",
              "detail": "From building softwares for cross-platform to native development, all of it is done using Swift, Kotlin, and Flutter. Cross-platform strategies like Flutter allow a single codebase to work on multiple platforms, reducing development time and cost. A retail business might find it cost-effective, while a gaming company may opt for the full potential of hardware capabilities."
            },
            {
              "title": "Progressive Web softwares (PWAs)",
              "detail": "Hybrid solutions that combine the best of web and mobile. For example, Pinterest switched to a PWA and saw a significant boost in engagement, including an increase in interaction and ad revenue. Offline capabilities, push notifications, and performance using tools like Service Workers and Web App Manifests are part of our services."
            },
            {
              "title": "Web Development",
              "detail": "Responsive web softwares built with React, Angular, or Vue.js for the front end and back ends powered by Django or Node.js. With API integrations, it helps in the dynamic functionality of your software."
            },
            {
              "title": "E-commerce Solutions",
              "detail": "Platforms designed for online sales, payment gateways, inventory management, and real-time tracking. These solutions provide control of high transaction volumes and user experiences."
            },
            {
              "title": "Integration Services",
              "detail": "Connecting various systems for data flow, integration of CRM with an e-commerce platform, and setting up customer data and purchase history. This creates personalized marketing and improves inventory forecasting. Integrations include third-party APIs, cloud services, and legacy systems."
            },
            {
              "title": "Maintenance and Support",
              "detail": "Get updates, debugging, and improvements in your software with custom software services available 24/7."
            }
          ]
        }
      },
      {
        "id": "2",
        "title": "Why Choose Custom Software Development?",
        "content": {
          "heading": "Why Choose Custom Software Development?",
          "description": [
            "While the initial investment may be higher, custom development will remove future costs associated with licensing or unnecessary features. This can be a smart and long-term choice. Check these solutions you should choose for custom software development:"
          ],
          "list": [
            {
              "title": "Custom Architecture",
              "detail": "Workflows for integration with your existing ecosystem, including ERP and CRM platforms."
            },
            {
              "title": "API Integration",
              "detail": "Develop communication across systems with RESTful APIs, GraphQL endpoints, or legacy SOAP services."
            },
            {
              "title": "Performance Optimization",
              "detail": "Tools like Redis and RabbitMQ for faster processing, reduced latency, and resource use."
            }
          ]
        }
      },
      {
        "id": "3",
        "title": "Specializations in Custom Software Development",
        "content": {
          "heading": "Specializations in Custom Software Development",
          "description": [
            "Specializations in Custom Software Development:"
          ],
          "list": [
            {
              "title": "Front-End Development",
              "detail": "Interact with your customers directly through codes like HTML5, CSS3, JavaScript, React, or Angular."
            },
            {
              "title": "Back-End Development",
              "detail": "Manage visuals with databases and APIs with Python, Java, PHP, Django, or Node.js."
            },
            {
              "title": "Data Security",
              "detail": "Implementing encryption, user authentication, and compliance with GDPR or HIPAA standards."
            },
            {
              "title": "Mobile Development",
              "detail": "Native and hybrid apps for iOS and Android for superior performance."
            },
            {
              "title": "Cloud Integration",
              "detail": "Access computing resources over the internet with AWS, Azure, or Google Cloud."
            },
            {
              "title": "Features",
              "detail": "Get live chats, notifications, and data analytics by WebSockets or Apache Kafka."
            },
            {
              "title": "DevOps Integration",
              "detail": "Automating test, deployment, and monitor to development cycles."
            }
          ]

        }
      },
      {
        "id": "4",
        "title": "How to Choose the Right Development Partner",
        "content": {
          "heading": "How to Choose the Right Development Partner",
          "description": [
            "Here’s what to look for when selecting a custom software development company:"
          ],
          "list": [
            {
              "title": "Technical Proficiency",
              "detail": "Get expertise in front-end frameworks (React.js, Vue.js), back-end platforms (Django, Spring Boot), and mobile technologies (Swift, Kotlin, Flutter)."
            },
            {
              "title": "Version Control Expertise",
              "detail": "A strong grasp of Git, GitHub Actions, or Bitbucket Pipelines for collaboration."
            },
            {
              "title": "Build Architectures",
              "detail": "Infrastructure building with microservices, serverless computing, and containerization platforms like Docker and Kubernetes."
            },
            {
              "title": "SDLC Implementation",
              "detail": "Experience with Agile and DevOps methodologies to reduce release cycles and ensure timely delivery."
            },
            {
              "title": "Security Practices",
              "detail": "Adherence to SSDLC principles, data encryption, and testing methodologies."
            }
          ]
        }
      },
      {
        "id": "5",
        "title": "Strategies to Save Time and Costs",
        "content": {
          "heading": "Strategies to Save Time and Costs",
          "description": [
            "Custom software doesn’t have to break the bank. Here’s how we make the process efficient:", "For instance, during a recent project for an e-commerce client, we applied these strategies to deliver a solution within tight deadlines. By breaking the platform into independent modules—like payment integration, inventory management, and user interface—different teams worked on each component simultaneously.", "Our custom software development company uses open-source libraries for the payment gateway, reducing development time by 30%. Automated testing tools like Selenium helped us identify and fix bugs quickly. Starting with an MVP allowed the client to launch the core features first, gather user feedback, and refine the platform in subsequent updates"
          ],
          "list": [
            {
              "title": "Modular Development",
              "detail": "Breaking the software into smaller, independent sections for parallel development."
            },
            {
              "title": "Use Open-Source Tools",
              "detail": "Using trusted libraries and frameworks to save time."
            },
            {
              "title": "Reusable Code",
              "detail": "Writing code that can be repurposed to reduce repetitive work."
            },
            {
              "title": "Automated Testing",
              "detail": "Deploying tools like Selenium or Jenkins to streamline updates and bug fixes."
            },
            {
              "title": "MVP Approach",
              "detail": "Launching a Minimum Viable Product (MVP) with core features to gather user feedback and iterate quickly."
            }
          ]
        }
      }

    ]
  },

  "software-development-consultants": {
    "title": "User Guide to Software Consultancy",
    "description": "This guide is designed to help you understand how working with a software consultancy can transform your business. Whether you’re new to the custom software or looking to improve your existing systems, this guide breaks down the essentials to help you make informed decisions and optimize your operations.",
    "sections": [

      {
        "id": "0",
        "title": "What is Software Development Consultancy?",
        "content": {
          "heading": "Introduction and Importance of Software Consultancy",
          "description": [
            "Our job is to help you find the right solutions, design systems that work for you. We’re here to make sure your technology supports your goals, not holds you back. You might have stuck with outdated systems, or you’re just not getting the results you need from your current tech. That’s where a custom software consulting services comes in."
          ],
          image: {
            src: guideIntroDefault,
            alt: 'Software development consultancy img on a laptop screen',
          },
        }
      },

      {
        "id": "1",
        "title": "Types of Software Consultancy Services",
        "content": {
          "heading": "Types of Software Consultancy Services",
          "description": [
            "A software consultancy has a wide range of services to help your business with everythings from software developments to system optimization. Here are some of the core services that we are currently offering:"
          ],
          "list": [
            {
              "title": "Custom Software Development",
              "detail": "With custom software, you don’t have to compromise or make do with generic solutions. We believe that your software should work for you, not the other way around."
            },
            {
              "title": "Cloud Solutions",
              "detail": "We help you move your systems to the cloud—making them accessible from anywhere, and able to grow as you do. Cloud solutions make it easier to store, access, and protect your data, while ensuring everything is backed up securely."
            },
            {
              "title": "Automation & Process Improvement",
              "detail": "We work to make your operations better, automate repetitive tasks so your team can focus on what matters. From managing inventory to tracking customer interactions, we simplify your day-to-day."
            },
            {
              "title": "Systems Integration",
              "detail": "If your current systems aren’t talking to each other, things can get messy. We integrate all the parts of your business—whether it’s customer management, sales tracking, or inventory control—into one smooth-running system that talks to itself."
            },
            {
              "title": "Data & Analytics",
              "detail": "Making sense of all your data can feel like trying to read a map without directions. Our team has a firm belief on this and hence they turn data into insights. We help you track performance through this for better understanding of latest trends."
            },
            {
              "title": "Support & Maintenance",
              "detail": "Technology doesn’t stop evolving, and neither should your systems. But our job isn’t over after we deliver your solution. Hence, we provide continuous updates for your software so that it keeps running without any lags."
            }
          ]
        }
      },

      {
        "id": "2",
        "title": "Why Choose Software Consultancy?",
        "content": {
          "heading": "Why Choose Software Consultancy?",
          "description": [
            "Working with a software consultancy means getting more than just a tech solution. It’s about building a partnership with experts who understand your challenges and work alongside you to solve them. Here’s why a consultancy might be the right choice:"
          ],
          "list": [
            {
              "title": "Get a Fresh Perspective",
              "detail": "We offer insights that your team might not have considered. It's the best way for your experts to work with the tools you already have or to create something entirely new. Sometimes, it helps to step back and see things from a different angle."
            },
            {
              "title": "Faster, Smarter Decisions",
              "detail": "With expert advice at your fingertips, you can make decisions faster. Instead of getting bogged down with tech issues, you get to focus on growing your business."
            },
            {
              "title": "Solutions for Real Impact",
              "detail": "We don’t believe in one-size-fits-all. Every solution we create is made with your needs in mind. So, you will get the most out of your custom software consulting services and technology investments."
            },
            {
              "title": "Hands-On Expertise",
              "detail": "You'll get access to a team of professionals with years of experience in solving problems. If you want to build new systems or troubleshoot existing ones, we bring the know-how to deliver results."
            }
          ]
        }
      },


      {
        "id": "3",
        "title": "What are the Types of Software Consultancy Specializations?",
        "content": {
          "heading": "What are the Types of Software Consultancy Specializations?",
          "description": [
            "Here’s where we really shine. Our team handles a lot of technical areas and help you make the most of your technology:"
          ],
          "list": [
            {
              "title": "API Development and Integration",
              "detail": "We manage APIs that let your systems talk to each other—whether it's connecting to a third-party service or linking up your internal tools."
            },
            {
              "title": "Database Optimization",
              "detail": "We help you organize and optimize your databases, ensuring your data is easy to access, secure, and well-maintained."
            },
            {
              "title": "Cloud Deployment and Support",
              "detail": "We deploy your systems to the cloud, ensuring they’re efficient and ready for growth. Our team handles the heavy lifting so you don’t have to."
            },
            {
              "title": "Security & Compliance",
              "detail": "When it comes to your business data, security isn’t optional. We work to ensure your systems are secure, protected from breaches, and in compliance with the latest privacy regulations."
            },
            {
              "title": "Performance Tuning",
              "detail": "We focus on improving your systems’ speed and responsiveness. From reducing lag to improving load times, we make sure your systems run at their best."
            },
            {
              "title": "DevOps Support",
              "detail": "Our team helps optimize development and operational processes, making sure that your software is constantly improving without slowing things down."
            }
          ]

        }
      },


      {
        "id": "4",
        "title": "Choosing the Right Software Consultancy Partner",
        "content": {
          "heading": "Choosing the Right Software Consultancy Partner",
          "description": [
            "The right software consultancy isn’t just about having the technical skills; it’s about having the right mindset and approach. Here’s how you can find the perfect partner for your business:"
          ],
          "list": [
            {
              "title": "Clear Communication",
              "detail": "You’ll want a team that can explain complex problems in simple terms. A good consultancy will keep you in the loop every step of the way, ensuring you understand what’s going on."
            },
            {
              "title": "Real-World Experience",
              "detail": "Look for a team with a proven track record of solving problems similar to yours. If you need help building something from scratch or fixing an existing system, the right experience makes all the difference."
            },
            {
              "title": "Approach",
              "detail": "While technology is important, it’s equally important to approach problems with creativity. A good consultancy will think outside the box to find solutions that work best for you."
            },
            {
              "title": "Support",
              "detail": "Technology isn’t static, and neither are your needs. Make sure you choose a partner who provides continuous support, from troubleshooting issues to offering advice on future upgrades."
            }
          ]
        }
      },



      {
        "id": "5",
        "title": "Strategies to Reduce Time and Cost in Software Consultancy",
        "content": {
          "heading": "Strategies to Reduce Time and Cost in Software Consultancy",
          "description": [
            "Developing custom software doesn’t have to be expensive or take forever. Here are a few strategies that help us save you time and money while still delivering top-notch solutions:"
          ],
          "list": [
            {
              "title": "Lean Methodology",
              "detail": "We deliver only the features you truly need and use, avoid unnecessary complexity and reduce development time."
            },
            {
              "title": "Modular Development",
              "detail": "Our team makes software in smaller, independent modules that can be developed, tested, and updated separately. This approach reduces development time and makes updates quicker."
            },
            {
              "title": "Cloud & Serverless Computing",
              "detail": "We eliminate the need for hardware setup and reduce operational costs with the use of cloud platforms and serverless computing."
            },
            {
              "title": "Automation",
              "detail": "The team at Bunnx automates routine tasks and processes. We also free up time for more strategic work and reduce manual errors."
            },
            {
              "title": "Prototyping and Feedback",
              "detail": "This will make the end product while reducing the risk of costly mistakes. Before diving deep into full-scale development, our team builds prototypes and gathers feedback."
            }
          ]
        }
      }

    ]
  },


  "it-consulting-services": {
    "title": "User Guide to IT consulting",
    "description": "In this guide, we’ll walk you through what IT consulting is all about and how it can support your business. For businesses looking to boost their current systems or starting fresh, we’ve got you covered. We’ll talk about how IT solutions can help streamline your processes, support your growth, and make your operations smoother.",
    "sections": [

      {
        "id": "0",
        "title": "What is IT Consulting Services?",
        "content": {
          "heading": "Introduction and Importance of IT consulting Services",
          "description": [
            "At the heart of any modern business is technology, and making sure it works well is what IT consulting is all about. Whether it’s fine-tuning your existing systems or building new ones, we help businesses get the most out of their tech. A lot of the time, IT consultants come in to help with the behind-the-scenes work, like ensuring smooth data flow, improving your team’s efficiency, or solving specific tech challenges."
          ],
          image: {
            src: guideIntroDefault,
            alt: 'Software development consultancy img on a laptop screen',
          },
        }
      },

      {
        "id": "1",
        "title": "Types of IT Consulting Services",
        "content": {
          "heading": "Types of IT Consulting Services",
          "description": [
            "An IT consulting services India steps in to improve the way businesses use their technology. Here’s a look at the main services we provide:"
          ],
          "list": [
            {
              "title": "Custom Software Solutions",
              "detail": "If you have specific needs that off-the-shelf tools just can’t meet, we create custom software solutions tailored for your business. Whether it's a special customer management tool or an internal process system, we build it from the ground up to fit perfectly into your operations."
            },
            {
              "title": "Cloud Solutions and Support",
              "detail": "We help you move to the cloud and take advantage of platforms like AWS, Google Cloud, and Azure. This makes only authenticated access to your software and scales things up or down as needed. So, you'll not need maintenance of physical servers."
            },
            {
              "title": "Tech Support and Troubleshooting",
              "detail": "Problems happen—whether it’s a glitch, bug, or something not working as it should. We’re here to help with ongoing support, diagnosing and fixing issues quickly so you can stay focused on your business goals."
            },
            {
              "title": "Data Management and Analysis",
              "detail": "We take your data seriously. With our expertise, we help organize and optimize how your business collects, stores, and accesses data. We make sure you can pull the insights you need to make informed decisions and drive your business forward."
            },
            {
              "title": "System Integration",
              "detail": "Having different systems that don’t talk to each other can create a lot of headaches. We help businesses connect their various software tools so they work together seamlessly. This improves productivity, reduces errors, and keeps your operations running smoothly."
            },
            {
              "title": "Cybersecurity and Privacy",
              "detail": "In today’s world, protecting your data and your customers’ information is more important than ever. We work with you to set up strong security measures, protecting against cyber threats and making sure you comply with privacy laws."
            }
          ]
        }
      },
      {
        "id": "2",
        "title": "Why Choose Custom IT Consulting?",
        "content": {
          "heading": "Why Choose Custom IT Consulting?",
          "description": [
            "When you choose IT consulting services India, you get something that’s made just for your business. Unlike off-the-shelf products that require you to change how you work, custom systems are designed around your needs. Here’s why it’s worth considering:"
          ],
          "list": [
            {
              "title": "It’s Built for You",
              "detail": "A custom solution fits perfectly into your workflow, making things more efficient and easier to use."
            },
            {
              "title": "Room to Grow",
              "detail": "As your business grows, your custom system can grow with you. Need more features or storage? We can add them without a major overhaul."
            },
            {
              "title": "Better Security",
              "detail": "You have full control over your data and how it’s protected, so you can make sure it’s safe."
            },
            {
              "title": "Cost-Effective in the Long Run",
              "detail": "While the initial investment might be higher, you won’t be paying for licenses or unnecessary features, which makes it more affordable over time."
            }
          ]
        }
      },
      {
        "id": "3",
        "title": "What Are the Types of IT Consulting Specializations?",
        "content": {
          "heading": "What Are the Types of IT Consulting Specializations?",
          "description": [
            "We have a team that handles a wide range of IT consulting services India to meet your needs:"
          ],
          "list": [
            {
              "title": "API Development and Integration",
              "detail": "We make sure your systems communicate with each other seamlessly, using APIs to link everything together smoothly."
            },
            {
              "title": "Cloud Solutions",
              "detail": "Whether you’re just starting with the cloud or need to expand, we’ll help you get the most out of your cloud platforms."
            },
            {
              "title": "Data Security",
              "detail": "From encryption to authentication, we help you protect your data from potential breaches and make sure your business stays secure."
            },
            {
              "title": "Performance Optimization",
              "detail": "We focus on making your systems run fast, so you won’t experience slowdowns when you need to access data quickly."
            },
            {
              "title": "Database Management",
              "detail": "We help you store and manage your data, whether it’s through SQL or NoSQL databases, ensuring you can find what you need without a hitch."
            }
          ]
        }
      },
      {
        "id": "4",
        "title": "Choosing the Right IT Consulting Partner",
        "content": {
          "heading": "Choosing the Right IT Consulting Partner",
          "description": [
            "When choosing an IT consulting services India, here’s what we recommend looking for:"
          ],
          "list": [
            {
              "title": "Experience with Your Tech",
              "detail": "Make sure your IT consultant knows the tools and systems you use or want to use. Whether it’s Python, Node.js, or a specific CRM system, they should have expertise in those areas."
            },
            {
              "title": "A Smooth Process",
              "detail": "The right consultant will have a clear, efficient process for developing and deploying systems, so you won’t have to worry about delays or confusion."
            },
            {
              "title": "Security and Data Management",
              "detail": "You need a consultant who understands the importance of securing data and putting systems in place to protect your business."
            },
            {
              "title": "Adaptability",
              "detail": "Your business will evolve, and so should your IT systems. So, look for a partner who can adapt and grow with you."
            }
          ]
        }
      },
      {
        "id": "5",
        "title": "Strategies to Reduce Time and Cost in IT Consulting",
        "content": {
          "heading": "Strategies to Reduce Time and Cost in IT Consulting",
          "description": [
            "We understand that businesses want to save both time and money. That’s why we use strategies like:"
          ],
          "list": [
            {
              "title": "Modular Development",
              "detail": "By breaking projects into smaller parts, we can get things done faster and more efficiently, without starting over every time something changes."
            },
            {
              "title": "Cloud-Based Solutions",
              "detail": "Moving to the cloud can reduce the need for costly hardware and maintenance, while giving you access to the tools you need without the upfront costs."
            },
            {
              "title": "Automated Processes",
              "detail": "We automate as much as we can to speed up operations and reduce the need for manual work, so you can focus on what matters."
            }
          ]
        }
      }

    ]
  },


};



export default function GuideTopics({ serviceDetailPageSlug }) {
  const [activeSection, setActiveSection] = useState('introduction');
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50px 0px -50% 0px',
      }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const guideData = guideContent[serviceDetailPageSlug] || guideContent['best-software-development-company-in-india'];

  if (!guideData) {
    return <p>Hiring models content not found for the provided slug.</p>;
  }


  return (
    <section className="container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 sm:py-10 py-5">
      <h2 className="font-semibold text-orange-500 text-lg">Our Guide</h2>
      <h4 className="font-semibold text-3xl my-2">{guideData.title}</h4>
      <p className="text-md text-gray-800">{guideData.description}</p>

      <div className="flex min-h-screen gap-8 sm:p-6 p-2 mt-4">
        {/* Navigation */}
        <nav className="sm:block hidden sticky top-20 h-fit w-80 shrink-0">
          <h2 className="mb-4 text-xl text-gray-600 font-normal">GUIDE TOPICS</h2>
          <div className="space-y-2">
            {guideData.sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`block w-full rounded-lg p-3 text-left text-sm transition-colors ${activeSection === section.id
                  ? 'bg-amber-50 font-medium text-amber-900'
                  : 'hover:bg-gray-100 font-normal text-gray-600'
                  }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-3xl mx-auto">
          {guideData.sections.map(({ id, content }) => (
            <section id={id} key={id} className="mb-12">
              <h1 className="mb-6 text-xl font-semibold text-gray-800">
                {content.heading}
              </h1>
              {content.image && (
                <Image
                  src={content.image.src}
                  alt={content.image.alt}
                  width={800}
                  height={400}
                  className="mb-6 rounded-lg"
                />
              )}
              {content.description &&
                content.description.map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-600">
                    {createLinkedContent(paragraph, keywordToSlug, serviceDetailPageSlug)}
                  </p>
                ))}

              {content.list && (
                <ul className="list-disc space-y-3 pl-6 text-gray-600">
                  {content.list.map((item, index) => (
                    <li key={index}>
                      <strong>{item.title}:</strong> {createLinkedContent(item.detail, keywordToSlug, serviceDetailPageSlug)}
                    </li>
                  ))}
                </ul>
              )}


              {content.factors && (
                <>
                  <div className='my-4 text-gray-600'> <strong> Factors </strong></div>
                  <ul className="list-disc space-y-3 pl-6 text-gray-600">
                    {content.factors.map((item, index) => (
                      <li key={index}>
                        <strong>{item.title}:</strong> {item.detail}
                      </li>
                    ))}
                  </ul>
                </>
              )}



            </section>
          ))}
        </main>
      </div>
    </section>
  );
}




