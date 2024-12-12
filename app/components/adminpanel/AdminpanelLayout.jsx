import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/adminpanel/Appsidebar"

import { redirect } from "next/navigation"
import { useSession } from "next-auth/react";

export const metadata = {
  title: "Admin Panel",
  description: "Secure Admin Dashboard",
};

const AdminpanelLayout = ({ children }) => {

  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  console.log("AdminLayout", session?.user?.name);

  if (!session?.user?.name) {
    redirect("/login");
    return null;
  }

  //   const session = await auth().catch(err => {
  //     console.error("Error fetching session:", err);
  //   });

  //   console.log(session?.user?.name);

  //   if (!session || !session.user?.name) {
  //   redirect("/login");
  //   return null;
  // }

  return (
    <>

      <SidebarProvider>
        <AppSidebar />

        {/* <main className="flex-1 p-4"> */}
        <main className="w-full">
          <SidebarTrigger />
          {children}
        </main>

      </SidebarProvider>

    </>
  )
}

export default AdminpanelLayout;

