import React, { useState } from 'react';

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
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";


import { useCreateComponentContentMutation, useDeleteComponentContentMutation } from '../../../store/api/myApi';


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

const HeroSection = ({ heroSection, templateName }) => {

    const [componentName, setComponentName] = useState("heroSection")

    const [createComponentContent, result] = useCreateComponentContentMutation();
    const [deleteComponentContent] = useDeleteComponentContentMutation();

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
            templateName: templateName,
            componentName: componentName,
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


    const editDeleteHandler = (id, operationType) => {
        if (operationType === "delete") {
            deleteComponentContent({ id, templateName, componentName });
        }

        console.log(id, operationType, templateName, componentName);
    }



    return (
        <>
            <div className="flex py-10 flex-col justify-start w-full bg-gray-50">
                <div className="text-2xl font-semibold mt-6 mx-24">Hero Section <span className='text-sm'>({templateName})</span> </div>

                {result.isError && <p>Error: {result.error?.data?.error || 'Something went wrong'}</p>}

                <div className="flex justify-center gap-10 flex-wrap w-full sm:w-auto p-3">
                    <HeroSectionForm form={form} result={result} onSubmit={onSubmit} />
                    <HeroSectionCards data={heroSection} editDeleteHandler={editDeleteHandler} />
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
            {/* <FormFieldInput form={form} name="ctaRedirectUrl" label="CTA Redirect URL" placeholder="CTA Redirect URL" /> */}

            <FormFieldInput
                form={form}
                name="ctaRedirectUrl"
                label="CTA Redirect URL"
                placeholder="Select a redirect URL"
                options={[
                    { value: "software-development", label: "software-development" },
                    { value: "application-development", label: "application-development" },
                    { value: "custom-software-development", label: "custom-software-development" },
                    { value: "dedicated-software-teams", label: "dedicated-software-teams" },
                    { value: "ecommerce", label: "ecommerce" },
                    { value: "qa-testing", label: "qa-testing" },
                    { value: "software-outsourcing", label: "software-outsourcing" },
                    { value: "support-maintenance", label: "support-maintenance" },
                    { value: "devops", label: "devops" },
                    { value: "cloud-services", label: "cloud-services" },
                    { value: "mobile-app-development", label: "mobile-app-development" },
                ]}
            />


            <FormFieldInput form={form} name="ctaText" label="CTA Title" placeholder="Enter CTA Tttle" />
            <FormFieldInput form={form} name="fetchOnSlug" label="Fetch on page" placeholder="Enter slug where it display" />

            <div className="mt-4">
                <Button type="submit">{result.isLoading ? 'Saving...' : 'Submit'}</Button>
            </div>
        </form>
    </Form>
);


const FormFieldInput = ({ form, name, label, placeholder, options = [] }) => (
    <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
            <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                    {name === "description" ? (
                        <Textarea className="bg-gray-50" placeholder={placeholder} {...field} />
                    ) :

                        name === "ctaRedirectUrl" && options.length > 0 ? (
                            <select className="bg-gray-50 border rounded-md ml-4 w-72 p-1.5 text-sm" {...field}>
                                <option value="" disabled>
                                    {placeholder || "Select an option"}
                                </option>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        )

                            : (
                                <Input className="bg-gray-50" placeholder={placeholder} {...field} />
                            )}
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
    />
);





const HeroSectionCards = ({ data, editDeleteHandler }) => (
    <div className="bg-white border p-3 rounded-lg w-full sm:w-1/3">
        <div className="font-semibold mb-2 text-center">Hero Section Cards</div>
        <div className="overflow-y-auto max-h-[40rem] scrollbar-design">
            {data && data.map((heroSecCard, i) => (
                <HeroCard key={i} i={i} editDeleteHandler={editDeleteHandler} heroSecCard={heroSecCard} />
            ))}
        </div>
    </div>
);


const HeroCard = ({ heroSecCard, i, editDeleteHandler }) => (
    <div className="relative bg-gray-50 flex flex-col rounded-lg p-4 my-4 text-sm shadow-md group transition">
        {/* Card Index Badge */}
        <span className="absolute top-2 right-2 text-xs px-2 py-1 rounded-full text-white bg-gray-400">
            {i + 1}
        </span>

        {/* Card Content */}
        <CardItem label="Prefix" content={heroSecCard?.titlePrefix} />
        <CardItem label="Title" content={heroSecCard?.title} />
        <CardItem label="Desc" content={heroSecCard?.description} />
        <CardItem label="Image" content="Soon" />
        <CardItem label="Fetch on page" content={heroSecCard?.fetchOnSlug} />
        <CardItem label="CTA Title" content={heroSecCard?.ctaText} />
        <CardItem label="CTA Redirect URL" content={heroSecCard?.ctaRedirectUrl} />

        {/* Action Buttons (Visible on Hover) */}
        <div className="absolute top-2 right-12 flex gap-2 opacity0 grouphover:opacity-100 transition-opacity duration-300">
            {/* Edit Button */}
            <button
                onClick={() => editDeleteHandler(heroSecCard._id, "edit")}
                className="flex items-center gap-1 px-2 py-1 text-sm font-medium text-gray-600 border-gray-500 border hover:border-blue-600 rounded-md bg-white hover:bg-blue-600 hover:text-white transition"
            >
                <MdEdit />
            </button>

            {/* Delete Button */}
            <button
                onClick={() => editDeleteHandler(heroSecCard._id, "delete")}
                className="flex items-center gap-1 px-2 py-1 text-sm font-medium border border-red-500 rounded-md bg-white hover:text-white hover:bg-red-500 text-red-500 transition"
            >
                <MdDelete />
            </button>
        </div>
    </div>
);

const CardItem = ({ label, content }) => (
    <div className="flex gap-2">
        <span className="font-medium text-gray-600">{label}:</span>
        <span className="text-gray-600">{content}</span>
    </div>
);





export default HeroSection