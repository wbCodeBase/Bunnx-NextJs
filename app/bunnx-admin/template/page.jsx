"use client";


import AdminpanelLayout from '@/components/adminpanel/AdminpanelLayout';
import HeroSection from '@/components/adminpanel/HeroSection';
import ServiceSection from '@/components/adminpanel/ServiceSection';

import "./template.css";



const Herosection = () => {


    return (
        <AdminpanelLayout>

            <HeroSection whichTemplate="service" />
            <ServiceSection whichTemplate="service" />

        </AdminpanelLayout>
    );
};


export default Herosection;














