import { useState } from "react";

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
} from '../../../store/api/myApi';
import React from "react";


const formSchema = z.object({
    title: z.string().min(2, { message: "Title must be at least 2 characters." }),
    description: z.string(),
    ctaRedirectUrl: z.string(),
    fetchOnSlug: z.array(z.string()).nonempty({ message: "Please select at least one slug." }),
    templateName: z.string(),
    componentName: z.string(),
});

const ServiceSection = ({ servicesSection }) => {


    const [createComponentContent, result] = useCreateComponentContentMutation();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            ctaRedirectUrl: "",
            fetchOnSlug: [],
            templateName: "service",
            componentName: "servicesSection",
        },
    });

    const onSubmit = async (values) => {

        console.log("values", values);

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


    return (
        <>
            <div className="flex py-6 border-t flex-col justify-start w-full">
                <div className="text-2xl font-semibold mt-6 mx-24">Services <span className='text-sm'>(Service)</span> </div>

                {result.isError && <p>Error: {result.error?.data?.error || 'Something went wrong'}</p>}

                <div className="flex justify-center gap-10 flex-wrap w-full sm:w-auto p-3">
                    <ServiceSectionForm form={form} result={result} onSubmit={onSubmit} />
                    <ServiceSectionCards data={servicesSection} />
                </div>
            </div>
        </>
    )
}



const ServiceSectionForm = ({ form, onSubmit, result }) => (






    < Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full sm:w-1/2 border bg-white sm:p-8 p-3 rounded-lg">

            <FormFieldInput form={form} name="title" label="Title" placeholder="Title" />
            <FormFieldInput form={form} name="description" label="Description" placeholder="Enter Description" />
            <FormFieldFetchOnSlug form={form} name="fetchOnSlug" label="FetchOn" options={["software-development",
                "application-development",
                "custom-software-development",
                "dedicated-software-teams",
                "ecommerce",
                "qa-testing",
                "software-outsourcing",
                "support-maintenance",
                "devops",
                "cloud-services",
                "cloud-services",
                "mobile-app-development",
            ]} placeholder="Slug where it display" />
            <FormFieldInput form={form} name="ctaRedirectUrl" label="Redirect url" placeholder="Enter redirection slug" />

            <div className="mt-4">
                <Button type="submit">{result.isLoading ? 'Saving...' : 'Submit'}</Button>
            </div>
        </form>
    </Form >
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



const FormFieldFetchOnSlug = ({ form, name, label, options }) => {

    const [searchTerm, setSearchTerm] = useState("");

    // Filter options based on the search query
    const filteredOptions = options.filter((option) =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (

        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        {/* Search Bar */}
                        <>
                            <div className="mb-2">
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Search slugs..."
                                    className="w-full border rounded-md p-2 bg-gray-50"
                                />
                            </div>

                            {/* Scrollable Tabs Container */}
                            <div className="flex gap-2 overflow-y-auto flex-wrap border rounded-md p-2 bg-gray-50 max-h-40">
                                {filteredOptions.map((option, index) => (
                                    <div
                                        key={index}
                                        className={`px-4 py-2 rounded-lg cursor-pointer whitespace-nowrap ${field.value.includes(option)
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-200 text-black"
                                            }`}
                                        onClick={() => {
                                            // Toggle option in array
                                            const newValue = field.value.includes(option)
                                                ? field.value.filter((val) => val !== option)
                                                : [...field.value, option];
                                            field.onChange(newValue);
                                        }}
                                    >
                                        {option}
                                    </div>
                                ))}

                                {filteredOptions.length === 0 && (
                                    <div className="text-gray-500">No results found</div>
                                )}
                            </div>
                        </>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />



    );
};



const ServiceSectionCards = ({ data }) => (
    <div className="bg-white border p-3 rounded-lg w-full sm:w-1/3">
        <div className="font-semibold mb-2 text-center">Services Cards</div>
        <div className="overflow-y-auto max-h-[40rem] scrollbar-design">
            {data && data.map((heroSecCard, i) => (
                <ServiceCard key={i} i={i} serviceSecCard={heroSecCard} />
            ))}
        </div>
    </div>
);

const ServiceCard = ({ serviceSecCard, i }) => (
    <div className="relative bg-gray-50 flex gap-2 flex-col rounded-lg p-3 my-2 text-sm">
        <span className='absolute top-1 right-1 text-xs px-1 rounded-full text-white bg-gray-400'>{i + 1}</span>
        <CardItem label="Title" content={serviceSecCard?.title} />
        <CardItem label="Desc" content={serviceSecCard?.description} />
        <CardItem label="Fetch on" content={serviceSecCard?.fetchOnSlug} />
        <CardItem label="Redirect URL" content={serviceSecCard?.ctaRedirectUrl} />
    </div>
);

const CardItem = ({ label, content }) => (
    <div className="flex gap-2">
        <span className="font-medium text-nowrap">{label}:</span>
        <span className="text-gray-600">{content}</span>
    </div>
);



export default ServiceSection