
import localFont from "next/font/local";
import { AR_One_Sans, Quando } from "next/font/google";
import "./globals.css";

import { ReduxProvider } from '../store/ReduxProvider';
import { Toaster } from "@/components/ui/sonner"

import { SessionProvider } from "next-auth/react"; // Import SessionProvider
import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
  title: "Software Development Company - Bunnx",
  description: "Custom Software Development Services and Solutions to build top-tier intelligent enterprises with speed and agility.",
  robots: "noindex", // Ensures pages are marked as noindex
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">



      <body className={`${geistSans.variable} ${quando.variable} ${geistMono.variable} ${arOneSans.variable} antialiased`}
      >
        <SessionProvider>
          <ReduxProvider>
            <HeaderFooterWrapper>{children}</HeaderFooterWrapper>
            <Toaster />
          </ReduxProvider>
        </SessionProvider>
      </body>
    </html>
  );
}


