'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';


// export async function generateMetadata({ params }, parent) {
//   // read route params
//   const currentIndustrySlug = params.industry
//   console.log("Industry page", currentIndustrySlug);

//   // fetch data
//   const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/metadata/${currentIndustrySlug}`);
//   if (!response.ok) {
//     console.log(`Failed to fetch metadata: ${response.statusText}`);
//     return null
//   }

//   // Parse JSON once
//   const jsonData = await response.json(); 
  
//   return {
//     title: jsonData.title || "Industry",
//     description: jsonData.description || "Industry Description",
//     robots: "noindex",
//     // openGraph: {
//     //   images: ['/some-specific-page-image.jpg', ...previousImages],
//     // },
//   }
// }


export default function Industry() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Coming Soon
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
          >
            Back to Home
          </Link>
        </div>
        
        {/* Optional: Add animated elements */}
        <div className="mt-12 flex justify-center space-x-4">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-3 h-3 bg-blue-500 rounded-full"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}