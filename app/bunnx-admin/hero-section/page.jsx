"use client";

import React from 'react';
import AdminpanelLayout from '@/components/adminpanel/AdminpanelLayout';

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

import {
    useCreateHeroSecContentMutation,
    useGetHeroSecItemsQuery
} from '../../../store/api/myApi';

import "./hero.css";

const formSchema = z.object({
    titlePrefix: z.string().optional(),
    title: z.string().min(2, { message: "Title must be at least 2 characters." }),
    description: z.string().optional(),
    imageUrl: z.string(),
    ctaRedirectUrl: z.string().optional(),
    primaryKey: z.string().optional(),
});

const Herosection = () => {

    const [createHeroSecContent] = useCreateHeroSecContentMutation();

    const { data, error, isLoading } = useGetHeroSecItemsQuery();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            titlePrefix: "",
            title: "",
            description: "",
            imageUrl: "",
            ctaRedirectUrl: "",
            primaryKey: "",
        },
    });

    const onSubmit = async (values) => {
        try {
            // Trigger the mutation
            const result = await createHeroSecContent(values);    // .unwrap();  Directly access data if successful

            console.log(result.data);

            if (result.data.success) {
                console.log('Hero section content created successfully');
                form.reset();
            } else {
                console.error("Failed to create content:", result.data.error);  // Error if it fails
                alert(result.data.error)
            }

        } catch (error) {
            console.error('Failed to create content:', error);
        }
    };

    if (isLoading) return <div className='flex items-center justify-center h-screen w-full'><Lottie animationData={loaderJson} loop={true} /></div>;

    if (error) return <div>Error: {error.message}</div>;

    return (
        <AdminpanelLayout>
            <div className="flex items-center flex-col justify-start h-full w-full bg-gray-50">
                <div className="text-center text-2xl font-semibold p-6">Hero Section</div>

                <div className="flex justify-center gap-10 flex-wrap w-full sm:w-auto mx-10 p-3">
                    <HeroSectionForm form={form} onSubmit={onSubmit} />
                    <HeroSectionCards data={data} />
                </div>
            </div>
        </AdminpanelLayout>
    );
};

const HeroSectionForm = ({ form, onSubmit }) => (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full sm:w-1/2 border bg-white sm:p-8 p-3 rounded-lg">
            <FormFieldInput form={form} name="titlePrefix" label="Title Prefix" placeholder="Title prefix" />
            <FormFieldInput form={form} name="title" label="Title" placeholder="Title" />
            <FormFieldInput form={form} name="description" label="Description" placeholder="Enter Description" />
            <FormFieldInput form={form} name="imageUrl" label="Image" placeholder="Coming Soon" />
            <FormFieldInput form={form} name="ctaRedirectUrl" label="CTA Redirect URL" placeholder="CTA Redirect URL" />
            <FormFieldInput form={form} name="primaryKey" label="Primary Key" placeholder="Enter unique key" />

            <div className="mt-4">
                <Button type="submit">Submit</Button>
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
                    <Input className="bg-gray-50" placeholder={placeholder} {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
    />
);

const HeroSectionCards = ({ data }) => (
    <div className="bg-white border p-3 rounded-lg w-full sm:w-1/3">
        <span className="font-semibold mb-2">Hero Section Cards</span>
        <div className="overflow-y-auto max-h-[35rem] scrollbar-design">
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
        <CardItem label="Para" content={heroSecCard?.description} />
        <CardItem label="Image" content="Soon" />
        <CardItem label="Primary Key" content={heroSecCard?.primaryKey} />
        <CardItem label="CTA Redirect URL" content={heroSecCard?.ctaRedirectUrl} />
    </div>
);

const CardItem = ({ label, content }) => (
    <div className="flex gap-2">
        <span className="font-medium">{label}:</span>
        <span className="text-gray-600">{content}</span>
    </div>
);

export default Herosection;






  







