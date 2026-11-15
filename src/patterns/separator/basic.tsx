import { Separator } from "@/components/ui/separator"

export function SeparatorBasic() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 text-sm">
      <div className="flex flex-col gap-1">
        <span className="font-medium">注文 #10482</span>
        <span className="text-muted-foreground">
          株式会社みなと商事・11月12日
        </span>
      </div>
      <Separator />
      <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
        <dt className="text-muted-foreground">小計</dt>
        <dd className="text-right tabular-nums">¥61,910</dd>
        <dt className="text-muted-foreground">消費税</dt>
        <dd className="text-right tabular-nums">¥6,190</dd>
      </dl>
      <Separator />
      <div className="flex justify-between font-medium">
        <span>合計</span>
        <span className="tabular-nums">¥68,100</span>
      </div>
    </div>
  )
}
