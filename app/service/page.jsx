import HeroSection from '@/components/layout/HeroSection';
import NumericCounterInfo from "@/components/layout/NumericCounterInfo";
import React from 'react'

const Service = () => {

    const heroSectionData = {
        title: "Enterprise",
        subtitle: "Software Development Services",
        description: "Custom Software Development Services and Solutions to build top-tier intelligent enterprises with speed and agility.",
        imageUrl: "https://cdn-server.hiddenbrains.com/uploads/bnr_large_01_6aed8bff69.webp?ver-20241023164536",
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