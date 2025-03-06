"use client"

// import Image from "next/image"
// import Link from "next/link"
// import { ArrowLeft, Clock, Calendar, User, Tag } from "lucide-react"
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

            {/*  <div className="bg-gray-50 min-h-screen">
             <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh]">
        //         <Image
        //             src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        //             alt="Microservices Architecture Diagram"
        //             fill
        //             className="object-cover"
        //             priority
        //         />
        //         <div className="absolute inset-0 bg-black/50 flex items-end">
        //             <div className="container mx-auto px-4 py-12 text-white">
        //                 <div className="max-w-4xl">
        //                     <Link
        //                         href="/blog"
        //                         className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
        //                     >
        //                         <ArrowLeft className="mr-2 h-4 w-4" />
        //                         Back to Blog
        //                     </Link>
        //                     <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        //                         Microservices vs Monoliths: Choosing the Right Architecture for Your Project
        //                     </h1>
        //                     <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
        //                         <div className="flex items-center">
        //                             <Calendar className="mr-1 h-4 w-4" />
        //                             March 6, 2025
        //                         </div>
        //                         <div className="flex items-center">
        //                             <Clock className="mr-1 h-4 w-4" />8 min read
        //                         </div>
        //                         <div className="flex items-center">
        //                             <User className="mr-1 h-4 w-4" />
        //                             By Sarah Chen, Lead Architect
        //                         </div>
        //                         <div className="flex items-center">
        //                             <Tag className="mr-1 h-4 w-4" />
        //                             Software Architecture
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
                 </div>
             </div>
        /</div> */}



        </>
    )
}

