import Image from 'next/image';
import Link from 'next/link';
import { FaLocationArrow } from "react-icons/fa";
import cloudMigration from "/public/cloud-migration.png"
import arVrIntegration from "/public/ar-vr-integration.png"
import legacySoftwareModernisation from "/public/legacy-software-modernisation.png"
import enterpriseGradeCyberSecurity from "/public/enterprise-grade-cyber-security.png"

const IndustryWeServed = () => {
    return (
        <>
            <section className="border-t bg-[#00214E] px-4 md:px-6 py-6">
                <div className='container mx-auto max-w-screen-lg xl:max-w-screen-xl px-0 md:px-6 md:py-8'>
                    <h2 className='font-semibold text-orange-500 text-lg'>Industry We Served</h2>
                    <h4 className='text-white font-semibold text-3xl my-2'>Software Development & Engineering Services</h4>
                    <p className='text-white text-md'>Whether you require a complex enterprise software solution or seamless software integration, we will convert your ideas into reality with our long-standing, industry-proven IT consulting and bespoke software development services.</p>

                    <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-2 md:mt-12'>

                        <div className="cursor-pointer flex items-center flex-col bg-white  hover:shadow-orange-500 shadow-lg transition-all duration-300 ease-in-out">
                            <Image className='h-full' src={cloudMigration} alt="Custom Software Development" />

                            <div className='p-4'>
                                <h3 className='font-semibold my-3 text-lg'>Cloud Migration</h3>
                                <p>Tailored solutions to meet your business needs. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perferendis, pariatur et veniam at maiores, explicabo magni!</p>
                            </div>

                        </div>


                        <div className="cursor-pointer flex items-center flex-col bg-white  hover:shadow-orange-500 shadow-lg transition-all duration-300 ease-in-out">
                            <Image className='h-full' src={arVrIntegration} alt="Custom Software Development" />

                            <div className='p-4'>
                                <h3 className='font-semibold my-3 text-lg'>Ar/Vr Integration</h3>
                                <p>Tailored solutions to meet your business needs. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perferendis, pariatur et veniam at maiores, explicabo magni!</p>
                            </div>

                        </div>


                        <div className="cursor-pointer flex items-center flex-col bg-white  hover:shadow-orange-500 shadow-lg transition-all duration-300 ease-in-out">
                            <Image className='h-full' src={legacySoftwareModernisation} alt="Custom Software Development" />

                            <div className='p-4'>
                                <h3 className='font-semibold my-3 text-lg'>Cloud Migration</h3>
                                <p>Tailored solutions to meet your business needs. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perferendis, pariatur et veniam at maiores, explicabo magni!</p>
                            </div>

                        </div>


                        <div className="cursor-pointer flex items-center flex-col bg-white  hover:shadow-orange-500 shadow-lg transition-all duration-300 ease-in-out">
                            <Image className='h-full' src={enterpriseGradeCyberSecurity} alt="Custom Software Development" />

                            <div className='p-4'>
                                <h3 className='font-semibold my-3 text-lg'>Cloud Migration</h3>
                                <p>Tailored solutions to meet your business needs. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perferendis, pariatur et veniam at maiores, explicabo magni!</p>
                            </div>

                        </div>



                    </div>

                </div>

            </section>
        </>
    )
}

export default IndustryWeServed;
