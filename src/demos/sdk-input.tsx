"use client"

import { SearchIcon, UserIcon } from "lucide-react"
import { useState } from "react"
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteItemIcon,
  AutocompleteItemText,
  AutocompleteList,
} from "@/components/ui/autocomplete"
import {
  ColorPicker,
  ColorPickerArea,
  ColorPickerAreaThumb,
  ColorPickerInput,
  ColorPickerSlider,
  ColorPickerSwatch,
  ColorPickerSwatches,
  ColorPickerSwatchItem,
} from "@/components/ui/color-picker"
import { DateInput } from "@/components/ui/date-input"
import {
  DatePicker,
  DatePickerCalendar,
  DatePickerClear,
  DatePickerContent,
  DatePickerGroup,
  DatePickerHint,
  DatePickerInput,
  DatePickerPreset,
  DatePickerPresets,
  DatePickerSeparator,
  DatePickerTrigger,
} from "@/components/ui/date-picker"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import {
  FileInput,
  FileInputDropzone,
  FileInputItem,
  FileInputList,
  FileInputTrigger,
} from "@/components/ui/file-input"
import type { ImageCrop } from "@/components/ui/image-cropper"
import {
  ImageCropper,
  ImageCropperFlip,
  ImageCropperGrid,
  ImageCropperHandle,
  ImageCropperImage,
  ImageCropperRotate,
  ImageCropperSelection,
  ImageCropperViewport,
  ImageCropperZoom,
} from "@/components/ui/image-cropper"
import {
  NumberInput,
  NumberInputControl,
  NumberInputDecrement,
  NumberInputGroup,
  NumberInputIncrement,
} from "@/components/ui/number-input"
import {
  PasswordInput,
  PasswordInputControl,
  PasswordInputToggle,
} from "@/components/ui/password-input"
import { Rating } from "@/components/ui/rating"
import { Textarea } from "@/components/ui/textarea"
import { TimeInput } from "@/components/ui/time-input"
import type { TokenInputValue } from "@/components/ui/token-input"
import { TokenInput, TokenInputEditor } from "@/components/ui/token-input"
import type { TriggerMenuDataItem } from "@/components/ui/trigger-menu"
import {
  TriggerMenu,
  TriggerMenuContent,
  TriggerMenuEmpty,
  TriggerMenuGroup,
  TriggerMenuGroupLabel,
  TriggerMenuInput,
  TriggerMenuItem,
  TriggerMenuList,
} from "@/components/ui/trigger-menu"
import { Demo } from "@/src/demos/demo"

const applicants = [
  { id: "sato", name: "佐藤 美咲", job: "フロントエンドエンジニア" },
  { id: "tanaka", name: "田中 健太", job: "プロダクトデザイナー" },
  { id: "suzuki", name: "鈴木 陽菜", job: "カスタマーサクセス" },
  { id: "takahashi", name: "高橋 蓮", job: "経理" },
  { id: "ito", name: "伊藤 さくら", job: "フロントエンドエンジニア" },
]

const jobs = [
  "フロントエンドエンジニア",
  "プロダクトデザイナー",
  "カスタマーサクセス",
  "経理",
]

const staff = [
  { value: "yamamoto", label: "山本 直子", keywords: ["やまもと", "採用"] },
  { value: "nakamura", label: "中村 大輔", keywords: ["なかむら"] },
  { value: "kobayashi", label: "小林 由香", keywords: ["こばやし"] },
]

const stages = [
  { value: "document", label: "書類選考" },
  { value: "first", label: "一次面接" },
  { value: "second", label: "二次面接" },
  { value: "final", label: "最終面接" },
  { value: "offer", label: "内定" },
]

function formatDate(value: string) {
  return new Intl.DateTimeFormat("ja-JP", {
    month: "long",
    day: "numeric",
    weekday: "short",
  }).format(new Date(`${value}T00:00:00`))
}

function AutocompleteDemo() {
  const [query, setQuery] = useState("")
  const [submitted, setSubmitted] = useState<string | null>(null)

  return (
    <div className="flex w-full flex-col gap-3">
      <Field>
        <FieldLabel>応募者を検索</FieldLabel>
        <Autocomplete
          value={query}
          onValueChange={(value) => setQuery(value)}
          onSubmit={(value) => setSubmitted(value)}
          openOnFocus
        >
          <AutocompleteInput
            placeholder="氏名か職種を入力"
            showClear
            showTrigger
          />
          <AutocompleteContent>
            <AutocompleteEmpty>一致する応募者はいません</AutocompleteEmpty>
            <AutocompleteList>
              <AutocompleteGroup>
                <AutocompleteGroupLabel>応募者</AutocompleteGroupLabel>
                {applicants.map((applicant) => (
                  <AutocompleteItem
                    key={applicant.id}
                    value={applicant.name}
                    keywords={[applicant.job]}
                  >
                    <AutocompleteItemIcon>
                      <UserIcon aria-hidden="true" />
                    </AutocompleteItemIcon>
                    <AutocompleteItemText />
                    <span className="text-muted-foreground text-xs">
                      {applicant.job}
                    </span>
                  </AutocompleteItem>
                ))}
              </AutocompleteGroup>
              <AutocompleteGroup>
                <AutocompleteGroupLabel>職種</AutocompleteGroupLabel>
                {jobs.map((job) => (
                  <AutocompleteItem key={job} value={job}>
                    <AutocompleteItemIcon>
                      <SearchIcon aria-hidden="true" />
                    </AutocompleteItemIcon>
                    <AutocompleteItemText />
                  </AutocompleteItem>
                ))}
              </AutocompleteGroup>
            </AutocompleteList>
          </AutocompleteContent>
        </Autocomplete>
        <FieldDescription>
          候補にない言葉でもそのまま検索できます。Enter で検索します。
        </FieldDescription>
      </Field>
      <p className="text-muted-foreground text-sm">
        {submitted === null
          ? "まだ検索していません"
          : `「${submitted}」で検索しました`}
      </p>
    </div>
  )
}

const brandPresets = [
  "#2563eb",
  "#0d9488",
  "#16a34a",
  "#ea580c",
  "#e11d48",
  "#7c3aed",
  "#334155",
]

function ColorPickerDemo() {
  const [color, setColor] = useState("#2563eb")

  return (
    <div className="flex w-full flex-col gap-3">
      <Field>
        <FieldLabel>求人ページのテーマカラー</FieldLabel>
        <ColorPicker
          name="theme"
          format="hex"
          value={color}
          onValueChange={(value) => setColor(value)}
        >
          <ColorPickerArea>
            <ColorPickerAreaThumb />
          </ColorPickerArea>
          <ColorPickerSlider channel="hue" />
          <div className="flex items-center gap-2">
            <ColorPickerSwatch />
            <ColorPickerInput aria-label="テーマカラーのカラーコード" />
          </div>
          <ColorPickerSwatches aria-label="会社のブランドカラー">
            {brandPresets.map((preset) => (
              <ColorPickerSwatchItem key={preset} value={preset} />
            ))}
          </ColorPickerSwatches>
        </ColorPicker>
      </Field>
      <div
        className="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-white"
        style={{ backgroundColor: color }}
      >
        <span className="font-medium">フロントエンドエンジニア</span>
        <span>応募する</span>
      </div>
    </div>
  )
}

function DateInputDemo() {
  const [date, setDate] = useState<string | null>("2026-12-01")

  return (
    <div className="flex w-full flex-col gap-4">
      <h3 className="font-medium text-sm">内定承諾 ・ 佐藤 美咲</h3>
      <Field>
        <FieldLabel>入社予定日</FieldLabel>
        <DateInput
          locale="ja-JP"
          min="2026-11-16"
          max="2027-04-01"
          value={date}
          onValueChange={(value) => setDate(value)}
        />
        <FieldDescription>
          {date === null
            ? "年・月・日をすべて入力してください。"
            : `${formatDate(date)}から勤務開始です。`}
        </FieldDescription>
      </Field>
      <Field>
        <FieldLabel>内定通知日</FieldLabel>
        <DateInput locale="ja-JP" defaultValue="2026-11-13" readOnly />
      </Field>
    </div>
  )
}

function DatePickerDemo() {
  const [date, setDate] = useState<string | null>("2026-11-20")

  return (
    <div className="flex w-full flex-col gap-5">
      <Field>
        <FieldLabel>最終面接日</FieldLabel>
        <DatePicker
          locale="ja-JP"
          today="2026-11-15"
          min="2026-11-16"
          max="2026-12-25"
          unavailable={[{ weekday: [0, 6] }]}
          value={typeof date === "string" ? date : null}
          onValueChange={(value) => {
            setDate(typeof value === "string" ? value : null)
          }}
        >
          <DatePickerGroup>
            <DatePickerInput />
            <DatePickerClear aria-label="最終面接日を消去" />
            <DatePickerTrigger aria-label="最終面接日のカレンダーを開く" />
          </DatePickerGroup>
          <DatePickerHint>{(state) => `例: ${state.example}`}</DatePickerHint>
          <DatePickerContent>
            <DatePickerPresets>
              <DatePickerPreset value="2026-11-16">明日</DatePickerPreset>
              <DatePickerPreset value="2026-11-20">今週金曜</DatePickerPreset>
              <DatePickerPreset value="2026-11-23">来週月曜</DatePickerPreset>
            </DatePickerPresets>
            <DatePickerCalendar />
          </DatePickerContent>
        </DatePicker>
        <FieldDescription>
          {date === null
            ? "土日は選択できません。"
            : `鈴木 陽菜さんの最終面接を${formatDate(date)}に設定します。`}
        </FieldDescription>
      </Field>
      <FieldSet>
        <FieldLegend variant="label">求人の掲載期間</FieldLegend>
        <DatePicker
          mode="range"
          locale="ja-JP"
          today="2026-11-15"
          defaultValue={["2026-11-16", "2026-12-15"]}
          months={2}
        >
          <DatePickerGroup>
            <DatePickerInput aria-label="掲載開始日" />
            <DatePickerSeparator />
            <DatePickerInput end aria-label="掲載終了日" />
            <DatePickerTrigger aria-label="掲載期間のカレンダーを開く" />
          </DatePickerGroup>
          <DatePickerContent>
            <DatePickerCalendar months={2} />
          </DatePickerContent>
        </DatePicker>
      </FieldSet>
    </div>
  )
}

function FileInputDemo() {
  const [rejected, setRejected] = useState<string[]>([])

  return (
    <div className="flex w-full flex-col gap-3">
      <h3 className="font-medium text-sm">応募書類 ・ 高橋 蓮</h3>
      <Field>
        <FieldLabel>履歴書・職務経歴書</FieldLabel>
        <FileInput
          name="documents"
          multiple
          maxFiles={3}
          maxSize={5_000_000}
          accept={[".pdf", ".docx"]}
          onValueChange={() => setRejected([])}
          onReject={(files) => {
            setRejected(files.map((item) => item.file.name))
          }}
        >
          <FileInputDropzone>
            <p className="font-medium text-foreground">
              ここにファイルをドロップ
            </p>
            <p>PDF または Word、1ファイル5MBまで・3ファイルまで</p>
            <FileInputTrigger />
          </FileInputDropzone>
          <FileInputList aria-label="追加した応募書類">
            <FileInputItem />
          </FileInputList>
        </FileInput>
        {rejected.length > 0 && (
          <FieldError match>
            {`${rejected.join("、")} は追加できませんでした。形式とサイズを確認してください。`}
          </FieldError>
        )}
      </Field>
    </div>
  )
}

const portraitSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1200" viewBox="0 0 900 1200"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#dbeafe"/><stop offset="1" stop-color="#bfdbfe"/></linearGradient><linearGradient id="suit" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1e3a5f"/><stop offset="1" stop-color="#0f172a"/></linearGradient></defs><rect width="900" height="1200" fill="url(#bg)"/><circle cx="160" cy="180" r="90" fill="#ffffff" opacity="0.35"/><circle cx="760" cy="980" r="140" fill="#ffffff" opacity="0.25"/><path d="M180 1200c0-230 120-390 270-390s270 160 270 390z" fill="url(#suit)"/><path d="M400 820l50 120 50-120z" fill="#ffffff"/><rect x="405" y="690" width="90" height="140" rx="40" fill="#f2c9a5"/><ellipse cx="450" cy="560" rx="150" ry="180" fill="#f6d2b3"/><path d="M296 540c-6-150 70-240 160-240 104 0 166 90 152 230-40-70-120-110-200-100-50 6-90 40-112 110z" fill="#3b2a20"/><circle cx="395" cy="575" r="12" fill="#3b2a20"/><circle cx="505" cy="575" r="12" fill="#3b2a20"/><path d="M410 655q40 28 80 0" stroke="#b4705a" stroke-width="10" fill="none" stroke-linecap="round"/></svg>`

const portraitSrc = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(portraitSvg)}`

function ImageCropperDemo() {
  const [crop, setCrop] = useState<ImageCrop | null>(null)

  return (
    <div className="flex w-full flex-col gap-3">
      <h3 className="font-medium text-sm">応募者の証明写真 ・ 伊藤 さくら</h3>
      <ImageCropper
        aria-label="証明写真の切り抜き"
        src={portraitSrc}
        aspectRatio={3 / 4}
        maxZoom={3}
        onCropCommit={(value) => setCrop(value)}
      >
        <ImageCropperViewport className="max-h-80">
          <ImageCropperImage alt="伊藤 さくらさんの証明写真" />
          <ImageCropperSelection>
            <ImageCropperGrid />
            <ImageCropperHandle position="nw" />
            <ImageCropperHandle position="ne" />
            <ImageCropperHandle position="sw" />
            <ImageCropperHandle position="se" />
          </ImageCropperSelection>
        </ImageCropperViewport>
        <div className="flex items-center gap-2">
          <ImageCropperZoom />
          <ImageCropperRotate />
          <ImageCropperFlip />
        </div>
      </ImageCropper>
      <p className="text-muted-foreground text-sm tabular-nums">
        {crop === null
          ? "枠をドラッグして、履歴書に載せる範囲を決めてください(縦4:横3)"
          : `${Math.round(crop.width)} × ${Math.round(crop.height)} px で切り抜きます`}
      </p>
    </div>
  )
}

function NumberInputDemo() {
  const [headcount, setHeadcount] = useState<number | null>(2)
  const [salary, setSalary] = useState<number | null>(650)

  return (
    <div className="flex w-full flex-col gap-4">
      <h3 className="font-medium text-sm">
        募集条件 ・ フロントエンドエンジニア
      </h3>
      <Field>
        <FieldLabel>採用人数</FieldLabel>
        <NumberInput
          min={1}
          max={10}
          value={headcount}
          onValueChange={(value) => setHeadcount(value)}
        >
          <NumberInputGroup className="w-36">
            <NumberInputDecrement aria-label="採用人数を減らす" />
            <NumberInputControl />
            <NumberInputIncrement aria-label="採用人数を増やす" />
          </NumberInputGroup>
        </NumberInput>
      </Field>
      <Field>
        <FieldLabel>提示年収(万円)</FieldLabel>
        <NumberInput
          min={300}
          max={1500}
          step={10}
          largeStep={50}
          value={salary}
          onValueChange={(value) => setSalary(value)}
        >
          <NumberInputGroup className="w-44">
            <NumberInputDecrement aria-label="提示年収を減らす" />
            <NumberInputControl />
            <NumberInputIncrement aria-label="提示年収を増やす" />
          </NumberInputGroup>
        </NumberInput>
        <FieldDescription>
          {headcount === null || salary === null
            ? "人数と年収を入力してください。"
            : `採用予算の目安は${(headcount * salary).toLocaleString("ja-JP")}万円です。`}
        </FieldDescription>
      </Field>
    </div>
  )
}

function PasswordInputDemo() {
  const [password, setPassword] = useState("")

  const isLong = password.length >= 12

  return (
    <div className="flex w-full flex-col gap-3">
      <h3 className="font-medium text-sm">外部面接官の招待 ・ 中村 大輔</h3>
      <Field>
        <FieldLabel>閲覧用パスワード</FieldLabel>
        <PasswordInput
          name="password"
          autoComplete="new-password"
          value={password}
          onValueChange={(value) => setPassword(value)}
        >
          <PasswordInputControl placeholder="12文字以上" />
          <PasswordInputToggle />
        </PasswordInput>
        <FieldDescription>
          {password.length === 0
            ? "評価シートを開くときに使います。"
            : isLong
              ? "十分な長さです。"
              : `あと${12 - password.length}文字必要です。`}
        </FieldDescription>
      </Field>
    </div>
  )
}

const criteria = [
  { id: "skill", label: "技術力" },
  { id: "communication", label: "コミュニケーション" },
  { id: "culture", label: "カルチャーフィット" },
]

function RatingDemo() {
  const [scores, setScores] = useState<Record<string, number | null>>({
    skill: 4,
    communication: 3.5,
    culture: null,
  })

  const rated = Object.values(scores).filter(
    (score): score is number => score !== null,
  )

  const average =
    rated.length === 0
      ? null
      : rated.reduce((sum, score) => sum + score, 0) / rated.length

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h3 className="font-medium text-sm">一次面接の評価</h3>
        <p className="text-muted-foreground text-sm">
          田中 健太 ・ プロダクトデザイナー
        </p>
      </div>
      <FieldGroup className="gap-4">
        {criteria.map((item) => (
          <Field
            key={item.id}
            orientation="horizontal"
            className="justify-between"
          >
            <FieldLabel>{item.label}</FieldLabel>
            <Rating
              step={0.5}
              deselectable
              value={scores[item.id] ?? null}
              onValueChange={(value) => {
                setScores((current) => ({ ...current, [item.id]: value }))
              }}
            />
          </Field>
        ))}
      </FieldGroup>
      <div className="flex items-center justify-between border-t pt-3">
        <span className="font-medium text-sm">
          総合 {average === null ? "-" : average.toFixed(1)}
        </span>
        <Rating aria-label="総合評価" readOnly value={average} />
      </div>
    </div>
  )
}

function TimeInputDemo() {
  const [start, setStart] = useState<string | null>("14:00")
  const [end, setEnd] = useState<string | null>("15:00")

  function minutes(value: string) {
    const [hour, minute] = value.split(":").map(Number)
    return (hour ?? 0) * 60 + (minute ?? 0)
  }

  const length =
    start !== null && end !== null ? minutes(end) - minutes(start) : null

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h3 className="font-medium text-sm">二次面接の時間</h3>
        <p className="text-muted-foreground text-sm">
          11月18日(水) ・ 佐藤 美咲 ・ 面接官 山本 直子
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Field>
          <FieldLabel>開始時刻</FieldLabel>
          <TimeInput
            locale="ja-JP"
            min="09:00"
            max="18:00"
            value={start}
            onValueChange={(value) => setStart(value)}
          />
        </Field>
        <Field>
          <FieldLabel>終了時刻</FieldLabel>
          <TimeInput
            locale="ja-JP"
            min="09:00"
            max="18:00"
            value={end}
            onValueChange={(value) => setEnd(value)}
          />
        </Field>
      </div>
      <p className="text-muted-foreground text-sm">
        {length === null
          ? "開始と終了の時刻を入力してください。"
          : length <= 0
            ? "終了時刻は開始時刻より後にしてください。"
            : `所要時間は${length}分です。営業時間は9:00〜18:00です。`}
      </p>
    </div>
  )
}

const initialMessage: TokenInputValue = [
  { type: "mention", value: "nakamura", label: "中村 大輔" },
  " さん、佐藤 美咲さんの二次面接をお願いします。",
]

function mentionsOf(value: TokenInputValue) {
  return value.flatMap((segment) =>
    typeof segment !== "string" && segment.type === "mention"
      ? [segment.label]
      : [],
  )
}

function TokenInputDemo() {
  const [message, setMessage] = useState<TokenInputValue>(initialMessage)

  const mentions = mentionsOf(message)

  return (
    <div className="flex w-full flex-col gap-3">
      <Field>
        <FieldLabel>面接官への依頼メッセージ</FieldLabel>
        <TokenInput
          value={message}
          onValueChange={(value) => setMessage(value)}
        >
          <TokenInputEditor placeholder="@ で担当者をメンション" />
          <TriggerMenu
            triggers={[{ char: "@", type: "mention", items: staff }]}
          >
            <TriggerMenuContent>
              <TriggerMenuEmpty>該当する担当者はいません</TriggerMenuEmpty>
              <TriggerMenuList>
                {(state) =>
                  (state.items as TriggerMenuDataItem[]).map((item) => (
                    <TriggerMenuItem
                      key={item.value}
                      value={item.value}
                      label={item.label}
                    >
                      <UserIcon aria-hidden="true" />
                      {item.label}
                    </TriggerMenuItem>
                  ))
                }
              </TriggerMenuList>
            </TriggerMenuContent>
          </TriggerMenu>
        </TokenInput>
        <FieldDescription>
          {mentions.length === 0
            ? "メンションした担当者に通知が届きます。"
            : `${mentions.join("、")}に通知が届きます。`}
        </FieldDescription>
      </Field>
    </div>
  )
}

function TriggerMenuDemo() {
  return (
    <div className="flex w-full flex-col gap-3">
      <TriggerMenu
        triggers={[
          { char: "@", items: staff },
          { char: "#", items: stages },
        ]}
      >
        <Field>
          <FieldLabel>選考メモ</FieldLabel>
          <TriggerMenuInput
            render={<Textarea defaultValue="#一次面接 通過。" />}
            placeholder="@ で担当者、# で選考ステージを挿入"
          />
          <FieldDescription>
            鈴木 陽菜 ・ カスタマーサクセス。メモは採用チームだけが見られます。
          </FieldDescription>
        </Field>
        <TriggerMenuContent>
          <TriggerMenuEmpty>候補がありません</TriggerMenuEmpty>
          <TriggerMenuList>
            {(state) => (
              <TriggerMenuGroup>
                <TriggerMenuGroupLabel>
                  {state.trigger === "#" ? "選考ステージ" : "担当者"}
                </TriggerMenuGroupLabel>
                {(state.items as TriggerMenuDataItem[]).map((item) => (
                  <TriggerMenuItem
                    key={item.value}
                    value={item.value}
                    label={item.label}
                  >
                    {item.label}
                  </TriggerMenuItem>
                ))}
              </TriggerMenuGroup>
            )}
          </TriggerMenuList>
        </TriggerMenuContent>
      </TriggerMenu>
    </div>
  )
}

export function SdkInputDemos() {
  return (
    <>
      <Demo name="autocomplete">
        <AutocompleteDemo />
      </Demo>
      <Demo name="color-picker">
        <ColorPickerDemo />
      </Demo>
      <Demo name="date-input">
        <DateInputDemo />
      </Demo>
      <Demo name="date-picker">
        <DatePickerDemo />
      </Demo>
      <Demo name="file-input">
        <FileInputDemo />
      </Demo>
      <Demo name="image-cropper">
        <ImageCropperDemo />
      </Demo>
      <Demo name="number-input">
        <NumberInputDemo />
      </Demo>
      <Demo name="password-input">
        <PasswordInputDemo />
      </Demo>
      <Demo name="rating">
        <RatingDemo />
      </Demo>
      <Demo name="time-input">
        <TimeInputDemo />
      </Demo>
      <Demo name="token-input">
        <TokenInputDemo />
      </Demo>
      <Demo name="trigger-menu">
        <TriggerMenuDemo />
      </Demo>
    </>
  )
}
