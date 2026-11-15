import { FileTextIcon, ShoppingCartIcon } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

const orderPages = [
  { href: "#orders-new", label: "新規" },
  { href: "#orders-shipping", label: "出荷待ち" },
  { href: "#orders-returns", label: "返品" },
]

export function SidebarSubmenu() {
  return (
    <div className="h-80 w-full overflow-hidden rounded-xl border">
      <SidebarProvider
        aria-label="注文管理のサイドバー"
        className="relative h-full min-h-0 bg-sidebar"
      >
        <Sidebar className="absolute h-full">
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton render={<a href="#orders" />}>
                    <ShoppingCartIcon />
                    <span>注文</span>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>12</SidebarMenuBadge>
                  <SidebarMenuSub>
                    {orderPages.map((page) => (
                      <SidebarMenuSubItem key={page.href}>
                        <SidebarMenuSubButton
                          href={page.href}
                          isActive={page.href === "#orders-shipping"}
                        >
                          <span>{page.label}</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton render={<a href="#invoices" />}>
                    <FileTextIcon />
                    <span>請求書</span>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>2</SidebarMenuBadge>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <p className="p-4 font-medium text-sm">出荷待ちの注文</p>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
