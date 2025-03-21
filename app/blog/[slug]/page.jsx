

import BlogContent from "@/components/blog/BlogContent";
import HeroSectionBlogDetail from "@/components/blog/HeroSectionBlogDetail";
import { getSingleBlogPost } from "@/lib/blogs"


// export async function generateMetadata({ params }) {
//     const currentSlug = `/blog/${params.category}`;
//   const meta = {};

// //   const singleBlogPost = await getSingleBlogPost(params.slug);  
// //   console.log("singleBlogPost", singleBlogPost);

//   return {
//     title: meta.title || "Software Development Services in India | Custom Development Solutions | Bunnx",
//     description: meta.description || "Software development services in India for scalable web & mobile apps development.  We believe in innovative and yet cost-effective solutions tailored by expert developers.",
//     robots: "noindex",  
//     alternates: {
//       canonical: currentSlug,
//     },
//   }
// }


export default async function BlogPost({params}) {


    const singleBlogPost = await getSingleBlogPost(params.slug);  

    // console.log("singleBlogPost", singleBlogPost.author.node.avatar.url);


    return (
        <>

            <HeroSectionBlogDetail dedicatedBlogPost={singleBlogPost} />
            <BlogContent dedicatedBlogPost={singleBlogPost} />

        </>
    )
}

