import Image from "next/image"
import Link from "next/link"


// import {
//     Avatar,
//     AvatarFallback,
//     AvatarImage,
// } from "@/components/ui/avatar"

// Define the blog post type
// type BlogPost = {
//   id: string
//   slug: string
//   title: string
//   category: string
//   image: string
//   author: {
//     name: string
//     avatar: string
//   }
//   date: string
// }

// Sample data (you would fetch this from your API/CMS)
const featuredPosts = [
    {
        id: "1",
        slug: "rust-vs-go-modern-systems-programming",
        title: "Rust vs Go: Navigating Modern Systems Programming in 2025",
        category: "Physical Security Industry",
        image: "https://cdn.prod.website-files.com/6311f5c94c17c1515c3acb72/6689d00b6373f8584568b320_66217ff47b30e80c436ab945_Get%20high-quality%20and%20durable%20IP%20cameras-p-1080-p-500.webp",
        author: {
            name: "Neha Sahu",
            avatar: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg?height=50&width=50",
        },
        date: "Dec 9, 2024",
    },
    {
        id: "2",
        slug: null,
        title: "AI Checker for Text and Video: A Cryptographic Approach",
        category: "Physical Security Industry",
        image: "https://cdn.prod.website-files.com/6311f5c94c17c1515c3acb72/6772bca7757c5de3138c1bf8_ridgecrat.avif",
        author: {
            name: "Neha Sahu",
            avatar: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg?height=50&width=50",
        },
        date: "Nov 14, 2024",
    },
    {
        id: "3",
        slug: null,
        title: "Ridgecrest Foundation Modernizes Security with Coram",
        category: "Customer Success",
        image: "https://cdn.prod.website-files.com/6311f5c94c17c1515c3acb72/67379dccc1b03a43e31c2285_Blog%20and%20Case%20Study%20Templates%20(43)-p-800.png",
        author: {
            name: "Neha Sahu",
            avatar: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg?height=50&width=50",
        },
        date: "Sep 23, 2024",
    },
]

export default function FeaturedPosts() {
    return (
        <section className="py-12 px-4 md:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-semibold text-center mb-12">Featured Posts</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredPosts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </section>
    )
}



function BlogCard({ post }) {
    return (
        <Link href={post.slug ? `/blog/${post.slug}` : "/"}>
            <article className="rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
                <div className="relative h-64 w-full overflow-hidden">
                    <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                    />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                        <span className="inline-block py-1 px-3 rounded-full border border-orange-500 text-orange-500 font-medium">
                            {post.category}
                        </span>
                    </div>

                    <h3 className="text-lg font-medium mb-6 flex-grow">{post.title}</h3>

                    <div className="flex items-center mt-auto">
                        {/* <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar> */}
                        <div className="relative w-10 h-10 rounded-full border border-gray-500 overflow-hidden">
                            <Image
                                src={post.author.avatar}
                                alt={post.author.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="ml-3">
                            <p className="font-medium">{post.author.name}</p>
                        </div>
                        <div className="ml-auto text-xs text-gray-400">{post.date}</div>
                    </div>
                </div>
            </article>
        </Link>
    )
}

