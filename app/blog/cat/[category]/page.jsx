import { getAllBlogPosts } from "@/lib/blogs";
import BlogCatCom from "./blogCatCom"


// export async function generateMetadata({ params }) {
//     const currentSlug = `/blog/cat/${params.category}`;
//   const meta = {};



//   return {
//     title: meta.title || "Software Development Services in India | Custom Development Solutions | Bunnx",
//     description: meta.description || "Software development services in India for scalable web & mobile apps development.  We believe in innovative and yet cost-effective solutions tailored by expert developers.",
//     robots: "noindex",  
//     alternates: {
//       canonical: currentSlug,
//     },
//   }
// }


export default async function BlogCardByCategory() {


    const allBlogPosts = await getAllBlogPosts();

    return (
        <>

            <BlogCatCom allBlogPosts={allBlogPosts.nodes}/>


        </>
    )
}

