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
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export function DialogUnsavedChanges() {
  const [reply, setReply] = useState("")
  const [warned, setWarned] = useState(false)

  return (
    <Dialog
      dismissible={reply === ""}
      onDismissAttempt={() => setWarned(true)}
      onOpenChange={(open) => {
        if (!open) {
          setReply("")
          setWarned(false)
        }
      }}
    >
      <DialogTrigger className={buttonVariants({ variant: "outline" })}>
        問い合わせに返信
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>返信を書く</DialogTitle>
          <DialogDescription>件名: 請求書の宛名変更について</DialogDescription>
        </DialogHeader>
        <Field>
          <FieldLabel>返信の本文</FieldLabel>
          <Textarea
            name="reply"
            value={reply}
            onValueChange={(value) => setReply(value)}
          />
          {warned && (
            <FieldDescription>
              書きかけの返信があります。送信するか、破棄してから閉じてください。
            </FieldDescription>
          )}
        </Field>
        <DialogFooter>
          <DialogClose
            className={buttonVariants({ variant: "outline" })}
            data-agent-confirm="書きかけの返信を破棄します"
          >
            破棄する
          </DialogClose>
          <DialogClose
            className={buttonVariants()}
            data-agent-confirm="問い合わせへの返信をお客様に送信します"
          >
            返信を送信
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
