type FigureProps = {
  name: string
  label: string
  children: React.ReactNode
}

function Figure(props: FigureProps) {
  return (
    <div className="flex flex-col gap-2">
      {props.children}
      <span className="text-muted-foreground text-xs">
        <span className="font-medium text-foreground">{props.name}</span>
        {` ${props.label}`}
      </span>
    </div>
  )
}

const tile = "h-40 overflow-hidden rounded-2xl border bg-card"

const label = "h-2.5 w-16 rounded-full bg-foreground"

const input = "h-8 rounded-full border bg-muted"

const line = "h-2.5 rounded-full bg-muted"

function Forms() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Figure name="Field" label="ラベルと入力欄の1組">
        <div className={`${tile} flex flex-col justify-center gap-2 p-6`}>
          <span className={label} />
          <span className={input} />
        </div>
      </Figure>
      <Figure name="FieldGroup" label="Field を縦に積む">
        <div className={`${tile} flex flex-col justify-center gap-3 p-6`}>
          <div className="flex flex-col gap-1.5">
            <span className={label} />
            <span className="h-6 rounded-full border bg-muted" />
          </div>
          <div className="flex flex-col gap-1.5">
            <span className={label} />
            <span className="h-6 rounded-full border bg-muted" />
          </div>
          <div className="flex flex-col gap-1.5">
            <span className={label} />
            <span className="h-6 rounded-full border bg-muted" />
          </div>
        </div>
      </Figure>
    </div>
  )
}

function States() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <Figure name="Empty" label="まだ中身がない">
        <div
          className={`${tile} flex flex-col items-center justify-center gap-3 border-dashed p-6`}
        >
          <span className="size-8 rounded-full bg-muted" />
          <span className={`${line} w-24`} />
          <span className="h-7 w-20 rounded-full bg-secondary" />
        </div>
      </Figure>
      <Figure name="Skeleton" label="読み込んでいる">
        <div className={`${tile} flex flex-col justify-center gap-3 p-6`}>
          <div className="flex items-center gap-3">
            <span className="size-8 shrink-0 rounded-full bg-muted" />
            <span className={`${line} w-24`} />
          </div>
          <span className={`${line} w-full`} />
          <span className={`${line} w-2/3`} />
        </div>
      </Figure>
      <Figure name="Progress" label="時間のかかる処理">
        <div className={`${tile} flex flex-col justify-center gap-3 p-6`}>
          <span className={`${line} w-20`} />
          <span className="h-2.5 overflow-hidden rounded-full bg-muted">
            <span className="block h-full w-3/5 rounded-full bg-primary" />
          </span>
        </div>
      </Figure>
    </div>
  )
}

const backdrop = "absolute inset-0 bg-foreground/25"

function Overlays() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <Figure name="Dialog" label="その場で終わる作業">
        <div className="relative h-40 overflow-hidden rounded-2xl border bg-page">
          <span className={backdrop} />
          <div className="absolute inset-x-8 inset-y-6 flex flex-col gap-2 rounded-xl bg-card p-4">
            <span className={label} />
            <span className={`${line} w-full`} />
            <span className={`${line} w-2/3`} />
          </div>
        </div>
      </Figure>
      <Figure name="Sheet" label="一覧を見ながらの詳細">
        <div className="relative flex h-40 overflow-hidden rounded-2xl border bg-page">
          <div className="flex flex-1 flex-col gap-2 p-4">
            <span className="h-5 rounded-md bg-card" />
            <span className="h-5 rounded-md bg-card" />
            <span className="h-5 rounded-md bg-card" />
            <span className="h-5 rounded-md bg-card" />
          </div>
          <span className={backdrop} />
          <div className="absolute inset-y-0 right-0 flex w-1/2 flex-col gap-2 bg-card p-4">
            <span className={label} />
            <span className={`${line} w-full`} />
            <span className={`${line} w-2/3`} />
          </div>
        </div>
      </Figure>
      <Figure name="AlertDialog" label="取り消せない操作の確認">
        <div className="relative h-40 overflow-hidden rounded-2xl border bg-page">
          <span className={backdrop} />
          <div className="absolute inset-x-12 inset-y-9 flex flex-col justify-between rounded-xl bg-card p-4">
            <span className={label} />
            <div className="flex justify-end gap-2">
              <span className="h-6 w-12 rounded-full bg-secondary" />
              <span className="h-6 w-12 rounded-full bg-destructive" />
            </div>
          </div>
        </div>
      </Figure>
    </div>
  )
}

function Code() {
  return (
    <Figure name="CodeBlock" label="どのテーマでも暗い面">
      <div className="flex flex-col gap-2.5 rounded-2xl bg-neutral-950 p-6">
        <span className="h-2.5 w-40 rounded-full bg-white/40" />
        <span className="ml-6 h-2.5 w-56 max-w-[70%] rounded-full bg-white/25" />
        <span className="ml-6 h-2.5 w-32 rounded-full bg-white/25" />
        <span className="h-2.5 w-16 rounded-full bg-white/40" />
      </div>
    </Figure>
  )
}

export const choosingDiagrams: Record<string, () => React.ReactNode> = {
  forms: Forms,
  states: States,
  overlays: Overlays,
  code: Code,
}
