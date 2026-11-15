import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type NoteProps = {
  children: string
  className?: string
}

function Note(props: NoteProps) {
  return (
    <span
      className={`w-fit text-muted-foreground text-xs ${props.className ?? ""}`}
    >
      {props.children}
    </span>
  )
}

const frame = "overflow-hidden rounded-2xl border bg-sidebar"

const nameBlock = "h-4 w-20 shrink-0 rounded-full bg-foreground"

const actionBlock = "h-7 w-12 shrink-0 rounded-full bg-secondary"

function Regions() {
  return (
    <div className={`${frame} flex flex-col`}>
      <div className="px-6 py-4 font-medium text-sm">{"ヘッダー"}</div>
      <div className="flex">
        <div className="w-28 shrink-0 px-6 py-4 font-medium text-sm sm:w-48">
          {"サイドバー"}
        </div>
        <div className="mb-6 flex h-40 min-w-0 flex-1 rounded-l-2xl bg-page p-6 font-medium text-sm">
          {"ページ"}
        </div>
      </div>
    </div>
  )
}

const roles = [
  {
    region: "ヘッダー",
    scope: "サービス全体",
    holds: "サービスのタイトル、どのページでも使う設定",
    never: "ページごとの操作",
  },
  {
    region: "サイドバー",
    scope: "ページの間",
    holds: "ページを移動するナビゲーション",
    never: "タイトル、設定",
  },
  {
    region: "ページ",
    scope: "そのページ",
    holds: "ページの中身、ページの操作",
    never: "ほかのページへの移動の一覧",
  },
]

function Roles() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>{"領域"}</TableHead>
          <TableHead>{"効く範囲"}</TableHead>
          <TableHead>{"置くもの"}</TableHead>
          <TableHead>{"置かないもの"}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {roles.map((role) => (
          <TableRow key={role.region}>
            <TableCell className="font-medium">{role.region}</TableCell>
            <TableCell>{role.scope}</TableCell>
            <TableCell className="whitespace-normal">{role.holds}</TableCell>
            <TableCell className="whitespace-normal text-muted-foreground">
              {role.never}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

const rows = [
  {
    label: "ヘッダー",
    name: "サービスのタイトル",
    action: "どのページでも使う設定",
    surface: "bg-sidebar",
  },
  {
    label: "ページの頭",
    name: "ページのタイトル",
    action: "ページ全体に効く操作",
    surface: "bg-page",
  },
  {
    label: "セクションの頭",
    name: "セクションの見出し",
    action: "そのセクションに効く操作",
    surface: "bg-card",
  },
]

function Ends() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between px-4">
        <Note>{"左端：それが何か"}</Note>
        <Note>{"右端：それにできること"}</Note>
      </div>
      {rows.map((row) => (
        <div
          key={row.label}
          className={`flex flex-col gap-2 rounded-2xl border p-4 ${row.surface}`}
        >
          <Note>{row.label}</Note>
          <div className="flex items-center gap-3">
            <span className={nameBlock} />
            <span className="text-xs">{row.name}</span>
            <span className="ml-auto text-xs">{row.action}</span>
            <span className={actionBlock} />
          </div>
        </div>
      ))}
    </div>
  )
}

function Hierarchy() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="flex flex-col gap-4 rounded-2xl bg-page p-4">
        <Note>{"ページ"}</Note>
        <div className="flex flex-col gap-2 rounded-xl border border-muted-foreground border-dashed p-3">
          <Note>{"頭：タイトル、説明、ページの操作"}</Note>
        </div>
        <div className="flex flex-col gap-2 rounded-xl bg-card p-3">
          <Note>{"セクション：見出し、中身、セクションの操作"}</Note>
        </div>
        <div className="flex flex-col gap-2 rounded-xl bg-card p-3">
          <Note>{"セクション"}</Note>
        </div>
        <div className="flex flex-col gap-2 rounded-xl bg-card p-3">
          <Note>{"セクション"}</Note>
        </div>
      </div>
      <div className="flex flex-col gap-4 rounded-2xl bg-page p-4">
        <Note>{"同じ形のものが並ぶとき"}</Note>
        <div className="flex flex-col gap-2 rounded-xl border border-muted-foreground border-dashed p-3">
          <Note>{"見出しは Card の外"}</Note>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-xl bg-card p-3">
            <Note>{"1件"}</Note>
          </div>
          <div className="rounded-xl bg-card p-3">
            <Note>{"1件"}</Note>
          </div>
          <div className="rounded-xl bg-card p-3">
            <Note>{"1件"}</Note>
          </div>
        </div>
      </div>
    </div>
  )
}

const gaps = [
  { size: 24, label: "24px", use: "カードとカード、セクションの間" },
  { size: 16, label: "16px", use: "セクションの中" },
  { size: 8, label: "8px", use: "横に並ぶ操作の間" },
]

function Spacing() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="flex flex-col gap-3">
        <Note>{"端からの余白：点線が 24px の線"}</Note>
        <div className={`${frame} relative flex flex-col`}>
          <span className="absolute inset-y-0 left-6 z-10 border-muted-foreground border-l border-dashed" />
          <span className="absolute inset-y-0 right-6 z-10 border-muted-foreground border-l border-dashed" />
          <div className="flex items-center justify-between px-6 py-3">
            <span className={nameBlock} />
            <span className={actionBlock} />
          </div>
          <div className="flex">
            <div className="w-24 shrink-0 py-3 pl-6">
              <span className="block h-3 w-12 rounded-full bg-foreground" />
            </div>
            <div className="mb-6 min-w-0 flex-1 rounded-l-2xl bg-page py-6 pr-6 pl-6">
              <span className="block h-12 rounded-xl bg-card" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Note>{"間隔：3段階"}</Note>
        <div
          className={`${frame} flex flex-1 flex-col justify-center gap-4 p-6`}
        >
          {gaps.map((gap) => (
            <div key={gap.size} className="flex items-center gap-4">
              <div className="flex w-24 shrink-0 items-center">
                <span className="h-7 w-8 rounded-md bg-secondary" />
                <span style={{ width: gap.size }} />
                <span className="h-7 w-8 rounded-md bg-secondary" />
              </div>
              <span className="w-10 font-medium text-xs">{gap.label}</span>
              <Note>{gap.use}</Note>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const layoutDiagrams: Record<string, () => React.ReactNode> = {
  regions: Regions,
  roles: Roles,
  ends: Ends,
  hierarchy: Hierarchy,
  spacing: Spacing,
}
