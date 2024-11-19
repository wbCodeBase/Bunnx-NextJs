"use client";

import Lottie from "lottie-react";
import loaderJson from "../../../public/pageAnimations/loader.json";

import AdminpanelLayout from '@/components/adminpanel/AdminpanelLayout';
import HeroSection from '@/components/adminpanel/HeroSection';
import ServiceSection from '@/components/adminpanel/ServiceSection';

import "./template.css";

import { useGetTemplateQuery } from '../../../store/api/myApi';


const Herosection = () => {

    const { data, isError, error, isLoading } = useGetTemplateQuery();


    const serviceTemplate = data?.find((templateData) => templateData.templateName === "service")

    // console.log("serviceTemplate", data);

    if (isLoading) return <div className='flex items-center justify-center h-screen w-full'><Lottie animationData={loaderJson} loop={true} /></div>;

    if (isError) {
        console.error('Error fetching data:', error);
        return <div className="h-screen flex justify-center items-center">Error: {error?.data?.error || 'An error occurred'}</div>;
    }


    return (
        <AdminpanelLayout data={data}>

            <HeroSection {...serviceTemplate} />
            <ServiceSection {...serviceTemplate} />

        </AdminpanelLayout>
    );
};


export default Herosection;














