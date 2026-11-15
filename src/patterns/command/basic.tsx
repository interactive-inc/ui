import { FileTextIcon, PackageIcon, UsersIcon } from "lucide-react"
import { useState } from "react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

export function CommandBasic() {
  const [last, setLast] = useState("")

  return (
    <div className="flex w-full flex-col gap-2">
      <Command
        className="h-auto rounded-2xl border"
        onAction={(value) => setLast(value)}
      >
        <CommandInput
          aria-label="画面や取引先を検索"
          placeholder="画面や取引先を検索"
        />
        <CommandEmpty>一致する項目がありません</CommandEmpty>
        <CommandList>
          <CommandGroup heading="画面">
            <CommandItem value="注文一覧">
              <PackageIcon />
              注文一覧
            </CommandItem>
            <CommandItem value="請求書">
              <FileTextIcon />
              請求書
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="取引先">
            <CommandItem value="株式会社みなと商事">
              <UsersIcon />
              株式会社みなと商事
            </CommandItem>
            <CommandItem value="さくら工業株式会社">
              <UsersIcon />
              さくら工業株式会社
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
      <p className="text-muted-foreground text-sm">
        {last === "" ? "項目を選ぶと開きます" : `開いた画面: ${last}`}
      </p>
    </div>
  )
}
