import HeroSection from '@/components/contactUs/HeroSection'
import HereToHelp from '@/components/contactUs/HereToHelp'


// export async function generateMetadata(parent) {

//   return {
//     title: "Contact Us Page | Bunnx",
//     description: "Here you can contact with us",
//     robots: "noindex, nofollow",
//   }

// }


export const metadata = {
  title: "Contact Bunnx | Get in Touch with Our Team Today",
  description: 'Have questions or need assistance? Contact Bunnx for expert support and personalized solutions. We are here to help you every step of the way!',
  robots: "noindex, nofollow",
}


const contactUs = () => {
  return (
    <>

      <HeroSection />

      <HereToHelp />

    </>
  )
}

export default contactUs