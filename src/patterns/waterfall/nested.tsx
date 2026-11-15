import { useState } from "react"
import {
  Waterfall,
  WaterfallAxis,
  WaterfallBar,
  WaterfallColumnHeader,
  WaterfallHeaderRow,
  WaterfallIndicator,
  WaterfallRow,
  WaterfallRowHeader,
} from "@/components/ui/waterfall"

type Span = {
  value: string
  label: string
  start: number
  duration: number
  children?: Span[]
}

const projects: Span[] = [
  {
    value: "renewal",
    label: "サイト改修",
    start: 0,
    duration: 34,
    children: [
      { value: "renewal-design", label: "デザイン", start: 0, duration: 10 },
      { value: "renewal-build", label: "実装", start: 10, duration: 18 },
      { value: "renewal-test", label: "テスト", start: 28, duration: 6 },
    ],
  },
  {
    value: "ec",
    label: "決済の移行",
    start: 12,
    duration: 20,
    children: [
      { value: "ec-contract", label: "契約手続き", start: 12, duration: 8 },
      { value: "ec-build", label: "組み込み", start: 20, duration: 12 },
    ],
  },
]

export function WaterfallNested() {
  const [expanded, setExpanded] = useState(["renewal"])
  const [value, setValue] = useState<string | null>(null)

  const rows = projects.flatMap((project) =>
    expanded.includes(project.value)
      ? [project, ...(project.children ?? [])]
      : [project],
  )
  const selected = rows.find((row) => row.value === value)

  return (
    <div className="flex w-full flex-col gap-3">
      <Waterfall
        aria-label="今期の案件"
        items={projects}
        expanded={expanded}
        onExpandedChange={setExpanded}
        value={value}
        onValueChange={setValue}
        format={(days) => `${days}日`}
        getBarLabel={(item, details) =>
          `${item.label}、${details.start}目に開始、${details.duration}かかる`
        }
      >
        <WaterfallHeaderRow>
          <WaterfallColumnHeader>案件</WaterfallColumnHeader>
          <WaterfallColumnHeader aria-label="期初からの日数">
            <WaterfallAxis maxTicks={4} />
          </WaterfallColumnHeader>
        </WaterfallHeaderRow>
        {rows.map((row) => (
          <WaterfallRow key={row.value} value={row.value}>
            <WaterfallRowHeader>
              {row.children && <WaterfallIndicator />}
              <span className="truncate">{row.label}</span>
            </WaterfallRowHeader>
            <WaterfallBar />
          </WaterfallRow>
        ))}
      </Waterfall>
      <p className="text-muted-foreground text-xs" aria-live="polite">
        {selected === undefined
          ? "行を選ぶと日数を表示します"
          : `${selected.label}：${selected.duration}日`}
      </p>
    </div>
  )
}
