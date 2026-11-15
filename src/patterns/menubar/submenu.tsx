import { useState } from "react"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarSubmenu() {
  const [last, setLast] = useState("")

  return (
    <div className="flex w-full flex-col gap-2 text-sm">
      <Menubar aria-label="在庫表のメニュー" className="w-fit">
        <MenubarMenu onAction={(value) => setLast(value)}>
          <MenubarTrigger>データ</MenubarTrigger>
          <MenubarContent>
            <MenubarItem value="最新の在庫に更新">最新の在庫に更新</MenubarItem>
            <MenubarSub>
              <MenubarSubTrigger>書き出す</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem value="CSVで書き出す">CSV</MenubarItem>
                <MenubarItem value="Excelで書き出す">Excel</MenubarItem>
                <MenubarItem value="PDFで書き出す">PDF</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
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
