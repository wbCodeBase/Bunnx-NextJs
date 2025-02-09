import HireDetailsComponent from "./hireComponent"


export async function generateMetadata({ params }) {
  // read route params
  const currentSlug = params.hireDevOf
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
    title: jsonData.title || "Hire Page Title",
    description: jsonData.description || "Hire Page Description",
    robots: "noindex",
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  }
}




export default function HireDevOf() {

  return (
    <>
      <HireDetailsComponent />
    </>
  );
}

