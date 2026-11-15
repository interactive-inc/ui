import {
  FileTextIcon,
  HomeIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
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
  { href: "#invoices", label: "請求書", icon: FileTextIcon },
]

export function SidebarBasic() {
  return (
    <div className="h-80 w-full overflow-hidden rounded-xl border">
      <SidebarProvider className="relative h-full min-h-0 bg-sidebar">
        <Sidebar className="absolute h-full">
          <SidebarHeader>
            <span className="px-3 py-2 font-medium">みなと商事 管理画面</span>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                {pages.map((page) => (
                  <SidebarMenuItem key={page.href}>
                    <SidebarMenuButton
                      isActive={page.href === "#orders"}
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
          <SidebarFooter>
            <span className="px-3 py-2 text-muted-foreground text-xs">
              佐藤 美咲・管理者
            </span>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <header className="flex items-center gap-2 border-b p-3">
            <SidebarTrigger aria-label="管理画面のサイドバーを開閉" />
            <span className="font-medium text-sm">注文</span>
          </header>
          <p className="p-4 text-muted-foreground text-sm">
            未出荷の注文が 3件あります。
          </p>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
