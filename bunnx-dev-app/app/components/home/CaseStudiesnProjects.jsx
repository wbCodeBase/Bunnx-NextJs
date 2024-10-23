import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { FaLocationArrow } from "react-icons/fa";

const CaseStudiesnProjects = () => {
    return (
        <>
            <section className="border-t container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-8">

                <h2 className='font-semibold text-orange-500 text-lg'>Our Success Stories</h2>
                <h4 className='font-semibold text-3xl my-2'>Transforming Dreams into Achievements</h4>
                <p className='text-md text-gray-800'>Every success story reflects determination and collaboration. At [Your Company Name], we celebrate turning challenges into achievements, inspiring others to reach their own milestones.</p>

                <div className='flex items-center justify-center flex-wrap gap-10 mt-6'>

                    <div className="border rounded-xl p-4 flex items-center flex-col w-96 text-center relative">
                        <Image className='h-20' src="https://cdn-icons-png.flaticon.com/256/8759/8759045.png" alt="Custom Software Development" width={80} height={80} />
                        <h3 className='font-semibold my-3 text-lg'>Custom Software Development</h3>
                        <p>Tailored solutions to meet your business needs. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perferendis, pariatur et veniam at maiores, explicabo magni!</p>

                        {/* <CustomButton /> */}

                        {/* <Link className='flex items-center justify-center gap-2 px-3 py-2 bg[#261E80] bg-orange-500 rounded-full mt-4 text-white' href="/services/custom-software"><span> <FaLocationArrow /> </span></Link> */}
                        <Link className='flex items-center justify-center gap-2 bg[#261E80] p-1 pl-3 font-medium text-sm bg-orange-500 rounded-full mt-4 text-white' href="/services/mobile-app"><span> Learn more </span> <span className='bg-white rounded-full p-2 text-black'> <FaLocationArrow /> </span></Link>
                    </div>

                    <div className="border rounded-xl p-4 flex items-center flex-col w-96 text-center relative">
                        <Image className='h-20' src="https://cdn-icons-png.flaticon.com/256/8759/8759045.png" alt="Mobile App Development" width={80} height={80} />
                        <h3 className='font-semibold my-3 text-lg'>Mobile App Development</h3>
                        <p>Engaging mobile applications for iOS and Android. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perferendis, pariatur et veniam at maiores, explicabo magni!</p>

                        <Link className='flex items-center justify-center gap-2 bg[#261E80] p-1 pl-3 font-medium text-sm bg-orange-500 rounded-full mt-4 text-white' href="/services/mobile-app"><span> Learn more </span> <span className='bg-white rounded-full p-2 text-black'> <FaLocationArrow /> </span></Link>
                    </div>

                    <div className="border rounded-xl p-4 flex items-center flex-col w-96 text-center relative">
                        <Image className='h-20' src="https://cdn-icons-png.flaticon.com/256/8759/8759045.png" alt="Web Development" width={80} height={80} />
                        <h3 className='font-semibold my-3 text-lg'>Web Development</h3>
                        <p>Responsive and feature-rich websites. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perferendis, pariatur et veniam at maiores, explicabo magni molestias repellendus dolores aut!</p>

                        <Link className='flex items-center justify-center gap-2 bg[#261E80] p-1 pl-3 font-medium text-sm bg-orange-500 rounded-full mt-4 text-white' href="/services/mobile-app"><span> Learn more </span> <span className='bg-white rounded-full p-2 text-black'> <FaLocationArrow /> </span></Link>
                        {/* <Link className='flex items-center justify-center gap-2 p-3 mt-4 bg[#261E80] bg-orange-500 rounded-full text-white' href="/services/web-development"> <span> <FaLocationArrow /> </span></Link> */}
                    </div>



                </div>

            </section>
        </>
        // <>
        //     <section className="case-studies">
        //         <h2>Our Success Stories</h2>
        //         <div className="case">
        //             {/* <img src="project-1.png" alt="Project 1" /> */}
        //             <h3>E-commerce Platform</h3>
        //             <p>Developed a robust e-commerce solution that increased sales by 30%.</p>
        //             <a href="/case-studies/ecommerce">Read More</a>
        //         </div>
        //         <div className="case">
        //             {/* <img src="project-2.png" alt="Project 2" /> */}
        //             <h3>Healthcare Management System</h3>
        //             <p>Streamlined operations for healthcare providers across the region.</p>
        //             <a href="/case-studies/healthcare">Read More</a>
        //         </div>
        //     </section>
        // </>
    )
}

export default CaseStudiesnProjects