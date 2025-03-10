"use client"

import { useParams } from "next/navigation"
import { HeroSectionCategory } from "@/components/blog/HeroSectionBlog"
import FeaturedPosts from "@/components/blog/BlogCard"
// import BlogContent from "@/components/blog/BlogContent"

export default function BlogPost() {

    const params = useParams()
    console.log("Params", params.category)


    const featuredPosts = [
        {
            id: "1",
            slug: "blog/rust-vs-go-modern-systems-programming",
            title: "Rust vs Go: Navigating Modern Systems Programming in 2025",
            category: "Programming & Development",
            categorySlug: "/blog/cat/programming-and-development",
            image: "https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?t=st=1741264600~exp=1741268200~hmac=05ef51efe23fb3d77675e324f2ffc89df1b10c3eabc42938010da04ea26ebefe&w=1380",
            author: {
                name: "Neha Sahu",
                avatar: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg?height=50&width=50",
            },
            date: "Dec 9, 2024",
        },
        {
            id: "2",
            slug: null,
            title: "AI-Powered Text & Video Verification with Cryptography",
            category: "Programming & Development",
            categorySlug: "/blog/cat/programming-and-development",
            image: "https://onfido.com/wp-content/uploads/2022/10/Identity-Verification_Header.png",
            author: {
                name: "Neha Sahu",
                avatar: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg?height=50&width=50",
            },
            date: "Nov 14, 2024",
        },
        {
            id: "3",
            slug: null,
            title: "Best Security Practices for Web Apps",
            category: "Cyber Security",
            categorySlug: "/blog/cat/cyber-security",
            image: "https://wisdomplexus.com/wp-content/uploads/2021/06/Web-application-security-best-practices.png",
            author: {
                name: "Neha Sahu",
                avatar: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg?height=50&width=50",
            },
            date: "Sep 23, 2024",
        },
        {
            id: "4",
            slug: null,
            title: "How to Prevent Data Breaches",
            category: "Cyber Security",
            categorySlug: "/blog/cat/cyber-security",
            image: "https://cdn2.hubspot.net/hubfs/6120848/HS%20Blogs%20-%2080x480%20%281%29.png",
            author: {
                name: "Neha Sahu",
                avatar: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg?height=50&width=50",
            },
            date: "Sep 23, 2024",
        },
    ]

    const filteredPost = featuredPosts.filter((blogPost) => {
        const categorySlug = blogPost?.categorySlug?.split("/blog/cat/")[1]; // Extract the slug part
        return categorySlug === params?.category;
    });


    return (
        <>


            <HeroSectionCategory />


            <FeaturedPosts featuredPosts={filteredPost} />


        </>
    )
}

