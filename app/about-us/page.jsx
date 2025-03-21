import HeroSection from "@/components/aboutUs/HeroSection"
import WhatWeBelieve from "@/components/aboutUs/WhatWeBelieve"
import OurCoreValue from "@/components/aboutUs/OurCoreValue"
import OurTeam from "@/components/aboutUs/OurTeam"
import OurPhilosophy from "@/components/aboutUs/OurPhilosophy"


export const metadata = {
    title: "About us | Bunnx",
    description: 'Discover the story behind Bunnx – your trusted partner in Software Development. Learn about our mission, values, and commitment to delivering top-notch solutions tailored to your needs.',
    robots: "index",
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
