import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function SeparatorWithLabel() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Button>CSV ファイルを選ぶ</Button>
      <div className="flex items-center gap-3">
        <Separator decorative className="flex-1" />
        <span className="text-muted-foreground text-xs">または</span>
        <Separator decorative className="flex-1" />
      </div>
      <Button variant="outline">取引先を1件ずつ登録する</Button>
    </div>
  )
}
