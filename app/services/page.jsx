'use client';

import React from 'react'
import Services from "@/components/services/Services";
import ChooseUs from "@/components/services/ChooseUs";
import HeroSection from '@/components/layout/HeroSection';
import NumericCounterInfo from "@/components/layout/NumericCounterInfo";
import CtaSection2 from '@/components/layout/CtaSection2';
import Faqs from '@/components/home/Faqs';


// import { useGetItemsQuery } from '../../store/api/myApi';


const Service = () => {

    // const { data, error, isLoading } = useGetItemsQuery();

    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error.message}</div>;

    // console.log(data);
    
    const heroSectionData = {
        titlePrefix: "Enterprise",
        title: "Software Development Services",
        description: "Custom Software Development Services and Solutions to build top-tier intelligent enterprises with speed and agility.",
        imageUrl: "https://cdn-server.hiddenbrains.com/uploads/bnr_large_01_6aed8bff69.webp?ver-20241023164536",
        ctaRedirectUrl: "#contact-us",
    };


    return (
        <>

            {/* <div>
                <h1>Items</h1>

                {data && <div>Status: {data.status}, Method: {data.method}</div>}
            </div> */}

            <HeroSection {...heroSectionData} />

            <NumericCounterInfo />

            <Services />

            <CtaSection2 />

            <ChooseUs />

            <Faqs />
        </>
    )
}

export default Service;