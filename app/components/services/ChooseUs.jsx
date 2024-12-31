import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLocationArrow } from "react-icons/fa";

import softwareDev from "/public/Software-Development.webp";

// Dummy data for demonstration
const data = [
  {
    slug: "front-end-development",
    title: "Leading Front End Development Experts",
    description1: "Crafting pixel-perfect and performant user interfaces customised to your business vision, Bunnx excels at delivering responsive web applications with lightning-fast load times.",
    description2: "We build scalable, component-driven front ends that evolve with your product. Our expertise spans modern frameworks like React and Vue.js, ensuring we solve your unique UX challenges.",
    buttonText: "Get Started!",
    link: "/front-end-development",
    imageSrc: softwareDev,
    altText: "Front End Development",
  },
  {
    slug: "back-end-development",
    title: "Leading Back End Development Experts",
    description1: "We excel in building dynamic back-end infrastructures that are optimized for performance and long-term growth. We are the best back end company that uses cutting-edge technologies like Node.js, Django, and Spring Boot.",
    description2: "Our solutions include seamless API integrations, efficient database management, and real-time data processing, ensuring that your application remains fast and secure.",
    buttonText: "Get Started! ",
    link: "/back-end-development",
    imageSrc: softwareDev,
    altText: "Backend Development",
  },
];

const ChooseUs = ({ serviceDetailPageSlug }) => {
  // Find the data for the provided slug
  const content = data.find((item) => item.slug === serviceDetailPageSlug) || {
    slug: "front-end-development",
    title: "Leading Front End Development Experts",
    description1: "Crafting pixel-perfect and performant user interfaces customised to your business vision, Bunnx excels at delivering responsive web applications with lightning-fast load times.",
    description2: "We build scalable, component-driven front ends that evolve with your product. Our expertise spans modern frameworks like React and Vue.js, ensuring we solve your unique UX challenges.",
    buttonText: "Get Started!",
    link: "/front-end-development",
    imageSrc: softwareDev,
    altText: "Front End Development",
  };

  // Handle case where slug doesn't match any data
  if (!content) {
    return <p>Content not found for the provided slug.</p>;
  }

  return (
    <section className="container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-12">
      <div className="grid sm:grid-cols-2 gap-10 grid-cols-1">
        <div className="rounded-xl flex items-center justify-center flex-col gap-5 px4">
          <div>
            <h2 className="font-semibold text-orange-500 text-left text-lg">Why Choose Us</h2>
            <h4 className="font-bold sm:text-4xl text-2xl my-2">{content.title}</h4>
            <p className="text-md text-gray-800 my-4">{content.description1}</p>
            <p className="text-md text-gray-800">{content.description2}</p>
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
