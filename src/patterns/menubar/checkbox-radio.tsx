import { useState } from "react"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarCheckboxRadio() {
  const [showTax, setShowTax] = useState(true)
  const [showCanceled, setShowCanceled] = useState(false)
  const [sort, setSort] = useState("date")

  return (
    <div className="flex w-full flex-col gap-2 text-sm">
      <Menubar aria-label="注文一覧のメニュー" className="w-fit">
        <MenubarMenu>
          <MenubarTrigger>表示</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem
              value="tax"
              checked={showTax}
              onCheckedChange={setShowTax}
            >
              税込みで表示
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              value="canceled"
              checked={showCanceled}
              onCheckedChange={setShowCanceled}
            >
              キャンセル済みを表示
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarRadioGroup value={sort} onValueChange={setSort}>
              <MenubarLabel inset>並び順</MenubarLabel>
              <MenubarRadioItem value="date">注文日順</MenubarRadioItem>
              <MenubarRadioItem value="customer">取引先順</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <span className="text-muted-foreground">
        {showTax ? "税込み" : "税抜き"}・
        {showCanceled ? "キャンセル済みを含む" : "キャンセル済みを除く"}・
        {sort === "date" ? "注文日順" : "取引先順"}
      </span>
    </div>
  )
}
