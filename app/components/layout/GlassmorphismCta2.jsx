import React from 'react';
import Link from "next/link";

const data = [
  {
    slug: "front-end-development-services",
    tagline: "Get a Digital Ecosystem with Our Experts!",
    title: "Accelerate Your Project’s Success with the Best Front End Technologies.",
    description: "From databases to deployment, we create intelligent solutions that scale with your ambitions. Get the best website designed that will help you boost your reach and help your customers navigate easily.",
    buttonText: "Contact Us Now",
    backgroundImage: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg",
  },
  {
    slug: "back-end-development-services",
    tagline: "Get a Blueprint for the Back-end of your Application.",
    title: "Our Database knows no Failures and Long Load Times.",
    description: "As your business grows, we solve all the tasks by talking technical. We combine the architecture and cybersecurity to provide the best experience to your visitors.",
    buttonText: "Contact Us Now",
    backgroundImage: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg",
  },
  {
    slug: "crm-software-development-services",
    tagline: "Scale Your Business with Expert CRM Solutions!",
    title: "Transform Customer Relationships into Business Success with Professional CRM Development.",
    description: "From database optimization to reliable deployment, ourCRM software developers develop CRM software solutions that evolve with you.",
    buttonText: "Contact Us Now",
    backgroundImage: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg",
  },
  {
    slug: "custom-software-development-services",
    tagline: "Get Lightweight Frameworks, Heavy Results!",
    title: "Drive Unstoppable Growth with Agile, Secure custom software Development.",
    description: "Every line of code, feature, and interaction is built with your purpose. From mapping out ideas to delivering a product, we stay hands-on every step of the way.",
    buttonText: "Contact Us Now",
    backgroundImage: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg",
  },
  {
    slug: "software-development-consultants",
    tagline: "Ready to elevate your customer relationships?",
    title: "Turn Your Customer Relationships into Lasting Success with our Software Consulting Services.",
    description: "We’re here to help you with custom software consulting services that fits your business today!",
    buttonText: "Contact Us Now",
    backgroundImage: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg",
  },
  {
    slug: "best-software-development-company-in-india",
    tagline: "Be Success-Ready With the Right Software!",
    title: "Get Ready to Stay Ahead with Best Software Development Services",
    description: "Whether you need a custom-made software or one that can merge with your existing system, we have the right solution. Connect with us and get the best software development services in no time.",
    buttonText: "Contact Us Now",
    backgroundImage: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg",
  },
  {
    slug: "it-consulting-services",
    tagline: "Your IT Solutions Just Got Better With Us!",
    title: "Big Ideas Need Smarter IT Solutions.",
    description: "Searching for a tech solution can be hard. But with the best IT consulting experts, you get smart and effective solutions easily. So, get tech support and extraordinary results from the best IT consulting services in India.",
    buttonText: "Contact Us Now",
    backgroundImage: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg",
  },
  {
    slug: "mobile-app-development-services",
    tagline: "Get the Best Mobile App with Our Experts!",
    title: "We Design Apps that are as Dynamic as your Vision",
    description: "From creating user journeys to making features, we design apps with jaw-dropping interfaces.",
    buttonText: "Contact Us Now",
    backgroundImage: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg",
  },
  {
    slug: "api-development-and-integration-services",
    tagline: "Your API Partner for Smarter Solutions!",
    title: "We Enable Smarter Workflows With Intelligent APIs",
    description: "As a trusted API Development & Integration Company, we focus on scalable solutions. Our API Development & Integration Services ensure seamless connectivity, making your systems efficient and future-ready.",
    buttonText: "Contact Us Now",
    backgroundImage: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg",
  },
  {
    slug: "agile-consulting-services",
    tagline: "Let’s set you up for lasting success.",
    title: "Sharpen your approach with us.",
    description: "We’ll work side by side with you to fine-tune workflows, smooth out bumps, and get your team firing on all cylinders.",
    buttonText: "Contact Us Now",
    backgroundImage: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg",
  },
  {
    slug: "application-development-services",
    tagline: "Get Lightweight Frameworks, Heavy Results!",
    title: "Drive Unstoppable Growth with Agile, Secure Application Development.",
    description: "Our experts code to make custom architectures for smarter applications. So, from APIs to algorithms, we’ve got it covered. That’s because we build applications with performance-first engineering.",
    buttonText: "Contact Us Now",
    backgroundImage: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg",
  },
];

const getCtaContent = (data, serviceDetailPageSlug) => {
  // First try to find content matching the page slug
  const contentBySlug = data.find(item => item?.slug === serviceDetailPageSlug);
  
  if (contentBySlug) {
    return contentBySlug;
  }

  // Fallback to default content if no match
  return data.find(item => item?.slug === "best-software-development-company-in-india") || data[0];
};

const GlassmorphismCta2 = ({ serviceDetailPageSlug }) => {
  // Find content for the provided slug
  const content = getCtaContent(data, serviceDetailPageSlug);
  // Handle case where slug doesn't match any data
  if (!content) {
    return <p>Content not found for the provided slug.</p>;
  }

  return (
    <section className="container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-10">
      <div
        style={{
          backgroundImage: `url('${content.backgroundImage}')`,
        }}
        className="rounded-md container mx-auto max-w-screen-xl px-4 md:px-10 py-10 bg-center bg-cover bg-no-repeat"
      >
        <div className="h-full w-full flex gap-8 items-center flex-wrap justify-between sm:px-10 px-4 py-6 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-50">
          <div className="text-white flex gap-3 flex-col lg:items-start items-center xl:w-[52%] w-full">
            <span className="italic">{content.tagline}</span>
            <h3 className="text-3xl font-semibold">{content.title}</h3>
            <p>{content.description}</p>
          </div>
          <div className="xl:w-[40%] w-full flex justify-center items-center">
            <Link href="tel:+91-9971544661"
              className="px-6 mt-4 py-3 bg-white/30 backdrop-blur-md text-white font-semibold rounded-full shadow-md hover:bg-white/40 transition duration-300 border border-white/20"
            >
              {content.buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};


export default GlassmorphismCta2;

