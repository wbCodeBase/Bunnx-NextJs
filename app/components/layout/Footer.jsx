import React from 'react'
import './layout.css'
import Image from 'next/image'
import Link from 'next/link'
import { Linkedin, Twitter, Facebook, Youtube, Instagram } from 'lucide-react'

import bigLogo from "/public/big-logo.png"


const Footer = () => {
    return (
        <>

            <footer className="md:pt-8 pt-0">

                <div className="relative z-">
                    <div className="flex flex-wrap items-end mx-0">

                        <div id='contact-us' className='lg:w-1/2 w-full flex-shrink-0 flex-grow-0 relative'>
                            <div className='footer-left lg:rounded-tr-lg px-8 py-12 lg:px-28 relative'>
                                <div className='z-10 relative'>


                                    <span className='text-white text-3xl block lg:tracking-wide mb-4 text-center font-semibold'>Let&apos;s Talk</span>


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
                                            <textarea id='message' placeholder='Type your concern here' className='w-full rounded-lg p-2 mt-1' type="text" />
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
                                        <h2 className='text-5xl text-white lg:text-7xl font-extrabold lg:tracking-wide pr-10 py-6 lg:py-12'>Let&apos;s get to work</h2>
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

                    <div className="bg-[#323466] text-white sm:py-14 py-8">
                        <div className="container mx-auto px-6 sm:px-24">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                                {/* Who we are & Resources Section */}
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-md font-medium mb-4">Who we are</h3>
                                        <ul className="space-y-2 text-gray-400 text-sm">
                                            <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
                                            <li><Link href="/founder" className="text-gray-300 hover:text-white">Founder</Link></li>
                                            <li><Link href="/testimonials" className="text-gray-300 hover:text-white">Testimonials</Link></li>
                                            <li><Link href="/faqs" className="text-gray-300 hover:text-white">FAQs</Link></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-md font-medium mb-4">Resources</h3>
                                        <ul className="space-y-2 text-gray-400 text-sm">
                                            <li><Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
                                            <li><Link href="/guides" className="text-gray-300 hover:text-white">Guides</Link></li>
                                            <li><Link href="/case-studies" className="text-gray-300 hover:text-white">Case Studies</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Digital Transformation Section */}
                                <div>
                                    <h3 className="text-md font-medium mb-4">Digital Transformation</h3>
                                    <ul className="space-y-2 text-gray-400 text-sm">
                                        <li><Link href="/ai-transformation" className="text-gray-300 hover:text-white">AI-powered Transformation</Link></li>
                                        <li><Link href="/blockchain" className="text-gray-300 hover:text-white">Blockchain-led Decentralization</Link></li>
                                        <li><Link href="/cloud" className="text-gray-300 hover:text-white">Cloud Migration</Link></li>
                                        <li><Link href="/ar-vr" className="text-gray-300 hover:text-white">AR/VR Integration</Link></li>
                                        <li><Link href="/cybersecurity" className="text-gray-300 hover:text-white">Enterprise-Grade Cybersecurity</Link></li>
                                        <li><Link href="/modernization" className="text-gray-300 hover:text-white">Legacy Software Modernization</Link></li>
                                    </ul>
                                </div>

                                {/* Industries Section */}
                                <div className='sm:ml-12 ml-0'>
                                    <h3 className="text-md font-medium mb-4">Industries</h3>
                                    <ul className="space-y-2 text-gray-400 text-sm">
                                        <li><Link href="/healthcare" className="text-gray-300 hover:text-white">Healthcare</Link></li>
                                        <li><Link href="/logistics" className="text-gray-300 hover:text-white">Logistics</Link></li>
                                        <li><Link href="/ecommerce" className="text-gray-300 hover:text-white">eCommerce</Link></li>
                                        <li><Link href="/entertainment" className="text-gray-300 hover:text-white">Entertainment</Link></li>
                                        <li><Link href="/travel" className="text-gray-300 hover:text-white">Travel</Link></li>
                                        <li><Link href="/wellness" className="text-gray-300 hover:text-white">Wellness</Link></li>
                                        <li><Link href="/social-media" className="text-gray-300 hover:text-white">Social Media</Link></li>
                                    </ul>
                                </div>

                                {/* India Office Section */}
                                <div className='lg:col-span-2'>
                                    <div className="flex items-center gap-2 mb-4">
                                        <Image src={`https://bunnx.com/sites/images/india-flag.svg`} height={26} width={26} alt='Indian flag' />
                                        <h3 className="text-md font-medium">India Offices:</h3>
                                    </div>
                                    <div className="bg-[#494b77] p-3 rounded-lg">
                                        <h4 className="font-semibold text-md mb-2">Noida</h4>
                                        <p className="text-gray-300 text-sm">
                                            H-160, BSI Business Park, Sector-63,<br />
                                            Noida, Uttar Pradesh 201301
                                        </p>
                                        <Link href="tel:+15614633233" className="text-gray-300 hover:text-white text-sm">
                                            +1 561 463 3233
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Section */}
                            <div className="mt-6 pt-8 border-t border-gray-700">
                                <div className="flex flex-col md:flex-row justify-between items-center">
                                    <div className="flex gap-6 mb-4 md:mb-0">
                                        <Link href="https://linkedin.com" className="text-gray-300 hover:text-white">
                                            <Linkedin className="w-6 h-6" />
                                        </Link>
                                        <Link href="https://twitter.com" className="text-gray-300 hover:text-white">
                                            <Twitter className="w-6 h-6" />
                                        </Link>
                                        <Link href="https://facebook.com" className="text-gray-300 hover:text-white">
                                            <Facebook className="w-6 h-6" />
                                        </Link>
                                        <Link href="https://youtube.com" className="text-gray-300 hover:text-white">
                                            <Youtube className="w-6 h-6" />
                                        </Link>
                                        <Link href="https://instagram.com" className="text-gray-300 hover:text-white">
                                            <Instagram className="w-6 h-6" />
                                        </Link>
                                    </div>
                                    <div className="flex gap-4 mb-4 md:mb-0">
                                        <Link href="/terms" className="text-gray-500 hover:text-white text-sm">
                                            Term of Use
                                        </Link>
                                        <span className="text-gray-500">|</span>
                                        <Link href="/privacy" className="text-gray-500 hover:text-white text-sm">
                                            Privacy Policy
                                        </Link>
                                    </div>
                                    <div className="text-gray-500 text-sm">
                                        ©2024 Bunnx All Rights Reserved.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </footer>
        </>
    )
}

export default Footer




