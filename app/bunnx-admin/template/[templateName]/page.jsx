"use client";

import Lottie from "lottie-react";
import loaderJson from "/public/pageAnimations/loader.json";

import "../../template.css"

import AdminpanelLayout from '@/components/adminpanel/AdminpanelLayout';
import HeroSection from '@/components/adminpanel/HeroSection';
import ServiceSection from '@/components/adminpanel/ServiceSection';

import { useGetTemplateQuery } from '../../../../store/api/myApi';
import { useParams, useRouter } from "next/navigation";


const Template = () => {

    const { templateName } = useParams()
    const { data, isError, error, isLoading } = useGetTemplateQuery();
    const router = useRouter();


    if (isLoading) return <div className='flex items-center justify-center h-screen w-full'><Lottie animationData={loaderJson} loop={true} /></div>;

    if (isError) {
        console.error('Error fetching data:', error);
        return <div className="h-screen flex justify-center items-center">Error: {error?.data?.error || 'An error occurred'}</div>;
    }


    const serviceTemplate = data?.find((templateData) => templateData.templateName === templateName)

    // Redirect to 404 if the template is not found
    if (!serviceTemplate) {
        router.replace('/404'); // Redirect to the custom 404 page
        return null; // Prevent rendering
    }

    return (
        <AdminpanelLayout data={data}>

            <HeroSection {...serviceTemplate} />
            <ServiceSection {...serviceTemplate} />

        </AdminpanelLayout>
    );
};


export default Template;














