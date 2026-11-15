"use client"

import {
  BellIcon,
  CalendarDaysIcon,
  ColumnsIcon,
  ListIcon,
  LockIcon,
  MailIcon,
  PinIcon,
  SearchIcon,
  SendIcon,
  StarIcon,
} from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Demo } from "@/src/demos/demo"

const applicants = [
  { id: "sato", name: "佐藤 美咲", job: "フロントエンドエンジニア" },
  { id: "tanaka", name: "田中 健太", job: "プロダクトデザイナー" },
  { id: "suzuki", name: "鈴木 陽菜", job: "カスタマーサクセス" },
  { id: "takahashi", name: "高橋 蓮", job: "経理" },
]

function formatDate(value: string) {
  return new Intl.DateTimeFormat("ja-JP", {
    month: "long",
    day: "numeric",
    weekday: "short",
  }).format(new Date(`${value}T00:00:00`))
}

function InputDemo() {
  return (
    <FieldGroup className="gap-4">
      <h3 className="font-medium text-sm">応募者を手動で登録</h3>
      <Field name="name">
        <FieldLabel>氏名</FieldLabel>
        <Input placeholder="例: 佐藤 美咲" />
      </Field>
      <Field name="email">
        <FieldLabel>メールアドレス</FieldLabel>
        <Input type="email" defaultValue="misaki.sato@example.jp" />
      </Field>
      <Field name="phone" invalid>
        <FieldLabel>電話番号</FieldLabel>
        <Input type="tel" defaultValue="090-1234" />
        <FieldError>電話番号の桁数が足りません。</FieldError>
      </Field>
      <Field name="resume">
        <FieldLabel>履歴書のファイル</FieldLabel>
        <Input type="file" />
      </Field>
      <Field name="route" disabled>
        <FieldLabel>応募経路</FieldLabel>
        <Input defaultValue="手動登録" />
      </Field>
    </FieldGroup>
  )
}

function TextareaDemo() {
  return (
    <FieldGroup className="gap-4">
      <h3 className="font-medium text-sm">一次面接の評価 ・ 田中 健太</h3>
      <Field name="good">
        <FieldLabel>良かった点</FieldLabel>
        <Textarea defaultValue="ポートフォリオの説明が具体的で、ユーザー調査から設計までの流れを自分の言葉で話せていた。" />
      </Field>
      <Field name="concern" invalid>
        <FieldLabel>懸念点</FieldLabel>
        <Textarea placeholder="次の面接で確認したいことを書いてください" />
        <FieldError>
          懸念点は必須です。なければ「特になし」と入力してください。
        </FieldError>
      </Field>
      <Field name="message" disabled>
        <FieldLabel>応募者への連絡文</FieldLabel>
        <Textarea placeholder="合否の判定後に入力できます" />
      </Field>
    </FieldGroup>
  )
}

function LabelDemo() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="label-demo-title">求人タイトル</Label>
        <Input id="label-demo-title" defaultValue="プロダクトデザイナー" />
      </div>
      <Label>
        <Checkbox defaultChecked />
        リモート勤務可として掲載する
      </Label>
      <div className="flex items-center gap-2">
        <Switch id="label-demo-switch" defaultChecked />
        <Label htmlFor="label-demo-switch">求人ページを公開する</Label>
      </div>
    </div>
  )
}

function FieldDemo() {
  const [message, setMessage] = useState("")

  return (
    <form
      className="w-full"
      onSubmit={(event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        setMessage(`「${data.get("title")}」を下書きに保存しました。`)
      }}
    >
      <FieldSet>
        <FieldLegend>求人を作成</FieldLegend>
        <FieldDescription>
          保存した求人は下書きになり、公開するまで応募者には表示されません。
        </FieldDescription>
        <FieldGroup>
          <Field name="title">
            <FieldLabel>職種名</FieldLabel>
            <Input required placeholder="例: フロントエンドエンジニア" />
            <FieldDescription>求人ページの見出しになります。</FieldDescription>
            <FieldError match="valueMissing">
              職種名を入力してください。
            </FieldError>
          </Field>
          <Field name="email">
            <FieldLabel>採用担当者のメールアドレス</FieldLabel>
            <Input
              type="email"
              required
              placeholder="naoko.yamamoto@example.jp"
            />
            <FieldError match="valueMissing">
              メールアドレスを入力してください。
            </FieldError>
            <FieldError match="typeMismatch">
              メールアドレスの形式が正しくありません。
            </FieldError>
          </Field>
          <Field invalid>
            <FieldLabel>求人コード</FieldLabel>
            <Input defaultValue="FE-2026-11" />
            <FieldError
              errors={[{ message: "この求人コードはすでに使われています。" }]}
            />
          </Field>
          <FieldSeparator>応募の受付</FieldSeparator>
          <Field orientation="horizontal">
            <Checkbox name="referral" />
            <FieldContent>
              <FieldLabel>社員紹介を受け付ける</FieldLabel>
              <FieldDescription>
                社員が紹介用のリンクを発行できるようになります。
              </FieldDescription>
            </FieldContent>
          </Field>
          <Field orientation="horizontal" disabled>
            <Switch name="agent" />
            <FieldLabel>人材紹介会社からの応募を受け付ける</FieldLabel>
          </Field>
          <Button type="submit" className="w-fit">
            下書きに保存
          </Button>
          {message && (
            <p className="text-muted-foreground text-sm">{message}</p>
          )}
        </FieldGroup>
      </FieldSet>
    </form>
  )
}

function InputGroupDemo() {
  const [text, setText] = useState("")

  return (
    <FieldGroup className="gap-4">
      <Field name="keyword">
        <FieldLabel>キーワードで応募者を絞り込む</FieldLabel>
        <InputGroup>
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput defaultValue="フロントエンド" />
          <InputGroupAddon align="inline-end">2名</InputGroupAddon>
        </InputGroup>
      </Field>
      <Field name="url">
        <FieldLabel>面接のURL</FieldLabel>
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>https://</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput defaultValue="meet.example.jp/sato-1117" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton aria-label="面接のURLをコピー">
              コピー
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </Field>
      <Field name="message">
        <FieldLabel>応募者へのメッセージ</FieldLabel>
        <InputGroup>
          <InputGroupTextarea
            value={text}
            maxLength={280}
            onValueChange={(value) => setText(value)}
            placeholder="佐藤 美咲さんへのメッセージを入力"
          />
          <InputGroupAddon align="block-end">
            <InputGroupText>{text.length} / 280</InputGroupText>
            <InputGroupButton
              className="ml-auto"
              variant="default"
              size="icon-xs"
              disabled={text.length === 0}
              aria-label="メッセージを送信"
              data-agent-confirm="佐藤 美咲さんにメッセージを送信します"
            >
              <SendIcon />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </Field>
      <Field name="replyTo" disabled>
        <FieldLabel>返信先</FieldLabel>
        <InputGroup>
          <InputGroupAddon>
            <MailIcon />
          </InputGroupAddon>
          <InputGroupInput defaultValue="saiyo@example.jp" />
        </InputGroup>
      </Field>
    </FieldGroup>
  )
}

function InputOTPDemo() {
  const [code, setCode] = useState("")

  return (
    <div className="flex w-full flex-col gap-3">
      <Field name="code">
        <FieldLabel>確認コード</FieldLabel>
        <InputOTP
          maxLength={6}
          value={code}
          onValueChange={(value) => setCode(value)}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <FieldDescription>
          応募者の個人情報を書き出す前に、登録メールアドレスに届いた6桁のコードを入力してください。
        </FieldDescription>
      </Field>
      <div className="flex items-center gap-3">
        <Button
          size="sm"
          disabled={code.length < 6}
          data-agent-confirm="応募者の個人情報をファイルに書き出します"
        >
          個人情報を書き出す
        </Button>
        <p className="text-muted-foreground text-sm">
          {code.length < 6 ? `あと${6 - code.length}桁` : "入力済み"}
        </p>
      </div>
    </div>
  )
}

function CheckboxDemo() {
  const [selected, setSelected] = useState<string[]>(["sato", "suzuki"])

  const isAll = selected.length === applicants.length

  function allState() {
    if (isAll) return true
    if (selected.length > 0) return "indeterminate"
    return false
  }

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <Field orientation="horizontal" className="w-auto">
          <Checkbox
            checked={allState()}
            onCheckedChange={(value) => {
              setSelected(value === true ? applicants.map((a) => a.id) : [])
            }}
          />
          <FieldLabel>書類選考中の応募者</FieldLabel>
        </Field>
        <span className="text-muted-foreground text-sm">
          {selected.length}名を選択中
        </span>
      </div>
      <div className="flex flex-col gap-3 pl-6">
        {applicants.map((applicant) => (
          <Field key={applicant.id} orientation="horizontal">
            <Checkbox
              checked={selected.includes(applicant.id)}
              onCheckedChange={(value) => {
                setSelected((current) => {
                  const rest = current.filter((id) => id !== applicant.id)
                  return value === true ? [...rest, applicant.id] : rest
                })
              }}
            />
            <FieldLabel className="flex-none">{applicant.name}</FieldLabel>
            <FieldDescription>{applicant.job}</FieldDescription>
          </Field>
        ))}
        <Field orientation="horizontal" disabled>
          <Checkbox defaultChecked />
          <FieldLabel className="flex-none">伊藤 さくら</FieldLabel>
          <FieldDescription>一次面接へ移動済み</FieldDescription>
        </Field>
      </div>
      <Button size="sm" className="w-fit" disabled={selected.length === 0}>
        選択した応募者を一次面接に進める
      </Button>
    </div>
  )
}

const decisions = [
  {
    value: "pass",
    label: "二次面接に進める",
    note: "中村 大輔に日程調整を依頼します。",
  },
  {
    value: "hold",
    label: "保留にする",
    note: "11月20日までに再度判定してください。",
  },
  { value: "reject", label: "見送る", note: "見送りの連絡文を作成します。" },
]

function RadioGroupDemo() {
  const [decision, setDecision] = useState<string | null>("pass")

  const current = decisions.find((item) => item.value === decision)

  return (
    <Field>
      <FieldLabel>一次面接の判定</FieldLabel>
      <FieldDescription>高橋 蓮 ・ 経理</FieldDescription>
      <RadioGroup
        name="decision"
        value={decision}
        onValueChange={(value) => setDecision(value)}
      >
        {decisions.map((item) => (
          <Label key={item.value}>
            <RadioGroupItem value={item.value} />
            {item.label}
          </Label>
        ))}
        <Label>
          <RadioGroupItem value="offer" disabled />
          内定を出す(最終面接後に選択できます)
        </Label>
      </RadioGroup>
      {current && (
        <p className="text-muted-foreground text-sm">{current.note}</p>
      )}
    </Field>
  )
}

function SwitchDemo() {
  const [checked, setChecked] = useState(true)

  return (
    <FieldGroup className="gap-4">
      <h3 className="font-medium text-sm">通知設定</h3>
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel>応募をメールで受け取る</FieldLabel>
          <FieldDescription>
            {checked
              ? "応募があるたびにメールで通知します。"
              : "通知しません。応募者一覧で確認してください。"}
          </FieldDescription>
        </FieldContent>
        <Switch
          name="apply"
          checked={checked}
          onCheckedChange={(value) => setChecked(value)}
        />
      </Field>
      <Field orientation="horizontal" disabled={!checked} className="pl-4">
        <FieldLabel className="font-normal">
          1日1回にまとめて受け取る
        </FieldLabel>
        <Switch name="digest" size="sm" />
      </Field>
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel>面接のリマインド</FieldLabel>
          <FieldDescription>面接の前日と1時間前に通知します。</FieldDescription>
        </FieldContent>
        <Switch name="remind" defaultChecked />
      </Field>
      <Field orientation="horizontal" disabled>
        <FieldContent>
          <FieldLabel>個人情報の書き出し</FieldLabel>
          <FieldDescription>
            管理者が必須に設定しているため変更できません。
          </FieldDescription>
        </FieldContent>
        <Switch name="audit" defaultChecked />
      </Field>
    </FieldGroup>
  )
}

function SliderDemo() {
  const [salary, setSalary] = useState([600, 800])

  const [years, setYears] = useState(3)

  return (
    <FieldGroup className="gap-5">
      <h3 className="font-medium text-sm">
        募集条件 ・ フロントエンドエンジニア
      </h3>
      <Field>
        <div className="flex items-center justify-between text-sm">
          <FieldLabel>年収レンジ</FieldLabel>
          <span className="text-muted-foreground">
            {salary[0]}〜{salary[1]}万円
          </span>
        </div>
        <Slider
          name="salary"
          value={salary}
          min={300}
          max={1200}
          step={50}
          onValueChange={(value) => {
            setSalary(typeof value === "number" ? [value, value] : [...value])
          }}
        />
      </Field>
      <Field>
        <div className="flex items-center justify-between text-sm">
          <FieldLabel>実務経験の年数</FieldLabel>
          <span className="text-muted-foreground">
            {years === 0 ? "未経験可" : `${years}年以上`}
          </span>
        </div>
        <Slider
          name="years"
          value={years}
          min={0}
          max={10}
          onValueChange={(value) => {
            setYears(typeof value === "number" ? value : (value[0] ?? 0))
          }}
        />
      </Field>
      <Field disabled>
        <div className="flex items-center justify-between text-sm">
          <FieldLabel>承認済みの採用人数</FieldLabel>
          <span className="text-muted-foreground">2名</span>
        </div>
        <Slider name="headcount" defaultValue={2} min={1} max={5} />
      </Field>
    </FieldGroup>
  )
}

function ToggleDemo() {
  const [pressed, setPressed] = useState(false)

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-col gap-1">
          <span className="font-medium text-sm">鈴木 陽菜</span>
          <span className="text-muted-foreground text-sm">
            カスタマーサクセス ・ 二次面接
          </span>
        </div>
        <Toggle
          pressed={pressed}
          onPressedChange={(value) => setPressed(value)}
        >
          <StarIcon />
          {pressed ? "注目中" : "注目する"}
        </Toggle>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Toggle variant="outline" size="sm" aria-label="メモをピン留め">
          <PinIcon />
        </Toggle>
        <Toggle variant="outline" size="sm" defaultPressed>
          <BellIcon />
          更新を通知
        </Toggle>
        <Toggle variant="outline" size="sm" disabled>
          <LockIcon />
          評価を非公開
        </Toggle>
      </div>
    </div>
  )
}

const stageLabels: Record<string, string> = {
  document: "書類選考",
  first: "一次面接",
  second: "二次面接",
}

function ToggleGroupDemo() {
  const [stages, setStages] = useState<string[]>(["first"])

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-medium text-sm">応募者一覧</h3>
        <ToggleGroup
          variant="outline"
          size="sm"
          spacing={0}
          deselectable={false}
          defaultValue={["list"]}
          aria-label="表示形式"
        >
          <ToggleGroupItem value="list" aria-label="リスト">
            <ListIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="board" aria-label="ボード">
            <ColumnsIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="calendar" aria-label="カレンダー">
            <CalendarDaysIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <ToggleGroup
        multiple
        size="sm"
        value={stages}
        onValueChange={(value) => setStages(value)}
        aria-label="選考ステージで絞り込む"
      >
        <ToggleGroupItem value="document">書類選考</ToggleGroupItem>
        <ToggleGroupItem value="first">一次面接</ToggleGroupItem>
        <ToggleGroupItem value="second">二次面接</ToggleGroupItem>
        <ToggleGroupItem value="offer" disabled>
          内定
        </ToggleGroupItem>
      </ToggleGroup>
      <p className="text-muted-foreground text-sm">
        {stages.length === 0
          ? "すべてのステージを表示中"
          : `${stages.map((stage) => stageLabels[stage] ?? stage).join("、")}を表示中`}
      </p>
    </div>
  )
}

function NativeSelectDemo() {
  const [interviewer, setInterviewer] = useState("")

  return (
    <FieldGroup className="gap-4">
      <h3 className="font-medium text-sm">二次面接の設定 ・ 佐藤 美咲</h3>
      <Field>
        <FieldLabel>面接官</FieldLabel>
        <FieldControl
          render={<NativeSelect className="w-full" />}
          name="interviewer"
          value={interviewer}
          onChange={(event) => setInterviewer(event.currentTarget.value)}
        >
          <NativeSelectOption value="">面接官を選択</NativeSelectOption>
          <NativeSelectOptGroup label="採用チーム">
            <NativeSelectOption value="yamamoto">山本 直子</NativeSelectOption>
          </NativeSelectOptGroup>
          <NativeSelectOptGroup label="配属先">
            <NativeSelectOption value="nakamura">中村 大輔</NativeSelectOption>
            <NativeSelectOption value="kobayashi" disabled>
              小林 由香(休暇中)
            </NativeSelectOption>
          </NativeSelectOptGroup>
        </FieldControl>
        {interviewer !== "" && (
          <FieldDescription>
            保存すると面接官に日程調整の依頼が届きます。
          </FieldDescription>
        )}
      </Field>
      <Field invalid>
        <FieldLabel>面接形式</FieldLabel>
        <FieldControl
          render={<NativeSelect className="w-full" />}
          name="format"
          defaultValue=""
        >
          <NativeSelectOption value="">選択してください</NativeSelectOption>
          <NativeSelectOption value="online">オンライン</NativeSelectOption>
          <NativeSelectOption value="office">来社</NativeSelectOption>
        </FieldControl>
        <FieldError>面接形式を選択してください。</FieldError>
      </Field>
      <Field orientation="horizontal" className="justify-between">
        <FieldLabel>所要時間</FieldLabel>
        <FieldControl
          render={<NativeSelect size="sm" />}
          name="length"
          defaultValue="60"
        >
          <NativeSelectOption value="30">30分</NativeSelectOption>
          <NativeSelectOption value="45">45分</NativeSelectOption>
          <NativeSelectOption value="60">60分</NativeSelectOption>
        </FieldControl>
      </Field>
      <Field orientation="horizontal" className="justify-between" disabled>
        <FieldLabel>選考ステージ</FieldLabel>
        <FieldControl
          render={<NativeSelect size="sm" />}
          name="stage"
          defaultValue="second"
        >
          <NativeSelectOption value="second">二次面接</NativeSelectOption>
        </FieldControl>
      </Field>
    </FieldGroup>
  )
}

function CalendarDemo() {
  const [date, setDate] = useState<string | null>("2026-11-18")

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex flex-col gap-1">
        <h3 className="font-medium text-sm">面接日程</h3>
        <p className="text-muted-foreground text-sm">
          伊藤 さくら ・ 一次面接。土日は選択できません。
        </p>
      </div>
      <Calendar
        aria-label="伊藤 さくらさんの面接日"
        className="w-full p-0"
        locale="ja-JP"
        value={date}
        onValueChange={(value) => {
          setDate(typeof value === "string" ? value : null)
        }}
        deselectable
        defaultMonth="2026-11"
        today="2026-11-15"
        min="2026-11-16"
        max="2026-12-25"
        unavailable={[{ weekday: [0, 6] }]}
      />
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm">
          {date === null ? "日付を選択してください" : formatDate(date)}
        </p>
        <Button size="sm" disabled={date === null}>
          この日で調整する
        </Button>
      </div>
    </div>
  )
}

export function FormDemos() {
  return (
    <>
      <Demo name="input">
        <InputDemo />
      </Demo>
      <Demo name="textarea">
        <TextareaDemo />
      </Demo>
      <Demo name="label">
        <LabelDemo />
      </Demo>
      <Demo name="field">
        <FieldDemo />
      </Demo>
      <Demo name="input-group">
        <InputGroupDemo />
      </Demo>
      <Demo name="input-otp">
        <InputOTPDemo />
      </Demo>
      <Demo name="checkbox">
        <CheckboxDemo />
      </Demo>
      <Demo name="radio-group">
        <RadioGroupDemo />
      </Demo>
      <Demo name="switch">
        <SwitchDemo />
      </Demo>
      <Demo name="slider">
        <SliderDemo />
      </Demo>
      <Demo name="toggle">
        <ToggleDemo />
      </Demo>
      <Demo name="toggle-group">
        <ToggleGroupDemo />
      </Demo>
      <Demo name="native-select">
        <NativeSelectDemo />
      </Demo>
      <Demo name="calendar">
        <CalendarDemo />
      </Demo>
    </>
  )
}
