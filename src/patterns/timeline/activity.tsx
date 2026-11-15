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
    id: "4",
    title: "鈴木 陽菜が返信しました",
    dateTime: "2026-11-14T16:20",
    time: "11月14日 16:20",
    description: "交換品を本日発送しました。",
  },
  {
    id: "3",
    title: "担当を鈴木 陽菜に変更",
    dateTime: "2026-11-14T11:05",
    time: "11月14日 11:05",
    description: "田中 健太から引き継ぎ",
  },
  {
    id: "2",
    title: "お客様から写真が届きました",
    dateTime: "2026-11-13T18:42",
    time: "11月13日 18:42",
    description: "添付 2件",
  },
  {
    id: "1",
    title: "問い合わせを受付",
    dateTime: "2026-11-13T09:30",
    time: "11月13日 9:30",
    description: "届いた商品に傷があるとの連絡",
  },
]

export function TimelineActivity() {
  return (
    <Timeline aria-label="問い合わせ #3021 の対応履歴" className="max-w-sm">
      {events.map((event) => (
        <TimelineItem key={event.id}>
          <TimelineMarker />
          <TimelineConnector />
          <TimelineTitle>{event.title}</TimelineTitle>
          <TimelineTime dateTime={event.dateTime}>{event.time}</TimelineTime>
          <TimelineDescription>{event.description}</TimelineDescription>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
