"use client"

import Lottie from "lottie-react";
// import animationData from "/public/pageAnimations/heroHome.json";
// import animationData from "/public/pageAnimations/heroHomeBlue.json";
import animationData from "/public/pageAnimations/animation.json";
import Image from "next/image";


const HeroSection = () => {
  return (
    <>
      <section>
        <div className="flex items-center justify-center flex-wrap container mx-auto max-w-screen-lg xl:max-w-screen-xl">

          <div className="w-full lg:w-1/2 py-10 px-4 flex gap-20 flex-col sm:pt-18">
            <div>
              <span className="lg:text-3xl text-2xl font-medium">Enterprise</span>
              <h1 className="lg:text-5xl text-3xl my-6 font-semibold">Software Development Company</h1>
              <p className="lg:text-xl text-lg my-6 font-medium">Custom Software Development Services and Solutions to build top-tier intelligent enterprises with speed and agility.</p>

              {/* <button> Contact Us</button> */}
              <button className="bg-orange-500 text-white px-6 py-3 rounded-full text-md font-medium hover:bg-orange-600 transition-colors duration-300">
                Contact Us
              </button>
            </div>

            {/* <div className="flex justify-en">

              <div className="text-white rounded-xl p-4 bg-gray-800 shadow-md">
                <p className="font-semibold text-sm text-white">Running Strong</p>

                <div className="flex gap-10 items-center mt-2">

                  <div className="flex items-center justify-center flex-col">
                    <span className="text-3xl font-bold">60+</span>
                    <span className="text-md font-medium">Projects</span>
                  </div>
                  <div className="flex items-center justify-center flex-col">
                    <span className="text-3xl font-bold">100+</span>
                    <span className="text-md font-medium">Experts</span>
                  </div>
                  <div className="flex items-center justify-center flex-col">
                    <span className="text-3xl font-bold">9+</span>
                    <span className="text-md font-medium">Years</span>
                  </div>

                </div>
              </div>

            </div> */}

          </div>

          <div className="w-full lg:w-1/2">

            <Lottie animationData={animationData} className="lg:h-[30rem] h-80" loop={true} />

            {/* <div className="rounded-xl p-4 bg-gray800 bg[#261E80] bg[#007ff2] shadow-md">
              <p className="font-semibold text-sm text-white">Brands That Trust Us</p>

              <div className="flex justify-around items-center mt-2">
                <Image
                  className="w-auto lg:h-auto h-12"
                  src={`https://cdn-server.hiddenbrains.com/uploads/dhl_white_9f5e985a15.png`}
                  alt="Bunnx logo"
                  width={125}
                  height={30}
                />
                <Image
                  className="w-auto lg:h-auto h-12"
                  src={`https://cdn-server.hiddenbrains.com/uploads/stc_white_8a13a3a726.png`}
                  alt="Bunnx logo"
                  width={125}
                  height={30}
                />
                <Image
                  className="w-auto lg:h-auto h-12"
                  src={`https://cdn-server.hiddenbrains.com/uploads/omv_white_f01a8abcec.png`}
                  alt="Bunnx logo"
                  width={125}
                  height={30}
                />
                <Image
                  className="w-auto lg:h-auto h-12"
                  src={`https://cdn-server.hiddenbrains.com/uploads/dhl_white_9f5e985a15.png?ver-20241018185036`}
                  alt="Bunnx logo"
                  width={125}
                  height={30}
                />
                <Image
                  className="w-auto lg:h-auto h-12"
                  src={`https://cdn-server.hiddenbrains.com/uploads/stc_white_8a13a3a726.png`}
                  alt="Bunnx logo"
                  width={125}
                  height={30}
                />
              </div>

            </div> */}


          </div>

        </div>
      </section>
    </>
  )
}

export default HeroSection






{/* <section className="w-full max-w-6xl mx-auto">


        <div className="rounded-xl p-4 bg-gray400 bg-[#261E80] shadow-md">
          <p className="font-semibold text-sm text-white text-center">Brands That Trust Us</p>

          <div className="flex justify-around items-center mt-6">
            <Image
              className="w-auto lg:h-auto h-12"
              src={`https://cdn-server.hiddenbrains.com/uploads/dhl_white_9f5e985a15.png`}
              alt="Bunnx logo"
              width={125}
              height={30}
            />
            <Image
              className="w-auto lg:h-auto h-12"
              src={`https://cdn-server.hiddenbrains.com/uploads/stc_white_8a13a3a726.png`}
              alt="Bunnx logo"
              width={125}
              height={30}
            />
            <Image
              className="w-auto lg:h-auto h-12"
              src={`https://cdn-server.hiddenbrains.com/uploads/omv_white_f01a8abcec.png`}
              alt="Bunnx logo"
              width={125}
              height={30}
            />
            <Image
              className="w-auto lg:h-auto h-12"
              src={`https://cdn-server.hiddenbrains.com/uploads/dhl_white_9f5e985a15.png?ver-20241018185036`}
              alt="Bunnx logo"
              width={125}
              height={30}
            />
            <Image
              className="w-auto lg:h-auto h-12"
              src={`https://cdn-server.hiddenbrains.com/uploads/stc_white_8a13a3a726.png`}
              alt="Bunnx logo"
              width={125}
              height={30}
            />
          </div>

        </div>


      </section> */}