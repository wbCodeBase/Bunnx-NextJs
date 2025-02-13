import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

// Dummy data for engagement options
const engagement = [
    {
        head: "Monthly Based",
        lists: [
            "Hire offshore staff for up to 160 hours a month",
            "Manage the team using your own methodologies",
            "Get timely updates on work progress",
            "Monthly billing cycles",
        ],
    },
    {
        head: "Hourly Based",
        lists: [
            "Pay for the work done in hours",
            "Add or revoke hours based on requirements",
            "Communicate via your own preferred channels",
            "Real-time updates via timesheet",
        ],
    },
    {
        head: "Fixed-Cost Projects",
        lists: [
            "Fix the project cost before getting started",
            "Pre-defined scope and deliverables established prior to commencement",
            "Flexibility to change scope at nominal charges",
            "Establishment of a fixed timeline for project completion",
        ],
    },
];

// Dummy data for different services
const engageMentModelData = [
    {
        slug: "front-end-development-services",
        h2: "Choose From Our Hiring Models",
        h4: "Hire The Best Front End Developer with the Best Engagement Models",
        p: "We analyze your project’s requirements to recommend the ideal collaboration model. Our three models are designed to ensure every brand acquires the services that match its needs and budget.",
        engagement: engagement,
    },
    {
        slug: "back-end-development-services",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top Back-End Developers Through Engagement Models",
        p: "Our engagement models are designed with one goal in mind: to deliver the right back-end development solution for your brand. We analyze your project’s scope, goals, and timeline to propose a customized collaboration plan.",
        engagement: engagement,
    },
    {
        slug: "software-development-consultants",
        h2: "Choose From Hiring Models",
        h4: "Collaborate with Top Software Developer Through Engagement Models",
        p: "At our software consultancy company, our team helps businesses grow by building strong customer relationships. We make solutions that are simple yet powerful, using trusted platforms like Salesforce and Microsoft Dynamics to deliver results that matter. Our IT software consulting services cover everything from smart contact management and automating your sales pipeline to giving you detailed reports that track customer interactions effectively.",
        engagement: engagement,
    },
    {
        slug: "crm-software-development-services",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top CRM Software Developer Through Engagement Models",
        p: "Our engagement models are designed with one goal in mind: to deliver the right back-end development solution for your brand. We analyze your project’s scope, goals, and timeline to propose a customized collaboration plan.",
        engagement: engagement,
    },
    {
        slug: "custom-software-development-services",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top App Developers Through Engagement Models",
        p: "We offer custom software development with flexible models tailored for any project, maximizing resources, meeting timelines, and achieving your goals.",
        engagement: engagement,
    },
    {
        slug: "best-software-development-company-in-india",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top Software Developer Through Engagement Models",
        p: "Our team will recommend the most appropriate engagement model for your project, taking into account its complexity, vision, and overall product concept.",
        engagement: engagement,
    },
    {
        slug: "it-consulting-services",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top CRM Software Developers Through Engagement Models",
        p: "Our engagement models are based on the size of the project and timeline. After you've chosen a plan that works for you, we'll help with a single project or provide ongoing support. Our team believes that the client should be on the same page with us to make a real difference.",
        engagement: engagement,
    },
    {
        slug: "mobile-app-development-services",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top Mobile App Developers Through Engagement Models",
        p: "We understand that your mobile app development will require a different approach. That’s why we offer various engagement models. If you need a team to take full ownership of your mobile app development or a project-based approach for short-term goals, our services are for all types of your workflow. With us, you’ll get a partnership that’s as precise as your app demands.",
        engagement: engagement,
    },
    {
        slug: "api-development-and-integration-services",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top API Developers Through Engagement Models",
        p: "Our engagement models are designed with one goal in mind: to deliver the right API Development & Integration Solution for your brand. We analyze your project’s scope, goals, and timeline to propose a customized collaboration plan.",
        engagement: engagement,
    },
    {
        slug: "agile-consulting-services",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top Agile Consultants Through Engagement Models",
        p: "Agile is all about change, and so are we. Whether you're fine-tuning an existing process or building a brand-new approach, we offer flexible collaboration models to suit your project’s needs.",
        engagement: engagement,
    },
    {
        slug: "application-development-services",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top App Developers Through Engagement Models",
        p: "Our engagement models are built by our experts for ongoing support. We use a project-based approach for specific tasks or a time-and-materials model. Each model is designed to get the best from your resources, match your timeline, and deliver exactly what your project requires.",
        engagement: engagement,
    },
    {
        slug: "website-development-services",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top Website Developers Through Engagement Models",
        p: "Choosing the right team structure is crucial when building or upgrading your website. Some projects need ongoing collaboration, while others require extra hands or short-term expertise. Our engagement models are built to match your specific needs, offering flexibility and technical expertise at every step of the development process.",
        engagement: engagement,
    },
    {
        slug: "cms-development-services",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top CMS Developers Through Engagement Models",
        p: "Some CMS projects need dedicated developers from start to finish. Others require specialized expertise at critical stages. And sometimes, all it takes is the right team to execute a well-planned strategy. Whatever your case, we let you decide how you want to work with us.",
        engagement: engagement,
    },
    {
        slug: "full-stack-development-services",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top Full Stack Developers Through Engagement Models",
        p: "Our models focus on one thing: delivering the perfect back-end solution for your brand. By understanding your project’s aim, goals, and deadlines, we craft a personalized collaboration plan that fits your needs.",
        engagement: engagement,
    },
    {
        slug: "ecommerce-development-company",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top eCommerce Developers Through Engagement Models",
        p: "Our engagement models are designed with one goal in mind: to deliver the right ecommerce development India solution for your brand. We analyze your project’s scope, goals, and timeline to propose a customized collaboration plan.",
        engagement: engagement,
    },
    {
        slug: "ecommerce-consulting-services",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top CRM Software Developers Through Engagement Models",
        p: "Creating a successful ecommerce platform is more than just setting up an online store. It's about building a system that can grow with your business and offer a seamless experience to your customers. If you’re just starting or already established, we have the right mix of expertise and flexibility.",
        engagement: engagement,
    },
    {
        slug: "web-application-development-services",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top Web App Developers Through Engagement Models",
        p: "Web application development is not an easy process and neither is hiring. If you're looking for a team to jump in for a specific phase, we have models for you. You can get long-term commitments and project-based collaborations with this to get your work within deadlines. No unnecessary processes, no rigid contracts—just the right talent at the right time.",
        engagement: engagement,
    },
];


const getCtaContent = (data, serviceDetailPageSlug) => {
    // First try to find content matching the page slug
    const contentBySlug = data.find(item => item?.slug === serviceDetailPageSlug);
    
    if (contentBySlug) {
      return contentBySlug;
    }
  
    // Fallback to default content if no match
    return data.find(item => item?.slug === "best-software-development-company-in-india") || data[0];
  };

export default function EngagementModel({ serviceDetailPageSlug }) {
    // Find the data matching the slug
    const content = getCtaContent(engageMentModelData, serviceDetailPageSlug);

    // Handle case where no content matches the slug
    if (!content) {
        return <p>Content not found for the provided slug.</p>;
    }

    return (
        <>
            <section className="container mx-auto max-w-screen-xl px-4 md:px-6 py-10">
                <h4 className="font-semibold text-orange-500 text-lg">
                    {content.h2}
                </h4>
                <h2 className="font-semibold text-3xl my-2">{content.h4}</h2>
                <p className="text-md text-gray-800">{content.p}</p>

                <div className="flex justify-center flex-wrap gap-5 mt-12">
                    {content.engagement &&
                        content.engagement.map((engageItems, i) => (
                            <div
                                key={i}
                                className="origin-bottom hover:scale-y-105 transform transition-all duration-300 ease-in-out border rounded-2xl group hover:text-white hover:shadow-lg bg-yellow-50 hover:bg-[#00214E] p-6 justify-between flex flex-col w-96 relative"
                            >
                                <div>
                                    <h3 className="font-semibold text-gray-800 group-hover:text-white mb-3 text-3xl">
                                        {engageItems.head}
                                    </h3>

                                    <ul className="text-sm space-y-4 my-6">
                                        {engageItems.lists &&
                                            engageItems.lists.map((listItems, i) => (
                                                <li key={i} className="flex gap-3">
                                                    <CheckCircle2 className="h-5 w-5 text-amber-500" />
                                                    {listItems}
                                                </li>
                                            ))}
                                    </ul>
                                </div>

                                <Link
                                    className="text-lg bg-amber-500 group-hover:bg-white group-hover:text-black rounded-lg mt-4 text-white text-center p-2"
                                    href="/hire/node-developer"
                                >
                                    Hire Us
                                </Link>
                            </div>
                        ))}
                </div>
            </section>
        </>
    );
}
