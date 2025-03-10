import Image from "next/image"
import Link from "next/link"




export default function FeaturedPosts({featuredPosts}) {
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

