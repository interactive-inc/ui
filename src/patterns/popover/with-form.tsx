import { StickyNoteIcon } from "lucide-react"
import { useState } from "react"
import { buttonVariants } from "@/components/ui/button"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverWithForm() {
  const [note, setNote] = useState("")

  return (
    <div className="flex flex-col gap-3 text-sm">
      <p className="text-muted-foreground">
        配送メモ: {note === "" ? "なし" : note}
      </p>
      <Popover>
        <PopoverTrigger
          className={buttonVariants({ variant: "outline", className: "w-fit" })}
        >
          <StickyNoteIcon />
          配送メモを書く
        </PopoverTrigger>
        <PopoverContent align="start">
          <PopoverHeader>
            <PopoverTitle>配送メモ</PopoverTitle>
            <PopoverDescription>配送業者に伝える内容です。</PopoverDescription>
          </PopoverHeader>
          <Field>
            <FieldLabel>メモ</FieldLabel>
            <Input
              name="deliveryNote"
              placeholder="例: 不在時は宅配ボックスへ"
              value={note}
              onValueChange={(value) => setNote(value)}
            />
          </Field>
        </PopoverContent>
      </Popover>
    </div>
  )
}
