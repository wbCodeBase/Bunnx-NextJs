import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/adminpanel/Appsidebar"


export const metadata = {
  title: "Admin Panel",
  description: "Secure Admin Dashboard",
};

const AdminpanelLayout = ({ children }) => {


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

