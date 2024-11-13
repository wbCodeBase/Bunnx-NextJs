"use client"

import React from 'react'
import Techcard from "@/components/hire/Techcard";
import ChooseUs from "@/components/services/ChooseUs";
import HeroSection from '@/components/layout/HeroSection';
import NumericCounterInfo from "@/components/layout/NumericCounterInfo";
import CtaSection2 from '@/components/layout/CtaSection2';
import Faqs from '@/components/home/Faqs';

const Hire = () => {

    const heroSectionData = {
        titlePrefix: "Technologies",
        title: "Our Technologies Expertise",
        description: "Hire expert developers across top technologies to build intelligent, high-performing solutions tailored to your business needs.",
        imageUrl: "https://cdn-server.hiddenbrains.com/uploads/bnr_large_01_6aed8bff69.webp?ver-20241023164536",
        ctaRedirectUrl: "#contact-us",
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

export default Hire