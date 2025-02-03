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
            "type": "list",
            "content": [
              "Agile processes",
              "Clear and competitive pricing",
              "Simplified payment structures",
              "Scalable solutions",
              "Modern front-end technologies",
              "Suitable for startups",
              "Flexible engagement models"
            ]
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
            "type": "list",
            "content": [
              "Scalable On-Demand Expertise",
              "Rapid Deployment & Cost Optimization",
              "Monthly Billing",
              "Eliminate Recruitment Overhead",
              "Transparent and Predictable Cost Structures"
            ]
          }
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
            "type": "list",
            "content": [
              "Full-time, dedicated back-end developers.",
              "Integration with your existing team and workflows.",
              "Scalable team size.",
              "Complete ownership of project deadlines.",
              "Long-term collaboration.",
              "Specialized expertise in back-end technologies.",
              "Flexibility to adapt and adjust team composition."
            ]
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
            "type": "list",
            "content": [
              "Ideal for scaling up development resources during peak project phases.",
              "Temporary or long-term support.",
              "Cost-effective solution for handling surges in work without hiring full-time staff.",
              "Reduces the overhead of recruitment.",
              "Facilitates knowledge transfer and skill development."
            ]
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
              "Fixed Price Model:\nIt is perfect for back-end projects with well-defined requirements, specifications, and deliverables. This approach works best when the scope is clear. Ideal for small- to medium-scale back-end development, this model makes sure that both you and the development team are aligned on objectives.",
          },
          {
            type: 'para',
            content:
              "Time & Material Model:\nIt is designed for back-end projects with dynamic requirements and evolving scopes. This model allows for flexible engagement, where developers work based on hourly or resource-based billing. It’s perfect for projects with uncertain or rapidly changing requirements, such as complex UI/UX needs.",
          },
        ],
      },
    ],
  },

  'best-software-development-company-in-india': {
    title: 'Custom Engagement Models for Software Development Services',
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
            "type": "list",
            "content": [
              "Simple processes and fast delivery.",
              "Latest approaches for your future growth.",
              "Experts working with modern technologies.",
              "Engagement models for all types of clients.",
              "Affordable pricing options.",
              "Model made for startups or growing businesses."
            ]
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
            "type": "list",
            "content": [
              "Access to skilled developers.",
              "Quick deployment and cost savings.",
              "Monthly billing with no recruitment hassle.",
              "Predictable and transparent costs."
            ]
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
            "type": "list",
            "content": [
              "Fixed-price model for any project.",
              "Hourly or resource-based billing.",
              "Clear documentation and regular updates.",
              "Suitable for small to medium-sized projects."
            ]
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
            "type": "list",
            "content": [
              "Integration with your existing team and workflows Full-time.",
              "Dedicated CRM software developers & Scalable team size.",
              "Complete ownership of project deadlines.",
              "Long-term collaboration & Specialized expertise in back-end technologies.",
              "Adapt and adjust team composition."
            ]
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
            "type": "list",
            "content": [
              "Made to scale up development resources during peak project phases.",
              "Temporary or long-term support.",
              "Cost-effective solution for handling surges in work without hiring full-time staff.",
              "Reduces the overhead of recruitment.",
              "Facilitates knowledge transfer and skill development."
            ]
          },
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
              "Fixed Price Model:\nIt is perfect for back-end projects with well-defined requirements, specifications, and deliverables. This approach works best when the scope is clear. Ideal for small- to medium-scale back-end development, this model makes sure that both you and the development team are aligned on objectives.",
          },
          {
            type: 'para',
            content:
              "Time & Material Model:\nIt is designed for back-end projects with dynamic requirements and evolving scopes. This model allows for flexible engagement, where developers work based on hourly or resource-based billing. It’s perfect for projects with uncertain or rapidly changing requirements, such as complex UI/UX needs.",
          }
        ],
      },
    ],
  },

  'custom-software-development-services': {
    title: 'Choose From Our Custom Software Development Service Models',
    description:
      "We, at Bunnx, make your project after knowing what you really want from the software. Even though it requires our full team to be on it, we don't delay the process at any cost. But it would be best if you could choose from our service models to get what you really  need.",
    models: [
      {
        title: 'Dedicated Software Development Team',
        icon: lightdotnetmodalicon,
        subtitle: '(also known as product interface teams)',
        sections: [
          {
            type: 'para',
            content:
              "If you have a project that demands a lot of focus and deep collaboration, this model is for you. Why? That's because it gives you a talented group of developers who work only for your project.",
          },
          {
            "type": "list",
            "content": [
              "Full-time experts who work with your team all the time.",
              "A team size that matches your needs.",
              "Get ownership of deadlines with a strong focus on quality.",
              "Expert problem-solving from professionals specializing in custom software.",
              "Perfect for businesses looking to build long-term services."
            ]
          },
        ],
      },
      {
        title: 'Team Augmentation',
        icon: teamAug,
        subtitle: '(also known as team extension or staff augmentation)',
        sections: [
          {
            type: 'para',
            content:
              "If you need extra hands on deck without the overhead of permanent hires, our team augmentation model is for you. It fills the skill gap or scales your team.",
          },
          {
            "type": "list",
            "content": [
              "Collaborate with experienced developers and add them to your existing team.",
              "Made for short-term boosts or extended support.",
              "Save time and money by not recruiting and training.",
              "Bring in fresh perspectives and experienced individuals."
            ]
          },
        ],
      },
      {
        title: 'Project Based Model',
        icon: ProjectBased,
        subtitle: '(best suited for small-mid scale projects)',
        sections: [
          {
            type: 'para',
            content:
              "Our project-based model, you'll get the following benefits:",
          },
          {
            type: 'para',
            content:
              "Fixed Price Model:\nIt's perfect for projects with well-defined goals and timelines. Get everything delivered on time and within budget with no surprises.",
          },
          {
            type: 'para',
            content:
              "Time & Material Model:\nBest for projects where requirements may evolve. Pay as you go with hourly billing, giving you the flexibility to adapt as needed.",
          }
        ],
      },
    ],
  },

  'software-development-consultants': {
    title: 'Choose From Our Software Consulting Service Models',
    description:
      "We understand that every project is different. If it’s a complex integration task, managing a large volume of data, or navigating a new set of challenges. But we can make it happen with our professionals. The team at Bunnx don’t just work for you—we work with you to build a plan that fits your goals, timeline, and resources.",
    models: [
      {
        title: 'Dedicated Consultancy Team',
        icon: lightdotnetmodalicon,
        subtitle: '(also known as Industry Experts)',
        sections: [
          {
            type: 'para',
            content:
              "For projects that need continuous collaboration and in-depth involvement, our team becomes an extension of your own. These product-focused teams dive deep into refining strategies, integrating with your internal processes. When you choose this model, you’re not just getting a group of developers—you’re getting a full-time, dedicated team that’s committed to the success of your project from start to finish. The team focuses on your project and maintains quality at every step.",
          },
          {
            "type": "list",
            "content": [
              "A team that can adjust when any situation is thrown.",
              "Full-time developers on your team and for your project.",
              "Long-term focus and project ownership."
            ]
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
              "Sometimes, you just need an extra set of hands. Our back-end team augmentation service helps you add specialized expertise when you need it most. Whether it’s a short-term project or a longer-term phase, we’ll give you the support you need to push things forward. It’s a smart way to scale without the hassle of recruitment.",
          },
          {
            "type": "list",
            "content": [
              "Add developers to your team for a specific task or peak phase.",
              "Quick support without the need for full-time hiring.",
              "Boost your team’s capacity and skills as needed."
            ]
          }
          ,
        ],
      },
      {
        title: 'Project Based Model',
        icon: ProjectBased,
        subtitle: '(best suited for small-mid scale projects)',
        sections: [
          {
            type: 'para',
            content:
              "Our project-based model, you'll get the following benefits:",
          },
          {
            type: 'para',
            content: "Fixed Price Model:\nFor smaller or mid-sized back-end projects, our fixed-price model is perfect if you have a clear scope and well-defined requirements. You know what you need, and we get it done, ensuring both sides are aligned on the outcome. For projects with more fluid requirements, the time & material model gives you the ability to adapt and adjust as things evolve.",
          },
          {
            type: 'para',
            content:
              "Time & Material Model:\nWith our software consultants, your customer relationships are about to get a whole lot better. We bring custom software consulting services, from optimizing your database to making sure everything works smoothly when it’s deployed.",
          }
        ],
      },
    ],
  },

  'it-consulting-services': {
    title: 'Choose From Our IT Consulting Service Models',
    description:
      "Each project comes with its own set of challenges—whether it’s working with advanced tools, managing large datasets, or tackling specific tasks. That’s where our engagement models come in. If you need a single expert for a short-term task or a full team for ongoing development, we’ve got you covered.",
    "models": [
      {
        "title": "Dedicated Consultancy Team",
        "icon": lightdotnetmodalicon,
        "subtitle": "(also known as Industry Experts)",
        "sections": [
          {
            "type": "para",
            "content": "Do you need close collaboration and full-time focus? Choose Bunnx's dedicated IT consulting team. Think of it as having a team that’s part of your company but focused entirely on your project. They’ll work alongside your internal processes, handle deadlines, and bring in expertise to help refine your strategies. It’s a great fit for projects where long-term involvement is key."
          },
          {
            "type": "list",
            "content": [
              "Full-time CRM software developers.",
              "Works closely with your existing workflows.",
              "Team size can be adjusted as needed.",
              "Long-term collaboration with complete focus on your project."
            ]
          }
        ]
      },
      {
        "title": "Back End Team Augmentation",
        "icon": teamAug,
        "subtitle": "(also known as team extension or staff augmentation)",
        "sections": [
          {
            "type": "para",
            "content": "Need a little extra help for your team? Back-end team augmentation is like adding specialists to your workforce without the hassle of hiring full-time staff. For a short-term spike in work or a long-term task, we’ll help you fill the gaps with skilled developers who can hit the ground running."
          },
          {
            "type": "list",
            "content": [
              "Add extra resources when workload increases.",
              "Temporary or long-term support based on your needs.",
              "Cuts down recruitment time and costs.",
              "Boosts your team’s skills and speeds up development."
            ]
          }
        ]
      },
      {
        "title": "Project Based Model",
        "icon": ProjectBased,
        "subtitle": "(best suited for small-mid scale projects)",
        "sections": [
          {
            "type": "para",
            "content": "For smaller or mid-sized projects, a project-based model might be the best fit."
          },
          {
            type: 'para',
            content: "Fixed Price Model:\nPerfect when you know exactly what you want. We agree on the requirements, timeline, and costs upfront, so we’re both on the same page from day one. Great for projects with clear goals.",
          },
          {
            type: 'para',
            content: "Time & Material Model:\nIf your project needs a flexible solution, this is the way to go. If the requirements are changing or you’re figuring things out as you go, this model lets you pay based on hours worked or resources used."
          }

        ]
      }
    ]
  },


  "mobile-app-development-services": {
    "title": "Choose From Our Mobile App Development Service Models",
    "description": "Every project comes with its own set of challenges, whether it’s maintaining system reliability, integrating third-party services, or managing large datasets. Our models are designed to allow you to bring in the right expertise at each stage—whether it's a single developer for a task or a team for ongoing maintenance.",
    "models": [
      {
        "title": "Dedicated Mobile App Team",
        "subtitle": "(also known as mobile app teams)",
        "icon": lightdotnetmodalicon,
        "sections": [
          {
            "type": "para",
            "content": "If you're looking for a long-term collaboration on your mobile app project, partner with a top mobile app development company's team. With this approach, you’ll have a fully committed group of developers working only for your project."
          },
          {
            "type": "list",
            "content": [
              "A team of full-time mobile app developers always committed to your project.",
              "Integration with your existing processes and version control systems.",
              "Adjust team size as your app grows.",
              "Specialization in technologies like Node.js, Django, Laravel, or cloud-based solutions.",
              "Complete accountability for meeting deadlines and maintain code quality."
            ]
          }
        ]
      },
      {
        "title": "Mobile App Team Augmentation",
        "subtitle": "(also known as team extension or staff augmentation)",
        "icon": teamAug,
        "sections": [
          {
            "type": "para",
            "content": "This model lets you improve your existing team with highly skilled mobile app developers. It has been made for businesses who want employees to handle specific tasks, meet tight deadlines, or manage high-demand phases of your project. It can accelerate app development, maintain high-quality standards without the overhead of hiring full-time resources."
          },
          {
            "type": "list",
            "content": [
              "Access to specialized skills in systems, API development, and database optimization.",
              "Rapid onboarding of developers to support peak workloads.",
              "Expansion of your technical team without hiring full-time staff.",
              "Support for advanced integrations, such as payment gateways, push notification systems, or third-party SDKs."
            ]
          }
        ]
      },
      {
        "title": "Project Based",
        "subtitle": "(best suited for small-mid scale mobile app projects)",
        "icon": ProjectBased,
        "sections": [
          {
            "type": "para",
            "content": "For smaller or mid-sized projects, a project-based model might be the best fit."
          },
          {
            "type": "para",
            "content": "Fixed Price Model:\nIt is a great fit for mobile application development projects where everything is mapped out from the beginning—features, designs, and deliverables. For example, if you're building an e-commerce app with standard features like user registration, product browsing, and payment integration, this model makes the development stay on track without unexpected costs."
          },
          {
            "type": "para",
            "content": "Time & Material Model:\nThe Time & Material Model works best for developing a social media app and wants to refine features like real-time messaging or AI-based recommendations as you go. With this model, you pay for the hours and resources used. With our mobile app development services, you'll also get new features, or pivot mid-development. This project includes innovation, experimentation, or iterative improvement."
          }
        ]
      }
    ]
  },

  "api-development-and-integration-services": {
    "title": "Choose From Our API Development & Integration Service Models",
    "description": "Every project comes with its own set of challenges, whether it’s maintaining system reliability, integrating third-party services, or managing large datasets. Our models are designed to allow you to bring in the right expertise at each stage—whether it's a single developer for a task or a team for ongoing maintenance",
    "models": [
      {
        "title": "Dedicated API Team",
        "subtitle": "(also known as product interface teams)",
        "icon": lightdotnetmodalicon,
        "sections": [
          {
            "type": "para",
            "content": "A team from the top API Development & Integration company is the ideal solution for projects that require long-term collaboration. With this model, you get a fully dedicated group of API developers who work exclusively on your project. This team integrates with your internal processes, and maintains high-quality standards throughout the development lifecycle."
          },
          {
            "type": "list",
            "content": [
              "Full-time, dedicated API developers",
              "Integration with your existing team and workflows.",
              "Scalable team size",
              "Complete ownership of project deadlines.",
              "Long-term collaboration",
              "Specialized expertise in API technologies",
              "Flexibility to adapt and adjust team composition"
            ]
          }
        ]
      },
      {
        "title": "API Team Augmentation",
        "subtitle": "(also known as team extension or staff augmentation)",
        "icon": teamAug,
        "sections": [
          {
            "type": "para",
            "content": "API team augmentation is a flexible solution that allows you to extend your existing team with additional specialized resources. This model is perfect when you need extra expertise for specific tasks or to scale up quickly during critical project phases. By adding expert API developers to your team, you can accelerate development."
          },
          {
            "type": "list",
            "content": [
              "Ideal for scaling up development resources during peak project phases.",
              "Temporary or long-term support.",
              "Cost-effective solution for handling surges in work without hiring full-time staff.",
              "Reduces the overhead of recruitment.",
              "Facilitates knowledge transfer and skill development."
            ]
          }
        ]
      },
      {
        "title": "Project Based",
        "subtitle": "(best suited for small-mid scale API projects)",
        "icon": ProjectBased,
        "sections": [
          {
            "type": "para",
            "content": "Fixed Price Model:\nIt is perfect for API projects with well-defined requirements, specifications, and deliverables. This approach works best when the scope is clear. Ideal for small- to medium-scale API Development & Integration, this model makes sure that both you and the development team are aligned on objectives."
          },
          {
            "type": "para",
            "content": "Time & Material Model:\nIt is designed for API projects with dynamic requirements and evolving scopes. This model allows for flexible engagement, where developers work based on hourly or resource-based billing. It’s perfect for projects with uncertain or rapidly changing requirements, such as complex UI/UX needs."
          }
        ]
      }
    ]
  }

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
                          {section.content.map((item, i) => (
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