"use client"

import { useParams } from "next/navigation"
import HeroSectionBlog from "@/components/blog/HeroSectionBlog"
import BlogContent from "@/components/blog/BlogContent"

export default function BlogPost() {

    const params = useParams()
    console.log("Params", params)

    return (    
        <>

            <HeroSectionBlog />
            <BlogContent />

        </>
    )
}

