import Image from 'next/image';
import Link from 'next/link';
import { FaLocationArrow } from "react-icons/fa";

const OurServices2 = () => {
    const services = [
        {
            id: 1,
            title: "Custom Software Development",
            description: "Tailored solutions to meet your business needs. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perferendis, pariatur et veniam at maiores, explicabo magni!",
            imageSrc: "https://cdn-icons-png.flaticon.com/256/8759/8759045.png",
            link: "/custom-software-development",
        },
        {
            id: 2,
            title: "Mobile App Development",
            description: "Engaging mobile applications for iOS and Android. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perferendis, pariatur et veniam at maiores, explicabo magni!",
            imageSrc: "https://cdn-icons-png.flaticon.com/256/8759/8759045.png",
            link: "/mobile-app-development",
        },
        {
            id: 3,
            title: "WebApp Development",
            description: "Responsive and feature-rich websites. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perferendis, pariatur et veniam at maiores, explicabo magni molestias repellendus dolores aut!",
            imageSrc: "https://cdn-icons-png.flaticon.com/256/8759/8759045.png",
            link: "/web-app-development",
        },
        {
            id: 4,
            title: "Ecommerce Development",
            description: "Responsive and feature-rich websites. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perferendis, pariatur et veniam at maiores, explicabo magni molestias repellendus dolores aut!",
            imageSrc: "https://cdn-icons-png.flaticon.com/256/8759/8759045.png",
            link: "/ecommerce-development",
        },
        {
            id: 5,
            title: "Ecommerce Development",
            description: "Responsive and feature-rich websites. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perferendis, pariatur et veniam at maiores, explicabo magni molestias repellendus dolores aut!",
            imageSrc: "https://cdn-icons-png.flaticon.com/256/8759/8759045.png",
            link: "/ecommerce-development",
        },
        {
            id: 6,
            title: "Dedicated Technical Team",
            description: "Responsive and feature-rich websites. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perferendis, pariatur et veniam at maiores, explicabo magni molestias repellendus dolores aut!",
            imageSrc: "https://cdn-icons-png.flaticon.com/256/8759/8759045.png",
            link: "/dedicated-technical-team",
        },
        {
            id: 7,
            title: "QA Testing",
            description: "Responsive and feature-rich websites. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perferendis, pariatur et veniam at maiores, explicabo magni molestias repellendus dolores aut!",
            imageSrc: "https://cdn-icons-png.flaticon.com/256/8759/8759045.png",
            link: "/qa-testing",
        },
        {
            id: 8,
            title: "Cloud Services",
            description: "Responsive and feature-rich websites. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perferendis, pariatur et veniam at maiores, explicabo magni molestias repellendus dolores aut!",
            imageSrc: "https://cdn-icons-png.flaticon.com/256/8759/8759045.png",
            link: "/cloud-services",
        },
        {
            id: 9,
            title: "Hire Dedicated Developers",
            description: "Responsive and feature-rich websites. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perferendis, pariatur et veniam at maiores, explicabo magni molestias repellendus dolores aut!",
            imageSrc: "https://cdn-icons-png.flaticon.com/256/8759/8759045.png",
            link: "/hire/php-developer",
        },
    ];

    return (
        <>
            <section className="border-t container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-10">
                <h2 className='font-semibold text-orange-500 text-lg'>Our Services</h2>
                <h4 className='font-semibold text-3xl my-2'>Software Development & Engineering Services</h4>
                <p className='text-md text-gray-800'>Whether you require a complex enterprise software solution or seamless software integration, we will convert your ideas into reality with our long-standing, industry-proven IT consulting and bespoke software development services.</p>

                <div className='flex items-center justify-center flex-wrap gap-10 mt-6'>
                    {services.map(service => (
                        <div key={service.id} className="border rounded-xl shadow-lg p-4 flex items-center flex-col w-96 text-center relative">
                            <Image className='h-20' src={service.imageSrc} alt={service.title} width={80} height={80} />
                            <h3 className='font-semibold my-3 text-lg'>{service.title}</h3>
                            <p>{service.description}</p>
                            <Link
                                className='flex items-center justify-center gap-2 p-1 pl-3 font-medium text-sm bg-orange-500 rounded-full mt-4 text-white'
                                href={service.link}
                            >
                                <span>Learn more</span>
                                <span className='bg-white rounded-full p-2 text-black'>
                                    <FaLocationArrow />
                                </span>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default OurServices2;
