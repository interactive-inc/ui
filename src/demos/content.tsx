"use client"

import {
  BrainIcon,
  CheckIcon,
  FileCodeIcon,
  FileTextIcon,
  Loader2Icon,
  SearchIcon,
  ThumbsUpIcon,
  TriangleAlertIcon,
  XIcon,
} from "lucide-react"
import { useState } from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
  AttachmentTrigger,
} from "@/components/ui/attachment"
import {
  Bubble,
  BubbleButton,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "@/components/ui/bubble"
import { Button } from "@/components/ui/button"
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFooter,
  CodeBlockHeader,
  CodeBlockLine,
  CodeBlockTitle,
} from "@/components/ui/code-block"
import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from "@/components/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
  useMessageScrollerScrollable,
} from "@/components/ui/message-scroller"
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire"
import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceDescription,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "@/components/ui/trace"
import { useHighlightedCode } from "@/hooks/use-highlighted-code"
import { Demo } from "@/src/demos/demo"

function BubbleDemo() {
  const [inserted, setInserted] = useState(false)

  return (
    <BubbleGroup className="w-full">
      <Bubble variant="muted">
        <BubbleContent>
          鈴木です。一次面接の候補日をお送りいただき、ありがとうございます。
        </BubbleContent>
      </Bubble>
      <Bubble variant="muted">
        <BubbleContent>
          11月19日（木）の14時からでお願いできますでしょうか。
        </BubbleContent>
      </Bubble>
      <Bubble align="end" className="mb-4">
        <BubbleContent>
          承知しました。11月19日（木）14:00〜15:00 で確定します。
        </BubbleContent>
        <BubbleReactions aria-label="いいね 1件">
          <ThumbsUpIcon className="size-3" />1
        </BubbleReactions>
      </Bubble>
      <Bubble variant="tinted" align="end">
        <BubbleContent>
          当日はオンラインで実施します。面接官は中村と小林の2名です。
        </BubbleContent>
      </Bubble>
      <Bubble variant="destructive" align="end">
        <BubbleContent>
          面接用URLを送信できませんでした。通信状況を確認して再送してください。
        </BubbleContent>
      </Bubble>
      <Bubble variant="outline" align="end">
        <BubbleButton onClick={() => setInserted(!inserted)}>
          {inserted
            ? "返信欄に挿入しました（もう一度押すと取り消し）"
            : "返信候補: 面接用URLは前日までにお送りします。"}
        </BubbleButton>
      </Bubble>
    </BubbleGroup>
  )
}

function MarkerDemo() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Marker>
        <MarkerIcon>
          <FileTextIcon />
        </MarkerIcon>
        <MarkerContent>佐藤 美咲さんが応募書類を提出</MarkerContent>
      </Marker>
      <Marker variant="separator">
        <MarkerContent>11月12日（木）</MarkerContent>
      </Marker>
      <Marker variant="border">
        <MarkerIcon>
          <CheckIcon />
        </MarkerIcon>
        <MarkerContent>
          書類選考を通過し、一次面接へ進みました{" "}
          <a href="#marker">評価を見る</a>
        </MarkerContent>
      </Marker>
      <Marker render={<a href="#marker" />}>
        <MarkerContent>これまでの選考履歴をすべて表示</MarkerContent>
      </Marker>
    </div>
  )
}

function MessageDemo() {
  return (
    <MessageGroup className="w-full">
      <Message>
        <MessageAvatar className="size-8 text-xs">AI</MessageAvatar>
        <MessageContent>
          <MessageHeader>採用アシスタント</MessageHeader>
          <Bubble variant="muted">
            <BubbleContent>
              フロントエンドエンジニアに新しい応募が3件届いています。要点をまとめますか？
            </BubbleContent>
          </Bubble>
          <MessageFooter>10:24</MessageFooter>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>
              お願いします。一次面接に進められそうな方を教えてください。
            </BubbleContent>
          </Bubble>
          <MessageFooter>10:25 既読</MessageFooter>
        </MessageContent>
      </Message>
      <Message>
        <MessageContent>
          <Bubble variant="ghost">
            <BubbleContent>
              佐藤 美咲さんは React
              の実務経験が5年あり、必須要件をすべて満たしています。田中
              健太さんは希望年収が募集レンジ（600〜800万円）を上回るため、事前の確認をおすすめします。
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </MessageGroup>
  )
}

type ChatMessage = {
  id: string
  role: "user" | "assistant"
  text: string
}

// user は採用担当（山本）、assistant は応募者（田中 健太さん）
const initialMessages: ChatMessage[] = [
  {
    id: "m1",
    role: "user",
    text: "田中様、このたびはフロントエンドエンジニアにご応募いただきありがとうございます。採用担当の山本です。",
  },
  {
    id: "m2",
    role: "assistant",
    text: "ご連絡ありがとうございます。田中です。どうぞよろしくお願いいたします。",
  },
  {
    id: "m3",
    role: "user",
    text: "書類選考の結果、一次面接にお進みいただくことになりました。11月17日の週でご都合のよい日時を教えてください。",
  },
  {
    id: "m4",
    role: "assistant",
    text: "ありがとうございます。11月18日（水）の午後、または11月20日（金）の終日で調整可能です。",
  },
  {
    id: "m5",
    role: "user",
    text: "それでは11月18日（水）15:00〜16:00 でお願いします。面接官はエンジニアリングマネージャーの中村です。",
  },
  {
    id: "m6",
    role: "assistant",
    text: "承知しました。当日の形式はオンラインでしょうか。",
  },
  {
    id: "m7",
    role: "user",
    text: "はい、オンラインで実施します。面接用URLは前日までにお送りします。",
  },
  {
    id: "m8",
    role: "assistant",
    text: "ありがとうございます。事前に準備しておくものがあれば教えてください。",
  },
]

const replyTemplates = [
  "特別なご準備は不要です。これまでのご経験について伺います。",
  "面接用URLをお送りしました。ご確認をお願いします。",
  "ご不明な点があれば、このメッセージでお気軽にご連絡ください。",
]

function ScrollableState() {
  const scrollable = useMessageScrollerScrollable()

  return (
    <span className="text-muted-foreground text-xs">
      {scrollable.end ? "下に続きがあります" : "最新のメッセージを表示中"}
      {scrollable.start && "・過去のやり取りあり"}
    </span>
  )
}

function MessageScrollerDemo() {
  const [messages, setMessages] = useState(initialMessages)

  function onReply() {
    const sent = messages.length - initialMessages.length
    const text = replyTemplates[sent % replyTemplates.length]
    if (text === undefined) {
      return
    }
    setMessages([
      ...messages,
      { id: `m${messages.length + 1}`, role: "user", text },
    ])
  }

  return (
    <MessageScrollerProvider defaultScrollPosition="end">
      <div className="flex w-full flex-col gap-2">
        <p className="font-medium text-sm">田中 健太さんとのメッセージ</p>
        <MessageScroller className="h-64 rounded-lg border">
          <MessageScrollerViewport className="p-3">
            <MessageScrollerContent className="gap-3">
              {messages.map((message) => (
                <MessageScrollerItem
                  key={message.id}
                  messageId={message.id}
                  scrollAnchor={message.role === "user"}
                >
                  <Message align={message.role === "user" ? "end" : "start"}>
                    <MessageContent>
                      <Bubble
                        variant={message.role === "user" ? "default" : "muted"}
                      >
                        <BubbleContent>{message.text}</BubbleContent>
                      </Bubble>
                    </MessageContent>
                  </Message>
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton direction="start" />
          <MessageScrollerButton />
        </MessageScroller>
        <div className="flex items-center gap-3">
          <Button size="sm" variant="outline" onClick={onReply}>
            定型文で返信
          </Button>
          <ScrollableState />
        </div>
      </div>
    </MessageScrollerProvider>
  )
}

function AttachmentDemo() {
  const [removed, setRemoved] = useState(false)
  const [opened, setOpened] = useState(false)

  return (
    <div className="flex w-full flex-col gap-3">
      <p className="font-medium text-sm">佐藤 美咲さんの応募書類</p>
      <AttachmentGroup>
        {!removed && (
          <Attachment>
            <AttachmentMedia>
              <FileTextIcon />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>履歴書_佐藤美咲.pdf</AttachmentTitle>
              <AttachmentDescription>
                1.2 MB・{opened ? "確認済み" : "未確認"}
              </AttachmentDescription>
            </AttachmentContent>
            <AttachmentTrigger
              aria-label="佐藤 美咲さんの履歴書を開く"
              onClick={() => setOpened(true)}
            />
            <AttachmentActions>
              <AttachmentAction
                aria-label="佐藤 美咲さんの履歴書を削除"
                data-agent-confirm="佐藤 美咲さんの履歴書（履歴書_佐藤美咲.pdf）を応募書類から削除します"
                onClick={() => setRemoved(true)}
              >
                <XIcon />
              </AttachmentAction>
            </AttachmentActions>
          </Attachment>
        )}
        <Attachment state="uploading" size="sm">
          <AttachmentMedia>
            <Loader2Icon className="animate-spin" />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>職務経歴書.pdf</AttachmentTitle>
            <AttachmentDescription>アップロード中 42%</AttachmentDescription>
          </AttachmentContent>
        </Attachment>
        <Attachment state="error" size="xs">
          <AttachmentMedia>
            <TriangleAlertIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>推薦状.zip</AttachmentTitle>
            <AttachmentDescription>読み込み失敗</AttachmentDescription>
          </AttachmentContent>
        </Attachment>
      </AttachmentGroup>
      <AttachmentGroup>
        <Attachment orientation="vertical">
          <AttachmentMedia variant="image">
            <div
              role="img"
              aria-label="ポートフォリオの表紙"
              className="aspect-square w-full bg-linear-to-br from-sky-400 to-indigo-600"
            />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>作品集_表紙.png</AttachmentTitle>
          </AttachmentContent>
        </Attachment>
        <Attachment orientation="vertical" state="processing">
          <AttachmentMedia variant="image">
            <div
              role="img"
              aria-label="変換中の制作実績"
              className="aspect-square w-full bg-linear-to-br from-amber-300 to-rose-500"
            />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>制作実績を変換中</AttachmentTitle>
          </AttachmentContent>
        </Attachment>
        <Attachment orientation="vertical" state="idle">
          <AttachmentMedia>
            <FileCodeIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>課題コード（未提出）</AttachmentTitle>
          </AttachmentContent>
        </Attachment>
      </AttachmentGroup>
      {removed && (
        <Button size="sm" variant="outline" onClick={() => setRemoved(false)}>
          履歴書を元に戻す
        </Button>
      )}
    </div>
  )
}

const sampleCode = `type Applicant = {
  id: string
  name: string
  stage: string
}

// 一次面接の応募者一覧を取得する
export async function listApplicants(apiKey: string) {
  const response = await fetch(
    "https://api.example.com/v1/applicants?stage=first_interview",
    { headers: { Authorization: \`Bearer \${apiKey}\` } },
  )
  const data: { applicants: Applicant[] } = await response.json()
  return data.applicants
}
`

const queryCode = `const query = new URLSearchParams()
query.set("job", "frontend-engineer")
query.set("stage", "first_interview")
query.set("limit", "20")`

/**
 * 行番号をキーにして行ごとのノードを返す
 */
function toKeyedLines(lines: React.ReactNode[]) {
  const keyed: { key: string; node: React.ReactNode }[] = []
  for (const node of lines) {
    keyed.push({ key: `line-${keyed.length + 1}`, node })
  }
  return keyed
}

function CodeBlockDemo() {
  const lines = toKeyedLines(useHighlightedCode(sampleCode, "typescript"))

  return (
    <div className="flex w-full min-w-0 flex-col gap-3">
      <CodeBlock>
        <CodeBlockHeader>
          <CodeBlockTitle>
            <FileCodeIcon />
            list-applicants.ts
          </CodeBlockTitle>
          <CodeBlockActions>
            <CodeBlockCopyButton
              value={sampleCode}
              aria-label="応募者一覧を取得するコードをコピー"
            />
          </CodeBlockActions>
        </CodeBlockHeader>
        <CodeBlockContent lineNumbers>
          {lines.map((line) => (
            <CodeBlockLine key={line.key}>{line.node}</CodeBlockLine>
          ))}
        </CodeBlockContent>
        <CodeBlockFooter className="text-xs">
          応募者一覧の取得（GET /v1/applicants）
        </CodeBlockFooter>
      </CodeBlock>
      <CodeBlock size="sm">
        <CodeBlockActions>
          <CodeBlockCopyButton
            value={queryCode}
            aria-label="検索条件のコードをコピー"
          />
        </CodeBlockActions>
        <CodeBlockContent lineNumbers startLine={12}>
          <CodeBlockLine>const query = new URLSearchParams()</CodeBlockLine>
          <CodeBlockLine>query.set("job", "frontend-engineer")</CodeBlockLine>
          <CodeBlockLine variant="removed">
            query.set("stage", "document_screening")
          </CodeBlockLine>
          <CodeBlockLine variant="added">
            query.set("stage", "first_interview")
          </CodeBlockLine>
          <CodeBlockLine variant="highlighted">
            query.set("limit", "20")
          </CodeBlockLine>
        </CodeBlockContent>
      </CodeBlock>
      <CodeBlock variant="destructive" size="sm">
        <CodeBlockContent wrap>
          {
            "401 Unauthorized: APIキーが無効です。設定 > 連携 でキーを再発行してください。"
          }
        </CodeBlockContent>
      </CodeBlock>
    </div>
  )
}

function TraceDemo() {
  const [open, setOpen] = useState(false)

  return (
    <Trace>
      <TraceCollapsible defaultOpen>
        <TraceCollapsibleTrigger>
          <TraceLine>
            <TraceIcon>
              <BrainIcon />
            </TraceIcon>
            <TraceTitle>応募書類を読み込みました</TraceTitle>
            <TraceDescription>4秒</TraceDescription>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent className="text-sm">
          高橋
          蓮さんの履歴書と職務経歴書を確認。プロダクトデザイナーとして6年、直近はアプリのデザインを担当。
        </TraceCollapsibleContent>
      </TraceCollapsible>
      <TraceCollapsible open={open} onOpenChange={setOpen}>
        <TraceCollapsibleTrigger>
          <TraceLine status="error">
            <TraceIcon>
              <TriangleAlertIcon />
            </TraceIcon>
            <TraceTitle>ポートフォリオを取得できませんでした</TraceTitle>
            <TraceDescription>
              {open ? "閉じる" : "原因を見る"}
            </TraceDescription>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent className="text-sm">
          リンク先が非公開に設定されています。応募者に閲覧権限の変更を依頼してください。
        </TraceCollapsibleContent>
      </TraceCollapsible>
      <TraceLine status="running">
        <TraceIcon>
          <SearchIcon />
        </TraceIcon>
        <TraceTitle>求人の必須要件と照合中</TraceTitle>
      </TraceLine>
      <TraceLine status="pending">
        <TraceIcon>
          <FileTextIcon />
        </TraceIcon>
        <TraceTitle>評価サマリーを作成</TraceTitle>
      </TraceLine>
    </Trace>
  )
}

const answerLabels: Record<string, string> = {
  format: "面接形式",
  slots: "希望時間帯",
  question: "事前の質問",
  online: "オンライン",
  onsite: "対面",
  either: "どちらでも可",
  morning: "平日 午前",
  afternoon: "平日 午後",
  evening: "平日 18時以降",
}

function QuestionnaireDemo() {
  const [result, setResult] = useState("")

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const pairs = Array.from(data.entries()).map(([key, value]) => {
      const text = String(value)
      return `${answerLabels[key] ?? key}: ${answerLabels[text] ?? text}`
    })
    setResult(pairs.join("、") || "回答なし")
  }

  return (
    <div className="flex w-full flex-col gap-3">
      <Questionnaire shortcuts="numbers" onSubmit={onSubmit}>
        <QuestionnaireProgress />
        <QuestionnaireItem name="format" required>
          <QuestionnaireTitle>
            一次面接はどの形式を希望しますか？
          </QuestionnaireTitle>
          <QuestionnaireDescription>
            必須。数字キーでも選べます。
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice
              value="online"
              description="面接用URLを前日までにお送りします"
            >
              オンライン
            </QuestionnaireChoice>
            <QuestionnaireChoice value="onsite">
              対面（本社オフィス）
            </QuestionnaireChoice>
            <QuestionnaireChoice value="either">
              どちらでも可
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireItem name="slots" multiple>
          <QuestionnaireTitle>
            ご都合のよい時間帯を選んでください
          </QuestionnaireTitle>
          <QuestionnaireDescription>
            複数選択できます。未定の場合はスキップしてください。
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="morning">平日 午前</QuestionnaireChoice>
            <QuestionnaireChoice value="afternoon">
              平日 午後
            </QuestionnaireChoice>
            <QuestionnaireChoice value="evening">
              平日 18時以降
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireItem name="question">
          <QuestionnaireTitle>
            面接前に確認したいことはありますか？
          </QuestionnaireTitle>
          <QuestionnaireInput placeholder="例: リモート勤務の頻度について" />
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnairePrevious>戻る</QuestionnairePrevious>
          <QuestionnaireSkip>スキップ</QuestionnaireSkip>
          <QuestionnaireNext>次の質問へ</QuestionnaireNext>
          <QuestionnaireSubmit data-agent-confirm="面接の希望についての回答を採用担当に送信します">
            回答を送信
          </QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
      {result && (
        <p className="text-muted-foreground text-sm">
          回答を受け付けました（{result}）
        </p>
      )}
    </div>
  )
}

const chartData = [
  { month: "6月", engineer: 18, designer: 9 },
  { month: "7月", engineer: 24, designer: 12 },
  { month: "8月", engineer: 15, designer: 8 },
  { month: "9月", engineer: 31, designer: 14 },
  { month: "10月", engineer: 42, designer: 21 },
  { month: "11月", engineer: 27, designer: 16 },
]

const chartConfig = {
  engineer: { label: "フロントエンドエンジニア", color: "var(--chart-1)" },
  designer: { label: "プロダクトデザイナー", color: "var(--chart-2)" },
} satisfies ChartConfig

function ChartDemo() {
  return (
    <div className="flex w-full min-w-0 flex-col gap-3">
      <div className="flex flex-col gap-1">
        <p className="font-medium text-sm">応募数の推移</p>
        <p className="text-muted-foreground text-xs">
          2026年6月〜11月・11月は15日時点
        </p>
      </div>
      <ChartContainer config={chartConfig} className="min-h-48 w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="engineer" fill="var(--color-engineer)" radius={4} />
          <Bar dataKey="designer" fill="var(--color-designer)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}

export function ContentDemos() {
  return (
    <>
      <Demo name="bubble">
        <BubbleDemo />
      </Demo>
      <Demo name="marker">
        <MarkerDemo />
      </Demo>
      <Demo name="message">
        <MessageDemo />
      </Demo>
      <Demo name="message-scroller">
        <MessageScrollerDemo />
      </Demo>
      <Demo name="attachment">
        <AttachmentDemo />
      </Demo>
      <Demo name="code-block">
        <CodeBlockDemo />
      </Demo>
      <Demo name="trace">
        <TraceDemo />
      </Demo>
      <Demo name="questionnaire">
        <QuestionnaireDemo />
      </Demo>
      <Demo name="chart">
        <ChartDemo />
      </Demo>
    </>
  )
}
