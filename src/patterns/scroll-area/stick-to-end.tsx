import { ScrollArea } from "@/components/ui/scroll-area"

const logs = [
  { time: "09:00", text: "CSV の取り込みを開始" },
  { time: "09:00", text: "取引先 1,240件を読み込み" },
  { time: "09:01", text: "重複する取引先を 18件まとめました" },
  { time: "09:01", text: "住所の書式を 63件そろえました" },
  { time: "09:02", text: "担当者の割り当てを確認中" },
  { time: "09:02", text: "未割り当ての取引先が 7件あります" },
  { time: "09:03", text: "請求先の情報を照合しています" },
  { time: "09:03", text: "取り込みが完了しました" },
]

export function ScrollAreaStickToEnd() {
  return (
    <ScrollArea
      stickToEnd
      aria-label="取り込みの記録"
      className="h-48 w-full max-w-sm rounded-2xl border"
    >
      <ol className="flex flex-col gap-1 p-4 font-mono text-xs">
        {logs.map((log) => (
          <li key={log.text} className="flex gap-3">
            <span className="text-muted-foreground">{log.time}</span>
            <span>{log.text}</span>
          </li>
        ))}
      </ol>
    </ScrollArea>
  )
}
