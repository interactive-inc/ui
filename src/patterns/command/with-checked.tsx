import { useState } from "react"
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

const labels = ["至急", "要確認", "返品", "請求", "配送"]

export function CommandWithChecked() {
  const [selected, setSelected] = useState<string[]>(["至急"])

  return (
    <div className="flex w-full flex-col gap-2">
      <Command
        className="h-auto rounded-2xl border"
        onAction={(value) =>
          setSelected((current) =>
            current.includes(value)
              ? current.filter((item) => item !== value)
              : [...current, value],
          )
        }
      >
        <CommandInput aria-label="ラベルを検索" placeholder="ラベルを検索" />
        <CommandList>
          <CommandGroup heading="問い合わせのラベル">
            {labels.map((label) => (
              <CommandItem
                key={label}
                value={label}
                checked={selected.includes(label)}
              >
                {label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
      <p className="text-muted-foreground text-sm">
        付けたラベル: {selected.length === 0 ? "なし" : selected.join("、")}
      </p>
    </div>
  )
}
