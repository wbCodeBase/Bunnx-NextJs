"use client"

import { Link, Home, LayoutTemplate, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,

  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton
} from "@/components/ui/sidebar"




import { useRouter } from "next/navigation";



// Menu items.
const adminSidebarMenu = [
  {
    title: "Home",
    url: "/bunnx-admin",
    icon: Home,
  },


  {
    title: "Manage Slug",
    url: "/bunnx-admin/manage-slug",
    icon: Link,
  },

  {
    title: "Template",
    templates: [
      {
        title: "Service",
        url: "/bunnx-admin/service",
        icon: LayoutTemplate,
      }, {
        title: "Hire",
        url: "/bunnx-admin/hire",
        icon: LayoutTemplate,
      },
    ],
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

export default function AppSidebar() {
  const router = useRouter();


  const redirectOn = (redirectSlug) => {

    if (redirectSlug) {
      router.push(redirectSlug);
    } else {
      console.error("Redirect slug is missing!");
    }
  };



  return (

    <Sidebar className="mt2">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Admin Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminSidebarMenu.map((menu, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton className="cursor-pointer" onClick={() => redirectOn(menu.url)}>
                    {menu.icon && <menu.icon className="mr-2" />}
                    {menu.title}
                  </SidebarMenuButton>
                  {menu.templates && (
                    <SidebarMenuSub>
                      {menu.templates.map((template, subIndex) => (
                        <SidebarMenuSubItem key={subIndex}>
                          <SidebarMenuSubButton className="cursor-pointer" onClick={() => redirectOn(template.url)}>
                            {template.icon && <template.icon className="mr-2" />}
                            {template.title}
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>


  )
}
