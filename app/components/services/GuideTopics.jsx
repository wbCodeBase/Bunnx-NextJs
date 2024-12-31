'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';



const guideContent = {
  'front-end-development': {
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
  'back-end-development': {
    title: "User Guide to Back End Development",
    description: "Dive into the fundamentals of developing and managing web interfaces. This guide covers key methodologies, advantages, and best practices. You'll also explore expert tips on selecting the right partners, streamlining the development process, and recognizing the role of back-end systems.",
    sections: [
      {
        id: '0',
        title: 'Introduction and Importance of Back End Development',
        content: {
          heading: 'Introduction and Importance of Back End Development',
          image: {
            src: 'https://www.valuecoders.com/wp-content/uploads/2024/03/wepik-export-20240321063655leo8.jpeg?height=400&width=800',
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
  }
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



  // const guideData = {
  //   title: "User Guide to Front End Development",
  //   description:
  //     "Explore the essentials of creating, managing, and optimizing web interfaces. It covers methodologies, benefits, best practices, and insights for selecting partners, streamlining development, and understanding the front end's crucial role in modern applications.",
  //   sections: [
  //     {
  //       id: '0',
  //       title: 'What is Software Development Service?',
  //       content: {
  //         heading: 'Introduction and Importance of Front End Development',
  //         image: {
  //           src: 'https://www.valuecoders.com/wp-content/uploads/2024/03/wepik-export-20240321063655leo8.jpeg?height=400&width=800',
  //           alt: 'Software development workspace showing code on a laptop screen',
  //         },
  //         description: [
  //           "Front End development is critical to bridging the gap between backend logic and user interaction, translating complex functionalities into appealing interfaces. Our expertise uses modern technologies such as React.js, Angular, Vue.js, and Tailwind CSS to craft high-performance applications. By implementing robust UI frameworks, modular architectures, and scalable design systems, we build apps that align with industry standards.",
  //         ],
  //       },
  //     },
  //     {
  //       id: '1',
  //       title: 'Types Of Software Development Services',
  //       content: {
  //         heading: 'Types of Front End Development Services:',
  //         description: [
  //           "With front end development services, businesses can reduce time-to-market and achieve alignment between visual design and backend systems. Here are the main types:",
  //         ],
  //         list: [
  //           {
  //             title: 'Component Development',
  //             detail:
  //               'Building reusable UI components tailored to business needs and design systems. Includes everything from initial wireframing through development, testing, and maintenance.',
  //           },
  //           {
  //             title: 'Progressive Web Apps (PWA)',
  //             detail:
  //               'Development focusing on web applications that offer native-like experiences across devices, with features like offline functionality and push notifications.',
  //           },
  //           {
  //             title: 'Responsive Web Development',
  //             detail:
  //               'Creating fluid interfaces that adapt seamlessly across devices and screen sizes, ensuring consistent user experience.',
  //           },
  //           {
  //             title: 'Enterprise UI Development',
  //             detail:
  //               'Specialized in creating large-scale application interfaces that handle complex business processes, such as admin dashboards, analytics platforms, and enterprise portals.',
  //           },
  //           {
  //             title: 'JAMstack Development',
  //             detail:
  //               'Building performant web experiences using JavaScript, APIs, and Markup, delivered through modern CDNs without traditional server dependencies.',
  //           },
  //           {
  //             title: 'Interface Maintenance and Support',
  //             detail:
  //               'Ongoing updates, performance optimization, and bug fixes to ensure interfaces remain fast, accessible, and secure over time.',
  //           },
  //         ],
  //       },
  //     },

  //     {
  //       id: '2',
  //       title: 'Why Choose Custom Front End Development?',
  //       content: {
  //         heading: 'Why Choose Custom Front End Development?',
  //         description: [
  //           "Custom front-end development is a premier service offered by leading front end development companies because:",
  //         ],
  //         list: [
  //           {
  //             title: 'Tailored User Experience (UX)',
  //             detail:
  //               'Custom interfaces are specifically built to meet unique user needs, enhancing functionality and optimizing workflow efficiency.',
  //           },
  //           {
  //             title: 'Scalability',
  //             detail:
  //               'Designed with a component-based architecture that not only supports growth but is also easily extendable as your business needs evolve.',
  //           },
  //           {
  //             title: 'Competitive Advantage',
  //             detail:
  //               'By offering unique user interactions, custom solutions provide a distinct edge over competitors relying on standardized template solutions.',
  //           },
  //           {
  //             title: 'Enhanced Performance and Security',
  //             detail:
  //               'Custom front-end development adopts the latest best practices in security, safeguarding your applications against XSS and other client-side vulnerabilities to ensure superior performance.',
  //           },

  //         ],
  //       },
  //     },


  //     {
  //       id: '3',
  //       title: 'What are the Types of Front End Specializations?',
  //       content: {
  //         heading: 'What are the Types of Front End Specializations?',
  //         description: [
  //           "Here are key areas of front-end expertise offered in front end development services:",
  //         ],
  //         list: [
  //           {
  //             title: 'UI Development',
  //             detail:
  //               'Focuses on pixel-perfect implementation of designs using modern HTML5, CSS3, and JavaScript, ensuring accessible and beautiful interfaces.',
  //           },
  //           {
  //             title: 'State Management',
  //             detail:
  //               'Handles complex application state and data flow using technologies like Redux, MobX, or Zustand for predictable user experiences.',
  //           },
  //           {
  //             title: 'Front-end Architecture',
  //             detail:
  //               'Combines modular design patterns and performance optimization to build maintainable, scalable applications.',
  //           },
  //           {
  //             title: 'Cross-Platform Development',
  //             detail:
  //               'Creates consistent experiences across devices using frameworks like React Native or Flutter',
  //           },
  //           {
  //             title: 'Modern Web Development',
  //             detail:
  //               'Leverages cutting-edge tools like Next.js, Remix, or Astro for optimized web applications.',
  //           },
  //           {
  //             title: 'Desktop Web Apps',
  //             detail:
  //               'Builds desktop-class web applications using Electron or Tauri with web technologies.',
  //           },
  //         ],
  //       },
  //     },

  //     {
  //       id: '4',
  //       title: 'Choosing the Right Front End Partner',
  //       content: {
  //         heading: 'Choosing the Right Front End Partner',
  //         description: [
  //           "Selecting the right front end development company is crucial. Consider:",
  //         ],
  //         list: [
  //           {
  //             title: 'Technical Stack',
  //             detail:
  //               'Verify expertise in modern front end frameworks and tools.',
  //           },
  //           {
  //             title: 'Component Library',
  //             detail:
  //               'Review their reusable component systems and design implementations.',
  //           },
  //           {
  //             title: 'Communication',
  //             detail:
  //               ' Assess their ability to collaborate with designers and backend teams.',
  //           },
  //           {
  //             title: 'Development Process',
  //             detail:
  //               'Ensure their workflow aligns with your continuous deployment needs.',
  //           },
  //           {
  //             title: 'Performance Focus',
  //             detail:
  //               'Evaluate their approach to web vitals and optimization.',
  //           },
  //         ],
  //       },
  //     },





  //   ],
  // };


  const guideData = guideContent[serviceDetailPageSlug] || guideContent['front-end-development'];

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
                    {paragraph}
                  </p>
                ))}
              {content.list && (
                <ul className="list-disc space-y-3 pl-6 text-gray-600">
                  {content.list.map((item, index) => (
                    <li key={index}>
                      <strong>{item.title}:</strong> {item.detail}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </main>
      </div>
    </section>
  );
}






// 'use client'

// import { useEffect, useRef, useState } from 'react'
// import Image from 'next/image'

// export default function GuideTopics() {
//     const [activeSection, setActiveSection] = useState('introduction')
//     const observerRef = useRef(null)

//     useEffect(() => {
//         observerRef.current = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         setActiveSection(entry.target.id)
//                     }
//                 })
//             },
//             {
//                 rootMargin: '-50px 0px -50% 0px',
//             }
//         )

//         document.querySelectorAll('section[id]').forEach((section) => {
//             observerRef.current?.observe(section)
//         })

//         return () => observerRef.current?.disconnect()
//     }, [])

//     const scrollToSection = (id) => {
//         const element = document.getElementById(id)
//         if (element) {
//             element.scrollIntoView({ behavior: 'smooth' })
//         }
//     }

//     const sections = [
//         {
//             id: 'introduction',
//             title: 'What is Software Development Service?',
//         },
//         {
//             id: 'types',
//             title: 'Types Of Software Development Services',
//         },
//         {
//             id: 'reasons',
//             title: 'Why should one go for Custom Software development?',
//         },
//         {
//             id: 'methodologies',
//             title: 'What is the type of software development?',
//         },

//         {
//             id: 'vendor',
//             title: 'Choosing the Right Vendor for Software Development Services',
//         },
//         {
//             id: 'strategies',
//             title: 'Strategies to Reduce Time and Cost',
//         },
//     ]

//     return (

//         <section className='container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 sm:py-10 py-5'>


//             <h2 className='font-semibold text-orange-500 text-lg'>Our Guide</h2>
//             <h4 className='font-semibold text-3xl my-2'>User Guide to front end Development</h4>
//             <p className='text-md text-gray-800'>Explore the essentials of creating, managing, and optimizing web interfaces. It covers methodologies, benefits, best practices, and insights for selecting partners, streamlining development, and understanding the front end's crucial role in modern applications.</p>


//             <div className="flex min-h-screen gap-8 sm:p-6 p-2 mt-4">

//                 <nav className="sm:block hidden sticky top-20 h-fit w-80 shrink-0">
//                     <h2 className="mb-4 text-xl text-gray-600 font-normal">GUIDE TOPICS</h2>
//                     <div className="space-y-2">
//                         {sections.map((section) => (
//                             <button
//                                 key={section.id}
//                                 onClick={() => scrollToSection(section.id)}
//                                 className={`block w-full rounded-lg p-3 text-left text-sm transition-colors ${activeSection === section.id
//                                     ? 'bg-amber-50 font-medium text-amber-900'
//                                     : 'hover:bg-gray-100 font-normal text-gray-600'
//                                     }`}
//                             >
//                                 {section.title}
//                             </button>
//                         ))}
//                     </div>
//                 </nav>

//                 <main className="max-w-3xl mx-auto">

//                     <section id="introduction" className="mb-12">
//                         <h1 className="mb-6 text-xl font-semibold text-gray-800">Introduction and Importance of Front End Development</h1>
//                         <Image
//                             src="https://www.valuecoders.com/wp-content/uploads/2024/03/wepik-export-20240321063655leo8.jpeg?height=400&width=800"
//                             alt="Software development workspace showing code on a laptop screen"
//                             width={800}
//                             height={400}
//                             className="mb-6 rounded-lg"
//                         />
//                         <p className="mb-6 text-gray-600">
//                         Front End development is critical to bridging the gap between backend logic and user interaction, translating complex functionalities into appealing interfaces. Our expertise uses modern technologies such as React.js, Angular, Vue.js, and Tailwind CSS to craft high-performance applications. By implementing robust UI frameworks, modular architectures, and scalable design systems, we build apps that align with industry standards.
//                         </p>

//                     </section>


//                     {/* ---------- */}


//                     <section id="types" className="mb-12">
//                         <h2 className="mb-4 text-xl font-semibold">Types of Front End Development Services:</h2>
//                         <p className="mb-4 text-gray-600">
//                         With front end development services, businesses can reduce time-to-market and achieve alignment between visual design and backend systems. Here are the main types:
//                         </p>
//                         <ul className="list-disc space-y-3 pl-6 text-gray-600">
//                             <li>
//                                 <strong>Custom Software Development:</strong> An application developed as per business needs and industry-specific requirements. Everything from initial planning and design through coding, testing, and maintenance.
//                             </li>
//                             <li>
//                                 <strong>Mobile App Development:</strong>This is a type of development which concentrates on the applications for mobile devices like Smartphones and Tablets, mostly on iOs and Android platforms.
//                             </li>
//                             <li>
//                                 <strong>Web Development:</strong> Building applications or websites that run on the web and can be accessed through a browser (front-end development & back-end development).
//                             </li>
//                             <li>
//                                 <strong>Enterprise software development:</strong> This service is suited for creating large-scale applications that cater to business processes, such as ERP systems, CRM platforms and other enterprise solutions.

//                             </li>
//                             <li>
//                                 <strong>Cloud Application Development:</strong>It relates to the creation of cloud-native apps that can be delivered on a subscription basis over the internet without local infrastructure.
//                             </li>
//                             <li>
//                                 <strong>Software Maintenance and Support:</strong>Once deployed, there will be regular updates, bug fixes, etc. To make sure the software is functional and safe while maintaining its security over time.
//                             </li>

//                         </ul>
//                     </section>

//                     {/* ---------- */}

//                     <section id="reasons" className="mb-12">
//                         <h2 className="mb-6 text-xl font-semibold text-gray-800">Why should one go for Custom Software development?</h2>
//                         <p className="mb-4 text-gray-600">
//                             Custom software development is one of the top services offered by leading software development companies in India because:
//                         </p>
//                         <ul className="list-disc space-y-3 pl-6 text-gray-600">

//                             <li>
//                                 <strong>Custom Fit:</strong>Custom software is built for unique business needs and enhancing workflows and operations.
//                             </li>
//                             <li>
//                                 <strong>Scalability:</strong> It is built for business growth and can be easily upgraded and modified when required.
//                             </li>
//                             <li>
//                                 <strong>Competitive Edge:</strong>Scalability benefits - Unique attributes offer an advantage over competitors using generic solutions.
//                             </li>
//                             <li>
//                                 <strong>Efficiency:</strong> By automating processes, custom software can enhance productivity and decrease errors.
//                             </li>

//                         </ul>
//                         <p className="mt-4 text-gray-600">
//                             The first round of pricing is indeed expensive, but you wont be paying any more money just for licensing or unnecessary features later.
//                         </p>
//                         <p className="mt-4 text-gray-600">
//                             <strong>Security —</strong> Custom solutions provide better security based on industry requirements, making them less susceptible to attacks.
//                         </p>
//                     </section>


//                     {/* ---------- */}

//                     <section id="methodologies" className="mb-12">
//                         <h2 className="mb-6 text-xl font-semibold text-gray-800">What is the type of software development?</h2>
//                         <p className="mb-4 text-gray-600">
//                             Here are the main types of software development:
//                         </p>
//                         <ul className="list-disc space-y-3 pl-6 text-gray-600">
//                             <li>
//                                 <strong>Front-End Development:</strong> Focuses on building the user interface (UI) and client-side behaviour using languages like HTML, CSS, and JavaScript, ensuring a seamless user experience.
//                             </li>
//                             <li>
//                                 <strong>Back-End Development:</strong> Involves server-side development, databases management and API integration using languages like Python, Java, php, dot net and Ruby to ensure functionality and system performance.
//                             </li>
//                             <li>
//                                 <strong>Full-Stack Development:</strong> Combines both front-end and back-end development, enabling developers to handle all aspects of a software project from UI, backend and server-side operations.
//                             </li>
//                             <li>
//                                 <strong>Mobile Development:</strong> Specializes in creating applications for mobile platforms (iOS and Android) using technologies like Swift, Kotlin, or React Native for ios and android.
//                             </li>
//                             <li>
//                                 <strong>Web Development:</strong> Focuses on building web applications that run on browsers using technologies such as JavaScript, Python, and PHP for both front-end and back-end.
//                             </li>
//                             <li>
//                                 <strong>Desktop Development:</strong> Involves creating applications that run on desktop operating systems like Windows or macOS, often using languages like dotnet or java.
//                             </li>
//                         </ul>
//                     </section>


//                     <section id="vendor" className="mb-12">
//                         <h2 className="mb-6 text-xl font-semibold text-gray-800">Choosing the Right Vendor for Software Development Services</h2>
//                         <p className="mb-4 text-gray-600">
//                             Selecting the right software development partner is crucial. Consider these factors:
//                         </p>
//                         <ul className="list-disc space-y-3 pl-6 text-gray-600">
//                             <li><strong>Technical Expertise:</strong> Ensure they have experience in your required technologies.</li>
//                             <li><strong>Portfolio:</strong> Review their past projects and client testimonials.</li>
//                             <li><strong>Communication:</strong> Assess their ability to understand and articulate your needs.</li>
//                             <li><strong>Methodology:</strong> Ensure their development approach aligns with your project requirements.</li>
//                             <li><strong>Scalability:</strong> Consider their ability to adapt to your changing needs.</li>
//                         </ul>
//                     </section>

//                     <section id="strategies" className="mb-12">
//                         <h2 className="mb-6 text-xl font-semibold text-gray-800">Strategies to Reduce Time and Cost</h2>
//                         <p className="mb-4 text-gray-600">
//                             Optimizing software development can save time and resources. Here are some strategies:
//                         </p>
//                         <ul className="list-disc space-y-3 pl-6 text-gray-600">
//                             <li><strong>Agile Methodologies:</strong> Implement iterative development for faster feedback and adjustments.</li>
//                             <li><strong>Automation:</strong> Use automated testing and deployment to reduce manual effort and errors.</li>
//                             <li><strong>Code Reusability:</strong> Develop modular code that can be reused across projects.</li>
//                             <li><strong>Cloud Services:</strong> Utilize cloud platforms to reduce infrastructure costs and improve scalability.</li>
//                             <li><strong>Continuous Integration/Continuous Deployment (CI/CD):</strong> Streamline the development pipeline for faster releases.</li>
//                         </ul>
//                     </section>
//                 </main>
//             </div>


//         </section>
//     )
// }


