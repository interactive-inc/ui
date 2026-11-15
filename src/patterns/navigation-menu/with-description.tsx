import { BarChart3Icon, FileTextIcon, UsersIcon } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const features = [
  {
    href: "#feature-orders",
    icon: FileTextIcon,
    title: "受発注の管理",
    hint: "注文から出荷までを1つの画面で",
  },
  {
    href: "#feature-customers",
    icon: UsersIcon,
    title: "取引先の管理",
    hint: "担当者と取引の履歴をまとめる",
  },
  {
    href: "#feature-reports",
    icon: BarChart3Icon,
    title: "売上レポート",
    hint: "月ごとの推移を自動で集計",
  },
]

export function NavigationMenuWithDescription() {
  return (
    <NavigationMenu aria-label="サービスサイトのメニュー">
      <NavigationMenuList>
        <NavigationMenuItem value="features">
          <NavigationMenuTrigger>機能</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-80 gap-1">
              {features.map((feature) => (
                <li key={feature.href}>
                  <NavigationMenuLink
                    href={feature.href}
                    className="items-start gap-3"
                  >
                    <feature.icon className="mt-0.5" aria-hidden="true" />
                    <span className="flex flex-col gap-0.5">
                      <span className="font-medium">{feature.title}</span>
                      <span className="text-muted-foreground text-xs">
                        {feature.hint}
                      </span>
                    </span>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#pricing">料金</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#contact">お問い合わせ</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
