"use client"
import React from 'react'

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/adminpanel/Appsidebar"

const AdminpanelLayout = ({ children }) => {



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
  )
}

export default AdminpanelLayout;

