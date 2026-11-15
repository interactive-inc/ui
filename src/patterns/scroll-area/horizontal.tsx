import { ScrollArea } from "@/components/ui/scroll-area"

const months = [
  { month: "6月", sales: "¥4,120,000" },
  { month: "7月", sales: "¥4,860,000" },
  { month: "8月", sales: "¥3,980,000" },
  { month: "9月", sales: "¥5,210,000" },
  { month: "10月", sales: "¥5,630,000" },
  { month: "11月", sales: "¥5,860,000" },
]

export function ScrollAreaHorizontal() {
  return (
    <ScrollArea
      orientation="horizontal"
      aria-label="月別の売上"
      className="w-full max-w-md rounded-2xl border"
    >
      <div className="flex w-max gap-3 p-4">
        {months.map((item) => (
          <div
            key={item.month}
            className="flex w-36 flex-col gap-1 rounded-xl bg-muted p-4"
          >
            <span className="text-muted-foreground text-xs">{item.month}</span>
            <span className="font-medium tabular-nums">{item.sales}</span>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
