import Link from 'next/link';
import { FaLocationArrow } from "react-icons/fa";
import { Landmark, Book, HeartPulse, Truck, ShoppingCart, Plane, Film, Factory, Home } from 'lucide-react';

const Industries = () => {

    const industries = [
        {
            id: 1,
            title: "Finance & Insurance",
            description: "We transform financial complexity into simple, secure solutions. Our software acts as your digital shield, protecting assets, automating processes, and turning compliance challenges into competitive advantages.",
            link: "/industry/finance-insurance-solutions",
            icon: <Landmark size={52} className="text-black" />,
        },
        {
            id: 2,
            title: "Education",
            description: "Learning reimagined through smart technology. We craft digital classrooms that break geographical barriers, personalize learning experiences, and make education an exciting, accessible journey for everyone.",
            link: "/industry/education-software-development",
            icon: <Book size={52} className="text-black" />,
        },
        {
            id: 3,
            title: "Healthcare",
            description: "Healthcare solutions that put human connection first. Our applications bridge patients and professionals, simplify complex medical workflows, and turn data into life-changing insights.",
            link: "/industry/healthcare-app-development",
            icon: <HeartPulse size={52} className="text-black" />,
        },
        {
            id: 4,
            title: "Logistics & Distribution",
            description: "We transform logistics from a challenge to a strategic advantage. Our software turns complex supply chains into seamless, trackable networks that save time, reduce costs, and boost efficiency.",
            link: "/industry/logistics-software-development",
            icon: <Truck size={52} className="text-black" />,
        },
        {
            id: 5,
            title: "Retail & eCommerce",
            description: "Beyond transactions, we create digital shopping experiences. Our solutions merge technology and customer insights, transforming online stores into vibrant, personalized marketplaces.",
            link: "/industry/retail-ecommerce-solutions",
            icon: <ShoppingCart size={52} className="text-black" />,
        },
        {
            id: 6,
            title: "Travel & Hospitality",
            description: "Technology that makes every journey memorable. We build digital platforms that simplify booking, personalize experiences, and help businesses turn travelers into loyal customers.",
            link: "/industry/travel-hospitality-solutions",
            icon: <Plane size={52} className="text-black" />,
        },
        {
            id: 7,
            title: "Media & Entertainment",
            description: "Where creativity meets technology. We develop platforms that connect storytellers with audiences, streamline content creation, and transform how media is produced and consumed.",
            link: "/industry/media-entertainment-solutions",
            icon: <Film size={52} className="text-black" />,
        },
        {
            id: 8,
            title: "Manufacturing",
            description: "Smart manufacturing starts with intelligent software. We design solutions that optimize production, predict maintenance needs, and turn factory floors into data-driven ecosystems.",
            link: "/industry/manufacturing-software-solutions",
            icon: <Factory size={52} className="text-black" />,
        },
        {
            id: 9,
            title: "Real Estate & Construction",
            description: "Building the future, one digital blueprint at a time. Our software turns complex projects into manageable workflows, enhancing collaboration and transforming how structures come to life.",
            link: "/industry/real-estate-construction-solutions",
            icon: <Home size={52} className="text-black" />,
        },
    ];

    return (
        <>
            <section className="container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-10">
                <span className='font-semibold text-orange-500 text-lg'>Industries We Empower</span>
                <h2 className='font-semibold text-3xl my-2'>Developing Perfectly Fitting Solutions for Every Industry</h2>
                <p className='text-md text-gray-800'>Every industry has a unique rhythm. We listen, understand, and craft software solutions that sync perfectly with your business pulse. Our approach goes beyond coding—we&apos;re your strategic technology partner.</p>
                
                <div className='flex items-cente justify-center flex-wrap gap-10 mt-6'>
                    {industries.map(service => (
                        <div key={service.id} className="border rounded-xl shadow-lg p-4 flex items-center justify-between flex-col w-96 text-center relative">
                            <div>
                                <div className="h-20 flex items-center justify-center">
                                    {service.icon}
                                </div>
                                <h3 className='font-semibold my-3 text-lg'>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>

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

export default Industries;
