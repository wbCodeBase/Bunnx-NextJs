import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/adminpanel/Appsidebar";

import Lottie from "lottie-react";
import loaderJson from "/public/pageAnimations/loader.json";

import { useGetUserByIdQuery } from "../../../store/api/myApi";

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

export const metadata = {
  title: "Admin Panel",
  description: "Secure Admin Dashboard",
};

const AdminpanelLayout = ({ children }) => {
  const { data: session, status } = useSession();

  // Unconditionally call the query with `skip` logic
  const { data: user, isLoading, isError, error } = useGetUserByIdQuery(
    session?.user?.id,
    { skip: !session?.user?.id }
  );

  // Handle session loading
  if (status === "loading") {
    return (
      <div className="h-screen flex justify-center items-center">
        <p className="text-2xl">Checking Authenticity...</p>
      </div>
    );
  }

  // Redirect if unauthenticated
  if (!session?.user || status === "unauthenticated") {
    redirect("/login");
    return null;
  }

  // Handle user query loading
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <Lottie animationData={loaderJson} loop={true} />
      </div>
    );
  }

  // Handle errors from user query
  if (isError) {
    console.error("Error fetching data:", error);
    return (
      <div className="h-screen flex justify-center items-center">
        Error: {error?.data?.error || "An error occurred"}
      </div>
    );
  }

  // Redirect if the user does not have admin privileges
  if (user && user?.role !== "admin" && session?.user?.role !== "superadmin") {
    redirect("/");
    return null;
  }

  // Render layout for admin or superadmin
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
};

export default AdminpanelLayout;
