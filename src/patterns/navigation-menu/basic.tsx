import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

const pages = [
  { href: "#dashboard", label: "ダッシュボード" },
  { href: "#orders", label: "注文" },
  { href: "#customers", label: "取引先" },
  { href: "#reports", label: "レポート" },
]

export function NavigationMenuBasic() {
  return (
    <NavigationMenu aria-label="管理画面のメニュー">
      <NavigationMenuList>
        {pages.map((page) => (
          <NavigationMenuItem key={page.href}>
            <NavigationMenuLink
              href={page.href}
              current={page.href === "#orders"}
            >
              {page.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
