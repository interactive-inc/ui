import {
  Header,
  HeaderLink,
  HeaderLogo,
  HeaderSeparator,
  HeaderTitle,
} from "@/components/ui/header"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

export function HeaderWithSidebar() {
  return (
    <div className="h-72 w-full overflow-hidden rounded-xl border">
      <SidebarProvider
        aria-label="注文管理のメニュー"
        className="relative h-full min-h-0 flex-col bg-sidebar [--header-height:--spacing(14)]"
      >
        <Header className="static">
          <HeaderTitle>
            <HeaderLogo
              href="#company"
              src="/inta-icon.png"
              aria-label="会社"
            />
            <HeaderSeparator />
            <HeaderLink href="#app" current>
              {"orders"}
            </HeaderLink>
          </HeaderTitle>
        </Header>
        <div className="relative flex min-h-0 flex-1">
          <Sidebar variant="inset" className="absolute top-0 h-full">
            <SidebarContent>
              <SidebarGroup className="px-1">
                <SidebarGroupLabel>{"注文"}</SidebarGroupLabel>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <SidebarInset className="bg-page p-6 md:peer-data-[variant=inset]:mt-0">
            {"ページ"}
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}
