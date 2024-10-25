import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaLocationArrow } from "react-icons/fa";

const WhyChooseUs = () => {
    return (
        <>
            <section className="container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-8">

                <h2 className='font-semibold text-orange-500 text-lg'>Why Choose Us</h2>
                <h4 className='font-semibold text-3xl my-2'>Empowering Your Vision with Expert Development</h4>
                <p className='text-md text-gray-800'>Expert solutions tailored to your needs. We deliver quality, scalable, and innovative platforms with seamless collaboration and ongoing support to ensure your business thrives.</p>


                <section className="flex flex-wrap justify-cente justify-between gap-2 py-2 mt-6">

                    <div className='lg:w-[52%] w-full border rounded-md'>

                        <Image className='h-auto w-full' src={"/whyChooseUs.jpg"} alt="Custom Software Development" width={650} height={600} />

                        <div className='p-6'>

                            <h2 className='font-semibold text-orange-500 text-md'>Why Choose Us</h2>
                            <h4 className='font-semibold text-xl my-2'>Empowering Your Vision with Expert Development</h4>
                            <p className='text-md text-gray-800'>Expert solutions tailored to your needs. We deliver quality, scalable, and innovative platforms with seamless collaboration and ongoing support to ensure your business thrives.</p>

                        </div>

                    </div>

                    <div className='lg:w-[47%] w-full flex rounded-md'>



                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-1">
                            {/* Card 1 style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)'}}*/}

                            <div style={{ boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)' }} className="group relative py-4 px-6 overflow-hidden rounded-lg flex items-center justify-center flex-col transition-all duration-300">

                                <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ backgroundImage: 'url("https://c4.wallpaperflare.com/wallpaper/410/77/199/5bd0bdc12d414-wallpaper-preview.jpg")' }}
                                ></div>

                                <div className="flex flex-col items-center group-hover:text-white justify-cente h-ful">
                                    <h3 className="text-xl font-semibold mb-2 z-10">Seamless Collaboration</h3>
                                    <p className="text-center group-hover:opacity-0 opacity-100 transition-opacity duration-300">Transparent and clear Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad itaque perferendis dolorum at. Mollitia non quos harum quasi porro? Commodi!</p>
                                </div>
                                <ul className="absolute px-10 font-medium text-md inset-0 flex group-hover:text-white flex-col items-cente mt6 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <li className="mb-2">- Regular Updates</li>
                                    <li className="mb-2">- Clear Communication</li>
                                    <li className="mb-2">- Flexible Process</li>
                                </ul>

                                <Link className='flex z-10 border items-center justify-center gap-2 bg[#261E80] p-1 font-medium text-sm bg-orange-500 group-hover:bg-black rounded-full mt-4 text-white' href="/services/mobile-app"><span className='bg-white rounded-full p-2 text-black'> <FaLocationArrow /> </span></Link>

                            </div>

                            {/* Card 2 */}
                            <div style={{ boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)' }} className="group relative py-4 px-6 overflow-hidden rounded-lg flex items-center justify-center flex-col transition-all duration-300">

                                <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ backgroundImage: 'url("https://img.pikbest.com/backgrounds/20200512/abstract-black-background-with-square-purple-and-blue-frame-luxury-futuristic-technology-v_1761876jpg!w700wp")' }}
                                ></div>

                                <div className="flex flex-col items-center group-hover:text-white justify-cente h-ful">
                                    <h3 className="text-xl font-semibold mb-2 z-10">Seamless Collaboration</h3>
                                    <p className="text-center group-hover:opacity-0 opacity-100 transition-opacity duration-300">Transparent and clear Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad itaque perferendis dolorum at. Mollitia non quos harum quasi porro? Commodi!</p>
                                </div>
                                <ul className="absolute px-10 font-medium text-md inset-0 flex group-hover:text-white flex-col items-cente mt6 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <li className="mb-2">- Regular Updates</li>
                                    <li className="mb-2">- Clear Communication</li>
                                    <li className="mb-2">- Flexible Process</li>
                                </ul>

                                <Link className='flex z-10 border items-center justify-center gap-2 bg[#261E80] p-1 font-medium text-sm bg-orange-500 group-hover:bg-black rounded-full mt-4 text-white' href="/services/mobile-app"><span className='bg-white rounded-full p-2 text-black'> <FaLocationArrow /> </span></Link>

                            </div>

                            {/* Card 3 */}
                            <div style={{ boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)' }} className="group relative py-4 px-6 overflow-hidden rounded-lg flex items-center justify-center flex-col transition-all duration-300">

                                <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ backgroundImage: 'url("https://www.phpartners.com/wp-content/uploads/2023/01/AdobeStock_222683930-scaled.jpeg")' }}
                                ></div>

                                <div className="flex flex-col items-center group-hover:text-white justify-cente h-ful">
                                    <h3 className="text-xl font-semibold mb-2 z-10">Seamless Collaboration</h3>
                                    <p className="text-center group-hover:opacity-0 opacity-100 transition-opacity duration-300">Transparent and clear Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad itaque perferendis dolorum at. Mollitia non quos harum quasi porro? Commodi!</p>
                                </div>
                                <ul className="absolute px-10 font-medium text-md inset-0 flex group-hover:text-white flex-col items-cente mt6 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <li className="mb-2">- Regular Updates</li>
                                    <li className="mb-2">- Clear Communication</li>
                                    <li className="mb-2">- Flexible Process</li>
                                </ul>

                                <Link className='flex z-10 border items-center justify-center gap-2 bg[#261E80] p-1 font-medium text-sm bg-orange-500 group-hover:bg-black rounded-full mt-4 text-white' href="/services/mobile-app"><span className='bg-white rounded-full p-2 text-black'> <FaLocationArrow /> </span></Link>

                            </div>


                            {/* Card 4 */}
                            <div style={{ boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)' }} className="group relative py-4 px-6 overflow-hidden rounded-lg flex items-center justify-center flex-col transition-all duration-300">

                                <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ backgroundImage: 'url("https://png.pngtree.com/background/20210710/original/pngtree-tech-black-gold-line-particle-business-background-picture-image_994449.jpg' }}
                                ></div>

                                <div className="flex flex-col items-center group-hover:text-white justify-cente h-ful">
                                    <h3 className="text-xl font-semibold mb-2 z-10">Seamless Collaboration</h3>
                                    <p className="text-center group-hover:opacity-0 opacity-100 transition-opacity duration-300">Transparent and clear Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad itaque perferendis dolorum at. Mollitia non quos harum quasi porro? Commodi!</p>
                                </div>
                                <ul className="absolute px-10 font-medium text-md inset-0 flex group-hover:text-white flex-col items-cente mt6 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <li className="mb-2">- Regular Updates</li>
                                    <li className="mb-2">- Clear Communication</li>
                                    <li className="mb-2">- Flexible Process</li>
                                </ul>

                                <Link className='flex z-10 border items-center justify-center gap-2 bg[#261E80] p-1 font-medium text-sm bg-orange-500 group-hover:bg-black rounded-full mt-4 text-white' href="/services/mobile-app"><span className='bg-white rounded-full p-2 text-black'> <FaLocationArrow /> </span></Link>

                            </div>


                        </div>




                    </div>

                </section>


            </section>
        </>

    )
}

export default WhyChooseUs;