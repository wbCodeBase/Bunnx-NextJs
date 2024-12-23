import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react'

const engagement = [
    {
        head: "Monthly Based",
        lists: ["Hire offshore staff for up to 160 hours a month", "Manage the team using your own methodologies", "Get timely updates on work progress", "Monthly billing cycles"]
    },
    {
        head: "Hourly Based",
        lists: ["Pay for the work done in hours", "Add or revoke hours based on requirements", "Communicate via your own preferred channels", "Real-time updates via timesheet"]
    },
    {
        head: "Fixed-Cost Projects",
        lists: ["Fix the project cost before getting started", "Pre-defined scope and deliverables established prior to commencement", "Flexibility to change scope at nominal charges", "Establishment of a fixed timeline for project completion"]
    },
]

export default function EngagementModel({ hiredevOf }) {
    return (
        <>
            <section className="container mx-auto max-w-screen-xl px-4 md:px-6 py-10">

                {/* <h2 className='font-semibold text-orange-500 text-lg'>Engagement Models to Hire {hiredevOf}</h2>
                <h4 className='font-semibold text-3xl my-2'>Flexible Engagement Models to Hire Expert {hiredevOf}</h4>
                <p className='text-md text-gray-800'>Choose from flexible engagement models to hire experienced {hiredevOf} who adapt to your business needs, ensuring agility, expertise, and scalability. Our models are designed to align with your project requirements for optimal results.</p> */}

                <h2 className='font-semibold text-orange-500 text-lg'>Choose from our hiring models</h2>
                <h4 className='font-semibold text-3xl my-2'>Flexible Hiring Models to Hire Expert {hiredevOf}</h4>
                <p className='text-md text-gray-800'>Our team will recommend the most appropriate engagement model for your project, taking into account its complexity, vision, and overall product concept.</p>



                <div className='flex items-cente justify-center flex-wrap gap-5 mt-12'>

                    {engagement && engagement.map((engageItems, i) =>

                        <div key={i} className="origin-bottom hover:scale-y-105 transform transition-all duration-300 ease-in-out border rounded-2xl group hover:text-white hover:shadow-lg bg-yellow-50 hover:bg-[#00214E] p-6 justify-between flex flex-col w-96 relative">
                            <div>
                                
                                <h3 className='font-semibold text-gray-800 group-hover:text-white mb-3 text-3xl'>{engageItems.head}</h3>

                                <ul className='text-sm space-y-4 my-6'>
                                    {engageItems.lists && engageItems.lists.map((listItems, i) =>
                                        <li key={i} className='flex gap-3'> <CheckCircle2 className="h-5 w-5 text-amber-500" />{listItems}</li>
                                    )}
                                </ul>
                            </div>

                            <Link className='text-lg bg-amber-500 group-hover:bg-white group-hover:text-black rounded-lg mt-4 text-white text-center p-2' href="/hire/soon"> Hire Us </Link>
                        </div>
                    )}


                </div>

            </section>
        </>
    )
}
