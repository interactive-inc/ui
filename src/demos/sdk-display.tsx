"use client"

import {
  ArrowRightIcon,
  CalendarIcon,
  CheckIcon,
  DownloadIcon,
  KanbanIcon,
  ListIcon,
  MailIcon,
  XIcon,
} from "lucide-react"
import { type CSSProperties, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Field, FieldLabel } from "@/components/ui/field"
import {
  Listbox,
  ListboxGroup,
  ListboxGroupLabel,
  ListboxItem,
} from "@/components/ui/listbox"
import { Meter, MeterLabel, MeterValue } from "@/components/ui/meter"
import {
  createLocalStorage,
  createPreference,
  Preferences,
  usePreference,
} from "@/components/ui/preferences"
import {
  SegmentedControl,
  SegmentedControlItem,
} from "@/components/ui/segmented-control"
import { Switch } from "@/components/ui/switch"
import {
  Timeline,
  TimelineConnector,
  TimelineDescription,
  TimelineItem,
  TimelineMarker,
  TimelineTime,
  TimelineTitle,
} from "@/components/ui/timeline"
import {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarInput,
  ToolbarSeparator,
} from "@/components/ui/toolbar"
import type { TreeItemData } from "@/components/ui/tree"
import {
  Tree,
  TreeGroup,
  TreeItem,
  TreeItemIndicator,
  TreeItemLabel,
} from "@/components/ui/tree"
import type { WaterfallData } from "@/components/ui/waterfall"
import {
  Waterfall,
  WaterfallAxis,
  WaterfallBar,
  WaterfallCell,
  WaterfallColumnHeader,
  WaterfallHeaderRow,
  WaterfallIndicator,
  WaterfallRow,
  WaterfallRowHeader,
} from "@/components/ui/waterfall"
import { Demo } from "@/src/demos/demo"

const applicants = [
  {
    id: "sato",
    name: "佐藤 美咲",
    job: "フロントエンドエンジニア",
    stage: "二次面接",
  },
  {
    id: "tanaka",
    name: "田中 健太",
    job: "プロダクトデザイナー",
    stage: "内定",
  },
  {
    id: "suzuki",
    name: "鈴木 陽菜",
    job: "カスタマーサクセス",
    stage: "二次面接",
  },
  {
    id: "takahashi",
    name: "高橋 蓮",
    job: "フロントエンドエンジニア",
    stage: "書類選考",
  },
  { id: "ito", name: "伊藤 さくら", job: "経理", stage: "書類選考" },
]

const stages = ["書類選考", "一次面接", "二次面接", "最終面接", "内定"]

function ToolbarDemo() {
  const [query, setQuery] = useState("")
  const [message, setMessage] = useState("2名を選択中")

  return (
    <div className="flex w-full flex-col gap-3">
      <Toolbar aria-label="応募者一覧の操作">
        <ToolbarInput
          aria-label="氏名で応募者を絞り込む"
          placeholder="氏名で検索"
          value={query}
          onValueChange={(value) => setQuery(value)}
        />
        <ToolbarSeparator />
        <ToolbarGroup aria-label="選考の操作">
          <ToolbarButton
            variant="secondary"
            onClick={() => setMessage("2名を次の選考に進めました")}
          >
            <ArrowRightIcon aria-hidden="true" />
            次の選考へ
          </ToolbarButton>
          <ToolbarButton
            disabled
            data-agent-confirm="選択した2名を不採用にします"
          >
            <XIcon aria-hidden="true" />
            不採用
          </ToolbarButton>
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarButton
          size="icon-sm"
          aria-label="選択した2名にメールを送る"
          data-agent-confirm="選択した応募者2名にメールを送ります"
          onClick={() => setMessage("2名にメールを送りました")}
        >
          <MailIcon aria-hidden="true" />
        </ToolbarButton>
        <ToolbarButton
          size="icon-sm"
          aria-label="CSVを書き出す"
          onClick={() => setMessage("応募者一覧をCSVに書き出しました")}
        >
          <DownloadIcon aria-hidden="true" />
        </ToolbarButton>
      </Toolbar>
      <p className="text-muted-foreground text-xs" aria-live="polite">
        {query === "" ? message : `「${query}」で絞り込み中・${message}`}
      </p>
    </div>
  )
}

const departments: TreeItemData[] = [
  {
    value: "engineering",
    label: "開発本部",
    children: [{ value: "frontend", label: "フロントエンドエンジニア" }],
  },
  {
    value: "design",
    label: "デザイン部",
    children: [{ value: "designer", label: "プロダクトデザイナー" }],
  },
  {
    value: "business",
    label: "ビジネス本部",
    children: [
      { value: "cs", label: "カスタマーサクセス" },
      { value: "accounting", label: "経理" },
    ],
  },
]

const openings: Record<string, number> = {
  frontend: 9,
  designer: 7,
  cs: 5,
  accounting: 3,
}

function DepartmentItems(props: { items: TreeItemData[] }) {
  return props.items.map((item) => (
    <TreeItem key={item.value} value={item.value}>
      <TreeItemLabel>
        <TreeItemIndicator />
        <span className="flex-1 truncate">{item.label}</span>
        {openings[item.value] !== undefined && (
          <Badge variant="secondary">{openings[item.value]}名</Badge>
        )}
      </TreeItemLabel>
      {item.children && (
        <TreeGroup>
          <DepartmentItems items={item.children} />
        </TreeGroup>
      )}
    </TreeItem>
  ))
}

function TreeDemo() {
  const [value, setValue] = useState<string | null>("frontend")

  const label = departments
    .flatMap((item) => [item, ...(item.children ?? [])])
    .find((item) => item.value === value)?.label

  return (
    <div className="flex w-full flex-col gap-3">
      <Tree
        aria-label="部署と職種"
        items={departments}
        defaultExpanded={["engineering", "business"]}
        value={value}
        onValueChange={setValue}
      >
        <DepartmentItems items={departments} />
      </Tree>
      <p className="text-muted-foreground text-xs">
        {label === undefined ? "未選択" : `${label}の応募者を表示中`}
      </p>
    </div>
  )
}

const progress = [
  {
    value: "applied",
    title: "応募",
    dateTime: "2026-11-02",
    time: "11月2日（月）",
    description: "フロントエンドエンジニアに応募",
    status: "complete",
  },
  {
    value: "screening",
    title: "書類選考を通過",
    dateTime: "2026-11-05",
    time: "11月5日（木）",
    description: "山本 直子が承認",
    status: "complete",
  },
  {
    value: "first",
    title: "一次面接を通過",
    dateTime: "2026-11-10",
    time: "11月10日（火）",
    description: "面接官 中村 大輔・評価 A",
    status: "complete",
  },
  {
    value: "second",
    title: "二次面接（予定）",
    dateTime: "2026-11-18T14:00",
    time: "11月18日（水）14:00",
    description: "面接官 小林 由香・オンライン",
    status: "current",
  },
  {
    value: "final",
    title: "最終面接",
    dateTime: "2026-11",
    time: "日程未定",
    description: "二次面接の結果を待っています",
    status: "upcoming",
  },
] as const

function TimelineDemo() {
  return (
    <div className="flex w-full flex-col gap-3">
      <p className="font-medium text-sm">佐藤 美咲さんの選考の経過</p>
      <Timeline aria-label="佐藤 美咲さんの選考の経過">
        {progress.map((step) => (
          <TimelineItem
            key={step.value}
            value={step.value}
            status={step.status}
          >
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
    </div>
  )
}

function stagesFrom(id: string, start: number, durations: number[]) {
  let at = start
  return durations.map((duration, index) => {
    const span = {
      value: `${id}-${index}`,
      label: stages[index],
      start: at,
      duration,
    }
    at += duration
    return span
  })
}

function total(id: string, name: string, start: number, durations: number[]) {
  return {
    value: id,
    label: name,
    start,
    duration: durations.reduce((sum, duration) => sum + duration, 0),
    children: stagesFrom(id, start, durations),
  }
}

const leadTimes: WaterfallData = [
  total("tanaka", "田中 健太", 0, [4, 7, 6, 5, 2]),
  total("sato", "佐藤 美咲", 1, [3, 5, 8]),
  total("suzuki", "鈴木 陽菜", 4, [3, 6, 4]),
  total("takahashi", "高橋 蓮", 9, [5]),
]

function WaterfallDemo() {
  const [expanded, setExpanded] = useState(["tanaka"])
  const [value, setValue] = useState<string | null>(null)

  const rows = leadTimes.flatMap((item) =>
    expanded.includes(item.value)
      ? [
          { item, level: 1 },
          ...(item.children ?? []).map((child) => ({ item: child, level: 2 })),
        ]
      : [{ item, level: 1 }],
  )

  const selected = rows.find((row) => row.item.value === value)?.item

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex flex-col gap-1">
        <p className="font-medium text-sm">選考リードタイム</p>
        <p className="text-muted-foreground text-xs">
          11月1日からの経過日数・応募者を開くと工程ごとに表示
        </p>
      </div>
      <Waterfall
        aria-label="選考リードタイム"
        items={leadTimes}
        expanded={expanded}
        onExpandedChange={setExpanded}
        value={value}
        onValueChange={setValue}
        format={(days) => `${days}日`}
        getBarLabel={(item, details) =>
          `${item.label}、${details.start}目に開始、${details.duration}かかった`
        }
        style={
          {
            "--waterfall-columns": "minmax(6.5rem,8rem) 3rem minmax(0,1fr)",
          } as CSSProperties
        }
      >
        <WaterfallHeaderRow>
          <WaterfallColumnHeader>応募者</WaterfallColumnHeader>
          <WaterfallColumnHeader>日数</WaterfallColumnHeader>
          <WaterfallColumnHeader aria-label="経過日数">
            <WaterfallAxis maxTicks={3} />
          </WaterfallColumnHeader>
        </WaterfallHeaderRow>
        {rows.map(({ item }) => (
          <WaterfallRow key={item.value} value={item.value}>
            <WaterfallRowHeader>
              {item.children && <WaterfallIndicator />}
              <span className="truncate">{item.label}</span>
            </WaterfallRowHeader>
            <WaterfallCell>{item.duration}日</WaterfallCell>
            <WaterfallBar />
          </WaterfallRow>
        ))}
      </Waterfall>
      <p className="text-muted-foreground text-xs" aria-live="polite">
        {selected === undefined
          ? "行を選ぶと所要日数を表示します"
          : `${selected.label}：${selected.duration}日`}
      </p>
    </div>
  )
}

const hiringGoals = [
  { id: "frontend", job: "フロントエンドエンジニア", hired: 2, goal: 3 },
  { id: "designer", job: "プロダクトデザイナー", hired: 1, goal: 2 },
  { id: "cs", job: "カスタマーサクセス", hired: 0, goal: 2 },
  { id: "accounting", job: "経理", hired: 1, goal: 1 },
]

function MeterDemo() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-col gap-1">
        <p className="font-medium text-sm">2026年度下期の採用目標</p>
        <p className="text-muted-foreground text-xs">
          11月15日時点の内定承諾数
        </p>
      </div>
      {hiringGoals.map((goal) => (
        <Meter
          key={goal.id}
          value={goal.hired}
          max={goal.goal}
          format={(value) => `${value} / ${goal.goal}名`}
          getValueLabel={(value, details) =>
            `目標${goal.goal}名のうち${value}名、達成率${Math.round(details.percent)}%`
          }
        >
          <MeterLabel>{goal.job}</MeterLabel>
          <MeterValue />
        </Meter>
      ))}
    </div>
  )
}

type View = "list" | "board" | "calendar"

const interviews = [
  { id: "i1", date: "11/18（水）14:00", text: "佐藤 美咲・二次面接" },
  { id: "i2", date: "11/19（木）14:00", text: "鈴木 陽菜・二次面接" },
  { id: "i3", date: "11/24（火）10:00", text: "高橋 蓮・一次面接" },
]

function SegmentedControlDemo() {
  const [view, setView] = useState<View>("list")

  return (
    <div className="flex w-full flex-col gap-3">
      <SegmentedControl<View>
        aria-label="応募者の表示"
        value={view}
        onValueChange={(next) => {
          if (next !== null) setView(next)
        }}
      >
        <SegmentedControlItem value="list">
          <ListIcon aria-hidden="true" />
          リスト
        </SegmentedControlItem>
        <SegmentedControlItem value="board">
          <KanbanIcon aria-hidden="true" />
          ボード
        </SegmentedControlItem>
        <SegmentedControlItem value="calendar">
          <CalendarIcon aria-hidden="true" />
          面接予定
        </SegmentedControlItem>
      </SegmentedControl>
      {view === "list" && (
        <ul aria-label="応募者" className="flex flex-col divide-y text-sm">
          {applicants.map((applicant) => (
            <li key={applicant.id} className="flex items-center gap-2 py-2">
              <span className="flex-1">{applicant.name}</span>
              <span className="text-muted-foreground text-xs">
                {applicant.job}
              </span>
            </li>
          ))}
        </ul>
      )}
      {view === "board" && (
        <ul aria-label="選考段階" className="grid grid-cols-2 gap-2 text-sm">
          {stages.map((stage) => (
            <li
              key={stage}
              className="flex flex-col gap-1 rounded-xl bg-muted p-2.5"
            >
              <span className="text-muted-foreground text-xs">{stage}</span>
              {applicants
                .filter((applicant) => applicant.stage === stage)
                .map((applicant) => (
                  <span key={applicant.id}>{applicant.name}</span>
                ))}
            </li>
          ))}
        </ul>
      )}
      {view === "calendar" && (
        <ul aria-label="面接予定" className="flex flex-col gap-2 text-sm">
          {interviews.map((interview) => (
            <li key={interview.id} className="flex gap-3">
              <span className="w-32 shrink-0 text-muted-foreground tabular-nums">
                {interview.date}
              </span>
              <span>{interview.text}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

const staff = [
  {
    team: "人事",
    members: [
      { value: "yamamoto", name: "山本 直子", role: "人事マネージャー" },
    ],
  },
  {
    team: "現場",
    members: [
      { value: "nakamura", name: "中村 大輔", role: "開発部 テックリード" },
      { value: "kobayashi", name: "小林 由香", role: "デザイン部 リード" },
    ],
  },
]

function ListboxDemo() {
  const [interviewers, setInterviewers] = useState<string[]>(["nakamura"])

  const names = staff
    .flatMap((group) => group.members)
    .filter((member) => interviewers.includes(member.value))
    .map((member) => member.name)

  return (
    <Field className="gap-2">
      <FieldLabel>佐藤 美咲さんの二次面接の面接官</FieldLabel>
      <Listbox
        multiple
        name="interviewers"
        value={interviewers}
        onValueChange={setInterviewers}
      >
        {staff.map((group) => (
          <ListboxGroup key={group.team}>
            <ListboxGroupLabel>{group.team}</ListboxGroupLabel>
            {group.members.map((member) => (
              <ListboxItem
                key={member.value}
                value={member.value}
                label={member.name}
              >
                <span className="flex flex-col">
                  <span>{member.name}</span>
                  <span className="font-normal text-muted-foreground text-xs">
                    {member.role}
                  </span>
                </span>
              </ListboxItem>
            ))}
          </ListboxGroup>
        ))}
      </Listbox>
      <p className="text-muted-foreground text-xs" aria-live="polite">
        {names.length === 0
          ? "面接官が未選択です"
          : `${names.join("、")}を割り当て`}
      </p>
    </Field>
  )
}

const notification = createPreference({
  values: ["realtime", "daily", "off"],
  defaultValue: "realtime",
  attribute: "data-notification",
  storage: createLocalStorage("inta-ui-notification"),
})

const notificationTopics = [
  { id: "application", label: "新しい応募", defaultChecked: true },
  { id: "schedule", label: "面接日程の確定", defaultChecked: true },
  { id: "evaluation", label: "評価の記入", defaultChecked: false },
]

function PreferencesDemo() {
  const { value } = usePreference(notification)

  return (
    <Preferences preferences={[notification]}>
      <div className="flex w-full flex-col gap-3">
        <p className="font-medium text-sm">通知設定</p>
        <SegmentedControl
          aria-label="通知のタイミング"
          value={value}
          onValueChange={(next) => {
            if (next !== null) notification.set(next)
          }}
        >
          <SegmentedControlItem value="realtime">すぐに</SegmentedControlItem>
          <SegmentedControlItem value="daily">
            1日1回まとめて
          </SegmentedControlItem>
          <SegmentedControlItem value="off">オフ</SegmentedControlItem>
        </SegmentedControl>
        <ul
          aria-label="通知する内容"
          className="flex flex-col gap-3 text-sm in-data-[notification=off]:opacity-50 transition-opacity"
        >
          {notificationTopics.map((topic) => (
            <li key={topic.id}>
              <Field
                orientation="horizontal"
                className="justify-between"
                disabled={value === "off"}
              >
                <FieldLabel className="font-normal">
                  {topic.label}を通知
                </FieldLabel>
                <Switch name={topic.id} defaultChecked={topic.defaultChecked} />
              </Field>
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground text-xs">
          {value === "off"
            ? "通知はすべて止まっています"
            : value === "daily"
              ? "毎朝9時にまとめてお知らせします"
              : "変化があればすぐにお知らせします"}
        </p>
      </div>
    </Preferences>
  )
}

export function SdkDisplayDemos() {
  return (
    <>
      <Demo name="toolbar">
        <ToolbarDemo />
      </Demo>
      <Demo name="tree">
        <TreeDemo />
      </Demo>
      <Demo name="timeline">
        <TimelineDemo />
      </Demo>
      <Demo name="waterfall">
        <WaterfallDemo />
      </Demo>
      <Demo name="meter">
        <MeterDemo />
      </Demo>
      <Demo name="segmented-control">
        <SegmentedControlDemo />
      </Demo>
      <Demo name="listbox">
        <ListboxDemo />
      </Demo>
      <Demo name="preferences">
        <PreferencesDemo />
      </Demo>
    </>
  )
}
