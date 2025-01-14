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
            src: 'https://www.valuecoders.com/wp-content/uploads/2024/03/wepik-export-20240321063655leo8.jpeg?height=400&width=800',
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


  const guideData = guideContent[serviceDetailPageSlug] || guideContent['front-end-development-services'];

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
                    {createLinkedContent(paragraph, keywordToSlug)}
                  </p>
                ))}

              {content.list && (
                <ul className="list-disc space-y-3 pl-6 text-gray-600">
                  {content.list.map((item, index) => (
                    <li key={index}>
                      <strong>{item.title}:</strong> {createLinkedContent(item.detail, keywordToSlug)}
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




