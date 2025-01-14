import React from 'react';
import Link from "next/link";

const data = [
  {
    slug: "front-end-development-services",
    tagline: "Get a Digital Ecosystem with Our Experts!",
    title: "Accelerate Your Project’s Success with the Best Front End Technologies.",
    description: "From databases to deployment, we create intelligent solutions that scale with your ambitions.",
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
    slug: "best-software-development-company-in-india",
    tagline: "Get Rid of Outdated Softwares Today!",
    title: "Get Ready to Stay Ahead with Best Software Development Services",
    description: "We provide you with enormous benefits like better productivity of your apps even when the visitors are high, minimize delays, and automate the software delivery process. So, hurry up!",
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
  }
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
          <div className="text-white flex gap-3 flex-col lg:items-start items-center xl:w-[48%] w-full">
            <span className="italic">{content.tagline}</span>
            <h3 className="text-3xl font-semibold">{content.title}</h3>
            <p>{content.description}</p>
          </div>
          <div className="xl:w-[48%] w-full flex justify-center items-center">
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

