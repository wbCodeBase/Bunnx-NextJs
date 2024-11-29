import React from 'react'
import Image from 'next/image'

import clutch from "/public/Certification/clutch.svg";
import androidEnterprise from "/public/Certification/androidEnterprise.svg";
import awsPartner from "/public/Certification/aws-partner.png";
import goodFirm from "/public/Certification/goodFirm.svg";
import MicrosoftMin from "/public/Certification/Microsoft-min.png";
import googlePartner from "/public/Certification/googlePartner.png";

const frontend = [
  { name: 'React', icon: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' },
  { name: 'Next.js', icon: 'https://nextjs.org/icons/next.svg' },
  { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png' },
  { name: 'TypeScript', icon: 'https://iconape.com/wp-content/files/rl/371585/svg/371585.svg' },
  { name: 'Node.js', icon: 'https://nodejs.org/static/logos/nodejsStackedDark.svg' },
  { name: 'MongoDB', icon: 'https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png' },
  { name: 'GraphQL', icon: 'https://www.gokhan-gokalp.com/wp-content/uploads/2017/07/graphQL.png' },
  { name: 'Docker', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Docker_logo.png' },
]


export default function TechStackMarquee() {
  return (
    <>
      <section className='lg:w-[46%] w-full '>
        <div className="flex flex-col gap-2 overflow-hidden py-2">


          <MarqueeRow direction="right" />

          <MarqueeRow direction="left" />

          <MarqueeRow direction="right" />

        </div>

        <div className='mt-6'>
          <span> Awards & Certifications </span>

          <div className='flex flex-wrap gap-6 justify-around items-center mt-6'>
            <Image src={clutch} className='sm:w-24 w-20 h-auto' alt="Clutch icon" />
            <Image src={androidEnterprise} className='sm:w-24 w-20 h-auto' alt="Android Enterprise icon" />
            <Image src={awsPartner} className='sm:w-24 w-20 h-auto' alt="awsPartner icon" />
            <Image src={goodFirm} className='sm:w-24 w-20 h-auto' alt="goodFirm icon" />
            <Image src={MicrosoftMin} className='sm:w-24 w-20 h-auto' alt="MicrosoftMin icon" />
            <Image src={googlePartner} className='sm:w-24 w-20 h-auto' alt="MicrosoftMin icon" />
          </div>

        </div>

      </section>
    </>
  )
}

function MarqueeRow({ direction }) {
  const animationClass = direction === 'left' ? 'animate-marquee-reverse' : 'animate-marquee'
  const animationClass2 = direction === 'left' ? 'animate-marquee2-reverse' : 'animate-marquee2'

  return (
    <div className="relative flex overflow-x-hidden py-1 group">
      <div className={`flex whitespace-nowrap ${animationClass} group-hover:pause-animation`}>
        {frontend.map((tech, index) => (
          <TechIcon key={`${tech.name}-${index}`} name={tech.name} icon={tech.icon} />
        ))}
      </div>
      <div className={`absolute top4 flex whitespace-nowrap ${animationClass2} group-hover:pause-animation`}>
        {frontend.map((tech, index) => (
          <TechIcon key={`${tech.name}-${index}-duplicate`} name={tech.name} icon={tech.icon} />
        ))}
      </div>
    </div>
  )
}

function TechIcon({ name, icon }) {
  return (
    <div className="flex flex-col items-center bg-gray-50 px-6 rounded-lg justify-center mx-2">
      <div className="relative w-16 h-16 mb2">
        <Image src={icon} alt={`${name} icon`} fill={true} style={{ objectFit: "contain" }} sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      {/* <span className="text-sm font-medium text-gray-600">{name}</span> */}
    </div>
  )
}
