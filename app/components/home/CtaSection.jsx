import React from 'react'
import Image from 'next/image';
import Link from "next/link";

const CtaSection = () => {
    return (
        <>


            <section className='container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-10'>

                <div style={{ backgroundImage: "url('https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg" }} className="rounded-md container mx-auto max-w-screen-xl px-4 md:px-10 py-10 bg-center bg-cover bg-no-repeat">

                    <div className="h-full w-full flex gap-8 items-center flex-wrap justify-between sm:px-10 px-4 py-6 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-50">

                        <div className='text-white flex gap-3 flex-col lg:items-start items-center xl:w-[48%] w-full'>
                            <span className='italic'>Bring Your Ideas to Life</span>
                            <h3 className='text-3xl font-semibold'>Turn Your Vision into Reality with Custom Web Solutions!</h3>
                            <p>We specialize in turning business ideas into stunning, high-performance websites and applications.</p>
                        </div>

                        <div className='xl:w-[48%] w-full flex justify-center items-center'>
                            <Link href="tel:+91-9971544661" className="px-6 mt-4 py-3 bg-white/30 backdrop-blur-md text-white font-semibold rounded-full shadow-md hover:bg-white/40 transition duration-300 border border-white/20">
                                Kickstart Your Project
                            </Link>
                            {/* <Image className='transform xl:scale150' src={"/ctaRightImg.webp"} height={230} width={230} alt="ctaSectionImage" /> */}
                            {/* <Image className='transform xl:scale-150' src="https://static.vecteezy.com/system/resources/previews/020/962/924/non_2x/software-engineer-graphic-clipart-design-free-png.png" height={200} width={200} alt="ctaSectionImage" /> */}
                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default CtaSection