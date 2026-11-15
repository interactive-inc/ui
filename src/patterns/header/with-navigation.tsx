import { buttonVariants } from "@/components/ui/button"
import {
  Header,
  HeaderLink,
  HeaderLogo,
  HeaderSeparator,
  HeaderTitle,
} from "@/components/ui/header"

const pages = [
  { href: "#about", label: "概要" },
  { href: "#works", label: "作品" },
  { href: "#docs", label: "ドキュメント" },
]

export function HeaderWithNavigation() {
  return (
    <div className="w-full overflow-hidden rounded-xl border">
      <Header className="static">
        <HeaderTitle>
          <HeaderLogo href="#company" src="/inta-icon.png" aria-label="会社" />
          <HeaderSeparator />
          <HeaderLink href="#top" current>
            {"play"}
          </HeaderLink>
        </HeaderTitle>
        <nav aria-label="ページの移動" className="flex gap-2">
          {pages.map((page) => (
            <a
              key={page.href}
              href={page.href}
              className={buttonVariants({ variant: "secondary", size: "sm" })}
            >
              {page.label}
            </a>
          ))}
        </nav>
      </Header>
    </div>
  )
}
