"use client"

import {
  BriefcaseIcon,
  CalendarIcon,
  ChevronsUpDownIcon,
  MailIcon,
  UserIcon,
} from "lucide-react"
import { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
} from "@/components/ui/combobox"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Field, FieldLabel } from "@/components/ui/field"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Toaster, toast } from "@/components/ui/toast"
import { Demo } from "@/src/demos/demo"

const applicants = [
  { value: "sato", label: "佐藤 美咲", job: "フロントエンドエンジニア" },
  { value: "tanaka", label: "田中 健太", job: "プロダクトデザイナー" },
  { value: "suzuki", label: "鈴木 陽菜", job: "カスタマーサクセス" },
  { value: "takahashi", label: "高橋 蓮", job: "フロントエンドエンジニア" },
  { value: "ito", label: "伊藤 さくら", job: "経理" },
]

const interviewers = [
  { value: "yamamoto", label: "山本 直子" },
  { value: "nakamura", label: "中村 大輔" },
  { value: "kobayashi", label: "小林 由香" },
]

const stageCounts = [
  { stage: "書類選考", count: 12 },
  { stage: "一次面接", count: 6 },
  { stage: "二次面接", count: 4 },
  { stage: "最終面接", count: 2 },
  { stage: "内定", count: 1 },
]

const activities = [
  { id: "a01", date: "11/13 17:40", text: "田中 健太さんに内定を通知" },
  { id: "a02", date: "11/13 15:05", text: "佐藤 美咲さんが一次面接を通過" },
  { id: "a03", date: "11/13 11:20", text: "中村 大輔が評価を記入" },
  { id: "a04", date: "11/12 18:32", text: "鈴木 陽菜さんの二次面接を登録" },
  { id: "a05", date: "11/12 14:10", text: "高橋 蓮さんが書類選考を通過" },
  { id: "a06", date: "11/12 09:48", text: "伊藤 さくらさんが経理に応募" },
  { id: "a07", date: "11/11 16:25", text: "小林 由香が評価を記入" },
  { id: "a08", date: "11/11 13:00", text: "田中 健太さんの最終面接を実施" },
  { id: "a09", date: "11/10 17:15", text: "佐藤 美咲さんの一次面接を登録" },
  {
    id: "a10",
    date: "11/10 10:30",
    text: "高橋 蓮さんがフロントエンドエンジニアに応募",
  },
  { id: "a11", date: "11/09 15:42", text: "鈴木 陽菜さんが一次面接を通過" },
  { id: "a12", date: "11/09 09:05", text: "山本 直子が経理の求人を公開" },
]

const jobs = [
  {
    id: "frontend",
    title: "フロントエンドエンジニア",
    salary: "600〜800万円",
    count: 9,
    color: "from-sky-400 to-indigo-500",
  },
  {
    id: "designer",
    title: "プロダクトデザイナー",
    salary: "550〜750万円",
    count: 7,
    color: "from-rose-400 to-orange-400",
  },
  {
    id: "cs",
    title: "カスタマーサクセス",
    salary: "450〜600万円",
    count: 5,
    color: "from-emerald-400 to-teal-500",
  },
  {
    id: "accounting",
    title: "経理",
    salary: "450〜650万円",
    count: 4,
    color: "from-amber-400 to-yellow-500",
  },
]

function wait(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms)
  })
}

function SelectDemo() {
  return (
    <Demo name="select">
      <div className="flex w-full flex-col gap-3">
        <div className="flex items-center justify-between gap-2">
          <span className="font-medium text-sm">応募者の絞り込み</span>
          <Field className="w-auto">
            <FieldLabel className="sr-only">並び順</FieldLabel>
            <Select name="sort" defaultValue="newest">
              <SelectTrigger size="sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">応募日が新しい順</SelectItem>
                <SelectItem value="oldest">応募日が古い順</SelectItem>
                <SelectItem value="stage">選考が進んでいる順</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>
        <Field className="gap-1.5">
          <FieldLabel className="font-normal text-muted-foreground text-xs">
            求人
          </FieldLabel>
          <Select name="job" placeholder="求人を選択">
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>開発・デザイン</SelectLabel>
                <SelectItem value="frontend">
                  フロントエンドエンジニア
                </SelectItem>
                <SelectItem value="designer">プロダクトデザイナー</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>ビジネス</SelectLabel>
                <SelectItem value="cs">カスタマーサクセス</SelectItem>
                <SelectItem value="accounting">経理</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>
        <Field className="gap-1.5">
          <FieldLabel className="font-normal text-muted-foreground text-xs">
            選考ステージ
          </FieldLabel>
          <Select name="stage" defaultValue="first">
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="document">書類選考</SelectItem>
              <SelectItem value="first">一次面接</SelectItem>
              <SelectItem value="second">二次面接</SelectItem>
              <SelectItem value="final">最終面接</SelectItem>
              <SelectItem value="offer" disabled>
                内定(閲覧権限がありません)
              </SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field className="gap-1.5" disabled>
          <FieldLabel className="font-normal text-muted-foreground text-xs">
            面接官
          </FieldLabel>
          <Select name="interviewer" placeholder="求人を選ぶと指定できます">
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yamamoto">山本 直子</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </div>
    </Demo>
  )
}

function ComboboxDemo() {
  return (
    <Demo name="combobox">
      <div className="flex w-full flex-col gap-3">
        <span className="font-medium text-sm">面接の設定</span>
        <Field className="gap-1.5">
          <FieldLabel className="font-normal text-muted-foreground text-xs">
            応募者
          </FieldLabel>
          <Combobox name="applicant">
            <ComboboxInput
              className="w-full"
              placeholder="氏名で検索"
              showClear
            />
            <ComboboxContent>
              <ComboboxEmpty>該当する応募者がいません</ComboboxEmpty>
              <ComboboxList>
                {applicants.map((applicant) => (
                  <ComboboxItem
                    key={applicant.value}
                    value={applicant.value}
                    label={applicant.label}
                  >
                    {applicant.label}
                  </ComboboxItem>
                ))}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </Field>
        <Field className="gap-1.5">
          <FieldLabel className="font-normal text-muted-foreground text-xs">
            面接官
          </FieldLabel>
          <Combobox
            name="interviewers"
            multiple
            defaultValue={["yamamoto", "nakamura"]}
          >
            <ComboboxChips className="w-full">
              <ComboboxValue>
                {(state) =>
                  state.values.map((value) => (
                    <ComboboxChip key={value} value={value} />
                  ))
                }
              </ComboboxValue>
              <ComboboxChipsInput placeholder="追加" />
            </ComboboxChips>
            <ComboboxContent>
              <ComboboxEmpty>該当する社員がいません</ComboboxEmpty>
              <ComboboxList>
                {interviewers.map((interviewer) => (
                  <ComboboxItem
                    key={interviewer.value}
                    value={interviewer.value}
                    label={interviewer.label}
                  >
                    {interviewer.label}
                  </ComboboxItem>
                ))}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </Field>
      </div>
    </Demo>
  )
}

function CommandDemo() {
  const [last, setLast] = useState("")

  return (
    <Demo name="command">
      <div className="flex w-full flex-col gap-2">
        <Command
          className="h-auto rounded-lg border"
          onAction={(value) => setLast(value)}
        >
          <CommandInput
            aria-label="応募者や操作を検索"
            placeholder="応募者や操作を検索"
          />
          <CommandEmpty>該当する項目がありません</CommandEmpty>
          <CommandList>
            <CommandGroup heading="応募者">
              {applicants.slice(0, 3).map((applicant) => (
                <CommandItem key={applicant.value} value={applicant.label}>
                  <UserIcon />
                  {applicant.label}
                  <span className="text-muted-foreground text-xs">
                    {applicant.job}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="操作">
              <CommandItem value="面接を登録" shortcut="mod+j">
                <CalendarIcon />
                面接を登録
                <CommandShortcut />
              </CommandItem>
              <CommandItem value="求人を作成" shortcut="mod+k">
                <BriefcaseIcon />
                求人を作成
                <CommandShortcut />
              </CommandItem>
              <CommandItem value="内定通知を送信" disabled>
                <MailIcon />
                内定通知を送信
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
        <p className="text-muted-foreground text-sm">
          {last === "" ? "項目を選ぶと実行されます" : `実行: ${last}`}
        </p>
      </div>
    </Demo>
  )
}

function TabsDemo() {
  return (
    <Demo name="tabs">
      <div className="flex w-full flex-col gap-3">
        <div className="flex items-center gap-3">
          <Avatar size="lg" aria-hidden="true">
            <AvatarFallback>佐</AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-col">
            <span className="font-medium text-sm">佐藤 美咲</span>
            <span className="truncate text-muted-foreground text-xs">
              フロントエンドエンジニア
            </span>
          </div>
          <Badge variant="secondary" className="ml-auto">
            一次面接
          </Badge>
        </div>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList aria-label="応募者の詳細">
            <TabsTrigger value="overview">概要</TabsTrigger>
            <TabsTrigger value="history">選考履歴</TabsTrigger>
            <TabsTrigger value="review">評価</TabsTrigger>
            <TabsTrigger value="offer" disabled>
              内定条件
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
              <dt className="text-muted-foreground">応募日</dt>
              <dd>2026年11月4日</dd>
              <dt className="text-muted-foreground">希望年収</dt>
              <dd>650〜750万円</dd>
              <dt className="text-muted-foreground">現職</dt>
              <dd>Web制作会社 / 5年</dd>
              <dt className="text-muted-foreground">採用担当</dt>
              <dd>山本 直子</dd>
            </dl>
          </TabsContent>
          <TabsContent value="history">
            <ul className="flex flex-col gap-2 text-sm">
              <li className="flex justify-between gap-2">
                <span>一次面接(中村 大輔)</span>
                <span className="text-muted-foreground">11月18日 予定</span>
              </li>
              <li className="flex justify-between gap-2">
                <span>書類選考を通過</span>
                <span className="text-muted-foreground">11月9日</span>
              </li>
              <li className="flex justify-between gap-2">
                <span>応募を受付</span>
                <span className="text-muted-foreground">11月4日</span>
              </li>
            </ul>
          </TabsContent>
          <TabsContent value="review">
            <p className="text-sm">
              書類選考: React と TypeScript
              の実務経験が豊富で、デザインシステムの運用経験もあります。一次面接では設計の進め方を確認してください。
            </p>
            <p className="mt-2 text-muted-foreground text-xs">
              山本 直子・11月9日
            </p>
          </TabsContent>
          <TabsContent value="offer">
            最終面接の通過後に入力できます。
          </TabsContent>
        </Tabs>
      </div>
    </Demo>
  )
}

function AccordionDemo() {
  return (
    <Demo name="accordion">
      <div className="flex w-full flex-col gap-2">
        <span className="font-medium text-sm">応募者からのよくある質問</span>
        <Accordion
          defaultValue={["flow"]}
          className="w-full"
          aria-label="応募者からのよくある質問"
        >
          <AccordionItem value="flow">
            <AccordionTrigger>選考の流れを教えてください</AccordionTrigger>
            <AccordionContent>
              書類選考のあと、一次面接・二次面接・最終面接の順に進みます。応募から内定までは3〜4週間が目安です。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="online">
            <AccordionTrigger>
              面接はオンラインで受けられますか
            </AccordionTrigger>
            <AccordionContent>
              一次面接と二次面接はオンラインで実施します。最終面接のみ来社をお願いしています。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="result">
            <AccordionTrigger>結果はいつ届きますか</AccordionTrigger>
            <AccordionContent>
              各選考の5営業日以内に、登録のメールアドレスへお知らせします。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="reapply" disabled>
            <AccordionTrigger>再応募について(準備中)</AccordionTrigger>
            <AccordionContent>回答を準備しています。</AccordionContent>
          </AccordionItem>
        </Accordion>
        <span className="mt-2 font-medium text-sm">入社までの手続き</span>
        <Accordion multiple className="w-full" aria-label="入社までの手続き">
          <AccordionItem value="documents">
            <AccordionTrigger>提出書類</AccordionTrigger>
            <AccordionContent>
              雇用契約書、年金手帳、源泉徴収票を入社日の1週間前までに提出してください。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="start">
            <AccordionTrigger>入社日の調整</AccordionTrigger>
            <AccordionContent>
              内定承諾から3か月以内で、採用担当の山本と相談のうえ決定します。
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Demo>
  )
}

function CollapsibleDemo() {
  return (
    <Demo name="collapsible">
      <Collapsible className="flex w-full flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <span className="font-medium text-sm">11月18日の面接 3件</span>
          <CollapsibleTrigger
            aria-label="面接の一覧を開閉"
            className={buttonVariants({ variant: "ghost", size: "icon-sm" })}
          >
            <ChevronsUpDownIcon />
          </CollapsibleTrigger>
        </div>
        <div className="flex justify-between gap-2 rounded-md border px-3 py-2 text-sm">
          <span>14:00 佐藤 美咲</span>
          <span className="text-muted-foreground">一次面接</span>
        </div>
        <CollapsibleContent className="flex flex-col gap-2">
          <div className="flex justify-between gap-2 rounded-md border px-3 py-2 text-sm">
            <span>15:30 鈴木 陽菜</span>
            <span className="text-muted-foreground">二次面接</span>
          </div>
          <div className="flex justify-between gap-2 rounded-md border px-3 py-2 text-sm">
            <span>17:00 高橋 蓮</span>
            <span className="text-muted-foreground">一次面接</span>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible defaultOpen disabled className="w-full text-sm">
        <CollapsibleTrigger>面接官への連絡事項(常に表示)</CollapsibleTrigger>
        <CollapsibleContent className="text-muted-foreground">
          評価は面接当日中に記入してください。
        </CollapsibleContent>
      </Collapsible>
    </Demo>
  )
}

function ScrollAreaDemo() {
  return (
    <Demo name="scroll-area">
      <div className="flex w-full min-w-0 flex-col gap-3">
        <span className="font-medium text-sm">選考の動き</span>
        <ScrollArea
          orientation="horizontal"
          className="w-full rounded-md border"
          aria-label="選考ステージごとの人数"
        >
          <div className="flex w-max gap-2 p-3">
            {stageCounts.map((item) => (
              <div
                key={item.stage}
                className="flex w-24 flex-col gap-1 rounded-md bg-muted px-3 py-2"
              >
                <span className="text-muted-foreground text-xs">
                  {item.stage}
                </span>
                <span className="font-semibold text-lg">{item.count}名</span>
              </div>
            ))}
          </div>
        </ScrollArea>
        <ScrollArea
          className="h-44 w-full rounded-md border"
          aria-label="選考の動きの履歴"
        >
          <div className="flex flex-col gap-3 p-3 text-sm">
            {activities.map((activity) => (
              <div key={activity.id} className="flex flex-col">
                <span>{activity.text}</span>
                <span className="text-muted-foreground text-xs">
                  {activity.date}
                </span>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </Demo>
  )
}

function ResizableDemo() {
  return (
    <Demo name="resizable">
      <ResizablePanelGroup
        className="h-64 rounded-lg border"
        aria-label="応募者一覧と応募者詳細の分割"
      >
        <ResizablePanel defaultSize={35} minSize={20}>
          <ul className="flex h-full flex-col gap-1 overflow-hidden p-2 text-sm">
            {applicants.map((applicant) => (
              <li
                key={applicant.value}
                className={
                  applicant.value === "sato"
                    ? "truncate rounded-md bg-muted px-2 py-1 font-medium"
                    : "truncate rounded-md px-2 py-1"
                }
              >
                {applicant.label}
              </li>
            ))}
          </ul>
        </ResizablePanel>
        <ResizableHandle withHandle aria-label="応募者一覧の幅を変更" />
        <ResizablePanel defaultSize={65} minSize={30}>
          <ResizablePanelGroup
            orientation="vertical"
            aria-label="職務経歴と面接メモの分割"
          >
            <ResizablePanel defaultSize={55} minSize={20}>
              <div className="flex h-full flex-col gap-1 overflow-hidden p-3 text-sm">
                <span className="font-medium">職務経歴</span>
                <p className="text-muted-foreground">
                  Web制作会社で5年、React と TypeScript
                  によるフロントエンド開発を担当。デザインシステムの運用経験あり。
                </p>
              </div>
            </ResizablePanel>
            <ResizableHandle aria-label="面接メモの高さを変更" />
            <ResizablePanel defaultSize={45} minSize={20}>
              <div className="flex h-full flex-col gap-1 overflow-hidden p-3 text-sm">
                <span className="font-medium">面接メモ</span>
                <p className="text-muted-foreground">
                  一次面接では設計の進め方と、チームでのレビュー経験を確認する。
                </p>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </Demo>
  )
}

function CarouselDemo() {
  return (
    <Demo name="carousel">
      <div className="w-full px-12">
        <Carousel aria-label="募集中の求人">
          <CarouselContent>
            {jobs.map((job) => (
              <CarouselItem key={job.id}>
                <div className="flex flex-col overflow-hidden rounded-lg border">
                  <div className={`h-16 bg-linear-to-br ${job.color}`} />
                  <div className="flex flex-col gap-1 p-3">
                    <span className="font-medium text-sm">{job.title}</span>
                    <span className="text-muted-foreground text-xs">
                      年収 {job.salary}
                    </span>
                    <span className="text-muted-foreground text-xs">
                      応募 {job.count}名
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </Demo>
  )
}

function ToastDemo() {
  return (
    <Demo name="toast">
      <Toaster />
      <Button
        variant="outline"
        onClick={() =>
          toast("面接を登録しました", {
            description: "11月18日(水) 14:00 佐藤 美咲 / 一次面接",
            action: {
              label: "取り消す",
              onAction: () => toast("面接の登録を取り消しました"),
            },
          })
        }
      >
        面接を登録
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.success("評価を保存しました")}
      >
        評価を保存
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.info("新しい応募が2件あります")}
      >
        新着を確認
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.warning("田中 健太さんの内定回答期限は明日までです")
        }
      >
        回答期限を確認
      </Button>
      <Button
        variant="outline"
        data-agent-confirm="応募者に面接の案内メールをもう一度送ります"
        onClick={() => toast.error("案内メールを送信できませんでした")}
      >
        案内メールを再送
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.promise(wait(2000), {
            loading: "履歴書をアップロードしています",
            success: "履歴書をアップロードしました",
            error: "履歴書をアップロードできませんでした",
          })
        }
      >
        履歴書をアップロード
      </Button>
      <Button variant="ghost" onClick={() => toast.dismiss()}>
        通知をすべて閉じる
      </Button>
    </Demo>
  )
}

export function SelectionDemos() {
  return (
    <>
      <SelectDemo />
      <ComboboxDemo />
      <CommandDemo />
      <TabsDemo />
      <AccordionDemo />
      <CollapsibleDemo />
      <ScrollAreaDemo />
      <ResizableDemo />
      <CarouselDemo />
      <ToastDemo />
    </>
  )
}
