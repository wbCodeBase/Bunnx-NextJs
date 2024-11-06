"use client";

import React from 'react';
import AdminpanelLayout from '@/components/adminpanel/AdminpanelLayout';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useCreateHeroSecContentMutation, useGetHeroSecItemsQuery } from '../../../store/api/myApi';

import "./hero.css";

const formSchema = z.object({
    titlePrefix: z.string().optional(),
    title: z.string().min(2, { message: "Title must be at least 2 characters." }),
    description: z.string().optional(),
    imageUrl: z.string().optional(),
    ctaRedirectUrl: z.string().optional(),
    primaryKey: z.string().optional(),
});

const Herosection = () => {


    const [createHeroSecContent] = useCreateHeroSecContentMutation();

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
        console.log(values);

        try {
            await createHeroSecContent(values)
            console.log('Hero section content created successfully');

            form.reset();
        } catch (error) {
            console.error('Failed to create user:', error);
        }

    }



    const { data, error, isLoading } = useGetHeroSecItemsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    console.log(data);



    return (
        <>
            <AdminpanelLayout>

                <div className='flex items-center flex-col justify-start h-full w-full bg-gray-50'>

                    <div className='text-center text-2xl font-semibold p-6'>Hero Section</div>

                    <div className='flex justify-center gap-10 flex-wrap w-full sm:wauto mx-10 p-3'>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full sm:w-1/2 border bg-white sm:p-8 p-3 rounded-lg">

                                <FormField
                                    control={form.control}
                                    name="titlePrefix"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Title Prefix</FormLabel>
                                            <FormControl>
                                                <Input className='bg-gray-50' placeholder="Title prefix" {...field} />
                                            </FormControl>
                                            {/* <FormDescription>
                                            This is your public display name.
                                        </FormDescription> */}
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Title</FormLabel>
                                            <FormControl>
                                                <Input className='bg-gray-50' placeholder="Title" {...field} />
                                            </FormControl>
                                            {/* <FormDescription>
                                            This is your public display name.
                                        </FormDescription> */}
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />


                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Description</FormLabel>
                                            <FormControl>
                                                <Input className='bg-gray-50' placeholder="Enter Description" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="imageUrl"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Image</FormLabel>
                                            <FormControl>
                                                <Input className='bg-gray-50' placeholder="Coming Soon" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="ctaRedirectUrl"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Cta Redirect Url</FormLabel>
                                            <FormControl>
                                                <Input className='bg-gray-50' placeholder="Cta Redirect Url" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="primaryKey"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Primary Key</FormLabel>
                                            <FormControl>
                                                <Input className='bg-gray-50' placeholder="Enter unique key" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className='mt-4'>
                                    <Button type="submit">Submit</Button>
                                </div>

                            </form>
                        </Form>

                        <div className='bg-white border p-3 rounded-lg w-full sm:w-1/3'>
                            <span className='font-semibold mb-2'>Hero Section cards</span>

                            <div className='overflow-y-auto max-h-[35rem] scrollbar-design'>

                                {data && data.map((heroSecCard, i) => (
                                    
                                    <div key={i} className='bg-gray-50 flex gap-2 flex-col rounded-lg p-3 my-2 text-sm'>
                                        <div className='flex gap-2'>
                                            <span className='font-medium'>Prefix:</span>
                                            <span className='text-gray-600'>{heroSecCard?.titlePrefix}</span>
                                        </div>
                                        <div className='flex gap-2'>
                                            <span className='font-medium'>Title:</span>
                                            <span className='text-gray-600'>{heroSecCard?.title}</span>
                                        </div>
                                        <div className='flex gap-2'>
                                            <span className='font-medium'>Para:</span>
                                            <span className='text-gray-600'>{heroSecCard?.description}</span>
                                        </div>
                                        <div className='flex gap-2'>
                                            <span className='font-medium'>Image:</span>
                                            <span className='text-gray-600'>Soon</span>
                                        </div>
                                        <div className='flex gap-2'>
                                            <span className='font-medium'>Primary Key:</span>
                                            <span className='text-gray-600'>{heroSecCard?.primaryKey}</span>
                                        </div>
                                        <div className='flex gap-2'>
                                            <span className='font-medium'>ctaRedirectUrl:</span>
                                            <span className='text-gray-600'>{heroSecCard?.ctaRedirectUrl}</span>
                                        </div>
                                    </div>

                                )
                                )}




                            </div>


                        </div>

                    </div>

                </div>

            </AdminpanelLayout>
        </>
    );
};

export default Herosection;
