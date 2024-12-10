"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";


export default function HeaderFooterWrapper({ children }) {
    const pathname = usePathname();

    const isExcluded = pathname.includes("bunnx-admin") || pathname.includes("login") || pathname.includes("signup");


    return (
        <>
            {!pathname.includes("bunnx-admin") && <Header />}
            {children}
            {!isExcluded && <Footer />}
        </>
    );
}
