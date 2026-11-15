import { TrendingDownIcon, TrendingUpIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const stats = [
  { label: "今月の売上", value: "¥5,860,000", change: "+12.4%", up: true },
  { label: "受注件数", value: "142件", change: "+8件", up: true },
  { label: "解約率", value: "1.8%", change: "+0.3pt", up: false },
]

export function CardStats() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <Card key={stat.label} size="sm" className="border">
          <CardHeader>
            <CardDescription>{stat.label}</CardDescription>
            <CardTitle className="text-2xl tabular-nums">
              {stat.value}
            </CardTitle>
            <CardAction>
              <Badge variant={stat.up ? "secondary" : "destructive"}>
                {stat.up ? <TrendingUpIcon /> : <TrendingDownIcon />}
                {stat.change}
              </Badge>
            </CardAction>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}
