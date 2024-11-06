import React from 'react'

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

const AdminpanelLayout = ({ children }) => {
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





// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
// import { AppSidebar } from "@/components/app-sidebar"

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <SidebarProvider>
//       <AppSidebar />
//       <main>
//         <SidebarTrigger />
//         {children}
//       </main>
//     </SidebarProvider>
//   )
// }
