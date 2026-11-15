import { BookOpenIcon, TriangleAlertIcon } from "lucide-react"
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

export function TraceCollapsibleSteps() {
  return (
    <Trace className="max-w-md">
      <TraceCollapsible defaultOpen>
        <TraceCollapsibleTrigger>
          <TraceLine>
            <TraceIcon>
              <BookOpenIcon />
            </TraceIcon>
            <TraceTitle>ヘルプ記事を3件読みました</TraceTitle>
            <TraceDescription>2秒</TraceDescription>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent className="text-sm">
          「返品の手順」「返金の時期」「返送ラベルの印刷」を参照しました。
        </TraceCollapsibleContent>
      </TraceCollapsible>
      <TraceCollapsible>
        <TraceCollapsibleTrigger>
          <TraceLine status="error">
            <TraceIcon>
              <TriangleAlertIcon />
            </TraceIcon>
            <TraceTitle>注文履歴を取得できませんでした</TraceTitle>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent className="text-sm">
          ログインの有効期限が切れています。もう一度ログインしてから質問してください。
        </TraceCollapsibleContent>
      </TraceCollapsible>
    </Trace>
  )
}
