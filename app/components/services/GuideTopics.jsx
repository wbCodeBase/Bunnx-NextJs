'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function GuideTopics() {
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

  const guideData = {
    title: "User Guide to Front End Development",
    description:
      "Explore the essentials of creating, managing, and optimizing web interfaces. It covers methodologies, benefits, best practices, and insights for selecting partners, streamlining development, and understanding the front end's crucial role in modern applications.",
    sections: [
      {
        id: 'introduction',
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
        id: 'types',
        title: 'Types Of Software Development Services',
        content: {
          heading: 'Types of Front End Development Services:',
          description: [
            "With front end development services, businesses can reduce time-to-market and achieve alignment between visual design and backend systems. Here are the main types:",
          ],
          list: [
            {
              title: 'Custom Software Development',
              detail:
                'An application developed as per business needs and industry-specific requirements. Everything from initial planning and design through coding, testing, and maintenance.',
            },
            {
              title: 'Mobile App Development',
              detail:
                'This is a type of development which concentrates on the applications for mobile devices like Smartphones and Tablets, mostly on iOS and Android platforms.',
            },
            {
              title: 'Web Development',
              detail:
                'Building applications or websites that run on the web and can be accessed through a browser (front-end development & back-end development).',
            },
          ],
        },
      },
      // Add more sections as needed
    ],
  };

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
                className={`block w-full rounded-lg p-3 text-left text-sm transition-colors ${
                  activeSection === section.id
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


