import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLocationArrow } from "react-icons/fa";
import { createLinkedContent } from '#/utils/LinkBuilder';
import softwareDev from "/public/Software-Development.webp";


const keywordToSlug = {
  'software development services': 'best-software-development-company-in-india',
  'CRM software solutions': 'crm-software-development-services',
  'custom software development companies': 'custom-software-development-services',
  'Custom API Development & Integration Services': 'api-development-and-integration-services',
  'API Development & Integration Company': 'api-development-and-integration-services',
};



const data = [
  {
    slug: "custom-software-development-services",
    title: "Leading Custom Software Development Experts",
    description1: "With years of experience and a team that is passionate about making software, Bunnx has become one of the best custom software development companies in India.",
    description2: "If you want us to simplify complex workflows or build something from scratch, our team will do it all.",
    buttonText: "Get Started!",
    link: "#contact-us",
    imageSrc: softwareDev,
    altText: "Custom Software Development",
  },
  {
    slug: "front-end-development-services",
    title: "Leading Front End Development Experts",
    description1: "Crafting pixel-perfect and performant user interfaces customised to your business vision, Bunnx excels at delivering responsive web applications with lightning-fast load times.",
    description2: "We build scalable, component-driven front ends that evolve with your product. Our expertise spans modern frameworks like React and Vue.js, ensuring we solve your unique UX challenges.",
    buttonText: "Get Started!",
    link: "#contact-us",
    imageSrc: softwareDev,
    altText: "Front End Development",
  },
  {
    slug: "back-end-development-services",
    title: "Leading Back End Development Experts",
    description1: "We don’t just specialize in back-end development—we offer many application development services to help your business succeed in competitive markets.",
    description2: "From front-end interfaces to complete app solutions, our work isn't limited to only one service. Our innovations in all types of services have made us one of the top backend development services companies.",
    buttonText: "Get Started! ",
    link: "#contact-us",
    imageSrc: softwareDev,
    altText: "Backend Development",
  },
  {
    slug: "crm-software-development-services",
    title: "Experienced CRM Software Development Specialists",
    description1: "We have created CRM software solutions for the growth of all types of businesses and to strengthen customer relationships. Our CRM software development company also depends on only proven technologies like Salesforce and Microsoft Dynamics",
    description2: "We also have services like comprehensive contact management, sales pipeline automation, and detailed reporting capabilities that help your business track customer interactions.",
    buttonText: "Get Started! ",
    link: "#contact-us",
    imageSrc: softwareDev,
    altText: "CRM Development",
  },
  {
    slug: "best-software-development-company-in-india",
    title: "Choose Leading Software Development Company",
    description1: "Offering seamless and efficient software development services customised to your unique business requirements, Bunnx is committed to delivering secure software solutions swiftly.",
    description2: "We create scalable, secure software that grows with your business. Our focus is on developing relevant technical expertise to address industry-specific challenges.",
    buttonText: "Get Started! ",
    link: "#contact-us",
    imageSrc: softwareDev,
    altText: "Software Development",
  },
  {
    slug: "software-development-consultants",
    title: "Experienced Software Consultants",
    description1: "We have created solutions for the growth of all types of businesses and to strengthen customer relationships. Our software consultancy company also depends on only proven technologies like Salesforce and Microsoft Dynamics.",
    description2: "We also have IT software consulting services like comprehensive contact management, sales pipeline automation, and detailed reporting capabilities that help your business track customer interactions.",
    buttonText: "Get Started! ",
    link: "#contact-us",
    imageSrc: softwareDev,
    altText: "Software Development",
  },
  {
    slug: "it-consulting-services",
    title: "Experienced IT Consulting Specialists",
    description1: "We help businesses figure out how to use technology to make things easier. If you’re looking to move your systems to the cloud, fix clunky workflows, or get better insights from your data, we’ve got you covered.",
    description2: "We stick to tools like AWS, Azure, and Google Cloud—because they work well and get the job done. Whether it’s setting up smoother processes or organizing your data in a way that actually makes sense, we’re here to make tech feel less complicated.",
    buttonText: "Get Started! ",
    link: "#contact-us",
    imageSrc: softwareDev,
    altText: "Software Development",
  },
  {
    slug: "mobile-app-development-services",
    title: "Leading Mobile App Development Experts",
    description1: "We develop apps for each ecosystem by sticking to human interface guidelines. Our experts fine-tune it for speed, low loading time and conserve battery life.",
    description2: "With cloud-based architectures on AWS, Google Cloud, or Azure, your app will also handle user demands without breaking a sweat.",
    buttonText: "Get Started! ",
    link: "#contact-us",
    imageSrc: softwareDev,
    altText: "Mobile App Development",
  },
  {
    slug: "api-development-and-integration-services",
    title: "Leading Mobile App Development Experts",
    description1: "As a leading API Development & Integration Company, we leverage advanced technologies like Node.js, Django, and Spring Boot to deliver robust solutions.",
    description2: "Our services include Custom API Development & Integration Services, efficient database optimization, and real-time data processing, ensuring your application is fast, secure, and future-ready.",
    buttonText: "Get Started! ",
    link: "#contact-us",
    imageSrc: softwareDev,
    altText: "Mobile App Development",
  },


];


const ChooseUs = ({ serviceDetailPageSlug }) => {
  // Find the data for the provided slug
  var content = data.find((item) => (item?.slug).includes(serviceDetailPageSlug))

  // Handle case where slug doesn't match any data
  if (!content) {
    content = data.find((item) => item?.slug === "best-software-development-company-in-india")

    if (!content) {
      return <p>Content not found for the provided slug.</p>;
    }
  }


  return (
    <section className="container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-12">
      <div className="grid sm:grid-cols-2 gap-10 grid-cols-1">
        <div className="rounded-xl flex items-center justify-center flex-col gap-5 px4">
          <div>
            <h2 className="font-semibold text-orange-500 text-left text-lg">Why Choose Us</h2>
            <h4 className="font-bold sm:text-4xl text-2xl my-2">{content.title}</h4>
            <p className="text-md text-gray-800 my-4">{createLinkedContent(content.description1, keywordToSlug, serviceDetailPageSlug)}</p>
            <p className="text-md text-gray-800">{createLinkedContent(content.description2, keywordToSlug, serviceDetailPageSlug)}</p>
          </div>
          <div className="flex items-center">
            <Link
              href={content.link}
              className="flex items-center justify-center gap-2 bg[#261E80] p-2 pl-3 font-medium text-md bg-orange-500 rounded-full mt-4 text-white"
            >
              <span>{content.buttonText}</span>
              <span className="bg-white rounded-full p-2 text-black">
                <FaLocationArrow />
              </span>
            </Link>
          </div>
        </div>

        <div className="borde rounded-xl p4 flex justify-center items-center flex-col text-center relative">
          <Image src={softwareDev} alt={content.altText} width={500} height={600} />
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
