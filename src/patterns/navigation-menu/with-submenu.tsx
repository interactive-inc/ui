import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const sales = [
  { href: "#orders", label: "注文一覧" },
  { href: "#quotes", label: "見積もり" },
  { href: "#returns", label: "返品" },
]

const billing = [
  { href: "#invoices", label: "請求書" },
  { href: "#payments", label: "入金の確認" },
]

export function NavigationMenuWithSubmenu() {
  return (
    <NavigationMenu aria-label="販売管理のメニュー">
      <NavigationMenuList>
        <NavigationMenuItem value="sales">
          <NavigationMenuTrigger>販売</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-48 gap-1">
              {sales.map((page) => (
                <li key={page.href}>
                  <NavigationMenuLink href={page.href}>
                    {page.label}
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem value="billing">
          <NavigationMenuTrigger>請求</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-48 gap-1">
              {billing.map((page) => (
                <li key={page.href}>
                  <NavigationMenuLink href={page.href}>
                    {page.label}
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#reports">レポート</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuIndicator />
    </NavigationMenu>
  )
}
