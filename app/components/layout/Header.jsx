'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ChevronRight, ChevronDown, Menu, X, Phone } from 'lucide-react'
import Image from 'next/image'

const menuItems = [
  { title: 'Home', slug: '/', hasSubmenu: false },
  { title: 'Services', slug: '/service', hasSubmenu: true },
  { title: 'Hire', slug: '/hire', hasSubmenu: true },
  { title: 'Technologies', slug: '/technologies', hasSubmenu: false },
  { title: 'About Us', slug: '/about-us', hasSubmenu: false },
]

const servicesData = {
  categories: [
    'Software Development',
    'Application Development',
    'Dedicated Software Teams',
    'eCommerce',
    'QA & Testing',
    'Cloud Services',
    'Data Engineering',
    'Artificial Intelligence',
  ],
  content: {
    'Software Development': {
      title: 'Software Development',
      description: 'Innovative, future-proof software solutions',
      columns: [
        {
          title: 'CONSULTING',
          items: [
            { name: 'Software Consulting', description: 'Expert advice on tech' },
            { name: 'IT Consulting', description: 'Expert IT solutions, delivered' },
            { name: 'Agile Consulting', description: 'Agile expertise, faster results' },
            { name: 'CRM Consulting', description: 'Optimizing customer relations' },
          ],
        },
        {
          title: 'DEVELOPMENT',
          items: [
            { name: 'Custom Software', description: 'Tailored solutions for excellence' },
            { name: 'Enterprise Software', description: 'Powering enterprise growth' },
            { name: 'Software Product Engineering', description: 'Building market-ready software' },
            { name: 'Application Development', description: 'Transform ideas into powerful apps' },
          ],
        },
        {
          title: 'MAINTENANCE & SUPPORT',
          items: [
            { name: 'Application Maintenance', description: 'Effortless app maintenance' },
            { name: 'Application Modernization', description: 'Update your applications' },
          ],
        },
        {
          title: 'DELIVERY MODELS',
          items: [
            { name: 'IT Staff Augmentation', description: 'On-demand top resources' },
            { name: 'Dedicated Development Team', description: 'Your expert dev team' },
            { name: 'Software Development Outsourcing', description: 'Outsource, excel, succeed' },
            { name: 'Nearshore Software Development', description: 'Nearshore excellence, always' },
          ],
        },
      ],
    },
    'Application Development': {
      title: 'Application Development',
      description: 'Cutting-edge application solutions',
      columns: [
        {
          title: 'WEB APPLICATIONS',
          items: [
            { name: 'Progressive Web Apps', description: 'Next-gen web experiences' },
            { name: 'Single Page Applications', description: 'Fast, dynamic web apps' },
          ],
        },
        {
          title: 'MOBILE APPLICATIONS',
          items: [
            { name: 'iOS App Development', description: 'Sleek, powerful iOS apps' },
            { name: 'Android App Development', description: 'Robust Android solutions' },
            { name: 'Cross-platform Development', description: 'Build once, run everywhere' },
          ],
        },
        {
          title: 'ENTERPRISE APPLICATIONS',
          items: [
            { name: 'ERP Systems', description: 'Streamline business processes' },
            { name: 'CRM Applications', description: 'Enhance customer relationships' },
          ],
        },
        {
          title: 'EMERGING TECHNOLOGIES',
          items: [
            { name: 'IoT Applications', description: 'Connect and control smart devices' },
            { name: 'AI-powered Apps', description: 'Intelligent app solutions' },
          ],
        },
      ],
    },
  },
}

const hireData = {
  categories: [
    'Backend',
    'Frontend',
    'AI/ML',
    'Mobile',
    'Full Stack',
    'DevOps',
    'CMS',
    'eCommerce',
    'Digital Marketing',
    'Blockchain',
    'Low - Code',
  ],
  content: {
    Backend: {
      title: 'Backend',
      description: 'Build robust backend',
      technologies: [
        '.NET', 'PHP', 'C/C++', 'Python', 'C#', 'Ruby on Rails',
        'Django', 'Symfony', 'Firebase', 'Assembly', 'Golang', 'Java',
        'GraphQL', 'Laravel', 'Node',
      ],
      hiring: [
        { title: 'Hire Dedicated Developers', description: 'Build faster with on-demand team' },
        { title: 'Staff Augmentation', description: 'Access top technical resources on-demand' },
        { title: 'Hire Software Developers', description: 'Work with skilled & dedicated developers' },
        { title: 'Dedicated Software Teams', description: 'Hire Dedicated Developers' },
      ],
    },
    Frontend: {
      title: 'Frontend',
      description: 'Create stunning user interfaces',
      technologies: [
        'React', 'Angular', 'Vue.js', 'Svelte', 'JavaScript', 'TypeScript',
        'HTML5', 'CSS3', 'SASS/SCSS', 'Tailwind CSS', 'Bootstrap', 'Material-UI',
      ],
      hiring: [
        { title: 'Hire Frontend Developers', description: 'Expert UI/UX implementers' },
        { title: 'Frontend Team Augmentation', description: 'Boost your frontend capabilities' },
        { title: 'Dedicated Frontend Teams', description: 'Full-service frontend development' },
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
            <div
              key={category}
              className={`py-2.5 px-4 cursor-pointer rounded-md font-medium transition-colors duration-200 ${activeCategory === category ? 'bg-orange-50 text-orange-600' : 'hover:bg-gray-200'
                }`}
              onMouseEnter={() => handleCategoryHover(category)}
            >
              {category}
              <ChevronRight className="float-right h-5 w-5" />
            </div>
          ))}

        </div>
        <div className="w-full lg:w-3/4">
          {servicesData.content[activeCategory] && (
            <>
              <div className='p-6'>


                <div className="mb-4 py-4 flex items-center border-b">
                  <span onClick={() => setActiveMenu('')} className="bg-orange-500 p-2 rounded-full mr-3">
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
                        <div key={itemIndex} className="mb-4 cursor-pointer rounded-lg py-1 px-2 hover:bg-orange-50">
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
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
          {hireData.categories.map((category) => (
            <div
              key={category}
              className={`py-2.5 px-4 cursor-pointer rounded-md transition-colors font-medium duration-200 ${activeCategory === category ? 'bg-orange-100 text-orange-500' : 'hover:bg-gray-200'
                }`}
              onMouseEnter={() => handleCategoryHover(category)}
            >
              {category}
              <ChevronRight className="float-right h-5 w-5" />
            </div>
          ))}
        </div>


        {hireData.content[activeCategory] && (
          <>
            <div className="w-full lg:w-2/4 p-6">



              <div className="mb-4 py-4 flex items-center border-b">
                <span onClick={() => setActiveMenu('')} className="bg-orange-500 p-2 rounded-full mr-3">
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
                  <div key={index} className="p-2 rounded-md transition-colors duration-200 font-medium cursor-pointer hover:bg-orange-50">
                    {tech}
                  </div>
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
                          key={category}
                          className="w-full text-left font-medium text-gray-200 hover:text-orange-500 block px-3 py-2 text-sm transition-colors duration-200"
                          onClick={() => handleCategoryHover(category)}
                        >
                          {category}
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














