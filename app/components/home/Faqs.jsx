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

                <section className="flex flex-wrap justify-center md:gap-10 gap-5 py-2 my-6">

                    <div className='lg:w-[46%] w-full'>
                        
                        <h2 className='font-semibold text-orange-500 text-xl'>FAQs</h2>
                        <h4 className='font-semibold text-3xl my-2'>Ask what you want</h4>
                        <p className='text-lg gray-800 text-gray-800'>Whether you require a complex enterprise software solution or seamless software integration.</p>


                    </div>

                    <div className="lg:w-[46%] w-full py-2">

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className='text-xl'>Is it accessible?</AccordionTrigger>
                                <AccordionContent className='text-lg gray-800'>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className='text-xl'>Is it styled?</AccordionTrigger>
                                <AccordionContent className='text-lg gray-800'>
                                    Yes. It comes with default styles that matches the other
                                    components&apos; aesthetic.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className='text-xl'>Is it animated?</AccordionTrigger>
                                <AccordionContent className='text-lg gray-800'>
                                    Yes. It&apos;s animated by default, but you can disable it if you
                                    prefer.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className='text-xl'>We are strong, we are great. But who we are?</AccordionTrigger>
                                <AccordionContent className='text-lg gray-800'>
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