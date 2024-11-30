import Image from 'next/image';
import cloudMigration from "/public/cloud-migration.png";
import arVrIntegration from "/public/ar-vr-integration.png";
import legacySoftwareModernisation from "/public/legacy-software-modernisation.png";
import enterpriseGradeCyberSecurity from "/public/enterprise-grade-cyber-security.png";

const solutions = [
    {
        id: 1,
        image: cloudMigration,
        title: "CRM Solutions",
        description: "Streamline customer interactions, manage leads, and boost sales with robust Customer Relationship Management."
    },
    {
        id: 2,
        image: cloudMigration,
        title: "HR Management",
        description: "Simplify HR operations with solutions for recruitment, payroll, and employee management, tailored to your business."
    },
    {
        id: 3,
        image: legacySoftwareModernisation,
        title: "Supply Chain Management",
        description: "Optimize your supply chain processes with intelligent tools for inventory, logistics, and procurement management."
    },
    {
        id: 4,
        image: enterpriseGradeCyberSecurity,
        title: "Operation Management",
        description: "Enhance operational efficiency with data-driven solutions for resource planning, production, and workflow automation."
    },
    {
        id: 5,
        image: cloudMigration,
        title: "Invoice Billing Solutions",
        description: "Automate invoicing and billing processes with secure, accurate, and customizable billing systems."
    },
    {
        id: 6,
        image: cloudMigration,
        title: "Asset Management",
        description: "Automate invoicing and billing processes with secure, accurate, and customizable billing systems."
    },
    {
        id: 7,
        image: cloudMigration,
        title: "Workforce Management",
        description: "Automate invoicing and billing processes with secure, accurate, and customizable billing systems."
    },
];

const IndustryWeServed = () => {
    return (
        <section className="border-t bg-[#00214E] px-4 md:px-6 py-6">
            <div className='container mx-auto max-w-screen-lg xl:max-w-screen-xl px-0 md:px-6 md:py-8'>

                <h2 className='font-semibold text-orange-500 text-lg'>Solutions We Deliver</h2>
                <h4 className='text-white font-semibold text-3xl my-2'>Software Development & Engineering Services</h4>
                <p className='text-white text-md'>
                    Our expertise spans across various business domains, delivering tailored solutions that drive efficiency and innovation for your organization.
                </p>

                <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-2 md:mt-12'>
                    {solutions.map((solution) => (
                        <div 
                            key={solution.id} 
                            className="cursor-pointer flex items-center flex-col bg-white hover:shadow-orange-500 shadow-lg transition-all duration-300 ease-in-out"
                        >
                            <Image className='h-full' src={solution.image} alt={solution.title} />
                            <div className='p-4'>
                                <h3 className='font-semibold my-3 text-lg'>{solution.title}</h3>
                                <p>{solution.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default IndustryWeServed;
