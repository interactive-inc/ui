import { Link } from "@void/react"
import { cn } from "cn"
import { ArrowUpRightIcon } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  sidebarMenuButtonVariants,
} from "@/components/ui/sidebar"
import { categories } from "@/src/categories"
import { componentDocs, componentNames } from "@/src/component-docs"
import { guidelinePages } from "@/src/guidelines"

const navLinkClassName = cn(
  sidebarMenuButtonVariants(),
  "aria-[current=page]:bg-sidebar-accent aria-[current=page]:font-medium aria-[current=page]:text-sidebar-accent-foreground",
)

export function AppSidebar() {
  return (
    <Sidebar variant="inset">
      <SidebarContent>
        <SidebarGroup className="px-1">
          <SidebarGroupLabel>{"はじめに"}</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link href="/" className={navLinkClassName}>
                {"インストール"}
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/skills/" className={navLinkClassName}>
                {"スキル"}
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <a
                href="/llms.txt"
                target="_blank"
                rel="noreferrer"
                className={navLinkClassName}
              >
                {"llms.txt"}
                <ArrowUpRightIcon className="ml-auto text-muted-foreground" />
              </a>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup className="px-1">
          <SidebarGroupLabel>{"ガイドライン"}</SidebarGroupLabel>
          <SidebarMenu>
            {guidelinePages.map((page) => (
              <SidebarMenuItem key={page.slug}>
                <Link
                  href={`/guidelines/${page.slug}/`}
                  className={navLinkClassName}
                >
                  {page.title}
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup className="px-1">
          <SidebarGroupLabel>{"ケース"}</SidebarGroupLabel>
          <SidebarMenu>
            {categories.map((category) => (
              <SidebarMenuItem key={category.slug}>
                <Link
                  href={`/cases/${category.slug}/`}
                  className={navLinkClassName}
                >
                  {category.title}
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup className="px-1">
          <SidebarGroupLabel>{"コンポーネント"}</SidebarGroupLabel>
          <SidebarMenu>
            {componentNames.map((name) => (
              <SidebarMenuItem key={name}>
                <Link
                  href={`/components/${name}/`}
                  className={navLinkClassName}
                >
                  {componentDocs[name].title}
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
