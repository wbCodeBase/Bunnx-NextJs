import HeroSection from '@/components/layout/HeroSection';
import NumericCounterInfo from "@/components/layout/NumericCounterInfo";
import React from 'react'

const Service = () => {

    const heroSectionData = {
        title: "Enterprise",
        subtitle: "Software Development Company",
        description: "Custom Software Development Services and Solutions to build top-tier intelligent enterprises with speed and agility.",
        imageUrl: "https://img.freepik.com/premium-photo/astronaut-outer-space-surrounded-by-planets-satellites-generative-ai_1028873-12416.jpg",
        linkUrl: "/",
    };


    return (
        <>
            <HeroSection {...heroSectionData} />
            <NumericCounterInfo />
        </>
    )
}

export default Service;