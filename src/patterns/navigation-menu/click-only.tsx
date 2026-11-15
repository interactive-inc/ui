import { useState } from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const labels: Record<string, string> = {
  projects: "案件",
  team: "チーム",
}

export function NavigationMenuClickOnly() {
  const [value, setValue] = useState<string | null>(null)

  return (
    <div className="flex flex-col gap-3">
      <NavigationMenu
        aria-label="案件管理のメニュー"
        openOnHover={false}
        value={value}
        onValueChange={setValue}
      >
        <NavigationMenuList>
          <NavigationMenuItem value="projects">
            <NavigationMenuTrigger>案件</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-48 gap-1">
                <li>
                  <NavigationMenuLink href="#projects-active">
                    進行中
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="#projects-done">
                    完了
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem value="team">
            <NavigationMenuTrigger>チーム</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-48 gap-1">
                <li>
                  <NavigationMenuLink href="#members">
                    メンバー
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="#workload">
                    稼働状況
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <p className="text-muted-foreground text-xs">
        {value === null
          ? "メニューは閉じています"
          : `${labels[value]}を開いています`}
      </p>
    </div>
  )
}
