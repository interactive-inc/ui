import { CheckIcon } from "lucide-react"
import {
  Timeline,
  TimelineConnector,
  TimelineItem,
  TimelineMarker,
  TimelineTime,
  TimelineTitle,
} from "@/components/ui/timeline"

const steps = [
  {
    value: "apply",
    title: "申請",
    time: "11月10日",
    dateTime: "2026-11-10",
    status: "complete",
  },
  {
    value: "manager",
    title: "上長の承認",
    time: "11月11日",
    dateTime: "2026-11-11",
    status: "complete",
  },
  {
    value: "accounting",
    title: "経理の確認",
    time: "確認中",
    dateTime: "2026-11-15",
    status: "current",
  },
  {
    value: "paid",
    title: "支払い",
    time: "11月25日予定",
    dateTime: "2026-11-25",
    status: "upcoming",
  },
] as const

export function TimelineHorizontal() {
  return (
    <Timeline aria-label="経費精算の流れ" orientation="horizontal">
      {steps.map((step) => (
        <TimelineItem key={step.value} value={step.value} status={step.status}>
          <TimelineMarker>
            {step.status === "complete" && <CheckIcon aria-hidden="true" />}
          </TimelineMarker>
          <TimelineConnector />
          <TimelineTitle>{step.title}</TimelineTitle>
          <TimelineTime dateTime={step.dateTime}>{step.time}</TimelineTime>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
