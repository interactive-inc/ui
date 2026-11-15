import { useState } from "react"
import { buttonVariants } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Switch } from "@/components/ui/switch"

export function SheetWithForm() {
  const [storeName, setStoreName] = useState("渋谷店")
  const [notify, setNotify] = useState(true)
  const [saved, setSaved] = useState("渋谷店・在庫通知あり")

  return (
    <div className="flex flex-col gap-3 text-sm">
      <p>現在の設定: {saved}</p>
      <Sheet
        onOpenChange={(open, details) => {
          if (!open && details.returnValue === "save") {
            setSaved(`${storeName}・在庫通知${notify ? "あり" : "なし"}`)
          }
        }}
      >
        <SheetTrigger
          className={buttonVariants({ variant: "outline", className: "w-fit" })}
        >
          店舗の設定
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>店舗の設定</SheetTitle>
            <SheetDescription>注文画面に出る店舗の情報です。</SheetDescription>
          </SheetHeader>
          <FieldGroup className="px-6">
            <Field>
              <FieldLabel>店舗名</FieldLabel>
              <Input
                name="storeName"
                value={storeName}
                onValueChange={(value) => setStoreName(value)}
              />
            </Field>
            <Field orientation="horizontal">
              <Switch
                name="stockNotify"
                checked={notify}
                onCheckedChange={(checked) => setNotify(checked)}
              />
              <FieldLabel>在庫が少なくなったら通知する</FieldLabel>
            </Field>
          </FieldGroup>
          <SheetFooter>
            <SheetClose value="save" className={buttonVariants()}>
              設定を保存
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
