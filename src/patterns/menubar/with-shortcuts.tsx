import { useState } from "react"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarWithShortcuts() {
  const [last, setLast] = useState("")

  return (
    <div className="flex w-full flex-col gap-2 text-sm">
      <Menubar aria-label="請求書の編集メニュー" className="w-fit">
        <MenubarMenu onAction={(value) => setLast(value)}>
          <MenubarTrigger>請求書</MenubarTrigger>
          <MenubarContent>
            <MenubarItem value="新しい請求書" shortcut="mod+n">
              新しい請求書
            </MenubarItem>
            <MenubarItem value="保存" shortcut="mod+s">
              保存
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem value="印刷" shortcut="mod+p">
              印刷
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu onAction={(value) => setLast(value)}>
          <MenubarTrigger>明細</MenubarTrigger>
          <MenubarContent>
            <MenubarItem value="元に戻す" shortcut="mod+z">
              元に戻す
            </MenubarItem>
            <MenubarItem value="やり直す" shortcut="mod+shift+z">
              やり直す
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem
              value="明細をすべて消去"
              variant="destructive"
              data-agent-confirm="請求書の明細をすべて消去します"
            >
              明細をすべて消去
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <span className="text-muted-foreground">
        {last === ""
          ? "メニューから操作を選んでください"
          : `選んだ操作: ${last}`}
      </span>
    </div>
  )
}
