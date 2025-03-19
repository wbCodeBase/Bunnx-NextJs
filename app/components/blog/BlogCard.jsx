import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/blogs"

export default function FeaturedPosts({ featuredPosts }) {
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

    console.log(post);

    return (
        <Link href={post.slug ? `/blog/${post.slug}` : "/"}>
            <article className="rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
                <div className="relative h-64 w-full overflow-hidden">
                    <Image
                        src="https://wordpress-1228935-4384187.cloudwaysapps.com/wp-content/uploads/2022/12/travel-books-360x240.jpg"
                        alt={post.featuredImage.node.mediaDetails.file}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                    />
                </div>

                <div className="p-4 flex flex-col flex-grow">
                    <div className="mb-4 flex flex-wrap gap-2">

                        {post.categories.nodes.map((category) => (
                            // <Link href={category.slug} key={category.slug} className="inline-block py-1 px-3 rounded-full border border-orange-500 text-orange-500 font-medium">
                            <div key={category.slug} className="inline-block py-1 px-3 rounded-full border border-orange-500 text-orange-500 font-medium">
                                {category.name}
                            </div>
                        ))}

                    </div>

                    <div className="mb-4 flex gap-1 flex-col">
                        <h3 className="text-xl font-semibold">{post.title}</h3>

                        <div className="text-gray-700 line-clamp" dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
                    </div>


                    <div className="flex items-center mt-auto">

                        <div className="relative rounded-full border border-gray-100 overflow-hidden">
                            <Image
                                src={post.featuredImage.node.author.node.avatar.url}
                                alt={post.featuredImage.node.author.node.name}
                                width={post.featuredImage.node.author.node.avatar.width}
                                height={post.featuredImage.node.author.node.avatar.size}
                                className="w-8 h-auto"
                            />
                        </div>
                        <div className="ml-3">
                            <p className="text-gray-500">{post.featuredImage.node.author.node.name}</p>
                        </div>
                        <div className="ml-auto text-xs text-gray-500">{formatDate(post.date)}</div>
                    </div>
                </div>
            </article>
        </Link>
    )
}

// function BlogCard({ post }) {
//     return (
//         <Link href={post.slug ? `/blog/${post.slug}` : "/"}>
//             <article className="rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
//                 <div className="relative h-64 w-full overflow-hidden">
//                     <Image
//                         src={post.image || "/placeholder.svg"}
//                         alt={post.title}
//                         fill
//                         className="object-cover"
//                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                         priority
//                     />
//                 </div>

//                 <div className="p-6 flex flex-col flex-grow">
//                     <div className="mb-4">
//                         <span className="inline-block py-1 px-3 rounded-full border border-orange-500 text-orange-500 font-medium">
//                             {post.category}
//                         </span>
//                     </div>

//                     <h3 className="text-lg font-medium mb-6 flex-grow">{post.title}</h3>

//                     <div className="flex items-center mt-auto">

//                         <div className="relative w-10 h-10 rounded-full border border-gray-500 overflow-hidden">
//                             <Image
//                                 src={post.author.avatar}
//                                 alt={post.author.name}
//                                 fill
//                                 className="object-cover"
//                             />
//                         </div>
//                         <div className="ml-3">
//                             <p className="font-medium">{post.author.name}</p>
//                         </div>
//                         <div className="ml-auto text-xs text-gray-400">{post.date}</div>
//                     </div>
//                 </div>
//             </article>
//         </Link>
//     )
// }

