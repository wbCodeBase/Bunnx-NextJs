
// import localFont from "next/font/local";
import { AR_One_Sans, Quando } from "next/font/google";
import "./globals.css";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'

import { SessionProvider } from "next-auth/react"; // Import SessionProvider
import { ReduxProvider } from '../store/ReduxProvider';
import { Toaster } from "@/components/ui/sonner"
import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper";
import ScrollToTop from "@/components/layout/ScrollToTop";

const arOneSans = AR_One_Sans({
  subsets: ['latin'],
  variable: '--font-arOneSans',
  display: 'swap',
})

const quando = Quando({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-quando',
  display: 'swap',
})


export const metadata = {
  title: {
    template: '%s',
    default: 'Software Development Company in India | Website Development Agency | Bunnx', // a default is required when creating a template
  },
  description: "Custom Software Development Services and Solutions to build top-tier intelligent enterprises with speed and agility.",
  robots: "noindex", // Ensures pages are marked as noindex

  metadataBase: new URL('https://bunnx.com'),

  alternates: {
    canonical: '/',
  },

  openGraph: {
    url: '/',
    siteName: 'Bunnx',
    images: [
      {
        url: "/public/logo/bunnx-logo.png", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: 'ogImage',
      },
      {
        url: "/public/logo/bunnx-logo.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'ogImage1',
      },
    ],

    locale: 'en_US',
    type: 'website',
  },

}


// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-MWQ723WDF6"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-MWQ723WDF6');
// </script>


export default async function RootLayout({ children }) {

  return (
    <html lang="en">

      <GoogleTagManager gtmId="G-MWQ723WDF6" />

      <body className={` ${quando.variable} ${arOneSans.variable} antialiased`}>

        <SessionProvider>
          <ReduxProvider>
            <ScrollToTop />

            <HeaderFooterWrapper>{children}</HeaderFooterWrapper>

            <Toaster />

          </ReduxProvider>
        </SessionProvider>
      </body>


      <GoogleAnalytics gaId="G-MWQ723WDF6" />

    </html>
  );
}


