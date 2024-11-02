'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ChevronRight, ChevronDown, Menu, X } from 'lucide-react'
import Image from 'next/image'

const menuItems = [
  { title: 'Home', slug: '/', hasSubmenu: false },
  { title: 'Services', slug: '/services', hasSubmenu: true },
  { title: 'Hire', slug: '/hire-developers', hasSubmenu: true },
  { title: 'About Us', slug: '/about-us', hasSubmenu: false },
  { title: 'Contact Us', slug: '/contact-us', hasSubmenu: false },
]


const servicesData = {
  categories: [
    {
      name: 'Software Development',
      slug: 'software-development'
    },
    {
      name: 'Application Development',
      slug: 'application-development'
    },
    {
      name: 'Dedicated Software Teams',
      slug: 'dedicated-software-teams'
    },
    {
      name: 'eCommerce',
      slug: 'ecommerce'
    },
    {
      name: 'QA & Testing',
      slug: 'qa-testing'
    },
    {
      name: 'Cloud Services',
      slug: 'cloud-services'
    },
    {
      name: 'Data Engineering',
      slug: 'data-engineering'
    }
  ],
  
  content: {
    'Software Development': {
      title: 'Software Development',
      slug: 'software-development',
      description: 'Innovative, future-proof software solutions',
      columns: [
        {
          title: 'CONSULTING',
          items: [
            { name: 'Software Consulting', slug: 'software-consulting', description: 'Expert advice on tech' },
            { name: 'IT Consulting', slug: 'it-consulting', description: 'Expert IT solutions, delivered' },
            { name: 'Agile Consulting', slug: 'agile-consulting', description: 'Agile expertise, faster results' },
            { name: 'CRM Consulting', slug: 'crm-consulting', description: 'Optimizing customer relations' },
          ],
        },
        {
          title: 'DEVELOPMENT',
          items: [
            { name: 'Custom Software', slug: 'custom-software', description: 'Tailored solutions for excellence' },
            { name: 'Enterprise Software', slug: 'enterprise-software', description: 'Powering enterprise growth' },
            { name: 'Software Product Engineering', slug: 'software-product-engineering', description: 'Building market-ready software' },
            { name: 'Application Development', slug: 'application-development', description: 'Transform ideas into powerful apps' },
          ],
        },
        {
          title: 'MAINTENANCE & SUPPORT',
          items: [
            { name: 'Application Maintenance', slug: 'application-maintenance', description: 'Effortless app maintenance' },
            { name: 'Application Modernization', slug: 'application-modernization', description: 'Update your applications' },
          ],
        },
        {
          title: 'DELIVERY MODELS',
          items: [
            { name: 'IT Staff Augmentation', slug: 'it-staff-augmentation', description: 'On-demand top resources' },
            { name: 'Dedicated Development Team', slug: 'dedicated-development-team', description: 'Your expert dev team' },
            { name: 'Software Development Outsourcing', slug: 'software-development-outsourcing', description: 'Outsource, excel, succeed' },
            { name: 'Nearshore Software Development', slug: 'nearshore-software-development', description: 'Nearshore excellence, always' },
          ],
        },
      ],
    },
    'Application Development': {
      title: 'Application Development',
      slug: 'application-development',
      description: 'Cutting-edge application solutions',
      columns: [
        {
          title: 'WEB APPLICATIONS',
          items: [
            { name: 'Progressive Web Apps', slug: 'progressive-web-apps', description: 'Next-gen web experiences' },
            { name: 'Single Page Applications', slug: 'single-page-applications', description: 'Fast, dynamic web apps' },
          ],
        },
        {
          title: 'MOBILE APPLICATIONS',
          items: [
            { name: 'iOS App Development', slug: 'ios-app-development', description: 'Sleek, powerful iOS apps' },
            { name: 'Android App Development', slug: 'android-app-development', description: 'Robust Android solutions' },
            { name: 'Cross-platform Development', slug: 'cross-platform-development', description: 'Build once, run everywhere' },
          ],
        },
        {
          title: 'ENTERPRISE APPLICATIONS',
          items: [
            { name: 'ERP Systems', slug: 'erp-systems', description: 'Streamline business processes' },
            { name: 'CRM Applications', slug: 'crm-applications', description: 'Enhance customer relationships' },
          ],
        },
        {
          title: 'EMERGING TECHNOLOGIES',
          items: [
            { name: 'IoT Applications', slug: 'iot-applications', description: 'Connect and control smart devices' },
            { name: 'AI-powered Apps', slug: 'ai-powered-apps', description: 'Intelligent app solutions' },
          ],
        },
      ],
    },
    'Dedicated Software Teams': {
      title: 'Dedicated Software Teams',
      slug: 'dedicated-software-teams',
      description: 'Skilled developers, transparent billing, and scalable solutions',
      columns: [
        {
          title: 'EXPERTISE',
          items: [
            { name: 'Custom Web Applications', slug: 'custom-web-applications', description: 'Tailored web solutions to meet your business needs' },
            { name: 'Progressive Web Apps', slug: 'progressive-web-apps', description: 'Next-gen web experiences with offline capabilities' },
            { name: 'Single Page Applications', slug: 'single-page-applications', description: 'Fast, dynamic web apps with seamless user experiences' },
          ],
        },
        {
          title: 'MOBILE SOLUTIONS',
          items: [
            { name: 'iOS App Development', slug: 'ios-app-development', description: 'Sleek, powerful iOS apps for Apple devices' },
            { name: 'Android App Development', slug: 'android-app-development', description: 'Robust Android solutions for a wide range of devices' },
            { name: 'Cross-platform Development', slug: 'cross-platform-development', description: 'Build once, deploy on both iOS and Android' },
          ],
        },
        {
          title: 'ENTERPRISE APPLICATIONS',
          items: [
            { name: 'ERP Systems', slug: 'erp-systems', description: 'Streamline business processes with customized ERP solutions' },
            { name: 'CRM Applications', slug: 'crm-applications', description: 'Enhance customer relationships with tailored CRM tools' },
            { name: 'Project Management Tools', slug: 'project-management-tools', description: 'Efficiently manage projects with integrated solutions' },
          ],
        },
        {
          title: 'EMERGING TECHNOLOGIES',
          items: [
            { name: 'IoT Applications', slug: 'iot-applications', description: 'Connect and control smart devices with IoT integration' },
            { name: 'AI-powered Apps', slug: 'ai-powered-apps', description: 'Intelligent app solutions leveraging artificial intelligence' },
            { name: 'Blockchain Solutions', slug: 'blockchain-solutions', description: 'Secure and transparent blockchain-based systems' },
          ],
        },
      ],
    },

    "QA & Testing": {
      "title": "QA & Testing",
      "description": "Comprehensive testing services to ensure quality, performance, and reliability across all platforms",
      "columns": [
        {
          "title": "FUNCTIONAL TESTING",
          "items": [
            { "name": "Manual Testing", "slug": "manual-testing", "description": "Thorough testing by experienced QA engineers to identify and resolve functional issues" },
            { "name": "Automated Testing", "slug": "automated-testing", "description": "Efficient test automation to accelerate the testing process and enhance coverage" },
            { "name": "Regression Testing", "slug": "regression-testing", "description": "Ensuring new updates don’t impact existing functionality" }
          ]
        },
        {
          "title": "PERFORMANCE TESTING",
          "items": [
            { "name": "Load Testing", "slug": "load-testing", "description": "Testing under various load conditions to ensure optimal performance" },
            { "name": "Stress Testing", "slug": "stress-testing", "description": "Assessing system behavior under extreme conditions" },
            { "name": "Scalability Testing", "slug": "scalability-testing", "description": "Ensuring systems can scale efficiently with user growth" }
          ]
        },
        {
          "title": "SECURITY TESTING",
          "items": [
            { "name": "Vulnerability Assessment", "slug": "vulnerability-assessment", "description": "Identify security loopholes and vulnerabilities" },
            { "name": "Penetration Testing", "slug": "penetration-testing", "description": "Simulate cyber attacks to discover potential security risks" },
            { "name": "Data Protection & Privacy Testing", "slug": "data-protection-privacy-testing", "description": "Ensuring data security and compliance with privacy regulations" }
          ]
        },
        {
          "title": "MOBILE & CROSS-BROWSER TESTING",
          "items": [
            { "name": "Mobile App Testing", "slug": "mobile-app-testing", "description": "Testing across various devices, screen sizes, and operating systems" },
            { "name": "Cross-browser Testing", "slug": "cross-browser-testing", "description": "Ensuring consistent performance across different web browsers" },
            { "name": "Usability Testing", "slug": "usability-testing", "description": "Enhancing user experience by identifying and resolving usability issues" }
          ]
        }
      ]
    },

    "eCommerce": {
      "title": "eCommerce",
      "description": "Comprehensive eCommerce solutions to drive online sales and enhance customer experiences.",
      "columns": [
        {
          "title": "CUSTOM ECOMMERCE PLATFORMS",
          "items": [
            { "name": "Bespoke Online Stores", "slug": "bespoke-online-stores", "description": "Tailored online shopping experiences for your brand" },
            { "name": "Multi-vendor Marketplaces", "slug": "multi-vendor-marketplaces", "description": "Efficient platforms for managing multiple sellers" },
            { "name": "B2B & B2C Solutions", "slug": "b2b-b2c-solutions", "description": "Seamless platforms for retail and wholesale businesses" }
          ]
        },
        {
          "title": "MOBILE ECOMMERCE",
          "items": [
            { "name": "iOS Shopping Apps", "slug": "ios-shopping-apps", "description": "Engaging and feature-rich shopping experiences on Apple devices" },
            { "name": "Android Shopping Apps", "slug": "android-shopping-apps" },
            { "name": "Cross-platform Mobile Apps", "slug": "cross-platform-mobile-apps", "description": "Consistent shopping experiences across iOS and Android" }
          ]
        },
        {
          "title": "ECOMMERCE INTEGRATIONS",
          "items": [
            { "name": "Payment Gateway Integration", "slug": "payment-gateway-integration", "description": "Secure and reliable payment processing solutions" },
            { "name": "Inventory Management Systems", "slug": "inventory-management-systems", "description": "Streamlined tools for inventory tracking and management" },
            { "name": "CRM Integration", "slug": "crm-integration", "description": "Enhance customer relationships with integrated CRM solutions" }
          ]
        },
        {
          "title": "EMERGING TECHNOLOGIES",
          "items": [
            { "name": "AI-driven Personalization", "slug": "ai-driven-personalization", "description": "Boost conversions with personalized product recommendations" },
            { "name": "Augmented Reality (AR) Shopping", "slug": "ar-shopping" },
            { "name": "Voice Commerce", "slug": "voice-commerce", "description": "Enable shopping through voice commands on smart devices" }
          ]
        }
      ]
    },

    "Cloud Services": {
      "title": "Cloud Services",
      "description": "Scalable, secure, and cost-effective cloud solutions to transform your business operations.",
      "columns": [
        {
          "title": "CLOUD INFRASTRUCTURE",
          "items": [
            { "name": "Cloud Migration", "slug": "cloud-migration", "description": "Seamless transition from on-premises to cloud-based systems" },
            { "name": "Hybrid Cloud Solutions", "slug": "hybrid-cloud-solutions", "description": "Combine the best of both private and public cloud environments" },
            { "name": "Cloud Infrastructure Management", "slug": "cloud-infrastructure-management", "description": "Efficient management of cloud resources with monitoring and optimization" }
          ]
        },
        {
          "title": "CLOUD APPLICATION DEVELOPMENT",
          "items": [
            { "name": "Custom Cloud Apps", "slug": "custom-cloud-apps", "description": "Develop scalable cloud-native applications tailored to your needs" },
            { "name": "Microservices Architecture", "slug": "microservices-architecture", "description": "Build flexible and resilient applications using microservices" },
            { "name": "API Integration", "slug": "api-integration", "description": "Enable seamless connectivity between cloud services and existing systems" }
          ]
        },
        {
          "title": "SECURITY & COMPLIANCE",
          "items": [
            { "name": "Data Security", "slug": "data-security", "description": "Protect your data with robust security measures and encryption" },
            { "name": "Compliance Solutions", "slug": "compliance-solutions", "description": "Ensure compliance with industry standards and regulations" },
            { "name": "Disaster Recovery", "slug": "disaster-recovery", "description": "Reliable backup and recovery solutions to safeguard critical data" }
          ]
        },
        {
          "title": "CLOUD AUTOMATION & OPTIMIZATION",
          "items": [
            { "name": "DevOps & CI/CD", "slug": "devops-cicd", "description": "Streamline deployment with continuous integration and delivery" },
            { "name": "Cost Optimization", "slug": "cost-optimization", "description": "Analyze and reduce cloud infrastructure costs effectively" },
            { "name": "Serverless Computing", "slug": "serverless-computing", "description": "Develop and deploy without managing servers, with scalable pay-per-use models" }
          ]
        }
      ]
    },

    "Data Engineering": {
      "title": "Data Engineering",
      "description": "Efficient data pipelines, scalable solutions, and insightful analytics to drive data-driven decision-making",
      "columns": [
        {
          "title": "DATA PIPELINE DEVELOPMENT",
          "items": [
            { "name": "ETL/ELT Processes", "slug": "etl-elt-processes", "description": "Efficient data extraction, transformation, and loading" },
            { "name": "Real-Time Data Processing", "slug": "real-time-data-processing", "description": "Streamline data flows for immediate insights" },
            { "name": "Batch Data Processing", "slug": "batch-data-processing", "description": "Manage large volumes of data effectively" }
          ]
        },
        {
          "title": "DATA ARCHITECTURE & MANAGEMENT",
          "items": [
            { "name": "Data Warehousing", "slug": "data-warehousing", "description": "Centralized storage solutions for structured data" },
            { "name": "Data Lakes", "slug": "data-lakes", "description": "Scalable storage for raw and unstructured data" },
            { "name": "Database Optimization", "slug": "database-optimization", "description": "Enhance performance and scalability of databases" }
          ]
        },
        {
          "title": "DATA INTEGRATION & GOVERNANCE",
          "items": [
            { "name": "Data Integration Services", "slug": "data-integration-services", "description": "Seamlessly integrate multiple data sources" },
            { "name": "Data Quality Assurance", "slug": "data-quality-assurance", "description": "Ensure data accuracy, consistency, and reliability" },
            { "name": "Data Security & Compliance", "slug": "data-security-compliance", "description": "Protect data and adhere to regulatory requirements" }
          ]
        },
        {
          "title": "ADVANCED DATA ANALYTICS & INSIGHTS",
          "items": [
            { "name": "Big Data Analytics", "slug": "big-data-analytics", "description": "Analyze vast datasets for meaningful insights" },
            { "name": "Machine Learning Integration", "slug": "machine-learning-integration", "description": "Leverage machine learning for predictive analytics" },
            { "name": "Business Intelligence Tools", "slug": "business-intelligence-tools", "description": "Dashboard solutions for data visualization and reporting" }
          ]
        }
      ]
    }


  }
};


const hireData = {
  categories: [
    { name: 'Backend', slug: 'backend' },
    { name: 'Frontend', slug: 'frontend' },
    { name: 'AI/ML', slug: 'ai-ml' },
    { name: 'Mobile', slug: 'mobile' },
    { name: 'Full Stack', slug: 'full-stack' },
    { name: 'DevOps', slug: 'devops' },
    { name: 'CMS', slug: 'cms' },
    { name: 'eCommerce', slug: 'ecommerce' },
    { name: 'Digital Marketing', slug: 'digital-marketing' },
    { name: 'Blockchain', slug: 'blockchain' },
    { name: 'Low - Code', slug: 'low-code' },
  ],
  content: {
    Backend: {
      title: 'Backend',
      slug: 'backend',
      description: 'Build robust backend',
      technologies: [
        { name: '.NET', slug: 'dot-net' },
        { name: 'PHP', slug: 'php' },
        { name: 'C/C++', slug: 'c-cpp' },
        { name: 'Python', slug: 'python' },
        { name: 'C#', slug: 'c-sharp' },
        { name: 'Ruby on Rails', slug: 'ruby-on-rails' },
        { name: 'Django', slug: 'django' },
        { name: 'Symfony', slug: 'symfony' },
        { name: 'Firebase', slug: 'firebase' },
        { name: 'Assembly', slug: 'assembly' },
        { name: 'Golang', slug: 'golang' },
        { name: 'Java', slug: 'java' },
        { name: 'GraphQL', slug: 'graphql' },
        { name: 'Laravel', slug: 'laravel' },
        { name: 'Node', slug: 'node' },
      ],
      hiring: [
        {
          title: 'Hire Dedicated Developers',
          slug: 'hire-dedicated-developers',
          description: 'Build faster with on-demand team',
        },
        {
          title: 'Staff Augmentation',
          slug: 'staff-augmentation',
          description: 'Access top technical resources on-demand',
        },
        {
          title: 'Hire Software Developers',
          slug: 'hire-software-developers',
          description: 'Work with skilled & dedicated developers',
        },
        {
          title: 'Dedicated Software Teams',
          slug: 'dedicated-software-teams',
          description: 'Hire Dedicated Developers',
        },
      ],
    },
    Frontend: {
      title: 'Frontend',
      slug: 'frontend',
      description: 'Create stunning user interfaces',
      technologies: [
        { name: 'React', slug: 'react' },
        { name: 'Angular', slug: 'angular' },
        { name: 'Vue.js', slug: 'vue-js' },
        { name: 'Svelte', slug: 'svelte' },
        { name: 'JavaScript', slug: 'javascript' },
        { name: 'TypeScript', slug: 'typescript' },
        { name: 'HTML5', slug: 'html5' },
        { name: 'CSS3', slug: 'css3' },
        { name: 'SASS/SCSS', slug: 'sass-scss' },
        { name: 'Tailwind CSS', slug: 'tailwind-css' },
        { name: 'Bootstrap', slug: 'bootstrap' },
        { name: 'Material-UI', slug: 'material-ui' },
      ],
      hiring: [
        {
          title: 'Hire Frontend Developers',
          slug: 'hire-frontend-developers',
          description: 'Expert UI/UX implementers',
        },
        {
          title: 'Frontend Team Augmentation',
          slug: 'frontend-team-augmentation',
          description: 'Boost your frontend capabilities',
        },
        {
          title: 'Dedicated Frontend Teams',
          slug: 'dedicated-frontend-teams',
          description: 'Full-service frontend development',
        },
      ],
    },
  },


}



export default function Header() {
  const [activeMenu, setActiveMenu] = useState('')
  const [activeCategory, setActiveCategory] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRef = useRef(null)

  const [isScrolled, setIsScrolled] = useState(false);




  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveMenu('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleMenuHover = (menu) => {
    setActiveMenu(menu)
    setActiveCategory(menu === 'Services' ? 'Software Development' : 'Backend')
  }

  const handleCategoryHover = (category) => {
    setActiveCategory(category)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }


  const renderServicesDropdown = (currentActiveMenu) => (
    <div onMouseEnter={() => setActiveMenu(currentActiveMenu)}
      onMouseLeave={() => setActiveMenu('')}

      className="absolute left-0 w-full bg-white shadow-lg z-50 transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="border-r w-full lg:w-1/4 p-4 hidden md:block">
          {servicesData.categories.map((category) => (
            <Link href={`/services/${category.slug}`} onClick={() => { setActiveMenu(''); setActiveCategory('') }}
              key={category.name}>
              <div className={`py-2.5 px-4 cursor-pointer rounded-md font-medium transition-colors duration-200 ${activeCategory === category.name ? 'bg-orange-50 text-orange-600' : 'hover:bg-gray-200'
                }`}
                onMouseEnter={() => handleCategoryHover(category.name)}
              >
                {category.name}
                <ChevronRight className="float-right h-5 w-5" />
              </div>
            </Link>
          ))}

        </div>
        <div className="w-full lg:w-3/4">
          {servicesData.content[activeCategory] && (
            <>
              <div className='p-6'>


                <div className="mb-4 py-4 flex items-center border-b">
                  <span onClick={() => { setActiveMenu(''); setActiveCategory('') }} className="bg-orange-500 p-2 rounded-full mr-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </span>
                  <span>
                    <h2 className='text-xl font-bold'> {servicesData.content[activeCategory].title} </h2>
                    <p className="text-gray-600">{servicesData.content[activeCategory].description}</p>
                  </span>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {servicesData.content[activeCategory].columns.map((column, index) => (
                    <div key={index} className='relative'>
                      <h3 className="font-medium text-sm text-gray-500 mb-3 py-1 px-2">{column.title}</h3>
                      {column.items.map((item, itemIndex) => (

                        <Link href={`/services/${item.slug}`} key={itemIndex} onClick={() => { setActiveMenu(''); setActiveCategory('') }}>
                          <div className="mb-4 cursor-pointer rounded-lg py-1 px-2 hover:bg-orange-50">
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                        </Link>

                      ))}

                    </div>
                  ))}
                </div>



                <div className="mt-6">
                  <Link href="#" className="text-orange-500 hover:text-orange-600 transition-colors duration-200">
                    View More <ChevronRight className="inline h-4 w-4" />
                  </Link>
                </div>

              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )

  const renderHireDropdown = (currentActiveMenu) => (
    <div onMouseEnter={() => setActiveMenu(currentActiveMenu)}
      onMouseLeave={() => setActiveMenu('')}

      className="absolute left-0 w-full bg-white shadow-lg z-50 transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex flex-col lg:flex-row">

        <div className="w-full lg:w-1/4 border-r p-4 hidden md:block">
          {hireData.categories.map((category, i) => (
            <Link href={`/hire-developers/${category.slug}`} key={i} onClick={() => { setActiveMenu(''); setActiveCategory('') }}>
            <div
              key={category.name}
              className={`py-2.5 px-4 cursor-pointer rounded-md transition-colors font-medium duration-200 ${activeCategory === category.name ? 'bg-orange-100 text-orange-500' : 'hover:bg-gray-200'
                }`}
              onMouseEnter={() => handleCategoryHover(category.name)}
            >
              {category.name}
              <ChevronRight className="float-right h-5 w-5" />
            </div>
            </Link>
          ))}
        </div>


        {hireData.content[activeCategory] && (
          <>
            <div className="w-full lg:w-2/4 p-6">

              <div className="mb-4 py-4 flex items-center border-b">
                <span onClick={() => { setActiveMenu(''); setActiveCategory('') }} className="bg-orange-500 p-2 rounded-full mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </span>
                <span>
                  <h2 className='text-xl font-bold'> {hireData.content[activeCategory].title} </h2>
                  <p className="text-gray-600">{hireData.content[activeCategory].description}</p>
                </span>
              </div>


              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {hireData.content[activeCategory].technologies.map((tech, index) => (
                  <Link href={`/hire-developers/${tech.slug}`} key={index} onClick={() => { setActiveMenu(''); setActiveCategory('') }} className="p-2 rounded-md transition-colors duration-200 font-medium cursor-pointer hover:bg-orange-50">
                    {tech.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/4 px-5 py-5 bg-gray-50">

              <div className="mb-4 border-b py-5">
                <h3 className="font-semibold text-lg">Head content</h3>
                <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet.</p>
              </div>

              {hireData.content[activeCategory].hiring.map((item, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-medium text-lg mb-2 flex items-center">
                    <span className="bg-orange-500 p-1 rounded-full mr-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </span>
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
              <Link href="#" className="text-orange-500 hover:text-orange-600 transition-colors duration-200">
                View More <ChevronRight className="inline h-4 w-4" />
              </Link>
            </div>

          </>
        )}
      </div>
    </div>
  )

  return (
    <header className={`${isScrolled ? "bg-[#00214E]" : "bg-black"} shadow-md sticky top-0 left-0 w-full z-20`} ref={dropdownRef}>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between lg:px-10">
          <Link href="/" className="flex items-center py-2">
            <Image
              className="w-auto lg:h-auto h-12"
              src={"/logo/bunnx-logo.png"}
              alt="Bunnx logo"
              width={125}
              height={30}
              priority
            />
          </Link>
          <nav className="hidden lg:flex space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => item.hasSubmenu && handleMenuHover(item.title)}
                onMouseLeave={() => setActiveMenu('')}
              >
                <Link href={item.slug}
                  className={`text-white hover:text-orange-500 px-3 py-8 rounded-md text-sm font-medium transition-colors duration-200 ${activeMenu === item.title ? 'text-orange-500' : ''
                    }`}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">

            <button className="bg-orange-500 text-white px-6 py-3 rounded-full text-md font-medium hover:bg-orange-600 transition-colors duration-300">
              Get in Touch
            </button>

          </div>
          <div className="lg:hidden flex items-center justify-center">
            <button onClick={() => {
              toggleMobileMenu();
              setActiveMenu("");
            }}
              className="text-white transition-colors duration-200">
              {isMobileMenuOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {activeMenu && (
        <div className="absolute left-0 w-full bg-white shadow-lg z-50 transition-all duration-300 ease-in-out transform translate-y-0 opacity-100">
          {activeMenu === 'Services' ? renderServicesDropdown(activeMenu) : renderHireDropdown(activeMenu)}
        </div>
      )}

      {isMobileMenuOpen && (
        <>
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <div key={item.title}>
                  <button
                    className="w-full text-left text-white hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                    onClick={() => item.hasSubmenu && setActiveMenu(activeMenu === item.title ? '' : item.title)}
                  >
                    {item.title}
                    {item.hasSubmenu && (
                      <ChevronDown className={`float-right h-5 w-5 transform transition-transform duration-200 ${activeMenu === item.title ? 'rotate-180' : ''}`} />
                    )}
                  </button>
                  {item.hasSubmenu && activeMenu === item.title && (
                    <div className="pl-4 mt-2 space-y-2">
                      {(item.title === 'Services' ? servicesData.categories : hireData.categories).map((category) => (
                        <button
                          key={category.name}
                          className="w-full text-left font-medium text-gray-200 hover:text-orange-500 block px-3 py-2 text-sm transition-colors duration-200"
                          onClick={() => handleCategoryHover(category.name)}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>


            <div className="px-4 py-3 flex items-center justify-center">

              <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-lg font-medium hover:bg-orange-600 transition-colors duration-300">
                Get in Touch
              </button>

            </div>
          </div>

        </>


      )}


    </header>
  )
}














