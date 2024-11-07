"use client"

import CountUp from 'react-countup';

export default function NumericCounterInfo() {

    return (
        <>

            <div className="antialiased my10 -translatey-16">

                <main className="flex flex-col justify-center overflow-hidden">
                    <div className="w-full rounded-lg max-w6xl bg-orange-50 mx-auto px-4 md:px-6 py-6">

                        {/* <h2 className='font-semibold text-orange-500 text-lg text-center'>Bunnx</h2>
                        <h4 className='font-quando font-bold text-xl sm:text-2xl my-2 text-center'>World Best Development Service Provider</h4> */}
                       

                        <section className="font-quando grid gap-6 grid-cols-2 md:grid-cols-4 md:gap-10">


                            <article className='flex justify-cente items-center flex-col p-4 rounded-lg'>

                                <h2>
                                    <span className="flex tabular-nums text-4xl font-bold mb-2 duration-\[3s\] ease-out" >
                                        <span className="text-orange-500"><CountUp end={16} enableScrollSpy />+</span>
                                    </span>
                                </h2>
                                {/* <span className="inline-flex text-md font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-400 mb-2">Excellence</span> */}
                                <p className="text-md text-gray-700 text-center">Years Experience</p>
                            </article>

                            <article className='flex justify-cente items-center flex-col p-4 rounded-lg'>

                                <h2>
                                    <span className="flex tabular-nums text-4xl font-bold mb-2 duration-\[3s\] ease-out" >
                                        <span className="text-orange-500"><CountUp end={60} enableScrollSpy />+</span>
                                    </span>
                                </h2>
                                {/* <span className="inline-flex font-semibold text-md bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-400 mb-2">Inception</span> */}
                                <p className="text-md text-gray-700 text-center">Successful Projects</p>
                            </article>

                            <article className='flex justify-cente items-center flex-col p-4 rounded-lg'>

                                <h2>
                                    <span className="flex tabular-nums text-4xl font-bold mb-2 duration-\[3s\] ease-out" >
                                        <span className="text-orange-500"><CountUp end={180} enableScrollSpy />+</span>
                                    </span>
                                </h2>
                                {/* <span className="inline-flex text-md font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-400 mb-2">Events</span> */}
                                <p className="text-md text-gray-700 text-center">Satisfied Clients</p>
                            </article>


                            <article className='flex justify-cente items-center flex-col p-4 rounded-lg'>

                                <h2>
                                    <span className="flex tabular-nums text-4xl font-bold mb-2 duration-\[3s\] ease-out" >
                                        <span className="text-orange-500"><CountUp end={12} enableScrollSpy />+</span>
                                    </span>
                                </h2>
                                {/* <span className="inline-flex text-md font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-400 mb-2">Events</span> */}
                                <p className="text-md text-gray-700 text-center">Countries</p>
                            </article>



                        </section>


                        {/* <div className="mx-1 px-2 mb-6 text-center font-quando">
                            <div className="text-gray-700 p-2 font-semibold text-sm rounded-lg">
                            Yoo
                            </div>
                        </div> */}

                    </div>

                </main>


            </div>


        </>)
}
