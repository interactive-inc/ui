import { useState } from "react"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarBasic() {
  const [last, setLast] = useState("")

  return (
    <div className="flex w-full flex-col gap-2 text-sm">
      <Menubar aria-label="見積書の編集メニュー" className="w-fit">
        <MenubarMenu onAction={(value) => setLast(value)}>
          <MenubarTrigger>ファイル</MenubarTrigger>
          <MenubarContent>
            <MenubarItem value="新しい見積書">新しい見積書</MenubarItem>
            <MenubarItem value="PDFで保存">PDFで保存</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu onAction={(value) => setLast(value)}>
          <MenubarTrigger>編集</MenubarTrigger>
          <MenubarContent>
            <MenubarItem value="明細行を追加">明細行を追加</MenubarItem>
            <MenubarItem value="値引きを追加">値引きを追加</MenubarItem>
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
