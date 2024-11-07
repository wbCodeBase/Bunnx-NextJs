import React from 'react'
import Image from 'next/image'


const testimonials = [
    {
        text: "Thanks to pagedone, I feel more informed and confident about my investment decisions than ever before.",
        name: "Emily Johnson",
        role: "Design Lead",
        rating: 4.9,
        image: "https://media.licdn.com/dms/image/v2/D5635AQEhQeOVXs6miw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1730093324958?e=1731582000&v=beta&t=Bxu5-9SUMWtnQx73vRX5Qq4j3kUTEk1JA_Ge1Ikj9zA"
    },
    {
        text: "Pagedone has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily.",
        name: "Olivia Carter",
        role: "Product Designer",
        rating: 4.9,
        image: "https://media.licdn.com/dms/image/v2/D5635AQEhQeOVXs6miw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1730093324958?e=1731582000&v=beta&t=Bxu5-9SUMWtnQx73vRX5Qq4j3kUTEk1JA_Ge1Ikj9zA"
    },
    {
        text: "I've been using pagedone for a year now and it's made managing my finances so much easier.",
        name: "Wyatt Turner",
        role: "CEO",
        rating: 4.9,
        image: "https://media.licdn.com/dms/image/v2/D5635AQEhQeOVXs6miw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1730093324958?e=1731582000&v=beta&t=Bxu5-9SUMWtnQx73vRX5Qq4j3kUTEk1JA_Ge1Ikj9zA"
    },
    {
        text: "Thanks to pagedone, I was able to easily and securely transfer funds to my family overseas.",
        name: "Ethan Miller",
        role: "CEO",
        rating: 4.9,
        image: "https://media.licdn.com/dms/image/v2/D5635AQEhQeOVXs6miw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1730093324958?e=1731582000&v=beta&t=Bxu5-9SUMWtnQx73vRX5Qq4j3kUTEk1JA_Ge1Ikj9zA"
    },
    {
        text: "The customer service team at pagedone went above and beyond to help me resolve a billing issue.",
        name: "Jackson Bennett",
        role: "Design Lead",
        rating: 4.9,
        image: "https://media.licdn.com/dms/image/v2/D5635AQEhQeOVXs6miw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1730093324958?e=1731582000&v=beta&t=Bxu5-9SUMWtnQx73vRX5Qq4j3kUTEk1JA_Ge1Ikj9zA"
    },
    {
        text: "Pagedone is simply the best tool of investment in the market right now.",
        name: "Henry Foster",
        role: "Product Designer",
        rating: 4.9,
        image: "https://media.licdn.com/dms/image/v2/D5635AQEhQeOVXs6miw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1730093324958?e=1731582000&v=beta&t=Bxu5-9SUMWtnQx73vRX5Qq4j3kUTEk1JA_Ge1Ikj9zA"
    }
]


const Testimonial = () => {


    return (
        <>

            <section className="border-t container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-8">

                <h2 className='font-semibold text-orange-500 text-lg'>Testimonial</h2>
                <h4 className='font-semibold text-3xl my-2'>We leverage the latest technologies to deliver top-notch software solutions.</h4>
                <p className='text-md text-gray-800'>Whether you require a complex enterprise software solution or seamless software integration, we will convert your ideas into reality with our long-standing, industry-proven IT consulting and bespoke software development services.</p>


                <section className="flex flex-wrap justify-center gap-10 py-2 mt-6">

                    <div className="w-full h-[30rem] flex items-center justify-center gap-6 overflow-hidden py-2">

                        <MarqueeRow direction="top" />

                        <MarqueeRow direction="bottom" />

                        <MarqueeRow direction="top" />

                    </div>

                </section>



            </section>

        </>
    )
}




function MarqueeRow({ direction }) {
    const animationClass = direction === 'bottom' ? 'animate-marquee-reverse-y' : 'animate-marqueeY'
    const animationClass2 = direction === 'bottom' ? 'animate-marquee2-reverse-y' : 'animate-marqueeY2'

    return (
        <div className="relative flex gap6 flex-col flex-1 overflow-y-hidden py-2 group">


            <div className={`whitespace-nowrap flex flex-col gap-6 ${animationClass} group-hover:pause-animation`}>

                {testimonials.map((testimonial, index) => (
                    TestimonialCard({ testimonial, index })
                ))}

            </div>


            <div className={`absolute flex mt-6 flex-col gap-6 w-full whitespace-nowrap ${animationClass2} group-hover:pause-animation`}>

                {testimonials.map((testimonial, index) => (
                    TestimonialCard({ testimonial, index })
                ))}

            </div>


        </div>
    )
}

function TestimonialCard({ testimonial, index }) {
    return (
        <div
            key={testimonial.name}
            className={`rounded-2xl p-6 transition-all duration-300 hover:shadow-lg ${index % 2 === 0 ? 'bg-[#F8F9FF]' : 'bg-white border'
                }`}
        >
            <p className="text-gray-600 text-wrap mb-8 min-h-[80px]">
                {testimonial.text}
            </p>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Image
                        height={48}
                        width={48}
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="font-semibold text-gray-900">
                            {testimonial.name}
                        </h3>
                        <p className="text-gray-500 text-sm">
                            {testimonial.role}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-1">
                    <svg
                        className="w-5 h-5 text-[#6366F1]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                    </svg>
                    <span className="font-semibold text-[#6366F1]">
                        {testimonial.rating}
                    </span>
                </div>
            </div>
        </div>
    )
}


export default Testimonial;




















