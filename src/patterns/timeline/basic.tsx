import { CheckIcon } from "lucide-react"
import {
  Timeline,
  TimelineConnector,
  TimelineDescription,
  TimelineItem,
  TimelineMarker,
  TimelineTime,
  TimelineTitle,
} from "@/components/ui/timeline"

const steps = [
  {
    value: "hearing",
    title: "ヒアリング",
    dateTime: "2026-10-06",
    time: "10月6日",
    description: "要件と予算を確認",
    status: "complete",
  },
  {
    value: "estimate",
    title: "見積もりの承認",
    dateTime: "2026-10-20",
    time: "10月20日",
    description: "総額 ¥3,200,000 で合意",
    status: "complete",
  },
  {
    value: "build",
    title: "実装",
    dateTime: "2026-11-15",
    time: "11月15日時点",
    description: "残りは問い合わせフォームと採用ページ",
    status: "current",
  },
  {
    value: "release",
    title: "公開",
    dateTime: "2026-12-20",
    time: "12月20日予定",
    description: "公開前に最終確認を行う",
    status: "upcoming",
  },
] as const

export function TimelineBasic() {
  return (
    <Timeline aria-label="コーポレートサイト改修の進み方" className="max-w-sm">
      {steps.map((step) => (
        <TimelineItem key={step.value} value={step.value} status={step.status}>
          <TimelineMarker>
            {step.status === "complete" && <CheckIcon aria-hidden="true" />}
          </TimelineMarker>
          <TimelineConnector />
          <TimelineTitle>{step.title}</TimelineTitle>
          <TimelineTime dateTime={step.dateTime}>{step.time}</TimelineTime>
          <TimelineDescription>{step.description}</TimelineDescription>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
