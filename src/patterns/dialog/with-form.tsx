import { useState } from "react"
import { buttonVariants } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function DialogWithForm() {
  const [address, setAddress] = useState("東京都渋谷区神南1-2-3")
  const [draft, setDraft] = useState(address)

  return (
    <div className="flex flex-col gap-3 text-sm">
      <p>お届け先: {address}</p>
      <Dialog
        onOpenChange={(open, details) => {
          if (open) setDraft(address)
          if (!open && details.returnValue === "save") setAddress(draft)
        }}
      >
        <DialogTrigger
          className={buttonVariants({ variant: "outline", className: "w-fit" })}
        >
          お届け先を変更
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>お届け先の変更</DialogTitle>
            <DialogDescription>
              次回の発送からこの住所に届けます。
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <FieldLabel>住所</FieldLabel>
              <Input
                name="address"
                value={draft}
                onValueChange={(value) => setDraft(value)}
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose className={buttonVariants({ variant: "outline" })}>
              キャンセル
            </DialogClose>
            <DialogClose value="save" className={buttonVariants()}>
              変更を保存
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
