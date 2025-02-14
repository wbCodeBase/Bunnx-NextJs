import React from 'react'
import Link from 'next/link';
import { IoArrowForward } from "react-icons/io5";
import { createLinkedContent } from '#/utils/LinkBuilder';


const defaultServicesData = [
  {
    title: "Custom Software Development",
    description:
      "We are committed to deliver custom software solutions that perfectly align with your complex technical needs. You Share your requirements, and we'll create a custom application that evolves with your business and user demands.",
    slug: "custom-software-development-services",
    fetchOnSlug: ["custom-software-development-services", "software-outsourcing", "qa-testing", "ecommerce"]
  },
  {
    title: "Software Outsourcing Services",
    description:
      "Our software outsourcing services reduce costs, accelerate timelines, and connect you with top-tier talent to give you a competitive edge. At Bunnx we have domain experts, our team delivers tailored, efficient solutions that meet your business needs.",
    slug: "software-outsourcing",
    fetchOnSlug: ["support-maintenance", "software-outsourcing", "devops", "ecommerce"]
  },
  {
    title: "Ecommerce",
    description:
      "As a leading software development company in India, we offer comprehensive e-commerce solutions, including secure payment gateways and streamlined shopping experiences, ensuring convenience for your customers.",
    slug: "ecommerce",
  },
  {
    title: "Web App Development",
    description:
      "Our team builds responsive, scalable, and efficient web applications tailored to your business needs. We focus on creating seamless user experiences, ensuring high performance, security, and easy navigation.",
    slug: "web-application-development-services",
  },
  {
    title: "Devops",
    description:
      "Adopt DevOps to optimize software development and operations. With our expertise in collaboration, automation, continuous integration, and delivery pipelines, we empower your business to achieve greater efficiency, quality, and agility.",
    slug: "devops",
  },
  {
    title: "Mobile App Development",
    description:
      "Our skilled mobile app developers combine deep IT knowledge with extensive hands-on experience across diverse projects. They analyze your business ecosystem to fully understand your needs and goals, delivering tailored solutions that best fit your requirements.",
    slug: "mobile-app-development-services",
  },
  {
    title: "Cloud App & Hosting Services",
    description:
      "Leverage our expertise to build secure, scalable cloud applications tailored to your needs. We assess your requirements, develop a risk-mitigation strategy, ensure smooth integration, and optimize performance for maximum efficiency.",
    slug: "cloud-services",
  },
  {
    title: "Support and Maintenance",
    description:
      "At our software development company in India, we prioritise application maintenance just as much as development. We recognize that even the most innovative solutions are only valuable when supported by a stable, well-maintained ecosystem free from bugs and glitches.",
    slug: "support-maintenance",
  },
];


const OurServicesHeadPara = [
  {
    serviceTitle: "Best Front End Development Services",
    servicePara: "We are a top front end development service provider in India, focused on delivering the best user solutions. We build powerful, integrated websites that make navigation smoother and drive business growth seamlessly. Our innovative range of front end development services include",
    slug: "front-end-development-services"
  },
  {
    serviceTitle: "Best Back End Development Services",
    servicePara: "We create backend systems using frameworks like Node.js, Python, or Ruby. We build server logic that handles data and connects with frontend of your website. Our focus is on making APIs for data sharing and setting up databases that store and retrieve information without a hitch. Security and performance are always priorities for us. So, if you are building something new or upgrading your current setup, we will provide you with the best backend.",
    slug: "back-end-development-services"
  },
  {
    serviceTitle: "Our Software Development Services",
    servicePara: "We are a leading software development company in India, providing unique and innovative custom software development services that help your business to achieve exponential growth.",
    slug: "best-software-development-company-in-india"
  },
  {
    serviceTitle: "Best CRM Software Development Services",
    servicePara: "Being one of the top CRM software development companies in India, we are experts in providing reliable CRM development services that improve processes and accelerate company expansion. We have made solutions that will help you modify engagement of your visitors.",
    slug: "crm-software-development-services"
  },
  {
    serviceTitle: "Best custom software Development Services",
    servicePara: "Need a mobile app that feels effortless to use? A custom platform tailored to your business operations? We’re here to create software that not only works flawlessly but also makes your brand stand out. Let’s build software that doesn’t just meet expectations—it exceeds them. At Bunnx, it’s more than development; it’s about creating something exceptional. Ready to get started?",
    slug: "custom-software-development-services"
  },
  {
    serviceTitle: "Our Software Consulting Services",
    servicePara: "When it comes to optimizing your software ecosystem, we’re here to make sense of the chaos and deliver solutions that work. Here’s how we can help:",
    slug: "software-development-consultants"
  },
  {
    serviceTitle: "Best IT Consulting Services",
    servicePara: "If you’re upgrading old systems or starting fresh with something new, we focus on creating new technologies. Let’s redefine what your IT systems can do for you.  Our team creates solutions that help you make better decisions backed by data.",
    slug: "it-consulting-services"
  },
  {
    serviceTitle: "Best Mobile App Development Services",
    servicePara: "Our team makes an app that not only looks amazing but works on all devices. Need integrations? We will connect your app with a lot of payment gateways, CRMs, APIs, and more. The team at our mobile app development company also works on push notifications to keep users engaged, data analytics to refine strategies.",
    slug: "mobile-app-development-services"
  },

  {
    serviceTitle: "Best API Development & Integration Services",
    servicePara: "As a leading API Development & Integration company in India, we specialize in delivering robust custom API Development & Integration services. Our expertise lies in crafting APIs that drive innovation, enhance integration, and streamline workflows across diverse platforms and applications.",
    slug: "api-development-and-integration-services"
  },
  {
    serviceTitle: "Best Agile Consulting Services",
    servicePara: "Together, we’ll break the chains of outdated practices, empower your team to collaborate like never before. Ready to see your business thrive in real-time? Let’s make it happen!",
    slug: "agile-consulting-services"
  },
  {
    serviceTitle: "Best CMS Development Services",
    servicePara: "Your CMS should work for you—not the other way around. Let’s build a system that takes the stress out of website management so you can focus on what really matters, creating great content and growing your business awareness.",
    slug: "cms-development-services"
  },
  {
    serviceTitle: "Best Application Development Services",
    servicePara: "Looking to bring your app idea to life? Bunnx, the best application development company is here to help you.",
    slug: "application-development-services"
  },
  {
    serviceTitle: "Best Full Stack Development Services",
    servicePara: "As a leading full stack development company in India, we specialize in creating dynamic, end-to-end solutions designed to drive business growth.",
    slug: "full-stack-development-services"
  },
  {
    serviceTitle: "Best Ecommerce Development Services",
    servicePara: "As a reputable eCommerce website development company in India, we create feature-loaded, that attracts online surfers to boost your Business.",
    slug: "ecommerce-web-development"
  },
  {
    serviceTitle: "Best Ecommerce Web Consulting Services",
    servicePara: "With our eCommerce consulting services, we’ll help you build a shopping experience your customers can’t resist. From smoother checkouts to eye-catching designs, let’s make your online store the one everyone’s talking about.",
    slug: "ecommerce-consulting-services"
  },
  {
    serviceTitle: "Best Web Application Development Services",
    servicePara: "While creating the first sketch or releasing the final product, we shape every element with care. We don’t believe in providing you with less accurate solutions. Instead, our team builds with purpose. If you're looking for something beyond the usual, let's create something that stands out. Here’s what our web development company offers: ",
    slug: "web-application-development-services"
  },
  {
    serviceTitle: "Best Website Development Services",
    servicePara: "At the core of our website development services is a commitment to building reliable and efficient systems that power high-performing websites. Our expertise lies in crafting solid solutions that support user-friendly and feature-rich websites.",
    slug: "website-development-services"
  },
  {
    serviceTitle: "Best Ecommerce Implementation Services",
    servicePara: "We build apps that work on any device to give users an enjoyable experience. If you want your app to handle payments, connect with customer databases, or pull data from third-party services, we’ve got it covered. And with built-in data tracking, you’ll always know what’s working and what needs a tweak.",
    slug: "ecommerce-implementation"
  },
  {
    serviceTitle: "Best Shopify Development Services",
    servicePara: "Our Shopify web development services India leverage the power of Shopify to craft dynamic online stores that align perfectly with your business needs.",
    slug: "shopify-development-company-in-india"
  },
  {
    serviceTitle: "Best Ecommerce Maintenance & Support Services",
    servicePara: "Your eCommerce website should do more than just exist—it should pull people in, keep them engaged, and make every visit worth their time. We bring years of expertise to the table to provide the best eCommerce website maintenance & support services.",
    slug: "ecommerce-maintenance-and-support-services"
  },
]


const keywordToSlug = {
  'top front end development service provider': 'front-end-development-services',
  'front end development services': 'front-end-development-services',
  'front end development company': 'front-end-development-services',
  'software development company in India': 'best-software-development-company-in-india',
  'custom application development company': 'best-software-development-company-in-india',
  'best software development companies': 'best-software-development-company-in-india',
  'CRM software development companies': 'crm-software-development-services',
  'CRM development services': 'crm-software-development-services',
  'CRM software development company': 'crm-software-development-services',
  'CRM development services': 'crm-software-development-services',
  'custom software development company': 'custom-software-development-services',
  'best IT consulting services in India': 'it-consulting-services',
  'mobile app development company': 'mobile-app-development-services',
  'API Development & Integration company': 'api-development-and-integration-services',
  'custom API Development & Integration services': 'api-development-and-integration-services',
  'Agile consultant services': 'agile-consulting-services',
  'website development services': 'website-development-services',
  'website development company': 'website-development-services',
  'web development company': 'web-application-development-services',
};


const Services = ({ serviceSectionObj, serviceDetailPageSlug, extractNameFromSlug }) => {

  const servicesData = (Array.isArray(serviceSectionObj) && serviceSectionObj.length > 0)
    ? serviceSectionObj
    : [
      {
        title: "Front-End Development",
        description:
          "Take the user level to the next level and develop a flawless website with the top front end development company.",
        ctaRedirectUrl: {
          slug: "front-end-development-services",
        }
      },
      {
        title: "Back-End Development",
        description:
          "Redesign the future of your web presence with a flawlessly tuned website, crafted by the wizards of the best back end development.",
        ctaRedirectUrl: {
          slug: "back-end-development-services",
        }
      },
      {
        title: "Full Stack Development",
        description:
          "Full Stack Development involves building and managing both front-end and back-end of web applications, ensuring seamless functionality.",
        ctaRedirectUrl: {
          slug: "full-stack-development-services",
        },
      },
      {
        title: "Software Development",
        description: "Custom Software Development Services and Solutions to build top-tier intelligent enterprises with speed and agility.",
        ctaRedirectUrl: {
          slug: "best-software-development-company-in-india",
        },
      },

    ];


  const servicesHeadParaObj = OurServicesHeadPara?.find((serviceHeadPara) => serviceHeadPara?.slug === serviceDetailPageSlug) || {
    serviceTitle: `${extractNameFromSlug}`,
    servicePara: `We are a top ${extractNameFromSlug} service provider in India, focused on delivering the best user solutions. We build powerful, integrated websites that make navigation smoother and drive business growth seamlessly. Our innovative range of front end development services include`,
  };

  return (
    <>
      <section className="container mx-auto max-w-screen-xl px-4 md:px-6 py-10">

        <h2 className='font-semibold text-orange-500 text-lg'>Our Services</h2>
        {
          servicesHeadParaObj &&
          <>
            <h4 className='font-semibold text-3xl my-2'>{servicesHeadParaObj.serviceTitle}</h4>
            <p className='text-md text-gray-800'>{createLinkedContent(servicesHeadParaObj.servicePara, keywordToSlug, serviceDetailPageSlug)}</p>
          </>
        }

        <div className='relative flex justify-start flex-wrap gap-10 mt-6'>

          {(servicesData || defaultServicesData).map((service, i) => (
            <div key={i} className="border hover:border-orange-200 rounded-xl shadow-sm p-4 flex itemscenter flex-col w-96  relative">

              <h3 className='font-semibold my-3 pb-3 text-gray-800 text-xl border-b border-orange-500'>{service.title}</h3>

              <p className='text-gray-600'>{createLinkedContent(service.description, keywordToSlug, serviceDetailPageSlug)}</p>


              {service?.ctaRedirectUrl && service?.ctaRedirectUrl?.slug &&
                <div className='flex justify-end items-center mt-2'>
                  <Link href={`${service.ctaRedirectUrl.slug}`} className='flex items-center justify-center text-orange-500 p-1 pl-3 font-medium text-md'><span className='relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full'> Know more </span> <span className='px-1'> <IoArrowForward /> </span></Link>
                </div>
              }

            </div>
          ))
          }



        </div>

      </section>
    </>
  )
}

export default Services