"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";


export default function HeaderFooterWrapper({ children }) {
    const pathname = usePathname();

    const isBunnxAdmin = pathname.includes("bunnx-admin");

    return (
        <>
            {!isBunnxAdmin && <Header />}
            {children}
            {!isBunnxAdmin && <Footer />}
        </>
    );
}
