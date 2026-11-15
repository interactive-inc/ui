import { Link } from "@void/react"
import {
  Header,
  HeaderActions,
  HeaderLink,
  HeaderLogo,
  HeaderSeparator,
  HeaderTitle,
} from "@/components/ui/header"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeToggle } from "@/src/theme-toggle"

const devUrl = "https://dev.inta.co.jp/"

export function SiteHeader() {
  return (
    <Header>
      <SidebarTrigger variant="secondary" size="icon" className="md:hidden" />
      <HeaderTitle>
        <HeaderLogo href={devUrl} src="/inta-icon.png" aria-label="inta dev" />
        <HeaderSeparator />
        <HeaderLink href={devUrl}>{"dev"}</HeaderLink>
        <HeaderSeparator />
        <HeaderLink current render={<Link href="/" />}>
          {"ui"}
        </HeaderLink>
      </HeaderTitle>
      <HeaderActions>
        <ThemeToggle />
      </HeaderActions>
    </Header>
  )
}
