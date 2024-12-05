"use client";

import "../template.css";

import AdminpanelLayout from "@/components/adminpanel/AdminpanelLayout";
import { useGetUserQueriesQuery } from "../../../store/api/myApi"


import Lottie from "lottie-react";
import loaderJson from "/public/pageAnimations/loader.json";



const Query = () => {

    const { data: userQuery, isLoading, isError, error } = useGetUserQueriesQuery();

    // console.log("userQuery", userQuery);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen w-full">
                <Lottie animationData={loaderJson} loop={true} />
            </div>
        );
    }

    if (isError) {
        console.error("Error fetching data:", error);
        return (
            <div className="h-screen flex justify-center items-center">
                Error: {error?.data?.error || "An error occurred"}
            </div>
        );
    }


    return (

        <AdminpanelLayout>

            <section className="bg-gray-50 h-full p-10 ">

                <h2 className="text-2xl font-semibold my-6 sm:mx-20 text-center sm:text-left">User Queries</h2>

                <div className="container mx-auto gap-6 sm:w-11/12 w-full flex flex-wrap">

                    {userQuery && userQuery.map((query) =>
                        <div className="border rounded-xl p-5 bg-white text-gray-600">
                            <div> <span className="text-sm font-semibold"> Name: </span>{query.name}</div>
                            <div> <span className="text-sm font-semibold"> Phone: </span>{query.phone}</div>
                            <div> <span className="text-sm font-semibold"> Email: </span>{query.email}</div>
                            <div> <span className="text-sm font-semibold"> Message: </span>{query.message}</div>
                        </div>
                    )}
                </div>
            </section>

        </AdminpanelLayout>

    )
}

export default Query