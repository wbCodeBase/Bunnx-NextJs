import React from 'react'

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/adminpanel/App-sidebar"

const AdminpanelLayout = ({ children, data }) => {
  console.log("data", data);
  
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className='w-full'>
          <SidebarTrigger />
          {children} 
        </main>
      </SidebarProvider>
    </>
  )
}

export default AdminpanelLayout;

