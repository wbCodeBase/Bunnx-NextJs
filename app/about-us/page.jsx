import HeroSection from "@/components/aboutUs/HeroSection"
import WhatWeBelieve from "@/components/aboutUs/WhatWeBelieve"
import OurCoreValue from "@/components/aboutUs/OurCoreValue"
import OurTeam from "@/components/aboutUs/OurTeam"
import OurPhilosophy from "@/components/aboutUs/OurPhilosophy"


// export async function generateMetadata(parent) {

//   return {
//     title: "About Us",
//     description: "Here you can about us",
//     robots: "noindex, nofollow", 
//   }
// }

export const metadata = {
    title: "About Bunnx | Crafting Excellence in Software Development",
    description: 'Discover the story behind Bunnx – your trusted partner in Software Development. Learn about our mission, values, and commitment to delivering top-notch solutions tailored to your needs.',
    robots: "noindex, nofollow",
  }


const AboutUs = () => {
        return (
            <>

                <HeroSection />

                <WhatWeBelieve />

                <OurCoreValue />

                <OurTeam />

                <OurPhilosophy />

            </>
        )
    }

export default AboutUs
