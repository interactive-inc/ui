import {
  BarChart3Icon,
  HomeIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "lucide-react"
import { useState } from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const pages = [
  { href: "#dashboard", label: "ダッシュボード", icon: HomeIcon },
  { href: "#orders", label: "注文", icon: ShoppingCartIcon },
  { href: "#customers", label: "取引先", icon: UsersIcon },
  { href: "#reports", label: "レポート", icon: BarChart3Icon },
]

export function SidebarCollapsibleIcon() {
  const [open, setOpen] = useState(false)

  return (
    <div className="h-80 w-full overflow-hidden rounded-xl border">
      <SidebarProvider
        open={open}
        onOpenChange={setOpen}
        className="relative h-full min-h-0 bg-sidebar"
      >
        <Sidebar collapsible="icon" className="absolute h-full">
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                {pages.map((page) => (
                  <SidebarMenuItem key={page.href}>
                    <SidebarMenuButton
                      tooltip={page.label}
                      isActive={page.href === "#reports"}
                      render={<a href={page.href} />}
                    >
                      <page.icon />
                      <span>{page.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <header className="flex items-center gap-2 border-b p-3">
            <SidebarTrigger aria-label="アイコンに畳めるサイドバーを開閉" />
            <span className="text-muted-foreground text-xs">
              {open ? "メニューを開いています" : "アイコンだけを表示しています"}
            </span>
          </header>
          <p className="p-4 font-medium text-sm">レポート</p>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
