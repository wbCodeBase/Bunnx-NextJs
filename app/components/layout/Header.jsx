'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ChevronRight, ChevronDown, Menu, X } from 'lucide-react'
import Image from 'next/image'

import { FaJava } from "react-icons/fa";
import { TbCodeDots } from "react-icons/tb";

const menuItems = [
  { title: 'Home', slug: '/', hasSubmenu: false },
  { title: 'Service', slug: '/software-development', hasSubmenu: true },
  { title: 'Hire', slug: '/hire/backend-developers', hasSubmenu: true },
  { title: 'About Us', slug: '/about-us', hasSubmenu: false },
  { title: 'Contact Us', slug: '/contact-us', hasSubmenu: false },
]




const hireData = {
  categories: [
    { name: 'Backend', slug: 'backend-developers' },
    { name: 'Frontend', slug: 'frontend-developers' },
    { name: 'AI/ML', slug: 'ai-ml-developers' },
    { name: 'Mobile', slug: 'mobile-developers' },
    { name: 'Full Stack', slug: 'full-stack-developers' },
    { name: 'DevOps', slug: 'devops-developers' },
    { name: 'CMS', slug: 'cms-developers' },
    { name: 'eCommerce', slug: 'ecommerce-developers' },
    { name: 'Digital Marketing', slug: 'digital-marketing-developers' },
    { name: 'Blockchain', slug: 'blockchain-developers' },
    { name: 'Low - Code', slug: 'low-code-developers' },
  ],
  content: {
    Backend: {
      title: 'Backend',
      slug: 'backend',
      description: 'Build robust backend',
      technologies: [
        { name: '.NET', slug: 'dot-net-developers' },
        { name: 'PHP', slug: 'php-developers' },
        { name: 'C/C++', slug: 'c-cpp-developers' },
        { name: 'Python', slug: 'python-developers' },
        { name: 'C#', slug: 'c-sharp-developers' },
        { name: 'Ruby on Rails', slug: 'ruby-on-rails-developers' },
        { name: 'Django', slug: 'django-developers' },
        { name: 'Symfony', slug: 'symfony-developers' },
        { name: 'Firebase', slug: 'firebase-developers' },
        { name: 'Assembly', slug: 'assembly-developers' },
        { name: 'Golang', slug: 'golang-developers' },
        { name: 'Java', slug: 'java-developers' },
        { name: 'GraphQL', slug: 'graphql-developers' },
        { name: 'Laravel', slug: 'laravel-developers' },
        { name: 'Node', slug: 'node-developers' },
      ],
      hiring: [

        {
          title: 'Staff Augmentation',
          slug: 'staff-augmentation',
          description: 'Access top technical resources on-demand',
        },
        {
          title: 'Hire Software Developers',
          slug: 'software-developers',
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
        { name: 'React', slug: 'react-developers' },
        { name: 'Angular', slug: 'angular-developers' },
        { name: 'Vue.js', slug: 'vue-js-developers' },
        { name: 'Svelte', slug: 'svelte-developers' },
        { name: 'JavaScript', slug: 'javascript-developers' },
        { name: 'TypeScript', slug: 'typescript-developers' },
        { name: 'SASS/SCSS', slug: 'sass-scss-developers' },
        { name: 'Tailwind CSS', slug: 'tailwind-css-developers' },
        { name: 'Bootstrap', slug: 'bootstrap-developers' },
        { name: 'Material-UI', slug: 'material-ui-developers' },
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


const servicesData = {
  categories: [
    { name: 'Software Development', slug: 'software-development' },
    { name: 'Application Development', slug: 'frontend-developers' },
    { name: 'Ecommerce Development', slug: 'ai-ml-developers' },
    { name: 'Dedicated Technical Team', slug: 'mobile-developers' },
    { name: 'QA & Testing', slug: 'full-stack-developers' },
    { name: 'Cloud Services', slug: 'full-stack-developers' },

  ],
  content: {
    "Software Development": {
      title: 'Software Development',
      slug: 'software-development',
      description: 'Develop robust software',
      technologies: [
        { name: 'Custom Software Development', slug: 'custom-software-development' },
        { name: 'CMS Development', slug: 'cms-development' },
        { name: 'CRM Software Development', slug: 'crm-software-development' },
        { name: 'Software Consulting', slug: 'software-consulting' },
        { name: 'IT Consulting', slug: 'it-consulting' },
        { name: 'Agile Consulting', slug: 'agile-consulting' },
      ],
      hiring: [

        {
          title: 'Staff Augmentation',
          slug: 'staff-augmentation',
          description: 'Access top technical resources on-demand',
        },
        {
          title: 'Hire Software Developers',
          slug: 'software-developers',
          description: 'Work with skilled & dedicated developers',
        },
        {
          title: 'Dedicated Software Teams',
          slug: 'dedicated-software-teams',
          description: 'Hire Dedicated Developers',
        },
      ],
    },
    "Application Development": {
      title: 'Application Development',
      slug: 'application-development',
      description: 'Create your dream app',
      technologies: [
        { name: 'Web App Development', slug: 'web-app-development' },
        { name: 'Mobile App Development', slug: 'mobile-app-development' },
        { name: 'Front End Development', slug: 'front-end-development' },
        { name: 'Backend Development', slug: 'backend-development' },
        { name: 'Api Development', slug: 'api-development' },
        { name: 'Full Stack Development', slug: 'full-stack-development' },
        { name: 'Website Development', slug: 'website-development' },
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
    "Ecommerce Development": {
      title: 'Ecommerce Development',
      slug: 'ecommerce-development',
      description: 'Create your dream app',
      technologies: [
        { name: 'Ecommerce Web Development', slug: 'ecommerce-web-development' },
        { name: 'Ecommerce Web Consulting', slug: 'ecommerce-web-consulting' },
        { name: 'Ecommerce Advancement', slug: 'ecommerce-advancement' },
        { name: 'Ecommerce Maintenance & Support', slug: 'ecommerce-maintenance-support' },
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
    "Dedicated Technical Team": {
      title: 'Dedicated Technical Team',
      slug: 'dedicated-technical-team',
      description: 'Hire team for your next project',
      technologies: [
        { name: 'Staff Augumentation', slug: 'staff-ugumentation' },
        { name: 'Hire Software Developers', slug: 'hire-software-developers' },
        { name: 'IT Outsourcing', slug: 'it-outsourcing' },
        { name: 'Dedicated Development Team', slug: 'dedicated-development-team' },
        { name: 'Offshore Dedicated Centre', slug: 'offshore-dedicated-centre' },
        { name: 'Software Development in India', slug: 'software-development-in-india' },
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
    "QA & Testing": {
      title: 'QA & Testing',
      slug: 'qa-testing',
      description: 'Testing desc',
      technologies: [
        { name: 'QA Consulting', slug: 'qa-consulting' },
        { name: 'Hire Software Developers', slug: 'hire-software-developers' },
        { name: 'Software Testing', slug: 'software-testing' },
        { name: 'Mobile App Testing', slug: 'mobile-app-testing' },
        { name: 'Web App Testing', slug: 'web-app-testing' },
        { name: 'QA Outsourcing', slug: 'qa-qutsourcing' },
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
    "Cloud Services": {
      title: 'Cloud Services',
      slug: 'cloud-services',
      description: 'Cloud service',
      technologies: [
        { name: 'Cloud Strategy & Consulting', slug: 'cloud-strategy-consulting' },
        { name: 'Cloud Migration', slug: 'cloud-migration' },
        { name: 'Devops Integration', slug: 'devops-integration' },
        { name: 'Cloud Application Development', slug: 'cloud-application-development' },
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
    setActiveCategory(menu === 'Service' ? 'Software Development' : 'Backend')
  }

  const handleCategoryHover = (category) => {
    setActiveCategory(category)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }




  const renderHireDropdown = (currentActiveMenu) => (
    <div onMouseEnter={() => setActiveMenu(currentActiveMenu)}
      onMouseLeave={() => setActiveMenu('')}

      className="absolute left-0 w-full bg-white shadow-lg z-50 transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex flex-col lg:flex-row">

        <div className="w-full lg:w-1/4 border-r p-4 hidden md:block">
          {hireData.categories.map((category, i) => (
            <Link href={`/hire/${category.slug}`} key={i} onClick={() => { setActiveMenu(''); setActiveCategory('') }}>
              <div
                key={category.name}
                className={`py-2.5 px-4 cursor-pointer rounded-md transition-colors font-medium duration-200 ${activeCategory === category.name ? 'bg-amber-50 text-amber-600' : ''
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
            <div className='flex w-full flex-col lg:flex-row h-screen sm:h-auto overflow-auto'>

              <div className="w-full lg:w-8/12 p-6">

                <div className="mb-4 py-4 flex items-center border-b">
                  <span onClick={() => { setActiveMenu(''); setActiveCategory('') }} className="bg-amber-500 p-2 rounded-full mr-3">

                    <TbCodeDots className='text-white font-semibold text-2xl' />
                  </span>
                  <span>
                    <h2 className='text-xl font-bold'> {hireData.content[activeCategory].title} </h2>
                    <p className="text-gray-600">{hireData.content[activeCategory].description}</p>
                  </span>
                </div>


                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {hireData.content[activeCategory].technologies.map((tech, index) => (
                    <Link href={`/hire/${tech.slug}`} key={index} onClick={() => { setActiveMenu(''); setActiveCategory(''); setIsMobileMenuOpen(false) }} className="p-2 rounded-md transition-colors duration-200 font-medium cursor-pointer hover:bg-amber-50">
                      {tech.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-4/12 px-5 py-5 bg-gray-50 mb-6 sm:mb-0">

                <div className="mb-4 border-b py-5">
                  <h3 className="font-semibold text-lg">Hire Dedicated Developers</h3>
                  <p className="text-sm text-gray-600">Build faster with on-demand team</p>
                </div>

                {hireData.content[activeCategory].hiring.map((item, index) => (
                  <Link href={`/hire/${item.slug}`} key={index}>
                    <div className="mb-4 hover:border hover:bg-amber-50 rounded-lg p-3 cursor-pointer">
                      <h3 className="font-medium text-lg mb-2 flex items-center">
                        <span className="bg-amber-500 p-1 rounded-full mr-2">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </span>
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </Link>
                ))}
                <Link href="#" className="text-amber-600 transition-colors duration-200">
                  View More <ChevronRight className="inline h-4 w-4" />
                </Link>
              </div>

            </div>

          </>
        )}
      </div>
    </div>
  )

  const renderServicesDropdown = (currentActiveMenu) => (
    <div onMouseEnter={() => setActiveMenu(currentActiveMenu)}
      onMouseLeave={() => setActiveMenu('')}

      className="absolute left-0 w-full bg-white shadow-lg z-50 transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex flex-col lg:flex-row">

        <div className="w-full lg:w-1/4 border-r p-4 hidden md:block">
          {servicesData.categories.map((category, i) => (
            <Link href={`/${category.slug}`} key={i} onClick={() => { setActiveMenu(''); setActiveCategory('') }}>
              <div
                key={category.name}
                className={`py-2.5 px-4 cursor-pointer borde my-4 rounded-md transition-colors font-medium duration-200 ${activeCategory === category.name ? 'bg-amber-50 text-amber-600' : ''
                  }`}
                onMouseEnter={() => handleCategoryHover(category.name)}
              >
                {category.name}
                <ChevronRight className="float-right h-5 w-5" />
              </div>
            </Link>
          ))}
        </div>


        {servicesData.content[activeCategory] && (
          <>
            <div className='flex w-full flex-col lg:flex-row h-screen sm:min-h-96 sm:h-auto overflow-auto'>

              <div className="w-full p-6">
                {/* <div className="w-full lg:w-8/12 p-6"> */}

                <div className="mb-4 py-4 flex items-center border-b">
                  <span onClick={() => { setActiveMenu(''); setActiveCategory('') }} className="bg-amber-500 p-2 rounded-full mr-3">

                    <TbCodeDots className='text-white font-semibold text-2xl' />
                  </span>
                  <span>
                    <h2 className='text-xl font-bold'> {servicesData.content[activeCategory].title} </h2>
                    <p className="text-gray-600">{servicesData.content[activeCategory].description}</p>
                  </span>
                </div>


                <div className="grid grid-cols-2 md:grid-cols-3 mt-10 gap-6">
                  {servicesData.content[activeCategory].technologies.map((tech, index) => (
                    <Link className="transition-colors duration-200 font-medium cursor-pointer group" href={`/${tech.slug}`} key={index} onClick={() => { setActiveMenu(''); setActiveCategory(''); setIsMobileMenuOpen(false) }}>
                      
                      <div className='group-hover:bg-amber-50 py-2 px-4 rounded-md'> {tech.name}
                        <p className="text-sm text-gray-600">Lorem ipsum dolor sit.</p>
                      </div>

                    </Link>
                  ))}
                </div>
              </div>

              {/* <div className="w-full lg:w-4/12 px-5 py-5 bg-gray-50 mb-6 sm:mb-0">

                <div className="mb-4 border-b py-5">
                  <h3 className="font-semibold text-lg">Hire Dedicated Developers</h3>
                  <p className="text-sm text-gray-600">Build faster with on-demand team</p>
                </div>

                {servicesData.content[activeCategory].hiring.map((item, index) => (
                  <Link href={`/${item.slug}`} key={index}>
                    <div className="mb-4 hover:border hover:bg-amber-50 rounded-lg p-3 cursor-pointer">
                      <h3 className="font-medium text-lg mb-2 flex items-center">
                        <span className="bg-amber-500 p-1 rounded-full mr-2">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </span>
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </Link>
                ))}

                
                <Link href="#" className="text-amber-600 transition-colors duration-200">
                  View More <ChevronRight className="inline h-4 w-4" />
                </Link>
              </div> */}

            </div>

          </>
        )}
      </div>
    </div>
  )

  return (
    <header className={`${isScrolled ? "bg-[#00214E]" : "bg-black"} shadow-md sticky top-0 left-0 w-full z-40`} ref={dropdownRef}>

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
          {activeMenu === 'Service' ? renderServicesDropdown(activeMenu) : renderHireDropdown(activeMenu)}
        </div>
      )}

      {isMobileMenuOpen && (
        <>
          <div className="lg:hidden h-screen sm:h-auto overflow-y-auto">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <div key={item.title}>
                  <button
                    className="w-full block text-left text-white hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                    onClick={() => item.hasSubmenu && setActiveMenu(activeMenu === item.title ? '' : item.title)}
                  >

                    {item.title}

                    {item.hasSubmenu && (
                      <ChevronDown className={`float-right h-5 w-5 transform transition-transform duration-200 ${activeMenu === item.title ? 'rotate-180' : ''}`} />
                    )}

                  </button>
                  {item.hasSubmenu && activeMenu === item.title && (
                    <div className="pl-4 mt-2 space-y-2">
                      {(item.title === 'Service' ? servicesData.categories : hireData.categories).map((category) => (
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















