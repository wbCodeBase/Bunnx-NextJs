"use client"

import * as React from 'react';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const Faqs = () => {
    return (
        <>


            <section className="border-t container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-8">

                {/* <h2 className='font-semibold text-orange-500 text-lg'>Our Technology Expertise</h2>
                <h4 className='font-semibold text-3xl my-2'>We leverage the latest technologies to deliver top-notch software solutions.</h4>
                <p className='text-md text-gray-800'>Whether you require a complex enterprise software solution or seamless software integration, we will convert your ideas into reality with our long-standing, industry-proven IT consulting and bespoke software development services.</p> */}


                <section className="flex flex-wrap justify-center md:gap-10 gap-5 py-2 my-6">

                    <div className='lg:w-[46%] w-full'>
                        {/* <h5 className='font-semibold text-2xl'>We done our best here</h5>
                        <p className='mt-2 text-md'>We leverage the latest technologies to deliver top-notch software solutions. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda illum repudiandae animi vitae ab dolore nam.</p> */}


                        <h2 className='font-semibold text-orange-500 text-lg'>FAQs</h2>
                        <h4 className='font-semibold text-3xl my-2'>Ask what you want</h4>
                        <p className='text-md text-gray-800'>Whether you require a complex enterprise software solution or seamless software integration.</p>


                    </div>

                    <div className="lg:w-[46%] w-full py-2">

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className='text-lg'>Is it accessible?</AccordionTrigger>
                                <AccordionContent className='text-md'>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className='text-lg'>Is it styled?</AccordionTrigger>
                                <AccordionContent className='text-md'>
                                    Yes. It comes with default styles that matches the other
                                    components&apos; aesthetic.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className='text-lg'>Is it animated?</AccordionTrigger>
                                <AccordionContent className='text-md'>
                                    Yes. It&apos;s animated by default, but you can disable it if you
                                    prefer.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className='text-lg'>Is it animated?</AccordionTrigger>
                                <AccordionContent className='text-md'>
                                    Yes. It&apos;s animated by default, but you can disable it if you
                                    prefer.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>


                    </div>

                </section>

            </section>


        </>
    )
}

export default Faqs