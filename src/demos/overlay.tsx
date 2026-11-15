"use client"

import {
  CalendarPlusIcon,
  CircleHelpIcon,
  FileTextIcon,
  ListFilterIcon,
  MailIcon,
  StickyNoteIcon,
  UserXIcon,
} from "lucide-react"
import { useState } from "react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Field, FieldLabel } from "@/components/ui/field"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Demo } from "@/src/demos/demo"

const stages = ["書類選考", "一次面接", "二次面接", "最終面接", "内定"] as const

const candidateDates = [
  "11月18日(水) 14:00〜15:00",
  "11月19日(木) 10:00〜11:00",
  "11月20日(金) 16:00〜17:00",
] as const

const applicants = [
  {
    name: "鈴木 陽菜",
    initial: "鈴",
    job: "プロダクトデザイナー",
    stage: "二次面接",
    appliedAt: "2026年11月2日",
    salary: "550〜700万円",
    interviewer: "小林 由香",
    note: "ポートフォリオの完成度が高い。二次面接では課題のレビューを実施予定。",
  },
  {
    name: "田中 健太",
    initial: "田",
    job: "フロントエンドエンジニア",
    stage: "一次面接",
    appliedAt: "2026年11月6日",
    salary: "600〜800万円",
    interviewer: "中村 大輔",
    note: "React での開発経験5年。一次面接は11月19日に実施予定。",
  },
  {
    name: "伊藤 さくら",
    initial: "伊",
    job: "カスタマーサクセス",
    stage: "書類選考",
    appliedAt: "2026年11月12日",
    salary: "450〜600万円",
    interviewer: "山本 直子",
    note: "SaaS 企業でのサポート経験あり。書類の確認待ち。",
  },
] as const

const interviewers = [
  {
    name: "中村 大輔",
    initial: "中",
    role: "エンジニアリングマネージャー",
    job: "フロントエンドエンジニア",
    interviews: "今週の面接 3件",
  },
  {
    name: "小林 由香",
    initial: "小",
    role: "デザインリード",
    job: "プロダクトデザイナー",
    interviews: "今週の面接 2件",
  },
] as const

const applicantActions = [
  {
    label: "履歴書を開く",
    name: "田中 健太さんの履歴書を開く",
    icon: FileTextIcon,
    confirm: undefined,
  },
  {
    label: "メールを送る",
    name: "田中 健太さんにメールを送る",
    icon: MailIcon,
    confirm: "田中 健太さんにメールを送ります",
  },
  {
    label: "面接を設定",
    name: "田中 健太さんの面接を設定",
    icon: CalendarPlusIcon,
    confirm: undefined,
  },
  {
    label: "メモを追加",
    name: "田中 健太さんのメモを追加",
    icon: StickyNoteIcon,
    confirm: undefined,
  },
] as const

export function OverlayDemos() {
  const [takahashiStatus, setTakahashiStatus] = useState("書類選考の結果待ち")
  const [scheduleStatus, setScheduleStatus] = useState("")
  const [stageFilters, setStageFilters] = useState<string[]>(["一次面接"])

  function toggleStageFilter(stage: string, checked: boolean) {
    if (checked) {
      setStageFilters((current) => [...current, stage])
      return
    }
    setStageFilters((current) => current.filter((item) => item !== stage))
  }

  return (
    <>
      <Demo name="dialog">
        <div className="flex w-full flex-col gap-1">
          <p className="font-medium text-sm">一次面接の日程</p>
          <p className="text-muted-foreground text-sm">
            佐藤 美咲さん・フロントエンドエンジニア
          </p>
          <p className="text-sm">
            第1希望 {candidateDates[0]}
            {scheduleStatus}
          </p>
        </div>
        <div className="flex w-full flex-wrap gap-2">
          <Dialog
            onOpenChange={(open, details) => {
              if (!open && details.returnValue === "confirm") {
                setScheduleStatus("(確定済み)")
              }
            }}
          >
            <DialogTrigger className={buttonVariants()}>
              日程を確定
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>面接日程を確定しますか?</DialogTitle>
                <DialogDescription>
                  {candidateDates[0]}{" "}
                  で確定し、佐藤さんと面接官の中村さんに案内メールを送ります。
                </DialogDescription>
              </DialogHeader>
              <Field name="place">
                <FieldLabel>面接の場所</FieldLabel>
                <Input defaultValue="オンライン(ビデオ通話)" />
              </Field>
              <DialogFooter>
                <DialogClose className={buttonVariants({ variant: "outline" })}>
                  キャンセル
                </DialogClose>
                <DialogClose
                  value="confirm"
                  className={buttonVariants()}
                  data-agent-confirm="佐藤 美咲さんの一次面接の日程を確定し、佐藤さんと面接官に案内メールを送ります"
                >
                  案内メールを送信
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger className={buttonVariants({ variant: "outline" })}>
              候補日を見る
            </DialogTrigger>
            <DialogContent showCloseButton={false}>
              <DialogHeader>
                <DialogTitle>佐藤さんの候補日</DialogTitle>
                <DialogDescription>
                  11月13日に応募者から届いた希望日時です。
                </DialogDescription>
              </DialogHeader>
              <ol className="grid gap-2 text-sm">
                {candidateDates.map((date, index) => (
                  <li key={date} className="flex items-center gap-2">
                    <Badge variant="secondary">第{index + 1}希望</Badge>
                    {date}
                  </li>
                ))}
              </ol>
              <DialogFooter>
                <DialogClose className={buttonVariants({ variant: "outline" })}>
                  閉じる
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </Demo>

      <Demo name="alert-dialog">
        <div className="flex w-full items-center gap-3">
          <Avatar aria-hidden="true">
            <AvatarFallback>高</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="font-medium text-sm">高橋 蓮</p>
            <p className="truncate text-muted-foreground text-sm">
              経理・{takahashiStatus}
            </p>
          </div>
        </div>
        <div className="flex w-full flex-wrap gap-2">
          <AlertDialog
            onOpenChange={(open, details) => {
              if (!open && details.returnValue === "confirm") {
                setTakahashiStatus("一次面接の日程調整中")
              }
            }}
          >
            <AlertDialogTrigger className={buttonVariants()}>
              一次面接に進める
            </AlertDialogTrigger>
            <AlertDialogContent size="sm">
              <AlertDialogHeader>
                <AlertDialogTitle>一次面接に進めますか?</AlertDialogTitle>
                <AlertDialogDescription>
                  高橋さんに日程調整の案内メールが送られます。
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>キャンセル</AlertDialogCancel>
                <AlertDialogAction
                  value="confirm"
                  data-agent-confirm="高橋 蓮さんを一次面接に進め、日程調整の案内メールを送ります"
                >
                  案内を送る
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <AlertDialog
            onOpenChange={(open, details) => {
              if (!open && details.returnValue === "confirm") {
                setTakahashiStatus("見送り済み")
              }
            }}
          >
            <AlertDialogTrigger
              className={buttonVariants({ variant: "destructive" })}
            >
              見送りにする
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogMedia>
                  <UserXIcon />
                </AlertDialogMedia>
                <AlertDialogTitle>
                  高橋 蓮さんを見送りにしますか?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  選考を終了し、見送りの通知メールを送信します。送信後は取り消せません。
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>キャンセル</AlertDialogCancel>
                <AlertDialogAction
                  variant="destructive"
                  value="confirm"
                  data-agent-confirm="高橋 蓮さんの選考を終了し、見送りの通知メールを送ります。送信後は取り消せません"
                >
                  見送りを通知
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </Demo>

      <Demo name="sheet">
        <p className="w-full font-medium text-sm">選考中の応募者</p>
        <ul className="-mt-1 flex w-full flex-col gap-3">
          {applicants.map((applicant) => (
            <li key={applicant.name} className="flex items-center gap-3">
              <Avatar aria-hidden="true">
                <AvatarFallback>{applicant.initial}</AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-sm">{applicant.name}</p>
                <p className="truncate text-muted-foreground text-xs">
                  {`${applicant.job}志望・${applicant.stage}中`}
                </p>
              </div>
              <Sheet>
                <SheetTrigger
                  aria-label={`${applicant.name}の詳細を開く`}
                  className={buttonVariants({ variant: "outline", size: "sm" })}
                >
                  詳細
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>{applicant.name}</SheetTitle>
                    <SheetDescription>
                      {applicant.job}・{applicant.stage}
                    </SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-col gap-4 px-6">
                    <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
                      <dt className="text-muted-foreground">応募日</dt>
                      <dd>{applicant.appliedAt}</dd>
                      <dt className="text-muted-foreground">想定年収</dt>
                      <dd>{applicant.salary}</dd>
                      <dt className="text-muted-foreground">担当</dt>
                      <dd>{applicant.interviewer}</dd>
                    </dl>
                    <div className="flex flex-col gap-1">
                      <p className="font-medium text-sm">選考メモ</p>
                      <p className="text-muted-foreground text-sm">
                        {applicant.note}
                      </p>
                    </div>
                  </div>
                  <SheetFooter>
                    <SheetClose className={buttonVariants()}>
                      面接の設定へ進む
                    </SheetClose>
                    <SheetClose
                      className={buttonVariants({ variant: "outline" })}
                    >
                      閉じる
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </li>
          ))}
        </ul>
      </Demo>

      <Demo name="drawer">
        <div className="flex w-full items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="font-medium text-sm">応募者一覧</p>
            <p className="truncate text-muted-foreground text-sm">
              {stageFilters.length === 0
                ? "すべてのステージを表示中"
                : `${stageFilters.length}件のステージで絞り込み中`}
            </p>
          </div>
          <Drawer side="bottom" showSwipeHandle>
            <DrawerTrigger className={buttonVariants({ variant: "outline" })}>
              <ListFilterIcon />
              絞り込み
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>応募者を絞り込む</DrawerTitle>
                <DrawerDescription>
                  表示する選考ステージを選んでください。
                </DrawerDescription>
              </DrawerHeader>
              <div className="flex flex-col gap-3 p-4">
                {stages.map((stage) => (
                  <Field key={stage} orientation="horizontal">
                    <Checkbox
                      name="stages"
                      value={stage}
                      checked={stageFilters.includes(stage)}
                      onCheckedChange={(value) =>
                        toggleStageFilter(stage, value === true)
                      }
                    />
                    <FieldLabel>{stage}</FieldLabel>
                  </Field>
                ))}
              </div>
              <DrawerFooter>
                <DrawerClose className={buttonVariants()}>
                  この条件で表示
                </DrawerClose>
                <Button
                  variant="outline"
                  disabled={stageFilters.length === 0}
                  onClick={() => setStageFilters([])}
                >
                  条件をクリア
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </Demo>

      <Demo name="popover">
        <div className="flex w-full flex-col gap-1">
          <p className="font-medium text-sm">伊藤 さくら</p>
          <p className="text-muted-foreground text-sm">
            カスタマーサクセス・書類選考
          </p>
        </div>
        <div className="flex w-full flex-wrap gap-2">
          <Popover>
            <PopoverTrigger className={buttonVariants({ variant: "outline" })}>
              <StickyNoteIcon />
              メモを追加
            </PopoverTrigger>
            <PopoverContent align="start">
              <PopoverHeader>
                <PopoverTitle>選考メモ</PopoverTitle>
                <PopoverDescription>
                  採用チームのメンバーだけに表示されます。
                </PopoverDescription>
              </PopoverHeader>
              <Field name="note">
                <FieldLabel className="sr-only">
                  伊藤 さくらさんの選考メモ
                </FieldLabel>
                <Input placeholder="例: 職務経歴書を確認済み" />
              </Field>
              <Button size="sm">メモを保存</Button>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger className={buttonVariants({ variant: "ghost" })}>
              選考の流れ
            </PopoverTrigger>
            <PopoverContent side="right" align="start" className="w-48">
              <PopoverTitle>カスタマーサクセスの選考</PopoverTitle>
              <ol className="flex flex-col gap-1 text-sm">
                {stages.map((stage) => (
                  <li
                    key={stage}
                    className={
                      stage === "書類選考"
                        ? "font-medium"
                        : "text-muted-foreground"
                    }
                  >
                    {stage}
                    {stage === "書類選考" && "(現在)"}
                  </li>
                ))}
              </ol>
            </PopoverContent>
          </Popover>
        </div>
      </Demo>

      <Demo name="hover-card">
        <div className="flex w-full flex-col gap-1">
          <p className="font-medium text-sm">二次面接の面接官</p>
          <p className="text-muted-foreground text-sm">
            鈴木 陽菜さん・11月24日(火) 13:00〜
          </p>
        </div>
        <div className="flex w-full flex-wrap gap-x-4 gap-y-2">
          {interviewers.map((interviewer) => (
            <HoverCard key={interviewer.name}>
              <HoverCardTrigger
                href="#hover-card"
                className={buttonVariants({
                  variant: "link",
                  className: "px-0",
                })}
              >
                {interviewer.name}
              </HoverCardTrigger>
              <HoverCardContent align="start">
                <div className="flex items-start gap-3">
                  <Avatar size="lg" aria-hidden="true">
                    <AvatarFallback>{interviewer.initial}</AvatarFallback>
                  </Avatar>
                  <div className="flex min-w-0 flex-col gap-1">
                    <p className="font-medium">{interviewer.name}</p>
                    <p className="text-muted-foreground">{interviewer.role}</p>
                    <p className="text-muted-foreground">
                      担当求人: {interviewer.job}
                    </p>
                    <p>{interviewer.interviews}</p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </Demo>

      <Demo name="tooltip">
        <div className="flex w-full items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="font-medium text-sm">田中 健太</p>
            <p className="truncate text-muted-foreground text-sm">
              フロントエンドエンジニア・一次面接
            </p>
          </div>
          <div className="flex items-center gap-1 text-sm">
            評価 4.2
            <Tooltip>
              <TooltipTrigger
                aria-label="評価について"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon-xs",
                })}
              >
                <CircleHelpIcon />
              </TooltipTrigger>
              <TooltipContent>面接官3名の評価の平均です</TooltipContent>
            </Tooltip>
          </div>
        </div>
        <div className="flex w-full flex-wrap gap-2">
          {applicantActions.map((action) => (
            <Tooltip key={action.label} delay={300}>
              <TooltipTrigger
                aria-label={action.name}
                data-agent-confirm={action.confirm}
                className={buttonVariants({ variant: "outline", size: "icon" })}
              >
                <action.icon />
              </TooltipTrigger>
              <TooltipContent side="bottom">{action.label}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </Demo>
    </>
  )
}
