import { FilePlusIcon, PackagePlusIcon, UserPlusIcon } from "lucide-react"
import { useState } from "react"
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command"

export function CommandWithShortcuts() {
  const [last, setLast] = useState("")

  return (
    <div className="flex w-full flex-col gap-2">
      <Command
        className="h-auto rounded-2xl border"
        onAction={(value) => setLast(value)}
      >
        <CommandInput
          aria-label="作成する項目を検索"
          placeholder="作成する項目を検索"
        />
        <CommandList>
          <CommandGroup heading="新規作成">
            <CommandItem value="注文を作成" shortcut="mod+shift+o">
              <PackagePlusIcon />
              注文を作成
              <CommandShortcut />
            </CommandItem>
            <CommandItem value="見積書を作成" shortcut="mod+shift+e">
              <FilePlusIcon />
              見積書を作成
              <CommandShortcut />
            </CommandItem>
            <CommandItem value="取引先を登録" shortcut="mod+shift+c">
              <UserPlusIcon />
              取引先を登録
              <CommandShortcut />
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
      <p className="text-muted-foreground text-sm">
        {last === "" ? "ショートカットでも実行できます" : `実行: ${last}`}
      </p>
    </div>
  )
}
