import { DatabaseIcon } from "lucide-react"
import { useState } from "react"
import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceDescription,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "@/components/ui/trace"

export function TraceControlled() {
  const [open, setOpen] = useState(false)

  return (
    <Trace className="max-w-md">
      <TraceCollapsible open={open} onOpenChange={setOpen}>
        <TraceCollapsibleTrigger>
          <TraceLine>
            <TraceIcon>
              <DatabaseIcon />
            </TraceIcon>
            <TraceTitle>契約内容を確認しました</TraceTitle>
            <TraceDescription>
              {open ? "閉じる" : "詳細を見る"}
            </TraceDescription>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent className="text-sm">
          ご契約はスタンダードプラン（月額 2,980円）、次の更新日は12月1日です。
        </TraceCollapsibleContent>
      </TraceCollapsible>
    </Trace>
  )
}
