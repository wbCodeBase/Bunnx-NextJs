import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaLocationArrow } from "react-icons/fa";

const ChooseUs = () => {
  return (

    <>
      <section className="container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-12">


        <div className='grid sm:grid-cols-2 gap-10 grid-cols-1'>

          <div className="rounded-xl flex items-center justify-center flex-col gap-5 px4">
            {/* <h2 className='font-semibold text-orange-500 text-lg'>Our Success Stories</h2> */}
            <h4 className='font-bold sm:text-4xl text-2xl my-2'>Choose Bunnx for Your Next Software Development Project</h4>
            <p className='text-md text-gray-800'>Featuring smooth and effortless software development services customized specifically to your business needs. Our objective at Bunnx is to quickly produce secure software product offerings. </p>
            <p className='text-md text-gray-800'>We provide software that is safe and easily expandable to meet the needs of your expanding business. Our interest is developing pertinent tech skills to meet industry-specific needs. </p>

            
            <div className='flex items-center'>
              <Link href="/services/mobile-app" className='flex items-center justify-center gap-2 bg[#261E80] p-2 pl-3 font-medium text-md bg-orange-500 rounded-full mt-4 text-white'><span> Get Started </span> <span className='bg-white rounded-full p-2 text-black'> <FaLocationArrow /> </span></Link>
            </div>

          </div>

          <div className="borde rounded-xl p4 flex justify-center items-center flex-col text-center relative">
            <Image src="https://cdn-eaocj.nitrocdn.com/bRrUvINWEqyoXCOGVIRtXKCAELdOwonU/assets/images/optimized/rev-89fb845/nimapinfotech.com/wp-content/uploads/2024/08/Software-Development.jpg" alt="component image" width={500} height={600} />

          </div>

        </div>


      </section></>
  )
}

export default ChooseUs