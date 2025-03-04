"use client"

import React, { useState } from 'react'
// import { MdShield } from "react-icons/md";
// import { CgMonday } from "react-icons/cg";
// import { DiDatabase } from "react-icons/di";
import { FaLocationArrow } from "react-icons/fa";
import Link from 'next/link';
import { useSubmitContactFormMutation } from '#/store/api/myApi';

const HeroSection = () => {





    const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '', activeLead: true });
    const [submitContactForm, { isLoading, isSuccess, isError, error }] = useSubmitContactFormMutation();


    const handleChange = (e) => {
        const { id, value } = e.target;

        // Validate phone number input to allow only digits and ensure it doesn't exceed 10 characters
        if (id === 'phone') {
            if (!/^\d*$/.test(value)) return; // Prevent non-digit input
            if (value.length > 10) return; // Limit to 10 digits
        }

        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Additional validation to ensure phone number has exactly 10 digits
        if (formData.phone.length !== 10) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }

        try {
            await submitContactForm(formData).unwrap();
            alert('Form submitted successfully!');
            setFormData({ name: '', phone: '', email: '', message: '' });
        } catch (err) {
            console.log(err);
            alert('Error submitting form: ' + err.data.error);
        }
    };





    return (<>
        {/* <section className="bg-gray800 bg-gray-100">
            <div className="flex items-cente justify-center flex-wrap container mx-auto sm:w-11/12 w-full">

                <div className="sm:mt-8 w-full lg:w-[55%] py-10 px-4 flex gap-20 flex-col sm:pt-18">
                    <div>
                        <h1 className="lg:text-4xl text-2xl font-bold">Contact Us</h1>
                        <p className="lg:text-xl text-md text-gray-600 my-4">Let’s talk about your next big app idea. Send us a message and we will be in touch to know more about your project requirements. Hire us and work with the world-class web & mobile development teams.</p>

                        <div className="flex items-center justify-center sm:justify-start">
                            <Link href="#contact-us" className='flex items-center justify-center gap-2 bg[#261E80] p-1 pl-3 font-medium text-lg bg-orange-500 rounded-full mt-4 text-white'><span> Get in touch </span> <span className='bg-white rounded-full p-3 text-black rotate-45'> <FaLocationArrow /> </span></Link>
                        </div>

                    </div>

                </div>

                <div className="md:w-[44%] w-full flex items-center justify-center">

                    <div className='grid gap-4 my-10 grid-cols-1 px-4'>
                        <div className="">
                            <span><DiDatabase className='text-purple-500 text-xl' /></span>
                            <h5 className='font-semibold my-1'>Quick Responses</h5>
                            <p className='text-sm text-gray-500 font-normal'>Reach out for fast, efficient answers.</p>
                        </div>
                        <hr />
                        <div className="">
                            <span><MdShield className='text-red-500 text-xl' /></span>
                            <h5 className='font-semibold my-1'>Expert Advice</h5>
                            <p className='text-sm text-gray-500 font-normal'>Our team is here to provide tailored solutions.</p>
                        </div>
                        <hr />


                        <div className="">
                            <span><CgMonday className='text-yellow-500 text-xl' /></span>
                            <h5 className='font-semibold my-1'>Reliable Support</h5>
                            <p className='text-sm text-gray-500 font-normal'>Count on us whenever you need assistance.</p>
                        </div>


                    </div>


                </div>


            </div>
        </section> */}



        <div className="relative">
            <div className="flex flex-wrap industry-heroSection">


                <div className='lg:w-3/5 w-full'>
                    <div className='h-full relative text-gray-500 py-8 sm:py-20 px-7 lg:px-24'>

                        <div className='flex flex-wrap z-10 borde h-full'>
                            <div className='z-10 w-full'>
                                <span className='text-white text-base block lg:tracking-wide'>WE ARE HERE FOR YOU</span>
                                <h1 className='text-4xl text-white lg:text-5xl font-bold lg:tracking-wide pr10 py-6'>
                                    Contact Us
                                </h1>
                                <p className='lg:text-lg text-md mb-6 text-white font-medium'>
                                    Let’s talk about your next big app idea. Send us a message and we will be in touch to know more about your project requirements. Hire us and work with the world-class web & mobile development teams.
                                </p>
                                <button className="flex items-center justify-center sm:justify-start">
                                    <Link href="tel:+91-9971544661" className='flex items-center justify-center gap-2 border-2 p-1 pl-3 font-medium text-lg rounded-full mt-4 text-white'>
                                        <span className="px-2"> Contact Us </span>
                                        <span className='bg-white rounded-full p-3 text-black rotate-45'>
                                            <FaLocationArrow />
                                        </span>
                                    </Link>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>


                {/* half */}


                <div className='lg:w-2/5 w-full flex-shrink-0 flex-grow-0 relative'>
                    <div className='px-4 py-10 lg:px-24 relative'>
                        <div className='z-10 relative'>


                            <span className='text-white text-3xl block lg:tracking-wide mb-2 text-center font-semibold'>Let&apos;s Talk</span>


                            <form onSubmit={handleSubmit} className="flex gap-4 flex-col max-w-md mx-auto p-4 rounded-lg">
                                {['name', 'phone', 'email', 'message'].map((field) => (
                                    <div key={field}>
                                        <label className="text-white" htmlFor={field}>
                                            {field.charAt(0).toUpperCase() + field.slice(1)}
                                        </label>
                                        {field === 'message' ? (
                                            <textarea
                                                id={field}
                                                placeholder={`Enter your ${field}`}
                                                value={formData[field]}
                                                onChange={handleChange}
                                                className="w-full rounded-lg p-2.5 px-4 mt-1"
                                            />
                                        ) : (
                                            <input
                                                id={field}
                                                type="text"
                                                placeholder={`Enter your ${field}`}
                                                value={formData[field]}
                                                onChange={handleChange}
                                                className="w-full rounded-lg p-2.5 px-4 mt-1"
                                            />
                                        )}
                                    </div>
                                ))}

                                <div className='flex justify-center flex-col'>
                                    {isSuccess && <p className="text-white">Form submitted successfully!</p>}
                                    {isError && <p className="text-white">Error: {error?.data?.error || 'Something went wrong'}</p>}

                                    <button
                                        type="submit"
                                        className="text-base mt-4 lg:text-lg tracking-widest border-2 px-6 lg:px-8 py-3 lg:py-3 inline-block duration-200 border-white rounded-lg hover:bg-white text-white hover:text-[#ee076e]"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'Submitting...' : 'Submit'}
                                    </button>

                                </div>
                            </form>

                        </div>
                    </div>
                </div>


            </div>
        </div>





    </>
    )
}

export default HeroSection