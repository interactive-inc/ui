import "@/src/globals.css"
import "@/src/agent"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/src/app-sidebar"
import { SiteHeader } from "@/src/site-header"

type Props = {
  children: React.ReactNode
}

export default function Layout(props: Props) {
  return (
    <SidebarProvider className="flex-col bg-sidebar [--header-height:--spacing(14)]">
      <SiteHeader />
      <div className="flex flex-1">
        <AppSidebar />
        <SidebarInset className="bg-page md:peer-data-[variant=inset]:mt-0">
          <div className="flex flex-col gap-6 p-4 md:p-6">{props.children}</div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
