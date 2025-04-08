

import BlogContent from "@/components/blog/BlogContent";
import HeroSectionBlogDetail from "@/components/blog/HeroSectionBlogDetail";
import { getSingleBlogPost } from "@/lib/blogs"


export async function generateMetadata({ params }) {
    const currentSlug = `/blog/${params.slug}`;
//   const meta = {};

//   const singleBlogPost = await getSingleBlogPost(params.slug);  
//   console.log("singleBlogPost", singleBlogPost);

  return { 
    title: "Blog Page",
    description: "Blog Page",
    robots: "noindex",  
    alternates: {
      canonical: currentSlug,
    },
  }
}


export default async function BlogPost({params}) {


    const singleBlogPost = await getSingleBlogPost(params.slug);  


    return (
        <>

            <HeroSectionBlogDetail dedicatedBlogPost={singleBlogPost} />
            <BlogContent dedicatedBlogPost={singleBlogPost} />

        </>
    )
}

