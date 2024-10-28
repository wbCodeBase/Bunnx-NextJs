import React from 'react'
import OurServices from "@/components/services/OurServices";
import HeroSection from '@/components/layout/HeroSection';
import NumericCounterInfo from "@/components/layout/NumericCounterInfo";


const Service = () => {

    const heroSectionData = {
        title: "Enterprise",
        subtitle: "Software Development Services",
        description: "Custom Software Development Services and Solutions to build top-tier intelligent enterprises with speed and agility.",
        imageUrl: "https://cdn-server.hiddenbrains.com/uploads/bnr_large_01_6aed8bff69.webp?ver-20241023164536",
        linkUrl: "#contact-us",
    };


    return (
        <>
            <HeroSection {...heroSectionData} />

            <NumericCounterInfo />

            <OurServices />
        </>
    )
}

export default Service;