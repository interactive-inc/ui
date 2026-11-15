import { PackageIcon, ShoppingCartIcon, TruckIcon } from "lucide-react"
import {
  Timeline,
  TimelineConnector,
  TimelineDescription,
  TimelineItem,
  TimelineMarker,
  TimelineTime,
  TimelineTitle,
} from "@/components/ui/timeline"

const events = [
  {
    value: "ordered",
    icon: ShoppingCartIcon,
    title: "注文を受付",
    dateTime: "2026-11-12T10:14",
    time: "11月12日 10:14",
    description: "注文 #10482・3点",
    status: "complete",
  },
  {
    value: "packed",
    icon: PackageIcon,
    title: "梱包が完了",
    dateTime: "2026-11-13T09:40",
    time: "11月13日 9:40",
    description: "東京倉庫から出荷",
    status: "complete",
  },
  {
    value: "shipping",
    icon: TruckIcon,
    title: "配送中",
    dateTime: "2026-11-14",
    time: "11月14日",
    description: "お届け予定は11月15日の午前",
    status: "current",
  },
] as const

export function TimelineWithIcon() {
  return (
    <Timeline aria-label="注文 #10482 の配送状況" className="max-w-sm">
      {events.map((event) => (
        <TimelineItem
          key={event.value}
          value={event.value}
          status={event.status}
        >
          <TimelineMarker className="mt-0 -ml-1 size-6 text-foreground data-complete:text-primary-foreground">
            <event.icon aria-hidden="true" className="size-3.5" />
          </TimelineMarker>
          <TimelineConnector />
          <TimelineTitle>{event.title}</TimelineTitle>
          <TimelineTime dateTime={event.dateTime}>{event.time}</TimelineTime>
          <TimelineDescription>{event.description}</TimelineDescription>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
