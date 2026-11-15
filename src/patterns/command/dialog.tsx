import { PackageIcon, SettingsIcon, UsersIcon } from "lucide-react"
import { useState } from "react"
import { buttonVariants } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  createDialogController,
  DialogShortcut,
  DialogTrigger,
} from "@/components/ui/dialog"

export function CommandDialogPattern() {
  const [dialog] = useState(createDialogController)
  const [last, setLast] = useState("")

  return (
    <div className="flex flex-col gap-2">
      <DialogTrigger
        controller={dialog}
        shortcut="mod+k"
        className={buttonVariants({ variant: "outline", className: "w-fit" })}
      >
        画面を探す
        <DialogShortcut />
      </DialogTrigger>
      <CommandDialog controller={dialog}>
        <Command
          onAction={(value) => {
            setLast(value)
            dialog.close()
          }}
        >
          <CommandInput aria-label="移動先を検索" placeholder="移動先を検索" />
          <CommandEmpty>一致する画面がありません</CommandEmpty>
          <CommandList>
            <CommandGroup heading="移動">
              <CommandItem value="注文一覧">
                <PackageIcon />
                注文一覧
              </CommandItem>
              <CommandItem value="取引先">
                <UsersIcon />
                取引先
              </CommandItem>
              <CommandItem value="設定">
                <SettingsIcon />
                設定
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
      <p className="text-muted-foreground text-sm">
        {last === "" ? "⌘K でも開けます" : `移動先: ${last}`}
      </p>
    </div>
  )
}
