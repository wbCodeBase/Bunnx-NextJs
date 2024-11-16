import React, { useState } from 'react';


import Lottie from "lottie-react";
import loaderJson from "../../../public/pageAnimations/loader.json";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";


import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"

import {
    useCreateComponentContentMutation,
    useGetTemplateQuery,
    useGetTemplateContentByStrQuery
} from '../../../store/api/myApi';


const formSchema = z.object({
    titlePrefix: z.string().optional(),
    title: z.string().min(2, { message: "Title must be at least 2 characters." }),
    description: z.string().optional(),
    ctaRedirectUrl: z.string().optional(),
    fetchOnSlug: z.string().optional(),
    imageUrl: z.string().optional(),
    ctaText: z.string(),
    templateName: z.string(),
    componentName: z.string(),
});

const HeroSection = ({whichTemplate}) => {

    const { data, error, isLoading } = useGetTemplateQuery();


    const serviceTemplate = data?.find((templateData) => templateData.templateName === whichTemplate)

    console.log(serviceTemplate);

    const [createComponentContent, result] = useCreateComponentContentMutation();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            titlePrefix: "",
            title: "",
            description: "",
            imageUrl: "",
            ctaRedirectUrl: "",
            fetchOnSlug: "",
            ctaText: "Get started with us",
            templateName: "service",
            componentName: "heroSection",
        },
    });

    const onSubmit = async (values) => {
        try {
            const resData = await createComponentContent(values).unwrap(); // Unwrap for data/error
            if (resData) {
                form.reset()
                alert('Component content added successfully!');
            }
        } catch (err) {
            console.error('Error adding content:', err);
            const errorMessage = err?.data?.error || err.message || 'An error occurred';
            alert(errorMessage); // Show error message to the user
        }
    };


    if (isLoading) return <div className='flex items-center justify-center h-screen w-full'><Lottie animationData={loaderJson} loop={true} /></div>;

    if (error) return <div>Error: {error.message}</div>;


    return (
        <>
            <div className="flex py-10 flex-col justify-start w-full bg-gray-50">
                <div className="text-2xl font-semibold mt-6 mx-24">Hero Section <span className='text-sm'>(Service)</span> </div>

                {result.isError && <p>Error: {result.error?.data?.error || 'Something went wrong'}</p>}

                <div className="flex justify-center gap-10 flex-wrap w-full sm:w-auto p-3">
                    <HeroSectionForm form={form} result={result} onSubmit={onSubmit} />
                    <HeroSectionCards data={serviceTemplate && serviceTemplate.heroSection} />
                </div>
            </div>
        </>
    )
}



const HeroSectionForm = ({ form, onSubmit, result }) => (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full sm:w-1/2 border bg-white sm:p-8 p-3 rounded-lg">
            <FormFieldInput form={form} name="titlePrefix" label="Title Prefix" placeholder="Title prefix" />
            <FormFieldInput form={form} name="title" label="Title" placeholder="Title" />
            <FormFieldInput form={form} name="description" label="Description" placeholder="Enter Description" />
            <FormFieldInput form={form} name="imageUrl" label="Image" placeholder="Coming Soon" />
            <FormFieldInput form={form} name="ctaRedirectUrl" label="CTA Redirect URL" placeholder="CTA Redirect URL" />
            <FormFieldInput form={form} name="ctaText" label="CTA Title" placeholder="Enter CTA Tttle" />
            <FormFieldInput form={form} name="fetchOnSlug" label="Fetch on page" placeholder="Enter slug where it display" />

            <div className="mt-4">
                <Button type="submit">{result.isLoading ? 'Saving...' : 'Submit'}</Button>
            </div>
        </form>
    </Form>
);

const FormFieldInput = ({ form, name, label, placeholder }) => (
    <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
            <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                    {name === "description" ? <Textarea className="bg-gray-50" placeholder={placeholder} {...field} /> : 
                    <Input className="bg-gray-50" placeholder={placeholder} {...field} />
                }
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
    />
);

const HeroSectionCards = ({ data }) => (
    <div className="bg-white border p-3 rounded-lg w-full sm:w-1/3">
        <div className="font-semibold mb-2 text-center">Hero Section Cards</div>
        <div className="overflow-y-auto max-h-[40rem] scrollbar-design">
            {data && data.map((heroSecCard, i) => (
                <HeroCard key={i} heroSecCard={heroSecCard} />
            ))}
        </div>
    </div>
);

const HeroCard = ({ heroSecCard }) => (
    <div className="bg-gray-50 flex gap-2 flex-col rounded-lg p-3 my-2 text-sm">
        <CardItem label="Prefix" content={heroSecCard?.titlePrefix} />
        <CardItem label="Title" content={heroSecCard?.title} />
        <CardItem label="Desc" content={heroSecCard?.description} />
        <CardItem label="Image" content="Soon" />
        <CardItem label="Fetch on page" content={heroSecCard?.fetchOnSlug} />
        <CardItem label="CTA Title" content={heroSecCard?.ctaText} />
        <CardItem label="CTA Redirect URL" content={heroSecCard?.ctaRedirectUrl} />
    </div>
);

const CardItem = ({ label, content }) => (
    <div className="flex gap-2">
        <span className="font-medium text-nowrap">{label}:</span>
        <span className="text-gray-600">{content}</span>
    </div>
);



export default HeroSection