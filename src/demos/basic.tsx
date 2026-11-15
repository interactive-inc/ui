"use client"

import {
  AlertCircleIcon,
  ArrowRightIcon,
  BadgeCheckIcon,
  BellIcon,
  CalendarIcon,
  CheckIcon,
  ChevronRightIcon,
  CopyIcon,
  InfoIcon,
  MailIcon,
  MinusIcon,
  PlusIcon,
  UsersIcon,
  XIcon,
} from "lucide-react"
import { useState } from "react"
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Spinner } from "@/components/ui/spinner"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Demo } from "@/src/demos/demo"

const applicants = [
  {
    id: "sato",
    name: "佐藤 美咲",
    job: "フロントエンドエンジニア",
    stage: "二次面接",
    appliedAt: "11/4",
  },
  {
    id: "tanaka",
    name: "田中 健太",
    job: "フロントエンドエンジニア",
    stage: "書類選考",
    appliedAt: "11/10",
  },
  {
    id: "suzuki",
    name: "鈴木 陽菜",
    job: "プロダクトデザイナー",
    stage: "一次面接",
    appliedAt: "11/9",
  },
  {
    id: "takahashi",
    name: "高橋 蓮",
    job: "カスタマーサクセス",
    stage: "最終面接",
    appliedAt: "10/28",
  },
  {
    id: "ito",
    name: "伊藤 さくら",
    job: "経理",
    stage: "内定",
    appliedAt: "10/21",
  },
]

const interviews = [
  { id: "sato", time: "11/18(水) 14:00", name: "佐藤 美咲", stage: "二次面接" },
  {
    id: "suzuki",
    time: "11/19(木) 10:30",
    name: "鈴木 陽菜",
    stage: "一次面接",
  },
  {
    id: "takahashi",
    time: "11/20(金) 16:00",
    name: "高橋 蓮",
    stage: "最終面接",
  },
]

const shortcuts = [
  { id: "next", label: "次の応募者へ", keys: ["J"] },
  { id: "prev", label: "前の応募者へ", keys: ["K"] },
]

const skeletonRows = ["a", "b", "c"]

const pageSize = 8

const totalApplicants = 42

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function BasicDemos() {
  const [count, setCount] = useState(2)

  const [headcount, setHeadcount] = useState(2)

  const [progress, setProgress] = useState(40)

  const [page, setPage] = useState(2)

  return (
    <>
      <Demo name="button">
        <div className="flex w-full flex-col gap-1">
          <div className="font-medium">佐藤 美咲</div>
          <p className="text-muted-foreground text-sm">
            フロントエンドエンジニア・一次面接 通過
          </p>
        </div>
        <div className="flex w-full flex-wrap items-center gap-2">
          <Button>
            二次面接に進める
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
          <Button
            variant="outline"
            data-agent-confirm="佐藤 美咲さんの評価を面接官に依頼します"
            onClick={() => wait(1500)}
          >
            評価を依頼
          </Button>
          <Button
            variant="destructive"
            data-agent-confirm="佐藤 美咲さんの選考を終了し、見送りにします"
          >
            見送る
          </Button>
        </div>
        <div className="flex w-full flex-wrap items-center gap-2">
          <Button
            size="sm"
            variant="secondary"
            onClick={() => setCount(count + 1)}
          >
            <PlusIcon data-icon="inline-start" />
            選考メモを追加({count}件)
          </Button>
          <Button size="sm" variant="ghost">
            あとで確認
          </Button>
          <Button size="sm" variant="link" render={<a href="#button" />}>
            履歴書を開く
          </Button>
          <Button
            size="icon-sm"
            variant="outline"
            aria-label="メールを送る"
            data-agent-confirm="佐藤 美咲さんにメールを送ります"
          >
            <MailIcon />
          </Button>
        </div>
        <div className="flex w-full flex-wrap items-center gap-2">
          <Button
            size="lg"
            disabled
            data-agent-confirm="佐藤 美咲さんに内定を通知します"
          >
            内定を通知
          </Button>
          <Button size="xs" disabled focusableWhenDisabled variant="outline">
            最終面接の完了後に通知できます
          </Button>
        </div>
      </Demo>

      <Demo name="button-group">
        <div className="flex w-full flex-wrap items-center justify-between gap-2">
          <ButtonGroup>
            <Button variant="outline">一覧で見る</Button>
            <Button variant="outline">ボードで見る</Button>
            <Button variant="outline">カレンダーで見る</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="secondary" size="sm">
              書き出し
            </Button>
            <ButtonGroupSeparator />
            <Button variant="secondary" size="sm">
              印刷
            </Button>
          </ButtonGroup>
        </div>
        <ButtonGroup className="w-full">
          <ButtonGroupText>求人URL</ButtonGroupText>
          <Button
            variant="outline"
            className="flex-1 justify-between"
            aria-label="求人URLをコピー"
          >
            <span className="truncate">careers.example.jp/frontend</span>
            <CopyIcon data-icon="inline-end" />
          </Button>
        </ButtonGroup>
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <ButtonGroup orientation="vertical">
              <Button
                variant="outline"
                size="icon"
                aria-label="募集人数を増やす"
                onClick={() => setHeadcount(headcount + 1)}
              >
                <PlusIcon />
              </Button>
              <Button
                variant="outline"
                size="icon"
                aria-label="募集人数を減らす"
                disabled={headcount <= 1}
                onClick={() => setHeadcount(headcount - 1)}
              >
                <MinusIcon />
              </Button>
            </ButtonGroup>
            <div className="flex flex-col text-sm">
              <span className="text-muted-foreground">募集人数</span>
              <span className="font-medium tabular-nums">{headcount}名</span>
            </div>
          </div>
          <ButtonGroup>
            <ButtonGroup>
              <Button variant="outline" aria-label="求人一覧の1ページ目">
                1
              </Button>
              <Button variant="outline" aria-label="求人一覧の2ページ目">
                2
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="outline" aria-label="求人一覧の次のページ">
                次へ
              </Button>
            </ButtonGroup>
          </ButtonGroup>
        </div>
      </Demo>

      <Demo name="badge">
        <div className="flex w-full items-center justify-between gap-2">
          <div className="font-medium">プロダクトデザイナー</div>
          <Badge>募集中</Badge>
        </div>
        <div className="flex w-full flex-wrap items-center gap-2">
          <Badge variant="secondary">正社員</Badge>
          <Badge variant="outline">リモート可</Badge>
          <Badge variant="outline">500〜700万円</Badge>
          <Badge variant="ghost">11月30日締切</Badge>
        </div>
        <div className="flex w-full flex-wrap items-center gap-2 text-sm">
          <span>未対応の応募</span>
          <Badge className="min-w-5 px-1 tabular-nums">8</Badge>
          <Badge variant="destructive">期限超過 2</Badge>
          <Badge variant="secondary">
            <BadgeCheckIcon data-icon="inline-start" />
            求人票 承認済み
          </Badge>
        </div>
        <div className="flex w-full flex-wrap items-center gap-2">
          <Badge variant="outline" render={<a href="#badge" />}>
            応募者一覧へ
            <ArrowRightIcon data-icon="inline-end" />
          </Badge>
          <Badge variant="link" render={<a href="#badge" />}>
            求人票を見る
          </Badge>
        </div>
      </Demo>

      <Demo name="card" bare>
        <Card>
          <CardHeader>
            <CardTitle>フロントエンドエンジニア</CardTitle>
            <CardDescription>正社員・東京(リモート可)</CardDescription>
            <CardAction>
              <Badge variant="secondary">募集中</Badge>
            </CardAction>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2">
              <dt className="text-muted-foreground">年収</dt>
              <dd>600〜800万円</dd>
              <dt className="text-muted-foreground">応募者</dt>
              <dd>24名(選考中 9名)</dd>
              <dt className="text-muted-foreground">面接担当</dt>
              <dd>中村 大輔</dd>
              <dt className="text-muted-foreground">公開日</dt>
              <dd>2026年10月19日</dd>
            </dl>
          </CardContent>
          <CardFooter className="gap-2">
            <Button size="sm">応募者を見る</Button>
            <Button size="sm" variant="ghost">
              求人を編集
            </Button>
          </CardFooter>
        </Card>
        <Card size="sm">
          <CardHeader>
            <CardTitle>今週の面接</CardTitle>
            <CardDescription>11月16日〜11月20日・3件</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-2">
              {interviews.map((interview) => (
                <li
                  key={interview.id}
                  className="flex items-center justify-between gap-2"
                >
                  <span>
                    {interview.name}
                    <span className="ml-2 text-muted-foreground">
                      {interview.stage}
                    </span>
                  </span>
                  <span className="text-muted-foreground tabular-nums">
                    {interview.time}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </Demo>

      <Demo name="alert">
        <Alert>
          <InfoIcon />
          <AlertTitle>面接評価が未入力です</AlertTitle>
          <AlertDescription>
            佐藤 美咲さんの一次面接(11月12日)の評価がまだありません。
            <a href="#alert">評価シートを開く</a>
          </AlertDescription>
          <AlertAction>
            <Button size="xs" variant="outline">
              評価を入力する
            </Button>
          </AlertAction>
        </Alert>
        <Alert variant="destructive">
          <AlertCircleIcon />
          <AlertTitle>面接案内を送信できませんでした</AlertTitle>
          <AlertDescription>
            田中 健太さんのメールアドレスを確認して、もう一度送信してください。
          </AlertDescription>
        </Alert>
        <Alert>
          <AlertTitle>経理の求人は11月30日に募集を終了します</AlertTitle>
        </Alert>
      </Demo>

      <Demo name="avatar">
        <div className="flex w-full flex-col gap-1">
          <div className="font-medium">二次面接の面接官</div>
          <p className="text-muted-foreground text-sm">
            11月18日(水) 14:00〜15:00
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 text-sm">
          <div className="flex items-center gap-3">
            <Avatar size="lg" aria-hidden="true">
              <AvatarFallback>中</AvatarFallback>
              <AvatarBadge>
                <CheckIcon />
              </AvatarBadge>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-medium">中村 大輔</span>
              <span className="text-muted-foreground">
                エンジニアリングマネージャー・参加確定
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Avatar size="lg" aria-hidden="true">
              <AvatarFallback>小</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-medium">小林 由香</span>
              <span className="text-muted-foreground">
                デザインリード・返信待ち
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-between gap-2 text-sm">
          <div className="flex items-center gap-2">
            <Avatar aria-hidden="true">
              <AvatarFallback>山</AvatarFallback>
              <AvatarBadge className="bg-green-600" />
            </Avatar>
            <span>山本 直子が調整中</span>
          </div>
          <AvatarGroup
            role="img"
            aria-label="面接を待つ応募者 佐藤 美咲、田中 健太、鈴木 陽菜 ほか6名"
          >
            <Avatar aria-hidden="true">
              <AvatarFallback>佐</AvatarFallback>
            </Avatar>
            <Avatar aria-hidden="true">
              <AvatarFallback>田</AvatarFallback>
            </Avatar>
            <Avatar aria-hidden="true">
              <AvatarFallback>鈴</AvatarFallback>
            </Avatar>
            <AvatarGroupCount>+6</AvatarGroupCount>
          </AvatarGroup>
        </div>
        <div className="flex w-full items-center gap-2 text-muted-foreground text-sm">
          <Avatar size="sm" aria-hidden="true">
            <AvatarFallback>山</AvatarFallback>
          </Avatar>
          <span>山本 直子が11月13日に日程を登録</span>
        </div>
      </Demo>

      <Demo name="separator">
        <div className="flex w-full flex-col gap-3 text-sm">
          <div>
            <div className="font-medium">カスタマーサクセス</div>
            <p className="text-muted-foreground">
              導入後のお客様を支援し、継続利用につなげるポジションです。
            </p>
          </div>
          <Separator />
          <div className="flex h-5 items-center gap-3">
            <span>正社員</span>
            <Separator orientation="vertical" />
            <span>大阪</span>
            <Separator orientation="vertical" decorative />
            <span>450〜600万円</span>
          </div>
        </div>
      </Demo>

      <Demo name="skeleton">
        <div
          className="flex w-full flex-col gap-4"
          role="status"
          aria-busy="true"
          aria-label="応募者を読み込み中"
        >
          {skeletonRows.map((row) => (
            <div key={row} className="flex items-center gap-3">
              <Skeleton className="size-10 rounded-full" />
              <div className="flex flex-1 flex-col gap-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-48" />
              </div>
              <Skeleton className="h-5 w-16 rounded-full" />
            </div>
          ))}
          <Skeleton className="h-20 w-full" />
        </div>
      </Demo>

      <Demo name="spinner">
        <div className="flex w-full items-center gap-3 text-sm">
          <Spinner className="size-6" />
          <div className="flex flex-col">
            <span className="font-medium">履歴書を読み取っています</span>
            <span className="text-muted-foreground">
              伊藤さくら_職務経歴書.pdf
            </span>
          </div>
        </div>
        <div className="flex w-full items-center gap-2 text-muted-foreground text-sm">
          <Spinner />
          <span>学歴・職歴を応募者情報に反映中</span>
        </div>
        <div className="flex w-full items-center justify-between gap-2">
          <Badge variant="secondary">
            <Spinner data-icon="inline-start" />
            カレンダーと同期中
          </Badge>
          <Button disabled>
            <Spinner data-icon="inline-start" />
            保存しています
          </Button>
        </div>
      </Demo>

      <Demo name="kbd">
        <div className="flex w-full flex-col gap-3 text-sm">
          <div className="font-medium">キーボードショートカット</div>
          <div className="flex items-center justify-between gap-2">
            <span>応募者を検索</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </KbdGroup>
          </div>
          {shortcuts.map((shortcut) => (
            <div
              key={shortcut.id}
              className="flex items-center justify-between gap-2"
            >
              <span>{shortcut.label}</span>
              <KbdGroup>
                {shortcut.keys.map((key) => (
                  <Kbd key={key}>{key}</Kbd>
                ))}
              </KbdGroup>
            </div>
          ))}
          <div className="flex items-center justify-between gap-2">
            <span>次の選考に進める</span>
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <span>+</span>
              <Kbd>Shift</Kbd>
              <span>+</span>
              <Kbd>N</Kbd>
            </KbdGroup>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span>詳細を閉じる</span>
            <Kbd>Esc</Kbd>
          </div>
          <Button variant="outline" size="sm" className="w-fit">
            求人を検索 <Kbd>/</Kbd>
          </Button>
        </div>
      </Demo>

      <Demo name="progress">
        <div className="flex w-full flex-col gap-4">
          <Progress value={progress}>
            <ProgressLabel>書類選考の確認(新着5件)</ProgressLabel>
            <ProgressValue />
          </Progress>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              disabled={progress <= 0}
              onClick={() => setProgress(Math.max(0, progress - 20))}
            >
              1件戻す
            </Button>
            <Button
              size="sm"
              variant="outline"
              disabled={progress >= 100}
              onClick={() => setProgress(Math.min(100, progress + 20))}
            >
              1件確認済みにする
            </Button>
          </div>
          <Progress value={3} min={1} max={5}>
            <ProgressLabel>佐藤 美咲の選考は5段階中3段階目</ProgressLabel>
          </Progress>
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex items-center justify-between gap-2">
              <span>経理の採用目標</span>
              <span className="text-muted-foreground tabular-nums">
                内定 1 / 2名
              </span>
            </div>
            <Progress value={50} aria-label="経理の採用目標の達成状況" />
          </div>
          <Progress value={null}>
            <ProgressLabel>応募データを取り込んでいます</ProgressLabel>
          </Progress>
        </div>
      </Demo>

      <Demo name="aspect-ratio">
        <div className="w-full">
          <AspectRatio
            ratio={16 / 9}
            className="overflow-hidden rounded-lg bg-linear-to-br from-sky-500 to-indigo-600"
          >
            <div className="flex size-full flex-col justify-end gap-1 p-4 text-white">
              <span className="text-xs opacity-80">求人ページのカバー画像</span>
              <span className="font-medium">
                フロントエンドエンジニアを募集しています
              </span>
            </div>
          </AspectRatio>
        </div>
        <div className="flex w-full items-center gap-3 text-sm">
          <div className="w-16 shrink-0">
            <AspectRatio
              ratio={1}
              className="overflow-hidden rounded-lg bg-linear-to-br from-amber-300 to-rose-400"
            >
              <div
                role="img"
                aria-label="オフィスの写真"
                className="size-full"
              />
            </AspectRatio>
          </div>
          <div className="flex flex-col">
            <span className="font-medium">オフィスの写真</span>
            <span className="text-muted-foreground">
              一覧では正方形に切り抜いて表示します
            </span>
          </div>
        </div>
      </Demo>

      <Demo name="empty">
        <Empty className="border">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <UsersIcon />
            </EmptyMedia>
            <EmptyTitle>応募者はまだいません</EmptyTitle>
            <EmptyDescription>
              求人を公開するか、
              <a href="#empty">CSVから応募者を取り込み</a>
              ましょう。
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <div className="flex gap-2">
              <Button
                size="sm"
                data-agent-confirm="求人を公開し、応募の受付を始めます"
              >
                求人を公開
              </Button>
              <Button size="sm" variant="outline">
                応募者を追加
              </Button>
            </div>
          </EmptyContent>
        </Empty>
      </Demo>

      <Demo name="item">
        <ItemGroup>
          <Item variant="outline">
            <ItemMedia variant="icon">
              <CalendarIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>鈴木 陽菜・一次面接</ItemTitle>
              <ItemDescription>11月19日(木) 10:30 オンライン</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button size="sm" variant="outline">
                日程変更
              </Button>
            </ItemActions>
          </Item>
          <Item variant="muted" size="sm" render={<a href="#item" />}>
            <ItemMedia variant="image">
              <div className="size-full bg-linear-to-br from-emerald-400 to-teal-600" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>高橋 蓮</ItemTitle>
              <ItemDescription>カスタマーサクセス・最終面接</ItemDescription>
            </ItemContent>
            <ItemActions>
              <ChevronRightIcon className="size-4" />
            </ItemActions>
          </Item>
          <ItemSeparator />
          <Item size="xs">
            <ItemMedia variant="icon">
              <BellIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>評価の入力期限は明日までです</ItemTitle>
            </ItemContent>
            <ItemActions>
              <Button size="icon-xs" variant="ghost" aria-label="通知を閉じる">
                <XIcon />
              </Button>
            </ItemActions>
          </Item>
        </ItemGroup>
      </Demo>

      <Demo name="table">
        <Table>
          <TableCaption>選考中の応募者</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>応募者</TableHead>
              <TableHead>ステージ</TableHead>
              <TableHead className="text-right">応募日</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applicants.map((applicant) => (
              <TableRow
                key={applicant.id}
                data-state={applicant.id === "suzuki" ? "selected" : undefined}
              >
                <TableCell>
                  <div className="font-medium">{applicant.name}</div>
                  <div className="text-muted-foreground text-xs">
                    {applicant.job}
                  </div>
                </TableCell>
                <TableCell>{applicant.stage}</TableCell>
                <TableCell className="text-right tabular-nums">
                  {applicant.appliedAt}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2}>合計</TableCell>
              <TableCell className="text-right">
                {applicants.length}名
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Demo>

      <Demo name="breadcrumb">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#breadcrumb">求人</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbEllipsis />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#breadcrumb">応募者</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>佐藤 美咲</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Demo>

      <Demo name="pagination">
        <p className="w-full text-center text-muted-foreground text-sm tabular-nums">
          応募者 {totalApplicants}名中 {(page - 1) * pageSize + 1}〜
          {Math.min(page * pageSize, totalApplicants)}名を表示
        </p>
        <Pagination
          page={page}
          onPageChange={setPage}
          total={totalApplicants}
          pageSize={pageSize}
          siblings={0}
          boundaries={1}
        >
          <PaginationContent>
            {({ items }) => (
              <>
                <PaginationItem>
                  <PaginationPrevious />
                </PaginationItem>
                {items.map((item) => (
                  <PaginationItem key={item}>
                    {typeof item === "number" ? (
                      <PaginationLink
                        page={item}
                        aria-label={`${item}ページ目`}
                      />
                    ) : (
                      <PaginationEllipsis />
                    )}
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext />
                </PaginationItem>
              </>
            )}
          </PaginationContent>
        </Pagination>
      </Demo>
    </>
  )
}
