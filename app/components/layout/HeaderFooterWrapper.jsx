"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

import WhatsAppButton from "@/components/layout/whatsAppBtn";

export default function HeaderFooterWrapper({ children }) {
    const pathname = usePathname();

    const isExcluded = pathname.includes("bunnx-admin") || pathname.includes("login") || pathname.includes("signup") || pathname.includes("thank-you");


    return (
        <>
            {!pathname.includes("bunnx-admin") && <Header />}
            {children}
                
            {!isExcluded && <Footer />}
            {!isExcluded && <WhatsAppButton phoneNumber="+919971744661" />}
        </>
    );
}
