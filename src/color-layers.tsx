import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { colorTokens } from "@/src/guidelines"

type CaptionProps = {
  token: string
  label: string
}

function Caption(props: CaptionProps) {
  return (
    <span className="text-muted-foreground text-xs">
      <span className="font-medium text-foreground">{props.token}</span>
      {` ${props.label}`}
    </span>
  )
}

const secondaryShape = "h-8 w-20 shrink-0 rounded-full bg-secondary"

const primaryShape = "h-8 w-20 shrink-0 rounded-full bg-primary"

function Overview() {
  return (
    <div className="flex gap-6 rounded-2xl border bg-sidebar p-6">
      <div className="flex w-20 shrink-0 flex-col gap-2 sm:w-36">
        <span className="h-8 rounded-full bg-secondary" />
      </div>
      <div className="min-w-0 flex-1 rounded-2xl bg-page p-6">
        <div className="flex flex-col gap-6 rounded-2xl bg-card p-6">
          <span className="h-16 rounded-xl bg-muted" />
          <div className="flex justify-end gap-2">
            <span className={secondaryShape} />
            <span className={primaryShape} />
          </div>
        </div>
      </div>
    </div>
  )
}

const surfaces = [
  { token: "sidebar", label: "枠組み" },
  { token: "page", label: "ページの地" },
  { token: "card", label: "面" },
  { token: "muted", label: "薄い面" },
]

function Surfaces() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {surfaces.map((surface) => (
        <div key={surface.token} className="flex flex-col gap-2">
          <span
            className="h-20 rounded-2xl border"
            style={{ backgroundColor: `var(--${surface.token})` }}
          />
          <Caption token={surface.token} label={surface.label} />
        </div>
      ))}
    </div>
  )
}

function Layering() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      <div className="flex flex-col gap-2">
        <div className="h-32 rounded-2xl border bg-sidebar" />
        <Caption token="sidebar" label="まず枠組み" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex h-32 rounded-2xl border bg-sidebar p-3">
          <div className="flex-1 rounded-xl bg-page" />
        </div>
        <Caption token="page" label="その上にページの地" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex h-32 rounded-2xl border bg-sidebar p-3">
          <div className="flex flex-1 rounded-xl bg-page p-3">
            <div className="flex-1 rounded-lg bg-card" />
          </div>
        </div>
        <Caption token="card" label="その上に面" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex h-32 rounded-2xl border bg-sidebar p-3">
          <div className="flex flex-1 rounded-xl bg-page p-3">
            <div className="flex flex-1 rounded-lg bg-card p-3">
              <div className="flex-1 rounded-md bg-muted" />
            </div>
          </div>
        </div>
        <Caption token="muted" label="面の中に薄い面" />
      </div>
    </div>
  )
}

function Actions() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {surfaces.map((surface) => (
          <div key={surface.token} className="flex flex-col gap-2">
            <div
              className="flex flex-col items-center gap-3 rounded-2xl border p-6"
              style={{ backgroundColor: `var(--${surface.token})` }}
            >
              <span
                className={
                  surface.token === "page"
                    ? "h-8 w-20 shrink-0 rounded-full bg-card"
                    : secondaryShape
                }
              />
              <span className={primaryShape} />
            </div>
            <Caption token={surface.token} label="の上" />
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-1">
        <Caption
          token="secondary"
          label="上の形。サブの操作と選択中。page の上では card の色"
        />
        <Caption token="primary" label="下の形。主要な操作" />
      </div>
    </div>
  )
}

function Text() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <div className="flex flex-col gap-2">
        <div className="flex h-20 items-center rounded-2xl bg-card px-6">
          <span className="h-3 w-full rounded-full bg-foreground" />
        </div>
        <Caption token="foreground" label="文字" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex h-20 items-center rounded-2xl bg-card px-6">
          <span className="h-3 w-full rounded-full bg-muted-foreground" />
        </div>
        <Caption token="muted-foreground" label="控えめな文字" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex h-20 items-center rounded-2xl bg-card px-6">
          <span className="h-px w-full bg-border" />
        </div>
        <Caption token="border" label="線" />
      </div>
    </div>
  )
}

function Tokens() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>{"トークン"}</TableHead>
          <TableHead>{"役割"}</TableHead>
          <TableHead>{"ライト"}</TableHead>
          <TableHead>{"ダーク"}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {colorTokens.map((color) => (
          <TableRow key={color.tokens[0]}>
            <TableCell>
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="size-8 shrink-0 rounded-md border"
                  style={{ backgroundColor: `var(--${color.tokens[0]})` }}
                />
                <span className="whitespace-normal font-medium">
                  {color.tokens.join(", ")}
                </span>
              </div>
            </TableCell>
            <TableCell className="whitespace-normal">{color.role}</TableCell>
            <TableCell className="text-muted-foreground">
              {color.light}
            </TableCell>
            <TableCell className="text-muted-foreground">
              {color.dark}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export const colorDiagrams: Record<string, () => React.ReactNode> = {
  overview: Overview,
  surfaces: Surfaces,
  layering: Layering,
  actions: Actions,
  text: Text,
  tokens: Tokens,
}
