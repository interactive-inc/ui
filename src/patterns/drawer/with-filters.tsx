import { ListFilterIcon } from "lucide-react"
import { useState } from "react"
import { buttonVariants } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

const statuses = ["入金待ち", "準備中", "発送済み", "キャンセル"]

export function DrawerWithFilters() {
  const [checked, setChecked] = useState<string[]>(["準備中"])
  const [applied, setApplied] = useState<string[]>(["準備中"])

  function toggle(status: string, value: boolean) {
    setChecked((current) =>
      value ? [...current, status] : current.filter((item) => item !== status),
    )
  }

  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <span className="text-muted-foreground">
        {applied.length === 0 ? "すべての注文" : applied.join("、")}
      </span>
      <Drawer
        showSwipeHandle
        onOpenChange={(open, details) => {
          if (open) setChecked(applied)
          if (!open && details.returnValue === "apply") setApplied(checked)
        }}
      >
        <DrawerTrigger className={buttonVariants({ variant: "outline" })}>
          <ListFilterIcon />
          絞り込み
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>注文を絞り込む</DrawerTitle>
            <DrawerDescription>
              表示する状態を選んでください。
            </DrawerDescription>
          </DrawerHeader>
          <FieldGroup className="p-4">
            {statuses.map((status) => (
              <Field key={status} orientation="horizontal">
                <Checkbox
                  name="status"
                  value={status}
                  checked={checked.includes(status)}
                  onCheckedChange={(value) => toggle(status, value === true)}
                />
                <FieldLabel>{status}</FieldLabel>
              </Field>
            ))}
          </FieldGroup>
          <DrawerFooter>
            <DrawerClose value="apply" className={buttonVariants()}>
              この条件で表示
            </DrawerClose>
            <DrawerClose className={buttonVariants({ variant: "outline" })}>
              キャンセル
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
