import { Link } from "@void/react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeToggle } from "@/src/theme-toggle"

const devUrl = "https://dev.inta.co.jp/"

const linkClassName =
  "rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 flex h-(--header-height) shrink-0 items-center gap-3 bg-sidebar/70 px-4 text-sm backdrop-blur-md md:px-6">
      <SidebarTrigger variant="secondary" size="icon" className="md:hidden" />
      <a href={devUrl} aria-label="inta dev" className="shrink-0">
        <img src="/inta-icon.png" alt="" className="size-6 bg-foreground/10" />
      </a>
      <span aria-hidden="true" className="text-muted-foreground">
        {"/"}
      </span>
      <a href={devUrl} className={linkClassName}>
        {"dev"}
      </a>
      <span aria-hidden="true" className="text-muted-foreground">
        {"/"}
      </span>
      <Link href="/" className="rounded-sm font-medium text-foreground">
        {"ui"}
      </Link>
      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </header>
  )
}
