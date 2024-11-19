import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,

  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub, SidebarMenuSubItem,
} from "@/components/ui/sidebar"


import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"



import Link from "next/link"



// Menu items.
const items = [
  {
    title: "Home",
    url: "/bunnx-admin",
    icon: Home,
  },
  {
    title: "Servcie",
    url: "/bunnx-admin/template",
    icon: Inbox,
  },
  {
    title: "Components",
    url: "/bunnx-admin/",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    // <Sidebar className="mt2">
    //   <SidebarContent>
    //     <SidebarGroup>
    //       <SidebarGroupLabel>Menu</SidebarGroupLabel>
    //       <SidebarGroupContent>
    //         <SidebarMenu>
    //           {items.map((item) => (
    //             <SidebarMenuItem key={item.title}>
    //               <SidebarMenuButton asChild>
    //                 <Link href={item.url}>
    //                   <item.icon />
    //                   <span>{item.title}</span>
    //                 </Link>
    //               </SidebarMenuButton>
    //             </SidebarMenuItem>
    //           ))}
    //         </SidebarMenu>
    //       </SidebarGroupContent>
    //     </SidebarGroup>
    //   </SidebarContent>
    // </Sidebar>




    <Sidebar className="mt2">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            {/* <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu> */}

            <SidebarMenu>
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    {/* Pass content to SidebarMenuButton explicitly */}
                    <SidebarMenuButton>Menu Button</SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {/* Ensure SidebarMenuSubItem has valid children */}
                      <SidebarMenuSubItem>Sub Item 1</SidebarMenuSubItem>
                      <SidebarMenuSubItem>Sub Item 2</SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>

          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>


  )
}
