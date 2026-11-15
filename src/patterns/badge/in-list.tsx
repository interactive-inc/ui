import { Badge } from "@/components/ui/badge"

const tickets = [
  { id: "T-1024", title: "請求書の宛名を変えたい", status: "対応中" },
  { id: "T-1025", title: "配送先を変更したい", status: "未対応" },
  { id: "T-1026", title: "ログインできない", status: "解決済み" },
] as const

const variants = {
  対応中: "secondary",
  未対応: "destructive",
  解決済み: "outline",
} as const

export function BadgeInList() {
  return (
    <ul className="flex w-full max-w-sm flex-col divide-y text-sm">
      {tickets.map((ticket) => (
        <li key={ticket.id} className="flex items-center gap-3 py-2">
          <span className="text-muted-foreground tabular-nums">
            {ticket.id}
          </span>
          <span className="min-w-0 flex-1 truncate">{ticket.title}</span>
          <Badge variant={variants[ticket.status]}>{ticket.status}</Badge>
        </li>
      ))}
    </ul>
  )
}
