import { AppSidebar } from "@/components/shared/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom"

export default function Layout() {
    return (
        <SidebarProvider defaultOpen={false}>
            <AppSidebar />
            <main className="w-full bg-gray-100 ">
                <header className="p-4 bg-white flex items-center justify-between">
                    <SidebarTrigger />
                </header>
                <div className="sm:p-[40px] p-[20px]">
                    <Outlet />
                </div>
            </main>
        </SidebarProvider>

    )
}
