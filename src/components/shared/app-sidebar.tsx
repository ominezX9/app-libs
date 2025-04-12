import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar"
import { apps } from "@/pages/apps/link-libs";

import { Home, Bot, File } from "lucide-react"

const appsMenuItems = apps.map((item) => (
    {
        title: item.toString().replaceAll("-", " "),
        url: `/apps/${item}`,
        icon: File
    }
))


// [
//     {
//         title: "Generate PDF",
//         url: "/apps/generate-pdf",
//         icon: File
//     },
// ];

const navigationMenuItems = [
    {
        title: "Home",
        url: "/",
        icon: Home
    },
    {
        title: "Apps",
        url: "/apps",
        icon: Bot
    }
]

export function AppSidebar() {

    return (
        <Sidebar className="p-5" >
            <SidebarHeader className="px-4 py-2">
                <h1 className="font-bold">
                    Menu
                </h1>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {
                                navigationMenuItems.map(
                                    (item) => (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton asChild>
                                                <a href={item.url}>
                                                    <item.icon />
                                                    <span>{item.title}</span>
                                                </a>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    )
                                )
                            }
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Apps</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {
                                appsMenuItems.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <a href={item.url}>
                                                <item.icon />
                                                <span className="capitalize">{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                                )
                            }
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}
