'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function GuideTopics() {
    const [activeSection, setActiveSection] = useState('introduction')
    const observerRef = useRef(null)

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                rootMargin: '-50px 0px -50% 0px',
            }
        )

        document.querySelectorAll('section[id]').forEach((section) => {
            observerRef.current?.observe(section)
        })

        return () => observerRef.current?.disconnect()
    }, [])

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const sections = [
        {
            id: 'introduction',
            title: 'Introduction and Importance of Software Development',
        },
        {
            id: 'reasons',
            title: 'Reasons to Hire a Software Development Partner',
        },
        {
            id: 'methodologies',
            title: 'Software Development Methodologies',
        },
        {
            id: 'process',
            title: 'Process of Software Development',
        },
        {
            id: 'vendor',
            title: 'Choosing the Right Vendor for Software Development Services',
        },
        {
            id: 'strategies',
            title: 'Strategies to Reduce Time and Cost',
        },
    ]

    return (

        <section className='container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 sm:py-10 py-5'>


            <h2 className='font-semibold text-orange-500 text-lg'>Our Guide</h2>
            <h4 className='font-semibold text-3xl my-2'>User Guide to Software Development</h4>
            <p className='text-md text-gray-800'>Explores the essentials of creating, managing, and refining software. It covers methodologies, benefits, best practices, and insights for selecting partners, optimizing processes, and understanding software&apos;s pivotal role in tech.</p>


            <div className="flex min-h-screen gap-8 sm:p-6 p-2 mt-4">

                <nav className="sm:block hidden sticky top-20 h-fit w-80 shrink-0">
                    <h2 className="mb-4 text-xl text-gray-600 font-normal">GUIDE TOPICS</h2>
                    <div className="space-y-2">
                        {sections.map((section) => (
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

                <main className="max-w-3xl mx-auto">
                    <section id="introduction" className="mb-12">
                        <h1 className="mb-6 text-xl font-semibold text-gray-800">Introduction and Importance of Software Development</h1>
                        <Image
                            src="https://www.valuecoders.com/wp-content/uploads/2024/03/wepik-export-20240321063655leo8.jpeg?height=400&width=800"
                            alt="Software development workspace showing code on a laptop screen"
                            width={800}
                            height={400}
                            className="mb-6 rounded-lg"
                        />
                        <p className="mb-6 text-gray-600">
                            Software development is the process of creating, designing, programming, and maintaining computer software. It
                            involves the utilization of various methodologies, tools, and programming languages to develop applications,
                            websites, mobile apps, and other software solutions. Software development is pivotal in driving innovation,
                            enabling digital transformation, and empowering businesses and individuals to accomplish their goals in an
                            increasingly interconnected world.
                        </p>
                        <h2 className="mb-4 text-xl font-semibold">Importance of Software Development:</h2>
                        <p className="mb-4 text-gray-600">
                            Software development is of paramount importance in today&apos;s technologically-driven landscape. Here are some
                            key reasons highlighting its significance:
                        </p>
                        <ul className="list-disc space-y-3 pl-6 text-gray-600">
                            <li>
                                <strong>Enhancing Efficiency:</strong> Software development enables the creation of customized solutions
                                tailored to specific business needs, streamlining operations, and automating repetitive tasks. This leads to
                                enhanced productivity and operational efficiency.
                            </li>
                            <li>
                                <strong>Digital Transformation:</strong> It facilitates digital transformation by helping businesses adapt to
                                changing market demands and technological advancements.
                            </li>
                            <li>
                                <strong>Innovation:</strong> Software development drives innovation by creating new solutions to existing
                                problems and opening up new possibilities.
                            </li>
                        </ul>
                    </section>

                    <section id="reasons" className="mb-12">
                        <h2 className="mb-6 text-xl font-semibold text-gray-800">Reasons to Hire a Software Development Partner</h2>
                        <p className="mb-4 text-gray-600">
                            Partnering with a software development company can bring numerous benefits to your business. Here are some key reasons:
                        </p>
                        <ul className="list-disc space-y-3 pl-6 text-gray-600">
                            <li>
                                <strong>Expertise and Experience:</strong> Professional developers bring specialized skills and industry knowledge.
                            </li>
                            <li>
                                <strong>Cost-Effectiveness:</strong> Outsourcing can be more economical than maintaining an in-house team.
                            </li>
                            <li>
                                <strong>Faster Time-to-Market:</strong> Dedicated teams can accelerate development and deployment processes.
                            </li>
                            <li>
                                <strong>Focus on Core Business:</strong> Allows you to concentrate on your primary business objectives.
                            </li>
                        </ul>
                    </section>

                    <section id="methodologies" className="mb-12">
                        <h2 className="mb-6 text-xl font-semibold text-gray-800">Software Development Methodologies</h2>
                        <p className="mb-4 text-gray-600">
                            Various methodologies guide the software development process. Some popular ones include:
                        </p>
                        <ul className="list-disc space-y-3 pl-6 text-gray-600">
                            <li>
                                <strong>Agile:</strong> Emphasizes flexibility, customer collaboration, and rapid delivery of functional software.
                            </li>
                            <li>
                                <strong>Scrum:</strong> An Agile framework that focuses on delivering high-quality software through iterative progress.
                            </li>
                            <li>
                                <strong>Waterfall:</strong> A linear sequential approach to software development.
                            </li>
                            <li>
                                <strong>DevOps:</strong> Combines software development and IT operations to shorten the development lifecycle.
                            </li>
                        </ul>
                    </section>

                    <section id="process" className="mb-12">
                        <h2 className="mb-6 text-xl font-semibold text-gray-800">Process of Software Development</h2>
                        <p className="mb-4 text-gray-600">
                            The software development process typically involves the following stages:
                        </p>
                        <ol className="list-decimal space-y-3 pl-6 text-gray-600">
                            <li><strong>Planning:</strong> Defining project scope, objectives, and requirements.</li>
                            <li><strong>Analysis:</strong> Gathering and interpreting user needs.</li>
                            <li><strong>Design:</strong> Creating the software architecture and user interface.</li>
                            <li><strong>Implementation:</strong> Writing the actual code.</li>
                            <li><strong>Testing:</strong> Verifying the software meets specified requirements.</li>
                            <li><strong>Deployment:</strong> Releasing the software to users.</li>
                            <li><strong>Maintenance:</strong> Ongoing support and updates after release.</li>
                        </ol>
                    </section>

                    <section id="vendor" className="mb-12">
                        <h2 className="mb-6 text-xl font-semibold text-gray-800">Choosing the Right Vendor for Software Development Services</h2>
                        <p className="mb-4 text-gray-600">
                            Selecting the right software development partner is crucial. Consider these factors:
                        </p>
                        <ul className="list-disc space-y-3 pl-6 text-gray-600">
                            <li><strong>Technical Expertise:</strong> Ensure they have experience in your required technologies.</li>
                            <li><strong>Portfolio:</strong> Review their past projects and client testimonials.</li>
                            <li><strong>Communication:</strong> Assess their ability to understand and articulate your needs.</li>
                            <li><strong>Methodology:</strong> Ensure their development approach aligns with your project requirements.</li>
                            <li><strong>Scalability:</strong> Consider their ability to adapt to your changing needs.</li>
                        </ul>
                    </section>

                    <section id="strategies" className="mb-12">
                        <h2 className="mb-6 text-xl font-semibold text-gray-800">Strategies to Reduce Time and Cost</h2>
                        <p className="mb-4 text-gray-600">
                            Optimizing software development can save time and resources. Here are some strategies:
                        </p>
                        <ul className="list-disc space-y-3 pl-6 text-gray-600">
                            <li><strong>Agile Methodologies:</strong> Implement iterative development for faster feedback and adjustments.</li>
                            <li><strong>Automation:</strong> Use automated testing and deployment to reduce manual effort and errors.</li>
                            <li><strong>Code Reusability:</strong> Develop modular code that can be reused across projects.</li>
                            <li><strong>Cloud Services:</strong> Utilize cloud platforms to reduce infrastructure costs and improve scalability.</li>
                            <li><strong>Continuous Integration/Continuous Deployment (CI/CD):</strong> Streamline the development pipeline for faster releases.</li>
                        </ul>
                    </section>
                </main>
            </div>


        </section>
    )
}


