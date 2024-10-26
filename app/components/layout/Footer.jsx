import React from 'react'
import './layout.css'
import Image from 'next/image'

import bigLogo from "/public/big-logo.png"
// import bigLogo from "/public/big-logo1.png"


const Footer = () => {
    return (
        <>

            <footer className="md:pt-8 pt-0">

                <div className="relative z-">
                    <div className="flex flex-wrap items-end mx-0">

                        <div className='lg:w-1/2 w-full flex-shrink-0 flex-grow-0 relative'>
                            <div className='footer-left lg:rounded-tr-lg px-8 py-12 lg:px-28 relative'>
                                <div className='z-10 relative'>


                                    <span className='text-white text-3xl block lg:tracking-wide mb-4 text-center font-semibold'>Let's Talk</span>


                                    <form className='flex gap-4 flex-col'>

                                        <div>
                                            <label className='text-white' htmlFor="name">Name</label>
                                            <input id='name' placeholder='Enter you name' className='w-full rounded-lg p-2.5 mt-1' type="text" />
                                        </div>

                                        <div>
                                            <label className='text-white' htmlFor="phone">Phone no.</label>
                                            <input id='phone' placeholder='Enter you phone' className='w-full rounded-lg p-2.5 mt-1' type="text" />
                                        </div>

                                        <div>
                                            <label className='text-white' htmlFor="email">Email</label>
                                            <input id='email' placeholder='Enter you email' className='w-full rounded-lg p-2.5 mt-1' type="text" />
                                        </div>

                                        <div>
                                            <label className='text-white' htmlFor="message">Message</label>
                                            <textarea id='message' className='w-full rounded-lg p-2 mt-1' type="text" />
                                        </div>

                                        <div className='flex items-center justify-center md:justify-start mt-2'>
                                            <button type='submit' className="text-base lg:text-lg tracking-widest border-2 px-6 lg:px-8 py-3 lg:py-3 inline-block duration-200 border-white rounded-lg hover:bg-white text-white hover:text-[#ee076e]">
                                                <span className=''>SUBMIT</span>
                                            </button>
                                        </div>



                                    </form>




                                </div>
                            </div>
                        </div>



                        <div className='lg:w-1/2 w-full flex-shrink-0 flex-grow-0 relative'>
                            <div className='footer-right bg-gray900 bg-[#00214E] text-gray-500 py-14 sm:py-20 px-10 lg:px-24'>

                                <div className='flex flex-wrap relative z-10'>

                                    <div className='inne z-10 relative'>
                                        <span className='text-white text-base block lg:tracking-wide'>READY TO DO THIS</span>
                                        <h2 className='text-5xl text-white lg:text-7xl font-extrabold lg:tracking-wide pr-10 py-6 lg:py-12'>Let's get to work</h2>
                                        <a href="tel:+91-9971544661" className="text-base lg:text-lg tracking-widest border-2 px-4 lg:px-8 py-3 inline-block duration-200 border-white rounded-lg hover:bg-white text-white hover:text-[#ee076e]">
                                            <span className=''>CONTACT US</span>
                                        </a>
                                        <Image className='imgFooterDesign w-24 sm:w-48' src={bigLogo} alt="footer shape image" />
                                    </div>

                                </div>

                            </div>
                        </div>




                    </div>
                </div>

<div>
    Hey
</div>


            </footer>
        </>
    )
}

export default Footer




