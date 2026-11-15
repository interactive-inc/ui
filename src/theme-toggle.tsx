import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

type Theme = "light" | "dark" | "system"

const storageKey = "inta-ui-theme"

const itemClassName =
  "size-9 min-w-0 px-0 bg-secondary text-secondary-foreground hover:bg-secondary/80 data-pressed:bg-primary data-pressed:text-primary-foreground data-pressed:hover:bg-primary/90"

const darkQuery = "(prefers-color-scheme: dark)"

function toTheme(value: string | null | undefined): Theme {
  if (value === "light" || value === "dark") {
    return value
  }

  return "system"
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    try {
      setTheme(toTheme(window.localStorage.getItem(storageKey)))
    } catch {
      setTheme("system")
    }
  }, [])

  useEffect(() => {
    if (theme === null) {
      return
    }

    const media = window.matchMedia(darkQuery)

    const apply = () => {
      const isDark = theme === "dark" || (theme === "system" && media.matches)
      document.documentElement.classList.toggle("dark", isDark)
    }

    apply()

    try {
      window.localStorage.setItem(storageKey, theme)
    } catch {
      // 保存できなくても表示は切り替わる
    }

    media.addEventListener("change", apply)

    return () => {
      media.removeEventListener("change", apply)
    }
  }, [theme])

  return (
    <ToggleGroup
      value={theme === null ? [] : [theme]}
      onValueChange={(value) => setTheme(toTheme(value[0]))}
      deselectable={false}
      aria-label="テーマ"
    >
      <ToggleGroupItem
        value="light"
        aria-label="ライト"
        className={itemClassName}
      >
        <SunIcon />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="dark"
        aria-label="ダーク"
        className={itemClassName}
      >
        <MoonIcon />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="system"
        aria-label="システム"
        className={itemClassName}
      >
        <MonitorIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
