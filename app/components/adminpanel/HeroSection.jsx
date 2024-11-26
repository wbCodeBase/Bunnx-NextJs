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


import { useCreateComponentContentMutation, useDeleteComponentContentMutation, useUpdateComponentContentMutation } from '../../../store/api/myApi';


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

const HeroSection = ({ heroSection, templateName, activeSlugData }) => {
    const [componentName, setComponentName] = useState("heroSection");
    const [editMode, setEditMode] = useState(false); // Track edit mode
    const [editId, setEditId] = useState(null); // Track the ID of the item being edited

    
    const [createComponentContent, result] = useCreateComponentContentMutation(); 
    const [deleteComponentContent] = useDeleteComponentContentMutation();
    const [updateComponentContent, { data, isSuccess: updateIsSuccess, isError: updateIsError, error: updateError, isLoading: updateIsLoading, reset }] = useUpdateComponentContentMutation();



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
        if (editMode && editId) {
            try {
                await updateComponentContent({
                    id: editId,
                    templateName,
                    componentName,
                    componentData: values,
                }).unwrap();
                form.reset(); // Reset form values
                setEditMode(false); // Exit edit mode
                alert("Content updated successfully!");
            } catch (err) {
                console.error("Error updating content:", err);
                alert("Failed to update content.");
            } finally {
                reset(); // Reset the mutation state
            }
        } else {
            try {
                await createComponentContent(values).unwrap();
                form.reset(); // Reset form values
                alert("Component content added successfully!");
            } catch (err) {
                console.error("Error adding content:", err);
                alert("Failed to add content.");
            } finally {
                reset(); // Reset the mutation state
            }
        }
    };


    // Handle edit and delete operations
    const updateDeleteHandler = async (id, operationType) => {
        if (operationType === "delete") {
            await deleteComponentContent({ id, templateName, componentName });
            alert("Component content deleted successfully!");

        } else if (operationType === "update") {
            // Enter edit mode and populate form with existing data
            const contentToEdit = heroSection.find((item) => item._id === id);
            if (contentToEdit) {
                setEditMode(true);
                setEditId(id);
                form.reset({
                    titlePrefix: contentToEdit.titlePrefix || "",
                    title: contentToEdit.title || "",
                    description: contentToEdit.description || "",
                    imageUrl: contentToEdit.imageUrl || "",
                    ctaRedirectUrl: contentToEdit.ctaRedirectUrl || "",
                    fetchOnSlug: contentToEdit.fetchOnSlug || "",
                    ctaText: contentToEdit.ctaText || "",
                    templateName: contentToEdit.templateName || templateName,
                    componentName: contentToEdit.componentName || componentName,
                });
            }
        }
    };


    const slugArray = activeSlugData;

    return (
        <div className="flex sm:py-10 py-5 flex-col justify-start w-full bg-gray-50">
            
            <div className="text-2xl font-semibold sm:mt-6 sm:mx-24 mb-2 text-center sm:text-left">
                Hero Section <span className="text-sm">({templateName})</span>
            </div>


            {result.isError && <p className='text-red-600 text-sm sm:mx-24 mb-2'>{result.error?.data?.error || "Something went wrong"}</p>}
            {updateIsError && <p className='text-red-600 text-sm sm:mx-24 mb-2'>{updateError || "Something went wrong"}</p>}



            <div className="flex justify-center gap-10 flex-wrap w-full sm:w-auto p-3">
                <HeroSectionForm
                    form={form}
                    result={result}
                    updateIsLoading={updateIsLoading}
                    onSubmit={onSubmit}
                    editMode={editMode}
                    slugArray={slugArray}
                />
                <HeroSectionCards
                    data={heroSection}
                    updateDeleteHandler={updateDeleteHandler}
                />
            </div>
        </div>
    );
};



const HeroSectionForm = ({ form, onSubmit, result, editMode, updateIsLoading, slugArray }) => (
    <Form {...form}>
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-full sm:w-1/2 border bg-white sm:p-8 p-3 rounded-lg"
        >
            <FormFieldInput form={form} name="titlePrefix" label="Title Prefix" placeholder="Title prefix" />
            <FormFieldInput form={form} name="title" label="Title" placeholder="Title" />
            <FormFieldInput form={form} name="description" label="Description" placeholder="Enter Description" />
            <FormFieldInput form={form} name="imageUrl" label="Image" placeholder="Coming Soon" />
            <FormFieldInput
                form={form}
                name="ctaRedirectUrl"
                label="CTA Redirect URL"
                placeholder="Select a redirect URL"
                options={slugArray}
            />
            <FormFieldInput form={form} name="ctaText" label="CTA Title" placeholder="Enter CTA Title" />
            <FormFieldInput
                form={form}
                name="fetchOnSlug"
                label="FetchOn Page"
                placeholder="Select slug where it displays"
                options={slugArray}
            />
            {/* <FormFieldInput form={form} name="fetchOnSlug" label="FetchOn Page" placeholder="Enter slug where it displays" /> */}

            <div className="mt-4">
                <Button type="submit">{result.isLoading ? "Saving..." : updateIsLoading ? "Updating..." : editMode ? "Update" : "Submit"}</Button>
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

                        name === "ctaRedirectUrl" && options.length > 0 || name === "fetchOnSlug" && options.length > 0 ? (
                            <select className="bg-gray-50 border rounded-md ml-4 w-72 p-1.5 text-sm" {...field}>
                                <option value="" disabled>
                                    {placeholder || "Select an option"}
                                </option>
                                {options.map((option) => (
                                    <option key={option.slug} value={option.slug}>
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





const HeroSectionCards = ({ data, updateDeleteHandler }) => (
    <div className="bg-white border p-3 rounded-lg w-full sm:w-1/3">
        <div className="font-semibold mb-2 text-center">Hero Section Cards</div>
        <div className="overflow-y-auto max-h-[40rem] scrollbar-design">
            {data && data.map((heroSecCard, i) => (
                <HeroCard key={i} i={i} updateDeleteHandler={updateDeleteHandler} heroSecCard={heroSecCard} />
            ))}
        </div>
    </div>
);


const HeroCard = ({ heroSecCard, i, updateDeleteHandler }) => (
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
                onClick={() => updateDeleteHandler(heroSecCard._id, "update")}
                className="flex items-center gap-1 px-2 py-1 text-sm font-medium text-gray-600 border-gray-500 border hover:border-blue-600 rounded-md bg-white hover:bg-blue-600 hover:text-white transition"
            >
                <MdEdit />
            </button>

            {/* Delete Button */}
            <button
                onClick={() => updateDeleteHandler(heroSecCard._id, "delete")}
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