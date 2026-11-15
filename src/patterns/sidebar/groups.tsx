import { FolderIcon, InboxIcon, PlusIcon, SettingsIcon } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

const projects = [
  { href: "#projects-renewal", label: "コーポレートサイト改修" },
  { href: "#projects-ec", label: "EC サイトの決済移行" },
  { href: "#projects-app", label: "店舗アプリの保守" },
]

export function SidebarGroups() {
  return (
    <div className="h-80 w-full overflow-hidden rounded-xl border">
      <SidebarProvider
        aria-label="案件管理のサイドバー"
        className="relative h-full min-h-0 bg-sidebar"
      >
        <Sidebar className="absolute h-full">
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton render={<a href="#inbox" />}>
                    <InboxIcon />
                    <span>受信箱</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton render={<a href="#settings" />}>
                    <SettingsIcon />
                    <span>設定</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>案件</SidebarGroupLabel>
              <SidebarGroupAction aria-label="案件を追加">
                <PlusIcon />
              </SidebarGroupAction>
              <SidebarMenu>
                {projects.map((project) => (
                  <SidebarMenuItem key={project.href}>
                    <SidebarMenuButton
                      isActive={project.href === "#projects-renewal"}
                      render={<a href={project.href} />}
                    >
                      <FolderIcon />
                      <span>{project.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <p className="p-4 font-medium text-sm">コーポレートサイト改修</p>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
