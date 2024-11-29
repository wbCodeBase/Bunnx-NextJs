import Link from 'next/link';
import { FaLocationArrow } from "react-icons/fa";
import { Landmark, Book, HeartPulse, Truck, ShoppingCart, Plane, Film, Factory, Home } from 'lucide-react';

const OurServices2 = () => {
    const services = [
        {
            id: 1,
            title: "Finance & Insurance",
            description: "Empowering financial and insurance businesses with custom software solutions to streamline processes, enhance security, and ensure compliance.",
            link: "/finance-insurance-solutions",
            icon: <Landmark size={52} className="text-black" />,
        },
        {
            id: 2,
            title: "Education",
            description: "Revolutionizing education with interactive e-learning platforms and mobile applications designed to enhance engagement and accessibility.",
            link: "/education-software-development",
            icon: <Book size={52} className="text-black" />,
        },
        {
            id: 3,
            title: "Healthcare",
            description: "Delivering innovative healthcare solutions with feature-rich web and mobile applications for improved patient care and operational efficiency.",
            link: "/healthcare-app-development",
            icon: <HeartPulse size={52} className="text-black" />,
        },
        {
            id: 4,
            title: "Logistics & Distribution",
            description: "Streamlining supply chain operations with advanced logistics and distribution software tailored to boost efficiency and tracking capabilities.",
            link: "/logistics-software-development",
            icon: <Truck size={52} className="text-black" />,
        },
        {
            id: 5,
            title: "Retail & eCommerce",
            description: "Creating dynamic and scalable eCommerce solutions to transform your retail business and enhance the shopping experience.",
            link: "/retail-ecommerce-solutions",
            icon: <ShoppingCart size={52} className="text-black" />,
        },
        {
            id: 6,
            title: "Travel & Hospitality",
            description: "Empowering the travel and hospitality industry with software solutions that elevate customer experiences and operational efficiency.",
            link: "/travel-hospitality-solutions",
            icon: <Plane size={52} className="text-black" />,
        },
        {
            id: 7,
            title: "Communication, Media & Entertainment",
            description: "Delivering seamless communication and immersive media experiences with cutting-edge software designed for the entertainment industry.",
            link: "/media-entertainment-solutions",
            icon: <Film size={52} className="text-black" />,
        },
        {
            id: 8,
            title: "Manufacturing",
            description: "Optimizing manufacturing operations with tailored software solutions for production, inventory management, and supply chain integration.",
            link: "/manufacturing-software-solutions",
            icon: <Factory size={52} className="text-black" />,
        },
        {
            id: 9,
            title: "Real Estate & Construction",
            description: "Innovative software solutions to simplify real estate and construction project management, improve collaboration, and drive growth.",
            link: "/real-estate-construction-solutions",
            icon: <Home size={52} className="text-black" />,
        },
    ];
    
    return (
        <>
            <section className="border-t container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-10">
                <h2 className='font-semibold text-orange-500 text-lg'>Industries</h2>
                <h4 className='font-semibold text-3xl my-2'>Precision Software for Ambitious Businesses</h4>
                <p className='text-md text-gray-800'>We collaborate with businesses across diverse sectors to understand their unique challenges and goals. Our team designs efficient, scalable software solutions that streamline processes, solve problems, and drive long-term success.</p>

                <div className='flex items-cente justify-center flex-wrap gap-10 mt-6'>
                    {services.map(service => (
                        <div key={service.id} className="border rounded-xl shadow-lg p-4 flex items-center flex-col w-96 text-center relative">
                            <div className="h-20 flex items-center justify-center">
                                {service.icon}
                            </div>
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
