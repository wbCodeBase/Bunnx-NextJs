import HeroSectionBlog from '@/components/blog/HeroSectionBlog'
import FeaturedPosts from '@/components/blog/BlogCard'


// export async function generateMetadata({ params }) {
//   // read route params
//   const currentSlug = params.serviceDetails
//   // console.log("Slug service page", currentSlug);


//   // fetch data
//   // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/metadata/${currentSlug}`);
//   // if (!response.ok) {
//   //   console.log(`Failed to fetch metadata: ${response.statusText}`);
//   //   return null
//   // }

//   // const jsonData = await response.json(); // Parse JSON once
//   // console.log("Response JSON:", jsonData);
//   // optionally access and extend (rather than replace) parent metadata
//   // const previousImages = (await parent).openGraph?.images || []

//   const meta = metaData[currentSlug] || {};

//   return {
//     title: meta.title,
//     description: meta.description,
//     robots: meta.robots,  
//     alternates: {
//       canonical: currentSlug,
//     },
//   }
// }

const featuredPosts = [
  {
      id: "1",
      slug: "/blog/rust-vs-go-modern-systems-programming",
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
      category: "Cybersecurity",
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
      category: "Cybersecurity",
      categorySlug: "/blog/cat/cyber-security",
      image: "https://cdn2.hubspot.net/hubfs/6120848/HS%20Blogs%20-%2080x480%20%281%29.png",
      author: {
          name: "Neha Sahu",
          avatar: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg?height=50&width=50",
      },
      date: "Sep 23, 2024",
  },
]

const Blog = () => {

  return (
    <>
      <HeroSectionBlog />



      <FeaturedPosts featuredPosts={featuredPosts} />

    </>
  )
}

export default Blog