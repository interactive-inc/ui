import { useState } from "react"
import { buttonVariants } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export function CollapsibleControlled() {
  const [open, setOpen] = useState(false)

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="flex w-full max-w-sm flex-col gap-2 text-sm"
    >
      <p>
        コーポレートサイト改修は実装中です。残りの作業は問い合わせフォームと採用ページです。
      </p>
      <CollapsibleContent className="text-muted-foreground">
        11月14日の定例で、採用ページの写真をお客様が用意することになりました。届き次第、田中
        健太が組み込みます。公開日は12月20日のまま変わりません。
      </CollapsibleContent>
      <CollapsibleTrigger
        className={buttonVariants({
          variant: "link",
          className: "self-start px-0",
        })}
      >
        {open ? "閉じる" : "続きを読む"}
      </CollapsibleTrigger>
    </Collapsible>
  )
}
