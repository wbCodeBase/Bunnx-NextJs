
// import localFont from "next/font/local";
import { AR_One_Sans, Quando } from "next/font/google";
import "./globals.css";
import Script from "next/script"

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


export default async function RootLayout({ children }) {

  return (
    <html lang="en">

      {/* <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MWQ723WDF6"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-MWQ723WDF6');
        </script>
      </head>

      <body className={` ${quando.variable} ${arOneSans.variable} antialiased`}> */}

      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MWQ723WDF6');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${quando.variable} ${arOneSans.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MWQ723WDF6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <SessionProvider>
          <ReduxProvider>
            <ScrollToTop />

            <HeaderFooterWrapper>{children}</HeaderFooterWrapper>

            <Toaster />

          </ReduxProvider>
        </SessionProvider>
      </body>
    </html>
  );
}


