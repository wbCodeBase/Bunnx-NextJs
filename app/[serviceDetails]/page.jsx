
import ServiceDetailsComp from "./serviceComponent";

export async function generateMetadata({ params }, parent) {
  // read route params
  const currentSlug = params.serviceDetails
  console.log("Slug", currentSlug);

  // fetch data
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/metadata/${currentSlug}`);
  if (!response.ok) {
    console.log(`Failed to fetch metadata: ${response.statusText}`);
    return null
  }

  const jsonData = await response.json(); // Parse JSON once
  // console.log("Response JSON:", jsonData);
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: jsonData.title || "Services Page Title",
    description: jsonData.description || "Services Page Description",
    robots: jsonData.robots,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  }
}


const ServiceDetails = () => {

  return (
    <>
      <ServiceDetailsComp />
    </>
  )
}

export default ServiceDetails