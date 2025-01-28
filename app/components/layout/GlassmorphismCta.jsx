import React from 'react';
import Link from "next/link";

const data = [
  {
    slug: "front-end-development-services",
    tagline: "Shape the Future of Your Online Presence",
    title: "Elevate Your Brand with Expert Front-End Development!",
    description: "We excel in crafting intuitive, visually appealing websites and applications that ensure an outstanding user experience. Trust us to transform your creative concepts into a dynamic, user-friendly online interface.",
    buttonText: "Launch Your Project Now!",
    backgroundImage: "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg",
  },
  {
    slug: "back-end-development-services",
    tagline: "Get a Blueprint for the Back-end of your Application.",
    title: "Our Database knows no Failures and Long Load Times.",
    description: "As your business grows, we solve all the tasks by talking technical. We combine the architecture and cybersecurity to provide the best experience to your visitors.",
    buttonText: "Contact Us Now",
    backgroundImage: "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg",
  },
  {
    slug: "custom-software-development-services",
    tagline: "We don’t Just Build Softwares; We Make Solutions",
    title: "Designed for Impact, Built for Results.",
    description: "We don’t just build software; we aim to simplify your customers' lives and enhance your business intelligence, driving smarter operations and growth. Our solutions are designed to streamline processes, increase efficiency, and boost customer satisfaction, ensuring your business thrives.",
    buttonText: "Launch Your Project Now!",
    backgroundImage: "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg",
  },
  {
    slug: "crm-software-development-services",
    tagline: "We Make the Foundation of Your Customer Success Through CRM",
    title: "Grow Business by Mapping out Your Customer's Journey.",
    description: "Our experts design and implement CRM software solutions to serve as the central hub for all your customer interactions. At Bunnx, we also balance your app load and do auto-scaling configurations on cloud platforms to handle fluctuating user demands.",
    buttonText: "Launch Your Project Now!",
    backgroundImage: "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg",
  },
  {
    slug: "best-software-development-company-in-india",
    tagline: "We build industry specific softwares with cost-effective solutions.",
    title: "Get benefit from our expert analysis for better software performance!",
    description: "Access a skilled team that works for your growth. Get people who know how to handle your software in both ups and downs. From fast fixes to system functionality, we focus on everything.",
    buttonText: "Launch Your Project Now!",
    backgroundImage: "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg",
  },
  {
    slug: "software-development-consultants",
    tagline: "Make Successful Softwares With Our Experts",
    title: "Get Access to New Technologies and Talented Software Experts.",
    description: "Our IT software consulting services work to make your customer interactions better. At Bunnx, we also dig deep in the roots of your problems rather than giving surface-level advice.",
    buttonText: "Launch Your Project Now!",
    backgroundImage: "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg",
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

const GlassmorphismCta = ({ serviceDetailPageSlug }) => { 
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
          <div className="text-white flex gap-3 flex-col lg:items-start items-center xl:w-[50%] w-full">
            <span className="italic">{content.tagline}</span>
            <h3 className="text-3xl font-semibold">{content.title}</h3>
            <p>{content.description}</p>
          </div>
          <div className="xl:w-[47%] w-full flex justify-center items-center">
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

export default GlassmorphismCta;






// import React from 'react'
// import Link from "next/link";



// const CtaSection = ({serviceDetailPageSlug}) => {
    
    
//     return (
//         <>
//             <section className='container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-10'>

//                 <div style={{ backgroundImage: "url('https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg" }} className="rounded-md container mx-auto max-w-screen-xl px-4 md:px-10 py-10 bg-center bg-cover bg-no-repeat">

//                     <div className="h-full w-full flex gap-8 items-center flex-wrap justify-between sm:px-10 px-4 py-6 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-50">

//                         <div className='text-white flex gap-3 flex-col lg:items-start items-center xl:w-[48%] w-full'>
//                             <span className='italic'>Shape the Future of Your Online Presence</span>
//                             <h3 className='text-3xl font-semibold'>Elevate Your Brand with Expert Front-End Development!</h3>
//                             <p>We excel in crafting intuitive, visually appealing websites and applications that ensure an outstanding user experience. Trust us to transform your creative concepts into a dynamic, user-friendly online interface.</p>
//                         </div>

//                         <div className='xl:w-[48%] w-full flex justify-center items-center'>
//                             <Link href="tel:+91-9971544661" className="px-6 mt-4 py-3 bg-white/30 backdrop-blur-md text-white font-semibold rounded-full shadow-md hover:bg-white/40 transition duration-300 border border-white/20">
//                                 Launch Your Project Now!
//                             </Link>
//                         </div>

//                     </div>

//                 </div>

//             </section>

//         </>
//     )
// }

// export default CtaSection