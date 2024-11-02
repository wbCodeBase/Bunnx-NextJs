import React from 'react'
import Techcard from "@/components/technologies/Techcard";
import ChooseUs from "@/components/services/ChooseUs";
import HeroSection from '@/components/layout/HeroSection';
import NumericCounterInfo from "@/components/layout/NumericCounterInfo";
import CtaSection2 from '@/components/layout/CtaSection2';
import Faqs from '@/components/home/Faqs';

const Technologies = () => {

    const heroSectionData = {
        title: "Technologies",
        subtitle: "Our Technologies Expertise",
        description: "Custom Software Development Services and Solutions to build top-tier intelligent enterprises with speed and agility.",
        imageUrl: "https://cdn-server.hiddenbrains.com/uploads/bnr_large_01_6aed8bff69.webp?ver-20241023164536",
        linkUrl: "#contact-us",
    };

    return (
        <>
            <HeroSection {...heroSectionData} />

            <NumericCounterInfo />

            <Techcard />

            <CtaSection2 />

            <ChooseUs />

            <Faqs />
        </>
    )
}

export default Technologies