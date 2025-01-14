'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import lightdotnetmodalicon from '/public/iconMethodology/light-dot-net-modal-icon.webp';
import teamAug from '/public/iconMethodology/teamAug.webp';
import ProjectBased from '/public/iconMethodology/ProjectBased.webp';

const serviceData = {
  'front-end-development-services': {
    title: 'Choose From Our Front End Development Service Models ',
    description:
      "We customize engagement strategies to match your project’s vision, scale, and complexity. Our hiring models ensure you have the right team and services at your disposal to ensure smooth services.",
    models: [
      {
        title: 'Dedicated Front End Team',
        icon: lightdotnetmodalicon,
        subtitle: '(also known as product interface teams)',
        sections: [
          {
            type: 'para',
            content:
              "Our front-end development team is a highly skilled, autonomous unit composed of diverse roles, including UI/UX designers, front-end engineers, and component developers. Each role is made to deliver sleek, modern, and responsive web interfaces. Project management is collaboratively handled by a Scrum Master and the client’s product owner.",
          },
          {
            type: 'list',
            content:
              'Agile processes,Clear and competitive pricing,Simplified payment structures,Scalable solutions,Modern front-end technologies,Suitable for startups,Flexible engagement models',
          },
        ],
      },
      {
        title: 'Front End Team Augmentation',
        icon: teamAug,
        subtitle: '(also known as team extension or staff augmentation)',
        sections: [
          {
            type: 'para',
            content:
              "Suitable for projects of any scale, our team augmentation model integrates specialized front-end developers into your existing team to bridge UI development gaps. Augmented experts collaborate as an extension of your local or distributed team, participating in daily stand-ups and reporting directly to your project leads.",
          },
          {
            type: 'list',
            content:
              'Scalable On-Demand Expertise,Rapid Deployment & Cost Optimization,Monthly Billing,Eliminate Recruitment Overhead,Transparent and Predictable Cost Structures',
          },
        ],
      },
      {
        title: 'Project Based',
        icon: ProjectBased,
        subtitle: '(best suited for small-mid scale front end projects)',
        sections: [
          {
            type: 'para',
            content:
              "Fixed Price Model:\nIdeal for front-end projects with well-defined UI specifications, scope, deliverables, and acceptance criteria. Under this model, we provide a detailed project evaluation and a fixed cost estimate. It is suitable for small- to medium-scale front-end development projects and has comprehensive documentation and clear requirements.",
          },
          {
            type: 'para',
            content:
              "Time & Material Model:\nDesigned for projects with evolving requirements and complex UI/UX needs, where precise cost estimation is not feasible. This model allows front-end developers to be engaged on an hourly or resource-based billing structure.",
          },
        ],
      },
    ],
  },
  'back-end-development-services': {
    title: 'Choose From Back End Development Service Models',
    description:
      "Every project comes with its own set of challenges, whether it’s maintaining system reliability, integrating third-party services, or managing large datasets. Our models are designed to allow you to bring in the right expertise at each stage—whether it's a single developer for a task or a team for ongoing maintenance.",
    models: [
      {
        title: 'Dedicated Back End Team',
        icon: lightdotnetmodalicon,
        subtitle: '(also known as product operations team)',
        sections: [
          {
            type: 'para',
            content:
              "A team from the top back end development company is the ideal solution for projects that require long-term collaboration. With this model, you get a fully dedicated group of back-end developers who work exclusively on your project. This team integrates with your internal processes, and maintains high-quality standards throughout the development lifecycle.",
          },
          {
            type: 'list',
            content:
              'Full-time, dedicated back-end developers,Integration with your existing team and workflows.,Scalable team size,Complete ownership of project deadlines.,Long-term collaboration,Specialized expertise in back-end technologies,Flexibility to adapt and adjust team composition',
          },
        ],
      },
      {
        title: 'Back End Team Augmentation',
        icon: teamAug,
        subtitle: '(also known as team extension or staff augmentation)',
        sections: [
          {
            type: 'para',
            content:
              "Back-end team augmentation is a flexible solution that allows you to extend your existing team with additional specialized resources. This model is perfect when you need extra expertise for specific tasks or to scale up quickly during critical project phases. By adding expert back-end developers to your team, you can accelerate development.",
          },
          {
            type: 'list',
            content:
              'Ideal for scaling up development resources during peak project phases.,Temporary or long-term support.,Cost-effective solution for handling surges in work without hiring full-time staff.,Reduces the overhead of recruitment.,Facilitates knowledge transfer and skill development.',
          },
        ],
      },
      {
        title: 'Project Based',
        icon: ProjectBased,
        subtitle: '(best suited for small-mid scale back end projects)',
        sections: [
          {
            type: 'para',
            content:
              "Fixed Price Model: It is perfect for back-end projects with well-defined requirements, specifications, and deliverables. This approach works best when the scope is clear. Ideal for small- to medium-scale back-end development, this model makes sure that both you and the development team are aligned on objectives.",
          },
          {
            type: 'para',
            content:
              "Time & Material Model: It is designed for back-end projects with dynamic requirements and evolving scopes. This model allows for flexible engagement, where developers work based on hourly or resource-based billing. It’s perfect for projects with uncertain or rapidly changing requirements, such as complex UI/UX needs.",
          },
        ],
      },
    ],
  },
  'best-software-development-company-in-india': {
    title: 'Choose From Our Software Development Service Models',
    description:
      "We make engagement strategies as per your vision, size, and complexity. Our hiring options include the right team and services. And this is what makes us the best custom software development company.",
    models: [
      {
        title: 'Dedicated Front End Team',
        icon: lightdotnetmodalicon,
        subtitle: '(Your all-in-one solution)',
        sections: [
          {
            type: 'para',
            content:
              "Our team is a group of experts working towards your project. It consists of software developers, designers, and engineers who work together to deliver high-quality results. They are responsible for modern interfaces and backend functionality. Project management is a shared effort between our Scrum Master and your team’s product owner.",
          },
          {
            type: 'list',
            content:
              'Simple processes and fast delivery,Latest approaches for your future growth,Experts working with modern technologies,Engagement models for all types of clients,Affordable pricing options,Model made for startups or growing businesses',
          },
        ],
      },
      {
        title: 'Team Augmentation',
        icon: teamAug,
        subtitle: '(Expand your team when you need it)',
        sections: [
          {
            type: 'para',
            content:
              "If you already have a team but need extra help, our augmentation model is perfect. We’ll add skilled developers to your existing team to fill in any gaps. These experts will work as an extension of your team, joining your daily meetings and reporting directly to your leads.",
          },
          {
            type: 'list',
            content:
              'Access to skilled developers,Quick deployment and cost savings,Monthly billing with no recruitment hassle,Predictable and transparent costs',
          },
        ],
      },
      {
        title: 'Project Based Model',
        icon: ProjectBased,
        subtitle: '(For clearly defined projects)',
        sections: [
          {
            type: 'para',
            content:
              "If your project has a set scope, deliverables, and timelines, get our fixed-price model. We’ll provide a detailed cost estimate.",
          },
          {
            type: 'para',
            content:
              "For projects with evolving requirements, we offer a time-and-materials model. This allows you to pay based on the hours worked or the resources used.",
          },
          {
            type: 'list',
            content:
              "Fixed-price model for any project,Hourly or resource-based billing,Clear documentation and regular updates,Suitable for small to medium-sized projects",
          },
        ],
      },
    ],
  },


  'crm-software-development-services': {
    title: 'Choose From Our CRM Software Development Service Models',
    description:
      "Each project comes with its own complexities—be it integrating advanced tools, managing extensive datasets, or tackling these challenges. We have it all in our engagement models. If it’s a single expert for a short-term task or a team for continuous development, we’ve got the expertise to help.",
    models: [
      {
        title: 'Dedicated CRM Software Team',
        icon: lightdotnetmodalicon,
        subtitle: '(also known as product interface teams)',
        sections: [
          {
            type: 'para',
            content:
              "For projects that demand consistent collaboration and deep involvement, a dedicated CRM software team is your best choice. Often referred to as product interface teams, our experts of such teams make refining strategies. With this model, you get a fully dedicated group of CRM software developers who work exclusively on your project. This team integrates with your internal processes, and maintains high-quality standards throughout the development lifecycle.",
          },
          {
            type: 'list',
            content:
              'Integration with your existing team and workflows,Full-time, dedicated CRM software developers,Scalable team size,Complete ownership of project deadlines,Long-term collaboration,Specialized expertise in back-end technologies,Adapt and adjust team composition',
          },
        ],
      },
      {
        title: 'Back End Team Augmentation',
        icon: teamAug,
        subtitle: '(also known as team extension or staff augmentation)',
        sections: [
          {
            type: 'para',
            content:
              "CRM software developer team augmentation is a solution that allows you to extend your existing team with additional specialized resources. This model has been made for the companies that need extra expertise for their specific tasks or to scale up quickly during critical project phases. By adding expert CRM software developers to their team, they can accelerate development.",
          },
          {
            type: 'list',
            content:
              'Made to scale up development resources during peak project phases,Temporary or long-term support,Cost-effective solution for handling surges in work without hiring full-time staff,Reduces the overhead of recruitment,Facilitates knowledge transfer and skill development'},
        ],
      },
      {
        title: 'Project Based Model',
        icon: ProjectBased,
        subtitle: '(best suited for small-mid scale back end projects)',
        sections: [
          {
            type: 'para',
            content:
              "Fixed Price Model: It is perfect for back-end projects with well-defined requirements, specifications, and deliverables. This approach works best when the scope is clear. Ideal for small- to medium-scale back-end development, this model makes sure that both you and the development team are aligned on objectives.",
          },
          {
            type: 'para',
            content:
              "Time & Material Model: It is designed for back-end projects with dynamic requirements and evolving scopes. This model allows for flexible engagement, where developers work based on hourly or resource-based billing. It’s perfect for projects with uncertain or rapidly changing requirements, such as complex UI/UX needs.",
          }
        ],
      },
    ],
  },


};

export default function HiringModels({ serviceDetailPageSlug }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev < 4 ? prev + 1 : prev));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isInView]);


  const service = serviceData[serviceDetailPageSlug] || serviceData['best-software-development-company-in-india'];

  if (!service) {
    return <p>Hiring models content not found for the provided slug.</p>;
  }

  return (
    <section className="bg-gray-50">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6 sm:py-10 py-5">
        <h2 className="font-semibold text-orange-500 text-lg">Hiring Models</h2>
        <h4 className="font-semibold text-3xl my-2">{service.title}</h4>
        <p className="text-md text-gray-800">{service.description}</p>

        <div ref={containerRef} className="relative mt-8 my-4">
          <div className="grid gap-5 grid-col-1 sm:grid-cols-3">
            {service.models.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : 20,
                }}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div
                  className={`relativ flex items-start flex-col rounded-2xl p-6 bg-white border border-blue-100 hover:shadow-md cursor-pointer h-full shadow-sm`}
                >
                  <motion.div
                    className={`rounded-full p-3 transition-colors ${index <= activeIndex ? 'bg-amber-50' : 'bg-background'
                      }`}
                    animate={{
                      backgroundColor: index <= activeIndex ? 'rgb(255 251 235)' : 'rgb(255 255 255)',
                    }}
                    transition={{ duration: 0.3 }}
                  >


                    <Image src={step.icon} className='h-14 w-auto' alt={step.title} />



                  </motion.div>

                  <h3 className="text-xl my-4 font-semibold">{step.title}</h3>

                  <p className="text-gray-600 mb-6 text-sm">
                    {step.subtitle}
                  </p>

                  {step.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="mb-6 last:mb-0">
                      {section.type === "para" ? (
                        <p className="text-gray-700 leading-relaxed">
                          {section.content.split('\n').map((paragraph, i) => (
                            <span key={i} className={`block mb-4 last:mb-0`}>
                              {paragraph}
                            </span>
                          ))}
                        </p>
                      ) : (
                        <ul className="space-y-3">
                          {section.content.split(',').map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="mt-1.5 flex-shrink-0">
                                <svg
                                  className="w-4 h-4 text-amber-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                              <span className="text-gray-700">{item.trim()}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}

                  {/* <p className="text-md text-muted-foreground">{step.description}</p> */}
                </motion.div>
              </motion.div>


            ))}
          </div>

        </div>

      </div>
    </section>
  )
}